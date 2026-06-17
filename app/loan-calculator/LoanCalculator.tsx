"use client";

import { useState, useMemo } from "react";

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtInt(n: number) {
  return n.toLocaleString("en-MY");
}

interface Result {
  monthly: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  schedule: { year: number; principal: number; interest: number; balance: number }[];
}

function calculate(principal: number, annualRate: number, years: number): Result {
  const months = years * 12;
  const r = annualRate / 100 / 12;

  let monthly: number;
  if (r === 0) {
    monthly = principal / months;
  } else {
    monthly = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  }

  const totalPayment = monthly * months;
  const totalInterest = totalPayment - principal;

  // Build annual amortisation summary
  let balance = principal;
  const schedule: Result["schedule"] = [];
  for (let y = 1; y <= years; y++) {
    let yearPrincipal = 0;
    let yearInterest = 0;
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
    monthly: Math.round(monthly * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    principal,
    schedule,
  };
}

const faqs = [
  {
    q: "How is the monthly repayment calculated?",
    a: "The monthly repayment uses the standard reducing-balance amortisation formula: M = P × [r(1+r)ⁿ] / [(1+r)ⁿ – 1], where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12), and n is the total number of monthly payments.",
  },
  {
    q: "What types of loans does this calculator apply to?",
    a: "This calculator works for any reducing-balance loan — personal loans, car loans (hire purchase uses flat rate, which differs), and most bank term loans in Malaysia. Home loans (mortgages) also use reducing balance, so this is suitable for quick estimates.",
  },
  {
    q: "Why is my car loan repayment different from this estimate?",
    a: "Car hire-purchase loans in Malaysia typically use a flat interest rate, not reducing balance. Flat-rate interest is applied to the full principal throughout the tenure, making the effective interest rate roughly double. This calculator uses reducing balance, so figures will differ for hire-purchase agreements.",
  },
  {
    q: "What is the typical personal loan interest rate in Malaysia?",
    a: "Personal loan interest rates in Malaysia generally range from 3.5% to 18% per annum depending on the bank, your credit profile, and loan tenure. Bank Negara Malaysia's base rate (OPR) influences lending rates, especially for home loans.",
  },
  {
    q: "How does loan tenure affect total interest paid?",
    a: "A longer tenure lowers your monthly repayment but significantly increases the total interest paid over the life of the loan. A shorter tenure means higher monthly payments but you pay far less interest overall. Use this calculator to compare different tenure options side by side.",
  },
  {
    q: "Is this calculator accurate for home loans in Malaysia?",
    a: "This calculator gives a close estimate for home loans using reducing-balance interest. However, actual home loan repayments may vary due to lock-in periods, Base Rate (BR) / Base Lending Rate (BLR) adjustments, and whether you have a flexi or conventional loan. Always confirm with your bank.",
  },
];

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  const principal = parseFloat(amount.replace(/,/g, "")) || 0;
  const annualRate = parseFloat(rate) || 0;
  const tenure = parseInt(years) || 0;

  const isValid = principal > 0 && annualRate >= 0 && tenure > 0 && tenure <= 50;

  const result = useMemo(
    () => (submitted && isValid ? calculate(principal, annualRate, tenure) : null),
    [submitted, principal, annualRate, tenure]
  );

  const handleCalculate = () => {
    if (isValid) setSubmitted(true);
  };

  const handleReset = () => {
    setAmount("");
    setRate("");
    setYears("");
    setSubmitted(false);
    setShowFullSchedule(false);
  };

  const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    setSubmitted(false);
    setShowFullSchedule(false);
  };

  const interestPct = result ? Math.round((result.totalInterest / result.totalPayment) * 100) : 0;
  const principalPct = result ? 100 - interestPct : 0;

  const visibleSchedule = result
    ? showFullSchedule
      ? result.schedule
      : result.schedule.slice(0, 5)
    : [];

  return (
    <>
      {/* Estimate disclaimer banner */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-sm text-amber-700">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span><strong>Estimate only.</strong> Results assume a reducing-balance loan. Actual repayments may differ — confirm with your bank or lender.</span>
        </div>
      </div>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Loan Details</h2>
            <div className="space-y-5">
              {/* Loan amount */}
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Loan Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                  <input
                    id="amount"
                    type="number"
                    min="1000"
                    step="1000"
                    placeholder="e.g. 200000"
                    value={amount}
                    onChange={handleChange(setAmount)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Interest rate */}
              <div>
                <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Annual Interest Rate
                </label>
                <div className="relative">
                  <input
                    id="rate"
                    type="number"
                    min="0"
                    max="30"
                    step="0.1"
                    placeholder="e.g. 4.5"
                    value={rate}
                    onChange={handleChange(setRate)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Per annum (reducing balance)</p>
              </div>

              {/* Tenure */}
              <div>
                <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Loan Tenure
                </label>
                <div className="relative">
                  <input
                    id="years"
                    type="number"
                    min="1"
                    max="50"
                    step="1"
                    placeholder="e.g. 30"
                    value={years}
                    onChange={handleChange(setYears)}
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-16 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">years</span>
                </div>
              </div>

              {/* Quick tenure buttons */}
              <div>
                <p className="text-xs text-gray-500 mb-2">Quick select:</p>
                <div className="flex flex-wrap gap-2">
                  {[5, 10, 15, 20, 25, 30, 35].map((y) => (
                    <button
                      key={y}
                      onClick={() => { setYears(String(y)); setSubmitted(false); }}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                        years === String(y)
                          ? "bg-purple-600 text-white border-purple-600"
                          : "border-gray-200 text-gray-600 hover:border-purple-400 hover:text-purple-600"
                      }`}
                    >
                      {y}yr
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              <button
                onClick={handleCalculate}
                disabled={!isValid}
                className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Calculate Repayment
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

          {/* Results summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🏦</div>
                <p className="text-gray-400 text-sm">
                  Fill in your loan details and tap <strong>Calculate Repayment</strong>.
                </p>
              </div>
            ) : (
              <>
                {/* Monthly repayment — hero figure */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Estimated Monthly Repayment</p>
                  <p className="text-5xl font-bold text-purple-600 mb-1">RM {fmt(result.monthly)}</p>
                  <p className="text-sm text-gray-400">per month for {tenure} year{tenure > 1 ? "s" : ""}</p>
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Loan Principal", value: `RM ${fmt(result.principal)}`, sub: "Amount borrowed" },
                    { label: "Total Interest", value: `RM ${fmt(result.totalInterest)}`, sub: "Cost of borrowing", accent: true },
                    { label: "Total Payment", value: `RM ${fmt(result.totalPayment)}`, sub: "Principal + interest" },
                    { label: "Total Months", value: fmtInt(tenure * 12), sub: "Repayment periods" },
                  ].map((s) => (
                    <div key={s.label} className={`rounded-xl p-4 ${s.accent ? "bg-red-50" : "bg-gray-50"}`}>
                      <p className={`text-xs mb-0.5 ${s.accent ? "text-red-500" : "text-gray-500"}`}>{s.label}</p>
                      <p className={`font-bold text-sm ${s.accent ? "text-red-700" : "text-gray-800"}`}>{s.value}</p>
                      <p className="text-xs text-gray-400">{s.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Donut-style bar */}
                <div>
                  <div className="flex rounded-full overflow-hidden h-3 mb-1.5">
                    <div className="bg-purple-500 transition-all duration-500" style={{ width: `${principalPct}%` }} />
                    <div className="bg-red-400 transition-all duration-500" style={{ width: `${interestPct}%` }} />
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />Principal {principalPct}%</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />Interest {interestPct}%</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Amortisation schedule */}
      {result && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Annual Repayment Summary</h2>
                <p className="text-gray-500 text-sm mt-0.5">How much principal and interest you pay each year</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-100">
                    <th className="pb-3 font-semibold text-gray-700">Year</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right">Principal Paid</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right">Interest Paid</th>
                    <th className="pb-3 font-semibold text-gray-700 text-right hidden sm:table-cell">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleSchedule.map((row) => {
                    const totalPaid = result.principal - row.balance;
                    const pctPaid = (totalPaid / result.principal) * 100;
                    return (
                      <tr key={row.year} className="border-b border-gray-50 last:border-0 group">
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-700 font-medium w-8">Y{row.year}</span>
                            <div className="hidden sm:block flex-1 h-1.5 bg-gray-100 rounded-full w-24 overflow-hidden">
                              <div className="h-full bg-purple-400 rounded-full" style={{ width: `${Math.min(100, pctPaid)}%` }} />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-right text-gray-700">{fmt(row.principal)}</td>
                        <td className="py-3 text-right text-red-500">{fmt(row.interest)}</td>
                        <td className="py-3 text-right text-gray-500 hidden sm:table-cell">{fmt(row.balance)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {result.schedule.length > 5 && (
              <button
                onClick={() => setShowFullSchedule(!showFullSchedule)}
                className="mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
              >
                {showFullSchedule ? "Show less" : `Show all ${result.schedule.length} years`}
                <svg className={`w-4 h-4 transition-transform ${showFullSchedule ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </section>
      )}

      {/* Explanation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How Loan Repayments Are Calculated</h2>
            <p className="text-gray-600 leading-relaxed">
              This calculator uses the <strong>reducing-balance (amortisation) method</strong>, which is the standard approach for personal loans, home loans, and most bank term loans in Malaysia. Each monthly payment covers interest on the outstanding balance first; the remainder reduces your principal.
            </p>
            <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 font-mono text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
              M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]
              <p className="font-sans text-xs text-gray-400 mt-2">M = monthly payment · P = principal · r = monthly rate · n = total months</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: "📉", title: "Tenure vs Interest", body: "Extending your tenure lowers monthly payments but can more than double your total interest paid. Run the numbers before committing." },
              { emoji: "💸", title: "Early Repayment", body: "Many Malaysian banks allow early settlement. Paying extra toward principal early in the tenure saves the most interest due to the reducing-balance structure." },
              { emoji: "📊", title: "Flat vs Reducing Rate", body: "Car hire-purchase uses flat rates — the interest is fixed on the original principal. A 3.5% flat rate is equivalent to roughly 6–7% reducing balance." },
            ].map((card) => (
              <div key={card.title} className="bg-gray-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{card.emoji}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. It does not constitute financial advice. Actual loan repayments depend on your bank&apos;s terms, processing fees, insurance premiums (MRTA/MLTA), and whether the rate is fixed or variable. Always obtain a formal loan offer from your bank before making financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
    </>
  );
}
