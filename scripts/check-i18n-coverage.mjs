import { readFileSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";

const root = process.cwd();
const heroPath = join(root, "components", "ToolPageHero.tsx");
const heroSource = readFileSync(heroPath, "utf8");
const articlePath = join(root, "content", "articles.ts");
const articleSource = readFileSync(articlePath, "utf8");

const requiredPages = [
  "financialFreedom",
  "mortgage",
  "salary",
  "epf",
  "loan",
  "dsr",
  "savings",
  "compound",
  "carLoan",
  "incomeTax",
];

const requiredLangs = ["en", "bm", "zh"];
const missing = [];

for (const page of requiredPages) {
  if (!heroSource.includes(`${page}:`)) {
    missing.push(`missing page key ${page}`);
    continue;
  }

  for (const lang of requiredLangs) {
    const langPattern = new RegExp(`${page}:[\\s\\S]*?${lang}:\\s*{[\\s\\S]*?title:[\\s\\S]*?description:`);
    if (!langPattern.test(heroSource)) {
      missing.push(`${page} missing ${lang} title/description`);
    }
  }
}

const articleSourceFile = ts.createSourceFile(
  articlePath,
  articleSource,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS,
);

const articlesExpression = findExportedConstInitializer(articleSourceFile, "articles");

if (!articlesExpression) {
  missing.push("missing exported articles array in content/articles.ts");
} else {
  const articles = expressionToValue(articlesExpression);

  if (!Array.isArray(articles)) {
    missing.push("content/articles.ts articles export must be an array");
  } else {
    for (const article of articles) {
      const slug = typeof article?.slug === "string" && article.slug.trim() ? article.slug : "(missing slug)";

      checkLocalizedText(article?.title, slug, "title");
      checkLocalizedText(article?.summary, slug, "summary");
      checkLocalizedText(article?.why, slug, "why");
      checkLocalizedText(article?.what, slug, "what");
      checkLocalizedText(article?.story, slug, "story");

      if (!Array.isArray(article?.action)) {
        missing.push(`${slug} action must be an array`);
      } else {
        article.action.forEach((item, index) => checkLocalizedText(item, slug, `action[${index}]`));
      }

      if (!Array.isArray(article?.comparison)) {
        missing.push(`${slug} comparison must be an array`);
      } else {
        article.comparison.forEach((row, index) => {
          checkLocalizedText(row?.ordinary, slug, `comparison[${index}].ordinary`);
          checkLocalizedText(row?.successful, slug, `comparison[${index}].successful`);
        });
      }
    }
  }
}

if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log(`i18n hero coverage ok: ${requiredPages.length} pages x ${requiredLangs.length} languages`);
console.log(`i18n article coverage ok: ${expressionToValue(articlesExpression).length} articles x ${requiredLangs.length} languages`);

function findExportedConstInitializer(sourceFile, name) {
  let initializer;

  sourceFile.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) {
      return;
    }

    for (const declaration of node.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.name.text === name) {
        initializer = declaration.initializer;
      }
    }
  });

  return initializer;
}

function expressionToValue(expression) {
  if (!expression) {
    return undefined;
  }

  if (ts.isAsExpression(expression) || ts.isSatisfiesExpression(expression)) {
    return expressionToValue(expression.expression);
  }

  if (ts.isArrayLiteralExpression(expression)) {
    return expression.elements.map((element) => expressionToValue(element));
  }

  if (ts.isObjectLiteralExpression(expression)) {
    const value = {};

    for (const property of expression.properties) {
      if (!ts.isPropertyAssignment(property)) {
        continue;
      }

      const key = propertyNameToString(property.name);
      if (!key) {
        continue;
      }

      value[key] = expressionToValue(property.initializer);
    }

    return value;
  }

  if (ts.isStringLiteral(expression) || ts.isNoSubstitutionTemplateLiteral(expression)) {
    return expression.text;
  }

  if (expression.kind === ts.SyntaxKind.TrueKeyword) {
    return true;
  }

  if (expression.kind === ts.SyntaxKind.FalseKeyword) {
    return false;
  }

  return undefined;
}

function propertyNameToString(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }

  return undefined;
}

function checkLocalizedText(value, slug, field) {
  for (const lang of requiredLangs) {
    if (typeof value?.[lang] !== "string" || !value[lang].trim()) {
      missing.push(`${slug} missing ${field}.${lang}`);
    }
  }
}
