import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/salary-rm5000-budget-plan-malaysia`;

export const metadata: Metadata = {
  title: "RM5,000 Salary Budget Plan Malaysia 2026 — How to Manage RM5k/Month",
  description: "Complete monthly budget plan for a RM5,000 gross salary in Malaysia. Take-home pay after EPF, SOCSO, and PCB, with spending categories, savings targets, and financial milestones achievable on RM5k.",
  keywords: ["RM5000 salary budget plan Malaysia", "gaji RM5000 budget Malaysia", "RM5k salary Malaysia expenses", "budget bulanan gaji RM5000", "RM5000 take home pay Malaysia 2026"],
  alternates: { canonical: "/guides/salary-rm5000-budget-plan-malaysia" },
  openGraph: {
    title: "RM5,000 Salary Budget Plan Malaysia 2026",
    description: "Take-home pay and complete monthly budget breakdown for a RM5,000 gross salary in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RM5000 Salary Budget Plan Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "RM5,000 Salary Budget Plan Malaysia", description: "How to budget a RM5,000 salary in Malaysia — take-home pay and expense breakdown.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the take-home pay for a RM5,000 salary in Malaysia?", a: "For a RM5,000 gross monthly salary: EPF employee (11%) = RM550; SOCSO ≈ RM24.75; EIS ≈ RM9.90; PCB (estimated, no additional reliefs) ≈ RM150–RM175. Approximate take-home pay: RM4,240–RM4,265/month. With common tax reliefs (EPF, insurance, lifestyle), PCB may reduce significantly. Use our <a href='/salary-calculator-malaysia'>Salary Calculator Malaysia</a> for your exact deductions." },
  { q: "What is a reasonable car budget on RM5,000 salary?", a: "On a RM5,000 gross salary (≈RM4,250 take-home), keeping total transport at 15%–20% means RM638–RM850/month. This comfortably covers a car loan of RM500–RM600/month plus RM200–RM300 for petrol, toll, and maintenance. You could finance a Perodua Bezza or Proton Saga new (RM400–RM500/month on a 9-year loan) while maintaining petrol, toll, and insurance within budget. Avoid financed vehicles with monthly payments above RM700 on this salary — it leaves too little room for housing." },
  { q: "Can I buy a RM300k home on RM5,000 salary?", a: "Yes — RM5,000 salary comfortably supports a RM300,000 home loan. The monthly instalment for a 90% loan (RM270,000) at 4.0% over 30 years is approximately RM1,289. DSR: RM1,289 ÷ RM5,000 = 25.8% — well within the 60% threshold even with a car loan of RM500/month (total DSR 35.8%). Under the My First Home Scheme (income ≤RM5,000/month), you may even access 100% financing — eliminating the down payment requirement entirely." },
  { q: "How much should I save on a RM5,000 salary Malaysia?", a: "A target of 20%–25% of take-home pay (≈RM850–RM1,060/month) is achievable on RM5,000 gross without extreme frugality. This is separate from EPF contributions (RM550 + RM650 employer = RM1,200/month to EPF). Combined savings (EPF + discretionary savings) of RM2,000+/month is a strong position. Prioritise: 3–6 month emergency fund first, then invest surplus in ASB (Bumiputera), unit trusts, or diversified index funds." },
  { q: "What financial milestones are achievable on RM5,000 salary?", a: "Year 1: Complete a 3-month emergency fund (≈RM13,000 target). Year 2: Build a 6-month emergency fund; accumulate RM10,000–RM15,000 in investments. Year 3–5: Accumulate sufficient down payment and qualify for a first home loan (RM300,000–RM400,000 range). Year 5–10: Pay down PTPTN if applicable; grow investment portfolio; potentially upgrade property or start second income stream. RM5,000 salary provides a solid base — discipline and avoiding lifestyle inflation are the key variables." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "RM5,000 Salary Budget Plan Malaysia 2026 — How to Manage RM5k/Month", description: "Complete monthly budget plan for a RM5,000 gross salary in Malaysia — take-home pay, expense categories, savings targets, and achievable financial milestones.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "RM5,000 Salary Budget Plan Malaysia", item: PAGE_URL }] },
  ],
};

export default function SalaryRm5000BudgetPlanPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-violet-50 border-b border-blue-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-blue-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">RM5,000 Salary Budget Plan Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">RM5,000 Salary Budget Plan Malaysia 2026 — How to Manage RM5k/Month</h1>
            <p className="text-gray-600 text-lg leading-relaxed">RM5,000 gross puts you in the upper-middle income tier for Malaysia. With smart budgeting, this salary supports a car, a path to home ownership, comfortable living, and meaningful savings — if managed well.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Budget · Salary</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>RM5,000 Take-Home Pay After Deductions</h2>
          <p>Gross salary RM5,000. Mandatory deductions: EPF 11% = RM550; SOCSO ≈ RM24.75; EIS ≈ RM9.90; PCB ≈ RM155 (estimated without additional reliefs). <strong>Approximate take-home: RM4,260/month.</strong></p>

          <h2>Suggested Monthly Budget (KL/Klang Valley)</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-blue-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-blue-100">Category</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-blue-100">Amount (RM)</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-blue-100">% of Take-Home</th></tr></thead>
              <tbody>
                {[
                  ["Rent / Housing", "1,100", "26%"],
                  ["Groceries & Food", "700", "16%"],
                  ["Transport (car + petrol + toll)", "800", "19%"],
                  ["Utilities (TNB, water, internet, phone)", "280", "7%"],
                  ["Insurance (life + health)", "250", "6%"],
                  ["Entertainment & Dining Out", "300", "7%"],
                  ["Savings / Emergency Fund", "600", "14%"],
                  ["Investments", "200", "5%"],
                  ["Miscellaneous / Buffer", "30", "1%"],
                  ["TOTAL", "4,260", "100%"],
                ].map(([cat, amt, pct], i) => (
                  <tr key={i} className={`border-b border-gray-50 ${cat === "TOTAL" ? "font-bold bg-blue-50" : ""}`}><td className="px-4 py-2.5 text-gray-700">{cat}</td><td className="px-4 py-2.5 text-center text-gray-600">{amt}</td><td className="px-4 py-2.5 text-center text-gray-500">{pct}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How RM5,000 Compares to RM4,000 and RM6,000</h2>
          <p>The RM5,000 salary level is a significant step up from RM4,000 — the additional RM800 take-home per month (after deductions) enables both higher living standards and higher savings simultaneously. Common upgrades: own studio or 1-bedroom apartment instead of a room, a newer or more reliable car, increased entertainment budget, and faster savings accumulation.</p>
          <p>The upgrade to RM6,000 adds another RM700–RM750 in take-home — primarily going to higher housing (own 2-bedroom flat or begin accumulating toward a first home) and investment contributions. See the <Link href="/guides/salary-rm6000-budget-plan-malaysia">RM6,000 Budget Plan</Link> for that comparison.</p>

          <h2>Wealth-Building at RM5,000</h2>
          <p>The key wealth-building levers at this income level: (1) EPF grows at RM550 (employee) + RM650 (12% employer) = RM1,200/month — that is RM14,400/year compounding at ~6% for retirement. (2) The suggested RM600/month cash savings grows to approximately RM37,000 over 5 years in a money market fund. (3) RM200/month in investments (unit trust, ASB, or diversified ETF) grows to approximately RM14,000+ over 5 years — the compounding base for long-term wealth. (4) Targeting a RM300k–RM400k first home purchase within 5 years is realistic with disciplined saving.</p>
          <p>Use our <Link href="/salary-calculator-malaysia">Salary Calculator</Link> to confirm your exact take-home, our <Link href="/epf-calculator-malaysia">EPF Calculator</Link> to project your retirement balance, and our <Link href="/guides/how-to-save-first-rm10000-malaysia">RM10,000 savings guide</Link> for practical saving tips.</p>
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
