import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/car-loan-eligibility-malaysia`;

export const metadata: Metadata = {
  title: "Car Loan Eligibility Malaysia 2026 — How Much Can You Borrow?",
  description:
    "Find out how banks assess car loan eligibility in Malaysia. Covers DSR calculation, minimum salary, OTR vs loan amount, hire purchase rates, new vs used car loans, and tips to improve your approval chances.",
  keywords: [
    "car loan eligibility Malaysia",
    "hire purchase Malaysia 2026",
    "car loan Malaysia calculator",
    "minimum salary for car loan Malaysia",
    "car loan approval Malaysia",
    "kereta loan kelayakan Malaysia",
    "hire purchase interest rate Malaysia",
  ],
  alternates: { canonical: "/guides/car-loan-eligibility-malaysia" },
  openGraph: {
    title: "Car Loan Eligibility Malaysia 2026 — How Much Can You Borrow?",
    description: "How banks assess car loan eligibility in Malaysia — DSR, minimum salary, hire purchase rates, and approval tips.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Car Loan Eligibility Malaysia 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Loan Eligibility Malaysia 2026 — Hire Purchase Guide",
    description: "How much car loan can you get in Malaysia? DSR, rates, and approval tips explained.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the minimum salary to get a car loan in Malaysia?",
    a: "There is no official minimum salary set by Bank Negara Malaysia for car loans. However, banks typically require that your total monthly debt instalments (including the new car loan) do not exceed 60–70% of your gross monthly income (DSR). For a RM800/month car instalment, you would generally need a gross salary of at least RM2,300–RM2,700. For national car brands, some banks offer schemes with lower income thresholds for first-time borrowers.",
  },
  {
    q: "What is the hire purchase interest rate in Malaysia?",
    a: "Car loans in Malaysia are structured as hire purchase (HP) agreements, not simple interest loans. HP uses a flat interest rate applied to the original loan amount — not a reducing balance rate. Current hire purchase flat rates typically range from 2.8% to 3.7% per annum depending on the bank, car brand, loan tenure, and your credit profile. The flat rate translates to an effective annual rate roughly double the stated flat rate.",
  },
  {
    q: "What is the maximum tenure for a car loan in Malaysia?",
    a: "Bank Negara Malaysia caps the maximum hire purchase tenure at 9 years (108 months) for new cars and 7 years (84 months) for used cars. In practice, most banks offer up to 7 years for new cars and 5 years for used cars depending on the vehicle age. Longer tenures reduce monthly instalments but significantly increase total interest paid.",
  },
  {
    q: "Can I get a car loan with a bad CCRIS record?",
    a: "It is difficult but not impossible. Banks will check your CCRIS and CTOS before approving a hire purchase application. Missed payments, high outstanding balances, or existing defaults significantly reduce your chances. Some banks may still approve with a higher interest rate or require a guarantor. Improving your credit record before applying — by settling arrears and maintaining 6+ months of clean repayments — is the most reliable approach.",
  },
  {
    q: "Should I choose a shorter or longer loan tenure for my car?",
    a: "A shorter tenure means higher monthly instalments but lower total interest cost. A longer tenure means lower monthly instalments but significantly more total interest paid over the life of the loan. For example, a RM80,000 loan at 3.0% flat rate: over 5 years, the total interest is RM12,000; over 9 years, the total interest is RM21,600 — 80% more interest for the same loan. Choose the shortest tenure your DSR comfortably allows.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Car Loan Eligibility Malaysia 2026 — How Much Can You Borrow?",
      description: "Complete guide to car loan (hire purchase) eligibility in Malaysia. DSR calculation, hire purchase rates, tenure options, new vs used car loans, and tips to improve approval chances.",
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
        { "@type": "ListItem", position: 3, name: "Car Loan Eligibility Malaysia", item: PAGE_URL },
      ],
    },
  ],
};

export default function CarLoanEligibilityPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-orange-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Car Loan Eligibility Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Car Loan Eligibility Malaysia 2026 — How Much Can You Borrow?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Everything you need to know about getting a car loan (hire purchase) in Malaysia — how banks assess eligibility, what the flat interest rate really means, and how to choose the right tenure.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Car · Hire Purchase</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>How Car Loans Work in Malaysia (Hire Purchase)</h2>
          <p>
            Car financing in Malaysia is structured as a hire purchase (HP) agreement under the Hire-Purchase Act 1967 — not as a conventional loan. Under hire purchase, the bank purchases the vehicle and hires it to you. You make monthly instalments until the final payment, at which point ownership transfers to you. The practical difference from a mortgage is that hire purchase uses a <strong>flat interest rate</strong>, not a reducing balance rate.
          </p>
          <p>
            A flat rate means interest is calculated on the full original loan amount throughout the tenure — not the declining outstanding balance. This makes the effective interest rate roughly double the stated flat rate. A 3% flat rate on a 7-year hire purchase is approximately equivalent to a 5.7%–6.0% effective annual rate. Always compare loans using the effective rate, not the flat rate headline.
          </p>

          <h2>How Banks Assess Car Loan Eligibility</h2>
          <p>
            When you apply for a hire purchase, the bank evaluates three main areas:
          </p>
          <p>
            <strong>1. Debt Service Ratio (DSR)</strong>: The most important factor. Your total monthly debt commitments — including the proposed car instalment — should not exceed 60–70% of your gross monthly income. Banks calculate this from your existing commitments (home loan, credit cards, personal loans, PTPTN, other car loans) plus the new instalment. Use our <Link href="/dsr-calculator-malaysia">DSR Calculator</Link> to check your position.
          </p>
          <p>
            <strong>2. Credit History (CCRIS and CTOS)</strong>: The bank checks your repayment history for all existing credit facilities. Clean records (all zeros in CCRIS, no special attention accounts, no court judgements in CTOS) significantly improve your chances. Even one or two months of missed payments on any credit facility can cause rejection.
          </p>
          <p>
            <strong>3. Income Verification</strong>: Banks require payslips (typically 3 months), bank statements showing salary credit, and EA Form or income tax returns. Self-employed applicants need 2 years of audited accounts and business bank statements.
          </p>

          <h2>New Car vs Used Car Loans</h2>
          <p>
            New and used car loans have different terms in Malaysia. For <strong>new cars</strong>: loan quantum typically up to 90% of the on-the-road (OTR) price, maximum tenure 9 years (BNM cap), interest rates generally 2.8%–3.5% flat. Some car brands (Proton, Perodua) have partnered with specific banks offering promotional rates as low as 2.3%–2.5% flat for certain models and tenures.
          </p>
          <p>
            For <strong>used cars</strong>: loan quantum typically up to 85–90% of the market valuation (not the asking price), maximum tenure 7 years (BNM cap), interest rates 3.0%–4.5% flat depending on vehicle age. Banks are more conservative with older vehicles — a car more than 10 years old at the end of the loan tenure may not be financeable at all. The bank will commission a valuation and lend based on the lower of the purchase price or valuation.
          </p>

          <h2>How to Calculate Your Car Loan Instalment</h2>
          <p>
            For a hire purchase loan, the monthly instalment is calculated as:
          </p>
          <p>
            <strong>Monthly Instalment = (Loan Amount + Total Interest) ÷ Tenure in months</strong>
          </p>
          <p>
            Where: Total Interest = Loan Amount × Flat Rate % × Tenure in years
          </p>
          <p>
            Example: RM80,000 loan at 3.0% flat rate over 7 years:
          </p>
          <ul>
            <li>Total Interest = RM80,000 × 3.0% × 7 = RM16,800</li>
            <li>Total to repay = RM80,000 + RM16,800 = RM96,800</li>
            <li>Monthly Instalment = RM96,800 ÷ 84 = RM1,152/month</li>
          </ul>
          <p>
            Compare this to a 5-year tenure at the same rate: Monthly = (RM80,000 + RM12,000) ÷ 60 = RM1,533/month — RM381 more per month but RM4,800 less in total interest.
          </p>

          <h2>How Much Car Can I Afford?</h2>
          <p>
            A common rule of thumb is that your car instalment should not exceed 15–20% of your gross monthly income. For someone earning RM5,000/month, that means an instalment of RM750–RM1,000/month. At a 3.0% flat rate over 7 years, this supports a loan of approximately RM52,000–RM70,000 — covering Proton X50, Perodua Ativa, or basic Honda City territory.
          </p>
          <p>
            This is a guideline, not a rule — your actual capacity depends on all your existing commitments and your DSR. Someone with no other debt can allocate more of their income to a car instalment. Someone already servicing a home loan and personal loan should be more conservative.
          </p>

          <h2>Tips to Improve Car Loan Approval Chances</h2>
          <ul>
            <li><strong>Check and clean your CCRIS/CTOS first</strong>: Pull both reports before applying. Resolve any missed payments or errors. Give yourself 3–6 months to build a clean record.</li>
            <li><strong>Make a larger down payment</strong>: A 20–30% down payment instead of 10% reduces the loan quantum, lowers your instalment, improves DSR, and signals financial responsibility to the lender.</li>
            <li><strong>Apply to the right bank</strong>: Different banks have different appetite for risk and different relationships with car brands. Proton and Perodua have captive financing arms (ProtonCommercial, Affin Bank, etc.) with promotional rates. Maybank MAEfinance, RHB, and Public Bank are also major hire purchase lenders.</li>
            <li><strong>Choose a shorter tenure if DSR allows</strong>: A shorter tenure means higher monthly payments but demonstrates financial discipline and saves significantly on interest.</li>
            <li><strong>Avoid multiple applications simultaneously</strong>: Each application creates a hard enquiry in CCRIS. Apply to one or two banks first; if rejected, investigate the reason before applying elsewhere.</li>
          </ul>

          <h2>Early Settlement of Car Loans</h2>
          <p>
            Under Malaysia&apos;s Hire-Purchase Act, you can settle your car loan early and receive a rebate on the unearned interest. The rebate is calculated using the Rule of 78 (sum of digits method), which means early settlement in the first half of the tenure provides a meaningful rebate; in the second half, the rebate is much smaller since most interest is front-loaded.
          </p>
          <p>
            If you plan to pay off your car early, ask the bank for an early settlement quotation to see the exact rebate. Factor in any early settlement fees (some banks charge a fee, others do not). Use our <Link href="/loan-calculator">Loan Calculator</Link> to model different scenarios with your specific loan details.
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
