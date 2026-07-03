import { readFileSync } from "node:fs";
import { join } from "node:path";

const source = readFileSync(
  join(process.cwd(), "app", "income-tax-calculator-malaysia", "IncomeTaxCalculator.tsx"),
  "utf8",
);

const required = [
  "useLang",
  "RICH_DAD_COPY",
  "ratRaceTitle",
  "richDadLesson",
  "assetAction",
  "taxedCashFlow",
];

const missing = required.filter((token) => !source.includes(token));

for (const lang of ["en", "bm", "zh"]) {
  if (!new RegExp(`${lang}:\\s*{[\\s\\S]*?ratRaceTitle:[\\s\\S]*?richDadLesson:[\\s\\S]*?assetAction:`).test(source)) {
    missing.push(`missing rich dad copy for ${lang}`);
  }
}

if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log("income tax Rich Dad UI copy ok");
