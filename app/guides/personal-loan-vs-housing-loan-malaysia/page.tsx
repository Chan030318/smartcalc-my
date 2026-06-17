import type { Metadata } from "next";
import Link from "next/link";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/personal-loan-vs-housing-loan-malaysia`;

export const metadata: Metadata = {
  title: "Personal Loan vs Housing Loan Malaysia — Key Differences (2024)",
  description:
    "Compare personal loans and housing loans in Malaysia — interest rates, tenure, collateral, DSR impact, and when to use each. Includes worked cost comparison.",
  keywords: [
    "personal loan vs housing loan Malaysia",
    "personal loan vs home loan Malaysia",
    "pinjaman peribadi vs pinjaman perumahan Malaysia",
    "best loan for renovation Malaysia",
    "personal loan interest rate Malaysia 2024",
    "housing loan interest rate Malaysia 2024",
    "Malaysia loan comparison",
    "when to use personal loan Malaysia",
  ],
  alternates: { canonical: "/guides/personal-loan-vs-housing-loan-malaysia" },
  openGraph: {
    title: "Personal Loan vs Housing Loan Malaysia — Key Differences (2024)",
    description: "Interest rates, tenure, collateral, purpose, and DSR impact compared. Find out which loan is right for your situation in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Personal Loan vs Housing Loan Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Personal Loan vs Housing Loan Malaysia", description: "Interest rates, tenure, purpose, and total cost compared — choose the right loan for your needs.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "Can I use a personal loan for a house down payment in Malaysia?", a: "Technically yes, but most banks actively check whether the down payment came from borrowed funds. If they detect an undisclosed personal loan used for the down payment, it can void the housing loan approval. EPF Akaun Sejahtera withdrawal, savings, or gifts from family are the accepted sources for down payments. Using a personal loan as a down payment also dramatically raises your DSR." },
  { q: "What is the typical interest rate difference between personal loans and housing loans in Malaysia?", a: "Housing loans: typically 4.0%–4.6% p.a. (floating rate). Personal loans: typically 6%–18% p.a. depending on income level and creditworthiness (flat rate or effective rate). On a RM50,000 loan, a housing loan at 4.5% over 10 years costs approximately RM12,500 in total interest, while a personal loan at 12% (flat) costs approximately RM60,000 — nearly 5× more." },
  { q: "Can I use a personal loan for home renovation in Malaysia?", a: "Yes — personal loans are commonly used for renovation because they are disbursed quickly with no collateral required. However, some banks offer specific renovation loans at rates between personal loan rates and housing loan rates. If you own your home with equity, a top-up on your existing housing loan (at housing loan rates) is almost always cheaper than a separate personal loan." },
  { q: "Does a personal loan reduce my housing loan eligibility?", a: "Yes, directly. Every personal loan monthly repayment adds to your DSR. A RM500/month personal loan commitment on a RM5,000 gross salary takes up 10% of your 60% DSR allowance — reducing the housing loan you qualify for by approximately RM90,000. Pay off personal loans before applying for a housing loan where possible." },
  { q: "What is a bridging loan in Malaysia?", a: "A bridging loan is a short-term loan (typically 6–24 months) used to 'bridge' the gap between buying a new property and completing the sale of an existing one. It covers the period when you own both properties. Bridging loans carry higher interest rates and are typically only offered to creditworthy borrowers with confirmed sale agreements." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Personal Loan vs Housing Loan Malaysia — Key Differences (2024)",
  description: "A detailed comparison of personal loans and housing loans in Malaysia — interest rates, tenure, collateral requirements, eligible purposes, total cost of borrowing, and DSR impact.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "Personal Loan vs Housing Loan Malaysia", item: PAGE_URL },
  ]},
};

const comparison = [
  { feature: "Interest Rate", personal: "6%–18% p.a. (flat/effective)", housing: "4.0%–4.6% p.a. (floating)", verdict: "Housing loan" },
  { feature: "Maximum Tenure", personal: "Up to 10 years", housing: "Up to 35 years", verdict: "Housing loan" },
  { feature: "Maximum Loan Amount", personal: "Typically RM150,000–RM300,000", housing: "Up to 90% of property value", verdict: "Housing loan" },
  { feature: "Collateral Required", personal: "None (unsecured)", housing: "Yes — the property itself", verdict: "Personal loan" },
  { feature: "Approval Speed", personal: "1–5 working days", housing: "2–8 weeks", verdict: "Personal loan" },
  { feature: "Purpose Restriction", personal: "Any purpose", housing: "Property purchase / construction", verdict: "Personal loan" },
  { feature: "Down Payment Required", personal: "None", housing: "10% (or 30% for 3rd property)", verdict: "Personal loan" },
  { feature: "Total Interest Cost", personal: "Very high (flat rate)", housing: "Lower over same period", verdict: "Housing loan" },
  { feature: "DSR Impact", personal: "Reduces future borrowing capacity", housing: "Same, but typically larger amount", verdict: "Situational" },
];

export default function PersonalVsHousingLoanPage() {
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
              <span className="text-gray-500">Personal Loan vs Housing Loan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Personal Loan vs Housing Loan Malaysia — Key Differences
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Both are debt — but the cost, risk, and purpose differ enormously. Choosing the wrong product can cost you tens of thousands of ringgit in unnecessary interest. Here is how to decide.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">Loans</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Quick Comparison</h2>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-violet-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Feature</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Personal Loan</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Housing Loan</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Better for</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.feature}</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.personal}</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.housing}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${row.verdict === "Housing loan" ? "bg-emerald-100 text-emerald-700" : row.verdict === "Personal loan" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>{row.verdict}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Interest Rates: The Biggest Difference</h2>
          <p>Housing loans in Malaysia are typically priced at <strong>4.0%–4.6% per annum</strong> (floating rate, linked to Base Rate). Personal loans range from <strong>6% to 18% per annum</strong> — with lower-income or higher-risk borrowers paying more.</p>
          <p>The difference compounds dramatically over time. On a RM100,000 loan over 10 years:</p>
          <ul>
            <li><strong>Housing loan at 4.5%:</strong> Total interest ≈ RM25,000. Monthly instalment ≈ RM1,037.</li>
            <li><strong>Personal loan at 10% (flat rate):</strong> Total interest = RM100,000. Monthly instalment ≈ RM1,667.</li>
          </ul>
          <p>This is why housing loans are almost always cheaper for property purchase — but they require the property as collateral, which creates a different type of risk.</p>

          <h2>Flat Rate vs Reducing Balance: Read the Fine Print</h2>
          <p>Personal loans in Malaysia are often quoted at a <strong>flat rate</strong>. This is misleading. A 6% flat rate personal loan has an <em>effective interest rate</em> (reducing balance rate) of approximately 11–12%, because interest is calculated on the original principal even as you repay the balance. Housing loans are quoted on a reducing balance basis — a fairer representation of cost.</p>
          <p>Always ask for the <strong>Effective Lending Rate (ELR)</strong> when comparing loans. Banks are required to disclose this in Malaysia.</p>

          <h2>When to Use a Personal Loan vs a Housing Loan</h2>
          <h3>Use a housing loan when:</h3>
          <ul>
            <li>You are purchasing a residential property (this is the intended purpose)</li>
            <li>You have equity in your home and need large funds for renovation — a top-up on your existing housing loan at housing loan rates is far cheaper than a personal loan</li>
            <li>You have time (2–8 weeks for approval) and can provide property collateral</li>
          </ul>
          <h3>Use a personal loan when:</h3>
          <ul>
            <li>You need funds quickly and without collateral (medical emergency, urgent home repair, car breakdown)</li>
            <li>The amount is small (below RM50,000) and short-term (under 5 years) — where total interest difference is less material</li>
            <li>You need to bridge a cash flow gap (expected large income, insurance payout, bonus)</li>
            <li>You are funding a non-property purpose (education, travel, business) where housing loan financing is not available</li>
          </ul>
          <h3>Renovation — The Grey Area</h3>
          <p>Renovation is the most common grey area. If you already own a property:</p>
          <ul>
            <li><strong>Best option:</strong> Top-up on your existing housing loan at housing loan interest rates (requires a valuation and may take 3–4 weeks)</li>
            <li><strong>Second option:</strong> Some banks offer specific renovation loans (rates between personal and housing loan rates)</li>
            <li><strong>Last resort:</strong> Personal loan (highest cost but fastest)</li>
          </ul>

          <h2>How Each Loan Affects Your DSR</h2>
          <p>Both personal loans and housing loans add to your DSR. But personal loans at high monthly instalments can block you from getting a housing loan later. If you plan to buy a house within 2–3 years, think carefully before taking a personal loan — especially a large one with a long tenure.</p>

          <div className="not-prose bg-violet-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Calculate Loan Repayments & DSR</h3>
            <p className="text-violet-100 mb-5 text-sm">Use our calculators to compare costs and check how a new loan affects your Debt Service Ratio.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/loan-calculator" className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-violet-50 transition-colors text-sm">Loan Calculator →</Link>
              <Link href="/dsr-calculator-malaysia" className="inline-flex items-center gap-2 bg-violet-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-violet-400 transition-colors text-sm border border-violet-400">DSR Calculator →</Link>
            </div>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/housing-loan-eligibility-malaysia">Housing Loan Eligibility Malaysia</Link></li>
            <li><Link href="/guides/what-salary-to-afford-house-malaysia">What Salary to Afford a House in Malaysia</Link></li>
            <li><Link href="/guides/what-is-dsr-malaysia">What Is DSR in Malaysia?</Link></li>
            <li><Link href="/loan-calculator">Loan Repayment Calculator</Link></li>
          </ul>
        </article>

        <FinancialDisclaimer />
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
