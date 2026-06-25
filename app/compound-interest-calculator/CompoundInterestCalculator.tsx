"use client";

import { useState, useMemo } from "react";
import { trackCompoundInterestCalculated } from "@/lib/gtag";

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const FREQ_OPTIONS = [
  { label: "Annually", value: 1 },
  { label: "Quarterly", value: 4 },
  { label: "Monthly", value: 12 },
  { label: "Daily", value: 365 },
];

interface YearRow { year: number; balance: number; contributions: number; interest: number }
interface Result {
  finalBalance: number;
  totalContributions: number;
  totalInterest: number;
  rows: YearRow[];
}

function calculate(
  principal: number,
  monthlyContrib: number,
  annualRate: number,
  years: number,
  freq: number
): Result {
  const r = annualRate / 100 / freq;
  const rows: YearRow[] = [];
  let balance = principal;

  for (let y = 1; y <= years; y++) {
    const periods = freq;
    const monthsPerPeriod = 12 / freq;
    const contribPerPeriod = monthlyContrib * monthsPerPeriod;
    let yearInterest = 0;

    for (let p = 0; p < periods; p++) {
      const interestEarned = balance * r;
      yearInterest += interestEarned;
      balance = balance + interestEarned + contribPerPeriod;
    }

    rows.push({
      year: y,
      balance: Math.round(balance * 100) / 100,
      contributions: Math.round((principal + monthlyContrib * 12 * y) * 100) / 100,
      interest: Math.round((balance - principal - monthlyContrib * 12 * y) * 100) / 100,
    });
  }

  const totalContributions = principal + monthlyContrib * 12 * years;
  const totalInterest = balance - totalContributions;

  return {
    finalBalance: Math.round(balance * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    rows,
  };
}

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [freq, setFreq] = useState(12);
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const p = parseFloat(principal.replace(/,/g, "")) || 0;
  const m = parseFloat(monthly.replace(/,/g, "")) || 0;
  const r = parseFloat(rate) || 0;
  const y = parseInt(years) || 0;
  const isValid = (p > 0 || m > 0) && r >= 0 && y > 0 && y <= 50;

  const result = useMemo(
    () => (submitted && isValid ? calculate(p, m, r, y, freq) : null),
    [submitted, p, m, r, y, freq]
  );

  const interestPct = result ? Math.round((result.totalInterest / result.finalBalance) * 100) : 0;
  const principalPct = result ? Math.round((result.totalContributions / result.finalBalance) * 100) : 0;

  const handleCalculate = () => {
    if (isValid) { setSubmitted(true); trackCompoundInterestCalculated(p, result?.finalBalance ?? 0); }
  };
  const handleReset = () => {
    setPrincipal(""); setMonthly(""); setRate(""); setYears(""); setFreq(12);
    setSubmitted(false); setShowAll(false);
  };
  const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value); setSubmitted(false); setShowAll(false);
  };

  const visible = result ? (showAll ? result.rows : result.rows.slice(0, 5)) : [];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Investment Details</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Initial Investment</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input type="number" min="0" step="1000" placeholder="e.g. 10000"
                  value={principal} onChange={handleChange(setPrincipal)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Monthly Contribution</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input type="number" min="0" step="100" placeholder="e.g. 500"
                  value={monthly} onChange={handleChange(setMonthly)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Annual Interest / Return Rate</label>
              <div className="relative">
                <input type="number" min="0" max="30" step="0.1" placeholder="e.g. 6.0"
                  value={rate} onChange={handleChange(setRate)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Investment Period</label>
              <div className="relative">
                <input type="number" min="1" max="50" step="1" placeholder="e.g. 20"
                  value={years} onChange={handleChange(setYears)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-16 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">years</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[5, 10, 20, 30].map((yy) => (
                  <button key={yy} onClick={() => { setYears(String(yy)); setSubmitted(false); }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${years === String(yy) ? "bg-emerald-500 text-white border-emerald-500" : "border-gray-200 text-gray-600 hover:border-emerald-400 hover:text-emerald-600"}`}>
                    {yy}yr
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Compounding Frequency</label>
              <div className="grid grid-cols-2 gap-2">
                {FREQ_OPTIONS.map((opt) => (
                  <button key={opt.value} onClick={() => { setFreq(opt.value); setSubmitted(false); }}
                    className={`py-2 rounded-lg text-xs font-medium border transition-colors ${freq === opt.value ? "bg-emerald-500 text-white border-emerald-500" : "border-gray-200 text-gray-600 hover:border-emerald-400"}`}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-7">
            <button onClick={handleCalculate} disabled={!isValid}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-semibold py-3 rounded-xl transition-colors">
              Calculate Growth
            </button>
            {result && (
              <button onClick={handleReset}
                className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm">
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
          {!result ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">📈</div>
              <p className="text-gray-400 text-sm">Enter your investment details and tap <strong>Calculate Growth</strong>.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-1">Final Balance after {y} years</p>
                <p className="text-4xl font-bold text-emerald-600 mb-1">RM {fmt(result.finalBalance)}</p>
                <p className="text-sm text-emerald-700 font-medium">
                  +RM {fmt(result.totalInterest)} interest earned ({Math.round((result.totalInterest / result.totalContributions) * 100)}% gain)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Total Contributed", value: `RM ${fmt(result.totalContributions)}`, sub: "Your money in" },
                  { label: "Interest Earned", value: `RM ${fmt(result.totalInterest)}`, sub: "Compounding magic", accent: true },
                  { label: "Final Balance", value: `RM ${fmt(result.finalBalance)}`, sub: "After " + y + " years" },
                  { label: "Multiplier", value: `${(result.finalBalance / Math.max(result.totalContributions, 1)).toFixed(2)}×`, sub: "Times your money" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl p-4 ${s.accent ? "bg-emerald-50" : "bg-gray-50"}`}>
                    <p className={`text-xs mb-0.5 ${s.accent ? "text-emerald-600" : "text-gray-500"}`}>{s.label}</p>
                    <p className={`font-bold text-sm ${s.accent ? "text-emerald-700" : "text-gray-800"}`}>{s.value}</p>
                    <p className="text-xs text-gray-400">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex rounded-full overflow-hidden h-3 mb-1.5">
                  <div className="bg-blue-400 transition-all duration-500" style={{ width: `${principalPct}%` }} />
                  <div className="bg-emerald-400 transition-all duration-500" style={{ width: `${interestPct}%` }} />
                </div>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block" />Contributions {principalPct}%</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />Interest {interestPct}%</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {result && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Year-by-Year Growth</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">Year</th>
                  <th className="pb-3 font-semibold text-gray-700 text-right">Balance</th>
                  <th className="pb-3 font-semibold text-gray-700 text-right">Contributed</th>
                  <th className="pb-3 font-semibold text-gray-700 text-right text-emerald-600">Interest Earned</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((row) => (
                  <tr key={row.year} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 text-gray-700 font-medium">Year {row.year}</td>
                    <td className="py-3 text-right font-semibold text-gray-800">RM {fmt(row.balance)}</td>
                    <td className="py-3 text-right text-gray-600">RM {fmt(row.contributions)}</td>
                    <td className="py-3 text-right text-emerald-600 font-medium">RM {fmt(row.interest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {result.rows.length > 5 && (
            <button onClick={() => setShowAll(!showAll)}
              className="mt-4 text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1">
              {showAll ? "Show less" : `Show all ${result.rows.length} years`}
              <svg className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
