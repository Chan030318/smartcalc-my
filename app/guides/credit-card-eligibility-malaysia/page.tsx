import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/credit-card-eligibility-malaysia`;

export const metadata: Metadata = {
  title: "Credit Card Eligibility Malaysia 2026 — Minimum Salary & Requirements",
  description: "Credit card eligibility requirements in Malaysia — minimum annual income, age, CCRIS and CTOS score requirements, and which credit card is best for your income level.",
  keywords: ["credit card eligibility Malaysia", "minimum salary credit card Malaysia", "credit card requirements Malaysia 2026", "apply credit card Malaysia income", "kad kredit kelayakan Malaysia"],
  alternates: { canonical: "/guides/credit-card-eligibility-malaysia" },
  openGraph: {
    title: "Credit Card Eligibility Malaysia 2026 — Minimum Salary & Requirements",
    description: "Minimum income, age, and credit score requirements to get a credit card in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Credit Card Eligibility Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Credit Card Eligibility Malaysia 2026", description: "Minimum salary and requirements for a Malaysian credit card.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the minimum salary to get a credit card in Malaysia?", a: "Bank Negara Malaysia (BNM) sets the minimum annual income for credit card eligibility at RM24,000 (RM2,000/month gross). This is the regulatory floor — some banks apply higher thresholds. Basic credit cards (e.g., Maybank 2 Gold, CIMB Platinum) typically require RM24,000–RM36,000 annual income. Premium and rewards cards (e.g., AmBank Visa Signature, Public Bank Visa Infinite) typically require RM60,000–RM120,000+ annual income. Entry-level credit cards with cashback features are available at the RM24,000–RM36,000 income tier." },
  { q: "What is the minimum age to apply for a credit card in Malaysia?", a: "The minimum age to be a primary credit card holder in Malaysia is 21 years old. Supplementary cardholders (add-ons on a primary account) can be as young as 18 years old. There is no upper age limit, but some banks have internal policies regarding applicants above 65–70 years old." },
  { q: "Does a bad CCRIS record prevent credit card approval?", a: "Yes, significantly. Issuers check CCRIS (Credit Reference Information System) before approving any credit card. A history of missed payments, defaults, or high credit utilisation will typically result in rejection. CCRIS shows 12 months of payment history for all credit facilities. A single 1-month late payment is usually overlooked by some banks but not others. Two or more consecutive missed payments within the past 12 months substantially reduces approval odds. Clearing all overdue amounts and waiting 6–12 months before applying again improves the picture." },
  { q: "How many credit cards can I have in Malaysia?", a: "Bank Negara Malaysia limits the total credit limit across all credit cards and charge cards to 2× your monthly gross income per issuer, subject to the overall credit limit cap of up to 2× annual income across all issuers. In practice, if you earn RM5,000/month, the aggregate credit limit BNM allows across all your cards is approximately RM120,000 (2× RM60,000 annual income). Individual issuers set their own limits within this framework. There is no specific cap on the number of cards — only on total credit limit." },
  { q: "What documents do I need to apply for a credit card in Malaysia?", a: "Standard documents for a Malaysian credit card application: (1) MyKad (NRIC) front and back, (2) latest 3 months' salary slips, (3) latest 3–6 months' bank statements showing salary credit, (4) latest EPF statement (for income verification), (5) Employment letter or confirmation letter (for new employees). For self-employed applicants: Business Registration Certificate (SSM), latest 2 years' audited accounts or income tax returns (Form B), and business bank statements." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Credit Card Eligibility Malaysia 2026 — Minimum Salary & Requirements", description: "Complete guide to credit card eligibility requirements in Malaysia, including minimum annual income by card tier, CCRIS requirements, age limits, and documentation needed.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Credit Card Eligibility Malaysia", item: PAGE_URL }] },
  ],
};

export default function CreditCardEligibilityPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-blue-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Credit Card Eligibility Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Credit Card Eligibility Malaysia 2026 — Minimum Salary &amp; Requirements</h1>
            <p className="text-gray-600 text-lg leading-relaxed">Getting approved for a credit card in Malaysia depends on your income, credit history, age, and documentation. Here is what each bank tier requires and how to maximise your approval chances.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Credit · Cards</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>BNM&apos;s Credit Card Income Requirements</h2>
          <p>Bank Negara Malaysia (BNM) sets the minimum annual income for credit card eligibility at <strong>RM24,000 per year (RM2,000/month gross)</strong>. This regulatory minimum applies to all Malaysian-licensed credit card issuers. Below this income threshold, credit cards cannot be issued — personal financing products with a debit card may be offered instead.</p>
          <p>The RM24,000 minimum was last revised in 2011 and has not changed. However, individual banks can (and do) set higher internal minimums, especially for premium and rewards cards.</p>

          <h2>Credit Card Tiers by Annual Income</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-blue-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-blue-100">Card Tier</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-blue-100">Min. Annual Income</th><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-blue-100">Examples</th></tr></thead>
              <tbody>
                {[
                  ["Entry / Classic", "RM24,000–RM36,000", "Maybank 2 Gold, CIMB Visa Classic"],
                  ["Gold / Standard Rewards", "RM36,000–RM60,000", "Public Bank Visa Gold, AmBank Gold"],
                  ["Platinum / Premium", "RM60,000–RM96,000", "Maybank Visa Platinum, CIMB Platinum"],
                  ["Signature / World", "RM96,000–RM120,000", "AmBank Visa Signature, HSBC Premier"],
                  ["Infinite / Exclusive", "RM120,000+", "Public Bank Visa Infinite, Citi Prestige"],
                ].map(([tier, income, ex], i) => (
                  <tr key={i} className="border-b border-gray-50"><td className="px-4 py-2.5 text-gray-700 font-medium">{tier}</td><td className="px-4 py-2.5 text-center text-gray-600">{income}</td><td className="px-4 py-2.5 text-gray-600">{ex}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How Credit History Affects Approval</h2>
          <p>Beyond income, banks check your credit history through CCRIS (Central Credit Reference Information System, managed by BNM) and sometimes CTOS. CCRIS shows all your credit facilities (loans, credit cards, financing) and 12 months of payment history for each.</p>
          <p>What banks look for in CCRIS: zero accounts with payment overdue by 2+ months in the past 12 months; total debt commitments that leave reasonable headroom within your income; no accounts in "Special Attention" or legal action status. One 1-month late payment in the past year is often overlooked but noted. Defaults, bankruptcies, or legal actions are very serious and may result in automatic rejection regardless of income.</p>
          <p>Your CTOS score (ranging from 300–850) is also checked — a score below 550 significantly reduces approval chances. Improve your score before applying if needed. Read our <Link href="/guides/how-to-improve-ctos-score-malaysia">guide on improving your CTOS score</Link> and <Link href="/guides/how-to-check-ccris-malaysia">how to check your CCRIS report</Link>.</p>

          <h2>Best Credit Cards by Income Level</h2>
          <p><strong>RM2,000–RM3,000/month:</strong> Focus on low-fee or no-annual-fee cards with cashback on everyday spending. Maybank 2 Gold Visa (waivable annual fee, 5% weekend cashback) and CIMB Visa Classic are solid starting points. Avoid premium cards with high annual fees you can't offset with rewards.</p>
          <p><strong>RM3,000–RM6,000/month:</strong> This range opens up strong cashback and petrol cards. RHB Visa Signature, HSBC Amanah MPower, and the Maybank 2 Platinum all offer competitive rewards. Look for cards matching your biggest spending categories (petrol, groceries, dining, online shopping).</p>
          <p><strong>RM6,000+/month:</strong> Premium travel and rewards cards become viable. AmBank Visa Signature, Citi PremierMiles, and the UOB One Card offer lounge access, travel miles, or high cashback rates that justify annual fees. Compare benefits against the annual fee before committing.</p>

          <h2>How to Maximise Your Approval Chances</h2>
          <p>Apply for a card within your income tier — applying for a Visa Infinite on a RM3,000 salary is a waste of an application and a hard inquiry on your CCRIS. Fix any CCRIS issues 6 months before applying — settle overdue amounts, bring all accounts current. Apply with your salary-crediting bank first — they have the most data on your actual cashflow. Keep your credit utilisation (outstanding balance ÷ total credit limit) below 30%. Avoid applying for multiple credit products within a short period — each application is a CCRIS inquiry that is visible to subsequent lenders for 12 months.</p>
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
