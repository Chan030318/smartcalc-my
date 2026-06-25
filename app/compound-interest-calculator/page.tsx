import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Compound Interest Calculator Malaysia 2024 | Investment Growth",
  description:
    "Calculate compound interest on your investments. See how your money grows with compounding — enter initial amount, monthly contribution, interest rate and years.",
  keywords: [
    "compound interest calculator",
    "investment calculator Malaysia",
    "compound interest calculator Malaysia",
    "investment growth calculator",
    "faedah kompaun kalkulator",
  ],
  alternates: { canonical: `${SITE_URL}/compound-interest-calculator` },
  openGraph: {
    title: "Compound Interest Calculator — See How Investments Grow Over Time",
    description:
      "Calculate compound interest with monthly contributions. Discover the power of compounding for Malaysian investors.",
    url: `${SITE_URL}/compound-interest-calculator`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Interest Calculator Malaysia",
    description: "Calculate investment growth with compound interest and monthly contributions.",
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
      description: "Calculate compound interest and investment growth with monthly contributions.",
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
        {
          "@type": "Question",
          name: "What is compound interest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compound interest means you earn interest on both your principal and on previously earned interest. Unlike simple interest (which applies only to the principal), compounding makes your money grow exponentially over time — this is why Einstein reportedly called it the eighth wonder of the world.",
          },
        },
        {
          "@type": "Question",
          name: "What is the compound interest formula?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A = P(1 + r/n)^(nt), where A is the final amount, P is principal, r is annual rate (decimal), n is compounding frequency per year, and t is time in years. With regular contributions, you add each contribution at each compounding period.",
          },
        },
        {
          "@type": "Question",
          name: "What investment return rates should Malaysians use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Historical returns vary: EPF has averaged ~5.5–6% dividend, ASB ~5–6%, FD ~3.5–4%, unit trusts/equity funds 7–10% (with volatility). For conservative projections use 4–5%, moderate 6–7%, aggressive 8–10%. Past returns do not guarantee future performance.",
          },
        },
        {
          "@type": "Question",
          name: "How does compounding frequency affect returns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "More frequent compounding means slightly higher returns. At 6% p.a.: annual compounding gives 6% effective, monthly compounding gives ~6.17% effective (APY), and daily compounding gives ~6.18%. The difference is modest but compounds over decades.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Rule of 72?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Rule of 72 is a quick way to estimate how long it takes to double your money: divide 72 by your annual return rate. At 6%: 72 ÷ 6 = 12 years. At 8%: 72 ÷ 8 = 9 years. This works for compound interest.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best compound interest investment in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular compound-growth options for Malaysians include: EPF (tax-free dividends ~5.5%, mandatory), ASB (bumiputera-only, ~5–6%, tax-free), unit trusts (variable, 5–12%), REITs (4–7% dividends + capital gain), and stocks/ETFs (long-term 8–12% but volatile).",
          },
        },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  {
    q: "What is compound interest?",
    a: "Compound interest means you earn interest on both your principal and on previously earned interest. Unlike simple interest, compounding makes your money grow exponentially — this is why Albert Einstein reportedly called it the eighth wonder of the world.",
  },
  {
    q: "What is the compound interest formula?",
    a: "A = P(1 + r/n)^(nt), where A is the final amount, P is principal, r is annual rate (decimal), n is compounding frequency per year, and t is years. With regular contributions, you add each contribution at each compounding period.",
  },
  {
    q: "What investment return rates should Malaysians use?",
    a: "Historical returns vary: EPF ~5.5–6%, ASB ~5–6%, FD ~3.5–4%, equity funds 7–10%. For conservative projections use 4–5%, moderate 6–7%, aggressive 8–10%. Past returns do not guarantee future performance.",
  },
  {
    q: "How does compounding frequency affect returns?",
    a: "More frequent compounding yields slightly higher returns. At 6% p.a.: annual compounding gives 6% effective rate, monthly gives ~6.17%, daily gives ~6.18%. The difference compounds significantly over decades.",
  },
  {
    q: "What is the Rule of 72?",
    a: "Divide 72 by your annual return rate to estimate years to double your money. At 6%: 72 ÷ 6 = 12 years. At 8%: 72 ÷ 8 = 9 years. A quick mental shortcut for compound growth.",
  },
  {
    q: "What is the best compound interest investment in Malaysia?",
    a: "Popular options include EPF (tax-free ~5.5%, mandatory), ASB (bumiputera-only ~5–6%, tax-free), unit trusts (5–12%, variable), REITs (4–7% dividends), and stocks/ETFs (8–12% long-term but volatile).",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/savings-calculator-malaysia", title: "Savings Calculator", emoji: "💰", desc: "Project savings growth over time" },
  { href: "/epf-calculator-malaysia", title: "EPF Calculator", emoji: "🏦", desc: "Estimate your EPF retirement savings" },
  { href: "/income-tax-calculator-malaysia", title: "Income Tax Calculator", emoji: "📋", desc: "Calculate Malaysia income tax" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💼", desc: "Calculate take-home pay" },
];

export default function CompoundInterestPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-b border-emerald-100">
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
            Compound Interest Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover how your investments grow exponentially with compound interest. Enter your initial amount, monthly contributions, rate of return and investment period.
          </p>
        </div>
      </div>

      <CompoundInterestCalculator />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compound Interest in Malaysia — The Complete Guide</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Compound interest is the single most powerful concept in personal finance. Unlike simple interest (which only grows on your principal), compound interest grows on itself — your interest earns interest, creating an exponential snowball effect over time.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">The Power of Starting Early: Malaysian Example</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Investor</th>
                  <th className="text-right p-3 border border-gray-200">Starts At</th>
                  <th className="text-right p-3 border border-gray-200">Monthly (RM)</th>
                  <th className="text-right p-3 border border-gray-200">Total In</th>
                  <th className="text-right p-3 border border-gray-200">At 60 (6% p.a.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ali", "25", "500", "RM 210,000", "RM 980,000+"],
                  ["Beng", "35", "500", "RM 150,000", "RM 500,000+"],
                  ["Chitra", "45", "500", "RM 90,000", "RM 232,000+"],
                  ["Ali (no contributions)", "25 — lump sum RM 10,000", "—", "RM 10,000", "RM 102,857"],
                ].map(([name, age, m, total, result], i) => (
                  <tr key={i} className={`border border-gray-200 ${i === 0 ? "bg-emerald-50" : ""}`}>
                    <td className="p-3 font-medium text-gray-700">{name}</td>
                    <td className="p-3 text-right text-gray-600">{age}</td>
                    <td className="p-3 text-right text-gray-600">{m}</td>
                    <td className="p-3 text-right text-gray-600">{total}</td>
                    <td className="p-3 text-right font-bold text-emerald-700">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Compound Interest Investments in Malaysia</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Investment</th>
                  <th className="text-right p-3 border border-gray-200">Typical Return</th>
                  <th className="text-right p-3 border border-gray-200">Risk</th>
                  <th className="text-left p-3 border border-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["EPF", "~5.5–6.0%", "Very Low", "Mandatory, tax-free dividends"],
                  ["ASB", "~5.0–6.0%", "Very Low", "Bumiputera only, tax-free"],
                  ["Fixed Deposit", "~3.5–4.0%", "Nil", "PIDM guaranteed up to RM250k"],
                  ["Unit Trusts", "5–12%", "Medium", "Variable, past returns not guaranteed"],
                  ["REITs", "4–7%", "Medium", "Listed property income"],
                  ["Stocks / ETFs", "7–12%", "High", "Long-term, requires knowledge"],
                ].map(([inv, ret, risk, note]) => (
                  <tr key={inv} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{inv}</td>
                    <td className="p-3 text-right font-semibold text-emerald-700">{ret}</td>
                    <td className="p-3 text-right text-gray-600">{risk}</td>
                    <td className="p-3 text-gray-500 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Rule of 72 — Quick Mental Math</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Divide 72 by your annual return rate to find roughly how many years it takes to double your money:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[["4%", "18 years"], ["6%", "12 years"], ["8%", "9 years"], ["12%", "6 years"]].map(([r, y]) => (
              <div key={r} className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-emerald-700 font-bold text-xl">{r}</p>
                <p className="text-gray-600 text-sm">doubles in</p>
                <p className="font-semibold text-gray-800">{y}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tips to Maximise Compound Growth</h3>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span> <span><strong>Start now, not later</strong> — every year of delay costs you more in opportunity than the money itself</span></li>
            <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> <span><strong>Reinvest all returns</strong> — dividends and interest should compound, not be spent</span></li>
            <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> <span><strong>Increase contributions as salary grows</strong> — even RM100/month extra has massive long-term impact</span></li>
            <li className="flex gap-2"><span className="text-emerald-500 font-bold">4.</span> <span><strong>Minimise fees</strong> — a 1% annual management fee reduces returns by 20–25% over 30 years</span></li>
            <li className="flex gap-2"><span className="text-emerald-500 font-bold">5.</span> <span><strong>Use tax-advantaged accounts</strong> — EPF and ASB returns are tax-free, boosting effective yield</span></li>
          </ul>
        </div>
      </CalcSeoSection>
      <Footer />
    </>
  );
}
