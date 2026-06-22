import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-pcb-tax-works-malaysia`;

export const metadata: Metadata = {
  title: "How PCB Tax Works in Malaysia — Monthly Tax Deduction Explained (2024)",
  description:
    "Learn exactly how PCB (Potongan Cukai Berjadual / MTD) is calculated in Malaysia, how your employer deducts it monthly, and how TP1 declarations and Zakat can reduce your PCB.",
  keywords: [
    "how PCB works Malaysia",
    "PCB calculation Malaysia",
    "MTD Malaysia",
    "potongan cukai berjadual Malaysia",
    "monthly tax deduction Malaysia",
    "PCB formula Malaysia 2024",
    "TP1 PCB Malaysia",
    "LHDN PCB",
  ],
  alternates: { canonical: "/guides/how-pcb-tax-works-malaysia" },
  openGraph: {
    title: "How PCB Tax Works in Malaysia — Monthly Tax Deduction Explained (2024)",
    description: "The PCB calculation formula, how your employer remits it to LHDN, TP1 declarations, and why your PCB changes when your salary changes.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How PCB Works Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "How PCB Tax Works in Malaysia", description: "PCB formula, employer obligations, TP1 declarations, and Zakat rebate explained.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "How is PCB calculated in Malaysia?", a: "PCB is calculated using the annual taxable income method: (monthly salary × 12) + any additional income, minus EPF and approved deductions. The LHDN progressive tax rate is applied to get annual tax, then divided by 12 to get monthly PCB. Marital status, number of children, and TP1 declarations all reduce the annual income estimate used in the formula." },
  { q: "Why did my PCB change even though my salary didn't?", a: "PCB can change mid-year for several reasons: (1) a bonus or one-off payment in a previous month raised the estimated annual income; (2) you or your employer made a TP1 update; (3) your employer corrected a calculation error; (4) you have extra income like commissions. PCB is recalculated monthly based on year-to-date income divided by remaining months." },
  { q: "What is the difference between CP38 and TP1?", a: "TP1 is a declaration from you to your employer listing your personal tax reliefs (insurance, children, spouse) so PCB can be reduced. CP38 is an additional deduction notice issued by LHDN, typically because you owe tax from a prior year that was not fully paid. CP38 amounts are deducted monthly on top of regular PCB until the debt is settled." },
  { q: "Does my employer need my permission to deduct PCB?", a: "No. PCB deduction is mandatory under the Income Tax Act 1967. Your employer is legally required to deduct and remit PCB — they do not need your consent. However, you can reduce the amount through a TP1 declaration or Zakat remittance receipts, which the employer must apply upon receipt." },
  { q: "What happens if my employer does not deduct PCB?", a: "If your employer fails to deduct and remit PCB, you still owe the income tax personally. You will also owe it when you file your annual return. The employer faces penalties under the Income Tax Act. LHDN can pursue both the employer and, in some cases, the employee if the obligation is not met." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How PCB Tax Works in Malaysia — Monthly Tax Deduction Explained (2024)",
  description: "A detailed explanation of how PCB (Potongan Cukai Berjadual / MTD) is calculated, why it changes, and how TP1 declarations and Zakat reduce your monthly deduction.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "How PCB Tax Works Malaysia", item: PAGE_URL },
  ]},
};

export default function HowPcbWorksPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-indigo-50 to-violet-50 border-b border-indigo-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-indigo-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">How PCB Works</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How PCB Tax Works in Malaysia — Monthly Tax Deduction Explained
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              PCB (Potongan Cukai Berjadual) is deducted from your salary every month — but how is the amount decided? This guide explains the calculation method, what affects it, and how to legitimately reduce it.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Tax</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>What Is PCB?</h2>
          <p>PCB stands for <strong>Potongan Cukai Berjadual</strong> — literally &ldquo;Scheduled Tax Deduction.&rdquo; It is also known as <strong>MTD (Monthly Tax Deduction)</strong>. It is not a separate tax — it is income tax, collected monthly by your employer on behalf of LHDN rather than as an annual lump sum.</p>
          <p>Think of PCB as an instalment plan: LHDN estimates what you owe for the year and collects it in 12 equal monthly slices. The key word is <em>estimate</em> — the actual liability is settled when you file your annual Borang BE return.</p>

          <h2>The PCB Calculation Method</h2>
          <p>LHDN uses the <strong>computerised PCB formula</strong> (also called the Kalkulator PCB or CP38A method). The employer&rsquo;s payroll software performs this each month. Here is the logic:</p>
          <ol>
            <li><strong>Annualise your income:</strong> Projected annual taxable income = (Total remuneration received so far this year + remaining monthly salary × remaining months). Bonuses and allowances are factored in when paid.</li>
            <li><strong>Deduct EPF contributions:</strong> Employee EPF (11% of gross) is deducted from the annualised amount. Other deductions declared via TP1 are also subtracted.</li>
            <li><strong>Apply progressive tax rates:</strong> LHDN&rsquo;s YA 2024 brackets are applied to the chargeable income to get estimated annual tax.</li>
            <li><strong>Apply rebates:</strong> Personal rebate (RM400 for chargeable income ≤RM35,000), and Zakat if declared.</li>
            <li><strong>Divide by remaining months:</strong> Annual tax estimate − tax already paid this year = remaining tax. Divide by remaining months in the year to get this month&rsquo;s PCB.</li>
          </ol>
          <p>This is why PCB can change month to month even if your base salary stays the same — receiving a bonus in August, for example, will raise PCB for the remaining months of the year as it updates the annual income estimate.</p>

          <h2>What Factors Affect Your PCB Amount</h2>
          <ul>
            <li><strong>Gross monthly salary:</strong> The primary driver. Higher salary → higher PCB.</li>
            <li><strong>Bonuses and commissions:</strong> One-off payments raise the annual income estimate and can significantly spike PCB for several months.</li>
            <li><strong>Marital status:</strong> Single, married (spouse working), or married (spouse not working) yield different PCB amounts. Updating your employer when you marry or have a child reduces PCB.</li>
            <li><strong>Number of children:</strong> Each qualifying child reduces PCB. Declaring children via TP1 ensures this is reflected monthly.</li>
            <li><strong>Residency:</strong> Non-residents pay a flat 30% on all income — no progressive rates, no reliefs.</li>
            <li><strong>TP1 declarations:</strong> Insurance premiums, education fees, and other declared reliefs reduce the chargeable income estimate.</li>
            <li><strong>Zakat:</strong> Paid Zakat is a direct 1-for-1 rebate — each ringgit of Zakat paid reduces your PCB by exactly RM1 (not just a chargeable income reduction).</li>
          </ul>

          <h2>TP1 — How to Reduce PCB Monthly</h2>
          <p>The <strong>TP1 form</strong> (also referenced as CP34A) is a declaration you submit to your employer — <em>not</em> to LHDN — informing them of your personal tax reliefs so PCB can be adjusted downward. Without a TP1, your employer assumes you have no reliefs beyond the standard personal exemption.</p>
          <p>Common reliefs to declare via TP1:</p>
          <ul>
            <li>Life insurance and takaful premiums (up to RM3,000)</li>
            <li>Medical insurance premiums (up to RM3,000, shared with life insurance to RM7,000 total)</li>
            <li>Spouse relief (RM4,000 if spouse has no or minimal income)</li>
            <li>Children under 18 (RM2,000 each) or children in higher education (RM8,000 each)</li>
            <li>Disability reliefs (if applicable)</li>
          </ul>
          <p>Your employer applies the TP1 to reduce your monthly PCB. You should update TP1 whenever your circumstances change (new child, new insurance policy, etc.). There is no penalty for updating TP1 — your employer is required to honour it.</p>

          <h2>CP38 — When LHDN Asks for More</h2>
          <p>If LHDN determines you underpaid tax in a prior year — either from missed PCB, additional income not accounted for, or errors in a past return — they can issue a <strong>CP38</strong> notice to your employer. This instructs the employer to deduct an additional monthly amount on top of your regular PCB until the outstanding amount is recovered. CP38 is separate from the regular PCB schedule and will show as a separate line on your payslip.</p>

          <h2>How Employers Remit PCB to LHDN</h2>
          <p>Employers must remit all PCB collected from employees to LHDN by the <strong>15th of the following month</strong>. They file a <strong>CP39</strong> return listing all employees and PCB amounts. At year-end, each employee receives an <strong>EA Form</strong> (by 28 February) showing total remuneration and total PCB deducted for the year — this is used to file your personal tax return.</p>

          <div className="not-prose bg-indigo-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Calculate Your Monthly PCB</h3>
            <p className="text-indigo-100 mb-5 text-sm">See exactly how much PCB should be deducted from your salary, with TP1 reliefs and Zakat accounted for.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pcb-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors text-sm">PCB Calculator →</Link>
              <Link href="/income-tax-calculator-malaysia" className="inline-flex items-center gap-2 bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-400 transition-colors text-sm border border-indigo-400">Income Tax Calculator →</Link>
            </div>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/pcb-vs-income-tax-malaysia">PCB vs Income Tax Malaysia — What&rsquo;s the Difference?</Link></li>
            <li><Link href="/guides/how-to-reduce-income-tax-malaysia">How to Reduce Income Tax Legally in Malaysia</Link></li>
            <li><Link href="/guides/salary-deductions-explained-malaysia">Malaysian Salary Deductions Explained</Link></li>
            <li><Link href="/pcb-calculator-malaysia">PCB Calculator Malaysia</Link></li>
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
        <AuthorCard />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
