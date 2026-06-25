"use client";

import { useState, useMemo } from "react";
import { trackCarLoanCalculated } from "@/lib/gtag";

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface Result {
  loanAmount: number;
  monthly: number;
  totalInterest: number;
  totalPayment: number;
  schedule: { year: number; principal: number; interest: number; balance: number }[];
}

function calculate(carPrice: number, downPayment: number, flatRate: number, years: number): Result {
  const loanAmount = carPrice - downPayment;
  const months = years * 12;
  const totalInterest = loanAmount * (flatRate / 100) * years;
  const totalPayment = loanAmount + totalInterest;
  const monthly = totalPayment / months;

  const monthlyPrincipal = loanAmount / months;
  const monthlyInterest = totalInterest / months;
  const schedule: Result["schedule"] = [];
  for (let y = 1; y <= years; y++) {
    const yearPrincipal = monthlyPrincipal * 12;
    const yearInterest = monthlyInterest * 12;
    const balance = loanAmount - yearPrincipal * y;
    schedule.push({
      year: y,
      principal: Math.round(yearPrincipal * 100) / 100,
      interest: Math.round(yearInterest * 100) / 100,
      balance: Math.max(0, Math.round(balance * 100) / 100),
    });
  }

  return {
    loanAmount: Math.round(loanAmount * 100) / 100,
    monthly: Math.round(monthly * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    schedule,
  };
}

export default function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const price = parseFloat(carPrice.replace(/,/g, "")) || 0;
  const dp = parseFloat(downPayment.replace(/,/g, "")) || 0;
  const flatRate = parseFloat(rate) || 0;
  const tenure = parseInt(years) || 0;

  const isValid =
    price > 0 && dp >= 0 && dp < price && flatRate >= 0 && tenure > 0 && tenure <= 9;

  const result = useMemo(
    () => (submitted && isValid ? calculate(price, dp, flatRate, tenure) : null),
    [submitted, price, dp, flatRate, tenure]
  );

  const dpPct = price > 0 ? Math.round((dp / price) * 100) : 0;
  const interestPct = result ? Math.round((result.totalInterest / result.totalPayment) * 100) : 0;
  const principalPct = result ? 100 - interestPct : 0;

  const handleCalculate = () => {
    if (isValid) {
      setSubmitted(true);
      trackCarLoanCalculated(price - dp, tenure);
    }
  };

  const handleReset = () => {
    setCarPrice(""); setDownPayment(""); setRate(""); setYears("");
    setSubmitted(false); setShowAll(false);
  };

  const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value); setSubmitted(false); setShowAll(false);
  };

  const visible = result ? (showAll ? result.schedule : result.schedule.slice(0, 5)) : [];

  return (
    <>
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-sm text-amber-700">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span><strong>Flat rate estimate.</strong> Uses hire purchase flat rate method standard for Malaysian car loans. Actual repayments depend on your hire purchase agreement.</span>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
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

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🚗</div>
                <p className="text-gray-400 text-sm">Enter your car loan details and tap <strong>Calculate Car Loan</strong>.</p>
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
                    { label: "Loan Amount", value: `RM ${fmt(result.loanAmount)}`, sub: "After down payment" },
                    { label: "Total Interest", value: `RM ${fmt(result.totalInterest)}`, sub: "Cost of financing", accent: true },
                    { label: "Total Repayment", value: `RM ${fmt(result.totalPayment)}`, sub: "Loan + interest" },
                    { label: "Effective Rate", value: `~${(flatRate * 1.8).toFixed(1)}% p.a.`, sub: "Reducing balance equiv." },
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
                    <div className="bg-red-400 transition-all duration-500" style={{ width: `${interestPct}%` }} />
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
