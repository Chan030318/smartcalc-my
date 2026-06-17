import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-much-epf-at-30-malaysia`;

export const metadata: Metadata = {
  title: "How Much EPF Should I Have at 30 in Malaysia? (2024 Benchmarks)",
  description:
    "Find out how much EPF (KWSP) savings you should have at age 30, 35, 40, and 50 in Malaysia. Covers EPF Basic Savings benchmarks, what to do if you're behind, and how to grow your balance faster.",
  keywords: [
    "how much EPF at 30 Malaysia",
    "EPF savings benchmark Malaysia",
    "EPF basic savings Malaysia",
    "KWSP balance at 30",
    "EPF retirement goal Malaysia",
    "berapa simpanan EPF umur 30",
    "EPF savings 2024 Malaysia",
    "retire with EPF Malaysia",
  ],
  alternates: { canonical: "/guides/how-much-epf-at-30-malaysia" },
  openGraph: {
    title: "How Much EPF Should I Have at 30 in Malaysia? (2024 Benchmarks)",
    description: "EPF Basic Savings benchmarks by age, what the numbers mean, and 6 practical ways to grow your EPF balance if you're behind.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EPF Savings at 30 Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "How Much EPF Should You Have at 30 in Malaysia?", description: "EPF benchmarks by age and what to do if you're behind.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "How much EPF should I have at 30?", a: "EPF does not publish a specific benchmark for age 30, but the closest official guideline is RM10,000 in Akaun Persaraan by age 30 (Basic Savings benchmark). However, for a comfortable retirement, financial planners suggest targeting 3–4× your annual salary. At RM4,000/month (RM48,000/year), that means RM144,000–RM192,000 in EPF by age 30 — well above the Basic Savings minimum." },
  { q: "What are the official EPF Basic Savings benchmarks?", a: "EPF publishes minimum recommended Akaun Persaraan balances: RM10,000 at 30, RM25,000 at 35, RM50,000 at 40, RM90,000 at 45, RM150,000 at 50, RM240,000 at 55. These are designed to support approximately RM1,000/month for 20 years in retirement — a bare minimum by most standards." },
  { q: "Is the EPF Basic Savings benchmark enough for retirement?", a: "No — the RM240,000 Basic Savings target at 55 supports only about RM1,000/month for 20 years. With Malaysia's rising cost of living and life expectancy beyond 75, most financial planners recommend targeting RM500,000–RM1,000,000 or more in total retirement savings (EPF + other investments) for a comfortable retirement." },
  { q: "What happens if my EPF is below the Basic Savings benchmark?", a: "If your EPF Akaun Persaraan balance is below the Basic Savings amount for your age, you will be required to keep that minimum in Akaun Persaraan before you can access it at age 55. However, there are no penalties — the benchmark is a guideline, not a legal requirement." },
  { q: "Can I top up my EPF voluntarily?", a: "Yes. You can make voluntary contributions to your own EPF account (Self Contribution / i-Saraan for the self-employed, or direct top-up for employees). Voluntary contributions earn the same dividend rate as regular contributions and qualify for income tax relief of up to RM4,000 per year (combined with mandatory employee contributions)." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much EPF Should I Have at 30 in Malaysia? (2024 Benchmarks)",
  description: "EPF savings benchmarks by age in Malaysia, what the Basic Savings targets mean, whether they're sufficient, and practical steps to grow your EPF balance.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "How Much EPF at 30 Malaysia", item: PAGE_URL },
  ]},
};

const benchmarks = [
  { age: 30, basic: "RM 10,000", recommended: "RM 100,000+", note: "3× annual salary if earning RM3k/month" },
  { age: 35, basic: "RM 25,000", recommended: "RM 200,000+", note: "EPF + other savings combined" },
  { age: 40, basic: "RM 50,000", recommended: "RM 350,000+", note: "Critical decade for compounding" },
  { age: 45, basic: "RM 90,000", recommended: "RM 500,000+", note: "10 years to retirement — catch up now" },
  { age: 50, basic: "RM 150,000", recommended: "RM 700,000+", note: "5 years of max contribution growth" },
  { age: 55, basic: "RM 240,000", recommended: "RM 1,000,000+", note: "Supports RM3,000–RM4,000/month for 25 years" },
];

export default function HowMuchEpfAt30Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-teal-50 to-emerald-50 border-b border-teal-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-teal-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">EPF at 30</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How Much EPF Should I Have at 30 in Malaysia?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              The official EPF Basic Savings benchmark for age 30 is just RM10,000 — far below what you actually need for a comfortable retirement. Here is what you should realistically be targeting, and how to get there.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Retirement</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>The Official EPF Basic Savings Benchmark</h2>
          <p>EPF publishes <strong>Basic Savings</strong> — minimum recommended balances in Akaun Persaraan at each age milestone. The target for age 30 is <strong>RM10,000</strong>. By age 55, it is RM240,000.</p>
          <p>These benchmarks are designed to provide approximately <strong>RM1,000/month for 20 years</strong> after retirement. That is roughly RM33/day — well below the cost of living in most Malaysian cities. The benchmarks are a floor, not a goal.</p>

          <h2>EPF vs Recommended Savings by Age</h2>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Age</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">EPF Basic Savings</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Better Target</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Context</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((b, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-bold text-gray-900">{b.age}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{b.basic}</td>
                    <td className="px-4 py-3 text-center font-semibold text-teal-700">{b.recommended}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-2">Recommended targets are estimates for a comfortable retirement. EPF Basic Savings are official EPF minimum benchmarks.</p>
          </div>

          <h2>Why Is the Basic Savings Benchmark So Low?</h2>
          <p>The RM240,000 target at retirement was set to ensure <em>all</em> EPF members — including those on low incomes throughout their careers — have <em>some</em> baseline retirement income. It was not designed as a comfortable retirement target for urban Malaysians.</p>
          <p>Consider: RM1,000/month in 2024 barely covers rent in Kuala Lumpur, let alone healthcare, food, and utilities. With inflation averaging 2–3% per year, RM1,000 in 2045 (when today&rsquo;s 30-year-olds retire) will have the purchasing power of roughly RM550 today.</p>

          <h2>What Should You Actually Target?</h2>
          <p>A common financial planning rule is the <strong>25× annual expenses rule</strong>: you need 25 times your expected annual retirement spending saved up (assuming a 4% withdrawal rate). For someone expecting to spend RM3,000/month in retirement:</p>
          <ul>
            <li>Annual retirement spending: RM36,000</li>
            <li>Required savings: RM36,000 × 25 = <strong>RM900,000</strong></li>
          </ul>
          <p>For a more modest RM2,000/month lifestyle: RM600,000 needed. This should be your real target — in EPF plus other investments (unit trusts, ASB, REITs, etc.).</p>

          <h2>The Power of Starting Early: A Compounding Example</h2>
          <p>EPF dividends average roughly <strong>5.5–6% per year</strong>. At 5.5% compounding, here is the difference starting early makes:</p>
          <ul>
            <li><strong>Starting at 25 with RM500/month:</strong> By 55, you accumulate approximately <strong>RM430,000</strong> from contributions alone (before employer contributions and before EPF dividends). With compounding, it exceeds <strong>RM1,000,000</strong>.</li>
            <li><strong>Starting at 35 with the same RM500/month:</strong> Only 20 years to compound — total reaches approximately <strong>RM560,000</strong>. Starting 10 years late cuts the outcome nearly in half.</li>
          </ul>

          <h2>6 Ways to Grow Your EPF Faster</h2>
          <ol>
            <li><strong>Voluntary top-ups.</strong> Anyone can make additional contributions to EPF over and above mandatory deductions. These earn the same dividend rate and qualify for tax relief (up to RM4,000/year combined with mandatory contributions).</li>
            <li><strong>Negotiate a higher salary.</strong> Since EPF is 11% of gross salary, every RM1,000 salary increase adds RM110/month to your EPF — plus the employer&rsquo;s 12–13% match, meaning RM230–RM240 more per month into your account.</li>
            <li><strong>Do not withdraw from EPF Akaun Sejahtera unnecessarily.</strong> Every withdrawal resets your compounding. Use withdrawals only when strictly necessary.</li>
            <li><strong>Check your employer is contributing correctly.</strong> Verify your KWSP statement quarterly. Some employers — especially SMEs — underpay or delay contributions. This is illegal; report to EPF if contributions are missing.</li>
            <li><strong>Invest part of your Akaun Sejahtera via EPF Members Investment Scheme.</strong> If your balance exceeds the Basic Savings threshold, you can invest up to 30% of the excess into approved unit trust funds, which may outperform EPF dividend rates over the long term.</li>
            <li><strong>Avoid unnecessary housing withdrawals.</strong> Many Malaysians withdraw from Akaun Sejahtera to reduce their housing loan principal. While this lowers loan interest, it also permanently removes the compounding benefit of those funds from your retirement account. Model both outcomes before deciding.</li>
          </ol>

          <h2>What If You Are Behind the Benchmark?</h2>
          <p>Do not panic — but do act. Being below Basic Savings at 30 is recoverable with:</p>
          <ul>
            <li>A salary increase of RM500–RM1,000 compounded over the next decade adds hundreds of thousands by retirement.</li>
            <li>Regular voluntary top-ups of even RM200–RM500/month significantly accelerate growth.</li>
            <li>Suppressing lifestyle inflation — avoid upgrading your car or taking on new debt — keeps DSR low and disposable income high for saving.</li>
          </ul>

          <div className="not-prose bg-teal-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Project Your EPF Retirement Balance</h3>
            <p className="text-teal-100 mb-5 text-sm">Enter your current age, salary, balance, and annual increment to see a year-by-year EPF projection with dividend compounding.</p>
            <Link href="/epf-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors">EPF Calculator Malaysia →</Link>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/epf-contribution-guide-malaysia">EPF Contribution Guide Malaysia</Link> — rates, accounts, and withdrawal rules</li>
            <li><Link href="/guides/epf-withdrawal-guide-malaysia">EPF Withdrawal Guide Malaysia</Link></li>
            <li><Link href="/epf-calculator-malaysia">EPF Calculator Malaysia</Link> — projection tool</li>
            <li><Link href="/salary-calculator-malaysia">Salary Calculator</Link> — see how EPF grows with each salary increase</li>
          </ul>
        </article>

        <FinancialDisclaimer />
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-800 text-sm list-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
