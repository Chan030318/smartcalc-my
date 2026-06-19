"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { trackSocsoCalculated } from "@/lib/gtag";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = "first" | "second";

interface Result {
  gross: number;
  insuredWage: number;
  employeeContrib: number;
  employerContrib: number;
  totalContrib: number;
  netSalary: number;
  category: Category;
}

// ─── Calculation ──────────────────────────────────────────────────────────────
const WAGE_CEILING = 5_000;

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calculate(gross: number, category: Category): Result {
  const insuredWage = Math.min(gross, WAGE_CEILING);
  // First Category: Employment Injury + Invalidity Pension (employee < 60)
  // Second Category: Employment Injury only (employee ≥ 60)
  const employeeContrib = category === "first" ? insuredWage * 0.005 : 0;
  const employerContrib = category === "first" ? insuredWage * 0.0175 : insuredWage * 0.0125;
  const totalContrib = employeeContrib + employerContrib;
  const netSalary = gross - employeeContrib;
  return {
    gross,
    insuredWage: round2(insuredWage),
    employeeContrib: round2(employeeContrib),
    employerContrib: round2(employerContrib),
    totalContrib: round2(totalContrib),
    netSalary: round2(netSalary),
    category,
  };
}

// ─── Contribution reference table (First Category) ───────────────────────────
const TABLE_ROWS = [
  { range: "RM 100 – RM 300", employee: "0.60", employer: "2.10", total: "2.70" },
  { range: "RM 300.01 – RM 500", employee: "1.50", employer: "5.25", total: "6.75" },
  { range: "RM 500.01 – RM 700", employee: "2.50", employer: "8.75", total: "11.25" },
  { range: "RM 700.01 – RM 900", employee: "3.50", employer: "12.25", total: "15.75" },
  { range: "RM 900.01 – RM 1,100", employee: "4.50", employer: "15.75", total: "20.25" },
  { range: "RM 1,100.01 – RM 1,300", employee: "5.50", employer: "19.25", total: "24.75" },
  { range: "RM 1,300.01 – RM 1,500", employee: "6.50", employer: "22.75", total: "29.25" },
  { range: "RM 1,500.01 – RM 2,000", employee: "8.25", employer: "28.85", total: "37.10" },
  { range: "RM 2,000.01 – RM 2,500", employee: "10.75", employer: "37.62", total: "48.37" },
  { range: "RM 2,500.01 – RM 3,000", employee: "13.25", employer: "46.37", total: "59.62" },
  { range: "RM 3,000.01 – RM 3,500", employee: "15.75", employer: "55.12", total: "70.87" },
  { range: "RM 3,500.01 – RM 4,000", employee: "18.25", employer: "63.87", total: "82.12" },
  { range: "RM 4,000.01 – RM 4,500", employee: "20.75", employer: "72.62", total: "93.37" },
  { range: "RM 4,500.01 – RM 5,000", employee: "23.25", employer: "81.37", total: "104.62" },
  { range: "Above RM 5,000", employee: "25.00", employer: "87.50", total: "112.50" },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is SOCSO (PERKESO)?",
    a: "SOCSO (Social Security Organisation), also known as PERKESO (Pertubuhan Keselamatan Sosial), is a Malaysian government agency that provides social security protection to employees in the private sector. It covers work-related accidents, occupational diseases, and invalidity. SOCSO contributions are mandatory for all eligible employees and employers.",
  },
  {
    q: "Who is required to pay SOCSO contributions?",
    a: "All Malaysian employees and permanent residents working in the private sector must contribute to SOCSO. This includes full-time, part-time, and contract employees. Employers are legally obligated to register employees with SOCSO and make contributions. Self-employed individuals, domestic workers, and government employees are not covered under the standard SOCSO scheme.",
  },
  {
    q: "How is SOCSO calculated in Malaysia?",
    a: "SOCSO contributions are based on the employee's insured wages, capped at RM5,000 per month. For First Category (employees below 60): employee pays 0.5% and employer pays 1.75%. For Second Category (employees 60 and above): employee pays nothing and employer pays 1.25%. The contribution amounts follow PERKESO's official contribution schedule.",
  },
  {
    q: "What is the difference between First Category and Second Category SOCSO?",
    a: "First Category applies to employees below 60 years old and covers both the Employment Injury Scheme and the Invalidity Pension Scheme. Both employee and employer contribute. Second Category applies to employees aged 60 and above, and covers Employment Injury only — the employee does not contribute, only the employer pays 1.25% of insured wages.",
  },
  {
    q: "Is SOCSO compulsory for all employers in Malaysia?",
    a: "Yes. Under the Employees' Social Security Act 1969, all private-sector employers who have at least one employee are required to register with SOCSO and make contributions for eligible employees. Failure to register or contribute is an offence and can result in fines or imprisonment under Malaysian law.",
  },
  {
    q: "What happens if an employer does not pay SOCSO?",
    a: "Employers who fail to pay SOCSO contributions can face legal action under the Employees' Social Security Act 1969. Penalties include fines up to RM10,000, imprisonment up to 2 years, or both. PERKESO also has the authority to seize and sell employer property to recover unpaid contributions. Employees who miss out on coverage due to employer non-payment may still file claims, with PERKESO pursuing the employer for recovery.",
  },
  {
    q: "Can I withdraw my SOCSO contributions?",
    a: "No, SOCSO contributions are not withdrawable like EPF savings. SOCSO is an insurance scheme — contributions fund benefits paid out when a valid claim is made (work accident, occupational disease, invalidity). There is no personal account balance to withdraw. Benefits include medical treatment costs, temporary disability allowance, permanent disability benefit, and survivor's pension for dependants.",
  },
  {
    q: "What is the difference between SOCSO and EPF?",
    a: "EPF (Employees Provident Fund) is a retirement savings scheme — your contributions accumulate in a personal account that you can withdraw at age 55 or 60. SOCSO is a social insurance scheme that protects you against work-related accidents and invalidity — it pays out benefits when you make a valid claim, not as a lump-sum withdrawal. Both are mandatory for eligible private-sector employees, and both have employee and employer contribution components.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function SocsoCalculator() {
  const [grossInput, setGrossInput] = useState("");
  const [category, setCategory] = useState<Category>("first");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const gross = parseFloat(grossInput.replace(/,/g, "")) || 0;
  const result = useMemo(
    () => (submitted && gross > 0 ? calculate(gross, category) : null),
    [submitted, gross, category]
  );

  const handleCalculate = () => {
    if (gross > 0) {
      setSubmitted(true);
      if (result) {
        trackSocsoCalculated(gross, result.employeeContrib, result.employerContrib);
      } else {
        const r = calculate(gross, category);
        trackSocsoCalculated(gross, r.employeeContrib, r.employerContrib);
      }
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

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    setSubmitted(false);
  };

  return (
    <>
      {/* ── Calculator ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input panel */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Enter Details</h2>

            <div className="space-y-5">
              {/* Salary */}
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
                    placeholder="e.g. 3000"
                    value={grossInput}
                    onChange={(e) => handleInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Gross salary before deductions. Contributions are capped at RM5,000.</p>
              </div>

              {/* Category / Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contribution Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(
                    [
                      {
                        value: "first" as Category,
                        label: "First Category",
                        sub: "Below 60 · EI + Invalidity Pension",
                      },
                      {
                        value: "second" as Category,
                        label: "Second Category",
                        sub: "Age 60 & above · Employment Injury only",
                      },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleCategoryChange(opt.value)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        category === opt.value
                          ? "border-rose-500 bg-rose-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <p className={`font-semibold text-sm ${category === opt.value ? "text-rose-700" : "text-gray-800"}`}>
                        {opt.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{opt.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Assumptions */}
              <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-500 space-y-1">
                <p className="font-semibold text-gray-600 mb-1">Assumptions</p>
                <p>• Wage ceiling: RM5,000/month (contributions capped here)</p>
                <p>• First Category: employee 0.5% + employer 1.75%</p>
                <p>• Second Category: employee 0% + employer 1.25%</p>
                <p>• Based on PERKESO 2024 contribution schedule</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCalculate}
                disabled={!gross || gross <= 0}
                className="flex-1 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-300 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Calculate SOCSO
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
                <div className="text-5xl mb-4">🛡️</div>
                <p className="text-gray-400 text-sm">
                  Enter your monthly salary and tap <strong>Calculate SOCSO</strong>.
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
                      color: "bg-rose-50 border-rose-100",
                      textColor: "text-rose-700",
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
                      label: "Total Contribution",
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

                {/* Category badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {result.category === "first" ? "First Category" : "Second Category"}
                  </span>
                  <span className="text-xs text-gray-400">
                    Insured wage: RM {fmt(result.insuredWage)}
                    {result.gross > WAGE_CEILING && " (capped at RM5,000)"}
                  </span>
                </div>

                {/* Bar summary */}
                <div className="space-y-2">
                  {[
                    { label: "Gross Salary", value: result.gross, color: "bg-gray-300", pct: 100 },
                    { label: "SOCSO Deduction", value: result.employeeContrib, color: "bg-rose-400", pct: (result.employeeContrib / result.gross) * 100 },
                    { label: "Take-Home", value: result.netSalary, color: "bg-green-400", pct: (result.netSalary / result.gross) * 100 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                        <span>{row.label}</span>
                        <span className="font-medium text-gray-700">RM {fmt(row.value)}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.color} transition-all duration-500`}
                          style={{ width: `${Math.max(row.pct, 0.5)}%` }}
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

          {/* What Is SOCSO */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What Is SOCSO (PERKESO)?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SOCSO — the Social Security Organisation, known in Malay as PERKESO (Pertubuhan Keselamatan Sosial) — is a Malaysian government agency that provides social protection insurance for employees in the private sector. It was established under the Employees&apos; Social Security Act 1969.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: "🏥",
                  title: "Employment Injury Scheme",
                  body: "Covers medical treatment, temporary and permanent disability benefits, and survivor benefits for accidents at the workplace or while commuting to and from work.",
                },
                {
                  emoji: "🪑",
                  title: "Invalidity Pension Scheme",
                  body: "Provides a monthly pension if you suffer permanent invalidity due to non-work causes and can no longer earn a living. Only available under First Category (below age 60).",
                },
                {
                  emoji: "👨‍⚕️",
                  title: "Medical & Rehabilitation",
                  body: "SOCSO reimburses medical expenses at government and panel hospitals for covered injuries and illnesses. Rehabilitation support for injured employees is also provided.",
                },
                {
                  emoji: "👨‍👩‍👧",
                  title: "Survivor Benefits",
                  body: "If a covered employee dies from a work-related injury or invalidity, SOCSO pays a monthly pension to the spouse and dependent children.",
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

          {/* Who Needs to Pay */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Who Needs to Pay SOCSO?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Under Malaysian law, SOCSO contributions are mandatory for the following employees in the private sector:
            </p>
            <div className="space-y-2">
              {[
                { icon: "✅", text: "Malaysian citizens and permanent residents employed in the private sector" },
                { icon: "✅", text: "Employees below 60 years of age (First Category — full coverage)" },
                { icon: "✅", text: "Employees aged 60 and above who are still working (Second Category — employer contribution only)" },
                { icon: "✅", text: "Permanent, contract, part-time, and temporary employees" },
                { icon: "❌", text: "Self-employed individuals (not covered under standard SOCSO)" },
                { icon: "❌", text: "Domestic workers (e.g. maids, gardeners)" },
                { icon: "❌", text: "Government employees (covered under separate government scheme)" },
                { icon: "❌", text: "Foreign workers (separate Foreign Worker Social Security Scheme applies)" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SOCSO vs EPF comparison */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">SOCSO vs EPF — Key Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-rose-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Feature</th>
                    <th className="text-center px-4 py-3 font-semibold text-rose-700 border-b border-rose-100">SOCSO</th>
                    <th className="text-center px-4 py-3 font-semibold text-teal-700 border-b border-rose-100">EPF</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Purpose", socso: "Social insurance (injury & invalidity)", epf: "Retirement savings" },
                    { feature: "Protection", socso: "Workplace accidents, invalidity", epf: "Long-term retirement fund" },
                    { feature: "Employee Contribution", socso: "0.5% (First Category)", epf: "11% of gross salary" },
                    { feature: "Employer Contribution", socso: "1.75% (First Category)", epf: "12–13% of gross salary" },
                    { feature: "Wage Ceiling", socso: "RM5,000/month", epf: "No ceiling" },
                    { feature: "Personal Account Balance", socso: "No (insurance pool)", epf: "Yes (individual account)" },
                    { feature: "Withdrawable", socso: "No — claims-based payouts only", epf: "Yes — at age 55/60 or early" },
                    { feature: "Benefit Trigger", socso: "Valid injury or invalidity claim", epf: "Age, housing, medical, death" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.feature}</td>
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

      {/* ── Contribution Reference Table ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">SOCSO Contribution Table (First Category)</h2>
          <p className="text-gray-500 text-sm mb-5">
            Employee 0.5% · Employer 1.75% · Wage ceiling RM5,000/month
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-rose-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Salary Range</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Employee (RM)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Employer (RM)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Total (RM)</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-rose-50/30 transition-colors">
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
            Actual PERKESO contributions follow the official contribution schedule and may change when regulations are updated. Second Category (employees ≥ 60): employer 1.25%, employee nil.
          </p>
        </div>
      </section>

      {/* ── Related calculators CTA ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Related Calculators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: "/salary-calculator-malaysia", emoji: "💰", label: "Salary Calculator" },
              { href: "/epf-calculator-malaysia", emoji: "🏦", label: "EPF Calculator" },
              { href: "/pcb-calculator-malaysia", emoji: "📋", label: "PCB Calculator" },
              { href: "/dsr-calculator-malaysia", emoji: "📊", label: "DSR Calculator" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-rose-50 hover:border-rose-100 border border-transparent transition-all group text-center"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs font-medium text-gray-600 group-hover:text-rose-700">{item.label}</span>
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
