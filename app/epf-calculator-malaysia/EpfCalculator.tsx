"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { trackEpfCalculated } from "@/lib/gtag";
import { useLang } from "@/components/LangProvider";

const tr = {
  en: {
    formTitle: "Your EPF Details",
    currentAge: "Current Age", retirementAge: "Retirement Age",
    retireAt: "Retire at:",
    salary: "Monthly Gross Salary",
    balance: "Current EPF Balance", balanceHint: "check i-Akaun", balanceHint2: "Enter 0 if starting fresh or unsure",
    increment: "Annual Salary Increment", dividend: "EPF Dividend Rate",
    calculate: "Calculate EPF Savings", reset: "Reset",
    disclaimer: "Projection only. Actual EPF dividends vary yearly. This calculator assumes a fixed rate — results are estimates, not guarantees.",
    empty: "Enter your details and tap Calculate EPF Savings to see your projected retirement balance.",
    projectedLabel: "Projected EPF Balance at Age",
    afterYears: "year", afterYearsPlural: "years",
    yourContrib: "Your Contributions", yourSub: "11% × years",
    employerContrib: "Employer Contributions", employerSub: "12–13% × years",
    dividendEarned: "Total Dividends Earned",
    existingBal: "Existing Balance", existingSub: "starting amount",
    composition: "Balance composition",
    existingLegend: "Existing balance",
    yearlyTitle: "Year-by-Year Projection",
    yearlySub: "How your EPF balance grows from age",
    to: "to",
    colAge: "Age / Year", colSalary: "Monthly Salary", colEmployee: "Your Contrib.", colEmployer: "Employer Contrib.", colDividend: "Dividend", colBalance: "Balance (RM)",
    showAll: "Show all", showLess: "Show less", years: "years",
    howTitle: "How EPF Savings Work",
    dividendHistoryTitle: "EPF Dividend History",
    dividendHistorySub: "Declared annual dividend rates for Akaun Persaraan (conventional) and Akaun Sejahtera (conventional), 2016–2023.",
    benchmarkTitle: "EPF Basic Savings Benchmarks",
    benchmarkSub: "EPF publishes age-based Basic Savings targets. Aim to meet or exceed these thresholds for a financially secure retirement.",
    benchmarkNote: "*RM600,000 at age 55 is EPF's recommended retirement adequacy target, providing ~RM2,500/month for 20 years. Source: KWSP.",
    faqTitle: "Frequently Asked Questions",
    back: "Back to all calculators",
  },
  bm: {
    formTitle: "Maklumat EPF Anda",
    currentAge: "Umur Semasa", retirementAge: "Umur Persaraan",
    retireAt: "Bersara pada:",
    salary: "Gaji Kasar Bulanan",
    balance: "Baki EPF Semasa", balanceHint: "semak i-Akaun", balanceHint2: "Masukkan 0 jika baru mula atau tidak pasti",
    increment: "Kenaikan Gaji Tahunan", dividend: "Kadar Dividen EPF",
    calculate: "Kira Simpanan EPF", reset: "Reset",
    disclaimer: "Unjuran sahaja. Dividen EPF berbeza setiap tahun. Kalkulator ini menggunakan kadar tetap — keputusan adalah anggaran, bukan jaminan.",
    empty: "Masukkan maklumat anda dan tekan Kira Simpanan EPF untuk lihat unjuran baki persaraan.",
    projectedLabel: "Unjuran Baki EPF Pada Umur",
    afterYears: "tahun", afterYearsPlural: "tahun",
    yourContrib: "Caruman Anda", yourSub: "11% × tahun",
    employerContrib: "Caruman Majikan", employerSub: "12–13% × tahun",
    dividendEarned: "Jumlah Dividen Diterima",
    existingBal: "Baki Sedia Ada", existingSub: "jumlah permulaan",
    composition: "Komposisi baki",
    existingLegend: "Baki sedia ada",
    yearlyTitle: "Unjuran Tahun demi Tahun",
    yearlySub: "Bagaimana baki EPF anda berkembang dari umur",
    to: "hingga",
    colAge: "Umur / Tahun", colSalary: "Gaji Bulanan", colEmployee: "Caruman Anda", colEmployer: "Caruman Majikan", colDividend: "Dividen", colBalance: "Baki (RM)",
    showAll: "Tunjuk semua", showLess: "Tunjuk kurang", years: "tahun",
    howTitle: "Cara Simpanan EPF Berfungsi",
    dividendHistoryTitle: "Sejarah Dividen EPF",
    dividendHistorySub: "Kadar dividen tahunan Akaun Persaraan dan Akaun Sejahtera (konvensional), 2016–2023.",
    benchmarkTitle: "Penanda Aras Simpanan Asas EPF",
    benchmarkSub: "EPF menerbitkan sasaran Simpanan Asas mengikut umur. Cuba capai atau lebihi aras ini untuk persaraan yang selamat.",
    benchmarkNote: "*RM600,000 pada umur 55 adalah sasaran kecukupan persaraan EPF, ~RM2,500/bulan selama 20 tahun. Sumber: KWSP.",
    faqTitle: "Soalan Lazim",
    back: "Kembali ke semua kalkulator",
  },
  zh: {
    formTitle: "你的 EPF 资料",
    currentAge: "现在年龄", retirementAge: "退休年龄",
    retireAt: "退休年龄：",
    salary: "税前月薪",
    balance: "现有 EPF 余额", balanceHint: "查看 i-Akaun", balanceHint2: "如果刚开始或不确定，填 0",
    increment: "年薪增幅", dividend: "EPF 股息率",
    calculate: "计算 EPF 储蓄", reset: "重设",
    disclaimer: "仅供预测。EPF 股息每年不同，此计算器使用固定利率 — 结果为估算，非保证。",
    empty: "输入资料后点击计算 EPF 储蓄，查看预计退休余额。",
    projectedLabel: "预计 EPF 余额（退休年龄）",
    afterYears: "年后", afterYearsPlural: "年后",
    yourContrib: "你的供款", yourSub: "11% × 年数",
    employerContrib: "雇主供款", employerSub: "12–13% × 年数",
    dividendEarned: "总股息收入",
    existingBal: "现有余额", existingSub: "起始金额",
    composition: "余额组成",
    existingLegend: "现有余额",
    yearlyTitle: "逐年预测",
    yearlySub: "EPF 余额从年龄",
    to: "到",
    colAge: "年龄 / 年份", colSalary: "月薪", colEmployee: "你的供款", colEmployer: "雇主供款", colDividend: "股息", colBalance: "余额 (RM)",
    showAll: "显示全部", showLess: "显示较少", years: "年",
    howTitle: "EPF 储蓄如何运作",
    dividendHistoryTitle: "EPF 股息历史",
    dividendHistorySub: "Akaun Persaraan 和 Akaun Sejahtera（传统）年度股息率，2016–2023。",
    benchmarkTitle: "EPF 基本储蓄目标",
    benchmarkSub: "EPF 按年龄公布基本储蓄目标，尽量达到或超过这些目标以保障退休生活。",
    benchmarkNote: "*55 岁 RM600,000 是 EPF 建议的退休充裕目标，可支持约 20 年每月 RM2,500。来源：KWSP。",
    faqTitle: "常见问题",
    back: "回到所有计算器",
  },
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────
interface YearRow {
  age: number;
  year: number;
  monthlySalary: number;
  employeeContrib: number;
  employerContrib: number;
  dividend: number;
  closingBalance: number;
}

interface EpfResult {
  rows: YearRow[];
  totalEmployee: number;
  totalEmployer: number;
  totalDividend: number;
  finalBalance: number;
  yearsToRetirement: number;
}

// ─── Core calculation ─────────────────────────────────────────────────────────
function calcEpf(
  currentAge: number,
  retirementAge: number,
  monthlySalary: number,
  currentBalance: number,
  salaryIncrement: number, // % per year
  dividendRate: number     // % per year
): EpfResult {
  const rows: YearRow[] = [];
  let balance = currentBalance;
  let salary = monthlySalary;
  let totalEmployee = 0;
  let totalEmployer = 0;
  let totalDividend = 0;
  const currentYear = new Date().getFullYear();

  for (let age = currentAge; age < retirementAge; age++) {
    const empRate = 0.11;
    const erRate = salary <= 5_000 ? 0.13 : 0.12;

    const annualEmployee = r2(salary * empRate * 12);
    const annualEmployer = r2(salary * erRate * 12);
    const annualContribs = annualEmployee + annualEmployer;

    // Dividend on opening balance + half of year's contributions (monthly average approx.)
    const dividendBase = balance + annualContribs / 2;
    const dividend = r2(dividendBase * (dividendRate / 100));

    balance = r2(balance + annualContribs + dividend);
    totalEmployee = r2(totalEmployee + annualEmployee);
    totalEmployer = r2(totalEmployer + annualEmployer);
    totalDividend = r2(totalDividend + dividend);

    rows.push({
      age,
      year: currentYear + (age - currentAge),
      monthlySalary: r2(salary),
      employeeContrib: annualEmployee,
      employerContrib: annualEmployer,
      dividend,
      closingBalance: balance,
    });

    // Apply salary increment for next year
    salary = r2(salary * (1 + salaryIncrement / 100));
  }

  return {
    rows,
    totalEmployee,
    totalEmployer,
    totalDividend,
    finalBalance: balance,
    yearsToRetirement: retirementAge - currentAge,
  };
}

function r2(n: number) {
  return Math.round(n * 100) / 100;
}

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtInt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What are the EPF contribution rates in Malaysia?",
    a: "For employees below age 60, the employee contribution rate is 11% of gross monthly salary. The employer contributes 13% for salaries ≤ RM5,000 and 12% for salaries above RM5,000. These rates are set under the Employees Provident Fund Act 1991 and are mandatory for all private-sector employees.",
  },
  {
    q: "When can I withdraw my EPF savings?",
    a: "Full withdrawal of Akaun Persaraan (Account 1 equivalent) is allowed when you reach age 55 or 60. Partial withdrawals from Akaun Sejahtera are allowed for housing, education, healthcare, and hajj. The new Akaun Fleksibel (10% of contributions from May 2024) can be withdrawn at any time without restrictions.",
  },
  {
    q: "What dividend rate does EPF pay?",
    a: "EPF declares dividends annually. Recent rates: 5.50% for Akaun Persaraan in 2023 (6.10% in 2021, 6.15% in 2018, 6.90% in 2017). The long-term average over the past decade is around 6%. This calculator defaults to 5.5% as a conservative estimate — you can adjust it to model different scenarios.",
  },
  {
    q: "What is the EPF three-account structure introduced in 2024?",
    a: "From May 2024, EPF restructured contributions into three accounts: Akaun Persaraan (75% of contributions — for retirement only), Akaun Sejahtera (15% — for housing, education, health), and Akaun Fleksibel (10% — withdrawable anytime). This replaced the old two-account structure (Account 1: 70%, Account 2: 30%).",
  },
  {
    q: "How does EPF dividend compounding work?",
    a: "EPF dividends are calculated on your monthly minimum balance — the lowest balance in your account for that calendar month. Dividends declared in January each year are credited to your account and immediately form part of the balance that earns future dividends. This compound effect is the main driver of long-term EPF growth.",
  },
  {
    q: "Is EPF sufficient for retirement in Malaysia?",
    a: "Studies by EPF show that most Malaysians fall short of the Basic Savings benchmark (age-linked targets ranging from RM6,100 at age 25 to RM240,000 at age 54). EPF recommends having at least RM600,000 at retirement for a 20-year post-retirement life at RM2,500/month. Supplementing EPF with PRS (Private Retirement Scheme) or other investments is advisable for most people.",
  },
  {
    q: "Can I make voluntary EPF contributions?",
    a: "Yes. Employees can make voluntary top-up contributions (i-Saraan) above the mandatory 11%. Self-employed individuals and those without formal employment can also contribute voluntarily under i-Saraan. Voluntary contributions also earn the same EPF dividend rate and are eligible for income tax relief up to RM4,000 (combined with mandatory contributions and life insurance).",
  },
];

// ─── EPF dividend history ─────────────────────────────────────────────────────
const dividendHistory = [
  { year: "2023", persaraan: "5.50%", sejahtera: "4.50%" },
  { year: "2022", persaraan: "5.35%", sejahtera: "4.75%" },
  { year: "2021", persaraan: "6.10%", sejahtera: "5.65%" },
  { year: "2020", persaraan: "5.20%", sejahtera: "4.90%" },
  { year: "2019", persaraan: "5.45%", sejahtera: "5.00%" },
  { year: "2018", persaraan: "6.15%", sejahtera: "5.90%" },
  { year: "2017", persaraan: "6.90%", sejahtera: "6.70%" },
  { year: "2016", persaraan: "5.70%", sejahtera: "5.70%" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function EpfCalculator() {
  const { lang } = useLang();
  const t = (k: keyof typeof tr.en) => tr[lang][k];
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("55");
  const [salary, setSalary] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [increment, setIncrement] = useState("3");
  const [dividendRate, setDividendRate] = useState("5.5");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFullTable, setShowFullTable] = useState(false);

  const age = parseInt(currentAge) || 0;
  const retAge = parseInt(retirementAge) || 55;
  const monthlySalary = parseFloat(salary.replace(/,/g, "")) || 0;
  const balance = parseFloat(currentBalance.replace(/,/g, "")) || 0;
  const inc = parseFloat(increment) || 0;
  const divRate = parseFloat(dividendRate) || 5.5;

  const isValid =
    age >= 18 &&
    age < retAge &&
    retAge <= 70 &&
    monthlySalary > 0 &&
    balance >= 0 &&
    divRate >= 1 &&
    divRate <= 15;

  const result = useMemo(
    (): EpfResult | null =>
      submitted && isValid
        ? calcEpf(age, retAge, monthlySalary, balance, inc, divRate)
        : null,
    [submitted, age, retAge, monthlySalary, balance, inc, divRate]
  );

  const handleCalculate = () => {
    if (isValid) setSubmitted(true);
  };

  const handleReset = () => {
    setCurrentAge("30");
    setRetirementAge("55");
    setSalary("");
    setCurrentBalance("");
    setIncrement("3");
    setDividendRate("5.5");
    setSubmitted(false);
    setShowFullTable(false);
  };

  const resetOnChange = (setter: (v: string) => void) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value);
    setSubmitted(false);
    setShowFullTable(false);
  };

  // Analytics — fire once per calculation
  const trackedBalance = useRef<number | null>(null);
  useEffect(() => {
    if (result && result.finalBalance !== trackedBalance.current) {
      trackedBalance.current = result.finalBalance;
      trackEpfCalculated(monthlySalary, result.finalBalance);
    }
  }, [result, monthlySalary]);

  const visibleRows = result
    ? showFullTable
      ? result.rows
      : result.rows.slice(0, 10)
    : [];

  // Contribution split for visual bar
  const empPct = result
    ? Math.round((result.totalEmployee / result.finalBalance) * 100)
    : 0;
  const erPct = result
    ? Math.round((result.totalEmployer / result.finalBalance) * 100)
    : 0;
  const divPct = result ? 100 - empPct - erPct : 0;

  return (
    <>
      {/* Disclaimer banner */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-sm text-amber-700">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{t("disclaimer")}</span>
        </div>
      </div>

      {/* ── Calculator ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Inputs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-5">
            <h2 className="text-lg font-semibold text-gray-800">{t("formTitle")}</h2>

            {/* Age row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="currentAge" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("currentAge")}
                </label>
                <div className="relative">
                  <input
                    id="currentAge"
                    type="number"
                    min="18"
                    max="69"
                    placeholder="e.g. 30"
                    value={currentAge}
                    onChange={resetOnChange(setCurrentAge)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-14 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">yrs</span>
                </div>
              </div>
              <div>
                <label htmlFor="retirementAge" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("retirementAge")}
                </label>
                <div className="relative">
                  <input
                    id="retirementAge"
                    type="number"
                    min="19"
                    max="70"
                    placeholder="55"
                    value={retirementAge}
                    onChange={resetOnChange(setRetirementAge)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-14 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">yrs</span>
                </div>
              </div>
            </div>

            {/* Quick retirement age buttons */}
            <div>
              <p className="text-xs text-gray-500 mb-2">{t("retireAt")}</p>
              <div className="flex gap-2">
                {[55, 56, 60].map((a) => (
                  <button
                    key={a}
                    onClick={() => { setRetirementAge(String(a)); setSubmitted(false); }}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      retirementAge === String(a)
                        ? "bg-teal-600 text-white border-teal-600"
                        : "border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly salary */}
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("salary")}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="salary"
                  type="number"
                  min="0"
                  step="100"
                  placeholder="e.g. 5000"
                  value={salary}
                  onChange={resetOnChange(setSalary)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Current EPF balance */}
            <div>
              <label htmlFor="balance" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("balance")}
                <span className="ml-1.5 text-gray-400 font-normal text-xs">({t("balanceHint")})</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="balance"
                  type="number"
                  min="0"
                  step="1000"
                  placeholder="e.g. 50000"
                  value={currentBalance}
                  onChange={resetOnChange(setCurrentBalance)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">{t("balanceHint2")}</p>
            </div>

            {/* Assumptions row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="increment" className="block text-xs font-medium text-gray-700 mb-1.5">
                  {t("increment")}
                </label>
                <div className="relative">
                  <input
                    id="increment"
                    type="number"
                    min="0"
                    max="20"
                    step="0.5"
                    value={increment}
                    onChange={resetOnChange(setIncrement)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pr-8 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">%</span>
                </div>
              </div>
              <div>
                <label htmlFor="dividend" className="block text-xs font-medium text-gray-700 mb-1.5">
                  {t("dividend")}
                </label>
                <div className="relative">
                  <input
                    id="dividend"
                    type="number"
                    min="1"
                    max="15"
                    step="0.1"
                    value={dividendRate}
                    onChange={resetOnChange(setDividendRate)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pr-8 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">%</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={handleCalculate}
                disabled={!isValid}
                className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-200 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {t("calculate")}
              </button>
              {submitted && (
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm"
                >
                  {t("reset")}
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🏦</div>
                <p className="text-gray-400 text-sm">
                  {t("empty")}
                </p>
              </div>
            ) : (
              <>
                {/* Primary figure */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">{t("projectedLabel")} {retAge}</p>
                  <p className="text-4xl sm:text-5xl font-bold text-teal-600 mb-1">
                    RM {fmtInt(Math.round(result.finalBalance))}
                  </p>
                  <p className="text-sm text-gray-400">{result.yearsToRetirement} {t("afterYearsPlural")}</p>
                </div>

                {/* 4 key stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: t("yourContrib"), value: `RM ${fmtInt(Math.round(result.totalEmployee))}`, sub: t("yourSub"), color: "bg-teal-50 text-teal-700" },
                    { label: t("employerContrib"), value: `RM ${fmtInt(Math.round(result.totalEmployer))}`, sub: t("employerSub"), color: "bg-blue-50 text-blue-700" },
                    { label: t("dividendEarned"), value: `RM ${fmtInt(Math.round(result.totalDividend))}`, sub: `at ${divRate}% p.a.`, color: "bg-green-50 text-green-700" },
                    { label: t("existingBal"), value: `RM ${fmtInt(Math.round(balance))}`, sub: t("existingSub"), color: "bg-gray-50 text-gray-700" },
                  ].map((m) => (
                    <div key={m.label} className={`rounded-xl px-4 py-3 ${m.color.split(" ")[0]}`}>
                      <p className={`text-xs mb-0.5 ${m.color.split(" ")[1]}`}>{m.label}</p>
                      <p className={`font-bold text-sm ${m.color.split(" ")[1]}`}>{m.value}</p>
                      <p className="text-xs text-gray-400">{m.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Stacked composition bar */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">{t("composition")}</p>
                  <div className="flex rounded-full overflow-hidden h-3 mb-2">
                    {balance > 0 && (
                      <div
                        className="bg-gray-300 transition-all duration-500"
                        style={{ width: `${Math.round((balance / result.finalBalance) * 100)}%` }}
                      />
                    )}
                    <div className="bg-teal-500 transition-all duration-500" style={{ width: `${empPct}%` }} />
                    <div className="bg-blue-400 transition-all duration-500" style={{ width: `${erPct}%` }} />
                    <div className="bg-green-400 transition-all duration-500" style={{ width: `${divPct}%` }} />
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                    {balance > 0 && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />
                        {t("existingLegend")}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" />Your contributions ({empPct}%)</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block" />Employer ({erPct}%)</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />Dividends ({divPct}%)</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Year-by-year projection table */}
      {result && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex items-start justify-between mb-6 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{t("yearlyTitle")}</h2>
                <p className="text-gray-500 text-sm mt-0.5">{t("yearlySub")} {age} {t("to")} {retAge}</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-100">
                    <th className="pb-3 font-semibold text-gray-700">{t("colAge")}</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right hidden sm:table-cell">{t("colSalary")}</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right">{t("colEmployee")}</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right hidden md:table-cell">{t("colEmployer")}</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right hidden sm:table-cell">{t("colDividend")}</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right">{t("colBalance")}</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map((row) => (
                    <tr key={row.age} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-3">
                        <span className="font-medium text-gray-800">{row.age}</span>
                        <span className="text-gray-400 text-xs ml-1.5">{row.year}</span>
                      </td>
                      <td className="py-3 text-right text-gray-600 hidden sm:table-cell">{fmt(row.monthlySalary)}</td>
                      <td className="py-3 text-right text-teal-600">{fmt(row.employeeContrib)}</td>
                      <td className="py-3 text-right text-blue-500 hidden md:table-cell">{fmt(row.employerContrib)}</td>
                      <td className="py-3 text-right text-green-600 hidden sm:table-cell">{fmt(row.dividend)}</td>
                      <td className="py-3 text-right font-semibold text-gray-900">{fmtInt(Math.round(row.closingBalance))}</td>
                    </tr>
                  ))}
                </tbody>
                {result.rows.length > 0 && (
                  <tfoot>
                    <tr className="border-t-2 border-gray-200 font-bold text-gray-900">
                      <td className="pt-4 pb-2">Total</td>
                      <td className="pt-4 pb-2 hidden sm:table-cell" />
                      <td className="pt-4 pb-2 text-right text-teal-700">{fmt(result.totalEmployee)}</td>
                      <td className="pt-4 pb-2 text-right text-blue-600 hidden md:table-cell">{fmt(result.totalEmployer)}</td>
                      <td className="pt-4 pb-2 text-right text-green-700 hidden sm:table-cell">{fmt(result.totalDividend)}</td>
                      <td className="pt-4 pb-2 text-right text-teal-700">{fmtInt(Math.round(result.finalBalance))}</td>
                    </tr>
                  </tfoot>
                )}
              </table>
            </div>

            {result.rows.length > 10 && (
              <button
                onClick={() => setShowFullTable(!showFullTable)}
                className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
              >
                {showFullTable ? t("showLess") : `${t("showAll")} ${result.rows.length} ${t("years")}`}
                <svg className={`w-4 h-4 transition-transform ${showFullTable ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </section>
      )}

      {/* How EPF works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{t("howTitle")}</h2>
            <p className="text-gray-600 leading-relaxed">
              EPF (Employees Provident Fund), or KWSP (Kumpulan Wang Simpanan Pekerja), is Malaysia's mandatory retirement savings scheme. Every private-sector employee and their employer make monthly contributions, which are invested and earn an annual dividend declared by EPF. The power of EPF lies in compound dividends over decades — even moderate salary earners can accumulate significant retirement savings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                emoji: "👤",
                title: "Employee (11%)",
                body: "You contribute 11% of your gross salary every month. For salaries above RM5,000, you may opt for a lower 9% rate (but 11% is the default and recommended for maximum savings).",
                color: "bg-teal-50 border-teal-100",
              },
              {
                emoji: "🏢",
                title: "Employer (12–13%)",
                body: "Your employer contributes 13% of your salary if your monthly pay is ≤RM5,000, or 12% above that. This is paid on top of your salary — it's free money added to your retirement savings.",
                color: "bg-blue-50 border-blue-100",
              },
              {
                emoji: "📈",
                title: "Annual Dividend",
                body: "EPF invests the pooled funds and declares a dividend each January. The dividend is credited to your balance and compounds over time. Over the last decade, dividends have ranged from 5.2% to 6.9%.",
                color: "bg-green-50 border-green-100",
              },
            ].map((c) => (
              <div key={c.title} className={`rounded-xl border p-5 ${c.color}`}>
                <div className="text-2xl mb-2">{c.emoji}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1.5">{c.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          {/* 3-account structure */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">EPF Account Structure (from May 2024)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Akaun Persaraan", pct: "75%", desc: "Retirement savings only. Cannot be withdrawn before age 55 (or 60 for full withdrawal).", color: "border-l-4 border-teal-500 bg-teal-50" },
                { name: "Akaun Sejahtera", pct: "15%", desc: "Partial withdrawals allowed for housing, education, health, and hajj purposes.", color: "border-l-4 border-blue-400 bg-blue-50" },
                { name: "Akaun Fleksibel", pct: "10%", desc: "Fully flexible — can be withdrawn at any time with no restrictions via i-Akaun.", color: "border-l-4 border-green-400 bg-green-50" },
              ].map((a) => (
                <div key={a.name} className={`rounded-xl p-4 ${a.color}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-sm font-bold text-gray-800">{a.pct}</span>
                    <span className="text-xs font-semibold text-gray-600">{a.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dividend history */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t("dividendHistoryTitle")}</h2>
          <p className="text-gray-500 text-sm mb-6">{t("dividendHistorySub")}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">{t("colAge").split(" / ")[1] ?? t("colAge")}</th>
                  <th className="pb-3 font-semibold text-gray-700 text-center">Akaun Persaraan</th>
                  <th className="pb-3 font-semibold text-gray-700 text-center">Akaun Sejahtera</th>
                </tr>
              </thead>
              <tbody>
                {dividendHistory.map((row) => (
                  <tr key={row.year} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-800">{row.year}</td>
                    <td className="py-3 text-center">
                      <span className="inline-block bg-teal-50 text-teal-700 font-semibold text-xs px-3 py-1 rounded-full">
                        {row.persaraan}
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-block bg-blue-50 text-blue-700 font-semibold text-xs px-3 py-1 rounded-full">
                        {row.sejahtera}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Source: EPF Malaysia (KWSP). Pre-2023 columns reflect Account 1 / Account 2 rates before the restructuring. Shariah dividend rates differ slightly.
          </p>
        </div>
      </section>

      {/* EPF Basic Savings targets */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t("benchmarkTitle")}</h2>
          <p className="text-gray-500 text-sm mb-6">{t("benchmarkSub")}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { age: 25, target: "RM6,100" },
              { age: 30, target: "RM22,300" },
              { age: 35, target: "RM52,200" },
              { age: 40, target: "RM92,100" },
              { age: 45, target: "RM144,600" },
              { age: 50, target: "RM209,700" },
              { age: 54, target: "RM240,000" },
              { age: 55, target: "RM600,000*" },
            ].map((b) => (
              <div key={b.age} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Age {b.age}</p>
                <p className="font-bold text-gray-900 text-sm">{b.target}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            {t("benchmarkNote")}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("faqTitle")}</h2>
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
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("back")}
        </Link>
      </section>
    </>
  );
}
