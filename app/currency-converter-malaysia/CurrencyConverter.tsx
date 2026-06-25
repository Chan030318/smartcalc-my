"use client";

import { useState, useCallback } from "react";
import { trackCurrencyConverted } from "@/lib/gtag";

// Indicative mid-market rates relative to MYR (approximate, May 2025)
// Replace RATES with live API values to upgrade to live rates
const RATES: Record<string, number> = {
  MYR: 1,
  USD: 0.2210,   // 1 MYR = 0.221 USD  (1 USD ≈ 4.52 MYR)
  SGD: 0.2960,   // 1 MYR = 0.296 SGD  (1 SGD ≈ 3.38 MYR)
  EUR: 0.2045,   // 1 MYR = 0.2045 EUR (1 EUR ≈ 4.89 MYR)
  JPY: 33.20,    // 1 MYR = 33.20 JPY  (100 JPY ≈ 3.01 MYR)
  CNY: 1.600,    // 1 MYR = 1.60 CNY   (1 CNY ≈ 0.625 MYR)
  AUD: 0.3430,   // 1 MYR = 0.343 AUD  (1 AUD ≈ 2.92 MYR)
  GBP: 0.1730,   // 1 MYR = 0.173 GBP  (1 GBP ≈ 5.78 MYR)
};

const CURRENCY_INFO: Record<string, { name: string; symbol: string; flag: string; decimals: number }> = {
  MYR: { name: "Malaysian Ringgit", symbol: "RM", flag: "🇲🇾", decimals: 2 },
  USD: { name: "US Dollar", symbol: "$", flag: "🇺🇸", decimals: 2 },
  SGD: { name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬", decimals: 2 },
  EUR: { name: "Euro", symbol: "€", flag: "🇪🇺", decimals: 2 },
  JPY: { name: "Japanese Yen", symbol: "¥", flag: "🇯🇵", decimals: 0 },
  CNY: { name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳", decimals: 2 },
  AUD: { name: "Australian Dollar", symbol: "A$", flag: "🇦🇺", decimals: 2 },
  GBP: { name: "British Pound", symbol: "£", flag: "🇬🇧", decimals: 2 },
};

const CURRENCIES = Object.keys(RATES);

function convert(amount: number, from: string, to: string): number {
  const inMYR = amount / RATES[from];
  return inMYR * RATES[to];
}

function fmtAmount(amount: number, currency: string): string {
  const info = CURRENCY_INFO[currency];
  return amount.toLocaleString("en-MY", {
    minimumFractionDigits: info.decimals,
    maximumFractionDigits: info.decimals,
  });
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("MYR");
  const [to, setTo] = useState("USD");

  const numAmount = parseFloat(amount) || 0;
  const result = numAmount > 0 ? convert(numAmount, from, to) : null;
  const rate = convert(1, from, to);
  const inverseRate = convert(1, to, from);

  const swap = useCallback(() => {
    setFrom(to);
    setTo(from);
    if (result !== null) setAmount(fmtAmount(result, to));
  }, [from, to, result]);

  const handleConvert = () => {
    if (numAmount > 0) trackCurrencyConverted(from, to, numAmount);
  };

  return (
    <>
      <div className="bg-violet-50 border-b border-violet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-sm text-violet-700">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span><strong>Indicative rates only</strong> — approximate mid-market rates, not live data. For transactions, always check with your bank or money changer.</span>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="space-y-5">
            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Amount</label>
              <input
                type="number" min="0" step="any" placeholder="Enter amount"
                value={amount}
                onChange={(e) => { setAmount(e.target.value); }}
                onBlur={handleConvert}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
              />
            </div>

            {/* From / Swap / To */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">From</label>
                <select value={from} onChange={(e) => { setFrom(e.target.value); }}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-white">
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>{CURRENCY_INFO[c].flag} {c} — {CURRENCY_INFO[c].name}</option>
                  ))}
                </select>
              </div>

              <button onClick={swap}
                className="h-12 w-12 rounded-xl bg-violet-50 border border-violet-100 text-violet-600 hover:bg-violet-100 transition-colors flex items-center justify-center text-lg font-bold flex-shrink-0">
                ⇄
              </button>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">To</label>
                <select value={to} onChange={(e) => { setTo(e.target.value); }}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-white">
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>{CURRENCY_INFO[c].flag} {c} — {CURRENCY_INFO[c].name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            {result !== null && numAmount > 0 && (
              <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 mb-1">
                    {CURRENCY_INFO[from].flag} {fmtAmount(numAmount, from)} {from} =
                  </p>
                  <p className="text-4xl font-bold text-violet-700">
                    {CURRENCY_INFO[to].symbol} {fmtAmount(result, to)}
                  </p>
                  <p className="text-sm text-violet-600 mt-1">{to} — {CURRENCY_INFO[to].name}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 text-center border border-violet-100">
                    <div className="text-xs text-gray-500 mb-1">1 {from} =</div>
                    <div className="font-bold text-gray-800 text-sm">
                      {CURRENCY_INFO[to].symbol} {fmtAmount(rate, to)} {to}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center border border-violet-100">
                    <div className="text-xs text-gray-500 mb-1">1 {to} =</div>
                    <div className="font-bold text-gray-800 text-sm">
                      {CURRENCY_INFO[from].symbol} {fmtAmount(inverseRate, from)} {from}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick amount buttons */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Quick amounts:</p>
              <div className="flex flex-wrap gap-2">
                {[100, 500, 1000, 5000, 10000].map((a) => (
                  <button key={a} onClick={() => { setAmount(String(a)); handleConvert(); }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${amount === String(a) ? "bg-violet-600 text-white border-violet-600" : "border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600"}`}>
                    {a.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All rates vs MYR */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            All Rates vs MYR <span className="text-xs font-normal text-gray-400 ml-2">(Indicative — approximate mid-2025)</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-3 text-left font-semibold text-gray-700">Currency</th>
                  <th className="pb-3 text-right font-semibold text-gray-700">1 MYR =</th>
                  <th className="pb-3 text-right font-semibold text-gray-700">1 Unit =</th>
                </tr>
              </thead>
              <tbody>
                {CURRENCIES.filter((c) => c !== "MYR").map((c) => {
                  const info = CURRENCY_INFO[c];
                  return (
                    <tr key={c} className="border-b border-gray-50 last:border-0">
                      <td className="py-3">
                        <span className="mr-2">{info.flag}</span>
                        <span className="font-medium text-gray-800">{c}</span>
                        <span className="text-gray-400 text-xs ml-1.5">{info.name}</span>
                      </td>
                      <td className="py-3 text-right text-gray-700 font-medium">
                        {info.symbol} {fmtAmount(RATES[c], c)}
                      </td>
                      <td className="py-3 text-right text-violet-700 font-medium">
                        RM {(1 / RATES[c]).toLocaleString("en-MY", { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Rates are approximate and indicative only. For accurate live rates, use Bank Negara Malaysia (BNM) or your bank&#39;s official rate board.</p>
        </div>
      </section>
    </>
  );
}
