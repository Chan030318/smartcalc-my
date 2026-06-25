"use client";

import { useState, useMemo } from "react";
import { trackMortgageCalculated } from "@/lib/gtag";

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtInt(n: number) {
  return n.toLocaleString("en-MY");
}

interface Result {
  loanAmount: number;
  monthly: number;
  totalInterest: number;
  totalPayment: number;
  incomeNeeded: number;
  schedule: { year: number; principal: number; interest: number; balance: number }[];
}

function calculate(housePrice: number, dpPct: number, annualRate: number, years: number): Result {
  const loanAmount = housePrice * (1 - dpPct / 100);
  const months = years * 12;
  const r = annualRate / 100 / 12;

  let monthly: number;
  if (r === 0) {
    monthly = loanAmount / months;
  } else {
    monthly = (loanAmount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  }

  const totalPayment = monthly * months;
  const totalInterest = totalPayment - loanAmount;
  // Affordability: banks typically allow max 1/3 of gross income for mortgage
  const incomeNeeded = monthly * 3;

  let balance = loanAmount;
  const schedule: Result["schedule"] = [];
  for (let y = 1; y <= years; y++) {
    let yearPrincipal = 0, yearInterest = 0;
    for (let m = 0; m < 12; m++) {
      if (balance <= 0) break;
      const intCharge = balance * r;
      const prinCharge = Math.min(monthly - intCharge, balance);
      yearInterest += intCharge;
      yearPrincipal += prinCharge;
      balance -= prinCharge;
    }
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
    incomeNeeded: Math.round(incomeNeeded * 100) / 100,
    schedule,
  };
}

export default function MortgageCalculator() {
  const [housePrice, setHousePrice] = useState("");
  const [dpPct, setDpPct] = useState("10");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const price = parseFloat(housePrice.replace(/,/g, "")) || 0;
  const dp = parseFloat(dpPct) || 0;
  const annualRate = parseFloat(rate) || 0;
  const tenure = parseInt(years) || 0;

  const isValid = price > 0 && dp >= 0 && dp < 100 && annualRate >= 0 && tenure > 0 && tenure <= 40;

  const result = useMemo(
    () => (submitted && isValid ? calculate(price, dp, annualRate, tenure) : null),
    [submitted, price, dp, annualRate, tenure]
  );

  const interestPct = result ? Math.round((result.totalInterest / result.totalPayment) * 100) : 0;
  const principalPct = result ? 100 - interestPct : 0;

  const handleCalculate = () => {
    if (isValid) { setSubmitted(true); trackMortgageCalculated(price * (1 - dp / 100), tenure); }
  };
  const handleReset = () => {
    setHousePrice(""); setDpPct("10"); setRate(""); setYears("");
    setSubmitted(false); setShowAll(false);
  };
  const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value); setSubmitted(false); setShowAll(false);
  };

  const visible = result ? (showAll ? result.schedule : result.schedule.slice(0, 5)) : [];

  return (
    <>
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-sm text-blue-700">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span><strong>Reducing balance estimate.</strong> Actual repayments may include stamp duty, legal fees, and MRTA/MLTA insurance. Confirm with your bank.</span>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Mortgage Details</h2>
            <div className="space-y-5">
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Down Payment: <span className="text-blue-600 font-semibold">{dpPct}%</span>
                  {price > 0 && <span className="text-gray-400 text-xs ml-2">(RM {fmtInt(Math.round(price * parseFloat(dpPct || "0") / 100))})</span>}
                </label>
                <input type="range" min="0" max="50" step="5"
                  value={dpPct} onChange={(e) => { setDpPct(e.target.value); setSubmitted(false); }}
                  className="w-full accent-blue-600" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0%</span><span>10% (min)</span><span>20%</span><span>30%</span><span>50%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Annual Interest Rate</label>
                <div className="relative">
                  <input type="number" min="0" max="15" step="0.05" placeholder="e.g. 4.0"
                    value={rate} onChange={handleChange(setRate)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Malaysian home loans typically 3.5%–4.5% p.a.</p>
              </div>

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

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🏠</div>
                <p className="text-gray-400 text-sm">Enter your property details and tap <strong>Calculate Mortgage</strong>.</p>
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
                    { label: "Loan Amount", value: `RM ${fmt(result.loanAmount)}`, sub: `${100 - dp}% of price` },
                    { label: "Total Interest", value: `RM ${fmt(result.totalInterest)}`, sub: "Cost of borrowing", accent: true },
                    { label: "Total Repayment", value: `RM ${fmt(result.totalPayment)}`, sub: "Principal + interest" },
                    { label: "Income Needed", value: `RM ${fmt(result.incomeNeeded)}`, sub: "Gross/month (30% DSR)" },
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
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />Principal {principalPct}%</span>
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

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { emoji: "📊", title: "DSR Check", body: "Most Malaysian banks require your total monthly debt commitments (including this mortgage) to be below 60% of gross income. Use our DSR Calculator to check before applying." },
            { emoji: "🔑", title: "Down Payment", body: "First-time buyers can qualify for 90% margin of finance (10% down payment). Some government schemes offer up to 100% financing for eligible buyers." },
            { emoji: "💡", title: "Tenure vs Interest", body: "A 30-year loan costs significantly more in total interest than a 25-year loan. If your DSR allows, choosing a shorter tenure saves tens of thousands of ringgit." },
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
