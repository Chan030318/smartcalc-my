import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-much-emergency-fund-malaysia`;

export const metadata: Metadata = {
  title: "How Much Emergency Fund Do I Need in Malaysia? — 2026 Guide",
  description: "How to calculate the right emergency fund size for your situation in Malaysia — 3 months vs 6 months vs more, where to keep it, and how to build it on a Malaysian salary.",
  keywords: ["how much emergency fund Malaysia", "emergency fund Malaysia 2026", "dana kecemasan berapa Malaysia", "emergency savings Malaysia", "3 months expenses Malaysia", "emergency fund calculator Malaysia"],
  alternates: { canonical: "/guides/how-much-emergency-fund-malaysia" },
  openGraph: {
    title: "How Much Emergency Fund Do I Need in Malaysia? — 2026 Guide",
    description: "Calculate the right emergency fund size for your Malaysian lifestyle, where to keep it, and how to build it fast.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How Much Emergency Fund Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "How Much Emergency Fund Do I Need Malaysia?", description: "3 months vs 6 months emergency fund — how to calculate the right amount for Malaysia.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "How many months of expenses should my emergency fund cover?", a: "The standard advice is 3–6 months of essential monthly expenses. 3 months is the minimum for stable, employed Malaysians with dual income or a strong family safety net. 6 months is appropriate for single-income households, single people without family support, freelancers, gig workers, business owners, or those in volatile industries. 9–12 months is prudent for self-employed Malaysians with irregular income, or those in high-risk industries like hospitality, construction, or retail where layoffs are more common in downturns." },
  { q: "How do I calculate my emergency fund target?", a: "List your essential monthly expenses only (not wants): rent/mortgage, car loan, utilities, groceries, minimum debt payments, insurance premiums, children's school fees, and medicine/medical costs. Exclude discretionary spending (entertainment, dining out, holidays). Multiply the essential monthly total by your target months (3, 6, or 9). Example: RM3,500 essential expenses × 6 months = RM21,000 target emergency fund. Do not include EPF contributions or annual expenses that would automatically stop if you lost income." },
  { q: "Where should I keep my emergency fund in Malaysia?", a: "Your emergency fund must be in a liquid, safe, zero-loss account — not in investments that can fall in value. Best options for Malaysian emergency funds: (1) High-yield savings accounts — GXBank, CIMB OCTO (offering 3%–4.5% p.a. with instant access); (2) Money market funds — Maybank Cash Management Account, Public Mutual Money Market, or Fundsupermart's liquid funds (3.5%–4.5% p.a., 1–2 business days withdrawal); (3) Standard savings account or fixed deposit (lower rate but fully accessible). Avoid keeping it in investments, unit trusts with exit charges, or EPF (which is illiquid)." },
  { q: "How long does it take to build a 6-month emergency fund?", a: "At a RM21,000 target (RM3,500 expenses × 6 months), and saving RM500/month: 42 months (3.5 years). Saving RM1,000/month: 21 months. Saving RM1,500/month: 14 months. Savings rate matters enormously. If you allocate a fixed percentage of net salary to emergency savings first (the 'pay yourself first' principle), you reach your target without the money being 'accidentally spent'. Most financial planners suggest allocating 10%–20% of net salary to emergency savings until the target is reached." },
  { q: "Should I invest my emergency fund for higher returns?", a: "No. The purpose of an emergency fund is capital preservation and instant liquidity, not return maximisation. If your emergency fund is in stocks or equity unit trusts, a market downturn may coincide with your emergency — exactly when you can least afford a 20%–30% loss in value. The 3%–4.5% available in money market funds and digital savings accounts today is an acceptable trade-off for guaranteed access to your full balance. Think of the emergency fund as insurance cost, not an investment." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "How Much Emergency Fund Do I Need in Malaysia? — 2026 Guide", description: "Guide to calculating the right emergency fund size for Malaysian households — 3 vs 6 months expenses, where to keep the fund, and how to build it systematically on a Malaysian income.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "How Much Emergency Fund Malaysia", item: PAGE_URL }] },
  ],
};

export default function HowMuchEmergencyFundMalaysiaPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-cyan-50 to-teal-50 border-b border-cyan-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-cyan-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">How Much Emergency Fund Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">How Much Emergency Fund Do I Need in Malaysia? — 2026 Guide</h1>
            <p className="text-gray-600 text-lg leading-relaxed">Your emergency fund is the financial foundation everything else is built on. Too little and a job loss or medical bill derails your finances. Here is how to calculate the right amount for your Malaysian situation.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">Emergency Fund · Savings</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Why an Emergency Fund is Non-Negotiable</h2>
          <p>The COVID-19 pandemic (2020–2021) and the resultant MCO period exposed the financial fragility of many Malaysian households — surveys found that a large proportion of Malaysians could not sustain their expenses for more than 3 months without income. An emergency fund is the difference between a financial setback (inconvenient but manageable) and a financial crisis (requiring high-interest debt or forced asset liquidation).</p>
          <p>Emergencies that drain savings faster than most people expect: sudden job loss (retrenchment notice periods are often 1–3 months during which income stops), unexpected medical bills (SOCSO and EPF i-Sinar help but take time to process), major car or home repairs, family members needing urgent financial support. An emergency fund means you handle these without going into credit card debt at 18% annual interest.</p>

          <h2>3 Months vs 6 Months: Which Do You Need?</h2>
          <p><strong>3 months emergency fund is appropriate if:</strong> You have a stable government or established private sector job with long notice periods; you have a working spouse or partner as a second income; you have family who can lend you money interest-free; your fixed expenses are low relative to your income; your industry is stable and in-demand (healthcare, essential services, tech).</p>
          <p><strong>6+ months emergency fund is appropriate if:</strong> You are a sole income earner for your household; you are self-employed, a freelancer, or gig worker with irregular income; you work in an industry with high retrenchment risk (hospitality, retail, media, construction); you are starting a business; you have dependents (children, elderly parents) with additional needs; you have ongoing medical conditions with regular treatment costs.</p>

          <h2>Calculate Your Emergency Fund Target</h2>
          <p>Step 1: List your <em>essential</em> monthly expenses only:</p>
          <ul>
            <li>Rent or mortgage instalment</li>
            <li>Car loan instalment + petrol + road tax/insurance monthly equivalent</li>
            <li>Utilities (electricity, water, internet, phone)</li>
            <li>Groceries and basic household supplies</li>
            <li>Minimum payments on all debt (credit cards, personal loans, PTPTN)</li>
            <li>Insurance premiums (life, health, critical illness)</li>
            <li>Children&apos;s school fees (if applicable)</li>
            <li>Regular medical expenses or prescriptions</li>
          </ul>
          <p>Step 2: Total these up. Exclude: discretionary dining, entertainment, clothing shopping, holidays, subscriptions. Step 3: Multiply by 3 or 6 (your target months).</p>
          <p>Example: RM2,000 rent + RM800 car + RM350 utilities + RM500 groceries + RM300 debt minimums + RM150 insurance = RM4,100 essential monthly expenses. Target emergency fund (6 months) = RM24,600.</p>

          <h2>Best Places to Keep Your Emergency Fund in Malaysia</h2>
          <p><strong>Money Market Funds (Recommended):</strong> Offered by Public Mutual, Maybank Asset Management, and through platforms like Fundsupermart and StashAway Simple. Returns: 3.5%–4.5% p.a. Withdrawal: 1–2 business days. Capital is not guaranteed but money market funds have never lost capital in Malaysia's history. Minimum investment: from RM1,000.</p>
          <p><strong>High-yield Digital Savings:</strong> GXBank and BigPay offer 3%–4.5% on savings with instant access via app. FDIC-equivalent PIDM coverage up to RM250,000. Ideal for the most liquid portion of your emergency fund.</p>
          <p><strong>Fixed Deposits (Short-term, 1–3 months):</strong> Traditional banks offer 2.8%–3.9% for 12-month FDs. Accessible after the term with minor early withdrawal penalties. Good for a portion of the fund but not the whole amount — you want some instantly accessible.</p>
          <p>Read about specific accounts in our <Link href="/guides/best-savings-accounts-malaysia">Best Savings Accounts Malaysia guide</Link>. For a broader context on building emergency savings as part of overall financial planning, see our <Link href="/guides/emergency-fund-malaysia">Emergency Fund Malaysia guide</Link>.</p>
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
