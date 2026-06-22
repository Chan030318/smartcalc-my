import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/salary-rm4000-budget-plan-malaysia`;

export const metadata: Metadata = {
  title: "RM4,000 Salary Budget Plan Malaysia 2026 — How to Manage RM4k/Month",
  description: "Realistic monthly budget plan for a RM4,000 gross salary in Malaysia. Take-home pay after EPF and PCB, suggested allocation for rent, food, transport, savings, and how to build wealth on RM4k.",
  keywords: ["RM4000 salary budget plan Malaysia", "gaji RM4000 budget Malaysia", "RM4k salary Malaysia expenses", "budget bulanan gaji RM4000", "RM4000 take home pay Malaysia", "RM4000 gross salary Malaysia"],
  alternates: { canonical: "/guides/salary-rm4000-budget-plan-malaysia" },
  openGraph: {
    title: "RM4,000 Salary Budget Plan Malaysia 2026",
    description: "Take-home pay and complete monthly budget breakdown for a RM4,000 gross salary in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RM4000 Salary Budget Plan Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "RM4,000 Salary Budget Plan Malaysia", description: "How to budget a RM4,000 salary in Malaysia — take-home pay and expense breakdown.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the take-home pay for a RM4,000 salary in Malaysia?", a: "For a RM4,000 gross monthly salary in Malaysia (assuming standard employee EPF 11%, SOCSO, EIS, and no dependents or additional reliefs): EPF employee contribution ≈ RM440; SOCSO ≈ RM19.75; EIS ≈ RM7.90; PCB (income tax monthly deduction) ≈ RM60–RM80 (varies by relief claims). Approximate take-home pay: RM3,450–RM3,470 per month. Use our free <a href='/salary-calculator-malaysia'>Salary Calculator Malaysia</a> for your exact deductions." },
  { q: "Can I afford a car and house on a RM4,000 salary?", a: "Simultaneously financing both a car and a house on RM4,000 gross is very challenging. A modest car loan (RM700–RM800/month) plus a RM300,000 home loan (RM1,289/month) totals approximately RM2,000/month in loan commitments — about 50% of gross salary, which is the upper limit of most banks' DSR threshold. You would have very little room for other expenses. The practical approach: buy a used car with no loan (or a very cheap new car), build savings for a down payment, then apply for a home loan. Avoid taking on both simultaneously." },
  { q: "How much should I save on a RM4,000 salary?", a: "On a RM4,000 gross salary (≈RM3,460 take-home), aim to save at least 20%: approximately RM690/month. This is in addition to the mandatory EPF contribution (RM440/month employer + RM440 employee = RM880/month total going to retirement). So your true savings rate including EPF is approximately RM880 + RM690 = RM1,570/month or 39% of gross — a strong position. If you have debt (car loan, PTPTN), prioritise clearing high-interest debt before aggressive saving." },
  { q: "What is a realistic rent budget on RM4,000 salary in Malaysia?", a: "On a RM3,460 take-home pay, spending 25%–30% on housing is standard: RM865–RM1,040/month. This covers: a room in a shared house in KL (RM500–RM800), a studio apartment in a suburb (RM800–RM1,200), or a 2-bedroom apartment in second-tier cities like Shah Alam, Johor Bahru, or Ipoh (RM700–RM1,000). Spending above 30% of take-home on rent leaves too little for other categories. If your desired location requires more than RM1,200 rent, consider a housemate to split costs." },
  { q: "Is RM4,000 a good salary in Malaysia?", a: "RM4,000 gross is approximately 67% above Malaysia's median individual income (approximately RM2,400/month as of 2024 estimates). It is above the average salary for fresh graduates (RM2,200–RM3,000) and represents a comfortable entry-level professional income. In KL, RM4,000 requires careful budgeting — especially for housing and transport. In second-tier cities (Ipoh, Johor Bahru, Kota Bahru), RM4,000 allows a more comfortable lifestyle with less financial pressure." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "RM4,000 Salary Budget Plan Malaysia 2026 — How to Manage RM4k/Month", description: "Complete monthly budget plan for a RM4,000 gross salary in Malaysia — take-home pay calculation, category-by-category spending allocation, savings targets, and wealth-building strategies.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "RM4,000 Salary Budget Plan Malaysia", item: PAGE_URL }] },
  ],
};

export default function SalaryRm4000BudgetPlanPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-violet-50 to-blue-50 border-b border-violet-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-violet-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">RM4,000 Salary Budget Plan Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">RM4,000 Salary Budget Plan Malaysia 2026 — How to Manage RM4k/Month</h1>
            <p className="text-gray-600 text-lg leading-relaxed">A RM4,000 gross salary is a solid mid-tier income in Malaysia. With the right budget, you can cover essentials, save meaningfully, and make progress toward key financial goals like emergency fund, home ownership, and retirement.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">Budget · Salary</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>RM4,000 Take-Home Pay After Deductions</h2>
          <p>Your gross salary of RM4,000 is not what lands in your bank account. Mandatory deductions:</p>
          <ul>
            <li><strong>EPF (employee 11%):</strong> RM440</li>
            <li><strong>SOCSO First Category:</strong> ≈ RM19.75</li>
            <li><strong>EIS:</strong> ≈ RM7.90</li>
            <li><strong>PCB income tax (estimated, no reliefs):</strong> ≈ RM70</li>
          </ul>
          <p><strong>Approximate take-home pay: RM3,462/month.</strong> Note: PCB depends heavily on your tax reliefs (EPF, SSPN, insurance, medical, lifestyle, etc.) — with common reliefs, PCB may be RM0–RM40. Use our <Link href="/salary-calculator-malaysia">Salary Calculator</Link> for your exact figure. See our <Link href="/guides/how-pcb-tax-works-malaysia">How PCB Tax Works guide</Link> for more detail.</p>

          <h2>Suggested Monthly Budget for RM4,000 Salary (KL/Klang Valley)</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-violet-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Category</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">Amount (RM)</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-violet-100">% of Take-Home</th></tr></thead>
              <tbody>
                {[
                  ["Rent / Housing", "900", "26%"],
                  ["Groceries & Food", "600", "17%"],
                  ["Transport (car loan/petrol/toll/LRT)", "700", "20%"],
                  ["Utilities (TNB, water, internet, phone)", "250", "7%"],
                  ["Insurance (life + health)", "200", "6%"],
                  ["Entertainment & Dining Out", "250", "7%"],
                  ["Savings / Emergency Fund", "400", "12%"],
                  ["Investments / Voluntary EPF", "100", "3%"],
                  ["Miscellaneous / Buffer", "62", "2%"],
                  ["TOTAL", "3,462", "100%"],
                ].map(([cat, amt, pct], i) => (
                  <tr key={i} className={`border-b border-gray-50 ${cat === "TOTAL" ? "font-bold bg-violet-50" : ""}`}><td className="px-4 py-2.5 text-gray-700">{cat}</td><td className="px-4 py-2.5 text-center text-gray-600">{amt}</td><td className="px-4 py-2.5 text-center text-gray-500">{pct}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Key Budget Decisions at RM4,000 Gross</h2>
          <p><strong>Housing:</strong> This is the highest-leverage budget decision. Spending RM600/month (shared house) vs RM1,200/month (own studio) frees RM600/month for savings — that is RM7,200/year or RM36,000 over 5 years that can become a home down payment.</p>
          <p><strong>Transport:</strong> If you are currently car-free (commuting by LRT, bus, or e-hailing), you may spend only RM300–RM400/month on transport instead of RM700+. This single decision dramatically improves your financial position at RM4,000 salary. If you must drive, aim for a used car with no or minimal loan commitment.</p>
          <p><strong>Savings:</strong> On this budget, saving RM400/month builds approximately RM4,800/year. At the 3.5%–4.5% return of a money market fund, RM4,800/year over 5 years grows to approximately RM27,000 — meaningful progress toward an emergency fund or home down payment. For savings strategies, see our <Link href="/guides/how-to-save-first-rm10000-malaysia">guide on saving your first RM10,000</Link>.</p>

          <h2>Financial Goals Achievable on RM4,000 Salary</h2>
          <p>In 12 months: Build a 3-month emergency fund (RM10,000–RM13,000 assuming RM3,500 essential expenses). In 24–36 months: Complete a 6-month emergency fund and begin investing surplus in ASB or unit trusts. In 36–60 months: Accumulate a down payment for a RM300,000 first property (RM30,000 required). These timelines assume disciplined adherence to the budget above and no major unexpected expenses.</p>
          <p>Also compare budgets for other salary levels: <Link href="/guides/rm3000-salary-budget-plan-malaysia">RM3,000 Budget Plan</Link>, <Link href="/guides/salary-rm5000-budget-plan-malaysia">RM5,000 Budget Plan</Link>, and <Link href="/guides/salary-rm6000-budget-plan-malaysia">RM6,000 Budget Plan</Link>.</p>
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
