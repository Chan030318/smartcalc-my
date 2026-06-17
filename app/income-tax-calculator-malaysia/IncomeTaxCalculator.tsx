"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { trackIncomeTaxCalculated } from "@/lib/gtag";

// ─── Tax brackets YA 2024, resident individual ────────────────────────────────
const BRACKETS = [
  { upto: 5_000, rate: 0 },
  { upto: 20_000, rate: 0.01 },
  { upto: 35_000, rate: 0.03 },
  { upto: 50_000, rate: 0.08 },
  { upto: 70_000, rate: 0.13 },
  { upto: 100_000, rate: 0.21 },
  { upto: 400_000, rate: 0.24 },
  { upto: 600_000, rate: 0.245 },
  { upto: 2_000_000, rate: 0.25 },
  { upto: Infinity, rate: 0.3 },
];

interface BracketRow {
  range: string;
  rate: string;
  chargeable: number;
  tax: number;
}

interface TaxResult {
  annualIncome: number;
  totalRelief: number;
  chargeableIncome: number;
  taxPayable: number;
  effectiveRate: number;
  monthlyPcb: number;
  bracketRows: BracketRow[];
}

function calcTax(chargeableIncome: number): { tax: number; rows: BracketRow[] } {
  if (chargeableIncome <= 0) return { tax: 0, rows: [] };
  let tax = 0;
  let prev = 0;
  const rows: BracketRow[] = [];

  for (const b of BRACKETS) {
    if (chargeableIncome <= prev) break;
    const slice = Math.min(chargeableIncome, b.upto) - prev;
    const bracketTax = slice * b.rate;
    tax += bracketTax;

    const lower = prev === 0 ? 0 : prev + 1;
    const upper = b.upto === Infinity ? "above" : b.upto;
    const range =
      b.upto === Infinity
        ? `Above RM ${fmt(prev)}`
        : prev === 0
        ? `First RM ${fmt(b.upto)}`
        : `RM ${fmt(lower)} – RM ${fmt(b.upto as number)}`;

    rows.push({
      range,
      rate: `${(b.rate * 100).toFixed(1)}%`,
      chargeable: r2(slice),
      tax: r2(bracketTax),
    });
    prev = b.upto === Infinity ? prev : b.upto;
  }

  return { tax: r2(tax), rows };
}

function r2(n: number) {
  return Math.round(n * 100) / 100;
}

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function fmtDec(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function capRelief(val: string, cap: number): number {
  const n = parseFloat(val.replace(/,/g, "")) || 0;
  return Math.min(Math.max(n, 0), cap);
}

const PERSONAL_RELIEF = 9_000;

const faqs = [
  {
    q: "Who needs to file income tax in Malaysia?",
    a: "Malaysian residents with an annual income exceeding RM34,000 (after EPF deduction) are required to register and file their income tax with LHDN (Lembaga Hasil Dalam Negeri). Non-residents pay a flat rate of 30% on Malaysian-sourced income.",
  },
  {
    q: "What is chargeable income?",
    a: "Chargeable income is your total annual income minus all eligible tax reliefs and deductions. It is the amount that income tax rates are actually applied to. Reducing your chargeable income through reliefs is the most effective way to lower your tax bill.",
  },
  {
    q: "What is the personal relief amount for 2024?",
    a: "Every Malaysian tax resident automatically receives a personal relief of RM9,000 per year. No documentation is required — it is deducted from your income before tax is calculated.",
  },
  {
    q: "Can I claim EPF contributions as a tax relief?",
    a: "Yes. EPF contributions (and/or life insurance premiums) are claimable up to a combined maximum of RM7,000 per year. If you contribute 11% of your salary to EPF, you will typically max out this relief at salaries above roughly RM5,300/month.",
  },
  {
    q: "What is the difference between tax relief and tax rebate?",
    a: "Tax reliefs reduce your chargeable income before the tax rate is applied — they save you money proportional to your tax bracket. Tax rebates (like the RM400 rebate for income below RM35,000) are deducted directly from the tax payable after calculation, giving a fixed ringgit-for-ringgit reduction.",
  },
  {
    q: "What is PCB and how does it relate to my annual tax?",
    a: "PCB (Potongan Cukai Berjadual) is the monthly income tax instalment deducted from your salary by your employer and paid directly to LHDN. It is an estimate of your annual tax liability divided across 12 months. When you file your annual return (Form BE), any over- or under-payment is settled.",
  },
  {
    q: "When is the deadline to file my income tax return?",
    a: "For salaried employees (Form BE), the deadline is 30 April each year for the preceding year of assessment. For example, YA 2024 taxes must be filed by 30 April 2025. e-Filing via MyTax is recommended and extends the deadline by 15 days.",
  },
];

export default function IncomeTaxCalculator() {
  const [incomeInput, setIncomeInput] = useState("");
  const [epfInput, setEpfInput] = useState("");
  const [medicalInput, setMedicalInput] = useState("");
  const [educationInput, setEducationInput] = useState("");
  const [spouseRelief, setSpouseRelief] = useState(false);
  const [childrenUnder18, setChildrenUnder18] = useState("0");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const annualIncome = parseFloat(incomeInput.replace(/,/g, "")) || 0;

  const result = useMemo((): TaxResult | null => {
    if (!submitted || annualIncome <= 0) return null;

    const epfRelief = capRelief(epfInput, 7_000);
    const medicalRelief = capRelief(medicalInput, 10_000);
    const educationRelief = capRelief(educationInput, 7_000);
    const spouseAmt = spouseRelief ? 4_000 : 0;
    const childrenAmt = (parseInt(childrenUnder18) || 0) * 2_000;

    const totalRelief =
      PERSONAL_RELIEF + epfRelief + medicalRelief + educationRelief + spouseAmt + childrenAmt;

    const chargeableIncome = Math.max(0, annualIncome - totalRelief);
    const { tax, rows } = calcTax(chargeableIncome);

    // RM400 rebate if chargeable income ≤ RM35,000
    const rebate = chargeableIncome <= 35_000 ? Math.min(400, tax) : 0;
    const taxPayable = r2(Math.max(0, tax - rebate));

    const effectiveRate = annualIncome > 0 ? (taxPayable / annualIncome) * 100 : 0;
    const monthlyPcb = r2(taxPayable / 12);

    return {
      annualIncome: r2(annualIncome),
      totalRelief: r2(totalRelief),
      chargeableIncome: r2(chargeableIncome),
      taxPayable,
      effectiveRate: Math.round(effectiveRate * 10) / 10,
      monthlyPcb,
      bracketRows: rows,
    };
  }, [submitted, annualIncome, epfInput, medicalInput, educationInput, spouseRelief, childrenUnder18]);

  const handleCalculateAndTrack = () => {
    if (annualIncome <= 0) return;
    setSubmitted(true);
  };

  // Fire analytics event once per calculation (when result first appears after submit)
  const trackedTax = useRef<number | null>(null);
  useEffect(() => {
    if (result && result.taxPayable !== trackedTax.current) {
      trackedTax.current = result.taxPayable;
      trackIncomeTaxCalculated(result.annualIncome, result.taxPayable);
    }
  }, [result]);

  const handleReset = () => {
    setIncomeInput("");
    setEpfInput("");
    setMedicalInput("");
    setEducationInput("");
    setSpouseRelief(false);
    setChildrenUnder18("0");
    setSubmitted(false);
  };

  const reliefRows = result
    ? [
        { label: "Personal Relief", amount: PERSONAL_RELIEF, note: "Automatic — every resident" },
        {
          label: "EPF / Life Insurance",
          amount: capRelief(epfInput, 7_000),
          note: "Capped at RM7,000",
        },
        {
          label: "Medical & Dental",
          amount: capRelief(medicalInput, 10_000),
          note: "Capped at RM10,000",
        },
        {
          label: "Education Fees",
          amount: capRelief(educationInput, 7_000),
          note: "Capped at RM7,000",
        },
        ...(spouseRelief ? [{ label: "Spouse Relief", amount: 4_000, note: "Non-working spouse" }] : []),
        ...((parseInt(childrenUnder18) || 0) > 0
          ? [
              {
                label: `Children Under 18 (×${childrenUnder18})`,
                amount: (parseInt(childrenUnder18) || 0) * 2_000,
                note: "RM2,000 each",
              },
            ]
          : []),
      ]
    : [];

  return (
    <>
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ── Inputs ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">Enter Your Income & Reliefs</h2>

            {/* Annual income */}
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1.5">
                Annual Income (before reliefs)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">
                  RM
                </span>
                <input
                  id="income"
                  type="number"
                  min="0"
                  step="1000"
                  placeholder="e.g. 72000"
                  value={incomeInput}
                  onChange={(e) => { setIncomeInput(e.target.value); setSubmitted(false); }}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculateAndTrack()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Gross annual salary, rental income, or total income for the year</p>
            </div>

            {/* Reliefs */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700">Tax Reliefs (optional)</p>

              {/* EPF */}
              <div>
                <label htmlFor="epf" className="block text-xs font-medium text-gray-600 mb-1">
                  EPF Contributions / Life Insurance
                  <span className="ml-1.5 text-gray-400 font-normal">max RM7,000</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">RM</span>
                  <input
                    id="epf"
                    type="number"
                    min="0"
                    max="7000"
                    placeholder="e.g. 4800"
                    value={epfInput}
                    onChange={(e) => { setEpfInput(e.target.value); setSubmitted(false); }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pl-12 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Medical */}
              <div>
                <label htmlFor="medical" className="block text-xs font-medium text-gray-600 mb-1">
                  Medical & Dental (self / spouse / child)
                  <span className="ml-1.5 text-gray-400 font-normal">max RM10,000</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">RM</span>
                  <input
                    id="medical"
                    type="number"
                    min="0"
                    max="10000"
                    placeholder="e.g. 2000"
                    value={medicalInput}
                    onChange={(e) => { setMedicalInput(e.target.value); setSubmitted(false); }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pl-12 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Education */}
              <div>
                <label htmlFor="education" className="block text-xs font-medium text-gray-600 mb-1">
                  Education Fees (self)
                  <span className="ml-1.5 text-gray-400 font-normal">max RM7,000</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">RM</span>
                  <input
                    id="education"
                    type="number"
                    min="0"
                    max="7000"
                    placeholder="e.g. 3000"
                    value={educationInput}
                    onChange={(e) => { setEducationInput(e.target.value); setSubmitted(false); }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pl-12 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Spouse + children */}
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-start gap-2.5 cursor-pointer bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-orange-200 transition-colors">
                  <input
                    type="checkbox"
                    checked={spouseRelief}
                    onChange={(e) => { setSpouseRelief(e.target.checked); setSubmitted(false); }}
                    className="mt-0.5 accent-orange-500"
                  />
                  <span className="text-xs text-gray-700 leading-snug">
                    <span className="font-medium">Spouse Relief</span>
                    <br />
                    <span className="text-gray-400">RM4,000</span>
                  </span>
                </label>

                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <label htmlFor="children" className="text-xs font-medium text-gray-700 block mb-1.5">
                    Children under 18
                  </label>
                  <select
                    id="children"
                    value={childrenUnder18}
                    onChange={(e) => { setChildrenUnder18(e.target.value); setSubmitted(false); }}
                    className="w-full text-sm bg-white border border-gray-200 rounded-lg px-2 py-1.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "child" : "children"}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCalculateAndTrack}
                disabled={!annualIncome || annualIncome <= 0}
                className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-200 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Calculate Tax
              </button>
              {submitted && (
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* ── Results ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🧾</div>
                <p className="text-gray-400 text-sm">
                  Enter your annual income and tap <strong>Calculate Tax</strong> to see your estimated tax payable.
                </p>
              </div>
            ) : (
              <>
                {/* Primary figure */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Estimated Tax Payable (YA 2024)</p>
                  <p className="text-5xl font-bold text-orange-500 mb-1">
                    RM {fmtDec(result.taxPayable)}
                  </p>
                  <p className="text-sm text-gray-400">per year</p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Monthly PCB", value: `RM ${fmtDec(result.monthlyPcb)}`, sub: "est. monthly deduction" },
                    { label: "Effective Rate", value: `${result.effectiveRate}%`, sub: "of annual income" },
                    { label: "Chargeable Income", value: `RM ${fmt(result.chargeableIncome)}`, sub: "after all reliefs" },
                    { label: "Total Reliefs", value: `RM ${fmt(result.totalRelief)}`, sub: "deducted from income" },
                  ].map((m) => (
                    <div key={m.label} className="bg-orange-50 rounded-xl px-4 py-3 text-center">
                      <p className="text-xs text-orange-600 mb-0.5">{m.label}</p>
                      <p className="font-bold text-orange-800 text-sm">{m.value}</p>
                      <p className="text-xs text-orange-400">{m.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Visual bar */}
                <div className="space-y-2">
                  {[
                    { label: "Annual Income", value: result.annualIncome, color: "bg-gray-300", pct: 100 },
                    { label: "Reliefs", value: result.totalRelief, color: "bg-green-400", pct: (result.totalRelief / result.annualIncome) * 100 },
                    { label: "Tax Payable", value: result.taxPayable, color: "bg-orange-400", pct: (result.taxPayable / result.annualIncome) * 100 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                        <span>{row.label}</span>
                        <span className="font-medium text-gray-700">RM {fmtDec(row.value)}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.color} transition-all duration-500`}
                          style={{ width: `${Math.min(row.pct, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {result.chargeableIncome <= 35_000 && result.taxPayable > 0 && (
                  <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-xs text-green-700">
                    <span className="font-semibold">RM400 rebate applied</span> — chargeable income is below RM35,000.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Relief breakdown + bracket table */}
      {result && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Relief breakdown */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Relief Breakdown</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-800">Annual Income</span>
                  <span className="font-semibold text-gray-800">RM {fmtDec(result.annualIncome)}</span>
                </div>
                {reliefRows.map((row) => (
                  <div key={row.label} className="flex justify-between text-sm py-1.5">
                    <div>
                      <span className="text-green-600 mr-1.5">−</span>
                      <span className="text-gray-700">{row.label}</span>
                      <span className="block text-xs text-gray-400 ml-4">{row.note}</span>
                    </div>
                    <span className="text-green-600 font-medium shrink-0 ml-2">({fmtDec(row.amount)})</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-3 border-t-2 border-gray-200">
                  <span className="font-bold text-gray-900">Chargeable Income</span>
                  <span className="font-bold text-gray-900">RM {fmtDec(result.chargeableIncome)}</span>
                </div>
              </div>
            </div>

            {/* Tax bracket breakdown */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Tax by Bracket</h2>
              {result.bracketRows.length === 0 ? (
                <p className="text-sm text-gray-400">No tax payable — chargeable income is zero.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 text-left">
                        <th className="pb-2 font-semibold text-gray-600">Bracket</th>
                        <th className="pb-2 font-semibold text-gray-600 text-center">Rate</th>
                        <th className="pb-2 font-semibold text-gray-600 text-right">Tax (RM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.bracketRows.map((row) => (
                        <tr key={row.range} className={`border-b border-gray-50 ${row.tax === 0 ? "text-gray-400" : "text-gray-700"}`}>
                          <td className="py-2 pr-2">{row.range}</td>
                          <td className="py-2 text-center">{row.rate}</td>
                          <td className="py-2 text-right font-medium">{fmtDec(row.tax)}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-gray-200 font-bold text-gray-900">
                        <td className="pt-3 pb-1" colSpan={2}>Tax Payable</td>
                        <td className="pt-3 pb-1 text-right text-orange-600">{fmtDec(result.taxPayable)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How Malaysia Income Tax Works</h2>
            <p className="text-gray-600 leading-relaxed">
              Malaysia uses a progressive income tax system for resident individuals. You only pay the higher rate on the portion of income that falls within each bracket — not on your entire income. Reliefs reduce your chargeable income before the rates are applied.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Total Income", body: "Add up all income sources: employment, rental, freelance, dividends. Exclude exempt income such as Zakat, scholarship grants, and exempt dividends.", color: "bg-orange-50 border-orange-100" },
              { step: "2", title: "Deduct Reliefs", body: "Subtract all eligible tax reliefs — personal, EPF, medical, education, spouse, and child reliefs. The remainder is your chargeable income.", color: "bg-yellow-50 border-yellow-100" },
              { step: "3", title: "Apply Brackets", body: "Apply the progressive rates to each portion of your chargeable income. Sum them up to get your tax payable, then subtract any applicable rebates.", color: "bg-green-50 border-green-100" },
            ].map((c) => (
              <div key={c.step} className={`rounded-xl border p-5 ${c.color}`}>
                <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 mb-3">{c.step}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1.5">{c.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full bracket reference table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Income Tax Rates — YA 2024</h2>
          <p className="text-gray-500 text-sm mb-6">Progressive rates for Malaysian tax residents. Rates apply only to the income within each bracket, not the total income.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">Chargeable Income (RM)</th>
                  <th className="pb-3 font-semibold text-gray-700 text-center">Rate</th>
                  <th className="pb-3 font-semibold text-gray-700 text-right hidden sm:table-cell">Max Tax in Bracket (RM)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { range: "0 – 5,000", rate: "0%", max: "0" },
                  { range: "5,001 – 20,000", rate: "1%", max: "150" },
                  { range: "20,001 – 35,000", rate: "3%", max: "450" },
                  { range: "35,001 – 50,000", rate: "8%", max: "1,200" },
                  { range: "50,001 – 70,000", rate: "13%", max: "2,600" },
                  { range: "70,001 – 100,000", rate: "21%", max: "6,300" },
                  { range: "100,001 – 400,000", rate: "24%", max: "72,000" },
                  { range: "400,001 – 600,000", rate: "24.5%", max: "49,000" },
                  { range: "600,001 – 2,000,000", rate: "25%", max: "350,000" },
                  { range: "Above 2,000,000", rate: "30%", max: "—" },
                ].map((row) => (
                  <tr key={row.range} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 text-gray-700">{row.range}</td>
                    <td className="py-3 text-center font-medium text-gray-800">{row.rate}</td>
                    <td className="py-3 text-right text-gray-500 hidden sm:table-cell">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">Source: Lembaga Hasil Dalam Negeri (LHDN), Year of Assessment 2024. Rates subject to change — verify at <span className="underline">hasil.gov.my</span> before filing.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="font-medium text-gray-800 text-sm sm:text-base">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Back to home */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all calculators
        </Link>
      </section>
    </>
  );
}
