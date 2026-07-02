import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const heroPath = join(root, "components", "ToolPageHero.tsx");
const heroSource = readFileSync(heroPath, "utf8");

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

if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log(`i18n hero coverage ok: ${requiredPages.length} pages x ${requiredLangs.length} languages`);
