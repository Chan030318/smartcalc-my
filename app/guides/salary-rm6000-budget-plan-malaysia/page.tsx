import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/salary-rm6000-budget-plan-malaysia`;

export const metadata: Metadata = {
  title: "RM6,000 Salary Budget Plan Malaysia 2026 — How to Manage RM6k/Month",
  description: "Monthly budget plan for a RM6,000 gross salary in Malaysia. Take-home pay after EPF and PCB, spending allocations, how to manage a car and home loan simultaneously, and investment targets.",
  keywords: ["RM6000 salary budget plan Malaysia", "gaji RM6000 budget Malaysia", "RM6k salary Malaysia expenses", "budget bulanan gaji RM6000", "RM6000 take home pay Malaysia 2026"],
  alternates: { canonical: "/guides/salary-rm6000-budget-plan-malaysia" },
  openGraph: {
    title: "RM6,000 Salary Budget Plan Malaysia 2026",
    description: "Take-home pay and complete monthly budget breakdown for a RM6,000 gross salary in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RM6000 Salary Budget Plan Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "RM6,000 Salary Budget Plan Malaysia", description: "How to budget a RM6,000 salary in Malaysia — take-home pay and allocation guide.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the take-home pay for a RM6,000 salary in Malaysia?", a: "For a RM6,000 gross monthly salary: EPF (11%) = RM660; SOCSO ≈ RM29.75; EIS ≈ RM11.90; PCB ≈ RM280–RM330 (varies by reliefs). Approximate take-home pay: RM4,970–RM5,020/month. With tax reliefs (EPF, insurance, lifestyle, SSPN), PCB can reduce to RM150–RM200, raising take-home to RM5,090–RM5,140. Use our <a href='/salary-calculator-malaysia'>Salary Calculator</a> for exact figures." },
  { q: "Can I manage a car loan and home loan on RM6,000 salary?", a: "Yes — RM6,000 salary can support both a car loan and a RM300,000–RM400,000 home loan simultaneously with careful budget management. Example: car loan RM700/month + home loan RM1,500/month (RM400k, 30 years, 4%) = RM2,200/month total debt commitments. DSR = RM2,200 ÷ RM6,000 = 36.7% — well within the 60% bank threshold. After debt commitments, you have RM2,800 take-home for living expenses and savings. This is tight but manageable if you minimize other discretionary spending." },
  { q: "What income tax do I pay on RM6,000 salary Malaysia?", a: "At RM6,000 gross (RM72,000 annual), chargeable income after EPF (RM7,920) and personal relief (RM9,000) is approximately RM55,080 — in the 13% tax bracket for the portion above RM35,001. Annual income tax is approximately RM2,000–RM2,800 before additional reliefs. With common reliefs (insurance RM3,000, SSPN RM6,000, lifestyle RM2,500, medical RM1,000), chargeable income reduces further and tax falls to approximately RM1,200–RM1,800/year. PCB withholds approximately RM280–RM330/month to cover this." },
  { q: "Should I invest or pay off debt faster on RM6,000 salary?", a: "The standard financial planning framework: (1) Build 3–6 month emergency fund first; (2) Contribute enough to EPF/employer-matched schemes to get the full employer match (already happening automatically); (3) Pay off high-interest debt (credit cards at 18% p.a., personal loans at 10%+) before investing; (4) Invest in tax-advantaged vehicles (ASB for Bumiputera, EPF voluntary, PRS); (5) Invest in broadly diversified low-cost funds. On RM6,000 salary, you should be able to do all of (3) and (4) simultaneously after covering living expenses." },
  { q: "What are the key financial priorities at RM6,000 salary?", a: "At RM6,000 gross, you are in a strong enough financial position to pursue multiple goals simultaneously: (1) Emergency fund of 6 months (target RM20,000–RM25,000 if expenses are RM3,500/month); (2) Home ownership — a RM400,000–RM500,000 property is within reach with discipline and a partner's income; (3) Building an investment portfolio outside EPF — target 15%–20% of take-home in savings/investment; (4) Life and health insurance — critical at this income level as more dependents are likely; (5) Career progression to RM8,000–RM10,000 within 5 years to widen the wealth gap." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "RM6,000 Salary Budget Plan Malaysia 2026 — How to Manage RM6k/Month", description: "Complete monthly budget plan for a RM6,000 gross salary in Malaysia — take-home pay, expense allocations, debt management, investment targets, and financial milestone planning.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "RM6,000 Salary Budget Plan Malaysia", item: PAGE_URL }] },
  ],
};

export default function SalaryRm6000BudgetPlanPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-sky-50 to-blue-50 border-b border-sky-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-sky-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">RM6,000 Salary Budget Plan Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">RM6,000 Salary Budget Plan Malaysia 2026 — How to Manage RM6k/Month</h1>
            <p className="text-gray-600 text-lg leading-relaxed">RM6,000 gross is a strong Malaysian salary that opens up simultaneous home ownership, car, and meaningful investments — if managed intentionally. Here is the complete budget, take-home pay, and financial roadmap.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full">Budget · Salary</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>RM6,000 Take-Home Pay</h2>
          <p>Gross salary RM6,000. Deductions: EPF (11%) RM660 + SOCSO RM29.75 + EIS RM11.90 + PCB ≈ RM300. <strong>Approximate take-home: RM4,998/month.</strong> With typical tax reliefs, take-home may reach RM5,100–RM5,150.</p>

          <h2>Suggested Monthly Budget (KL/Klang Valley)</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-sky-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-sky-100">Category</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-sky-100">Amount (RM)</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-sky-100">% of Take-Home</th></tr></thead>
              <tbody>
                {[
                  ["Rent / Home Loan", "1,300", "26%"],
                  ["Groceries & Food", "750", "15%"],
                  ["Transport (car loan + petrol + toll)", "850", "17%"],
                  ["Utilities (TNB, water, internet, phone)", "300", "6%"],
                  ["Insurance (life + health)", "350", "7%"],
                  ["Entertainment & Dining Out", "400", "8%"],
                  ["Savings / Emergency Fund", "600", "12%"],
                  ["Investments (unit trust / ASB / stocks)", "400", "8%"],
                  ["Miscellaneous / Buffer", "48", "1%"],
                  ["TOTAL", "5,000", "100%"],
                ].map(([cat, amt, pct], i) => (
                  <tr key={i} className={`border-b border-gray-50 ${cat === "TOTAL" ? "font-bold bg-sky-50" : ""}`}><td className="px-4 py-2.5 text-gray-700">{cat}</td><td className="px-4 py-2.5 text-center text-gray-600">{amt}</td><td className="px-4 py-2.5 text-center text-gray-500">{pct}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>RM6,000 Versus RM5,000: What Changes</h2>
          <p>The additional RM800/month take-home (from RM4,260 at RM5,000 gross to ≈RM5,000 at RM6,000 gross) makes three meaningful differences: (1) You can afford a home loan monthly instalment without compromising other categories. Budget shows RM1,300 for housing — this covers a RM350,000 home loan (≈RM1,400/month) while taking a modest hit elsewhere, or a RM300,000 home loan (≈RM1,289/month) with comfortable headroom. (2) Investment allocation increases from RM200 to RM400/month — doubling your wealth-building pace. (3) Insurance budget increases from RM250 to RM350 — allowing more complete protection (life + medical + critical illness).</p>

          <h2>Income Tax at RM6,000 Salary</h2>
          <p>At RM72,000 annual gross, after EPF deduction (RM7,920) and personal reliefs, your chargeable income falls into the 13%–19% tax bracket range. Annual income tax (before reliefs): approximately RM2,500–RM3,500. With common reliefs (EPF, insurance, lifestyle, SSPN for children), this may reduce to RM1,200–RM2,000/year. Read our detailed guide on <Link href="/guides/how-pcb-tax-works-malaysia">how PCB tax works</Link> to understand monthly withholding and how to optimise through reliefs.</p>

          <h2>Investments at RM6,000 Salary</h2>
          <p>The RM400/month investment allocation in the budget above is a conservative starting point. If you have already built your emergency fund and have no high-interest debt, increasing this to RM600–RM800/month through reduced discretionary spending is valuable. At RM600/month invested at 7% annual return (diversified equity): approximately RM52,000 over 5 years, RM148,000 over 10 years — the compounding effect becoming powerful by the second half of the decade.</p>
          <p>Compare salary budgets: <Link href="/guides/salary-rm4000-budget-plan-malaysia">RM4,000 Budget Plan</Link> | <Link href="/guides/salary-rm5000-budget-plan-malaysia">RM5,000 Budget Plan</Link>. For savings strategies, see <Link href="/guides/how-to-save-first-rm10000-malaysia">How to Save Your First RM10,000</Link>.</p>
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
