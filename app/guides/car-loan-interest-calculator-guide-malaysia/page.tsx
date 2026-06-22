import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/car-loan-interest-calculator-guide-malaysia`;

export const metadata: Metadata = {
  title: "Car Loan Interest Calculator Guide Malaysia 2026 — Flat Rate vs EIR Explained",
  description: "How to calculate car loan interest in Malaysia — flat rate vs effective interest rate (EIR), total interest paid, monthly instalments, and how to compare hire purchase offers from different banks.",
  keywords: ["car loan interest calculator Malaysia", "hire purchase calculator Malaysia", "car loan flat rate vs EIR Malaysia", "monthly car payment Malaysia", "car loan interest rate Malaysia 2026", "pinjaman kereta kalkulator Malaysia"],
  alternates: { canonical: "/guides/car-loan-interest-calculator-guide-malaysia" },
  openGraph: {
    title: "Car Loan Interest Calculator Guide Malaysia 2026",
    description: "How flat rate vs EIR works for Malaysia car loans, total interest paid, and how to compare offers.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Car Loan Interest Calculator Guide Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Car Loan Interest Calculator Guide Malaysia 2026", description: "How to calculate car loan interest and compare hire purchase offers in Malaysia.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the flat rate for car loans in Malaysia?", a: "Car loans (hire purchase) in Malaysia are calculated using a flat interest rate, typically ranging from 2.4% to 4.0% per annum depending on the vehicle type, loan tenure, and bank. New national cars (Perodua, Proton) attract the lowest rates — approximately 2.4%–2.9% for standard tenure. New non-national and imported cars carry rates of 2.8%–3.5%. Used cars (over 5 years old) attract higher rates of 3.0%–4.0%. The flat rate is applied to the original principal for every year, regardless of how much you've repaid." },
  { q: "What is the difference between flat rate and effective interest rate (EIR)?", a: "A flat rate of 3% on a car loan does NOT mean the actual cost of borrowing is 3% per annum. Because you repay the principal over time (reducing the actual outstanding amount), the effective interest rate (EIR) is roughly double the flat rate. A 3% flat rate on a reducing-balance equivalent is approximately 5.5%–5.8% EIR. This is why car loans appear 'cheap' at 2.5%–3.5% flat — the actual borrowing cost is 4.5%–7%. When comparing a car loan to a personal loan or credit card, always compare on an EIR basis." },
  { q: "How do I calculate my monthly car loan instalment in Malaysia?", a: "Formula: Monthly instalment = (Principal + Total Interest) ÷ Loan Tenure in Months. Total Interest = Principal × Flat Rate × Tenure in Years. Example: RM80,000 car loan at 3% flat over 9 years (108 months). Total Interest = RM80,000 × 3% × 9 = RM21,600. Total repayment = RM80,000 + RM21,600 = RM101,600. Monthly instalment = RM101,600 ÷ 108 = RM940.74. Use our <a href='/loan-calculator-malaysia'>Loan Calculator</a> for instant results." },
  { q: "Can I settle my car loan early in Malaysia?", a: "Yes, Malaysian hire purchase agreements allow early settlement. Under the Hire-Purchase Act 1967 and the Rule of 78 (Sum of Digits method historically used), early settlement entitles you to a rebate on unearned interest. However, early settlement before the 3-year mark may attract a penalty fee (typically 1% of the outstanding balance or a flat fee). Banks use different rebate methods — some now use actuarial (effective rate) calculation. Contact your bank for the exact rebate amount before settling early." },
  { q: "What is the maximum loan tenure for a car in Malaysia?", a: "Bank Negara Malaysia caps hire purchase tenure at 9 years (108 months) for new cars. For used cars, the maximum is typically lower: 7 years (84 months) for cars under 5 years old, 5 years (60 months) for cars 5–10 years old. Some banks may offer shorter caps. Longer tenure reduces monthly payments but dramatically increases total interest paid — a 9-year loan at 3% flat pays roughly 27% of the car's price in interest, while a 5-year loan pays only 15%." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Car Loan Interest Calculator Guide Malaysia 2026 — Flat Rate vs EIR Explained", description: "Comprehensive guide to calculating car loan interest in Malaysia — flat rate formula, EIR comparison, monthly instalment calculation, early settlement, and how to compare hire purchase offers.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Car Loan Interest Calculator Guide Malaysia", item: PAGE_URL }] },
  ],
};

export default function CarLoanInterestCalculatorGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-red-50 border-b border-orange-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-orange-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Car Loan Interest Calculator Guide Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Car Loan Interest Calculator Guide Malaysia 2026 — Flat Rate vs EIR Explained</h1>
            <p className="text-gray-600 text-lg leading-relaxed">Malaysian car loans use a flat interest rate that makes the real borrowing cost harder to see. This guide explains the flat rate formula, why EIR matters, and how to calculate your true monthly payment and total interest paid.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Loans · Car</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>How Malaysian Car Loans (Hire Purchase) Work</h2>
          <p>Unlike home loans, car financing in Malaysia is structured as <strong>hire purchase (HP)</strong> under the Hire-Purchase Act 1967. You do not own the car until the final instalment is paid — technically, the bank owns the car and you are "hiring" it while making payments. This has implications for insurance, transfer of ownership, and early settlement rules.</p>
          <p>The interest calculation for hire purchase uses a <strong>flat rate method</strong> — interest is calculated on the original loan amount, not the declining balance. This means your interest payment stays constant each month even as you repay the principal. This is different from home loans, which use a reducing balance method where interest decreases as you pay down the principal.</p>

          <h2>Flat Rate Calculation — Step by Step</h2>
          <p>For a car costing RM90,000 with a 10% down payment (RM9,000), financed at 3% flat for 9 years:</p>
          <ul>
            <li><strong>Loan amount:</strong> RM90,000 − RM9,000 = RM81,000</li>
            <li><strong>Annual interest:</strong> RM81,000 × 3% = RM2,430/year</li>
            <li><strong>Total interest (9 years):</strong> RM2,430 × 9 = RM21,870</li>
            <li><strong>Total repayment:</strong> RM81,000 + RM21,870 = RM102,870</li>
            <li><strong>Monthly instalment:</strong> RM102,870 ÷ 108 months = <strong>RM952.50</strong></li>
          </ul>
          <p>The true cost of this car: RM90,000 purchase price. Over 9 years, you pay RM9,000 (down) + RM102,870 (instalments) = RM111,870 total — RM21,870 more than the car's price. Use our <Link href="/loan-calculator-malaysia">Loan Calculator Malaysia</Link> for instant calculations.</p>

          <h2>Why EIR is Almost Double the Flat Rate</h2>
          <p>A 3% flat rate sounds very cheap — because most people mentally compare it to a savings rate or mortgage rate. But the effective interest rate (EIR) converts the flat rate calculation to its reducing-balance equivalent, revealing the true borrowing cost.</p>
          <p>Approximate EIR = flat rate × 1.82 (rule of thumb for typical HP tenures). So 3% flat ≈ 5.46% EIR. At 2.5% flat ≈ 4.55% EIR. At 4.0% flat ≈ 7.28% EIR. This is why comparing a car hire purchase offer to a personal loan or other credit product must be done on an EIR basis — a personal loan at 6% EIR is actually cheaper than a car loan at 4% flat (≈7.28% EIR).</p>

          <h2>How Loan Tenure Affects Total Cost</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-orange-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-orange-100">Tenure</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-orange-100">Monthly (RM81k, 3%)</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-orange-100">Total Interest</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-orange-100">Total Paid</th></tr></thead>
              <tbody>
                {[
                  ["5 years (60 months)", "RM1,552", "RM12,150", "RM93,150"],
                  ["7 years (84 months)", "RM1,143", "RM17,010", "RM98,010"],
                  ["9 years (108 months)", "RM953", "RM21,870", "RM102,870"],
                ].map(([t, m, i, tot], idx) => (
                  <tr key={idx} className="border-b border-gray-50"><td className="px-4 py-2.5 text-gray-700">{t}</td><td className="px-4 py-2.5 text-center text-gray-600">{m}</td><td className="px-4 py-2.5 text-center text-red-600">{i}</td><td className="px-4 py-2.5 text-center text-gray-600">{tot}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>A 5-year loan costs RM9,720 less in total interest than a 9-year loan on the same amount — but requires RM599 more per month. The "right" tenure depends on your cash flow, but choosing 9 years purely to get a lower monthly payment and then not prepaying is an expensive choice.</p>

          <h2>Tips to Reduce Your Car Loan Cost</h2>
          <p>Put more money down — a larger down payment (20%–30% instead of the minimum 10%) reduces the loan amount and total interest paid. Negotiate the interest rate — dealers quote rates but banks may offer better rates directly; compare at least 2–3 banks before signing. Choose a shorter tenure if your cash flow allows — the monthly difference is less dramatic than the interest savings. Make extra principal payments where possible — under hire purchase, prepayments reduce the outstanding amount and qualify for a rebate on interest at settlement.</p>
          <p>For context on how a car loan affects your overall financial picture, see our <Link href="/guides/car-loan-eligibility-malaysia">Car Loan Eligibility Malaysia guide</Link> and use the <Link href="/dsr-calculator-malaysia">DSR Calculator</Link> to ensure the monthly instalment is within a healthy debt ratio.</p>
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
