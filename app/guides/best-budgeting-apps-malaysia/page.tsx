import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/best-budgeting-apps-malaysia`;

export const metadata: Metadata = {
  title: "Best Budgeting Apps Malaysia 2026 — Top Personal Finance Apps Compared",
  description: "The best budgeting and personal finance apps for Malaysians in 2026. Compare Wallet by BudgetBakers, Money Manager, Spendee, and local alternatives — features, pricing, and which suits your budgeting style.",
  keywords: ["best budgeting apps Malaysia 2026", "personal finance app Malaysia", "money management app Malaysia", "budgeting app Ringgit", "free budgeting app Malaysia", "app kewangan peribadi Malaysia"],
  alternates: { canonical: "/guides/best-budgeting-apps-malaysia" },
  openGraph: {
    title: "Best Budgeting Apps Malaysia 2026 — Top Finance Apps Compared",
    description: "Top budgeting apps for Malaysians compared — features, pricing, and the best app for your money management style.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Budgeting Apps Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Best Budgeting Apps Malaysia 2026", description: "Top budgeting and personal finance apps for Malaysians compared.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the best free budgeting app in Malaysia?", a: "For free budgeting in Malaysia, Money Manager Expense & Budget (by Realbyte) is widely recommended for its simple transaction tracking without a subscription requirement. Wallet by BudgetBakers offers a generous free tier. Many Malaysians also use a combination of their bank's app (Maybank MAE, CIMB Clicks, RHB Now all have basic spending summaries) and a dedicated tracker. For zero-cost budgeting, a simple Google Sheets or Excel spreadsheet with categories for income, fixed expenses, variable spending, and savings can be highly effective." },
  { q: "Which budgeting app works with Malaysian banks?", a: "As of 2026, direct bank feed integration (automatic transaction import) remains limited for Malaysian banks compared to the US or UK markets. Wallet by BudgetBakers supports some Malaysian bank connections via Open Banking where available. Most Malaysian users manually enter transactions or import CSV bank statements. Wally and Money Manager are popular for manual tracking with good Ringgit support. Check each app's current integration list as connectivity changes frequently." },
  { q: "Should I use the 50/30/20 rule for budgeting in Malaysia?", a: "The 50/30/20 rule (50% needs, 30% wants, 20% savings/debt) is a reasonable starting framework for Malaysian budgets. However, it needs adjustment: EPF contributions (11% of gross) come out before you receive your net salary, so your effective savings rate is already higher than it appears from your take-home pay. In high-cost cities like KL, housing alone can exceed 30% of take-home pay. Many Malaysian financial planners suggest a modified 60/20/20 (60% expenses, 20% wants, 20% savings) or the more aggressive 50/20/30 flipped for higher savers." },
  { q: "Are there any Malaysian-made budgeting apps?", a: "The Malaysian fintech ecosystem has limited standalone budgeting apps compared to US/UK markets. However, several Malaysian bank super-apps include budgeting features: Maybank MAE categorises transactions and shows spending summaries; CIMB Clicks has expense tracking; GXBank (backed by Grab) includes savings goals and spending insights. For a dedicated budgeting experience, international apps like Money Manager, Wallet, and YNAB (You Need A Budget) are commonly used by Malaysian users and support RM (Ringgit) as currency." },
  { q: "What is YNAB and is it worth it for Malaysians?", a: "YNAB (You Need A Budget) is a well-regarded budgeting app based on zero-based budgeting — every Ringgit is assigned a job. It costs approximately USD 14.99/month or USD 109/year (approximately RM65/month or RM500/year). Many heavy users report it pays for itself in reduced overspending. The main limitation for Malaysians: no direct Malaysian bank integration, so all transactions must be manually entered or imported via CSV. YNAB is best suited for people committed to budgeting as a discipline, not casual trackers. A 34-day free trial is available." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Best Budgeting Apps Malaysia 2026 — Top Personal Finance Apps Compared", description: "Review and comparison of the best budgeting and personal finance apps for Malaysians in 2026, including free options and premium apps that support Ringgit.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Best Budgeting Apps Malaysia", item: PAGE_URL }] },
  ],
};

export default function BestBudgetingAppsMalaysiaPage() {
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
              <span className="text-gray-500">Best Budgeting Apps Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Best Budgeting Apps Malaysia 2026 — Top Personal Finance Apps Compared</h1>
            <p className="text-gray-600 text-lg leading-relaxed">The right budgeting app makes tracking your Ringgit effortless. Here are the top apps for Malaysian users in 2026, compared by features, Malaysian bank support, and price.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">Budgeting · Apps</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Why Most Malaysians Don&apos;t Budget (and Why Apps Help)</h2>
          <p>Research consistently shows that people who track their spending save significantly more than those who don't — not because tracking creates money, but because awareness changes behaviour. Seeing that you spent RM800 on food delivery last month is the nudge that makes you cook more. Budgeting apps lower the friction of tracking to the point where it becomes a daily habit rather than a monthly chore.</p>
          <p>The challenge for Malaysian users: most popular budgeting apps are designed for US/UK markets, with limited support for Malaysian banks' direct feeds. However, the best apps work well with manual entry or CSV import, and some now support Malaysian institutions.</p>

          <h2>Top Budgeting Apps for Malaysians in 2026</h2>

          <h3>1. Money Manager Expense &amp; Budget (Realbyte)</h3>
          <p><strong>Best for:</strong> Manual transaction tracking with a clean interface. <strong>Price:</strong> Free (premium upgrade available). <strong>Platform:</strong> iOS and Android.</p>
          <p>Money Manager is widely used in Malaysia for its simple, intuitive transaction entry. You categorise each expense manually — food, transport, entertainment, utilities — and the app generates spending reports. No bank feed required. The free version covers most needs. The double-entry accounting feature appeals to more financially-minded users. Ringgit (RM) is a supported currency. Available in both English and Bahasa Malaysia.</p>

          <h3>2. Wallet by BudgetBakers</h3>
          <p><strong>Best for:</strong> Users who want (or can get) automatic bank sync. <strong>Price:</strong> Free tier + Premium (~RM25/month). <strong>Platform:</strong> iOS, Android, Web.</p>
          <p>Wallet supports Open Banking connections where available and manual CSV import for Malaysian banks. Its budgeting features are comprehensive — set limits by category, track across multiple accounts, and get insights into spending trends. The free tier allows manual tracking with limited accounts; premium unlocks bank sync (where supported), family sharing, and advanced analytics.</p>

          <h3>3. Spendee</h3>
          <p><strong>Best for:</strong> Couples or families tracking shared finances. <strong>Price:</strong> Free + Premium (~RM20/month). <strong>Platform:</strong> iOS, Android.</p>
          <p>Spendee's shared wallet feature makes it popular among couples and housemates tracking joint expenses. The interface is visual and clean — spending is shown in colourful pie charts and trends over time. Like Wallet, manual entry works well and some bank connections are available. Currency support includes MYR.</p>

          <h3>4. YNAB (You Need A Budget)</h3>
          <p><strong>Best for:</strong> Serious budgeters who want a methodology, not just tracking. <strong>Price:</strong> ~RM65/month or ~RM500/year. <strong>Platform:</strong> iOS, Android, Web.</p>
          <p>YNAB is the premium choice for committed budgeters. Its zero-based budgeting philosophy — assign every Ringgit a job before the month starts — is credited by many users with dramatically reducing spending and accelerating savings. No Malaysian bank integration, so all transactions are entered manually or imported. The price is the main barrier, though the trial is generous at 34 days.</p>

          <h3>5. Maybank MAE &amp; Bank Super-Apps</h3>
          <p><strong>Best for:</strong> Passive spending tracking with zero setup. <strong>Price:</strong> Free. <strong>Platform:</strong> iOS, Android.</p>
          <p>If your primary bank is Maybank, the MAE app automatically categorises your transactions and shows spending summaries without any manual input. CIMB Clicks and RHB Now have similar basic expense tracking features. These are not full budgeting apps but serve well as a starting point. Limitation: they only show transactions in that specific bank — a full financial picture requires either consolidation manually or a dedicated app.</p>

          <h2>Which Budgeting App Should You Choose?</h2>
          <p>The best budgeting app is the one you will actually use. If you are disciplined with manual entry: Money Manager (free) or YNAB (paid). If you want automation: Wallet Premium when/if your bank is supported. If you share finances with a partner: Spendee. If you are just starting out: your bank's built-in expense tracking + a simple Google Sheet.</p>
          <p>Whatever app you choose, pair it with our free calculators: use the <Link href="/salary-calculator-malaysia">Salary Calculator</Link> to see your take-home pay after EPF, SOCSO, and PCB deductions — then budget from the net figure rather than gross. Our <Link href="/guides/rm3000-salary-budget-plan-malaysia">RM3,000 Salary Budget Plan</Link> gives you a concrete category breakdown to plug into your chosen app.</p>
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
