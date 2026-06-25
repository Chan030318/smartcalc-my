"use client";

import { useState, useMemo } from "react";
import { trackSavingsCalculated } from "@/lib/gtag";

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface YearRow { year: number; balance: number; deposited: number; interest: number }
interface Result {
  finalBalance: number;
  totalDeposited: number;
  totalInterest: number;
  rows: YearRow[];
}

function calculate(initial: number, monthlyDeposit: number, annualRate: number, years: number): Result {
  const r = annualRate / 100 / 12;
  let balance = initial;
  const rows: YearRow[] = [];

  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + r) + monthlyDeposit;
    }
    const totalDeposited = initial + monthlyDeposit * 12 * y;
    rows.push({
      year: y,
      balance: Math.round(balance * 100) / 100,
      deposited: Math.round(totalDeposited * 100) / 100,
      interest: Math.round((balance - totalDeposited) * 100) / 100,
    });
  }

  const totalDeposited = initial + monthlyDeposit * 12 * years;
  return {
    finalBalance: Math.round(balance * 100) / 100,
    totalDeposited: Math.round(totalDeposited * 100) / 100,
    totalInterest: Math.round((balance - totalDeposited) * 100) / 100,
    rows,
  };
}

export default function SavingsCalculator() {
  const [initial, setInitial] = useState("");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const p = parseFloat(initial.replace(/,/g, "")) || 0;
  const m = parseFloat(monthly.replace(/,/g, "")) || 0;
  const r = parseFloat(rate) || 0;
  const y = parseInt(years) || 0;
  const isValid = (p > 0 || m > 0) && r >= 0 && y > 0 && y <= 50;

  const result = useMemo(
    () => (submitted && isValid ? calculate(p, m, r, y) : null),
    [submitted, p, m, r, y]
  );

  const interestPct = result && result.finalBalance > 0 ? Math.round((result.totalInterest / result.finalBalance) * 100) : 0;
  const depositPct = result && result.finalBalance > 0 ? 100 - interestPct : 100;

  const handleCalculate = () => {
    if (isValid) { setSubmitted(true); trackSavingsCalculated(m, result?.finalBalance ?? 0); }
  };
  const handleReset = () => {
    setInitial(""); setMonthly(""); setRate(""); setYears("");
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
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Savings Details</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Initial Deposit (Optional)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input type="number" min="0" step="1000" placeholder="e.g. 5000"
                  value={initial} onChange={handleChange(setInitial)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Monthly Savings Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input type="number" min="0" step="100" placeholder="e.g. 500"
                  value={monthly} onChange={handleChange(setMonthly)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[200, 500, 1000, 2000].map((amt) => (
                  <button key={amt} onClick={() => { setMonthly(String(amt)); setSubmitted(false); }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${monthly === String(amt) ? "bg-teal-500 text-white border-teal-500" : "border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600"}`}>
                    RM{amt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Annual Interest Rate</label>
              <div className="relative">
                <input type="number" min="0" max="20" step="0.1" placeholder="e.g. 4.0"
                  value={rate} onChange={handleChange(setRate)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">%</span>
              </div>
              <p className="text-xs text-gray-400 mt-1.5">FD rates in Malaysia: ~3.5–4.0% · ASB: ~5% · EPF: ~5.5%</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Savings Period</label>
              <div className="relative">
                <input type="number" min="1" max="50" step="1" placeholder="e.g. 10"
                  value={years} onChange={handleChange(setYears)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-16 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">years</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[3, 5, 10, 20].map((yy) => (
                  <button key={yy} onClick={() => { setYears(String(yy)); setSubmitted(false); }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${years === String(yy) ? "bg-teal-500 text-white border-teal-500" : "border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600"}`}>
                    {yy}yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-7">
            <button onClick={handleCalculate} disabled={!isValid}
              className="flex-1 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-semibold py-3 rounded-xl transition-colors">
              Calculate Savings
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
              <div className="text-5xl mb-4">💰</div>
              <p className="text-gray-400 text-sm">Enter your savings details and tap <strong>Calculate Savings</strong>.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-1">Future Value after {y} years</p>
                <p className="text-4xl font-bold text-teal-600 mb-1">RM {fmt(result.finalBalance)}</p>
                <p className="text-sm text-teal-700 font-medium">Interest earned: RM {fmt(result.totalInterest)}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Total Deposited", value: `RM ${fmt(result.totalDeposited)}`, sub: "Your savings" },
                  { label: "Interest Earned", value: `RM ${fmt(result.totalInterest)}`, sub: "Free money!", accent: true },
                  { label: "Final Balance", value: `RM ${fmt(result.finalBalance)}`, sub: "After " + y + " years" },
                  { label: "Return", value: `${result.totalDeposited > 0 ? (result.totalInterest / result.totalDeposited * 100).toFixed(1) : 0}%`, sub: "Total return on savings" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl p-4 ${s.accent ? "bg-teal-50" : "bg-gray-50"}`}>
                    <p className={`text-xs mb-0.5 ${s.accent ? "text-teal-600" : "text-gray-500"}`}>{s.label}</p>
                    <p className={`font-bold text-sm ${s.accent ? "text-teal-700" : "text-gray-800"}`}>{s.value}</p>
                    <p className="text-xs text-gray-400">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex rounded-full overflow-hidden h-3 mb-1.5">
                  <div className="bg-teal-400 transition-all duration-500" style={{ width: `${depositPct}%` }} />
                  <div className="bg-emerald-300 transition-all duration-500" style={{ width: `${interestPct}%` }} />
                </div>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block" />Deposits {depositPct}%</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-300 inline-block" />Interest {interestPct}%</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {result && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Savings Growth by Year</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">Year</th>
                  <th className="pb-3 font-semibold text-gray-700 text-right">Balance</th>
                  <th className="pb-3 font-semibold text-gray-700 text-right">Deposited</th>
                  <th className="pb-3 font-semibold text-gray-700 text-right text-teal-600">Interest</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((row) => (
                  <tr key={row.year} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 text-gray-700 font-medium">Year {row.year}</td>
                    <td className="py-3 text-right font-semibold text-gray-800">RM {fmt(row.balance)}</td>
                    <td className="py-3 text-right text-gray-600">RM {fmt(row.deposited)}</td>
                    <td className="py-3 text-right text-teal-600 font-medium">RM {fmt(row.interest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {result.rows.length > 5 && (
            <button onClick={() => setShowAll(!showAll)}
              className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1">
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
