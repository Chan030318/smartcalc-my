"use client";

import { useState, useMemo } from "react";
import { trackCalculatorUse } from "@/lib/gtag";

// ─── Tax brackets (YA 2024, resident individual) ─────────────────────────────
const TAX_BRACKETS = [
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

const PERSONAL_RELIEF = 9_000; // RM

function calcAnnualTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (const bracket of TAX_BRACKETS) {
    if (taxableIncome <= prev) break;
    const slice = Math.min(taxableIncome, bracket.upto) - prev;
    tax += slice * bracket.rate;
    prev = bracket.upto;
  }
  return tax;
}

interface Breakdown {
  gross: number;
  epfEmployee: number;
  socso: number;
  eis: number;
  pcb: number;
  takehome: number;
  epfEmployer: number;
  totalDeductions: number;
}

function calculate(gross: number): Breakdown {
  // EPF
  const epfEmployee = gross * 0.11;
  const epfEmployer = gross <= 5_000 ? gross * 0.13 : gross * 0.12;

  // SOCSO — 0.5 %, wage ceiling RM 5,000
  const socsoBase = Math.min(gross, 5_000);
  const socso = socsoBase * 0.005;

  // EIS — 0.2 %, wage ceiling RM 4,000
  const eisBase = Math.min(gross, 4_000);
  const eis = eisBase * 0.002;

  // PCB (estimated) — annual taxable income after EPF & personal relief
  const annualGross = gross * 12;
  const annualEpf = epfEmployee * 12;
  const taxableIncome = Math.max(0, annualGross - annualEpf - PERSONAL_RELIEF);
  const annualTax = calcAnnualTax(taxableIncome);
  const pcb = annualTax / 12;

  const totalDeductions = epfEmployee + socso + eis + pcb;
  const takehome = gross - totalDeductions;

  return {
    gross,
    epfEmployee: round2(epfEmployee),
    socso: round2(socso),
    eis: round2(eis),
    pcb: round2(pcb),
    takehome: round2(takehome),
    epfEmployer: round2(epfEmployer),
    totalDeductions: round2(totalDeductions),
  };
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const faqs = [
  {
    q: "How is EPF calculated in Malaysia?",
    a: "Employees contribute 11% of their gross monthly salary to EPF (Employees Provident Fund). Employers contribute 13% for salaries up to RM5,000, and 12% for salaries above RM5,000. EPF is deducted before income tax is calculated.",
  },
  {
    q: "What is SOCSO and how much is deducted?",
    a: "SOCSO (Social Security Organisation) provides social protection for employees against work-related accidents and invalidity. Employees contribute 0.5% of their insured salary, capped at a wage ceiling of RM5,000 per month (maximum RM25/month). Employers contribute 1.75%.",
  },
  {
    q: "What is EIS and who does it apply to?",
    a: "EIS (Employment Insurance System) provides financial assistance if you lose your job. Both employee and employer each contribute 0.2% of the monthly salary, capped at RM4,000 (maximum RM8/month per party). It applies to all private-sector employees under 60.",
  },
  {
    q: "How is PCB (monthly income tax) estimated?",
    a: "PCB (Potongan Cukai Berjadual) is the monthly tax deduction based on your annual taxable income. This calculator estimates it using your gross salary minus EPF contributions and the standard RM9,000 personal relief. Actual PCB may differ based on additional reliefs, spouse/dependant status, and other declarations.",
  },
  {
    q: "Is this calculator accurate for all employees?",
    a: "This calculator provides a standard estimate for a single Malaysian resident employee with no additional tax reliefs declared. Contract workers, civil servants, foreign workers, and those with additional reliefs (children, life insurance, etc.) may see different deductions. Always verify with your HR department or LHDN.",
  },
  {
    q: "What is the minimum salary in Malaysia?",
    a: "As of 2024, the national minimum wage in Malaysia is RM1,500 per month, applicable to all employers regardless of company size.",
  },
];

export default function SalaryCalculator() {
  const [grossInput, setGrossInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const gross = parseFloat(grossInput.replace(/,/g, "")) || 0;
  const result = useMemo(() => (submitted && gross > 0 ? calculate(gross) : null), [submitted, gross]);

  const handleCalculate = () => {
    if (gross > 0) {
      setSubmitted(true);
      trackCalculatorUse("salary", { gross_salary: gross });
    }
  };

  const handleReset = () => {
    setGrossInput("");
    setSubmitted(false);
  };

  const handleInput = (val: string) => {
    setGrossInput(val);
    setSubmitted(false);
  };

  const deductionRows = result
    ? [
        { label: "EPF (Employee 11%)", amount: result.epfEmployee, note: "Retirement savings" },
        { label: "SOCSO (0.5%)", amount: result.socso, note: "Social security" },
        { label: "EIS (0.2%)", amount: result.eis, note: "Employment insurance" },
        { label: "PCB / Income Tax (est.)", amount: result.pcb, note: "Monthly tax deduction" },
      ]
    : [];

  return (
    <>
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Enter Your Salary</h2>

            <div className="space-y-5">
              <div>
                <label htmlFor="gross" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Gross Monthly Salary
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">
                    RM
                  </span>
                  <input
                    id="gross"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g. 5000"
                    value={grossInput}
                    onChange={(e) => handleInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Before any deductions (EPF, SOCSO, tax)</p>
              </div>

              {/* Assumptions note */}
              <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-500 space-y-1">
                <p className="font-semibold text-gray-600 mb-1">Assumptions</p>
                <p>• Resident individual, single status</p>
                <p>• Standard RM9,000 personal relief only</p>
                <p>• EPF at 11% (employee) / 12–13% (employer)</p>
                <p>• SOCSO capped at RM5,000 wage ceiling</p>
                <p>• EIS capped at RM4,000 wage ceiling</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCalculate}
                disabled={!gross || gross <= 0}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Calculate Take-Home
              </button>
              {result && (
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Result summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">💰</div>
                <p className="text-gray-400 text-sm">
                  Enter your gross salary and tap <strong>Calculate Take-Home</strong>.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Estimated Take-Home Pay</p>
                  <p className="text-5xl font-bold text-green-600 mb-1">
                    RM {fmt(result.takehome)}
                  </p>
                  <p className="text-sm text-gray-400">per month</p>
                </div>

                {/* Mini summary bars */}
                <div className="space-y-2 mb-5">
                  {[
                    { label: "Gross Salary", value: result.gross, color: "bg-gray-200", pct: 100 },
                    { label: "Total Deductions", value: result.totalDeductions, color: "bg-red-400", pct: (result.totalDeductions / result.gross) * 100 },
                    { label: "Take-Home", value: result.takehome, color: "bg-green-400", pct: (result.takehome / result.gross) * 100 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                        <span>{row.label}</span>
                        <span className="font-medium text-gray-700">RM {fmt(row.value)}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.color} transition-all duration-500`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-xs text-blue-700">
                  <span className="font-semibold">Employer EPF contribution:</span> RM {fmt(result.epfEmployer)}/month (not deducted from your salary — paid on top by your employer)
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Breakdown table */}
      {result && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Full Deduction Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-100">
                    <th className="pb-3 font-semibold text-gray-700">Item</th>
                    <th className="pb-3 font-semibold text-gray-700 hidden sm:table-cell">Description</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right">Amount (RM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold text-gray-800">Gross Salary</td>
                    <td className="py-3 text-gray-500 hidden sm:table-cell">Before deductions</td>
                    <td className="py-3 text-right font-semibold text-gray-800">{fmt(result.gross)}</td>
                  </tr>
                  {deductionRows.map((row) => (
                    <tr key={row.label} className="border-b border-gray-50">
                      <td className="py-3 text-gray-700">
                        <span className="text-red-500 mr-1.5">−</span>{row.label}
                      </td>
                      <td className="py-3 text-gray-400 text-xs hidden sm:table-cell">{row.note}</td>
                      <td className="py-3 text-right text-red-500">({fmt(row.amount)})</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-200">
                    <td className="pt-4 pb-2 font-bold text-gray-900">Take-Home Pay</td>
                    <td className="pt-4 pb-2 hidden sm:table-cell" />
                    <td className="pt-4 pb-2 text-right font-bold text-green-600 text-base">{fmt(result.takehome)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-500 mb-3">Employer Contributions (not deducted from your salary)</p>
              <div className="flex flex-col sm:flex-row gap-3">
                {[
                  { label: `EPF Employer (${result.gross <= 5000 ? "13" : "12"}%)`, value: result.epfEmployer },
                  { label: "SOCSO Employer (1.75%)", value: round2(Math.min(result.gross, 5_000) * 0.0175) },
                  { label: "EIS Employer (0.2%)", value: round2(Math.min(result.gross, 4_000) * 0.002) },
                ].map((item) => (
                  <div key={item.label} className="flex-1 bg-blue-50 rounded-xl px-4 py-3">
                    <p className="text-xs text-blue-600 mb-0.5">{item.label}</p>
                    <p className="font-semibold text-blue-800">RM {fmt(item.value)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Explanation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How Malaysian Salary Deductions Work</h2>
            <p className="text-gray-600 leading-relaxed">
              Every Malaysian employee&apos;s monthly pay packet is subject to three mandatory statutory deductions before you receive your take-home pay: EPF, SOCSO, and EIS. A fourth deduction — PCB (monthly income tax) — applies once your annual income exceeds the personal relief threshold.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "EPF — Employees Provident Fund",
                emoji: "🏦",
                body: "The largest deduction. Employees contribute 11% and employers contribute 12–13%. These savings accumulate in your EPF account for retirement withdrawal at age 55 or 60.",
              },
              {
                title: "SOCSO — Social Security",
                emoji: "🛡️",
                body: "Provides coverage for work accidents and permanent disability. Employee rate is 0.5% of insured wages, capped at a monthly wage ceiling of RM5,000.",
              },
              {
                title: "EIS — Employment Insurance",
                emoji: "🪂",
                body: "Provides job-loss benefits and reskilling support. Both employee and employer each pay 0.2%, capped at RM4,000 monthly wages.",
              },
              {
                title: "PCB — Monthly Tax Deduction",
                emoji: "📋",
                body: "Potongan Cukai Berjadual is the monthly instalment of your annual income tax, deducted at source by your employer and remitted to LHDN.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-gray-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{card.emoji}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates reference table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Statutory Contribution Rates (2024)</h2>
          <p className="text-gray-500 text-sm mb-6">Current rates for private-sector employees in Malaysia.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">Contribution</th>
                  <th className="pb-3 font-semibold text-gray-700 text-center">Employee</th>
                  <th className="pb-3 font-semibold text-gray-700 text-center">Employer</th>
                  <th className="pb-3 font-semibold text-gray-700 hidden sm:table-cell">Wage Ceiling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "EPF", employee: "11%", employer: "12–13%", ceiling: "No ceiling" },
                  { name: "SOCSO", employee: "0.5%", employer: "1.75%", ceiling: "RM5,000/month" },
                  { name: "EIS", employee: "0.2%", employer: "0.2%", ceiling: "RM4,000/month" },
                  { name: "PCB / Tax", employee: "Progressive", employer: "—", ceiling: "Based on income" },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-800">{row.name}</td>
                    <td className="py-3 text-center text-gray-700">{row.employee}</td>
                    <td className="py-3 text-center text-gray-700">{row.employer}</td>
                    <td className="py-3 text-gray-500 hidden sm:table-cell">{row.ceiling}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
    </>
  );
}
