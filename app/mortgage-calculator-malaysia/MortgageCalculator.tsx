"use client";

import { useState, useMemo } from "react";
import { trackMortgageCalculated } from "@/lib/gtag";

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

// ─── Core Mortgage Maths ─────────────────────────────────────────────────────

function pmt(principal: number, annualRate: number, years: number): number {
  const months = years * 12;
  if (annualRate === 0 || months === 0) return principal / months;
  const r = annualRate / 100 / 12;
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

function stampDutyEstimate(price: number): number {
  if (price <= 100_000) return Math.round(price * 0.01);
  if (price <= 500_000) return Math.round(1_000 + (price - 100_000) * 0.02);
  return Math.round(9_000 + (price - 500_000) * 0.03);
}

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
  incomeNeeded: number;
  schedule: YearRow[];
}

function calculate(
  housePrice: number,
  dpPct: number,
  annualRate: number,
  years: number
): CalcResult {
  const loanAmount = housePrice * (1 - dpPct / 100);
  const monthly = pmt(loanAmount, annualRate, years);
  const totalPayment = monthly * years * 12;
  const totalInterest = totalPayment - loanAmount;
  const r = annualRate / 100 / 12;

  let balance = loanAmount;
  const schedule: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    let yP = 0, yI = 0;
    for (let m = 0; m < 12; m++) {
      if (balance <= 0) break;
      const iCharge = balance * r;
      const pCharge = Math.min(monthly - iCharge, balance);
      yI += iCharge;
      yP += pCharge;
      balance -= pCharge;
    }
    schedule.push({
      year: y,
      principal: r2(yP),
      interest: r2(yI),
      balance: Math.max(0, r2(balance)),
    });
  }

  return {
    loanAmount: r2(loanAmount),
    monthly: r2(monthly),
    totalInterest: r2(totalInterest),
    totalPayment: r2(totalPayment),
    incomeNeeded: r2(monthly * 3),
    schedule,
  };
}

// ─── Status Colour Maps ───────────────────────────────────────────────────────

type OverallStatus = "good" | "warning" | "risk";
type AffordStatus = "excellent" | "healthy" | "warning" | "risk";
type DsrStatus = "healthy" | "acceptable" | "warning" | "risk";

const OVERALL_C: Record<OverallStatus, { bg: string; border: string; text: string; bar: string; dot: string; label: string }> = {
  good:    { bg: "bg-green-50",  border: "border-green-300",  text: "text-green-800",  bar: "bg-green-500",  dot: "🟢", label: "Good to Proceed" },
  warning: { bg: "bg-amber-50",  border: "border-amber-300",  text: "text-amber-800",  bar: "bg-amber-500",  dot: "🟡", label: "Consider Carefully" },
  risk:    { bg: "bg-red-50",    border: "border-red-300",    text: "text-red-800",    bar: "bg-red-500",    dot: "🔴", label: "High Risk" },
};

const AFFORD_C: Record<AffordStatus, { badge: string; bar: string; text: string }> = {
  excellent: { badge: "bg-green-100 text-green-800", bar: "bg-green-500",  text: "text-green-700" },
  healthy:   { badge: "bg-blue-100 text-blue-800",   bar: "bg-blue-500",   text: "text-blue-700" },
  warning:   { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500",  text: "text-amber-700" },
  risk:      { badge: "bg-red-100 text-red-800",     bar: "bg-red-500",    text: "text-red-700" },
};

const DSR_C: Record<DsrStatus, { badge: string; bar: string; text: string }> = {
  healthy:    { badge: "bg-green-100 text-green-800", bar: "bg-green-500",  text: "text-green-700" },
  acceptable: { badge: "bg-blue-100 text-blue-800",   bar: "bg-blue-500",   text: "text-blue-700" },
  warning:    { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500",  text: "text-amber-700" },
  risk:       { badge: "bg-red-100 text-red-800",     bar: "bg-red-500",    text: "text-red-700" },
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
      <div
        className={`h-2 rounded-full transition-all duration-700 ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
      />
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

export default function MortgageCalculator() {
  // Form
  const [housePrice, setHousePrice] = useState("");
  const [dpPct, setDpPct] = useState("10");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [salary, setSalary] = useState("");
  const [otherDebts, setOtherDebts] = useState("");

  // UI
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  // Parsed numbers
  const price     = parseFloat(housePrice.replace(/,/g, "")) || 0;
  const dp        = parseFloat(dpPct) || 0;
  const annualRate = parseFloat(rate) || 0;
  const tenure    = parseInt(years) || 0;
  const salaryNum  = parseFloat(salary.replace(/,/g, "")) || 0;
  const debtsNum   = parseFloat(otherDebts.replace(/,/g, "")) || 0;

  const isValid = price > 0 && dp >= 0 && dp < 100 && annualRate >= 0 && tenure > 0 && tenure <= 40;

  // ── Mortgage Calculation ────────────────────────────────────────────────────
  const result = useMemo<CalcResult | null>(
    () => (submitted && isValid ? calculate(price, dp, annualRate, tenure) : null),
    [submitted, price, dp, annualRate, tenure]
  );

  // ── Dashboard Computation (live — updates with salary/debts changes) ────────
  const dash = useMemo(() => {
    if (!result) return null;

    const salaryProvided  = salaryNum > 0;
    const effectiveSalary = salaryProvided ? salaryNum : result.incomeNeeded;
    const totalMonthlyDebt = result.monthly + debtsNum;

    // ── Card 2: Affordability ──────────────────────────────────────────────
    const affPct = (result.monthly / effectiveSalary) * 100;
    let affStatus: AffordStatus;
    let affLabel: string;
    let affNote: string;
    if (affPct < 20) {
      affStatus = "excellent"; affLabel = "Excellent";
      affNote = "Your mortgage is well within your income. You have strong room for savings and unexpected expenses.";
    } else if (affPct < 30) {
      affStatus = "healthy"; affLabel = "Healthy";
      affNote = "Your mortgage takes a comfortable share of income. Most Malaysian banks consider this a healthy range.";
    } else if (affPct < 40) {
      affStatus = "warning"; affLabel = "Requires Care";
      affNote = "Mortgage consumes a significant share of income. Ensure your emergency fund is robust and other debts are minimal.";
    } else {
      affStatus = "risk"; affLabel = "High Pressure";
      affNote = "Mortgage may place serious strain on your monthly cash flow. Consider a larger down payment or a more affordable property.";
    }

    // ── Card 3: DSR ────────────────────────────────────────────────────────
    const dsrPct = (totalMonthlyDebt / effectiveSalary) * 100;
    let dsrStatus: DsrStatus;
    let dsrLabel: string;
    if (dsrPct < 40) { dsrStatus = "healthy";    dsrLabel = "Healthy"; }
    else if (dsrPct < 55) { dsrStatus = "acceptable"; dsrLabel = "Acceptable"; }
    else if (dsrPct < 70) { dsrStatus = "warning";    dsrLabel = "High"; }
    else                   { dsrStatus = "risk";       dsrLabel = "Very High Risk"; }

    // ── Card 4: Emergency Fund ─────────────────────────────────────────────
    const ef3  = r2(result.monthly * 3);
    const ef6  = r2(result.monthly * 6);
    const ef12 = r2(result.monthly * 12);
    const efRec: 3 | 6 | 12 = dsrPct > 55 ? 12 : 3;

    // ── Card 5: Down Payment Analysis ─────────────────────────────────────
    const target20Loan    = price * 0.80;
    const target20Monthly = r2(pmt(target20Loan, annualRate, tenure));
    const target20Interest = r2(target20Monthly * tenure * 12 - target20Loan);
    const interestSavedAt20  = dp < 20 ? r2(result.totalInterest - target20Interest) : 0;
    const monthlySavedAt20   = dp < 20 ? r2(result.monthly - target20Monthly) : 0;

    // ── Card 7: Scenario Comparison ───────────────────────────────────────
    const scenarioYears = [20, 25, 30, 35];
    const scenarios = scenarioYears.map((y) => {
      const m  = r2(pmt(result.loanAmount, annualRate, y));
      const tp = r2(m * y * 12);
      const ti = r2(tp - result.loanAmount);
      return { years: y, monthly: m, totalInterest: ti, totalPayment: tp, affPct: (m / effectiveSalary) * 100, recommended: false };
    });
    // Recommend shortest tenure where affordability ≤ 33%
    const recIdx = scenarios.findIndex((s) => s.affPct <= 33);
    scenarios[recIdx >= 0 ? recIdx : 0].recommended = true;

    // ── Card 10: Health Score ─────────────────────────────────────────────
    const intBurdenPct = (result.totalInterest / result.totalPayment) * 100;
    const afScore   = affPct < 20 ? 25 : affPct < 30 ? 20 : affPct < 40 ? 12 : 5;
    const dsrScore  = dsrPct < 40 ? 25 : dsrPct < 55 ? 18 : dsrPct < 70 ? 8 : 0;
    const dpScore   = dp >= 30 ? 20 : dp >= 20 ? 17 : dp >= 15 ? 12 : dp >= 10 ? 8 : 3;
    const intScore  = intBurdenPct < 30 ? 15 : intBurdenPct < 40 ? 12 : intBurdenPct < 50 ? 8 : 3;
    const tenScore  = tenure <= 20 ? 15 : tenure <= 25 ? 12 : tenure <= 30 ? 8 : 5;
    const healthScore = afScore + dsrScore + dpScore + intScore + tenScore;
    const healthStars = healthScore >= 80 ? 5 : healthScore >= 60 ? 4 : healthScore >= 40 ? 3 : healthScore >= 20 ? 2 : 1;

    const scoreFactors = [
      { label: "Monthly Affordability", score: afScore,  max: 25, tip: affPct >= 30 ? "Increase down payment or choose a lower-priced property" : "Well within range" },
      { label: "Debt Service Ratio",    score: dsrScore, max: 25, tip: dsrPct >= 55 ? "Reduce existing debts before applying for a mortgage" : "Within acceptable range" },
      { label: "Down Payment",          score: dpScore,  max: 20, tip: dp < 20 ? `A 20% down payment could save you RM ${fmtInt(Math.round(interestSavedAt20))} in interest` : "Strong down payment" },
      { label: "Interest Burden",       score: intScore, max: 15, tip: intBurdenPct >= 45 ? "Consider a shorter tenure to significantly reduce total interest" : "Interest portion is manageable" },
      { label: "Loan Tenure",           score: tenScore, max: 15, tip: tenure > 25 ? "Shorter tenure saves significant interest over the loan life" : "Tenure is sensible" },
    ];

    // ── Card 1: Overall Recommendation ────────────────────────────────────
    const reasons: string[] = [];
    if (affPct >= 40)    reasons.push("Mortgage exceeds 40% of monthly income");
    if (dsrPct >= 65)    reasons.push("Combined DSR may be above most banks' approval limits");
    if (dp < 10)         reasons.push("Down payment is below the typical 10% minimum");
    if (intBurdenPct > 50) reasons.push(`${Math.round(intBurdenPct)}% of total repayment is interest — consider a shorter tenure`);
    if (tenure > 30)     reasons.push("Tenure above 30 years results in very high total interest cost");

    let overallStatus: OverallStatus;
    let overallMessage: string;
    if (healthScore >= 60 && affPct < 35 && dsrPct < 65) {
      overallStatus = "good";
      overallMessage = "Based on the information provided, this mortgage appears financially manageable. Your key ratios are within sensible ranges. Ensure your income is stable and your emergency fund is fully in place before committing.";
    } else if (healthScore >= 35 || (affPct < 40 && dsrPct < 70)) {
      overallStatus = "warning";
      overallMessage = "This mortgage is within reach, but warrants careful consideration. Review your monthly cash flow, confirm your DSR with your bank, and ensure your emergency fund covers at least 6 months of payments.";
    } else {
      overallStatus = "risk";
      overallMessage = "This mortgage may place significant pressure on your monthly finances and long-term wealth. Consider increasing your down payment, choosing a more affordable property, or reducing existing debts before proceeding.";
    }

    return {
      salaryProvided, effectiveSalary,
      affPct, affStatus, affLabel, affNote,
      dsrPct, dsrStatus, dsrLabel, totalMonthlyDebt,
      ef3, ef6, ef12, efRec,
      target20Monthly, interestSavedAt20, monthlySavedAt20,
      scenarios,
      healthScore, healthStars, scoreFactors,
      overallStatus, overallMessage, reasons,
      intBurdenPct,
      stampDuty: stampDutyEstimate(price),
    };
  }, [result, salaryNum, debtsNum, price, dp, annualRate, tenure]);

  // Derived for existing results panel
  const interestPct  = result ? Math.round((result.totalInterest / result.totalPayment) * 100) : 0;
  const principalPct = result ? 100 - interestPct : 0;
  const visible = result ? (showAll ? result.schedule : result.schedule.slice(0, 5)) : [];

  // Dynamic checklist items
  const checklistItems = result
    ? [
        { id: "income",     label: "My income is stable — employed ≥6 months, or self-employed with ≥2 years consistent income" },
        { id: "ccris",      label: "I have checked my CCRIS and CTOS report and confirmed there are no unresolved issues" },
        { id: "emergency",  label: `Emergency fund of at least RM ${fmtInt(Math.round(result.monthly * 6))} (6 months of mortgage payments) is ready in a separate account` },
        { id: "dsr",        label: "My combined monthly debt commitments (including this mortgage) are below 60% of gross income" },
        { id: "dp",         label: `Down payment of RM ${fmtInt(Math.round(price * dp / 100))} is confirmed and available — not borrowed` },
        { id: "fees",       label: `Stamp duty (~RM ${fmtInt(stampDutyEstimate(price))}), legal fees (~RM 8,000–15,000) and valuation fee (~RM 500–1,500) are budgeted` },
        { id: "mrta",       label: "MRTA or MLTA mortgage life insurance cost is factored into my budget" },
        { id: "fire",       label: "Fire insurance (mandatory for all mortgaged properties, ~RM 200–600/year) is planned" },
        { id: "reno",       label: "Renovation, furnishing and moving costs are allocated and will not deplete my emergency fund" },
      ]
    : [];
  const checkedCount = checklistItems.filter((i) => checklist[i.id]).length;

  // Handlers
  const handleCalculate = () => {
    if (isValid) {
      setSubmitted(true);
      trackMortgageCalculated(price * (1 - dp / 100), tenure);
    }
  };
  const handleReset = () => {
    setHousePrice(""); setDpPct("10"); setRate(""); setYears("");
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
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-sm text-blue-700">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span><strong>Reducing balance estimate.</strong> Actual repayments may include stamp duty, legal fees, and MRTA/MLTA insurance. Confirm with your bank.</span>
        </div>
      </div>

      {/* ── Form + Results ────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Mortgage Details</h2>
            <div className="space-y-5">
              {/* House Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">House Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                  <input type="number" min="50000" step="10000" placeholder="e.g. 500000"
                    value={housePrice} onChange={handleChange(setHousePrice)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Down Payment: <span className="text-blue-600 font-semibold">{dpPct}%</span>
                  {price > 0 && (
                    <span className="text-gray-400 text-xs ml-2">
                      (RM {fmtInt(Math.round(price * parseFloat(dpPct || "0") / 100))})
                    </span>
                  )}
                </label>
                <input type="range" min="0" max="50" step="5"
                  value={dpPct}
                  onChange={(e) => { setDpPct(e.target.value); setSubmitted(false); }}
                  className="w-full accent-blue-600" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0%</span><span>10%</span><span>20%</span><span>30%</span><span>50%</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Annual Interest Rate</label>
                <div className="relative">
                  <input type="number" min="0" max="15" step="0.05" placeholder="e.g. 4.0"
                    value={rate} onChange={handleChange(setRate)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Malaysian home loans: typically 3.5%–4.5% p.a. in 2025</p>
              </div>

              {/* Tenure */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Loan Tenure</label>
                <div className="relative">
                  <input type="number" min="1" max="40" step="1" placeholder="e.g. 30"
                    value={years} onChange={handleChange(setYears)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-16 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">years</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[20, 25, 30, 35].map((y) => (
                    <button key={y} onClick={() => { setYears(String(y)); setSubmitted(false); }}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${years === String(y) ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600"}`}>
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
                      <input type="number" min="0" step="100" placeholder="e.g. 6000"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 pl-9 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Other Monthly Debt Payments</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                      <input type="number" min="0" step="50" placeholder="Car loan, personal loan…"
                        value={otherDebts}
                        onChange={(e) => setOtherDebts(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 pl-9 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              <button onClick={handleCalculate} disabled={!isValid}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 rounded-xl transition-colors">
                Calculate Mortgage
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
                <div className="text-5xl mb-4">🏠</div>
                <p className="text-gray-400 text-sm">Enter your property details and tap <strong>Calculate Mortgage</strong>.</p>
                <p className="text-gray-300 text-xs mt-2">Add your salary to unlock your personalised Financial Decision Dashboard.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Estimated Monthly Repayment</p>
                  <p className="text-5xl font-bold text-blue-600 mb-1">RM {fmt(result.monthly)}</p>
                  <p className="text-sm text-gray-400">per month for {tenure} years</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Loan Amount",    value: `RM ${fmt(result.loanAmount)}`,    sub: `${100 - dp}% of price` },
                    { label: "Total Interest", value: `RM ${fmt(result.totalInterest)}`, sub: "Cost of borrowing", accent: true },
                    { label: "Total Repayment", value: `RM ${fmt(result.totalPayment)}`, sub: "Principal + interest" },
                    { label: "Income Needed",  value: `RM ${fmt(result.incomeNeeded)}`,  sub: "Gross/month (30% rule)" },
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
                    <div className="bg-blue-500 transition-all duration-500" style={{ width: `${principalPct}%` }} />
                    <div className="bg-red-400 transition-all duration-500" style={{ width: `${interestPct}%` }} />
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />Principal {principalPct}%
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />Interest {interestPct}%
                    </span>
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
            <h2 className="text-xl font-bold text-gray-900 mb-6">Annual Mortgage Summary</h2>
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
                className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
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
          {/* Section Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📊</span>
              <h2 className="text-2xl font-bold text-gray-900">Financial Decision Dashboard</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Beyond the monthly payment — here is what this mortgage really means for your financial health.
            </p>
            {!dash.salaryProvided && (
              <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-3 inline-block">
                💡 Add your monthly gross salary in the form above for a fully personalised assessment. Estimates below are based on the minimum recommended income.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* ── Card 1: Overall Recommendation (full width) ───────────────── */}
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
                    <div className={`flex-shrink-0 text-right`}>
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
              <ProgressBar pct={(dash.affPct / 50) * 100} color={AFFORD_C[dash.affStatus].bar} className="mb-3" />
              <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span>0%</span><span className="text-green-600">20% Excellent</span><span className="text-amber-600">30% Healthy</span><span className="text-red-600">40%+</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{dash.affNote}</p>
              <div className="mt-3 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs">
                <div><p className="text-gray-400">Mortgage / month</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(result.monthly))}</p></div>
                <div><p className="text-gray-400">{dash.salaryProvided ? "Your salary" : "Recommended salary"}</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(dash.effectiveSalary))}</p></div>
              </div>
            </DashCard>

            {/* ── Card 3: Estimated DSR ─────────────────────────────────────── */}
            <DashCard>
              <CardTitle icon="📊" title="Estimated Debt Service Ratio (DSR)" />
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
                Many Malaysian banks assess DSR as part of their lending process, although requirements vary. A DSR below 60% is commonly expected for residential mortgages.
              </p>
              <div className="mt-3 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs">
                <div><p className="text-gray-400">Total monthly debts</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(dash.totalMonthlyDebt))}</p></div>
                <div><p className="text-gray-400">Mortgage portion</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(result.monthly))}</p></div>
              </div>
            </DashCard>

            {/* ── Card 4: Emergency Fund ────────────────────────────────────── */}
            <DashCard>
              <CardTitle icon="🛡️" title="Emergency Fund Required" />
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Before committing to a mortgage, ensure you have liquid savings for unexpected income loss or urgent repairs. Do not count your down payment as emergency savings.
              </p>
              {([
                { months: 3,  amount: dash.ef3,  label: "Minimum",     color: "border-amber-200 bg-amber-50 text-amber-800" },
                { months: 6,  amount: dash.ef6,  label: "Recommended", color: "border-blue-200 bg-blue-50 text-blue-800" },
                { months: 12, amount: dash.ef12, label: "Conservative", color: "border-green-200 bg-green-50 text-green-800" },
              ] as const).map(({ months, amount, label, color }) => (
                <div key={months} className={`flex items-center justify-between border rounded-xl px-4 py-3 mb-2 ${color} ${months === dash.efRec ? "ring-2 ring-offset-1 ring-blue-400" : ""}`}>
                  <div>
                    <p className="font-semibold text-sm">{months} months {months === dash.efRec && <span className="text-xs font-normal ml-1">← your target</span>}</p>
                    <p className="text-xs opacity-70">{label}</p>
                  </div>
                  <p className="font-bold">RM {fmtInt(Math.round(amount))}</p>
                </div>
              ))}
            </DashCard>

            {/* ── Card 5: Down Payment Analysis ────────────────────────────── */}
            <DashCard>
              <CardTitle icon="🏦" title="Down Payment Analysis" />
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Your Down Payment</p>
                  <p className="font-bold text-gray-900">RM {fmtInt(Math.round(price * dp / 100))}</p>
                  <p className="text-xs text-gray-400">{dp}% of price</p>
                </div>
                {dp < 20 ? (
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <p className="text-xs text-blue-600 mb-1">If you save to 20%</p>
                    <p className="font-bold text-blue-800">RM {fmtInt(Math.round(price * 0.20))}</p>
                    <p className="text-xs text-blue-400">20% of price</p>
                  </div>
                ) : (
                  <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                    <p className="text-xs text-green-600 mb-1">Strong down payment</p>
                    <p className="font-bold text-green-800">{dp}% paid</p>
                    <p className="text-xs text-green-400">Above 20% target ✓</p>
                  </div>
                )}
              </div>
              {dp < 20 && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm">
                  <p className="font-semibold text-blue-800 mb-2">Benefits of saving to 20%:</p>
                  <div className="space-y-1.5 text-xs text-blue-700">
                    <div className="flex justify-between"><span>Monthly saving</span><span className="font-bold">RM {fmtInt(Math.round(dash.monthlySavedAt20))}/month</span></div>
                    <div className="flex justify-between"><span>Total interest saved</span><span className="font-bold text-green-700">RM {fmtInt(Math.round(dash.interestSavedAt20))}</span></div>
                    <div className="flex justify-between"><span>New monthly payment</span><span className="font-bold">RM {fmtInt(Math.round(dash.target20Monthly))}</span></div>
                  </div>
                </div>
              )}
            </DashCard>

            {/* ── Card 6: Long-term Cost (full width) ──────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="💰" title="Long-Term Cost of This Mortgage" />
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Total Repayment</p>
                  <p className="text-2xl font-bold text-gray-900">RM {fmtInt(Math.round(result.totalPayment))}</p>
                  <p className="text-xs text-gray-400">Principal + all interest</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-red-500 mb-1">Total Interest Paid</p>
                  <p className="text-2xl font-bold text-red-600">RM {fmtInt(Math.round(result.totalInterest))}</p>
                  <p className="text-xs text-gray-400">Cost of borrowing over {tenure}yr</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Interest as % of Repayment</p>
                  <p className={`text-2xl font-bold ${dash.intBurdenPct > 45 ? "text-red-600" : dash.intBurdenPct > 35 ? "text-amber-600" : "text-green-600"}`}>
                    {Math.round(dash.intBurdenPct)}%
                  </p>
                  <p className="text-xs text-gray-400">{dash.intBurdenPct > 45 ? "High interest burden" : "Manageable"}</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
                  <span className="w-3 h-3 rounded-sm bg-blue-500 inline-block" />Principal (RM {fmtInt(Math.round(result.loanAmount))})
                  <span className="w-3 h-3 rounded-sm bg-red-400 inline-block ml-3" />Interest (RM {fmtInt(Math.round(result.totalInterest))})
                </div>
                <div className="flex rounded-full overflow-hidden h-5">
                  <div className="bg-blue-500 flex items-center justify-center text-white text-xs font-medium transition-all" style={{ width: `${principalPct}%` }}>
                    {principalPct > 15 && `${principalPct}%`}
                  </div>
                  <div className="bg-red-400 flex items-center justify-center text-white text-xs font-medium transition-all" style={{ width: `${interestPct}%` }}>
                    {interestPct > 10 && `${interestPct}%`}
                  </div>
                </div>
              </div>
              {dash.intBurdenPct > 45 && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  Over {Math.round(dash.intBurdenPct)}% of your total repayment is interest. Consider a shorter tenure or larger down payment to reduce this significantly.
                </p>
              )}
            </DashCard>

            {/* ── Card 7: Scenario Comparison (full width) ─────────────────── */}
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
                      const affSt: AffordStatus = s.affPct < 20 ? "excellent" : s.affPct < 30 ? "healthy" : s.affPct < 40 ? "warning" : "risk";
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
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${AFFORD_C[affSt].badge}`}>
                              {Math.round(s.affPct)}%
                            </span>
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
                &quot;Recommended&quot; = shortest tenure where monthly payment is ≤33% of income. All scenarios use the same loan amount and interest rate.
              </p>
            </DashCard>

            {/* ── Card 8: Decision Checklist (full width) ───────────────────── */}
            <DashCard className="md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">✅</span>
                  <h3 className="font-bold text-gray-800">Home Buyer Decision Checklist</h3>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${checkedCount === checklistItems.length ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                  {checkedCount} / {checklistItems.length}
                </span>
              </div>
              <ProgressBar pct={(checkedCount / checklistItems.length) * 100} color={checkedCount === checklistItems.length ? "bg-green-500" : "bg-blue-500"} className="mb-5" />
              <div className="space-y-2">
                {checklistItems.map((item) => (
                  <label key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${checklist[item.id] ? "bg-green-50 border border-green-200" : "bg-gray-50 border border-transparent hover:border-gray-200"}`}>
                    <input
                      type="checkbox"
                      checked={!!checklist[item.id]}
                      onChange={() => toggleCheck(item.id)}
                      className="mt-0.5 w-4 h-4 rounded accent-green-600 flex-shrink-0"
                    />
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

            {/* ── Card 9: Next Recommended Actions (full width) ─────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="🗺️" title="Your Next Steps" />
              <p className="text-sm text-gray-500 mb-5">A mortgage decision triggers a chain of financial actions. Work through these in order:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { step: 1, icon: "📊", title: "Check Your DSR", desc: "Calculate your exact Debt Service Ratio before visiting any bank.", href: "/dsr-calculator-malaysia", cta: "DSR Calculator →" },
                  { step: 2, icon: "💰", title: "Confirm Your Salary Can Support This", desc: "See your exact take-home pay and how much this mortgage consumes.", href: "/salary-calculator-malaysia", cta: "Salary Calculator →" },
                  { step: 3, icon: "🧾", title: "Estimate Stamp Duty & Legal Fees", desc: `Your stamp duty on RM ${fmtInt(price)} is approximately RM ${fmtInt(dash.stampDuty)}. Budget for legal fees on top.`, href: "/guides/first-home-buyer-guide-malaysia", cta: "First Home Buyer Guide →" },
                  { step: 4, icon: "🏛️", title: "Check Your EPF Balance for Down Payment", desc: "EPF Account Flexible can fund part of your down payment. Check your balance.", href: "/epf-calculator-malaysia", cta: "EPF Calculator →" },
                  { step: 5, icon: "🏦", title: "Build Your Emergency Fund", desc: `You need RM ${fmtInt(Math.round(dash.ef6))} (6 months) before signing any S&P.`, href: "/savings-calculator-malaysia", cta: "Savings Calculator →" },
                  { step: 6, icon: "📋", title: "Review Your Tax Relief Eligibility", desc: "Home loan interest and EPF top-ups may qualify for income tax relief.", href: "/income-tax-calculator-malaysia", cta: "Income Tax Calculator →" },
                ].map((a) => (
                  <a key={a.step} href={a.href}
                    className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                    <div className="flex-shrink-0 w-9 h-9 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-bold text-sm">
                      {a.step}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-800 group-hover:text-blue-700 mb-0.5">{a.icon} {a.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mb-1.5">{a.desc}</p>
                      <p className="text-xs font-semibold text-blue-600">{a.cta}</p>
                    </div>
                  </a>
                ))}
              </div>
            </DashCard>

            {/* ── Card 10: Financial Health Score ──────────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="⭐" title="Financial Health Score" />
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                {/* Score Display */}
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

                {/* Score Factors */}
                <div className="flex-1 space-y-4 w-full">
                  {dash.scoreFactors.map((f) => (
                    <div key={f.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{f.label}</span>
                        <span className="text-sm font-bold text-gray-900">{f.score}<span className="text-gray-400 font-normal">/{f.max}</span></span>
                      </div>
                      <ProgressBar
                        pct={(f.score / f.max) * 100}
                        color={f.score / f.max >= 0.8 ? "bg-green-500" : f.score / f.max >= 0.5 ? "bg-blue-500" : f.score / f.max >= 0.3 ? "bg-amber-500" : "bg-red-500"}
                        className="mb-1"
                      />
                      <p className="text-xs text-gray-400">{f.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DashCard>

          </div>
        </section>
      )}

      {/* ── Quick Tips (existing) ─────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { emoji: "📊", title: "DSR Check First", body: "Most Malaysian banks require your total monthly debt commitments (including this mortgage) to be below 60% of gross income. Check your DSR before applying." },
            { emoji: "🔑", title: "Down Payment Rules", body: "First-time buyers can qualify for 90% margin of finance (10% down payment). For a second property, BNM requires a minimum 30% down payment." },
            { emoji: "💡", title: "Tenure vs Interest", body: "A 30-year loan costs significantly more in total interest than a 25-year loan. Even one extra payment per year can cut years off your mortgage." },
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
