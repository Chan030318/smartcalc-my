import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/salary-to-buy-rm300k-house-malaysia`;

export const metadata: Metadata = {
  title: "What Salary Do You Need to Buy a RM300,000 House in Malaysia?",
  description: "Find out the minimum monthly salary needed to qualify for a RM300,000 home loan in Malaysia. Includes DSR calculation, monthly instalment estimate, down payment requirements, and first-home buyer schemes.",
  keywords: ["salary to buy RM300k house Malaysia", "RM300000 house loan salary Malaysia", "minimum salary home loan Malaysia", "DSR RM300k house", "first home RM300000 Malaysia", "rumah RM300k gaji berapa"],
  alternates: { canonical: "/guides/salary-to-buy-rm300k-house-malaysia" },
  openGraph: {
    title: "What Salary Do You Need to Buy a RM300,000 House in Malaysia?",
    description: "Minimum salary, DSR calculation, monthly instalment, and down payment for a RM300k home loan in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Salary for RM300k House Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Salary for RM300k House Malaysia", description: "How much salary do you need for a RM300,000 home loan in Malaysia?", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the minimum salary to buy a RM300,000 house in Malaysia?", a: "For a RM300,000 property with a 90% loan (RM270,000) at 4% interest over 30 years, the monthly instalment is approximately RM1,289. Assuming a 30% DSR threshold (conservative), you need a gross monthly salary of at least RM4,300. At the standard 60% DSR threshold with no other debts, you need a minimum gross salary of approximately RM2,150. In practice, banks use 60–70% DSR including all existing commitments — so if you have a car loan of RM600/month, your minimum salary rises to approximately RM3,150." },
  { q: "How much is the down payment for a RM300,000 house?", a: "For a first property in Malaysia, banks lend up to 90% of the property value, meaning you pay a 10% down payment. For a RM300,000 property, the down payment is RM30,000. Under the My First Home Scheme (Skim Rumah Pertamaku), eligible first-time buyers with incomes below RM5,000/month can access 100% financing — zero down payment — for properties up to RM300,000. EPF Account 2 (Akaun Sejahtera) can be used to fund the down payment." },
  { q: "What is the monthly instalment for a RM300,000 home loan?", a: "At a 4.0% interest rate over 30 years on a RM270,000 loan (90% of RM300,000), the monthly instalment is approximately RM1,289. At 3.7% over 35 years, it drops to approximately RM1,148. At 4.5% over 25 years, it rises to approximately RM1,497. Use our Loan Calculator with your specific rate and tenure for an exact figure. Note that home loans in Malaysia are on a reducing balance basis, not flat rate." },
  { q: "Can I use EPF to pay for a RM300,000 house?", a: "Yes. You can use EPF Account 2 (Akaun Sejahtera) to (1) pay the down payment and legal fees before loan drawdown, (2) reduce the outstanding principal of your home loan periodically, and (3) pay your monthly mortgage instalments under certain conditions. The amount you can withdraw depends on your Account 2 balance and the property price. The withdrawal reduces your retirement savings, so weigh this trade-off carefully." },
  { q: "Are there government schemes for RM300,000 properties?", a: "Yes. The My First Home Scheme (100% financing for properties up to RM300,000, for buyers with income ≤RM5,000/month) is specifically designed for this price range. PR1MA also offers units priced below RM300,000 in some areas. Stamp duty exemptions for first-time buyers on properties up to RM500,000 apply — saving you approximately RM2,000–RM5,000 in transaction costs on a RM300,000 property." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "What Salary Do You Need to Buy a RM300,000 House in Malaysia?", description: "Complete guide to the salary, down payment, monthly instalment, and DSR requirements for purchasing a RM300,000 property in Malaysia.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Salary for RM300k House Malaysia", item: PAGE_URL }] },
  ],
};

export default function SalaryRm300kHousePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-green-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-green-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Salary for RM300k House Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">What Salary Do You Need to Buy a RM300,000 House in Malaysia?</h1>
            <p className="text-gray-600 text-lg leading-relaxed">A RM300,000 property is within reach for many first-time buyers, especially with government schemes. Here is the exact salary, down payment, monthly instalment, and DSR math for a RM300k home loan.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Housing · First Home</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">7 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>The Numbers for a RM300,000 Property</h2>
          <p>A RM300,000 property is one of the most searched price points for Malaysian first-time buyers — it sits at the top of the My First Home Scheme (100% financing) eligibility threshold and captures the affordable landed terrace and condominium market in second-tier cities and suburban Klang Valley.</p>
          <p>Here are the key numbers at standard 90% LTV (10% down payment), 4.0% interest rate, 30-year tenure:</p>
          <ul>
            <li><strong>Property price:</strong> RM300,000</li>
            <li><strong>Down payment (10%):</strong> RM30,000</li>
            <li><strong>Loan amount (90%):</strong> RM270,000</li>
            <li><strong>Monthly instalment:</strong> ~RM1,289</li>
            <li><strong>Total interest paid (30 years):</strong> ~RM194,000</li>
            <li><strong>Minimum salary (30% DSR, no other debt):</strong> ~RM4,300 gross</li>
            <li><strong>Minimum salary (60% DSR, no other debt):</strong> ~RM2,150 gross</li>
          </ul>

          <h2>Understanding DSR for a RM300k Loan</h2>
          <p>Banks approve home loans based on your Debt Service Ratio (DSR) — the percentage of your gross monthly income consumed by debt repayments. Most Malaysian banks use a DSR threshold of 60%–70%. This means your total monthly debt payments (home loan + car loan + credit card minimum + any other loans) must not exceed 60–70% of your gross salary.</p>
          <p>If you have no other debts, the RM1,289/month instalment on its own needs to fall within your 60–70% DSR threshold. Working backwards: RM1,289 ÷ 60% = RM2,148 minimum gross salary. Most banks in practice also apply internal scoring criteria and may be more conservative than the pure DSR math suggests, so aiming for a gross salary 25–30% higher than the minimum gives you a comfortable buffer.</p>
          <p>If you have a car loan of RM600/month: (RM1,289 + RM600) ÷ 60% = RM3,148 minimum gross salary. Use our <Link href="/dsr-calculator-malaysia">DSR Calculator Malaysia</Link> to calculate your exact position including all your current commitments.</p>

          <h2>Can You Get a RM300k Loan on RM3,000 Salary?</h2>
          <p>Yes, potentially — if you have no other debt. A RM3,000 gross salary with zero other commitments gives you a DSR capacity of RM1,800/month (at 60%). The RM1,289 instalment on a RM270,000 loan represents 43% DSR — within the 60% threshold. However, most people earning RM3,000 have at least a car loan or PTPTN repayment, which would push the DSR up significantly.</p>
          <p>The My First Home Scheme specifically targets this income group — allowing 100% financing for buyers with gross income ≤ RM5,000/month (or RM10,000 combined for couples) for properties up to RM300,000. Under this scheme, no down payment is required, making RM300k homes accessible to buyers with salaries as low as RM2,500–RM3,000 gross.</p>

          <h2>Total Upfront Costs for a RM300,000 Property</h2>
          <p>Beyond the 10% down payment, budget for these additional upfront costs (estimates for a standard subsale property):</p>
          <ul>
            <li><strong>SPA legal fees:</strong> ~RM3,000–RM4,000</li>
            <li><strong>SPA stamp duty:</strong> RM0 (first-time buyer exemption for properties ≤RM500,000)</li>
            <li><strong>Loan agreement legal fees:</strong> ~RM2,000–RM3,000</li>
            <li><strong>Loan stamp duty:</strong> RM0 (first-time buyer exemption)</li>
            <li><strong>Valuation fee:</strong> ~RM1,000–RM1,500</li>
            <li><strong>MRTA/life insurance:</strong> ~RM5,000–RM10,000</li>
          </ul>
          <p>Total additional costs: approximately RM11,000–RM18,500. Combined with the RM30,000 down payment, you need roughly RM41,000–RM48,500 in cash before getting keys. If using the My First Home Scheme (zero down payment), you still need RM11,000–RM18,500 for legal fees and insurance.</p>

          <h2>RM300,000 vs RM500,000: Which Should You Target?</h2>
          <p>The decision depends on your salary trajectory and life goals. RM300,000 properties offer lower monthly commitments, quicker path to debt-free ownership, and eligibility for government schemes. RM500,000 properties are typically better located (closer to KL city centre or established suburbs), larger, and have stronger capital appreciation potential.</p>
          <p>If your salary is currently RM3,500–RM4,500 gross and likely to grow significantly in 3–5 years, targeting a RM300,000 property now is wise — get into the market at a manageable level, benefit from price appreciation, and refinance or upgrade later. Compare the numbers for a higher price point in our <Link href="/guides/salary-to-buy-rm500k-house-malaysia">Salary for RM500,000 House guide</Link>. For the full first-home buying process, read our <Link href="/guides/first-home-buyer-guide-malaysia">First Home Buyer Guide Malaysia</Link>.</p>
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
