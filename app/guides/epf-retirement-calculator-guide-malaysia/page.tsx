import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/epf-retirement-calculator-guide-malaysia`;

export const metadata: Metadata = {
  title: "EPF Retirement Calculator Guide Malaysia 2026 — How Much Do You Need?",
  description: "How to use an EPF retirement calculator to project your KWSP balance at 55 or 60. Includes EPF contribution rates, dividend assumptions, the Basic Savings benchmark, and how much you actually need to retire comfortably in Malaysia.",
  keywords: ["EPF retirement calculator Malaysia", "KWSP retirement calculator", "EPF projection Malaysia", "how much EPF to retire Malaysia", "EPF balance at 55", "retirement savings Malaysia", "EPF retirement planning"],
  alternates: { canonical: "/guides/epf-retirement-calculator-guide-malaysia" },
  openGraph: {
    title: "EPF Retirement Calculator Guide Malaysia 2026",
    description: "Project your EPF balance at retirement. Contribution rates, dividend assumptions, and how much you really need to retire in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EPF Retirement Calculator Guide Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "EPF Retirement Calculator Guide Malaysia 2026", description: "How to project your EPF balance and whether you're on track to retire.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "How much EPF do I need to retire in Malaysia?", a: "EPF's own Basic Savings benchmark is RM240,000 at age 55 (for the 2024 benchmark). At a 6% annual dividend, RM240,000 generates approximately RM14,400 per year or RM1,200/month — enough for basic needs but tight for most urban Malaysians. Financial planners generally recommend aiming for 25× your annual expenses. If you spend RM3,000/month (RM36,000/year), you need RM900,000 in total retirement savings across EPF, investments, and other assets." },
  { q: "What EPF dividend rate should I use for retirement projections?", a: "The long-term average EPF conventional dividend rate is approximately 5.9%–6.2% per annum over the past 20 years. For conservative projections, financial planners typically use 5.5%–6.0%. Using a lower rate (e.g., 5%) gives a more conservative estimate and a larger safety margin. Never assume the highest recent rate (6.9% in 2017) will continue indefinitely." },
  { q: "Can I retire on EPF alone in Malaysia?", a: "For most Malaysians, EPF alone is insufficient for a comfortable 20–30 year retirement. EPF provides a forced savings base, but the median EPF balance at retirement is far below what is needed for financial independence. Supplementary savings through unit trusts, ASB, fixed deposits, stocks, or PRS (Private Retirement Scheme) are essential. Consider EPF as your retirement floor, not your retirement plan." },
  { q: "What happens to my EPF at age 55?", a: "At age 55, EPF restructures your accounts. Contributions to Akaun Persaraan (Account 1) stop being locked in — you can choose to withdraw all funds or keep them invested and withdraw flexibly. Employer contributions continue if you remain employed past 55 (at a reduced employer rate of 4% if the employee is between 55–60). The EPF dividend continues to accrue on remaining balances. Many Malaysians choose to leave funds invested past 55 since the EPF dividend often beats other low-risk alternatives." },
  { q: "How do I increase my EPF balance faster?", a: "Options include: (1) Voluntary additional contributions (i-Saraan / i-Lindung for self-employed, or voluntary top-ups for employees beyond the statutory 11%). Additional contributions up to RM4,000/year are tax-deductible under the PRS/EPF relief. (2) Avoid EPF Account 2 withdrawals for discretionary purposes — every ringgit withdrawn compounds less. (3) Start working earlier and contribute consistently. (4) Request a salary increase — EPF is percentage-based, so higher salary = higher contributions automatically." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "EPF Retirement Calculator Guide Malaysia 2026", description: "How to use an EPF retirement calculator to project your balance, understand dividend assumptions, and determine if you're on track for retirement in Malaysia.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "EPF Retirement Calculator Guide", item: PAGE_URL }] },
  ],
};

export default function EpfRetirementCalculatorGuidePage() {
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
              <span className="text-gray-500">EPF Retirement Calculator Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">EPF Retirement Calculator Guide Malaysia 2026</h1>
            <p className="text-gray-600 text-lg leading-relaxed">How to project your KWSP balance at retirement, which dividend rate to assume, what the Basic Savings benchmark means, and whether EPF alone is enough to fund your retirement in Malaysia.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Retirement · EPF</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">10 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Why You Need to Project Your EPF Balance</h2>
          <p>Most Malaysians contribute to EPF for 30–40 years but never run the numbers on whether those contributions will be enough to retire on. EPF sends annual statements, but a balance today tells you very little about what you will have in 20 years — because compound growth, future contributions, and dividend reinvestment change the picture dramatically.</p>
          <p>An EPF retirement calculator helps you answer the most important retirement planning question: <em>If I keep contributing at this rate, how much will I have at age 55 or 60?</em> Use our <Link href="/epf-calculator-malaysia">EPF Calculator Malaysia</Link> to run this projection with your actual salary, age, and contribution history.</p>

          <h2>How EPF Compound Growth Works</h2>
          <p>Your EPF balance grows through three mechanisms each year: your employee contributions (11% of gross salary), your employer contributions (12%–13% depending on salary tier), and the annual dividend applied to your daily average balance. All three compound on each other — new contributions earn dividends, dividends increase the balance that earns future dividends.</p>
          <p>A simple example: a 25-year-old earning RM4,000/month with total EPF contributions of RM960/month (employee + employer at 24% combined). At a 6% annual dividend over 30 years to age 55, the projected EPF balance is approximately RM800,000–RM900,000, assuming 3% annual salary growth. This exceeds the EPF Basic Savings benchmark of RM240,000 by a wide margin — but RM800,000 spread over 25–30 years of retirement is still only RM2,200–RM2,700/month.</p>

          <h2>EPF Basic Savings Benchmark — What It Really Means</h2>
          <p>EPF sets a <strong>Basic Savings</strong> target — the minimum balance EPF considers adequate for basic retirement needs at each age milestone. The 2024 benchmarks are: RM10,000 at age 30, RM25,000 at 35, RM50,000 at 40, RM90,000 at 45, RM150,000 at 50, RM240,000 at 55.</p>
          <p>These benchmarks are designed to generate approximately RM1,000–RM1,200/month over 20 years of retirement — enough to cover very basic living costs. They are <em>not</em> benchmarks for a comfortable retirement. If your lifestyle requires RM3,000–RM5,000/month, you need significantly more than the Basic Savings figure. Use the benchmark as a floor, not a goal.</p>
          <p>Check how your current EPF balance compares against the age benchmark for your age using our <Link href="/guides/how-much-epf-at-30-malaysia">How Much EPF Should I Have guide</Link>.</p>

          <h2>Inputs for a Reliable EPF Projection</h2>
          <p>To get a meaningful projection, you need four inputs: (1) Current EPF balance, (2) Current monthly gross salary, (3) Expected salary growth rate, and (4) Assumed annual dividend rate. The first two are factual — check your EPF i-Akaun statement. The last two are assumptions where your choices matter significantly.</p>
          <p><strong>Salary growth rate:</strong> 3%–5% annually is realistic for most Malaysian careers. Using 0% (flat salary) gives the most conservative estimate. Using 5%+ assumes consistent promotions and career progression.</p>
          <p><strong>Dividend rate:</strong> Use 5.5%–6.0% for a balanced projection. The 10-year average EPF conventional dividend is approximately 5.9%. Do not use the highest recent rate. Do not assume dividend rates will fall to 2.5% (the statutory minimum) — EPF has never paid near the minimum. See the full history in our <Link href="/guides/epf-dividend-history-malaysia">EPF Dividend History guide</Link>.</p>

          <h2>How Much Do You Actually Need to Retire in Malaysia?</h2>
          <p>The international standard is the <strong>25× rule</strong>: multiply your annual expenses by 25. This assumes a 4% annual withdrawal rate from your retirement portfolio, which historically sustains 30+ years of withdrawals with high probability. At Malaysian EPF dividend rates of ~6%, the math is even more favorable — you could withdraw 5%–6% annually and sustain the portfolio indefinitely if dividends match withdrawal rates.</p>
          <p>Practical targets: if you need RM3,000/month in retirement (RM36,000/year), you need RM900,000 in total savings. If you need RM5,000/month (RM60,000/year), you need RM1,500,000. These figures include all assets — EPF, investments, savings, rental income — not just EPF alone.</p>

          <h2>What If Your EPF Balance Is Behind the Benchmark?</h2>
          <p>If your current EPF balance is below the Basic Savings benchmark for your age, you have options: increase voluntary contributions (up to RM60,000/year in additional voluntary EPF contributions, tax-deductible up to RM4,000), reduce or stop Account 2 withdrawals, increase salary through career progression, or supplement EPF with other investments like ASB, unit trusts, or PRS. Read <Link href="/guides/asb-vs-epf-malaysia">ASB vs EPF Comparison</Link> to understand how these two vehicles complement each other.</p>
          <p>The most powerful lever is time — starting contributions at 22 vs 28 adds 6 years of compounding. At 6% annual growth, a RM100,000 balance at 22 becomes RM574,000 at 55; the same amount at 28 becomes RM404,000. The 6-year difference costs RM170,000 in retirement wealth.</p>

          <h2>EPF Withdrawal Strategies at Retirement</h2>
          <p>When you reach 55, you have choices about how to access your EPF savings. You can withdraw all funds as a lump sum, make periodic withdrawals (monthly or as needed), keep the balance invested (EPF continues to pay dividends after 55), or use EPF's annuity option for guaranteed monthly income. Most financial planners recommend keeping at least a portion invested in EPF past 55 since the dividend rate typically exceeds what a risk-free fixed deposit pays.</p>
          <p>The decision depends on your other income sources, health, dependents, and financial literacy. A spouse's EPF balance, rental income, dividends from investments, or a pension (for government servants) all affect how much of your EPF lump sum you need to spend immediately.</p>
        </article>

        <FinancialDisclaimer />

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-800 text-sm list-none">{faq.q}<svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorCard />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
