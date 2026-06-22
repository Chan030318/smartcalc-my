import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/rm3000-salary-budget-plan-malaysia`;

export const metadata: Metadata = {
  title: "RM3,000 Salary Budget Plan Malaysia 2026 — How to Manage Your Money",
  description:
    "How to budget a RM3,000 monthly salary in Malaysia. See take-home pay after EPF, SOCSO, and PCB, then build a realistic budget for housing, food, transport, savings, and entertainment. Includes 50/30/20 and zero-based approaches.",
  keywords: [
    "RM3000 salary budget Malaysia",
    "budget plan RM3000 Malaysia",
    "manage salary RM3000 Malaysia",
    "gaji RM3000 budget Malaysia",
    "RM3000 take home pay Malaysia",
    "budget gaji 3000 Malaysia 2026",
    "how to save on 3000 salary Malaysia",
  ],
  alternates: { canonical: "/guides/rm3000-salary-budget-plan-malaysia" },
  openGraph: {
    title: "RM3,000 Salary Budget Plan Malaysia 2026 — How to Manage Your Money",
    description: "Detailed RM3,000 salary budget breakdown for Malaysia — take-home after deductions, realistic expense allocation, savings plan.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RM3000 Salary Budget Plan Malaysia 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RM3,000 Salary Budget Malaysia 2026",
    description: "Exactly how to budget a RM3,000 salary in Malaysia — after EPF, SOCSO, PCB deductions.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the take-home pay for a RM3,000 salary in Malaysia?",
    a: "For a single Malaysian earning RM3,000 gross with no dependents: EPF employee contribution (11%) = RM330, SOCSO employee contribution (0.5%) = RM15, EIS employee contribution (0.2%) = RM6, PCB/income tax withholding = approximately RM0 (RM3,000 gross falls below the PCB threshold after EPF and personal relief deductions in most scenarios). Total deductions ≈ RM351. Take-home pay ≈ RM2,649. Use the Salary Calculator for your exact deductions.",
  },
  {
    q: "Can I afford to rent my own place on a RM3,000 salary in Malaysia?",
    a: "It depends heavily on location. In Kuala Lumpur or Petaling Jaya, a solo room rental costs RM500–RM900, and a studio apartment RM1,200–RM2,000. On RM2,649 take-home, renting solo in KL for more than RM700–RM800 leaves very little for other essentials. Options: choose room rental over solo apartment, look at more affordable areas (Shah Alam, Rawang, Kajang), or house-share with roommates to split costs.",
  },
  {
    q: "How much should I save on a RM3,000 salary?",
    a: "The 50/30/20 rule suggests saving 20% of take-home pay. On RM2,649 take-home, that is approximately RM530/month. This might feel tight with KL living costs. Start with saving at least RM300/month consistently — RM100 for emergency fund, RM200 into investment or savings. Note that your EPF deduction of RM330 (plus RM495 employer contribution = RM825/month total) is already a form of forced retirement saving.",
  },
  {
    q: "Is RM3,000 above the minimum wage in Malaysia?",
    a: "Yes. Malaysia's national minimum wage as of 2024 is RM1,500/month (for Peninsular Malaysia and Sabah, Sarawak, Labuan). RM3,000 is double the minimum wage. However, RM3,000 is below the median household income for Malaysian individuals — the median individual income is approximately RM2,500–RM3,000 and the median household income (combining all earners in a household) is significantly higher.",
  },
  {
    q: "Should I invest while earning RM3,000?",
    a: "Yes, but in the right order: (1) Build emergency fund first (at least 3 months of essential expenses, around RM6,000–RM9,000). (2) Clear any high-interest debt (credit cards, personal loans). (3) Then invest. Even RM100–RM200/month in a diversified unit trust or index fund through Rakuten Trade, Moomoo, or a local platform compounds significantly over decades. Time in market matters more than amount invested — start small but start now.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "RM3,000 Salary Budget Plan Malaysia 2026 — How to Manage Your Money",
      description: "Comprehensive budget plan for a RM3,000 salary in Malaysia. Covers take-home pay after deductions, expense allocation across all categories, savings strategies, and how to progress toward financial goals.",
      url: PAGE_URL,
      datePublished: "2026-01-01",
      dateModified: "2026-06-22",
      author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "RM3000 Salary Budget Plan Malaysia", item: PAGE_URL },
      ],
    },
  ],
};

const budgetRows = [
  { category: "Room/apartment rental", amount: "RM700", pct: "26%", notes: "Room rental or shared apartment. Solo KL studio not feasible." },
  { category: "Food (cook at home)", amount: "RM350", pct: "13%", notes: "Self-cooked meals. Roughly RM12/day for ingredients." },
  { category: "Food (eat out)", amount: "RM150", pct: "6%", notes: "Occasional meals out, economy rice, mamak." },
  { category: "Transportation (car)", amount: "RM350", pct: "13%", notes: "Petrol RM150 + toll RM50 + car loan RM150 (if any)." },
  { category: "Utilities & internet", amount: "RM120", pct: "5%", notes: "Phone RM80 + shared utilities/internet RM40." },
  { category: "Insurance", amount: "RM150", pct: "6%", notes: "Medical card RM100 + life insurance RM50." },
  { category: "Groceries & personal care", amount: "RM150", pct: "6%", notes: "Shampoo, soap, laundry, household items." },
  { category: "Emergency fund savings", amount: "RM200", pct: "8%", notes: "Until you hit 3 months of expenses (~RM7,500)." },
  { category: "Entertainment & social", amount: "RM150", pct: "6%", notes: "Cinema, streaming, Grab, birthday gifts, etc." },
  { category: "Miscellaneous buffer", amount: "RM129", pct: "5%", notes: "Unplanned expenses, small repairs, etc." },
  { category: "TOTAL", amount: "RM2,649", pct: "100%", notes: "Matches take-home pay estimate." },
];

export default function Rm3000BudgetPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-violet-50 to-purple-50 border-b border-violet-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-violet-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">RM3,000 Salary Budget Plan Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              RM3,000 Salary Budget Plan Malaysia 2026
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              RM3,000 is a common starting salary for fresh graduates and junior workers in Malaysia. Here is exactly what your take-home pay looks like after deductions, and how to allocate it to live comfortably while saving and investing for the future.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">Budgeting · Personal Finance</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>Step 1: Know Your Actual Take-Home Pay</h2>
          <p>
            Before you can budget, you need to know what actually lands in your bank account. A RM3,000 gross salary is not RM3,000 in hand. Here are the standard deductions:
          </p>
          <ul>
            <li><strong>EPF (Employee Provident Fund)</strong>: 11% of gross salary = RM330/month. This goes into your retirement account — you will get it back, but not until retirement (or specific withdrawals).</li>
            <li><strong>SOCSO (Social Security Organisation)</strong>: 0.5% of gross salary (First Category, below age 60) = RM15/month. Covers you for employment injury and invalidity benefits.</li>
            <li><strong>EIS (Employment Insurance System)</strong>: 0.2% of gross salary = RM6/month. Provides income replacement if you lose your job.</li>
            <li><strong>PCB (Monthly Tax Deduction / Income Tax)</strong>: At RM3,000 gross with standard deductions, PCB is typically RM0–RM50/month for a single person. Use our <Link href="/pcb-calculator-malaysia">PCB Calculator Malaysia</Link> for the exact amount based on your reliefs and filing status.</li>
          </ul>
          <p>
            Total deductions: approximately RM351–RM401/month. <strong>Take-home pay: approximately RM2,599–RM2,649/month</strong>.
          </p>
          <p>
            Additionally, your employer contributes RM495/month (13% employer EPF) on your behalf — this goes into your EPF account too, making your total EPF contribution RM825/month. Your employer also pays RM87.50/month in SOCSO employer share and RM6/month in EIS employer share. These do not affect your take-home but are important to know.
          </p>

          <h2>A Realistic RM3,000 Salary Monthly Budget</h2>
          <p>
            This budget is designed for a single person living in the Klang Valley. Adjust for your actual location — costs are lower in second-tier cities and much lower in rural areas.
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-violet-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Category</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Amount</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">% of take-home</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Notes</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 last:border-0 hover:bg-violet-50/30 transition-colors ${row.category === "TOTAL" ? "font-semibold bg-violet-50/50" : ""}`}>
                    <td className="px-4 py-2.5 text-gray-700">{row.category}</td>
                    <td className="px-4 py-2.5 text-right text-gray-700">{row.amount}</td>
                    <td className="px-4 py-2.5 text-right text-gray-500">{row.pct}</td>
                    <td className="px-4 py-2.5 text-gray-500 text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The 50/30/20 Rule Adapted for Malaysia</h2>
          <p>
            The 50/30/20 budgeting rule suggests: 50% of take-home on needs, 30% on wants, 20% on savings and debt repayment. Adapted to Malaysian realities at RM2,649 take-home:
          </p>
          <ul>
            <li><strong>Needs (50% = RM1,325)</strong>: Rent/mortgage, utilities, food, transport, insurance, minimum loan repayments. This is tight in KL — room rental alone may consume RM700.</li>
            <li><strong>Wants (30% = RM795)</strong>: Dining out, entertainment, shopping, travel, subscriptions, social activities.</li>
            <li><strong>Savings (20% = RM530)</strong>: Emergency fund, investments, additional loan repayment. Note: EPF is already deducted — this 20% is on top of your EPF contributions.</li>
          </ul>
          <p>
            The 50/30/20 rule is a starting framework, not a rigid rule. In high-cost cities, needs often consume 60%+ of take-home and the savings rate must be defended by cutting wants. The most important principle is to pay yourself first — automate savings on the day you receive salary before discretionary spending can eat into it.
          </p>

          <h2>How to Increase Your Savings Rate on RM3,000</h2>
          <p>
            <strong>Reduce housing cost</strong>: Housing is the biggest lever. Choosing a RM500 room instead of a RM900 studio frees up RM400/month — RM4,800 per year. Considering housemates is not a downgrade; it is a strategic financial decision.
          </p>
          <p>
            <strong>Cook at home more</strong>: A lunch at a KL restaurant costs RM15–RM25. A home-cooked lunch costs RM4–RM6 in ingredients. Cooking 4 out of 5 weekday lunches and most dinners at home can save RM200–RM400/month versus eating out for every meal.
          </p>
          <p>
            <strong>Use public transport for daily commute</strong>: A monthly KL MRT/LRT pass costs approximately RM120–RM150. Petrol, toll, and parking for a daily Klang Valley commute by car can exceed RM400/month. The saving is RM250+/month and zero parking stress.
          </p>
          <p>
            <strong>Audit subscriptions</strong>: Netflix, Spotify, gym, Astro, cloud storage, various apps. Total up what you are paying. Cut anything you have not used in 30 days. RM100–RM200/month in subscriptions is common among young Malaysians.
          </p>

          <h2>Financial Goals to Prioritise at RM3,000</h2>
          <p>
            In order of priority for someone starting out at RM3,000/month:
          </p>
          <ol>
            <li><strong>3-month emergency fund</strong> (~RM7,500–RM9,000): Goal within 18–24 months at RM300–RM500/month savings. Read our <Link href="/guides/emergency-fund-malaysia">Emergency Fund Malaysia Guide</Link>.</li>
            <li><strong>Clear PTPTN or credit card debt</strong>: Pay off high-interest debt aggressively once you have your emergency buffer.</li>
            <li><strong>Medical insurance</strong>: A RM80–RM120/month medical card is one of the best uses of money at this salary level. One hospitalisation without insurance can wipe out years of savings.</li>
            <li><strong>Start investing RM100–RM200/month</strong>: Regular investment in diversified funds through Wahed, Rakuten, or ASNB (for Bumiputera members) starts compounding immediately. Start small — the habit matters more than the amount at this stage.</li>
          </ol>

          <h2>Using Salary Calculators to Plan Better</h2>
          <p>
            Understanding your exact deductions is the first step to better budgeting. Use our <Link href="/salary-calculator-malaysia">Salary Calculator Malaysia</Link> to see your precise EPF, SOCSO, EIS, and PCB deductions for RM3,000 (or any other salary). Our <Link href="/epf-calculator-malaysia">EPF Calculator</Link> shows how your RM330/month EPF contribution compounds over 30 years at historical dividend rates — the result might motivate you to value this &quot;forced saving&quot; even more.
          </p>
        </article>

        <FinancialDisclaimer />

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

        <AuthorCard />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
