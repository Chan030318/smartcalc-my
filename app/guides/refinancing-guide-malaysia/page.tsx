import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/refinancing-guide-malaysia`;

export const metadata: Metadata = {
  title: "Refinancing Guide Malaysia 2026 — When and How to Refinance Your Home Loan",
  description: "Should you refinance your home loan in Malaysia? When refinancing makes sense, how to calculate if you save money, lock-in period rules, cashout refinancing, and step-by-step process.",
  keywords: ["refinancing guide Malaysia 2026", "refinance home loan Malaysia", "refinance pinjaman rumah Malaysia", "cashout refinancing Malaysia", "when to refinance Malaysia", "housing loan refinancing Malaysia"],
  alternates: { canonical: "/guides/refinancing-guide-malaysia" },
  openGraph: {
    title: "Refinancing Guide Malaysia 2026 — When and How to Refinance Your Home Loan",
    description: "When refinancing your Malaysian home loan makes sense, how to calculate savings, and the step-by-step process.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Refinancing Guide Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Refinancing Guide Malaysia 2026", description: "When to refinance your home loan and how to calculate if it saves you money in Malaysia.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "When should I refinance my home loan in Malaysia?", a: "Refinancing makes sense when: (1) Current market interest rates are meaningfully lower than your existing loan rate (typically a reduction of 0.5%+ p.a. is worth considering); (2) You have a new income source or salary increase that now qualifies you for better rates; (3) You want to switch from a flexi-loan to a conventional loan or vice versa; (4) You want to release home equity through cashout refinancing for renovation, investment, or other needs; (5) Your lock-in period has expired (refinancing during lock-in incurs penalties). Do not refinance just because a banker calls you — always calculate the break-even period first." },
  { q: "What is a lock-in period for a home loan?", a: "A lock-in period (also called penalty period) is a contractual clause in Malaysian home loans that imposes a penalty if you fully settle or refinance the loan before a specified period, typically 3–5 years from the first drawdown date. Penalties range from 2%–3% of the outstanding loan amount. Example: RM400,000 outstanding loan, 3% penalty = RM12,000 penalty. Always check your loan agreement for the exact lock-in period before planning to refinance. After the lock-in period, you can refinance with no penalty (just normal legal and processing fees)." },
  { q: "How do I calculate if refinancing saves money?", a: "Step 1: Calculate your monthly savings. If current rate is 4.5% and new rate is 3.9% on RM400,000 outstanding (30 years remaining), monthly saving ≈ RM130. Step 2: Estimate refinancing costs (legal fees, stamp duty, valuation, processing) — typically RM5,000–RM12,000. Step 3: Break-even period = Total refinancing cost ÷ Monthly saving. Example: RM8,000 cost ÷ RM130/month = 62 months (5 years 2 months). If you plan to hold the property for more than 5 years, refinancing saves money over that horizon." },
  { q: "What is cashout refinancing in Malaysia?", a: "Cashout refinancing (or equity withdrawal refinancing) allows you to refinance your existing loan at a higher amount than your outstanding balance, receiving the difference as cash. Example: outstanding loan RM300,000, current property value RM600,000 (90% LTV = RM540,000 max loan). You can refinance at RM480,000 — borrowing RM180,000 more than your current balance — and receive RM180,000 cash (minus fees). This is commonly used for renovation, medical expenses, education, or investment funding. The additional borrowing increases your monthly repayment and total interest paid." },
  { q: "Does refinancing affect CCRIS?", a: "Yes. Refinancing creates a new loan application — a hard inquiry on your CCRIS. The new loan replaces the old loan. Your CCRIS will show the old loan as fully settled and the new loan as a new credit facility. If you apply to multiple banks simultaneously for refinancing comparisons, each application creates a separate CCRIS inquiry — visible to lenders. The practical impact: refinancing is generally credit-neutral or slightly positive (the new, smaller outstanding loan vs the older higher balance). It does not 'reset' your payment history — your clean payment record on the old loan remains on CCRIS for 12 months after settlement." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Refinancing Guide Malaysia 2026 — When and How to Refinance Your Home Loan", description: "Complete guide to home loan refinancing in Malaysia — when it makes sense, how to calculate break-even, lock-in period rules, cashout refinancing, and the application process.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Refinancing Guide Malaysia", item: PAGE_URL }] },
  ],
};

export default function RefinancingGuideMalaysiaPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 border-b border-rose-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-rose-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Refinancing Guide Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Refinancing Guide Malaysia 2026 — When and How to Refinance Your Home Loan</h1>
            <p className="text-gray-600 text-lg leading-relaxed">Refinancing can save tens of thousands of Ringgit over a home loan&apos;s lifetime — or cost you money if done at the wrong time. Here is how to tell the difference and how to refinance in Malaysia.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">Housing · Refinancing</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">10 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>What is Refinancing?</h2>
          <p>Refinancing means replacing your existing home loan with a new loan — typically from a different bank, at a different interest rate, or with different terms. The new bank pays off your old loan in full, and you begin making payments to the new bank. From your perspective, you have a new loan agreement, a new monthly instalment, and ideally a lower interest rate.</p>
          <p>Refinancing is not the same as a top-up loan (borrowing more from your existing bank on the same loan) or a second mortgage. It is a complete loan replacement.</p>

          <h2>The Break-Even Calculation</h2>
          <p>Refinancing is only worthwhile if the interest savings over your remaining tenure exceed the upfront costs. The break-even calculation:</p>
          <p><strong>Break-even months = Total refinancing cost ÷ Monthly interest saving</strong></p>
          <p>Example: Current loan — RM380,000 outstanding, 4.5% rate, 25 years remaining. New offer — 3.85%, same tenure. Monthly saving ≈ RM144. Refinancing cost (legal fees RM6,000 + stamp duty RM3,000 + valuation RM1,500 + processing RM500) = RM11,000. Break-even = RM11,000 ÷ RM144 = 76 months (6 years 4 months). If you hold the property for 7+ more years, refinancing saves you money. If you plan to sell in 3 years, don&apos;t refinance. Use our <Link href="/loan-calculator-malaysia">Loan Calculator</Link> to estimate monthly instalments at different rates.</p>

          <h2>Lock-In Period: The Key Gate</h2>
          <p>Most Malaysian home loans carry a lock-in period of 3–5 years during which you cannot settle or refinance the loan without paying a penalty (typically 2%–3% of outstanding balance). Check your loan agreement for the exact terms. The lock-in period restarts with each refinancing — meaning if you refinance to a new bank, you start a new 3–5 year lock-in period with that bank.</p>
          <p>Scenario: You refinance to a better rate but plan to sell the property 2 years later (within the new lock-in). You pay the penalty again at sale, negating the interest savings. Factor both the old and new lock-in periods into your break-even calculation.</p>

          <h2>Cashout Refinancing in Malaysia</h2>
          <p>Cashout refinancing releases the equity built up in your property. If your property has appreciated significantly since your purchase and you have repaid a portion of the original loan, the gap between current property value (×90% LTV) and your outstanding balance is available as cash via a cashout refinance.</p>
          <p>Common uses in Malaysia: renovation (increasing property value while extracting equity), children&apos;s education fees, medical expenses, or investment in additional assets. The cashout increases your loan amount and monthly repayment — ensure the higher instalment is within your DSR budget. Cashout refinancing should be approached carefully — you are using your home as collateral and increasing your debt.</p>

          <h2>Refinancing Process Step by Step</h2>
          <p>1. Check your lock-in status — review your original loan agreement or call your current bank. 2. Get a property valuation — request one from your current bank or any panel valuer. This tells you the current LTV basis for refinancing. 3. Get at least 3 refinancing quotes — approach 3 banks directly or use a mortgage broker who can approach multiple banks on your behalf. Compare effective interest rate (EIR), lock-in period, legal panel, and processing fees. 4. Apply to your chosen bank — submit income documents (3 months payslips, 6 months statements, EPF), property documents (SPA, loan agreement, land title), and CCRIS/CTOS consent. 5. Valuation + approval — bank commissions a new valuation. If approved, the loan offer letter is issued. 6. Instruct lawyer — your solicitor handles the settlement of the old loan and creation of the new charge on the property. 7. Drawdown — the new loan is disbursed to settle the old bank. New repayment schedule begins.</p>
          <p>Timeline: typically 6–12 weeks from application to first instalment on the new loan. For more on home loan basics, read <Link href="/guides/housing-loan-margin-of-finance-malaysia">Housing Loan Margin of Finance</Link> and our <Link href="/guides/what-is-dsr-malaysia">What is DSR guide</Link>.</p>
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
