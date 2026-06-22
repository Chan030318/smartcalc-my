import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/housing-loan-margin-of-finance-malaysia`;

export const metadata: Metadata = {
  title: "Housing Loan Margin of Finance Malaysia — LTV Rules Explained 2026",
  description: "What is the margin of finance (LTV) for home loans in Malaysia? 90% for first property, 70% for third — BNM rules, how it affects your down payment, and exceptions for affordable housing.",
  keywords: ["margin of finance housing loan Malaysia", "LTV home loan Malaysia", "loan to value ratio Malaysia", "first property 90% loan Malaysia", "bank negara housing loan rules", "kadar margin pembiayaan rumah Malaysia"],
  alternates: { canonical: "/guides/housing-loan-margin-of-finance-malaysia" },
  openGraph: {
    title: "Housing Loan Margin of Finance Malaysia — LTV Rules Explained 2026",
    description: "BNM's LTV rules for home loans in Malaysia — 90% for first property, 70% for third — and how it affects your down payment.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Housing Loan Margin of Finance Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Housing Loan Margin of Finance Malaysia", description: "LTV rules and down payment requirements for Malaysian home loans explained.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the margin of finance for a first home in Malaysia?", a: "For your first and second residential property in Malaysia, banks can finance up to 90% of the property value (90% margin of finance or 90% LTV). The buyer must provide a 10% down payment. For your third and subsequent residential properties, the maximum margin of finance is 70% — meaning a 30% down payment is required. This BNM ruling has been in place since 2010 to cool property speculation. The 90% limit applies regardless of property price for first and second properties." },
  { q: "Can I get 100% financing in Malaysia?", a: "The standard maximum is 90% LTV for first and second properties under BNM guidelines. However, specific government schemes offer 100% financing for eligible buyers. The My First Home Scheme (Skim Rumah Pertamaku or SRP) allows 100% financing for properties up to RM300,000 for buyers with income ≤RM5,000/month (or RM10,000 combined for couples). Some banks also offer flexi packages where legal fees and stamp duty are folded into the loan, effectively financing more than 90% of the property price (though technically still 90% of the property value)." },
  { q: "How is the margin of finance calculated?", a: "The margin of finance is calculated against the lower of the purchase price or the bank's valuation of the property. Example: You agree to buy a property at RM500,000, but the bank's valuer values it at RM480,000. The 90% loan is calculated on RM480,000 = RM432,000 maximum loan. You pay the difference: RM500,000 − RM432,000 = RM68,000 cash (instead of just the expected RM50,000 at 10%). This discrepancy can surprise buyers who do not commission an independent valuation before agreeing on the purchase price." },
  { q: "Does the margin of finance affect investment properties?", a: "Yes — and it is a major planning consideration. If you own one property already and purchase a second (whether owner-occupied or investment), the maximum LTV is still 90%. But if you purchase a third property, the LTV drops to 70% (30% down payment required). The purpose is to reduce speculative buying. For property investors planning to hold 3+ properties, the 30% down payment requirement on third-property-onwards significantly increases the capital requirement for each additional purchase." },
  { q: "Can I increase the loan amount after taking a home loan?", a: "Yes, through a top-up loan or a second charge on the property, subject to the property's current market value and your DSR at the time of application. The combined outstanding loan after the top-up must still respect the LTV limit (based on current valuation). Top-up loans are common for renovation funding. Alternatively, refinancing (converting to a new loan with a new bank at current rates, potentially with a higher loan amount) is another route if property has appreciated. Read our <a href='/guides/refinancing-guide-malaysia'>Refinancing Guide Malaysia</a> for how this works." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Housing Loan Margin of Finance Malaysia — LTV Rules Explained 2026", description: "Comprehensive guide to Bank Negara Malaysia's loan-to-value (LTV) rules for housing loans — 90% for first two properties, 70% for third, government scheme exceptions, and practical impact on down payment planning.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Housing Loan Margin of Finance Malaysia", item: PAGE_URL }] },
  ],
};

export default function HousingLoanMarginOfFinancePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 border-b border-purple-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-purple-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Housing Loan Margin of Finance Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Housing Loan Margin of Finance Malaysia — LTV Rules Explained 2026</h1>
            <p className="text-gray-600 text-lg leading-relaxed">How much a Malaysian bank will lend you for a property is governed by BNM&apos;s margin of finance (LTV) rules. First property gets 90% financing — but third property onwards drops to 70%. Here is how it works and how to plan around it.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Housing · Loans</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>What is Margin of Finance (LTV)?</h2>
          <p>Margin of finance (also called Loan-to-Value ratio or LTV) is the percentage of a property&apos;s value that a bank is willing to lend. If a property is worth RM500,000 and the bank offers 90% LTV, the bank lends RM450,000 and you must provide RM50,000 (10%) as a down payment from your own funds.</p>
          <p>In Malaysia, the margin of finance for residential properties is regulated by Bank Negara Malaysia (BNM) under the Financial Services Act 2013. Individual banks can apply stricter internal limits (they may offer only 80% on certain property types or in certain market conditions), but they cannot exceed BNM&apos;s maximum.</p>

          <h2>BNM&apos;s LTV Rules at a Glance</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-purple-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Property Number</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Maximum LTV</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Min. Down Payment</th></tr></thead>
              <tbody>
                {[
                  ["1st residential property", "90%", "10%"],
                  ["2nd residential property", "90%", "10%"],
                  ["3rd+ residential property", "70%", "30%"],
                  ["Non-residential (commercial)", "No BNM cap", "Bank determines"],
                ].map(([prop, ltv, dp], i) => (
                  <tr key={i} className="border-b border-gray-50"><td className="px-4 py-2.5 text-gray-700">{prop}</td><td className="px-4 py-2.5 text-center text-gray-600 font-medium">{ltv}</td><td className="px-4 py-2.5 text-center text-gray-600">{dp}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How Banks Count &quot;Number of Properties&quot;</h2>
          <p>The LTV limit applies to the number of outstanding residential property loans you currently have, not the number of properties you have ever owned. If you previously owned a property that you have fully paid off or sold, it does not count toward the LTV restriction. The bank checks your CCRIS to see how many active residential property loans exist when you apply.</p>
          <p>A fully paid-off home is not counted — even if it is still in your name. A jointly-owned property (with your spouse) counts as one property loan for both parties. Two co-borrowers applying for a joint loan have the property count assessed based on each individual&apos;s existing outstanding residential loans. If one partner already has 2 outstanding loans, the joint application may still get 90% LTV if the other partner has none — each bank interprets this differently.</p>

          <h2>The 70% Rule for Third Properties</h2>
          <p>The 70% LTV cap for third and subsequent properties was introduced by BNM in November 2010 specifically to curb property speculation. It requires a 30% cash down payment — which for a RM500,000 property means RM150,000 in cash, vs only RM50,000 for a first or second property.</p>
          <p>This is a significant barrier to casual property investment and is specifically designed to be one. For serious property investors, the 30% down payment rule means each additional property requires substantial capital. It also means the investor&apos;s DSR must be strong enough to service all outstanding loans. Use our <Link href="/dsr-calculator-malaysia">DSR Calculator</Link> to see if your income supports multiple property loans.</p>

          <h2>Valuation vs Purchase Price</h2>
          <p>The LTV is calculated against the <strong>lower of purchase price or bank valuation</strong>. If you overpay for a property (above market value), the bank lends against market value, and you must cover the difference out-of-pocket in addition to the down payment. Example: purchase price RM520,000, bank valuation RM480,000. The 10% down payment on the valuation is RM48,000. But you also pay the RM40,000 price-vs-valuation gap in cash. Total cash needed: RM88,000 + legal fees + insurance, not just RM52,000.</p>
          <p>This is why it is critical to request a bank valuation before finalising any property purchase offer above your estimate of market value. For the full property purchase process, read our <Link href="/guides/first-home-buyer-guide-malaysia">First Home Buyer Guide</Link> and for refinancing implications, our <Link href="/guides/refinancing-guide-malaysia">Refinancing Guide Malaysia</Link>.</p>
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
