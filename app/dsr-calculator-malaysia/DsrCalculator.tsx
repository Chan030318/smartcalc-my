"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { trackDsrCalculated } from "@/lib/gtag";

// ─── Types ────────────────────────────────────────────────────────────────────
type DsrCategory = "excellent" | "good" | "moderate" | "high-risk";

interface DsrResult {
  monthlyIncome: number;
  existingCommitments: number;
  newRepayment: number;
  totalCommitments: number;
  dsr: number;
  category: DsrCategory;
  // Remaining capacity
  capacityAt60: number;   // max additional monthly repayment at 60% DSR
  capacityAt70: number;   // max additional monthly repayment at 70% DSR
  maxDebtAt60: number;
  maxDebtAt70: number;
}

function calcDsr(
  income: number,
  existing: number,
  newLoan: number,
): DsrResult {
  const total = existing + newLoan;
  const dsr = income > 0 ? r1((total / income) * 100) : 0;

  let category: DsrCategory;
  if (dsr <= 40) category = "excellent";
  else if (dsr <= 60) category = "good";
  else if (dsr <= 70) category = "moderate";
  else category = "high-risk";

  const maxDebtAt60 = r2(income * 0.6);
  const maxDebtAt70 = r2(income * 0.7);
  const capacityAt60 = r2(Math.max(0, maxDebtAt60 - existing));
  const capacityAt70 = r2(Math.max(0, maxDebtAt70 - existing));

  return {
    monthlyIncome: income,
    existingCommitments: existing,
    newRepayment: newLoan,
    totalCommitments: r2(total),
    dsr,
    category,
    capacityAt60,
    capacityAt70,
    maxDebtAt60,
    maxDebtAt70,
  };
}

function r1(n: number) { return Math.round(n * 10) / 10; }
function r2(n: number) { return Math.round(n * 100) / 100; }
function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── Category config ──────────────────────────────────────────────────────────
const CATEGORY_CONFIG: Record<DsrCategory, {
  label: string;
  color: string;
  bg: string;
  border: string;
  ring: string;
  bar: string;
  icon: string;
  headline: string;
  description: string;
}> = {
  excellent: {
    label: "Excellent",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    ring: "ring-emerald-400",
    bar: "bg-emerald-500",
    icon: "✅",
    headline: "Strong borrowing position",
    description: "Your DSR is well within limits. Most Malaysian banks will view your application very favourably. You have substantial remaining borrowing capacity.",
  },
  good: {
    label: "Good",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    ring: "ring-green-400",
    bar: "bg-green-500",
    icon: "✅",
    headline: "Acceptable to most banks",
    description: "Your DSR falls within the standard 60% threshold used by most Malaysian banks. Your loan application is likely to proceed to full assessment.",
  },
  moderate: {
    label: "Moderate",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    ring: "ring-amber-400",
    bar: "bg-amber-400",
    icon: "⚠️",
    headline: "Borderline — some banks may approve",
    description: "Your DSR is between 60–70%. Some Malaysian banks accept up to 70% for applicants earning above RM10,000/month. Consider reducing existing commitments or the loan amount before applying.",
  },
  "high-risk": {
    label: "High Risk",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
    ring: "ring-red-400",
    bar: "bg-red-500",
    icon: "❌",
    headline: "Most banks likely to decline",
    description: "Your DSR exceeds 70%. Most Malaysian banks and licensed lenders will decline a new loan at this ratio. You will need to reduce your existing commitments, increase income, or apply for a smaller loan amount.",
  },
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is DSR (Debt Service Ratio)?",
    a: "DSR, or Debt Service Ratio, is the percentage of your gross monthly income that goes toward servicing all debt obligations — existing loans plus the new loan you are applying for. For example, if you earn RM5,000/month and your total monthly loan repayments are RM3,000, your DSR is 60%. Malaysian banks use DSR as the primary measure of your ability to repay a new loan.",
  },
  {
    q: "What DSR do Malaysian banks use for loan approval?",
    a: "Most Malaysian banks and financial institutions use a DSR threshold of 60% for standard residential and personal loans. Some banks allow up to 70% for borrowers with higher income (typically RM10,000+/month) or for government employees with stable income. Bank Negara Malaysia (BNM) does not mandate a specific cap but issues responsible lending guidelines that banks follow.",
  },
  {
    q: "What counts as monthly debt commitments in DSR?",
    a: "Monthly debt commitments include: (1) Home loan / mortgage monthly repayments, (2) Car loan / hire-purchase instalments, (3) Personal loan repayments, (4) PTPTN education loan repayments, (5) Credit card minimum payments (typically 5% of outstanding balance or RM50, whichever is higher), (6) Any other licensed loan repayments. Utility bills, rent, and daily living expenses are generally not included.",
  },
  {
    q: "Is DSR calculated on gross or net income?",
    a: "Malaysian banks typically calculate DSR using gross monthly income (before EPF, tax, and other deductions). However, some banks may use net income for self-employed applicants or for more conservative assessments. This calculator uses gross income, which is the standard approach for salaried employees.",
  },
  {
    q: "Do credit card balances count toward DSR?",
    a: "Yes, but only the minimum monthly payment is counted, not the full outstanding balance. Most banks calculate credit card commitment as 5% of the credit limit (not the balance drawn) per card. Clearing credit card balances and cancelling unused cards before applying for a loan can meaningfully reduce your DSR.",
  },
  {
    q: "Can I improve my DSR before applying for a loan?",
    a: "Yes. Common strategies include: (1) Settling smaller loans fully before applying, (2) Cancelling unused credit cards to remove the 5% limit assumption, (3) Refinancing multiple loans into a single lower-rate consolidation loan, (4) Increasing your documented income (e.g., adding commission, overtime, or rental income), (5) Reducing the loan amount requested or extending the tenure to lower the monthly repayment.",
  },
  {
    q: "Does PTPTN count toward my DSR?",
    a: "Yes. PTPTN (National Higher Education Fund Corporation) repayments are treated as a monthly debt commitment and are factored into your DSR by most banks. The standard PTPTN monthly repayment is based on a graduated scale — if you have opted for automatic salary deduction (Potongan Gaji), this amount is counted. Reducing or completing PTPTN payments before applying for a large loan can help your DSR.",
  },
];

// ─── Commitment examples ──────────────────────────────────────────────────────
const commitmentExamples = [
  { item: "Home loan / mortgage", example: "Monthly instalment from your bank statement" },
  { item: "Car loan / hire purchase", example: "Monthly instalment from your bank statement" },
  { item: "Personal loan", example: "Monthly repayment amount" },
  { item: "PTPTN", example: "Graduated monthly repayment or salary deduction amount" },
  { item: "Credit card", example: "5% of credit limit per card (not balance)" },
  { item: "Other hire purchase", example: "e.g. motorcycle, furniture, gadgets" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function DsrCalculator() {
  const [incomeInput, setIncomeInput] = useState("");
  const [existingInput, setExistingInput] = useState("");
  const [newLoanInput, setNewLoanInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const income = parseFloat(incomeInput.replace(/,/g, "")) || 0;
  const existing = parseFloat(existingInput.replace(/,/g, "")) || 0;
  const newLoan = parseFloat(newLoanInput.replace(/,/g, "")) || 0;
  const isValid = income > 0;

  const result = useMemo(
    (): DsrResult | null => (submitted && isValid ? calcDsr(income, existing, newLoan) : null),
    [submitted, income, existing, newLoan]
  );

  const handleCalculate = () => { if (isValid) setSubmitted(true); };
  const handleReset = () => {
    setIncomeInput(""); setExistingInput(""); setNewLoanInput(""); setSubmitted(false);
  };
  const onChange = (setter: (v: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => { setter(e.target.value); setSubmitted(false); };

  // Analytics
  const trackedDsr = useRef<number | null>(null);
  useEffect(() => {
    if (result && result.dsr !== trackedDsr.current) {
      trackedDsr.current = result.dsr;
      trackDsrCalculated(result.monthlyIncome, result.dsr);
    }
  }, [result]);

  const cfg = result ? CATEGORY_CONFIG[result.category] : null;

  // Gauge bar width capped at 100%
  const gaugeWidth = result ? Math.min(result.dsr, 100) : 0;

  return (
    <>
      {/* ── Calculator ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Inputs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">Your Financial Details</h2>

            {/* Monthly income */}
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1.5">
                Gross Monthly Income
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="income"
                  type="number"
                  min="0"
                  step="100"
                  placeholder="e.g. 6000"
                  value={incomeInput}
                  onChange={onChange(setIncomeInput)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Before EPF and tax deductions (gross salary)</p>
            </div>

            {/* Existing commitments */}
            <div>
              <label htmlFor="existing" className="block text-sm font-medium text-gray-700 mb-1.5">
                Existing Monthly Commitments
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="existing"
                  type="number"
                  min="0"
                  step="50"
                  placeholder="e.g. 2000"
                  value={existingInput}
                  onChange={onChange(setExistingInput)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Total of all current loan repayments (car, home, personal, PTPTN, credit cards)</p>
            </div>

            {/* New loan repayment */}
            <div>
              <label htmlFor="newloan" className="block text-sm font-medium text-gray-700 mb-1.5">
                New Loan Monthly Repayment
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="newloan"
                  type="number"
                  min="0"
                  step="50"
                  placeholder="e.g. 800"
                  value={newLoanInput}
                  onChange={onChange(setNewLoanInput)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                Monthly repayment of the loan you are applying for.{" "}
                <Link href="/loan-calculator" className="text-blue-500 hover:underline">
                  Use the Loan Calculator →
                </Link>
              </p>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={handleCalculate}
                disabled={!isValid}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-200 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Calculate DSR
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

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result || !cfg ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🏦</div>
                <p className="text-gray-400 text-sm">
                  Enter your income and commitments, then tap <strong>Calculate DSR</strong>.
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  Not sure what your new repayment would be?{" "}
                  <Link href="/loan-calculator" className="text-blue-500 hover:underline">
                    Use the Loan Calculator first →
                  </Link>
                </p>
              </div>
            ) : (
              <>
                {/* DSR hero */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Your Debt Service Ratio</p>
                  <p className={`text-6xl font-bold mb-2 ${cfg.color}`}>
                    {result.dsr}%
                  </p>
                  <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                    {cfg.icon} {cfg.label}
                  </span>
                </div>

                {/* Gauge bar */}
                <div className="mb-6">
                  <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                    {/* Zone markers */}
                    <div className="absolute inset-0 flex">
                      <div className="bg-emerald-100" style={{ width: "40%" }} />
                      <div className="bg-green-100" style={{ width: "20%" }} />
                      <div className="bg-amber-100" style={{ width: "10%" }} />
                      <div className="bg-red-100" style={{ width: "30%" }} />
                    </div>
                    {/* Filled bar */}
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-700 ${cfg.bar}`}
                      style={{ width: `${gaugeWidth}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5 px-0.5">
                    <span>0%</span>
                    <span className="text-emerald-600">40%</span>
                    <span className="text-green-600">60%</span>
                    <span className="text-amber-500">70%</span>
                    <span className="text-red-500">100%</span>
                  </div>
                </div>

                {/* Category callout */}
                <div className={`rounded-xl border p-4 mb-5 ${cfg.bg} ${cfg.border}`}>
                  <p className={`font-semibold text-sm mb-1 ${cfg.color}`}>{cfg.headline}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{cfg.description}</p>
                </div>

                {/* 3-stat strip */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Existing Debt", value: `RM ${fmt(result.existingCommitments)}`, sub: "/month" },
                    { label: "New Repayment", value: `RM ${fmt(result.newRepayment)}`, sub: "/month" },
                    { label: "Total Commitments", value: `RM ${fmt(result.totalCommitments)}`, sub: "/month" },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                      <p className="font-bold text-gray-800 text-xs sm:text-sm">{s.value}</p>
                      <p className="text-xs text-gray-400">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Borrowing capacity & breakdown */}
      {result && cfg && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Income waterfall */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Income Breakdown</h2>
              <div className="space-y-3">
                {/* Income bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-gray-800">Gross Monthly Income</span>
                    <span className="font-semibold text-gray-800">RM {fmt(result.monthlyIncome)}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full" />
                </div>

                {/* Existing commitments bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600">
                      <span className="text-red-400 mr-1.5">−</span>Existing Commitments
                    </span>
                    <span className="text-red-500 font-medium">RM {fmt(result.existingCommitments)}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-300 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((result.existingCommitments / result.monthlyIncome) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* New loan bar */}
                {result.newRepayment > 0 && (
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-600">
                        <span className="text-orange-400 mr-1.5">−</span>New Loan Repayment
                      </span>
                      <span className="text-orange-500 font-medium">RM {fmt(result.newRepayment)}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-300 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((result.newRepayment / result.monthlyIncome) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Remaining */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-gray-800">Remaining Income</span>
                    <span className="font-semibold text-blue-600">RM {fmt(Math.max(0, result.monthlyIncome - result.totalCommitments))}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(0, Math.min(100 - gaugeWidth, 100))}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Borrowing capacity */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Remaining Borrowing Capacity</h2>
              <p className="text-xs text-gray-500 mb-4">
                How much additional monthly repayment you can afford based on standard bank thresholds, after your existing commitments.
              </p>
              <div className="space-y-4">
                {[
                  {
                    threshold: "60% DSR threshold",
                    label: "Standard bank limit",
                    maxDebt: result.maxDebtAt60,
                    capacity: result.capacityAt60,
                    color: result.capacityAt60 > 0 ? "text-green-700" : "text-red-600",
                    bg: result.capacityAt60 > 0 ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100",
                  },
                  {
                    threshold: "70% DSR threshold",
                    label: "Higher-income / some banks",
                    maxDebt: result.maxDebtAt70,
                    capacity: result.capacityAt70,
                    color: result.capacityAt70 > 0 ? "text-amber-700" : "text-red-600",
                    bg: result.capacityAt70 > 0 ? "bg-amber-50 border-amber-100" : "bg-red-50 border-red-100",
                  },
                ].map((row) => (
                  <div key={row.threshold} className={`rounded-xl border p-4 ${row.bg}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs font-semibold text-gray-600">{row.threshold}</p>
                        <p className="text-xs text-gray-400">{row.label}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-sm ${row.color}`}>
                          {row.capacity > 0
                            ? `+RM ${fmt(row.capacity)}/mo`
                            : "Exceeded"}
                        </p>
                        <p className="text-xs text-gray-400">additional repayment</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Max total debt: <span className="font-medium text-gray-700">RM {fmt(row.maxDebt)}/mo</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Capacity = bank threshold × income − existing commitments. Your new loan repayment is not subtracted here, so you can compare scenarios.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* How banks use DSR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How Malaysian Banks Use DSR</h2>
            <p className="text-gray-600 leading-relaxed">
              DSR (Debt Service Ratio) is the single most important metric Malaysian banks use when assessing a loan application. While credit score, employment type, and collateral all matter, a DSR above the bank&apos;s threshold is usually an automatic disqualifier — regardless of other factors. Understanding your DSR before you apply gives you the power to improve it first.
            </p>
          </div>

          {/* DSR threshold table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">DSR Range</th>
                  <th className="pb-3 font-semibold text-gray-700 text-center">Category</th>
                  <th className="pb-3 font-semibold text-gray-700">Bank Stance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { range: "≤ 40%", category: "Excellent", stance: "Very likely approved. Strong position for negotiating better rates.", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { range: "41% – 60%", category: "Good", stance: "Acceptable to most Malaysian banks for personal, car, and home loans.", color: "text-green-600", bg: "bg-green-50" },
                  { range: "61% – 70%", category: "Moderate", stance: "Borderline. Some banks allow up to 70% for incomes above RM10,000/month.", color: "text-amber-600", bg: "bg-amber-50" },
                  { range: "> 70%", category: "High Risk", stance: "Most banks will decline. Focus on reducing existing commitments first.", color: "text-red-600", bg: "bg-red-50" },
                ].map((row) => (
                  <tr key={row.range} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-800">{row.range}</td>
                    <td className="py-3 text-center">
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${row.bg} ${row.color}`}>
                        {row.category}
                      </span>
                    </td>
                    <td className="py-3 text-gray-600 text-xs sm:text-sm">{row.stance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3-tip cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { emoji: "💳", title: "Credit Cards Count", body: "Banks count 5% of your total credit limit per card as a monthly commitment — even if you never carry a balance. Cancel cards you don't use before applying." },
              { emoji: "📋", title: "PTPTN Included", body: "PTPTN loan repayments are factored into your DSR. If you are still repaying PTPTN, this reduces the new loan you can qualify for." },
              { emoji: "💑", title: "Joint Applications", body: "Applying jointly with a spouse or co-borrower combines both incomes, which can significantly lower your combined DSR and improve approval chances." },
            ].map((c) => (
              <div key={c.title} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <div className="text-2xl mb-2">{c.emoji}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1.5">{c.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips to improve DSR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Tips to Improve Your DSR</h2>
          <p className="text-gray-500 text-sm mb-6">If your DSR is Moderate or High Risk, these steps can help bring it below 60% before you apply.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { tip: "Settle the smallest loans first", detail: "Eliminating a small personal loan completely removes its monthly repayment from your DSR, which is more impactful than making partial payments on multiple debts." },
              { tip: "Cancel unused credit cards", detail: "Banks count 5% of your credit limit per card regardless of usage. Cancelling a card with a RM10,000 limit removes RM500 from your monthly commitments in the bank's DSR calculation." },
              { tip: "Refinance to a longer tenure", detail: "Refinancing existing loans to a longer tenure lowers the monthly repayment — reducing your DSR. You will pay more interest overall, but it improves your approval odds for the new loan." },
              { tip: "Include all income sources", detail: "If you have verified rental income, commission, or allowances, ensure your bank receives documentation. A higher verified gross income directly lowers your DSR percentage." },
              { tip: "Apply for a smaller loan", detail: "Reducing the loan amount or extending the tenure of the new loan lowers its monthly repayment, bringing your total DSR back into the acceptable range." },
              { tip: "Consider a joint application", detail: "Adding a co-borrower with income and low existing commitments combines household income and can substantially reduce the joint DSR, improving approval likelihood." },
            ].map((row) => (
              <div key={row.tip} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-0.5">{row.tip}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{row.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What counts as commitments */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">What Counts as Monthly Commitments?</h2>
          <p className="text-gray-500 text-sm mb-6">
            Use these to build your &quot;Existing Monthly Commitments&quot; figure above.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">Commitment Type</th>
                  <th className="pb-3 font-semibold text-gray-700">How to Find the Amount</th>
                </tr>
              </thead>
              <tbody>
                {commitmentExamples.map((row) => (
                  <tr key={row.item} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-800">{row.item}</td>
                    <td className="py-3 text-gray-500 text-xs sm:text-sm">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-xs text-blue-700">
            <strong>Not included in DSR:</strong> Rent, utilities, groceries, insurance premiums, and other living expenses. Only licensed loan repayments count.
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/loan-calculator", emoji: "🏦", title: "Loan Calculator", desc: "Get your estimated monthly repayment for a new loan — use that figure as your new repayment input above." },
              { href: "/salary-calculator-malaysia", emoji: "💰", title: "Salary Calculator", desc: "See your gross and net take-home pay including EPF, SOCSO, and PCB deductions." },
              { href: "/income-tax-calculator-malaysia", emoji: "🧾", title: "Income Tax Calculator", desc: "Calculate your annual income tax payable and effective tax rate for YA 2024." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex gap-3 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-2xl flex-shrink-0">{link.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{link.title} →</p>
                  <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
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
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
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
