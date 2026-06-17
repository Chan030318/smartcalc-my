import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/housing-loan-eligibility-malaysia`;

export const metadata: Metadata = {
  title: "Housing Loan Eligibility in Malaysia — Bank Requirements Explained (2024)",
  description:
    "Understand how Malaysian banks assess housing loan eligibility — DSR, CCRIS, income documentation, loan margin, and what to do if you're rejected.",
  keywords: [
    "housing loan eligibility Malaysia",
    "home loan eligibility Malaysia",
    "bank requirements housing loan Malaysia",
    "housing loan DSR Malaysia",
    "CCRIS housing loan Malaysia",
    "minimum salary housing loan Malaysia",
    "housing loan 2024 Malaysia",
    "cara mohon pinjaman rumah Malaysia",
  ],
  alternates: { canonical: "/guides/housing-loan-eligibility-malaysia" },
  openGraph: {
    title: "Housing Loan Eligibility in Malaysia — Bank Requirements Explained (2024)",
    description: "DSR limits, CCRIS requirements, loan margin, income documentation — everything Malaysian banks check before approving your home loan.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Housing Loan Eligibility Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Housing Loan Eligibility Malaysia 2024", description: "What banks check, DSR limits, CCRIS requirements, and how to maximise your eligibility.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the maximum loan-to-value (LTV) ratio for a housing loan in Malaysia?", a: "Standard housing loans in Malaysia have a maximum loan margin of 90% (10% down payment) for first and second properties. For third properties and above, BNM mandates a maximum LTV of 70% (30% down payment). Some banks apply stricter LTV for high-rise properties or in specific locations." },
  { q: "What is the maximum tenure for a housing loan in Malaysia?", a: "Malaysian housing loans can have a maximum tenure of 35 years or until the borrower reaches age 70, whichever is shorter. A 25-year-old can take a 35-year loan; a 45-year-old can only take a 25-year loan (to age 70). Longer tenure means lower monthly instalments but significantly more total interest paid." },
  { q: "Can I get a housing loan if I'm self-employed?", a: "Yes, but documentation requirements are stricter. Banks typically require 2 years of tax returns (Borang B), 6–12 months of business bank statements, company registration documents (for sdn bhd), and sometimes a profit and loss statement. Income used for DSR calculation is usually net profit, not gross revenue, which can significantly affect borrowing capacity." },
  { q: "Does my PTPTN affect housing loan eligibility?", a: "Yes. PTPTN repayments count as a monthly commitment in your DSR calculation. Monthly PTPTN repayments (typically RM200–RM500) reduce your borrowing capacity proportionally. If your PTPTN is in arrears, it will show as a negative entry in CCRIS, which can result in loan rejection." },
  { q: "What interest rate should I expect for a housing loan in Malaysia?", a: "Most Malaysian housing loans are floating rate, pegged to the Overnight Policy Rate (OPR) or the bank's Base Rate. As of 2024, typical housing loan rates are around 4.1%–4.6% per annum (base rate + spread). Fixed-rate products are available but typically at higher rates. Always compare the Effective Lending Rate (ELR), not just the advertised rate." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Housing Loan Eligibility in Malaysia — Bank Requirements Explained (2024)",
  description: "A comprehensive guide to housing loan eligibility in Malaysia — how banks assess DSR, CCRIS, income, and LTV, with practical tips to maximise your loan amount.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "Housing Loan Eligibility Malaysia", item: PAGE_URL },
  ]},
};

const criteria = [
  { factor: "Debt Service Ratio (DSR)", requirement: "≤ 60% (standard) / ≤ 70% (high income)", impact: "Primary factor. High DSR is the #1 reason for rejection." },
  { factor: "CCRIS payment history", requirement: "No arrears in past 12 months", impact: "Any late payment in recent 12 months may result in rejection." },
  { factor: "CTOS score", requirement: "No legal judgments or bankruptcies", impact: "Judgments stay on CTOS until settled. Must be resolved before applying." },
  { factor: "Employment stability", requirement: "≥ 6 months at current employer (employees)", impact: "Probationary employees may need 12 months or face restrictions." },
  { factor: "Minimum income", requirement: "Varies by bank (typically RM2,000–RM3,000/month)", impact: "Lower income = smaller maximum loan amount." },
  { factor: "Loan-to-value (LTV)", requirement: "Max 90% for 1st–2nd property; 70% for 3rd+", impact: "Requires 10% or 30% down payment from own funds." },
  { factor: "Maximum tenure", requirement: "Up to 35 years or age 70, whichever comes first", impact: "Older applicants get shorter tenures and higher monthly instalments." },
  { factor: "Income documentation", requirement: "3 months' payslips + bank statements + EA Form", impact: "Incomplete documents are a top avoidable rejection reason." },
];

export default function HousingLoanEligibilityPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-emerald-50 to-green-50 border-b border-emerald-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Housing Loan Eligibility</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Housing Loan Eligibility in Malaysia — What Banks Check (2024)
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Malaysian banks assess housing loans on eight criteria. Understanding each one — and knowing how to optimise them — is the difference between approval and rejection.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Housing</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>The 8 Housing Loan Eligibility Criteria</h2>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-emerald-100">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-emerald-100">Typical Requirement</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-emerald-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c, i) => (
                  <tr key={i} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-3 font-semibold text-gray-800">{c.factor}</td>
                    <td className="px-4 py-3 text-emerald-700 font-medium text-xs">{c.requirement}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{c.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>1. Debt Service Ratio (DSR)</h2>
          <p>DSR is the percentage of gross monthly income committed to loan repayments. For a housing loan, the bank adds the proposed monthly instalment to all existing commitments, then divides by gross income.</p>
          <p>Most Malaysian banks cap DSR at <strong>60% for standard borrowers</strong>. High-income borrowers (above RM10,000/month) may qualify up to 70%. Government employees are sometimes given more flexibility due to job security.</p>
          <p>Example: Gross salary RM6,000. Car loan RM600/month. Proposed housing instalment RM2,000/month. DSR = (600 + 2,000) / 6,000 = <strong>43.3%</strong> — acceptable at most banks.</p>

          <h2>2. CCRIS — Your 12-Month Credit History</h2>
          <p>CCRIS (Central Credit Reference Information System), maintained by Bank Negara Malaysia, records your credit facilities and payment history for the past 12 months. Banks specifically look for:</p>
          <ul>
            <li>Any payment late by 1 month or more in the past 12 months (flagged in arrears column)</li>
            <li>Number of current credit facilities (too many applications in a short period is a red flag)</li>
            <li>Special attention arrangements — restructured or rescheduled loans</li>
            <li>Facilities under legal action</li>
          </ul>
          <p>Even a single missed payment in the past 6 months is often an automatic rejection at major banks. 12 consecutive months of on-time payments is the baseline requirement.</p>

          <h2>3. CTOS — The Broader Credit Picture</h2>
          <p>CTOS (Credit Tip-Off Service) aggregates data from multiple sources including CCRIS, legal court judgments (from the e-Insolvency system), trade credit references, and public records. Being listed in CTOS for a judgment debt — even a small one — will block housing loan approval until the debt is settled.</p>
          <p>Get your CTOS report at ctos.com.my. Check for any errors — CTOS allows you to dispute incorrect entries.</p>

          <h2>4. Income Documentation</h2>
          <p>Banks verify income through documentation. For salaried employees:</p>
          <ul>
            <li>Latest 3 months' payslips</li>
            <li>Latest 3 months' bank statements (salary credit must be visible)</li>
            <li>Most recent EA Form or EPF statement of account</li>
            <li>If salary includes allowances or commissions, banks may use base salary only, or average the past 12 months</li>
          </ul>
          <p>For self-employed:</p>
          <ul>
            <li>Latest 2 years of personal tax returns (Borang B with LHDN receipt)</li>
            <li>6–12 months of business and personal bank statements</li>
            <li>Business registration (SSM)</li>
            <li>Audited accounts or management accounts (for larger loan amounts)</li>
          </ul>

          <h2>5. Property Valuation and Loan Margin</h2>
          <p>The bank will commission an independent valuation of the property. The loan is based on the <em>lower of purchase price or market value</em>. If you overpay for a property relative to its market value, your loan amount will be based on the lower valuation — requiring you to fund the gap from savings.</p>
          <p>Loan margin caps:</p>
          <ul>
            <li><strong>1st property:</strong> Up to 90% financing</li>
            <li><strong>2nd property:</strong> Up to 90% financing</li>
            <li><strong>3rd property and above:</strong> Maximum 70% financing (30% down payment required by BNM)</li>
          </ul>

          <h2>6. Age and Loan Tenure</h2>
          <p>Banks in Malaysia allow a maximum tenure of 35 years, but tenure cannot extend beyond the borrower reaching age 70. This means:</p>
          <ul>
            <li>Age 25: maximum 35-year tenure</li>
            <li>Age 40: maximum 30-year tenure</li>
            <li>Age 50: maximum 20-year tenure — significantly higher monthly instalment for the same loan amount</li>
          </ul>
          <p>Shorter tenure means higher monthly instalments, which raises DSR and reduces borrowing capacity for older applicants.</p>

          <h2>How to Calculate Your Maximum Loan</h2>
          <p>Rough formula: Maximum monthly instalment = Gross income × 60% − Existing monthly commitments. Then convert to loan amount using a loan calculator at your target interest rate and tenure.</p>

          <div className="not-prose bg-emerald-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Check Your Loan Affordability</h3>
            <p className="text-emerald-100 mb-5 text-sm">Use our free calculators to estimate your DSR, check how much you can borrow, and calculate monthly repayments.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dsr-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors text-sm">DSR Calculator →</Link>
              <Link href="/loan-calculator" className="inline-flex items-center gap-2 bg-emerald-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-colors text-sm border border-emerald-400">Loan Calculator →</Link>
            </div>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/what-salary-to-afford-house-malaysia">What Salary Do You Need to Afford a House in Malaysia?</Link></li>
            <li><Link href="/guides/what-is-dsr-malaysia">What Is DSR in Malaysia?</Link></li>
            <li><Link href="/guides/how-to-improve-loan-approval-malaysia">How to Improve Loan Approval Chances</Link></li>
            <li><Link href="/guides/personal-loan-vs-housing-loan-malaysia">Personal Loan vs Housing Loan</Link></li>
          </ul>
        </article>

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
