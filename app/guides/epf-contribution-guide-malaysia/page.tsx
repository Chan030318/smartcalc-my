import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/epf-contribution-guide-malaysia`;

export const metadata: Metadata = {
  title: "EPF Contribution Guide Malaysia 2024 — Rates, Rules & Withdrawal",
  description:
    "Complete guide to EPF (KWSP) contributions in Malaysia — employee and employer rates, the 3-account structure (Akaun Persaraan, Sejahtera, Fleksibel), Basic Savings benchmarks, dividend history, and withdrawal rules.",
  keywords: [
    "EPF contribution Malaysia 2024",
    "KWSP contribution rate Malaysia",
    "EPF employer contribution rate",
    "EPF withdrawal Malaysia",
    "EPF account 1 2 3 Malaysia",
    "Akaun Persaraan Sejahtera Fleksibel",
    "EPF basic savings Malaysia",
    "KWSP caruman majikan",
    "EPF dividend 2024",
  ],
  alternates: { canonical: "/guides/epf-contribution-guide-malaysia" },
  openGraph: {
    title: "EPF Contribution Guide Malaysia 2024 — Rates, Rules & Withdrawal",
    description:
      "Employee 11%, employer 12–13%, new 3-account structure, dividend history, withdrawal rules, and how to project your retirement balance — all explained.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EPF Contribution Guide Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPF Contribution Guide Malaysia 2024 — Rates, Rules & Withdrawal",
    description: "EPF rates, the 3-account structure, Basic Savings benchmarks, dividend history, and withdrawal rules explained.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the EPF contribution rate in 2024?",
    a: "For employees below age 60, the employee contribution rate is 11% of gross monthly salary. The employer contributes 13% for salaries RM5,000 and below, and 12% for salaries above RM5,000. For employees aged 60 and above, rates are reduced: employee pays 5.5% and employer pays 6%.",
  },
  {
    q: "What are the three EPF accounts (Akaun Persaraan, Sejahtera, Fleksibel)?",
    a: "Since 2024, EPF restructured from two accounts to three. Akaun Persaraan (75% of contributions) is locked until age 55. Akaun Sejahtera (15%) can be withdrawn for housing, education, or healthcare. Akaun Fleksibel (10%) can be withdrawn at any time for any purpose — making part of EPF more accessible while protecting the core retirement savings.",
  },
  {
    q: "What are EPF Basic Savings benchmarks?",
    a: "EPF Basic Savings are minimum recommended balances in Akaun Persaraan at each age milestone: RM10,000 at age 30, RM25,000 at 35, RM50,000 at 40, RM90,000 at 45, RM150,000 at 50, RM240,000 at 55. These are benchmarks to guide members toward a minimally adequate retirement income of about RM1,000/month.",
  },
  {
    q: "Can I withdraw from EPF before age 55?",
    a: "Yes, but only for specific purposes and only from Akaun Sejahtera or Akaun Fleksibel. Approved withdrawals include: purchasing a home, paying down a housing loan, financing tertiary education, medical emergencies (self and family), hajj pilgrimage, and leaving Malaysia permanently. Akaun Persaraan cannot be touched until age 55.",
  },
  {
    q: "What is the EPF dividend rate?",
    a: "EPF dividend rates vary each year based on investment returns. Recent rates: 6.10% (2023), 5.35% (2022), 6.10% (2021), 5.20% (2020), 5.45% (2019), 6.15% (2018). The long-term average is approximately 5.5–6%. Dividends are compounded annually and credited directly to your accounts.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EPF Contribution Guide Malaysia 2024 — Rates, Rules & Withdrawal",
  description:
    "Comprehensive guide to EPF KWSP contributions in Malaysia — employee and employer rates, the new 3-account structure, Basic Savings benchmarks, dividend history, and when you can withdraw.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "SmartCalc MY",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` },
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: "EPF Contribution Guide Malaysia", item: PAGE_URL },
    ],
  },
};

const rates = [
  { label: "Below 60", employee: "11%", employer55: "13%", employerAbove: "12%" },
  { label: "60 and above", employee: "5.5%", employer55: "6%", employerAbove: "6%" },
];

const dividends = [
  { year: "2023", conventional: "6.10%", syariah: "5.40%" },
  { year: "2022", conventional: "5.35%", syariah: "4.75%" },
  { year: "2021", conventional: "6.10%", syariah: "5.65%" },
  { year: "2020", conventional: "5.20%", syariah: "4.90%" },
  { year: "2019", conventional: "5.45%", syariah: "5.00%" },
  { year: "2018", conventional: "6.15%", syariah: "5.90%" },
  { year: "2017", conventional: "6.90%", syariah: "6.40%" },
  { year: "2016", conventional: "5.70%", syariah: "5.70%" },
];

const basicSavings = [
  { age: 30, amount: "RM 10,000" },
  { age: 35, amount: "RM 25,000" },
  { age: 40, amount: "RM 50,000" },
  { age: 45, amount: "RM 90,000" },
  { age: 50, amount: "RM 150,000" },
  { age: 55, amount: "RM 240,000" },
];

export default function EpfContributionGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 border-b border-teal-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-teal-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">EPF Contribution Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              EPF Contribution Guide Malaysia 2024
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Everything you need to know about EPF (KWSP) — contribution rates, the new 3-account structure, Basic Savings benchmarks, dividend history, and when you can withdraw.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Retirement</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>What Is EPF?</h2>
          <p>
            EPF — the <strong>Employees Provident Fund</strong> (Kumpulan Wang Simpanan Pekerja, KWSP) — is Malaysia&rsquo;s mandatory retirement savings scheme. Established under the EPF Act 1991, it requires most private sector employees and their employers to contribute a portion of monthly salary into individual EPF accounts.
          </p>
          <p>
            Contributions earn annual dividends based on EPF&rsquo;s investment returns, and the balance grows tax-free. Unlike a pension, your EPF savings belong to you personally — the total accumulated balance is yours to withdraw at retirement.
          </p>

          <h2>2024 Contribution Rates</h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Employee Age</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Employee</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Employer (≤ RM5k salary)</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Employer (&gt; RM5k salary)</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r) => (
                  <tr key={r.label} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{r.label}</td>
                    <td className="px-4 py-3 text-center font-semibold text-teal-700">{r.employee}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{r.employer55}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{r.employerAbove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            <strong>Key point:</strong> The employer&rsquo;s contribution is paid <em>on top of</em> your salary — it does not reduce your take-home pay. Only the employee&rsquo;s 11% is deducted from your gross salary.
          </p>

          <h2>The New 3-Account Structure (2024)</h2>
          <p>
            Starting 2024, EPF restructured savings from the traditional two-account system (Account 1 and Account 2) into three accounts:
          </p>

          <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              { name: "Akaun Persaraan", pct: "75%", color: "bg-teal-50 border-teal-200 text-teal-800", desc: "Core retirement savings. Locked until age 55. Cannot be withdrawn early for housing or other purposes." },
              { name: "Akaun Sejahtera", pct: "15%", color: "bg-sky-50 border-sky-200 text-sky-800", desc: "Flexible savings. Withdrawable for housing, education, healthcare, or hajj." },
              { name: "Akaun Fleksibel", pct: "10%", color: "bg-violet-50 border-violet-200 text-violet-800", desc: "Fully accessible. Can be withdrawn at any time, for any purpose — with a minimum notice period." },
            ].map((acc) => (
              <div key={acc.name} className={`rounded-2xl border p-5 ${acc.color}`}>
                <p className="font-bold text-2xl mb-0.5">{acc.pct}</p>
                <p className="font-semibold text-sm mb-2">{acc.name}</p>
                <p className="text-xs leading-relaxed">{acc.desc}</p>
              </div>
            ))}
          </div>

          <p>
            This restructuring protects the bulk of retirement savings (75%) while giving members more flexibility with 10% that can be freely accessed.
          </p>

          <h2>EPF Basic Savings Benchmarks</h2>
          <p>
            EPF publishes <strong>Basic Savings</strong> — minimum recommended Akaun Persaraan balances at each age milestone, calibrated to provide roughly RM1,000/month for 20 years in retirement:
          </p>

          <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
            {basicSavings.map((b) => (
              <div key={b.age} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Age {b.age}</p>
                <p className="font-bold text-gray-900 text-lg">{b.amount}</p>
              </div>
            ))}
          </div>

          <p>
            These are <em>minimum</em> benchmarks. With rising life expectancy and living costs, financial planners typically recommend targeting 2–3× these amounts for a comfortable retirement.
          </p>

          <h2>EPF Dividend History (2016–2023)</h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Year</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Conventional Portfolio</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Shariah Portfolio</th>
                </tr>
              </thead>
              <tbody>
                {dividends.map((d) => (
                  <tr key={d.year} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{d.year}</td>
                    <td className="px-4 py-3 text-center text-teal-700 font-semibold">{d.conventional}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{d.syariah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>When Can You Withdraw from EPF?</h2>
          <ul>
            <li><strong>Age 55 (Akaun Persaraan):</strong> Full withdrawal of Akaun Persaraan is allowed at age 55. You can choose to withdraw all at once or leave the balance to continue earning dividends until age 60.</li>
            <li><strong>Before 55 (Akaun Sejahtera):</strong> Approved pre-retirement withdrawals from Akaun Sejahtera: housing loan purchase or redemption, children&rsquo;s higher education, medical expenses (self, spouse, children, parents), hajj pilgrimage.</li>
            <li><strong>Akaun Fleksibel:</strong> Anytime, for any reason.</li>
            <li><strong>Incapacitation or death:</strong> Full withdrawal allowed regardless of age.</li>
            <li><strong>Leaving Malaysia permanently:</strong> Full withdrawal allowed for non-citizens and Malaysians who have renounced citizenship.</li>
          </ul>

          <h2>Voluntary Contributions and EPF i-Saraan</h2>
          <p>
            Self-employed individuals, freelancers, and gig workers can contribute voluntarily to EPF through the <strong>i-Saraan</strong> scheme. The government provides a co-contribution incentive of up to RM500/year for eligible i-Saraan members earning below RM100,000/year. All contributions earn the same dividend rate as regular members.
          </p>

          {/* CTA */}
          <div className="not-prose bg-teal-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Project Your EPF Retirement Balance</h3>
            <p className="text-teal-100 mb-5 text-sm">
              Enter your current age, salary, existing balance, and annual increment to see a year-by-year projection of your EPF savings with dividend compounding.
            </p>
            <Link
              href="/epf-calculator-malaysia"
              className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
            >
              EPF Calculator Malaysia →
            </Link>
          </div>

          <h2>Related Guides and Calculators</h2>
          <ul>
            <li><Link href="/epf-calculator-malaysia">EPF Calculator Malaysia</Link> — year-by-year retirement projection</li>
            <li><Link href="/salary-calculator-malaysia">Salary Calculator Malaysia</Link> — see EPF deductions on your payslip</li>
            <li><Link href="/guides/how-to-calculate-salary-after-epf">How to Calculate Salary After EPF</Link> — full payslip breakdown</li>
            <li><Link href="/income-tax-calculator-malaysia">Income Tax Calculator Malaysia</Link> — EPF relief up to RM4,000</li>
          </ul>
        </article>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-800 text-sm list-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
