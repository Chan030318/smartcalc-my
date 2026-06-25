import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EpfCalculator from "./EpfCalculator";
import JsonLd from "@/components/JsonLd";
import CalcSeoSection, { type CalcFaq, type RelatedCalc } from "@/components/CalcSeoSection";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/epf-calculator-malaysia`;

export const metadata: Metadata = {
  title: "EPF Calculator Malaysia 2024 — KWSP Retirement Savings Projection",
  description:
    "Free EPF / KWSP calculator for Malaysia. Project your retirement savings with year-by-year contributions, employer matching, and dividend growth. Based on 2024 EPF rates.",
  keywords: [
    "EPF calculator Malaysia",
    "KWSP calculator",
    "EPF retirement calculator",
    "EPF savings calculator Malaysia",
    "kalkulator KWSP",
    "EPF contribution calculator",
    "EPF projection Malaysia",
    "retirement savings Malaysia",
    "EPF dividend calculator",
    "how much EPF at retirement Malaysia",
  ],
  alternates: { canonical: "/epf-calculator-malaysia" },
  openGraph: {
    title: "EPF Calculator Malaysia 2024 — KWSP Retirement Savings Projection",
    description:
      "Project your EPF / KWSP retirement savings with employer contributions and dividend compounding. Free, instant, year-by-year breakdown.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EPF Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPF Calculator Malaysia — KWSP Retirement Savings Projection",
    description: "Free EPF retirement savings calculator — see how much you'll have at 55 with dividend compounding.",
    images: ["/og-image.png"],
  },
};

const faqs: CalcFaq[] = [
  {
    q: "What are the EPF contribution rates in Malaysia?",
    a: "Employees contribute 11% of gross monthly salary to EPF. Employers contribute 13% for employees earning ≤ RM5,000 per month and 12% for those earning above RM5,000. Employees may opt to reduce their contribution to 9% (subject to EPF approval). These rates apply to Malaysian citizens and permanent residents.",
  },
  {
    q: "When can I withdraw my EPF savings?",
    a: "Full withdrawal from Akaun Persaraan is allowed at age 55 or 60 (depending on your EPF election). Akaun Sejahtera allows partial withdrawals for housing, education, and healthcare. Akaun Fleksibel (10% of contributions since May 2024) can be withdrawn at any time via i-Akaun without needing a specific reason.",
  },
  {
    q: "What dividend rate does EPF pay?",
    a: "EPF declares dividends annually. Recent Akaun Persaraan dividend rates: 5.50% (2023), 5.35% (2022), 6.10% (2021), 5.20% (2020), 5.45% (2019). The long-term average is around 5.5–6%. Akaun Sejahtera dividends are typically slightly lower.",
  },
  {
    q: "How much EPF should I have at age 30, 40, and 50?",
    a: "EPF's Belanjawanku guidelines suggest: at age 30 you should have approximately 3× your annual salary saved; at 40 approximately 6×; at 50 approximately 10×. For a median Malaysian salary of around RM2,900/month, this translates to roughly RM104,400 at 30, RM208,800 at 40, and RM348,000 at 50. These are benchmarks, not guarantees — use our calculator for a personalised projection.",
  },
  {
    q: "What is the EPF Akaun Fleksibel introduced in 2024?",
    a: "Akaun Fleksibel (Account 3 / Flexible Account) was introduced by EPF in May 2024. It receives 10% of each monthly contribution. Unlike Akaun Persaraan (Account 1) and Akaun Sejahtera (Account 2), withdrawals from Akaun Fleksibel can be made at any time for any purpose via i-Akaun, providing liquidity for members who need short-term financial flexibility.",
  },
  {
    q: "Can I make voluntary EPF contributions to grow my retirement savings faster?",
    a: "Yes. Both members and their employers can make additional voluntary contributions (Caruman Sukarela) to EPF above the statutory rates. Voluntary contributions by employees are tax-deductible up to RM4,000 per year (combined with life insurance premiums). This is one of the most tax-efficient ways to grow retirement savings in Malaysia.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/salary-calculator-malaysia", emoji: "💰", title: "Salary Calculator Malaysia", desc: "See EPF, SOCSO, EIS & PCB deducted from your salary" },
  { href: "/pcb-calculator-malaysia", emoji: "📋", title: "PCB Calculator Malaysia", desc: "Estimate your monthly PCB / MTD deduction" },
  { href: "/income-tax-calculator-malaysia", emoji: "📊", title: "Income Tax Calculator Malaysia", desc: "Calculate LHDN annual tax payable and effective rate" },
  { href: "/loan-calculator", emoji: "🏠", title: "Loan Calculator Malaysia", desc: "Estimate monthly repayment and total interest on any loan" },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "EPF Calculator Malaysia",
      url: PAGE_URL,
      description:
        "Free EPF / KWSP retirement savings projection calculator for Malaysia. Models year-by-year employee contributions (11%), employer contributions (12–13%), and annual dividend compounding.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "EPF Calculator Malaysia", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function EpfCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              2024 Rates · Employee 11% · Employer 12–13% · Dividend Compounding
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              EPF Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Project your EPF / KWSP retirement savings with your current balance, monthly salary, annual increments, and dividend compounding — with a full year-by-year breakdown.
            </p>
          </div>
        </section>

        <EpfCalculator />
        <FinancialDisclaimer />

        <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is EPF (KWSP)?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Employees Provident Fund (EPF), or Kumpulan Wang Simpanan Pekerja (KWSP) in Malay, is Malaysia&#39;s mandatory defined-contribution retirement savings scheme. Established in 1951, EPF requires all private-sector employees and their employers to contribute a fixed percentage of monthly salary to an individual savings account, which grows through annual dividends declared by the EPF board.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As of 2024, EPF manages over RM1 trillion in assets on behalf of approximately 15 million active members. Every Malaysian working in the private sector is automatically enrolled. Contributions are pooled and invested in a diversified portfolio including Malaysian Government Securities, equities, real estate, and infrastructure — generating dividends that have historically averaged around 5.5–6% per year.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How EPF Contributions Work</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Each monthly EPF contribution is split between employee and employer, and since May 2024, distributed across three accounts:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              {[
                { name: "Akaun Persaraan", pct: "75%", color: "blue", desc: "Locked until age 55/60 for retirement income" },
                { name: "Akaun Sejahtera", pct: "15%", color: "teal", desc: "Partial withdrawals for housing, education, healthcare" },
                { name: "Akaun Fleksibel", pct: "10%", color: "purple", desc: "Withdraw any time via i-Akaun (new from May 2024)" },
              ].map((a) => (
                <div key={a.name} className={`bg-${a.color}-50 border border-${a.color}-100 rounded-xl p-4`}>
                  <div className={`text-2xl font-bold text-${a.color}-700 mb-1`}>{a.pct}</div>
                  <div className="font-semibold text-gray-800 text-sm mb-1">{a.name}</div>
                  <div className="text-xs text-gray-500">{a.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              The split above applies to contributions from May 2024 onwards. Existing balances before this date are distributed differently based on the member&#39;s prior account structure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">EPF Dividend History Malaysia</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              EPF dividends are declared annually and credited to members&#39; accounts in the first quarter of the following year. The table below shows Akaun Persaraan (Conventional) dividend rates over the past decade:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Year</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Akaun Persaraan Rate</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["2023", "5.50%", "Strong equity markets recovery"],
                    ["2022", "5.35%", "Challenging global market conditions"],
                    ["2021", "6.10%", "Post-pandemic rebound year"],
                    ["2020", "5.20%", "COVID-19 impact on investment returns"],
                    ["2019", "5.45%", "Strong domestic fixed income returns"],
                    ["2018", "6.15%", "Highest rate since 2014"],
                    ["2017", "6.90%", "Exceptional equity gains"],
                    ["2016", "5.70%", "Steady returns amid market volatility"],
                  ].map(([yr, rate, ctx]) => (
                    <tr key={yr} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{yr}</td>
                      <td className="px-4 py-3 font-semibold text-teal-700">{rate}</td>
                      <td className="px-4 py-3 text-gray-500">{ctx}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Source: EPF Annual Reports. Shariah dividend rates may differ slightly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example EPF Projection</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-teal-900 mb-3">Scenario: Starting age 25, Salary RM4,000/month, No existing balance</h3>
              <p className="text-sm text-teal-800 mb-4">Assumptions: 3% annual salary increment, 5.5% dividend rate, retire at 60 (35 years).</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: "At age 35 (10 yrs)", value: "≈ RM 95,000" },
                  { label: "At age 45 (20 yrs)", value: "≈ RM 275,000" },
                  { label: "At age 60 (35 yrs)", value: "≈ RM 820,000" },
                ].map((r) => (
                  <div key={r.label} className="bg-white rounded-xl p-4 border border-teal-100 text-center">
                    <div className="text-xs text-gray-500 mb-1">{r.label}</div>
                    <div className="text-xl font-bold text-teal-700">{r.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-teal-700 mt-4">This is illustrative only. Actual EPF savings depend on your salary growth, contribution rate elections, and actual EPF dividend rates. Use the calculator above for a personalised projection.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much EPF Should You Have? Benchmarks by Age</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Age</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Belanjawanku Benchmark</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">For RM3,000/mth salary</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">For RM5,000/mth salary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["30", "3× annual salary", "RM 108,000", "RM 180,000"],
                    ["40", "6× annual salary", "RM 216,000", "RM 360,000"],
                    ["50", "10× annual salary", "RM 360,000", "RM 600,000"],
                    ["55", "14× annual salary", "RM 504,000", "RM 840,000"],
                  ].map(([age, bench, s3k, s5k]) => (
                    <tr key={age} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">Age {age}</td>
                      <td className="px-4 py-3 text-gray-600">{bench}</td>
                      <td className="px-4 py-3 text-gray-700">{s3k}</td>
                      <td className="px-4 py-3 text-gray-700">{s5k}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Based on EPF&#39;s Belanjawanku guidelines. These are targets, not guarantees. Salary figures are current — your actual salary at those ages may differ.</p>
          </div>
        </CalcSeoSection>
      </main>
      <Footer />
    </>
  );
}
