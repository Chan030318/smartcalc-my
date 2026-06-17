import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/what-salary-to-afford-house-malaysia`;

export const metadata: Metadata = {
  title: "What Salary Do You Need to Afford a House in Malaysia? (2024)",
  description:
    "Find out what monthly salary you need to afford a house in Malaysia. Covers the 3× rule, bank DSR limits, loan eligibility by income, housing loan examples, and first-home buyer schemes.",
  keywords: [
    "what salary to afford house Malaysia",
    "housing loan eligibility salary Malaysia",
    "minimum salary to buy house Malaysia",
    "Malaysia housing loan income requirement",
    "how much house can I afford Malaysia",
    "first home buyer Malaysia salary",
    "DSR housing loan Malaysia",
    "gaji untuk beli rumah Malaysia",
  ],
  alternates: { canonical: "/guides/what-salary-to-afford-house-malaysia" },
  openGraph: {
    title: "What Salary Do You Need to Afford a House in Malaysia? (2024)",
    description: "The 3× income rule, DSR calculation, and income-to-property tables to answer: how expensive a house can you really afford in Malaysia?",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Malaysia House Affordability Guide" }],
  },
  twitter: { card: "summary_large_image", title: "What Salary Do You Need to Afford a House in Malaysia?", description: "3× rule, DSR limits, and real income examples for Malaysian home buyers.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the minimum salary to buy a house in Malaysia?", a: "There is no official minimum, but as a practical guide, a monthly gross salary of at least RM3,000 is needed to qualify for a home loan for a property priced around RM200,000–RM250,000. Most banks require your total monthly loan repayments (DSR) to stay within 60–70% of gross income. Use the 3× annual income rule as a starting estimate for affordable property price." },
  { q: "How do banks decide how much housing loan I can get?", a: "Banks use your Debt Service Ratio (DSR) — all monthly loan repayments ÷ gross monthly income. Most Malaysian banks cap DSR at 60% for standard borrowers and 70% for high-income earners (above RM10,000/month) or civil servants. They also check your CCRIS credit history. A 90% loan margin is common for first homes." },
  { q: "Can I use EPF savings as a house down payment?", a: "Yes. You can withdraw from EPF Akaun Sejahtera for a first or second property purchase (not for third property onwards). The withdrawal can cover part or all of the 10% down payment, though some use it to reduce the outstanding loan balance instead." },
  { q: "What government schemes help first-time buyers in Malaysia?", a: "Key schemes include: PR1MA (affordable homes RM100k–RM400k for households earning RM2,500–RM15,000/month), Rumah Selangorku, Residensi Wilayah, MyHome, and the My First Home Scheme (100% financing for incomes below RM5,000/month). Each has its own income and price eligibility." },
  { q: "Is a 10% down payment required for all housing loans?", a: "Standard bank loans require 10% down payment (90% loan margin). However, the My First Home Scheme offers 100% financing (0% down) for eligible first-time buyers earning below RM5,000/month. Some PR1MA properties also offer 100% end-financing. Always factor in legal fees, stamp duty, and moving costs on top of the down payment." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Salary Do You Need to Afford a House in Malaysia? (2024)",
  description: "A complete guide to housing affordability in Malaysia — the 3× income rule, bank DSR requirements, income-to-property price tables, and first-home buyer schemes.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "What Salary to Afford House Malaysia", item: PAGE_URL },
  ]},
};

const incomeTable = [
  { income: "RM 3,000", maxDsr60: "RM 1,800", loanAmount: "~RM 270,000", propertyPrice: "~RM 300,000" },
  { income: "RM 4,000", maxDsr60: "RM 2,400", loanAmount: "~RM 360,000", propertyPrice: "~RM 400,000" },
  { income: "RM 5,000", maxDsr60: "RM 3,000", loanAmount: "~RM 450,000", propertyPrice: "~RM 500,000" },
  { income: "RM 7,000", maxDsr60: "RM 4,200", loanAmount: "~RM 620,000", propertyPrice: "~RM 690,000" },
  { income: "RM 10,000", maxDsr60: "RM 6,000", loanAmount: "~RM 890,000", propertyPrice: "~RM 990,000" },
  { income: "RM 15,000", maxDsr60: "RM 9,000", loanAmount: "~RM 1,330,000", propertyPrice: "~RM 1,480,000" },
];

export default function HouseAffordabilityPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-purple-50 to-violet-50 border-b border-purple-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-purple-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">House Affordability</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              What Salary Do You Need to Afford a House in Malaysia?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Property prices and lending rules in Malaysia mean affordability depends on more than just your salary. Here is how to calculate what you can realistically borrow — and what that means for your property budget.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Housing</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>The 3× Annual Income Rule of Thumb</h2>
          <p>A widely used starting estimate: <strong>affordable property price ≈ 3–4× your gross annual income</strong>. This approximation aligns with typical bank lending limits when DSR is around 30–40%.</p>
          <ul>
            <li>RM3,000/month (RM36,000/year) → affordable range: RM108,000–RM144,000</li>
            <li>RM5,000/month (RM60,000/year) → affordable range: RM180,000–RM240,000</li>
            <li>RM10,000/month (RM120,000/year) → affordable range: RM360,000–RM480,000</li>
          </ul>
          <p>These are conservative estimates. In practice, Malaysian banks lend more generously — but borrowing at maximum capacity leaves little financial cushion. The 3× rule keeps your DSR at a safer level.</p>

          <h2>How Banks Actually Calculate What You Can Borrow</h2>
          <p>Banks use your <strong>Debt Service Ratio (DSR)</strong> — the share of gross monthly income committed to all loan repayments. The standard bank cap is <strong>60% DSR</strong>. For high-income borrowers (above RM10,000/month) or government employees, some banks allow up to 70%.</p>
          <p>The formula: <strong>Maximum monthly instalment = Gross income × 60% − Existing commitments</strong></p>
          <p>
            <strong>Example:</strong> Gross salary RM6,000. Car loan RM700/month. Credit card (RM10,000 limit) = RM500 commitment.
            Maximum new instalment = (RM6,000 × 60%) − RM700 − RM500 = RM3,600 − RM1,200 = <strong>RM2,400/month</strong>
          </p>
          <p>At a 4.5% interest rate over 35 years, a RM2,400/month instalment supports a loan of approximately <strong>RM430,000</strong>. With 10% down, the maximum property price would be around RM477,000.</p>

          <h2>Income vs Maximum Property Price Table</h2>
          <p>Assuming: no existing loan commitments, 4.5% interest rate, 35-year tenure, 90% loan margin, DSR capped at 60%.</p>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Gross Monthly Income</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Max Monthly Instalment (60%)</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Est. Loan Amount</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Est. Max Property</th>
                </tr>
              </thead>
              <tbody>
                {incomeTable.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-semibold text-gray-800">{row.income}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.maxDsr60}</td>
                    <td className="px-4 py-3 text-center text-purple-700 font-semibold">{row.loanAmount}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.propertyPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-2">Estimates only. Assumes no existing commitments, 4.5% p.a., 35-year tenure.</p>
          </div>

          <h2>Hidden Costs That Reduce Your Budget</h2>
          <p>Your salary determines your loan eligibility — but buying a house involves upfront costs that must come from savings, not the loan:</p>
          <ul>
            <li><strong>Down payment:</strong> 10% of purchase price (standard). RM400,000 home = RM40,000 upfront.</li>
            <li><strong>Stamp duty (Memorandum of Transfer):</strong> 1% on first RM100k, 2% on RM100k–RM500k, 3% above RM500k. Exemption for first homes up to RM500k.</li>
            <li><strong>Legal fees (loan agreement):</strong> Approximately 0.5–1% of loan amount.</li>
            <li><strong>Valuation fees:</strong> RM500–RM2,000 depending on property value.</li>
            <li><strong>MRTA/MLTA:</strong> Mortgage insurance (optional but often required by banks) — typically 1–3% of loan amount as a lump sum.</li>
          </ul>
          <p>On a RM400,000 property, total upfront costs (down payment + fees) can reach <strong>RM55,000–RM65,000</strong>. Budget for this separately.</p>

          <h2>First-Home Buyer Schemes to Know</h2>
          <ul>
            <li><strong>My First Home Scheme (Skim Rumah Pertamaku):</strong> 100% financing (no down payment) for first-time buyers earning below RM5,000/month individually or RM10,000/month combined. Maximum property price: RM500,000.</li>
            <li><strong>PR1MA:</strong> Affordable homes priced RM100,000–RM400,000 for households earning RM2,500–RM15,000/month. Ballot-based allocation.</li>
            <li><strong>Rumah Selangorku / Residensi Wilayah:</strong> State-level schemes with price caps and income limits. Check respective state housing departments.</li>
            <li><strong>EPF Akaun Sejahtera withdrawal:</strong> Can be used for down payment or to reduce outstanding loan on a first or second property.</li>
            <li><strong>Stamp Duty exemption:</strong> First-time buyers of homes priced RM500,000 and below are exempt from stamp duty on MOT and loan agreement under Budget 2023/2024 initiatives.</li>
          </ul>

          <h2>How Existing Debts Eat Into Your Budget</h2>
          <p>Every existing loan reduces how much you can borrow for a house. Common examples:</p>
          <ul>
            <li>A <strong>RM700/month car loan</strong> on a RM5,000 salary reduces your maximum property price by approximately RM125,000.</li>
            <li>An <strong>unused credit card with RM10,000 limit</strong> counts as RM500/month commitment — reducing your property budget by about RM90,000.</li>
            <li><strong>PTPTN repayments</strong> count as a commitment in the DSR calculation.</li>
          </ul>
          <p>Before applying for a housing loan, pay off small loans, cancel unused credit cards, and avoid taking new credit for at least 6 months.</p>

          <div className="not-prose bg-purple-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Check Your DSR Before House Hunting</h3>
            <p className="text-purple-100 mb-5 text-sm">See your current Debt Service Ratio and how much room you have to add a housing loan.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dsr-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-purple-50 transition-colors text-sm">DSR Calculator →</Link>
              <Link href="/loan-calculator" className="inline-flex items-center gap-2 bg-purple-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-purple-400 transition-colors text-sm border border-purple-400">Loan Calculator →</Link>
            </div>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/what-is-dsr-malaysia">What Is DSR in Malaysia?</Link></li>
            <li><Link href="/guides/housing-loan-eligibility-malaysia">Housing Loan Eligibility — Full Guide</Link></li>
            <li><Link href="/guides/how-to-improve-loan-approval-malaysia">How to Improve Loan Approval Chances</Link></li>
            <li><Link href="/dsr-calculator-malaysia">DSR Calculator Malaysia</Link></li>
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
