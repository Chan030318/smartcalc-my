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

// ─── Core Flat-Rate Hire Purchase Calculation ─────────────────────────────────

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

function calcHP(principal: number, flatRate: number, years: number): { monthly: number; totalInterest: number; totalPayment: number } {
  const totalInterest = r2(principal * (flatRate / 100) * years);
  const totalPayment  = r2(principal + totalInterest);
  const monthly       = r2(totalPayment / (years * 12));
  return { monthly, totalInterest, totalPayment };
}

function calculate(carPrice: number, downPayment: number, flatRate: number, years: number): CalcResult {
  const loanAmount = carPrice - downPayment;
  const { monthly, totalInterest, totalPayment } = calcHP(loanAmount, flatRate, years);

  const monthlyPrincipal = loanAmount / (years * 12);
  const monthlyInterest  = totalInterest / (years * 12);
  const schedule: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    const yP = r2(monthlyPrincipal * 12);
    const yI = r2(monthlyInterest * 12);
    schedule.push({ year: y, principal: yP, interest: yI, balance: Math.max(0, r2(loanAmount - monthlyPrincipal * y * 12)) });
  }
  return { loanAmount: r2(loanAmount), monthly, totalInterest, totalPayment, schedule };
}

// ─── Status Types ─────────────────────────────────────────────────────────────

type OverallStatus = "good" | "warning" | "risk";
type AffordStatus  = "comfortable" | "manageable" | "caution" | "risk";
type DsrStatus     = "healthy" | "acceptable" | "warning" | "risk";

const OVERALL_C: Record<OverallStatus, { bg: string; border: string; text: string; dot: string; label: string }> = {
  good:    { bg: "bg-green-50",  border: "border-green-300",  text: "text-green-800",  dot: "🟢", label: "Comfortable" },
  warning: { bg: "bg-amber-50",  border: "border-amber-300",  text: "text-amber-800",  dot: "🟡", label: "Consider Carefully" },
  risk:    { bg: "bg-red-50",    border: "border-red-300",    text: "text-red-800",    dot: "🔴", label: "High Risk" },
};
const AFFORD_C: Record<AffordStatus, { badge: string; bar: string }> = {
  comfortable: { badge: "bg-green-100 text-green-800", bar: "bg-green-500" },
  manageable:  { badge: "bg-blue-100 text-blue-800",   bar: "bg-blue-500" },
  caution:     { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" },
  risk:        { badge: "bg-red-100 text-red-800",     bar: "bg-red-500" },
};
const DSR_C: Record<DsrStatus, { badge: string; bar: string }> = {
  healthy:    { badge: "bg-green-100 text-green-800", bar: "bg-green-500" },
  acceptable: { badge: "bg-blue-100 text-blue-800",   bar: "bg-blue-500" },
  warning:    { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" },
  risk:       { badge: "bg-red-100 text-red-800",     bar: "bg-red-500" },
};

// ─── Small UI Components ──────────────────────────────────────────────────────

function DashCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 ${className}`}>{children}</div>;
}
function CardTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xl">{icon}</span>
      <h3 className="font-bold text-gray-800 text-sm sm:text-base">{title}</h3>
    </div>
  );
}
function Badge({ label, className }: { label: string; className: string }) {
  return <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}>{label}</span>;
}
function Bar({ pct, color, className = "" }: { pct: number; color: string; className?: string }) {
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

// ─── Optional Cost Input Row ──────────────────────────────────────────────────

function CostInput({ label, placeholder, value, onChange }: {
  label: string; placeholder: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
        <input type="number" min="0" step="50" placeholder={placeholder} value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 pl-9 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CarLoanCalculator() {
  // Core loan inputs
  const [carPrice,    setCarPrice]    = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [rate,        setRate]        = useState("");
  const [years,       setYears]       = useState("");

  // Optional personalisation
  const [salary,      setSalary]      = useState("");
  const [otherDebts,  setOtherDebts]  = useState("");
  const [fuel,        setFuel]        = useState("");
  const [insurance,   setInsurance]   = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [parking,     setParking]     = useState("");

  // UI
  const [submitted,  setSubmitted]  = useState(false);
  const [showAll,    setShowAll]    = useState(false);
  const [showCosts,  setShowCosts]  = useState(false);
  const [checklist,  setChecklist]  = useState<Record<string, boolean>>({});

  // Parsed numbers
  const price      = parseFloat(carPrice.replace(/,/g, ""))    || 0;
  const dp         = parseFloat(downPayment.replace(/,/g, "")) || 0;
  const flatRate   = parseFloat(rate)   || 0;
  const tenure     = parseInt(years)    || 0;
  const salaryNum  = parseFloat(salary.replace(/,/g, ""))     || 0;
  const debtsNum   = parseFloat(otherDebts.replace(/,/g, "")) || 0;
  const fuelNum    = parseFloat(fuel)        || 0;
  const insurNum   = parseFloat(insurance)   || 0;
  const maintNum   = parseFloat(maintenance) || 0;
  const parkNum    = parseFloat(parking)     || 0;

  const dpPct   = price > 0 ? Math.round((dp / price) * 100) : 0;
  const isValid = price > 0 && dp >= 0 && dp < price && flatRate >= 0 && tenure > 0 && tenure <= 9;

  // ── Core Calculation ──────────────────────────────────────────────────────
  const result = useMemo<CalcResult | null>(
    () => (submitted && isValid ? calculate(price, dp, flatRate, tenure) : null),
    [submitted, price, dp, flatRate, tenure]
  );

  // ── Dashboard (live — salary/costs update without resetting) ──────────────
  const dash = useMemo(() => {
    if (!result) return null;

    const salaryProvided  = salaryNum > 0;
    const effectiveSalary = salaryProvided ? salaryNum : result.monthly * 3;

    // Ownership costs (monthly)
    const hasCosts      = fuelNum > 0 || insurNum > 0 || maintNum > 0 || parkNum > 0;
    const monthlyOwnership = result.monthly + fuelNum + insurNum + maintNum + parkNum;
    const ownershipPct  = (monthlyOwnership / effectiveSalary) * 100;

    // ── Card 2: Instalment Affordability ──────────────────────────────────
    const affPct = (result.monthly / effectiveSalary) * 100;
    let affStatus: AffordStatus;
    let affLabel: string;
    let affNote: string;
    if (affPct <= 15) {
      affStatus = "comfortable"; affLabel = "Comfortable";
      affNote = "This car instalment is well within your income. You have strong room for savings, ownership costs, and unexpected expenses.";
    } else if (affPct <= 20) {
      affStatus = "manageable";  affLabel = "Manageable";
      affNote = "A reasonable share of your income. Most Malaysians can manage a car at this level without financial strain, provided other debts are limited.";
    } else if (affPct <= 30) {
      affStatus = "caution"; affLabel = "Caution";
      affNote = "This instalment is consuming a notable portion of your income. Ensure your total DSR stays below 60% and you have an emergency fund in place.";
    } else {
      affStatus = "risk"; affLabel = "High Pressure";
      affNote = "This car may place serious strain on your monthly cash flow. Consider a lower-priced model, higher down payment, or shorter tenure.";
    }

    // ── Card 4: DSR ────────────────────────────────────────────────────────
    const totalMonthlyDebt = result.monthly + debtsNum;
    const dsrPct = (totalMonthlyDebt / effectiveSalary) * 100;
    let dsrStatus: DsrStatus;
    let dsrLabel: string;
    if (dsrPct < 40)      { dsrStatus = "healthy";    dsrLabel = "Healthy"; }
    else if (dsrPct < 55) { dsrStatus = "acceptable"; dsrLabel = "Acceptable"; }
    else if (dsrPct < 70) { dsrStatus = "warning";    dsrLabel = "High"; }
    else                   { dsrStatus = "risk";       dsrLabel = "Very High Risk"; }

    // ── Card 5: Down Payment ───────────────────────────────────────────────
    const dp20         = price * 0.20;
    const { monthly: m20, totalInterest: ti20 } = calcHP(price - dp20,  flatRate, tenure);
    const { monthly: m10, totalInterest: ti10 } = calcHP(price * 0.90,  flatRate, tenure);
    const interestSavedAt20 = dp < dp20 ? r2(result.totalInterest - ti20) : 0;
    const monthlySavedAt20  = dp < dp20 ? r2(result.monthly - m20)        : 0;

    // ── Card 6: Tenure Comparison ──────────────────────────────────────────
    const scenarios = [5, 7, 9].map((y) => {
      const { monthly: m, totalInterest: ti, totalPayment: tp } = calcHP(result.loanAmount, flatRate, y);
      return { years: y, monthly: m, totalInterest: ti, totalPayment: tp,
               affPct: (m / effectiveSalary) * 100, recommended: false };
    });
    const recIdx = scenarios.findIndex((s) => s.affPct <= 25);
    scenarios[recIdx >= 0 ? recIdx : 0].recommended = true;

    // ── Card 7: 5-Year Total Ownership Cost ───────────────────────────────
    const loanYears5 = Math.min(tenure, 5);
    const loanCost5  = result.monthly * loanYears5 * 12;
    const fuelCost5  = fuelNum   * 60;
    const insurCost5 = insurNum  * 60;
    const maintCost5 = maintNum  * 60;
    const parkCost5  = parkNum   * 60;
    const totalOwn5  = loanCost5 + fuelCost5 + insurCost5 + maintCost5 + parkCost5;

    // ── Card 8: What-If Scenarios ──────────────────────────────────────────
    const whatIf = [
      {
        label: "If car price is RM10,000 lower",
        newLoan: Math.max(0, result.loanAmount - 10_000),
        get result() {
          const { monthly, totalInterest } = calcHP(this.newLoan, flatRate, tenure);
          return { monthly, totalInterest, monthlySaving: r2(result.monthly - monthly), interestSaving: r2(result.totalInterest - totalInterest) };
        },
      },
      {
        label: "If down payment increases by RM10,000",
        newLoan: Math.max(0, result.loanAmount - 10_000),
        get result() {
          const { monthly, totalInterest } = calcHP(this.newLoan, flatRate, tenure);
          return { monthly, totalInterest, monthlySaving: r2(result.monthly - monthly), interestSaving: r2(result.totalInterest - totalInterest) };
        },
      },
      {
        label: tenure > 5 ? `If tenure shortens to ${Math.max(5, tenure - 2)} years` : "If tenure extends to 9 years",
        newYears: tenure > 5 ? Math.max(5, tenure - 2) : 9,
        get result() {
          const { monthly, totalInterest } = calcHP(result.loanAmount, flatRate, this.newYears!);
          const monthlySaving  = r2(result.monthly - monthly);
          const interestSaving = r2(result.totalInterest - totalInterest);
          return { monthly, totalInterest, monthlySaving, interestSaving };
        },
      },
    ];

    // ── Card 10: Health Score ──────────────────────────────────────────────
    const intBurdenPct = (result.totalInterest / result.totalPayment) * 100;
    const afScore  = affPct <= 15 ? 20 : affPct <= 20 ? 16 : affPct <= 30 ? 10 : 4;
    const owScore  = hasCosts ? (ownershipPct <= 25 ? 20 : ownershipPct <= 35 ? 15 : ownershipPct <= 45 ? 8 : 2) : 10;
    const dsrScore = dsrPct < 40 ? 20 : dsrPct < 55 ? 14 : dsrPct < 70 ? 6 : 0;
    const dpScore  = dpPct >= 30 ? 20 : dpPct >= 20 ? 17 : dpPct >= 10 ? 12 : 5;
    const intScore = intBurdenPct < 20 ? 10 : intBurdenPct < 30 ? 8 : intBurdenPct < 40 ? 5 : 2;
    const tenScore = tenure <= 5 ? 10 : tenure <= 7 ? 7 : 4;
    const healthScore = afScore + owScore + dsrScore + dpScore + intScore + tenScore;
    const healthStars = healthScore >= 80 ? 5 : healthScore >= 60 ? 4 : healthScore >= 40 ? 3 : healthScore >= 20 ? 2 : 1;

    const scoreFactors = [
      { label: "Instalment Affordability",    score: afScore,  max: 20, tip: affPct > 25 ? "Instalment exceeds 25% of income — consider a more affordable car" : "Within comfortable range" },
      { label: "True Ownership Cost",         score: owScore,  max: 20, tip: !hasCosts ? "Add ownership costs above for a complete picture" : ownershipPct > 40 ? "Total car cost is high relative to income" : "Ownership costs are manageable" },
      { label: "Debt Service Ratio (DSR)",    score: dsrScore, max: 20, tip: dsrPct >= 55 ? "Reduce existing debts before adding this car loan" : "Combined debt load is within acceptable limits" },
      { label: "Down Payment Strength",       score: dpScore,  max: 20, tip: dpPct < 20 ? "A 20% down payment meaningfully reduces interest and monthly cost" : "Strong down payment" },
      { label: "Interest Burden & Tenure",    score: intScore + tenScore, max: 20, tip: tenure >= 9 ? "9-year tenure maximises interest paid — shorten if DSR allows" : "Interest burden and tenure are reasonable" },
    ];

    // ── Card 1: Overall Recommendation ────────────────────────────────────
    const reasons: string[] = [];
    if (affPct > 30)          reasons.push("Instalment exceeds 30% of monthly income — risk of cash flow strain");
    if (dsrPct >= 65)         reasons.push("Combined DSR may exceed most banks' threshold of 60–70%");
    if (dpPct < 10)           reasons.push("Down payment is below the typical minimum of 10%");
    if (tenure === 9)         reasons.push("Maximum 9-year tenure significantly increases total interest paid");
    if (hasCosts && ownershipPct > 40) reasons.push(`True monthly ownership cost (RM ${fmtInt(Math.round(monthlyOwnership))}) exceeds 40% of income`);

    let overallStatus: OverallStatus;
    let overallMessage: string;
    if (healthScore >= 60 && affPct <= 25 && dsrPct < 60) {
      overallStatus = "good";
      overallMessage = "Based on the information provided, this car appears financially comfortable. Your instalment and debt ratios are within sensible ranges. Ensure your income is stable and your emergency fund covers at least 3 months of car payments before signing.";
    } else if (healthScore >= 35 || (affPct <= 30 && dsrPct < 70)) {
      overallStatus = "warning";
      overallMessage = "This car purchase may require caution. Your numbers are borderline — review your monthly cash flow carefully after all commitments, and confirm your DSR with your bank. A slightly lower car price or higher down payment could meaningfully improve your position.";
    } else {
      overallStatus = "risk";
      overallMessage = "Based on the information provided, this car may create significant cash-flow pressure. Consider a more affordable model, a larger down payment, or reducing existing debts before proceeding.";
    }

    return {
      salaryProvided, effectiveSalary,
      affPct, affStatus, affLabel, affNote,
      totalMonthlyDebt, dsrPct, dsrStatus, dsrLabel,
      hasCosts, fuelNum, insurNum, maintNum, parkNum,
      monthlyOwnership, ownershipPct,
      dp20, m20, m10, ti10, ti20, interestSavedAt20, monthlySavedAt20,
      scenarios,
      loanCost5, fuelCost5, insurCost5, maintCost5, parkCost5, totalOwn5,
      whatIf,
      healthScore, healthStars, scoreFactors,
      overallStatus, overallMessage, reasons,
      intBurdenPct,
    };
  }, [result, salaryNum, debtsNum, fuelNum, insurNum, maintNum, parkNum, price, dp, dpPct, flatRate, tenure]);

  const interestPct  = result ? Math.round((result.totalInterest / result.totalPayment) * 100) : 0;
  const principalPct = result ? 100 - interestPct : 0;
  const visible = result ? (showAll ? result.schedule : result.schedule.slice(0, 5)) : [];

  const checklistItems = result
    ? [
        { id: "income",    label: "My income is stable — employed ≥6 months, or self-employed with ≥2 years consistent income" },
        { id: "emergency", label: `Emergency fund of at least RM ${fmtInt(Math.round(result.monthly * 3))} (3 months instalments) is ready, separate from my down payment` },
        { id: "dsr",       label: "My total monthly debt commitments (including this car loan) are below 60% of gross income" },
        { id: "ccris",     label: "I have checked my CCRIS / CTOS report and there are no unresolved defaults or late payments" },
        { id: "dp",        label: `Down payment of RM ${fmtInt(Math.round(dp))} (${dpPct}%) is confirmed and available — not borrowed` },
        { id: "insurance", label: "Comprehensive insurance cost (~RM 1,500–3,000/year) is included in my monthly budget" },
        { id: "maintenance", label: "Scheduled servicing, tyres, and ad-hoc repairs (~RM 1,500–3,000/year) are planned" },
        { id: "fuel",      label: "Monthly fuel, toll, and parking costs are estimated and accounted for in my budget" },
        { id: "tenure",    label: "I am NOT relying on maximum 9-year tenure just to lower the monthly — I have compared shorter options" },
        { id: "offers",    label: "I have compared financing offers from at least 3 banks / financial institutions" },
      ]
    : [];
  const checkedCount = checklistItems.filter((i) => checklist[i.id]).length;

  const handleCalculate = () => {
    if (isValid) { setSubmitted(true); trackCarLoanCalculated(price - dp, tenure); }
  };
  const handleReset = () => {
    setCarPrice(""); setDownPayment(""); setRate(""); setYears("");
    setSalary(""); setOtherDebts(""); setFuel(""); setInsurance(""); setMaintenance(""); setParking("");
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

          {/* ── Input Form ────────────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Car Details</h2>
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

              {/* ── Optional: Dashboard Personalisation ──────────────────────── */}
              <div className="border-t border-gray-100 pt-4">
                <button onClick={() => setShowCosts(!showCosts)}
                  className="flex items-center justify-between w-full text-left group">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Personalise Your Dashboard <span className="font-normal normal-case text-gray-300">— optional</span>
                  </p>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${showCosts ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showCosts && (
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Monthly Gross Salary</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                          <input type="number" min="0" step="100" placeholder="e.g. 5000"
                            value={salary} onChange={(e) => setSalary(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 pl-9 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Other Monthly Debts</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                          <input type="number" min="0" step="50" placeholder="Mortgage, loans…"
                            value={otherDebts} onChange={(e) => setOtherDebts(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 pl-9 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Monthly ownership costs (estimates are fine):</p>
                    <div className="grid grid-cols-2 gap-3">
                      <CostInput label="Fuel" placeholder="e.g. 300" value={fuel} onChange={setFuel} />
                      <CostInput label="Insurance (monthly)" placeholder="e.g. 150" value={insurance} onChange={setInsurance} />
                      <CostInput label="Maintenance" placeholder="e.g. 100" value={maintenance} onChange={setMaintenance} />
                      <CostInput label="Parking / Toll / Other" placeholder="e.g. 200" value={parking} onChange={setParking} />
                    </div>
                    <p className="text-xs text-gray-300 mt-1">These inputs only affect your dashboard — not the loan calculation.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              <button onClick={handleCalculate} disabled={!isValid}
                className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 rounded-xl transition-colors">
                Calculate
              </button>
              {result && (
                <button onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm">
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* ── Results Panel ─────────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🚗</div>
                <p className="text-gray-400 text-sm">Enter your car details and tap <strong>Calculate</strong>.</p>
                <p className="text-gray-300 text-xs mt-2">Expand &quot;Personalise Your Dashboard&quot; to see true ownership cost and affordability score.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Estimated Monthly Instalment</p>
                  <p className="text-5xl font-bold text-orange-500 mb-1">RM {fmt(result.monthly)}</p>
                  <p className="text-sm text-gray-400">per month for {tenure} year{tenure > 1 ? "s" : ""}</p>
                  {dash && dash.hasCosts && (
                    <p className="text-sm text-amber-700 font-medium mt-2">
                      True monthly cost: <span className="font-bold">RM {fmtInt(Math.round(dash.monthlyOwnership))}</span>
                      <span className="text-xs font-normal text-gray-400 ml-1">(incl. running costs)</span>
                    </p>
                  )}
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
      {/* ── CAR BUYING DECISION DASHBOARD ──────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {result && dash && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📊</span>
              <h2 className="text-2xl font-bold text-gray-900">Car Buying Decision Dashboard</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Beyond the monthly instalment — here is what this car really costs and whether you can comfortably afford it.
            </p>
            {!dash.salaryProvided && (
              <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-3 inline-block">
                💡 Expand &quot;Personalise Your Dashboard&quot; and add your salary for a fully personalised assessment. Estimates below use the minimum recommended income (3× instalment).
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
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border ${c.border} ${c.bg}`}>
                        {c.dot}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${c.text} mb-2`}>{c.label}</h3>
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
                  <p className="text-xs text-gray-500">instalment ÷ income</p>
                </div>
                <Badge label={dash.affLabel} className={AFFORD_C[dash.affStatus].badge} />
              </div>
              <Bar pct={(dash.affPct / 40) * 100} color={AFFORD_C[dash.affStatus].bar} className="mb-3" />
              <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span className="text-green-600">≤15% Comfortable</span>
                <span className="text-blue-600">≤20% Manageable</span>
                <span className="text-amber-600">≤30% Caution</span>
                <span className="text-red-600">30%+</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{dash.affNote}</p>
              <div className="mt-3 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs">
                <div><p className="text-gray-400">Monthly instalment</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(result.monthly))}</p></div>
                <div><p className="text-gray-400">{dash.salaryProvided ? "Your salary" : "Min. recommended"}</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(dash.effectiveSalary))}</p></div>
              </div>
            </DashCard>

            {/* ── Card 3: True Monthly Ownership Cost ──────────────────────── */}
            <DashCard>
              <CardTitle icon="🔍" title="True Monthly Ownership Cost" />
              {!dash.hasCosts ? (
                <div className="text-center py-6">
                  <p className="text-gray-400 text-sm mb-2">The loan instalment is rarely the full picture.</p>
                  <p className="text-gray-300 text-xs">Add fuel, insurance, maintenance, and parking estimates above to see your true monthly car cost.</p>
                  <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mt-4">
                    💡 Expand &quot;Personalise Your Dashboard&quot; to add running costs
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-2 mb-4">
                    {[
                      { label: "Loan Instalment",       amount: result.monthly,  color: "bg-orange-400" },
                      { label: "Fuel",                  amount: dash.fuelNum,    color: "bg-blue-400", hide: dash.fuelNum === 0 },
                      { label: "Insurance (monthly)",   amount: dash.insurNum,   color: "bg-purple-400", hide: dash.insurNum === 0 },
                      { label: "Maintenance",           amount: dash.maintNum,   color: "bg-teal-400", hide: dash.maintNum === 0 },
                      { label: "Parking / Toll / Other",amount: dash.parkNum,    color: "bg-gray-400", hide: dash.parkNum === 0 },
                    ].filter((i) => !i.hide).map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.color}`} />
                        <span className="text-xs text-gray-600 flex-1">{item.label}</span>
                        <span className="text-xs font-semibold text-gray-800">RM {fmtInt(Math.round(item.amount))}</span>
                        <Bar pct={(item.amount / dash.monthlyOwnership) * 100} color={item.color} className="w-20 flex-shrink-0" />
                      </div>
                    ))}
                    <div className="flex items-center gap-3 border-t border-gray-100 pt-2">
                      <span className="w-2.5 h-2.5 flex-shrink-0" />
                      <span className="text-sm font-bold text-gray-800 flex-1">Total Monthly Car Cost</span>
                      <span className="text-sm font-bold text-orange-600">RM {fmtInt(Math.round(dash.monthlyOwnership))}</span>
                    </div>
                  </div>
                  {dash.salaryProvided && (
                    <div className={`rounded-xl p-3 text-xs ${dash.ownershipPct > 40 ? "bg-red-50 text-red-700" : dash.ownershipPct > 30 ? "bg-amber-50 text-amber-700" : "bg-green-50 text-green-700"}`}>
                      Total car cost is <strong>{Math.round(dash.ownershipPct)}% of your monthly income</strong>.
                      {dash.ownershipPct > 40 && " This is high — the loan instalment alone understates your real car burden."}
                      {dash.ownershipPct <= 30 && " This is within a manageable range."}
                    </div>
                  )}
                </>
              )}
            </DashCard>

            {/* ── Card 4: Estimated DSR ─────────────────────────────────────── */}
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
                <Badge label={dash.dsrLabel} className={DSR_C[dash.dsrStatus].badge} />
              </div>
              <Bar pct={(dash.dsrPct / 80) * 100} color={DSR_C[dash.dsrStatus].bar} className="mb-3" />
              <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span>0%</span><span className="text-green-600">40% Healthy</span><span className="text-amber-600">60%</span><span className="text-red-600">70%+</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Many Malaysian lenders commonly assess DSR when approving hire purchase, but actual approval rules vary by bank and applicant profile. A DSR below 60% is generally expected.
              </p>
              <div className="mt-3 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs">
                <div><p className="text-gray-400">This car loan</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(result.monthly))}</p></div>
                <div><p className="text-gray-400">Other monthly debts</p><p className="font-semibold text-gray-800">RM {fmtInt(Math.round(debtsNum))}</p></div>
              </div>
            </DashCard>

            {/* ── Card 5: Down Payment Analysis ────────────────────────────── */}
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
                    <p className="font-bold text-blue-800">RM {fmtInt(Math.round(dash.dp20))}</p>
                    <p className="text-xs text-blue-400">RM {fmtInt(Math.round(dash.m20))}/month</p>
                  </div>
                ) : (
                  <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                    <p className="text-xs text-green-600 mb-1">Strong ✓</p>
                    <p className="font-bold text-green-800">{dpPct}% paid</p>
                    <p className="text-xs text-green-400">Above 20% target</p>
                  </div>
                )}
              </div>
              <div className="space-y-2 mb-3">
                {[
                  { label: "10% Down", dp: price * 0.10, monthly: dash.m10, interest: dash.ti10 },
                  { label: "20% Down", dp: price * 0.20, monthly: dash.m20, interest: dash.ti20 },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 text-xs">
                    <span className="font-semibold text-gray-700">{s.label} (RM {fmtInt(Math.round(s.dp))})</span>
                    <span className="text-gray-600">RM {fmtInt(Math.round(s.monthly))}/mo</span>
                    <span className="text-red-500">RM {fmtInt(Math.round(s.interest))} interest</span>
                  </div>
                ))}
              </div>
              {dpPct < 20 && dash.interestSavedAt20 > 0 && (
                <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-xs text-green-700">
                  <p>Saving to 20% down payment would save <strong>RM {fmtInt(Math.round(dash.interestSavedAt20))}</strong> in total interest and reduce monthly instalment by <strong>RM {fmtInt(Math.round(dash.monthlySavedAt20))}</strong>.</p>
                </div>
              )}
            </DashCard>

            {/* ── Card 6: Tenure Comparison ─────────────────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="⚖️" title="Tenure Comparison — 5, 7 and 9 Years" />
              <p className="text-xs text-gray-500 mb-4">Longer tenure lowers your monthly instalment but significantly increases the total interest you pay. Choose the shortest tenure your DSR allows.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-3 text-left font-semibold text-gray-600 text-xs">Tenure</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs">Monthly</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs hidden sm:table-cell">Total Interest</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs hidden sm:table-cell">Total Repayment</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs">Income %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dash.scenarios.map((s) => {
                      const isCurrent = s.years === tenure;
                      const affSt: AffordStatus = s.affPct <= 15 ? "comfortable" : s.affPct <= 20 ? "manageable" : s.affPct <= 30 ? "caution" : "risk";
                      return (
                        <tr key={s.years} className={`border-b border-gray-50 last:border-0 ${s.recommended ? "bg-blue-50" : isCurrent ? "bg-gray-50" : ""}`}>
                          <td className="py-3 font-semibold text-gray-800">
                            {s.years} years
                            {s.recommended && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">Most Balanced</span>}
                            {isCurrent && !s.recommended && <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">Current</span>}
                          </td>
                          <td className="py-3 text-right font-bold text-gray-900">RM {fmtInt(Math.round(s.monthly))}</td>
                          <td className="py-3 text-right text-red-500 hidden sm:table-cell">RM {fmtInt(Math.round(s.totalInterest))}</td>
                          <td className="py-3 text-right text-gray-600 hidden sm:table-cell">RM {fmtInt(Math.round(s.totalPayment))}</td>
                          <td className="py-3 text-right">
                            <Badge label={`${Math.round(s.affPct)}%`} className={AFFORD_C[affSt].badge} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">&quot;Most Balanced&quot; = shortest tenure where monthly instalment is ≤25% of income.</p>
            </DashCard>

            {/* ── Card 7: 5-Year Total Ownership Cost ──────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="🗓️" title="5-Year Total Ownership Cost" />
              <p className="text-xs text-gray-500 mb-5">
                Most Malaysians only see the monthly instalment. Here is the real total cost of owning this car for 5 years — including all running costs.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Loan Repayments",     amount: dash.loanCost5,  color: "text-orange-600", bg: "bg-orange-50", note: `${Math.min(tenure, 5)} years of instalments` },
                  { label: "Fuel (est.)",          amount: dash.fuelCost5,  color: "text-blue-600",   bg: "bg-blue-50",   note: "60 months", hide: dash.fuelNum === 0 },
                  { label: "Insurance (est.)",     amount: dash.insurCost5, color: "text-purple-600", bg: "bg-purple-50", note: "60 months", hide: dash.insurNum === 0 },
                  { label: "Maintenance (est.)",   amount: dash.maintCost5, color: "text-teal-600",   bg: "bg-teal-50",   note: "60 months", hide: dash.maintNum === 0 },
                  { label: "Parking / Toll (est.)",amount: dash.parkCost5,  color: "text-gray-600",   bg: "bg-gray-50",   note: "60 months", hide: dash.parkNum === 0 },
                ].filter((i) => !i.hide).map((item) => (
                  <div key={item.label} className={`rounded-xl p-4 ${item.bg}`}>
                    <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                    <p className={`font-bold text-base ${item.color}`}>RM {fmtInt(Math.round(item.amount))}</p>
                    <p className="text-xs text-gray-400">{item.note}</p>
                  </div>
                ))}
              </div>
              {dash.totalOwn5 > dash.loanCost5 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-amber-800">5-Year Total Ownership Cost</p>
                    <p className="text-2xl font-black text-amber-700">RM {fmtInt(Math.round(dash.totalOwn5))}</p>
                  </div>
                  <p className="text-xs text-amber-700">
                    Your running costs add <strong>RM {fmtInt(Math.round(dash.totalOwn5 - dash.loanCost5))}</strong> on top of loan repayments over 5 years —
                    {dash.loanCost5 > 0 && ` that is ${Math.round(((dash.totalOwn5 - dash.loanCost5) / dash.loanCost5) * 100)}% more than the loan alone.`}
                    {" "}Budget for these before committing.
                  </p>
                </div>
              )}
              {!dash.hasCosts && (
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center">
                  <p className="font-bold text-gray-800 text-lg mb-1">Loan Repayments (5yr): RM {fmtInt(Math.round(dash.loanCost5))}</p>
                  <p className="text-xs text-gray-400">Add ownership costs (fuel, insurance, maintenance, parking) to see the full 5-year picture.</p>
                </div>
              )}
            </DashCard>

            {/* ── Card 8: What-If Scenarios ─────────────────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="🔀" title="What-If Scenarios" />
              <p className="text-xs text-gray-500 mb-4">Small changes to your purchase decision can make a significant financial difference. Here are three quick comparisons:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {dash.whatIf.map((scenario, i) => {
                  const res = scenario.result;
                  const isBetter = res.monthlySaving > 0;
                  const interestChange = res.interestSaving;
                  return (
                    <div key={i} className={`rounded-2xl border p-4 ${isBetter ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                      <p className={`text-xs font-semibold mb-3 ${isBetter ? "text-green-800" : "text-red-800"}`}>{scenario.label}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">New monthly</span>
                          <span className="text-sm font-bold text-gray-800">RM {fmtInt(Math.round(res.monthly))}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Monthly change</span>
                          <span className={`text-sm font-bold ${res.monthlySaving > 0 ? "text-green-700" : "text-red-700"}`}>
                            {res.monthlySaving > 0 ? "−" : "+"} RM {fmtInt(Math.abs(Math.round(res.monthlySaving)))}/mo
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Interest change</span>
                          <span className={`text-xs font-semibold ${interestChange > 0 ? "text-green-700" : "text-red-700"}`}>
                            {interestChange > 0 ? "−" : "+"} RM {fmtInt(Math.abs(Math.round(interestChange)))} total
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </DashCard>

            {/* ── Card 9: Decision Checklist ────────────────────────────────── */}
            <DashCard className="md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">✅</span>
                  <h3 className="font-bold text-gray-800">Car Buying Decision Checklist</h3>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${checkedCount === checklistItems.length ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                  {checkedCount} / {checklistItems.length}
                </span>
              </div>
              <Bar pct={(checkedCount / checklistItems.length) * 100} color={checkedCount === checklistItems.length ? "bg-green-500" : "bg-orange-400"} className="mb-5" />
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
                  <p className="text-green-800 font-semibold">🎉 All items checked — you are well-prepared to make this decision!</p>
                </div>
              )}
            </DashCard>

            {/* ── Card 10: Financial Health Score ──────────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="⭐" title="Financial Health Score" />
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="flex-shrink-0 text-center">
                  <div className="inline-flex flex-col items-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <p className="text-6xl font-black text-gray-900">{dash.healthScore}</p>
                    <p className="text-sm text-gray-400 mb-2">out of 100</p>
                    <Stars count={dash.healthStars} />
                    <p className={`text-sm font-semibold mt-2 ${dash.healthScore >= 60 ? "text-green-600" : dash.healthScore >= 40 ? "text-amber-600" : "text-red-600"}`}>
                      {dash.healthScore >= 80 ? "Excellent" : dash.healthScore >= 60 ? "Good" : dash.healthScore >= 40 ? "Fair" : "Needs Improvement"}
                    </p>
                  </div>
                  {!dash.salaryProvided && <p className="text-xs text-gray-400 mt-2">Add salary for full accuracy</p>}
                </div>
                <div className="flex-1 space-y-4 w-full">
                  {dash.scoreFactors.map((f) => (
                    <div key={f.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{f.label}</span>
                        <span className="text-sm font-bold text-gray-900">{f.score}<span className="text-gray-400 font-normal">/{f.max}</span></span>
                      </div>
                      <Bar pct={(f.score / f.max) * 100}
                        color={f.score / f.max >= 0.8 ? "bg-green-500" : f.score / f.max >= 0.5 ? "bg-blue-500" : f.score / f.max >= 0.3 ? "bg-amber-500" : "bg-red-500"}
                        className="mb-1" />
                      <p className="text-xs text-gray-400">{f.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DashCard>

            {/* ── Next Recommended Actions ──────────────────────────────────── */}
            <DashCard className="md:col-span-2">
              <CardTitle icon="🗺️" title="Next Decisions to Make" />
              <p className="text-sm text-gray-500 mb-5">A car purchase is one decision in a chain. Make these in order:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { step: 1, icon: "📊", title: "Check Your Full DSR",          desc: "Know your exact Debt Service Ratio before visiting any showroom or bank.", href: "/dsr-calculator-malaysia", cta: "DSR Calculator →" },
                  { step: 2, icon: "💰", title: "Confirm Your Take-Home Pay",   desc: "Understand how much you actually have after EPF, SOCSO, and PCB deductions.", href: "/salary-calculator-malaysia", cta: "Salary Calculator →" },
                  { step: 3, icon: "🏠", title: "Protect Your Home Loan Future", desc: "This car loan reduces your future mortgage eligibility. Plan both purchases together.", href: "/mortgage-calculator-malaysia", cta: "Mortgage Calculator →" },
                  { step: 4, icon: "🛡️", title: "Build Emergency Fund First",   desc: `You need at least RM ${result ? fmtInt(Math.round(result.monthly * 3)) : "—"} (3 months of instalments) before signing any HP agreement.`, href: "/savings-calculator-malaysia", cta: "Savings Calculator →" },
                  { step: 5, icon: "📋", title: "Check Car Loan Eligibility",   desc: "Understand what banks look at and whether you meet their income and CCRIS requirements.", href: "/guides/car-loan-eligibility-malaysia", cta: "Eligibility Guide →" },
                  { step: 6, icon: "📄", title: "Compare Personal Loan vs HP",  desc: "For used cars or motorbikes, a personal loan may be more flexible. See the full comparison.", href: "/guides/personal-loan-guide-malaysia", cta: "Personal Loan Guide →" },
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

      {/* ── Quick Tips ────────────────────────────────────────────────────────── */}
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
