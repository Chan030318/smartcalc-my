"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { trackEisCalculated } from "@/lib/gtag";

// ─── Calculation ──────────────────────────────────────────────────────────────
const WAGE_CEILING = 4_000;
const RATE = 0.002; // 0.2% each side

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface Result {
  gross: number;
  insuredWage: number;
  employeeContrib: number;
  employerContrib: number;
  totalContrib: number;
  netSalary: number;
  isCapped: boolean;
}

function calculate(gross: number): Result {
  const insuredWage = Math.min(gross, WAGE_CEILING);
  const employeeContrib = round2(insuredWage * RATE);
  const employerContrib = round2(insuredWage * RATE);
  const totalContrib = round2(employeeContrib + employerContrib);
  const netSalary = round2(gross - employeeContrib);
  return {
    gross,
    insuredWage: round2(insuredWage),
    employeeContrib,
    employerContrib,
    totalContrib,
    netSalary,
    isCapped: gross > WAGE_CEILING,
  };
}

// ─── Contribution reference table ────────────────────────────────────────────
const TABLE_ROWS = [
  { range: "RM 30 – RM 49.99", employee: "0.10", employer: "0.10", total: "0.20" },
  { range: "RM 50 – RM 99.99", employee: "0.20", employer: "0.20", total: "0.40" },
  { range: "RM 100 – RM 199.99", employee: "0.40", employer: "0.40", total: "0.80" },
  { range: "RM 200 – RM 299.99", employee: "0.60", employer: "0.60", total: "1.20" },
  { range: "RM 300 – RM 399.99", employee: "0.70", employer: "0.70", total: "1.40" },
  { range: "RM 400 – RM 499.99", employee: "0.90", employer: "0.90", total: "1.80" },
  { range: "RM 500 – RM 699.99", employee: "1.20", employer: "1.20", total: "2.40" },
  { range: "RM 700 – RM 899.99", employee: "1.60", employer: "1.60", total: "3.20" },
  { range: "RM 900 – RM 1,099.99", employee: "2.00", employer: "2.00", total: "4.00" },
  { range: "RM 1,100 – RM 1,299.99", employee: "2.40", employer: "2.40", total: "4.80" },
  { range: "RM 1,300 – RM 1,499.99", employee: "2.80", employer: "2.80", total: "5.60" },
  { range: "RM 1,500 – RM 1,999.99", employee: "3.50", employer: "3.50", total: "7.00" },
  { range: "RM 2,000 – RM 2,499.99", employee: "4.50", employer: "4.50", total: "9.00" },
  { range: "RM 2,500 – RM 2,999.99", employee: "5.50", employer: "5.50", total: "11.00" },
  { range: "RM 3,000 – RM 3,499.99", employee: "6.50", employer: "6.50", total: "13.00" },
  { range: "RM 3,500 – RM 3,999.99", employee: "7.50", employer: "7.50", total: "15.00" },
  { range: "RM 4,000 and above", employee: "8.00", employer: "8.00", total: "16.00" },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is EIS (Employment Insurance System) Malaysia?",
    a: "EIS (Employment Insurance System), known in Malay as SIP (Sistem Insurans Pekerjaan), is a mandatory social protection scheme administered by PERKESO (SOCSO). Established under the Employment Insurance System Act 2017, EIS provides temporary financial assistance to employees who lose their jobs through retrenchment, contract expiry, or voluntary separation scheme (VSS). It also funds job-seeking support and career training.",
  },
  {
    q: "How much is the EIS contribution rate in Malaysia?",
    a: "Both the employee and employer each contribute 0.2% of the employee's insured wages per month. The wage ceiling for EIS is RM4,000 — so the maximum employee contribution is RM8.00/month and the maximum employer contribution is RM8.00/month, for a combined maximum of RM16.00/month. Contributions follow the official PERKESO EIS contribution schedule.",
  },
  {
    q: "Who is required to contribute to EIS?",
    a: "EIS contributions are mandatory for Malaysian citizens and permanent residents aged 18 to 60 who are working in the private sector. Employers with one or more employees must register and contribute. Employees above 57 years old who have never contributed to EIS before are exempted. Domestic workers, self-employed individuals, and government servants are not covered.",
  },
  {
    q: "What is the EIS wage ceiling?",
    a: "The EIS insured wage ceiling is RM4,000 per month. This means contributions are calculated on a maximum of RM4,000 even if your actual salary is higher. The maximum employee contribution is RM8.00/month, and the maximum employer contribution is also RM8.00/month. Employees earning above RM4,000 are still covered by EIS but only pay contributions based on RM4,000.",
  },
  {
    q: "What benefits does EIS provide if I lose my job?",
    a: "EIS pays a Job Search Allowance for up to 6 months after retrenchment, calculated as a percentage of your previous wages. You can also access Reduced Income Allowance if your hours are cut, Training Allowance if you enrol in an approved upskilling programme, and Early Re-employment Allowance if you find a new job before your JSA period ends. To qualify, you must have contributed to EIS for at least 12 months in the past 24 months.",
  },
  {
    q: "Is EIS the same as SOCSO?",
    a: "No. EIS and SOCSO are two separate schemes administered by the same government body (PERKESO). SOCSO covers workplace accidents and invalidity (employment injury + invalidity pension). EIS covers job loss due to retrenchment and provides temporary income replacement while you look for a new job. You will see both EIS and SOCSO deductions as separate line items on your payslip.",
  },
  {
    q: "Can I claim EIS if I resign voluntarily?",
    a: "Generally, no. EIS benefits are only available if your employment was terminated involuntarily — such as retrenchment, company closure, or contract non-renewal. If you resign voluntarily, you are not eligible for Job Search Allowance. However, you may be eligible in cases of constructive dismissal or if you accept a Voluntary Separation Scheme (VSS) offered by your employer.",
  },
  {
    q: "How do I claim EIS benefits after being retrenched?",
    a: "You must file your EIS claim within 60 days of your last day of employment. Visit the PERKESO online portal (mySIPP) or any PERKESO office to submit your claim. You'll need your IC, termination letter, last payslip, and bank account details. Once approved, the Job Search Allowance is paid monthly directly to your bank account for up to 6 months.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function EisCalculator() {
  const [grossInput, setGrossInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const gross = parseFloat(grossInput.replace(/,/g, "")) || 0;
  const result = useMemo(
    () => (submitted && gross > 0 ? calculate(gross) : null),
    [submitted, gross]
  );

  const handleCalculate = () => {
    if (gross > 0) {
      setSubmitted(true);
      const r = calculate(gross);
      trackEisCalculated(gross, r.employeeContrib, r.employerContrib);
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

  return (
    <>
      {/* ── Calculator ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input panel */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Enter Your Salary</h2>

            <div className="space-y-5">
              <div>
                <label htmlFor="gross" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Monthly Salary (RM)
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
                    placeholder="e.g. 3500"
                    value={grossInput}
                    onChange={(e) => handleInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">
                  Gross salary before deductions. EIS contributions are capped at RM4,000/month.
                </p>
              </div>

              {/* Assumptions box */}
              <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-500 space-y-1">
                <p className="font-semibold text-gray-600 mb-1">EIS Rate (2024)</p>
                <p>• Employee contribution: 0.2% of insured wages</p>
                <p>• Employer contribution: 0.2% of insured wages</p>
                <p>• Wage ceiling: RM4,000/month (max RM8.00 each)</p>
                <p>• Based on PERKESO EIS contribution schedule</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCalculate}
                disabled={!gross || gross <= 0}
                className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-200 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Calculate EIS
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

          {/* Result panel */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🛟</div>
                <p className="text-gray-400 text-sm">
                  Enter your monthly salary and tap <strong>Calculate EIS</strong>.
                </p>
              </div>
            ) : (
              <>
                {/* 4 result cards */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    {
                      label: "Employee Contribution",
                      value: result.employeeContrib,
                      color: "bg-amber-50 border-amber-100",
                      textColor: "text-amber-700",
                      icon: "👤",
                    },
                    {
                      label: "Employer Contribution",
                      value: result.employerContrib,
                      color: "bg-blue-50 border-blue-100",
                      textColor: "text-blue-700",
                      icon: "🏢",
                    },
                    {
                      label: "Total EIS Contribution",
                      value: result.totalContrib,
                      color: "bg-violet-50 border-violet-100",
                      textColor: "text-violet-700",
                      icon: "📊",
                    },
                    {
                      label: "Take-Home Salary",
                      value: result.netSalary,
                      color: "bg-green-50 border-green-100",
                      textColor: "text-green-700",
                      icon: "💰",
                    },
                  ].map((card) => (
                    <div key={card.label} className={`rounded-xl border p-4 ${card.color}`}>
                      <div className="text-xl mb-1">{card.icon}</div>
                      <p className="text-xs text-gray-500 mb-1 leading-tight">{card.label}</p>
                      <p className={`text-lg font-bold ${card.textColor}`}>RM {fmt(card.value)}</p>
                    </div>
                  ))}
                </div>

                {/* Wage ceiling badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                    0.2% · 0.2% rate
                  </span>
                  <span className="text-xs text-gray-400">
                    Insured wage: RM {fmt(result.insuredWage)}
                    {result.isCapped && " (capped at RM4,000)"}
                  </span>
                </div>

                {/* Bar breakdown */}
                <div className="space-y-2">
                  {[
                    { label: "Gross Salary", value: result.gross, color: "bg-gray-300", pct: 100 },
                    {
                      label: "EIS Deduction",
                      value: result.employeeContrib,
                      color: "bg-amber-400",
                      pct: (result.employeeContrib / result.gross) * 100,
                    },
                    {
                      label: "Take-Home",
                      value: result.netSalary,
                      color: "bg-green-400",
                      pct: (result.netSalary / result.gross) * 100,
                    },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                        <span>{row.label}</span>
                        <span className="font-medium text-gray-700">RM {fmt(row.value)}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.color} transition-all duration-500`}
                          style={{ width: `${Math.max(row.pct, 0.2)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Educational content ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-8">

          {/* What Is EIS */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is EIS / SIP (Employment Insurance System)?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Employment Insurance System (EIS), or Sistem Insurans Pekerjaan (SIP) in Malay, is a mandatory social protection scheme that protects employees who lose their jobs involuntarily. It is administered by PERKESO (the same body that manages SOCSO) and governed by the Employment Insurance System Act 2017.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unlike EPF (a retirement savings account you can withdraw from) or SOCSO (insurance for workplace injuries), EIS acts as a safety net — providing temporary income replacement while you search for a new job, plus access to training and career support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: "💼",
                  title: "Job Search Allowance (JSA)",
                  body: "The core EIS benefit. If you are retrenched, you receive a monthly payment for up to 6 months based on your previous wage, helping cover living costs while job hunting.",
                },
                {
                  emoji: "📉",
                  title: "Reduced Income Allowance",
                  body: "If your employer reduces your working hours or salary, EIS can top up a portion of the income reduction — helping you stay employed rather than becoming unemployed.",
                },
                {
                  emoji: "🎓",
                  title: "Training Allowance & Fee",
                  body: "EIS funds upskilling and reskilling programmes at approved institutions. You receive a training allowance while attending classes, funded separately from your JSA.",
                },
                {
                  emoji: "🚀",
                  title: "Early Re-employment Allowance",
                  body: "If you find a new job before your JSA runs out, EIS pays a lump-sum bonus for the remaining months — rewarding faster job placement.",
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

          {/* Who Pays */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Who Must Contribute to EIS?</h2>
            <div className="space-y-2">
              {[
                { icon: "✅", text: "Malaysian citizens and permanent residents aged 18 to 60 in the private sector" },
                { icon: "✅", text: "Permanent, contract, part-time, and temporary employees" },
                { icon: "✅", text: "Employees earning any wage — even below RM1,500 (minimum wage)" },
                { icon: "⚠️", text: "Employees above 57 who have NEVER contributed before are exempted" },
                { icon: "❌", text: "Self-employed individuals (no mandatory EIS coverage)" },
                { icon: "❌", text: "Domestic workers (maids, gardeners, etc.)" },
                { icon: "❌", text: "Public sector / government employees" },
                { icon: "❌", text: "Foreign workers (not covered under standard EIS)" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EIS vs SOCSO vs EPF */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">EIS vs SOCSO vs EPF</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-amber-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">Feature</th>
                    <th className="text-center px-4 py-3 font-semibold text-amber-700 border-b border-amber-100">EIS</th>
                    <th className="text-center px-4 py-3 font-semibold text-rose-700 border-b border-amber-100">SOCSO</th>
                    <th className="text-center px-4 py-3 font-semibold text-teal-700 border-b border-amber-100">EPF</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Purpose", eis: "Job loss protection", socso: "Workplace injury & invalidity", epf: "Retirement savings" },
                    { feature: "Employee Rate", eis: "0.2%", socso: "0.5% (1st Cat)", epf: "11%" },
                    { feature: "Employer Rate", eis: "0.2%", socso: "1.75% (1st Cat)", epf: "12–13%" },
                    { feature: "Wage Ceiling", eis: "RM4,000", socso: "RM5,000", epf: "No ceiling" },
                    { feature: "Personal Account", eis: "No", socso: "No", epf: "Yes" },
                    { feature: "Withdrawable", eis: "No — claims only", socso: "No — claims only", epf: "Yes (age 55/60)" },
                    { feature: "Payout Trigger", eis: "Retrenchment / VSS", socso: "Work injury / invalidity", epf: "Age, housing, medical" },
                    { feature: "Admin Body", eis: "PERKESO", socso: "PERKESO", epf: "KWSP" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.eis}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.socso}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.epf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contribution reference table ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">EIS Contribution Table</h2>
          <p className="text-gray-500 text-sm mb-5">
            Employee 0.2% · Employer 0.2% · Wage ceiling RM4,000/month · Max RM8.00 each side
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">
                    Salary Range
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">
                    Employee (RM)
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">
                    Employer (RM)
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">
                    Total (RM)
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-50 last:border-0 hover:bg-amber-50/30 transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-700">{row.range}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.employee}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.employer}</td>
                    <td className="px-4 py-3 text-right font-medium text-gray-800">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Contribution amounts follow the official PERKESO EIS contribution schedule and may be adjusted when regulations change. Verify the latest rates at perkeso.gov.my.
          </p>
        </div>
      </section>

      {/* ── Related calculators ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Related Calculators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: "/salary-calculator-malaysia", emoji: "💰", label: "Salary Calculator" },
              { href: "/epf-calculator-malaysia", emoji: "🏦", label: "EPF Calculator" },
              { href: "/socso-calculator-malaysia", emoji: "🛡️", label: "SOCSO Calculator" },
              { href: "/pcb-calculator-malaysia", emoji: "📋", label: "PCB Calculator" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 hover:border-amber-100 border border-transparent transition-all group text-center"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs font-medium text-gray-600 group-hover:text-amber-700">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
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
