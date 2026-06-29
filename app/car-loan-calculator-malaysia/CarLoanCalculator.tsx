"use client";

import { useState, useMemo } from "react";
import { trackCarLoanCalculated } from "@/lib/gtag";

// ─── Formatters ───────────────────────────────────────────────────────────────

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtInt(n: number) {
  return n.toLocaleString("en-MY");
}
function r2(n: number) {
  return Math.round(n * 100) / 100;
}

// ─── Core Calculation (flat rate hire purchase) ───────────────────────────────

interface YearRow {
  year: number;
  principal: number;
  interest: number;
  balance: number;
}

interface CalcResult {
  loanAmount: number;
  monthly: number;
  totalInterest: number;
  totalPayment: number;
  schedule: YearRow[];
}

function calculate(carPrice: number, downPayment: number, flatRate: number, years: number): CalcResult {
  const loanAmount = carPrice - downPayment;
  const months = years * 12;
  const totalInterest = r2(loanAmount * (flatRate / 100) * years);
  const totalPayment = r2(loanAmount + totalInterest);
  const monthly = r2(totalPayment / months);

  const monthlyPrincipal = loanAmount / months;
  const monthlyInterest = totalInterest / months;
  const schedule: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    const yP = r2(monthlyPrincipal * 12);
    const yI = r2(monthlyInterest * 12);
    const balance = Math.max(0, r2(loanAmount - monthlyPrincipal * y * 12));
    schedule.push({ year: y, principal: yP, interest: yI, balance });
  }

  return { loanAmount: r2(loanAmount), monthly, totalInterest, totalPayment, schedule };
}

// ─── Status Types & Colour Maps ───────────────────────────────────────────────

type OverallStatus = "good" | "warning" | "risk";
type AffordStatus = "excellent" | "healthy" | "warning" | "risk";
type DsrStatus = "healthy" | "acceptable" | "warning" | "risk";

const OVERALL_C: Record<OverallStatus, { bg: string; border: string; text: string; dot: string; label: string }> = {
  good:    { bg: "bg-green-50",  border: "border-green-300",  text: "text-green-800",  dot: "🟢", label: "Good to Proceed" },
  warning: { bg: "bg-amber-50",  border: "border-amber-300",  text: "text-amber-800",  dot: "🟡", label: "Consider Carefully" },
  risk:    { bg: "bg-red-50",    border: "border-red-300",    text: "text-red-800",    dot: "🔴", label: "High Risk" },
};

const AFFORD_C: Record<AffordStatus, { badge: string; bar: string }> = {
  excellent: { badge: "bg-green-100 text-green-800", bar: "bg-green-500" },
  healthy:   { badge: "bg-blue-100 text-blue-800",   bar: "bg-blue-500" },
  warning:   { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" },
  risk:      { badge: "bg-red-100 text-red-800",     bar: "bg-red-500" },
};

const DSR_C: Record<DsrStatus, { badge: string; bar: string }> = {
  healthy:    { badge: "bg-green-100 text-green-800", bar: "bg-green-500" },
  acceptable: { badge: "bg-blue-100 text-blue-800",   bar: "bg-blue-500" },
  warning:    { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" },
  risk:       { badge: "bg-red-100 text-red-800",     bar: "bg-red-500" },
};

// ─── Small UI Components ──────────────────────────────────────────────────────

function DashCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xl">{icon}</span>
      <h3 className="font-bold text-gray-800 text-sm sm:text-base">{title}</h3>
    </div>
  );
}

function StatusBadge({ label, className }: { label: string; className: string }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}>
      {label}
    </span>
  );
}

function ProgressBar({ pct, color, className = "" }: { pct: number; color: string; className?: string }) {
  return (
    <div className={`w-full bg-gray-100 rounded-full h-2 overflow-hidden ${className}`}>
      <div className={`h-2 rounded-full transition-all duration-700 ${color}`} style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="text-2xl tracking-tight">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-amber-400" : "text-gray-200"}>★</span>
      ))}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CarLoanCalculator() {
  // Form
  const [carPrice, setCarPrice]     = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [rate, setRate]             = useState("");
  const [years, setYears]           = useState("");
  const [salary, setSalary]         = useState("");
  const [otherDebts, setOtherDebts] = useState("");

  // UI
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll]     = useState(false);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  // Parsed
  const price    = parseFloat(carPrice.replace(/,/g, ""))    || 0;
  const dp       = parseFloat(downPayment.replace(/,/g, "")) || 0;
  const flatRate = parseFloat(rate)  || 0;
  const tenure   = parseInt(years)   || 0;
  const salaryNum  = parseFloat(salary.replace(/,/g, ""))    || 0;
  const debtsNum   = parseFloat(otherDebts.replace(/,/g, "")) || 0;

  const dpPct  = price > 0 ? Math.round((dp / price) * 100) : 0;
  const isValid = price > 0 && dp >= 0 && dp < price && flatRate >= 0 && tenure > 0 && tenure <= 9;

  // ── Calculation ─────────────────────────────────────────────────────────────
  const result = useMemo<CalcResult | null>(
    () => (submitted && isValid ? calculate(price, dp, flatRate, tenure) : null),
    [submitted, price, dp, flatRate, tenure]
  );

  // ── Dashboard (live — salary/debts update without resetting) ────────────────
  const dash = useMemo(() => {
    if (!result) return null;

    const salaryProvided  = salaryNum > 0;
    // Fallback: bank typically uses 1/3 of income rule → monthly × 3
    const effectiveSalary = salaryProvided ? salaryNum : result.monthly * 3;
    const totalMonthlyDebt = result.monthly + debtsNum;

    // ── Card 2: Affordability ──────────────────────────────────────────────
    const affPct = (result.monthly / effectiveSalary) * 100;
    let affStatus: AffordStatus;
    let affLabel: string;
    let affNote: string;
    if (affPct < 15) {
      affStatus = "excellent"; affLabel = "Excellent";
      affNote = "This car instalment is well within your income. You have strong room for savings and other commitments.";
    } else if (affPct < 25) {
      affStatus = "healthy"; affLabel = "Healthy";
      affNote = "A comfortable share of your income. Most Malaysians can manage a car at this level without financial strain.";
    } else if (affPct < 35) {
      affStatus = "warning"; affLabel = "Requires Care";
      affNote = "Car instalment is consuming a notable portion of your income. Ensure your total debts (DSR) stay below 60%.";
    } else {
      affStatus = "risk"; affLabel = "High Pressure";
      affNote = "This car may place serious strain on your monthly cash flow. Consider a lower price point or a larger down payment.";
    }

    // ── Card 3: DSR Impact ─────────────────────────────────────────────────
    const dsrPct = (totalMonthlyDebt / effectiveSalary) * 100;
    let dsrStatus: DsrStatus;
    let dsrLabel: string;
    if (dsrPct < 40)      { dsrStatus = "healthy";    dsrLabel = "Healthy"; }
    else if (dsrPct < 55) { dsrStatus = "acceptable"; dsrLabel = "Acceptable"; }
    else if (dsrPct < 70) { dsrStatus = "warning";    dsrLabel = "High"; }
    else                   { dsrStatus = "risk";       dsrLabel = "Very High Risk"; }

    // ── Card 4: Down Payment Analysis ─────────────────────────────────────
    const recommended10Dp    = price * 0.10;
    const recommended20Dp    = price * 0.20;
    const loan10  = price - recommended10Dp;
    const loan20  = price - recommended20Dp;
    const monthly10 = r2((loan10  + loan10  * (flatRate / 100) * tenure) / (tenure * 12));
    const monthly20 = r2((loan20  + loan20  * (flatRate / 100) * tenure) / (tenure * 12));
    const interest10 = r2(loan10 * (flatRate / 100) * tenure);
    const interest20 = r2(loan20 * (flatRate / 100) * tenure);
    const interestSavedAt20 = dp < recommended20Dp ? r2(result.totalInterest - interest20) : 0;

    // ── Card 5: Tenure Comparison ──────────────────────────────────────────
    const scenarioYears = [5, 7, 9];
    const scenarios = scenarioYears.map((y) => {
      const loan   = result.loanAmount;
      const ti     = r2(loan * (flatRate / 100) * y);
      const tp     = r2(loan + ti);
      const m      = r2(tp / (y * 12));
      return { years: y, monthly: m, totalInterest: ti, totalPayment: tp, affPct: (m / effectiveSalary) * 100, recommended: false };
    });
    const recIdx = scenarios.findIndex((s) => s.affPct <= 25);
    scenarios[recIdx >= 0 ? recIdx : 0].recommended = true;

    // ── Card 8: Health Score ───────────────────────────────────────────────
    const intBurdenPct = (result.totalInterest / result.totalPayment) * 100;
    const afScore  = affPct < 15 ? 25 : affPct < 25 ? 20 : affPct < 35 ? 12 : 5;
    const dsrScore = dsrPct < 40 ? 25 : dsrPct < 55 ? 18 : dsrPct < 70 ? 8 : 0;
    const dpScore  = dpPct >= 30 ? 20 : dpPct >= 20 ? 17 : dpPct >= 10 ? 12 : 5;
    const intScore = intBurdenPct < 20 ? 15 : intBurdenPct < 30 ? 12 : intBurdenPct < 40 ? 8 : 3;
    const tenScore = tenure <= 5 ? 15 : tenure <= 7 ? 10 : 5;
    const healthScore = afScore + dsrScore + dpScore + intScore + tenScore;
    const healthStars = healthScore >= 80 ? 5 : healthScore >= 60 ? 4 : healthScore >= 40 ? 3 : healthScore >= 20 ? 2 : 1;

    const scoreFactors = [
      { label: "Monthly Affordability", score: afScore,  max: 25, tip: affPct >= 30 ? "Consider a lower-priced car or increase your down payment" : "Monthly instalment is within a healthy range" },
      { label: "Debt Service Ratio",    score: dsrScore, max: 25, tip: dsrPct >= 55 ? "Reduce existing debts before taking on this car loan" : "Your total debt load is within acceptable limits" },
      { label: "Down Payment",          score: dpScore,  max: 20, tip: dpPct < 20 ? "A 20% down payment reduces monthly instalments and total interest significantly" : "Strong down payment — good start" },
      { label: "Interest Burden",       score: intScore, max: 15, tip: intBurdenPct >= 35 ? "Higher flat rate or longer tenure — consider negotiating the rate" : "Interest as a share of total repayment is reasonable" },
      { label: "Loan Tenure",           score: tenScore, max: 15, tip: tenure >= 9 ? "Shortest tenure you can afford saves significant interest" : "Tenure is sensible" },
    ];

    // ── Card 1: Overall Recommendation ────────────────────────────────────
    const reasons: string[] = [];
    if (affPct >= 35) reasons.push("Instalment exceeds 35% of monthly income — risk of cash flow strain");
    if (dsrPct >= 65) reasons.push("Combined DSR may exceed most banks' approval threshold of 60–70%");
    if (dpPct < 10)   reasons.push("Down payment is below the typical minimum of 10%");
    if (intBurdenPct > 40) reasons.push(`${Math.round(intBurdenPct)}% of total repayment is interest — consider a shorter tenure`);

    let overallStatus: OverallStatus;
    let overallMessage: string;
    if (healthScore >= 60 && affPct < 30 && dsrPct < 60) {
      overallStatus = "good";
      overallMessage = "Based on the information provided, this car loan appears financially manageable. Your affordability ratio and debt levels are within sensible ranges. Ensure your income is stable and you have an emergency fund of at least 3 months of expenses before signing.";
    } else if (healthScore >= 35 || (affPct < 35 && dsrPct < 70)) {
      overallStatus = "warning";
      overallMessage = "This car loan is within reach but warrants careful consideration. Review your monthly cash flow after all commitments, and confirm your DSR with your bank before applying.";
    } else {
      overallStatus = "risk";
      overallMessage = "This car loan may place significant pressure on your monthly finances. Consider a more affordable car, a larger down payment, or reducing existing debts before proceeding.";
    }

    return {
      salaryProvided, effectiveSalary,
      affPct, affStatus, affLabel, affNote,
      dsrPct, dsrStatus, dsrLabel, totalMonthlyDebt,
      recommended10Dp, recommended20Dp, monthly10, monthly20, interest10, interest20, interestSavedAt20,
      scenarios,
      healthScore, healthStars, scoreFactors,
      overallStatus, overallMessage, reasons,
      intBurdenPct,
    };
  }, [result, salaryNum, debtsNum, price, dp, flatRate, tenure, dpPct]);

  // Result bar
  const interestPct  = result ? Math.round((result.totalInterest / result.totalPayment) * 100) : 0;
  const principalPct = result ? 100 - interestPct : 0;
  const visible = result ? (showAll ? result.schedule : result.schedule.slice(0, 5)) : [];

  // Checklist
  const checklistItems = result
    ? [
        { id: "income",    label: "My income is stable — employed for at least 6 months, or self-employed with 2+ years of consistent income" },
        { id: "ccris",     label: "I have checked my CCRIS and CTOS report and there are no unresolved missed payments or defaults" },
        { id: "emergency", label: `Emergency fund of at least RM ${fmtInt(Math.round(result.monthly * 3))} (3 months of instalments) is ready in a separate account` },
        { id: "dsr",       label: "My total monthly debt commitments (including this car loan) are below 60% of gross income" },
        { id: "dp",        label: `Down payment of RM ${fmtInt(dp)} (${dpPct}%) is confirmed and available — not borrowed or from emergency savings` },
        { id: "insurance", label: "Comprehensive car insurance (~RM 1,500–3,000/year depending on car value) is budgeted" },
        { id: "roadtax",   label: "Annual road tax and JPJ renewal fees are factored into my monthly budget" },
        { id: "service",   label: "Scheduled servicing, tyres, and unexpected repair costs (~RM 1,500–3,000/year) are planned" },
        { id: "deprec",    label: "I understand this car will lose 15–20% of its value in the first year and ~50% over 5 years" },
      ]
    : [];
  const checkedCount = checklistItems.filter((i) => checklist[i.id]).length;

  // Handlers
  const handleCalculate = () => {
    if (isValid) { setSubmitted(true); trackCarLoanCalculated(price - dp, tenure); }
  };
  const handleReset = () => {
    setCarPrice(""); setDownPayment(""); setRate(""); setYears("");
    setSalary(""); setOtherDebts("");
    setSubmitted(false); setShowAll(false); setChecklist({});
  };
  const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value); setSubmitted(false); setShowAll(false);
  };
  const toggleCheck = (id: string) => setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      {/* ── Info Banner ──────────────────────────────────────────────────────── */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-sm text-amber-700">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span><strong>Flat rate estimate.</strong> Uses hire purchase flat rate method standard for Malaysian car loans. Actual repayments depend on your hire purchase agreement.</span>
        </div>
      </div>

      {/* ── Form + Results ────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Car Loan Details</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Car Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                  <input type="number" min="1000" step="1000" placeholder="e.g. 100000"
                    value={carPrice} onChange={handleChange(setCarPrice)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Down Payment {dpPct > 0 && <span className="text-orange-600 font-semibold">({dpPct}%)</span>}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                  <input type="number" min="0" step="1000" placeholder="e.g. 10000"
                    value={downPayment} onChange={handleChange(setDownPayment)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Minimum 10% for most Malaysian banks</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Flat Interest Rate (% p.a.)</label>
                <div className="relative">
                  <input type="number" min="0" max="10" step="0.1" placeholder="e.g. 3.0"
                    value={rate} onChange={handleChange(setRate)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Hire purchase flat rate (typically 2.5%–3.5%)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Loan Tenure</label>
                <div className="relative">
                  <input type="number" min="1" max="9" step="1" placeholder="e.g. 7"
                    value={years} onChange={handleChange(setYears)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-16 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">years</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[3, 5, 7, 9].map((y) => (
                    <button key={y} onClick={() => { setYears(String(y)); setSubmitted(false); }}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${years === String(y) ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-600"}`}>
                      {y}yr
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional: Personalise Dashboard */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Personalise Your Dashboard <span className="font-normal normal-case text-gray-300">— optional</span></p>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Monthly Gross Salary</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                      <input type="number" min="0" step="100" placeholder="e.g. 5000"
                        value={salary} onChange={(e) => setSalary(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 pl-9 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Other Monthly Debt Payments</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                      <input type="number" min="0" step="50" placeholder="Mortgage, personal loan…"
                        value={otherDebts} onChange={(e) => setOtherDebts(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 pl-9 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              <button onClick={handleCalculate} disabled={!isValid}
                className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 rounded-xl transition-colors">
                Calculate Car Loan
              </button>
              {result && (
                <button onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm">
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🚗</div>
                <p className="text-gray-400 text-sm">Enter your car loan details and tap <strong>Calculate Car Loan</strong>.</p>
                <p className="text-gray-300 text-xs mt-2">Add your salary to unlock your personalised Financial Decision Dashboard.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Estimated Monthly Instalment</p>
                  <p className="text-5xl font-bold text-orange-500 mb-1">RM {fmt(result.monthly)}</p>
                  <p className="text-sm text-gray-400">per month for {tenure} year{tenure > 1 ? "s" : ""}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Loan Amount",     value: `RM ${fmt(result.loanAmount)}`,    sub: "After down payment" },
                    { label: "Total Interest",  value: `RM ${fmt(result.totalInterest)}`, sub: "Cost of financing", accent: true },
                    { label: "Total Repayment", value: `RM ${fmt(result.totalPayment)}`,  sub: "Loan + interest" },
                    { label: "Effective Rate",  value: `~${(flatRate * 1.8).toFixed(1)}% p.a.`, sub: "Reducing balance equiv." },
                  ].map((s) => (
                    <div key={s.label} className={`rounded-xl p-4 ${s.accent ? "bg-red-50" : "bg-gray-50"}`}>
                      <p className={`text-xs mb-0.5 ${s.accent ? "text-red-500" : "text-gray-500"}`}>{s.label}</p>
                      <p className={`font-bold text-sm ${s.accent ? "text-red-700" : "text-gray-800"}`}>{s.value}</p>
                      <p className="text-xs text-gray-400">{s.sub}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex rounded-full overflow-hidden h-3 mb-1.5">
                    <div className="bg-orange-400 transition-all duration-500" style={{ width: `${principalPct}%` }} />
                    <div className="bg-red-400 transition-all duration-500"    style={{ width: `${interestPct}%` }} />
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block" />Principal {principalPct}%</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />Interest {interestPct}%</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Amortisation Table ─────────────────────────────────────────────────── */}
      {result && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Annual Repayment Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-100">
                    <th className="pb-3 font-semibold text-gray-700">Year</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right">Principal</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right">Interest</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right hidden sm:table-cell">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((row) => (
                    <tr key={row.year} className="border-b border-gray-50 last:border-0">
                      <td className="py-3 text-gray-700 font-medium">Y{row.year}</td>
                      <td className="py-3 text-right text-gray-700">{fmt(row.principal)}</td>
                      <td className="py-3 text-right text-red-500">{fmt(row.interest)}</td>
                      <td className="py-3 text-right text-gray-500 hidden sm:table-cell">{fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {result.schedule.length > 5 && (
              <button onClick={() => setShowAll(!showAll)}
                className="mt-4 text-sm text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
                {showAll ? "Show less" : `Show all ${result.schedule.length} years`}
                <svg className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* ── FINANCIAL DECISION DASHBOARD ───────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {result && dash && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📊</span>
              <h2 className="text-2xl font-bold text-gray-900">Financial Decision Dashboard</h2>
            </div>
            <p className="text-gray-500 text-sm">Beyond the monthly instalment — here is what this car loan really means for your financial health.</p>
            {!dash.salaryProvided && (
              <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-3 inline-block">
                💡 Add your monthly gross salary in the form above for a fully personalised assessment. Estimates below use the minimum recommended income.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* ── Card 1: Overall Recommendation ───────────────────────────── */}
            {(() => {
              const c = OVERALL_C[dash.overallStatus];
              return (
                <DashCard className={`md:col-span-2 border-2 ${c.border} ${c.bg}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${c.bg} border ${c.border}`}>
                        {c.dot}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl font-bold ${c.text}`}>{c.label}</h3>
                      </div>
                      <p className={`text-sm leading-relaxed ${c.text} mb-3`}>{dash.overallMessage}</p>
                      {dash.reasons.length > 0 && (
                        <ul className="space-y-1">
                          {dash.reasons.map((r, i) => (
                            <li key={i} className={`text-xs flex items-start gap-2 ${c.text}`}>
                              <span className="mt-0.5 flex-shrink-0">⚠️</span>{r}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <Stars count={dash.healthStars} />
                      <p className={`text-sm font-bold mt-1 ${c.text}`}>{dash.healthScore}/100</p>
                    </div>
                  </div>
                </DashCard>
              );
            })()}

            {/* ── Card 2: Monthly Affordability ────────────────────────────── */}
            <DashCard>
              <CardTitle icon="💳" title="Monthly Affordability" />
              {!dash.salaryProvided && (
                <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-2 py-1 mb-3">Estimated — add salary for exact figures</p>
              )}
              <div className="flex items-end justify-between mb-3">
                <div>
                  <p className="text-3xl font-bold text-gray-900">{Math.round(dash.affPct)}%</p>
                  <p className="text-xs text-gray-500">of monthly income</p>
                </div>
                <StatusBadge label={dash.affLabel} className={AFFORD_C[dash.affStatus].badge} />
              </div>
              <ProgressBar pct={(dash.affPct / 45) * 100} color={AFFORD_C[dash.affStatus].bar} className="mb-3" />
              <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span>0%</span><span className="text-green-600">15% Excellent</span><span className="text-amber-600">25% Healthy</span><span className="text-red-600">35%+</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{dash.affNote}</p>
              <div className="mt-3 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs">
                <div><p className="text-gray-400">Monthly instalment</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(result.monthly))}</p></div>
                <div><p className="text-gray-400">{dash.salaryProvided ? "Your salary" : "Min. recommended"}</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(dash.effectiveSalary))}</p></div>
              </div>
            </DashCard>

            {/* ── Card 3: Estimated DSR ─────────────────────────────────────── */}
            <DashCard>
              <CardTitle icon="📊" title="Estimated DSR Impact" />
              {!dash.salaryProvided && (
                <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-2 py-1 mb-3">Estimated — add salary for exact figures</p>
              )}
              <div className="flex items-end justify-between mb-3">
                <div>
                  <p className="text-3xl font-bold text-gray-900">{Math.round(dash.dsrPct)}%</p>
                  <p className="text-xs text-gray-500">total debt ÷ income</p>
                </div>
                <StatusBadge label={dash.dsrLabel} className={DSR_C[dash.dsrStatus].badge} />
              </div>
              <ProgressBar pct={(dash.dsrPct / 80) * 100} color={DSR_C[dash.dsrStatus].bar} className="mb-3" />
              <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span>0%</span><span className="text-green-600">40% Healthy</span><span className="text-amber-600">60%</span><span className="text-red-600">70%+</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Most Malaysian banks assess your Debt Service Ratio (DSR) when approving a car loan. A DSR below 60% is generally required. Your DSR includes this car loan plus all existing monthly debt commitments.
              </p>
              <div className="mt-3 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs">
                <div><p className="text-gray-400">This car loan</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(result.monthly))}</p></div>
                <div><p className="text-gray-400">All other debts</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(debtsNum))}</p></div>
              </div>
            </DashCard>

            {/* ── Card 4: Down Payment Analysis ────────────────────────────── */}
            <DashCard>
              <CardTitle icon="🏦" title="Down Payment Analysis" />
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Your Down Payment</p>
                  <p className="font-bold text-gray-900">RM {fmtInt(Math.round(dp))}</p>
                  <p className="text-xs text-gray-400">{dpPct}% of price</p>
                </div>
                {dpPct < 20 ? (
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <p className="text-xs text-blue-600 mb-1">At 20% down payment</p>
                    <p className="font-bold text-blue-800">RM {fmtInt(Math.round(dash.recommended20Dp))}</p>
                    <p className="text-xs text-blue-400">RM {fmtInt(Math.round(dash.monthly20))}/month</p>
                  </div>
                ) : (
                  <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                    <p className="text-xs text-green-600 mb-1">Strong down payment ✓</p>
                    <p className="font-bold text-green-800">{dpPct}% paid</p>
                    <p className="text-xs text-green-400">Above 20% target</p>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                {([
                  { label: "10% Down", dp: dash.recommended10Dp, monthly: dash.monthly10, interest: dash.interest10 },
                  { label: "20% Down", dp: dash.recommended20Dp, monthly: dash.monthly20, interest: dash.interest20 },
                ] as const).map((s) => (
                  <div key={s.label} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 text-xs">
                    <span className="font-semibold text-gray-700">{s.label} (RM {fmtInt(Math.round(s.dp))})</span>
                    <span className="text-gray-600">RM {fmtInt(Math.round(s.monthly))}/mo</span>
                    <span className="text-red-500">RM {fmtInt(Math.round(s.interest))} interest</span>
                  </div>
                ))}
              </div>
              {dpPct < 20 && dash.interestSavedAt20 > 0 && (
                <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 mt-3">
                  Saving to 20% down payment could save you <strong>RM {fmtInt(Math.round(dash.interestSavedAt20))}</strong> in total interest.
                </p>
              )}
            </DashCard>

            {/* ── Card 5: Total Interest Burden ────────────────────────────── */}
            <DashCard>
              <CardTitle icon="💰" title="Total Interest Burden" />
              <div className="space-y-3 mb-4">
                <div className="text-center bg-gray-50 rounded-2xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Total Interest Paid</p>
                  <p className="text-3xl font-bold text-red-600">RM {fmtInt(Math.round(result.totalInterest))}</p>
                  <p className="text-xs text-gray-400">on a RM {fmtInt(Math.round(result.loanAmount))} loan</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex rounded-full overflow-hidden h-5 mb-1.5">
                  <div className="bg-orange-400 flex items-center justify-center text-white text-xs font-medium" style={{ width: `${principalPct}%` }}>
                    {principalPct > 20 && `${principalPct}%`}
                  </div>
                  <div className="bg-red-400 flex items-center justify-center text-white text-xs font-medium" style={{ width: `${interestPct}%` }}>
                    {interestPct > 15 && `${interestPct}%`}
                  </div>
                </div>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />Principal</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400 inline-block" />Interest ({Math.round(dash.intBurdenPct)}%)</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-500 mb-1">Total Repayment</p><p className="font-bold text-gray-900">RM {fmtInt(Math.round(result.totalPayment))}</p></div>
                <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-500 mb-1">Effective Rate</p><p className="font-bold text-gray-900">~{(flatRate * 1.8).toFixed(1)}% p.a.</p></div>
              </div>
              {dash.intBurdenPct > 35 && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2 mt-3">
                  Over {Math.round(dash.intBurdenPct)}% of your repayment is interest. A shorter tenure or larger down payment significantly reduces this.
                </p>
              )}
            </DashCard>

            {/* ── Card 6: Tenure Comparison ─────────────────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="⚖️" title="Tenure Comparison — Find Your Best Balance" />
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-3 text-left font-semibold text-gray-600 text-xs">Tenure</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs">Monthly</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs hidden sm:table-cell">Total Interest</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs hidden sm:table-cell">Total Repayment</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs">Income %</th>
                      <th className="pb-3 text-center font-semibold text-gray-600 text-xs"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {dash.scenarios.map((s) => {
                      const isCurrent = s.years === tenure;
                      const affSt: AffordStatus = s.affPct < 15 ? "excellent" : s.affPct < 25 ? "healthy" : s.affPct < 35 ? "warning" : "risk";
                      return (
                        <tr key={s.years}
                          className={`border-b border-gray-50 last:border-0 ${s.recommended ? "bg-blue-50" : isCurrent ? "bg-gray-50" : ""}`}>
                          <td className="py-3 font-semibold text-gray-800">
                            {s.years} years
                            {s.recommended && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">Recommended</span>}
                            {isCurrent && !s.recommended && <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">Current</span>}
                          </td>
                          <td className="py-3 text-right font-bold text-gray-900">RM {fmtInt(Math.round(s.monthly))}</td>
                          <td className="py-3 text-right text-red-500 hidden sm:table-cell">RM {fmtInt(Math.round(s.totalInterest))}</td>
                          <td className="py-3 text-right text-gray-600 hidden sm:table-cell">RM {fmtInt(Math.round(s.totalPayment))}</td>
                          <td className="py-3 text-right">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${AFFORD_C[affSt].badge}`}>{Math.round(s.affPct)}%</span>
                          </td>
                          <td className="py-3 text-center">
                            {s.recommended && <span className="text-blue-600 text-lg">✓</span>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                &quot;Recommended&quot; = shortest tenure where monthly instalment is ≤25% of income. All scenarios use the same loan amount and interest rate.
              </p>
            </DashCard>

            {/* ── Card 7: Decision Checklist ────────────────────────────────── */}
            <DashCard className="md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">✅</span>
                  <h3 className="font-bold text-gray-800">Car Buyer Decision Checklist</h3>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${checkedCount === checklistItems.length ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                  {checkedCount} / {checklistItems.length}
                </span>
              </div>
              <ProgressBar pct={(checkedCount / checklistItems.length) * 100} color={checkedCount === checklistItems.length ? "bg-green-500" : "bg-orange-400"} className="mb-5" />
              <div className="space-y-2">
                {checklistItems.map((item) => (
                  <label key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${checklist[item.id] ? "bg-green-50 border border-green-200" : "bg-gray-50 border border-transparent hover:border-gray-200"}`}>
                    <input type="checkbox" checked={!!checklist[item.id]} onChange={() => toggleCheck(item.id)}
                      className="mt-0.5 w-4 h-4 rounded accent-green-600 flex-shrink-0" />
                    <span className={`text-sm leading-relaxed ${checklist[item.id] ? "text-green-800 line-through decoration-green-400" : "text-gray-700"}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
              {checkedCount === checklistItems.length && (
                <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <p className="text-green-800 font-semibold">🎉 All items checked — you are well-prepared to proceed!</p>
                </div>
              )}
            </DashCard>

            {/* ── Card 8: Financial Health Score ────────────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="⭐" title="Financial Health Score" />
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="flex-shrink-0 text-center sm:text-left">
                  <div className="inline-flex flex-col items-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <p className="text-6xl font-black text-gray-900">{dash.healthScore}</p>
                    <p className="text-sm text-gray-400 mb-2">out of 100</p>
                    <Stars count={dash.healthStars} />
                    <p className={`text-sm font-semibold mt-2 ${dash.healthScore >= 60 ? "text-green-600" : dash.healthScore >= 40 ? "text-amber-600" : "text-red-600"}`}>
                      {dash.healthScore >= 80 ? "Excellent" : dash.healthScore >= 60 ? "Good" : dash.healthScore >= 40 ? "Fair" : "Needs Improvement"}
                    </p>
                  </div>
                  {!dash.salaryProvided && (
                    <p className="text-xs text-gray-400 mt-2 text-center">Add salary for full score accuracy</p>
                  )}
                </div>
                <div className="flex-1 space-y-4 w-full">
                  {dash.scoreFactors.map((f) => (
                    <div key={f.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{f.label}</span>
                        <span className="text-sm font-bold text-gray-900">{f.score}<span className="text-gray-400 font-normal">/{f.max}</span></span>
                      </div>
                      <ProgressBar pct={(f.score / f.max) * 100}
                        color={f.score / f.max >= 0.8 ? "bg-green-500" : f.score / f.max >= 0.5 ? "bg-blue-500" : f.score / f.max >= 0.3 ? "bg-amber-500" : "bg-red-500"}
                        className="mb-1" />
                      <p className="text-xs text-gray-400">{f.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DashCard>

            {/* ── Card 9: Next Recommended Actions ─────────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="🗺️" title="Your Next Steps" />
              <p className="text-sm text-gray-500 mb-5">A car purchase triggers a chain of financial commitments. Work through these in order:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { step: 1, icon: "📊", title: "Calculate Your Full DSR", desc: "Know your Debt Service Ratio before walking into any bank or dealer.", href: "/dsr-calculator-malaysia", cta: "DSR Calculator →" },
                  { step: 2, icon: "💰", title: "Check Your Take-Home Pay", desc: "Understand exactly how much you have left each month after EPF, SOCSO, and PCB deductions.", href: "/salary-calculator-malaysia", cta: "Salary Calculator →" },
                  { step: 3, icon: "🏠", title: "Plan for a House Too?", desc: "This car loan reduces your future mortgage eligibility. See how much house you can still afford.", href: "/mortgage-calculator-malaysia", cta: "Mortgage Calculator →" },
                  { step: 4, icon: "🛡️", title: "Build Your Emergency Fund", desc: `You need at least RM ${fmtInt(Math.round(result.monthly * 3))} before signing any hire purchase agreement.`, href: "/savings-calculator-malaysia", cta: "Savings Calculator →" },
                  { step: 5, icon: "📈", title: "Calculate Your EPF Savings", desc: "Understand your EPF balance and whether a car purchase impacts your retirement readiness.", href: "/epf-calculator-malaysia", cta: "EPF Calculator →" },
                  { step: 6, icon: "📋", title: "Review Your Income Tax Position", desc: "Car loan interest is generally not tax-deductible, but other tax-saving strategies can offset the cost.", href: "/income-tax-calculator-malaysia", cta: "Income Tax Calculator →" },
                ].map((a) => (
                  <a key={a.step} href={a.href}
                    className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:bg-orange-50 hover:border-orange-200 transition-colors group">
                    <div className="flex-shrink-0 w-9 h-9 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center font-bold text-sm">
                      {a.step}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-800 group-hover:text-orange-700 mb-0.5">{a.icon} {a.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mb-1.5">{a.desc}</p>
                      <p className="text-xs font-semibold text-orange-600">{a.cta}</p>
                    </div>
                  </a>
                ))}
              </div>
            </DashCard>

          </div>
        </section>
      )}

      {/* ── Quick Tips (preserved) ────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { emoji: "📋", title: "Flat Rate Explained", body: "Hire purchase in Malaysia applies interest to the full loan amount throughout the tenure. A 3% flat rate means 3% × original principal × years — regardless of how much you've repaid." },
            { emoji: "💡", title: "Effective vs Flat", body: "A 3% flat rate is roughly equivalent to 5.5–6% reducing balance. Always compare effective rates when choosing between HP and other financing options." },
            { emoji: "🏦", title: "Early Settlement", body: "Under the Hire Purchase Act 1967, early settlement rebates in Malaysia use the Rule-of-78 method — the rebate is proportional to the remaining instalments." },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="text-2xl mb-2">{c.emoji}</div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
