import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Compound Interest Calculator Malaysia 2025 | Investment Growth Estimator",
  description:
    "Calculate compound interest growth for EPF, ASB, fixed deposits and unit trusts in Malaysia. See how monthly contributions and compounding frequency affect your long-term wealth.",
  keywords: [
    "compound interest calculator",
    "investment calculator Malaysia",
    "compound interest calculator Malaysia",
    "investment growth calculator",
    "faedah kompaun kalkulator",
    "EPF calculator Malaysia",
    "ASB calculator",
  ],
  alternates: { canonical: `${SITE_URL}/compound-interest-calculator` },
  openGraph: {
    title: "Compound Interest Calculator Malaysia 2025 — See How Investments Grow",
    description:
      "Calculate compound interest with monthly contributions. Compare EPF, ASB, FD, and unit trust growth over 10–40 years. Discover the power of compounding.",
    url: `${SITE_URL}/compound-interest-calculator`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Interest Calculator Malaysia",
    description: "Calculate investment growth with compound interest and monthly contributions for Malaysian investors.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Compound Interest Calculator Malaysia",
      url: `${SITE_URL}/compound-interest-calculator`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: "Calculate compound interest and investment growth with monthly contributions for Malaysian investors.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators` },
        { "@type": "ListItem", position: 3, name: "Compound Interest Calculator", item: `${SITE_URL}/compound-interest-calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is compound interest?", acceptedAnswer: { "@type": "Answer", text: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest (which only earns on the original principal), compound interest earns interest on interest — causing wealth to grow exponentially over time." } },
        { "@type": "Question", name: "What is the difference between simple and compound interest?", acceptedAnswer: { "@type": "Answer", text: "Simple interest grows linearly: Interest = Principal × Rate × Time. Compound interest grows exponentially: each period's interest is added to principal so the next period earns more. For RM10,000 at 6% over 20 years — simple = RM22,000; compound (annual) = RM32,071. The RM10,071 difference comes purely from compounding." } },
        { "@type": "Question", name: "What investment products in Malaysia offer compound interest?", acceptedAnswer: { "@type": "Answer", text: "Malaysian compound-growth products include: EPF (~5.5% dividend p.a., annually credited), ASB/ASN (~4–6%), fixed deposits (3.0–3.8%, monthly or quarterly), unit trusts (variable, historically 6–10% for equity funds), and PRS (Private Retirement Scheme). Each has different liquidity, risk, and tax treatment." } },
        { "@type": "Question", name: "What is the Rule of 72?", acceptedAnswer: { "@type": "Answer", text: "The Rule of 72 is a quick estimate for how long your money takes to double. Divide 72 by the annual rate: at 6%, money doubles in 12 years; at 8%, in 9 years; at 4%, in 18 years. This works for rates between 3% and 12%." } },
        { "@type": "Question", name: "How often does compound interest compound in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "It varies by product: EPF dividends are credited annually. Fixed deposits typically compound monthly or quarterly. Unit trust NAV reflects daily earnings. Monthly compounding at 4% yields an effective rate of ~4.074% annually — slightly higher than stated." } },
        { "@type": "Question", name: "What return rate should I use in a Malaysian investment calculator?", acceptedAnswer: { "@type": "Answer", text: "Conservative benchmarks: Fixed deposit 3.5–3.8%, EPF 5.0–6.0%, ASB 4.5–5.5%, balanced unit trust 5–7%, equity unit trust 7–10%. These are historical averages — actual future returns are not guaranteed. Use the lower end for conservative planning." } },
        { "@type": "Question", name: "Does EPF really use compound interest?", acceptedAnswer: { "@type": "Answer", text: "Yes. EPF credits dividends annually into your account balance. The following year's dividend is calculated on the new (higher) balance including prior dividends. This is annual compounding. RM100,000 in EPF at 5.5% for 30 years grows to ~RM498,395 without additional contributions." } },
        { "@type": "Question", name: "What is the impact of monthly contributions on compound growth?", acceptedAnswer: { "@type": "Answer", text: "Monthly contributions dramatically accelerate growth. Adding RM500/month to a RM10,000 initial investment at 6% over 30 years produces RM536,500 total — vs RM57,435 from the lump sum alone. Regular contributions are the most powerful lever after time." } },
        { "@type": "Question", name: "How is the EPF dividend rate decided?", acceptedAnswer: { "@type": "Answer", text: "EPF's dividend rate is set annually by the EPF Board based on actual investment returns from their portfolio (Malaysian Government Securities, equity, loans, real estate). EPF must pay a minimum 2.5% dividend. Historical dividends from 2015–2024 ranged from 5.20% to 6.90% for conventional accounts." } },
        { "@type": "Question", name: "What is the best investment in Malaysia for long-term compound growth?", acceptedAnswer: { "@type": "Answer", text: "For most Malaysians, EPF is the most reliable long-term compounder due to consistent 5–6% dividends, government backing, and mandatory contributions. For additional savings, ASB (Bumiputera) and equity unit trusts offer higher potential returns with more risk. Fixed deposits suit short-term goals and emergency funds." } },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  { q: "What is compound interest?", a: "Compound interest is interest calculated on both the initial principal and accumulated interest from previous periods. Unlike simple interest, compound interest earns interest on interest — causing wealth to grow exponentially over time." },
  { q: "What is the difference between simple and compound interest?", a: "Simple interest grows linearly: Interest = Principal × Rate × Time. Compound interest grows exponentially — each period's interest is added to principal so the next period earns more. For RM10,000 at 6% over 20 years — simple = RM22,000; compound (annual) = RM32,071. The RM10,071 difference comes purely from compounding." },
  { q: "What investment products in Malaysia offer compound interest?", a: "Malaysian compound-growth products include: EPF (~5.5% dividend p.a., annually credited), ASB/ASN (~4–6%), fixed deposits (3.0–3.8%, monthly or quarterly), unit trusts (historically 6–10% for equity funds), and PRS. Each has different liquidity, risk, and tax treatment." },
  { q: "What is the Rule of 72?", a: "The Rule of 72 estimates how long your money takes to double. Divide 72 by the annual rate: at 6%, money doubles in 12 years; at 8%, in 9 years; at 4%, in 18 years. Works well for rates between 3% and 12%." },
  { q: "How often does compound interest compound in Malaysia?", a: "It varies: EPF dividends are credited annually. Fixed deposits compound monthly or quarterly. Unit trust NAV reflects daily earnings. Monthly compounding at 4% yields an effective rate of ~4.074% annually." },
  { q: "What return rate should I use in a Malaysian investment calculator?", a: "Conservative benchmarks: Fixed deposit 3.5–3.8%, EPF 5.0–6.0%, ASB 4.5–5.5%, balanced unit trust 5–7%, equity unit trust 7–10%. These are historical averages. Use the lower end for conservative planning." },
  { q: "Does EPF really use compound interest?", a: "Yes. EPF credits dividends annually into your balance. The following year's dividend is calculated on the new (higher) balance including prior dividends — annual compounding. RM100,000 at 5.5% for 30 years grows to ~RM498,395 without additional contributions." },
  { q: "What is the impact of monthly contributions on compound growth?", a: "Monthly contributions dramatically accelerate growth. Adding RM500/month to a RM10,000 initial investment at 6% over 30 years produces RM536,500 total — vs RM57,435 from the lump sum alone. Regular contributions are the most powerful lever after time." },
  { q: "How is the EPF dividend rate decided?", a: "EPF's dividend rate is set annually by the EPF Board based on actual investment returns (Malaysian Government Securities, equity, loans, real estate). EPF must pay a minimum 2.5% dividend. Historical dividends from 2015–2024 ranged from 5.20% to 6.90%." },
  { q: "What is the best investment in Malaysia for long-term compound growth?", a: "For most Malaysians, EPF is the most reliable long-term compounder due to consistent 5–6% dividends and government backing. For additional savings, ASB (Bumiputera) and equity unit trusts offer higher potential with more risk. Fixed deposits suit short-term goals and emergency funds." },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/savings-calculator-malaysia", title: "Savings Calculator", emoji: "🏦", desc: "Project future value of regular savings" },
  { href: "/epf-calculator-malaysia", title: "EPF Calculator", emoji: "🏛️", desc: "Project your EPF retirement balance" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Find how much you can save monthly" },
  { href: "/income-tax-calculator-malaysia", title: "Income Tax Calculator", emoji: "📋", desc: "Reduce tax through approved investments" },
  { href: "/mortgage-calculator-malaysia", title: "Mortgage Calculator", emoji: "🏠", desc: "Plan savings for a home down payment" },
  { href: "/car-loan-calculator-malaysia", title: "Car Loan Calculator", emoji: "🚗", desc: "Calculate hire purchase vs investment" },
  { href: "/dsr-calculator-malaysia", title: "DSR Calculator", emoji: "📊", desc: "Check debt ratio for loan eligibility" },
  { href: "/currency-converter-malaysia", title: "Currency Converter", emoji: "💱", desc: "Convert MYR to USD, SGD, EUR and more" },
];

export default function CompoundInterestPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />

      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-emerald-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/calculators" className="hover:text-emerald-600 transition-colors">Calculators</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">Compound Interest</span>
          </nav>
          <div className="text-4xl mb-4">📈</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Compound Interest Calculator Malaysia
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            See how your money grows over time with compound interest. Model EPF, ASB, fixed deposits and unit trust scenarios with monthly contributions and a full year-by-year breakdown.
          </p>
        </div>
      </div>

      <CompoundInterestCalculator />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        {/* EEAT Author Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Written by <a href="/author/alvin-chan" className="text-emerald-600 hover:underline">Alvin Chan</a></p>
              <p className="text-xs text-gray-500 mt-0.5">Reviewed by the SmartCalc Editorial Team · Last updated: 25 June 2025</p>
              <p className="text-xs text-gray-400 mt-0.5">Sources: EPF Annual Report, Securities Commission Malaysia, BNM, ASNB</p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Complete Malaysian Guide to Compound Interest (2025)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Compound interest is the mechanism by which patient investors build long-term wealth. In Malaysia, it operates through familiar products — <a href="/epf-calculator-malaysia" className="text-emerald-600 hover:underline">EPF</a>, ASB/ASN, fixed deposits, and unit trusts — but most Malaysians significantly underestimate how powerful it becomes over decades. This guide quantifies that power with three fully worked examples using real Malaysian investment rates, explains the critical difference between simple and compound growth, introduces the Rule of 72 shortcut, and compares available Malaysian products by effective return, risk, and compounding frequency.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Simple vs Compound Interest — The Critical Difference</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-gray-700">Simple Interest</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-emerald-700">Compound Interest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Interest earned on", "Original principal only", "Principal + accumulated interest"],
                  ["Growth shape", "Linear (straight line)", "Exponential (accelerating curve)"],
                  ["Formula", "P × r × t", "P × (1 + r)ⁿ"],
                  ["RM10,000 @ 6% — 10yr", "RM 16,000", "RM 17,908"],
                  ["RM10,000 @ 6% — 20yr", "RM 22,000", "RM 32,071"],
                  ["RM10,000 @ 6% — 30yr", "RM 28,000", "RM 57,435"],
                  ["RM10,000 @ 6% — 40yr", "RM 34,000", "RM 102,857"],
                ].map(([f, a, b], i) => (
                  <tr key={i} className="border border-gray-200">
                    <td className="p-3 text-gray-700 font-medium">{f}</td>
                    <td className="p-3 text-right text-gray-600">{a}</td>
                    <td className={`p-3 text-right font-semibold ${i >= 3 ? "text-emerald-600" : "text-gray-600"}`}>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notice that compound interest barely outperforms simple interest at 10 years (RM1,908 difference) but becomes enormous at 40 years (RM68,857 difference) — all from the same RM10,000 at 6%. This is why starting early is the single most important investment decision.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Worked Examples — Malaysian Investment Products</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 1: EPF-Style Annual Compounding (5.5% p.a.)</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: RM20,000 lump sum plus RM500/month voluntary top-up for 25 years at 5.5% annual compounding.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Lump sum growth: RM20,000 × (1.055)²⁵ = <strong>RM75,811</strong></p>
            <p>Total monthly contributions: RM500 × 300 = RM150,000 invested</p>
            <p>Future value of contributions = <strong>RM290,117</strong></p>
            <p>Total value = RM75,811 + RM290,117 = <strong>RM365,928</strong></p>
            <p>Total invested = RM170,000 | Interest earned = <strong>RM195,928 (115% return)</strong></p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 2: Fixed Deposit — Monthly Compounding (3.8% p.a.)</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: RM50,000 placed in a 12-month FD rolled over for 10 years. No additional contributions.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Effective annual rate (monthly): (1 + 0.038/12)¹² − 1 = <strong>3.872%</strong></p>
            <p>After 10 years: RM50,000 × (1 + 0.038/12)¹²⁰ = <strong>RM73,207</strong></p>
            <p>Interest earned: <strong>RM23,207 (46.4% total return)</strong></p>
            <p className="mt-2 text-gray-500">Note: PIDM insures up to RM250,000 per depositor per member bank.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 3: Equity Unit Trust — Long-Term Growth (8% p.a.)</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: Fresh graduate starts RM300/month at age 23 in a diversified equity unit trust at 8% p.a. for 37 years to age 60.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Total invested: RM300 × 37 × 12 = <strong>RM133,200</strong></p>
            <p>Future value at 8% p.a. = <strong>RM715,440</strong></p>
            <p>Interest earned: <strong>RM582,240 (437% return on capital)</strong></p>
            <p className="mt-2 text-gray-500">RM300/month (~RM10/day) becomes RM715k over 37 years at 8%. Funds must be SC-licensed.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Rule of 72 — Mental Shortcut for Doubling Time</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Years to double = 72 ÷ Annual Rate (%)</strong>
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Investment</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Typical Rate</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Years to Double</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Doubles 3× in</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fixed Deposit", "3.8%", "~19 years", "~57 years"],
                  ["EPF", "5.5%", "~13 years", "~39 years"],
                  ["ASB / ASN", "5.0%", "~14.4 years", "~43 years"],
                  ["Balanced Unit Trust", "6.5%", "~11 years", "~33 years"],
                  ["Equity Unit Trust", "8.0%", "~9 years", "~27 years"],
                ].map(([inv, r, d, d3]) => (
                  <tr key={inv} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{inv}</td>
                    <td className="p-3 text-right text-gray-600">{r}</td>
                    <td className="p-3 text-right font-semibold text-emerald-600">{d}</td>
                    <td className="p-3 text-right text-gray-500">{d3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compounding Frequency — Does It Matter?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            RM10,000 at 5% p.a. over 20 years, same rate but different compounding frequency:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Compounding</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Effective Rate</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Value after 20yr</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Used by</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Annual", "5.000%", "RM 26,533", "EPF"],
                  ["Quarterly", "5.095%", "RM 26,851", "Some FDs"],
                  ["Monthly", "5.116%", "RM 26,927", "Most FDs, savings"],
                  ["Daily", "5.127%", "RM 26,959", "Online savings accounts"],
                ].map(([f, r, v, u]) => (
                  <tr key={f} className="border border-gray-200">
                    <td className="p-3 text-gray-700 font-medium">{f}</td>
                    <td className="p-3 text-right text-emerald-600 font-semibold">{r}</td>
                    <td className="p-3 text-right text-gray-700">{v}</td>
                    <td className="p-3 text-right text-gray-500">{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            The difference between annual and daily compounding is only ~RM426 over 20 years at 5%. Compounding frequency matters far less than the rate and time invested.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Malaysian Investment Products Comparison</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Product</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Return</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Risk</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Eligible</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Liquidity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["EPF (KWSP)", "5.0–6.0%", "Very low", "All Malaysians", "Restricted"],
                  ["ASB / ASN", "4.5–5.5%", "Very low", "Bumiputera only", "High (anytime)"],
                  ["Fixed Deposit", "3.3–3.8%", "Very low", "All", "Low (locked)"],
                  ["Amanah Saham (non-Bumi)", "4.5–5.0%", "Low", "All Malaysians", "High"],
                  ["PRS", "4–7% (variable)", "Low–medium", "All Malaysians", "Restricted"],
                  ["Balanced Unit Trust", "5–7%", "Medium", "All", "High"],
                  ["Equity Unit Trust", "7–10%", "High", "All", "High"],
                ].map(([p, r, risk, el, liq]) => (
                  <tr key={p} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{p}</td>
                    <td className="p-3 text-right text-emerald-600 font-semibold">{r}</td>
                    <td className="p-3 text-right text-gray-600">{risk}</td>
                    <td className="p-3 text-right text-gray-500">{el}</td>
                    <td className="p-3 text-right text-gray-500">{liq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes That Kill Compound Growth</h2>
          <div className="space-y-4 mb-8">
            {[
              ["Starting too late", "The difference between starting at 25 vs 35 with RM300/month at 7% is RM454,000 vs RM220,000 at age 60. Ten years of delay costs over RM200,000."],
              ["Withdrawing EPF for non-essential purchases", "Every RM10,000 withdrawn from EPF at age 35 costs you ~RM38,000 at retirement (25 years at 5.5%). The withdrawal opportunity cost is enormous."],
              ["Keeping savings in low-yield accounts", "A standard Malaysian savings account yields 0.5–1.0%. Long-term savings left there instead of EPF top-ups or ASB lose years of compound growth to inflation."],
              ["Stopping contributions during market dips", "Unit trust investors who stopped during the 2020 COVID crash missed the recovery. Regular contributions during dips buy more units — accelerating compound growth when markets recover."],
              ["Confusing stated return with net return", "A 7% unit trust with 1.5% annual management fee delivers only 5.5% net. Always compare products on net return after all fees."],
            ].map(([title, body]) => (
              <div key={title} className="border-l-4 border-emerald-300 pl-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{title}</p>
                <p className="text-gray-600 text-sm">{body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { href: "/guides/fixed-deposit-vs-epf-malaysia", title: "Fixed Deposit vs EPF Malaysia", desc: "Which gives better returns for your savings?" },
              { href: "/guides/asb-vs-epf-malaysia", title: "ASB vs EPF — Which Is Better?", desc: "Comparing Malaysia's two largest compound instruments" },
              { href: "/guides/epf-dividend-history-malaysia", title: "EPF Dividend History Malaysia", desc: "Historical EPF dividend rates from 2000 to 2024" },
              { href: "/guides/epf-retirement-calculator-guide-malaysia", title: "EPF Retirement Calculator Guide", desc: "How much EPF do you need to retire comfortably?" },
              { href: "/guides/how-much-epf-at-30-malaysia", title: "How Much EPF at 30?", desc: "Benchmarks for EPF savings at different ages" },
              { href: "/guides/how-to-save-first-rm10000-malaysia", title: "How to Save Your First RM10,000", desc: "Step-by-step plan for early-career Malaysians" },
            ].map((g) => (
              <a key={g.href} href={g.href} className="flex flex-col bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-emerald-200 hover:bg-emerald-50 transition-colors">
                <span className="font-semibold text-sm text-gray-800">{g.title}</span>
                <span className="text-xs text-gray-500 mt-0.5">{g.desc}</span>
              </a>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Official References</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="https://www.kwsp.gov.my" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">Kumpulan Wang Simpanan Pekerja (EPF/KWSP)</a> — Annual dividend announcements and EPF investment guidelines</li>
            <li><a href="https://www.sc.com.my" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">Securities Commission Malaysia (SC)</a> — Unit trust fund regulation and licensed fund manager directory</li>
            <li><a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">Bank Negara Malaysia (BNM)</a> — Fixed deposit rates, OPR, financial institution supervision</li>
            <li><a href="https://www.asnb.com.my" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">Amanah Saham Nasional Berhad (ASNB)</a> — ASB, ASM, ASN fund performance and eligibility</li>
          </ul>
        </div>
      </CalcSeoSection>
      <Footer />
    </>
  );
}
