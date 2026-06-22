import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-to-calculate-salary-after-epf`;

export const metadata: Metadata = {
  title: "How to Calculate Take-Home Salary After EPF in Malaysia (2024)",
  description:
    "Step-by-step guide to calculating your net salary in Malaysia after EPF (11%), SOCSO, EIS, and PCB income tax deductions. Includes worked examples and a free salary calculator.",
  keywords: [
    "calculate salary after EPF Malaysia",
    "net salary Malaysia",
    "take home pay Malaysia",
    "EPF deduction calculator Malaysia",
    "SOCSO EIS deduction Malaysia",
    "PCB calculation Malaysia",
    "Malaysia salary calculation 2024",
    "gaji bersih Malaysia",
  ],
  alternates: { canonical: "/guides/how-to-calculate-salary-after-epf" },
  openGraph: {
    title: "How to Calculate Take-Home Salary After EPF in Malaysia (2024)",
    description:
      "Full worked example: EPF 11%, SOCSO, EIS, and PCB deductions explained step by step. Know exactly what arrives in your bank account.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Malaysia Take-Home Salary Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate Take-Home Salary After EPF in Malaysia",
    description: "EPF 11%, SOCSO, EIS, and PCB deductions explained with a worked example for 2024.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What percentage of my salary goes to EPF?",
    a: "Employees contribute 11% of their gross monthly salary to EPF (KWSP). Your employer also contributes 13% (for salaries ≤RM5,000) or 12% (for salaries > RM5,000). The employee 11% is deducted from your gross salary before you receive it.",
  },
  {
    q: "Is EPF deducted from gross or net salary?",
    a: "EPF is deducted from your gross salary. The 11% employee contribution is calculated on your gross (pre-deduction) salary and removed before you receive your pay.",
  },
  {
    q: "What is PCB in Malaysia?",
    a: "PCB stands for Potongan Cukai Berjadual, also called MTD (Monthly Tax Deduction). It is the income tax withheld by your employer each month and remitted to LHDN. The amount depends on your salary, marital status, number of children, and any TP1 declarations you submit to your employer.",
  },
  {
    q: "Are SOCSO and EIS contributions mandatory?",
    a: "Yes, for employees earning RM5,000/month or below, both SOCSO (Social Security Organisation) and EIS (Employment Insurance System) contributions are mandatory. SOCSO covers workplace injury and disability, while EIS provides income support if you lose your job.",
  },
  {
    q: "Can I reduce my EPF contribution rate?",
    a: "Yes. You can opt to reduce your employee EPF contribution to 9% or even lower rates by submitting a formal election to your employer and EPF. However, reducing contributions means a smaller retirement fund. The standard rate is 11%.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Calculate Take-Home Salary After EPF in Malaysia (2024)",
  description:
    "Step-by-step guide to calculating net take-home salary in Malaysia after EPF 11%, SOCSO, EIS, and PCB deductions. Includes a worked example with real numbers.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "SmartCalc MY",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` },
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: "Calculate Salary After EPF", item: PAGE_URL },
    ],
  },
};

// Worked example table data for RM5,000 gross
const deductions = [
  { label: "Gross Salary", amount: 5000, note: "Before any deductions", type: "gross" },
  { label: "EPF (Employee 11%)", amount: -550, note: "5,000 × 11%", type: "deduct" },
  { label: "SOCSO (Employee)", amount: -29.75, note: "RM5,000 salary band", type: "deduct" },
  { label: "EIS (Employee)", amount: -9.75, note: "RM5,000 salary band", type: "deduct" },
  { label: "PCB (Income Tax)", amount: -80, note: "Single, no reliefs (approx.)", type: "deduct" },
  { label: "Net Take-Home Pay", amount: 4330.5, note: "", type: "net" },
];

export default function SalaryAfterEpfPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-sky-50 to-blue-50 border-b border-sky-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Salary After EPF</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How to Calculate Your Take-Home Salary After EPF in Malaysia
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Between EPF, SOCSO, EIS, and PCB, four separate deductions hit your payslip every month. Here is exactly how each one is calculated — with a worked example.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full">Salary</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">6 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>The Four Deductions on Every Malaysian Payslip</h2>
          <p>
            When your employer processes payroll in Malaysia, four statutory deductions are removed from your gross salary before the remainder is transferred to your bank account:
          </p>
          <ol>
            <li><strong>EPF (KWSP)</strong> — Employees Provident Fund: retirement savings</li>
            <li><strong>SOCSO (PERKESO)</strong> — Social Security Organisation: workplace injury insurance</li>
            <li><strong>EIS (SIP)</strong> — Employment Insurance System: retrenchment protection</li>
            <li><strong>PCB / MTD</strong> — Potongan Cukai Berjadual: monthly income tax withholding</li>
          </ol>

          <h2>1. EPF Deduction (11%)</h2>
          <p>
            The employee EPF contribution rate is <strong>11% of gross salary</strong>. This is fixed for most employees earning above RM5,000/month. For salaries below RM5,000, the government periodically allows a reduced rate (e.g., 9% during the COVID-19 stimulus period), so always check the current rate at <strong>kwsp.gov.my</strong>.
          </p>
          <p>
            Your employer also contributes <strong>13%</strong> (if your salary is RM5,000 or below) or <strong>12%</strong> (above RM5,000) on top of your salary — this does not reduce your take-home pay but goes directly into your EPF account.
          </p>

          <h2>2. SOCSO Deduction</h2>
          <p>
            SOCSO contributions use a tiered table based on salary band. For an employee earning RM5,000/month, the employee&rsquo;s contribution is <strong>RM29.75/month</strong>. SOCSO is only applicable for employees earning <strong>RM5,000/month or below</strong>.
          </p>

          <h2>3. EIS Deduction</h2>
          <p>
            EIS was introduced in 2018 under the Employment Insurance System Act. The rate is <strong>0.2% of gross salary</strong> for the employee (and 0.2% matched by the employer). For a RM5,000 salary, this works out to roughly <strong>RM9.75/month</strong> based on the EIS contribution table.
          </p>

          <h2>4. PCB / MTD (Income Tax Withholding)</h2>
          <p>
            PCB (Potongan Cukai Berjadual) is the monthly income tax that your employer deducts and remits to LHDN. The amount varies depending on:
          </p>
          <ul>
            <li>Your annual salary (monthly × 12)</li>
            <li>Marital status and number of children</li>
            <li>TP1 declaration — if you declare reliefs (e.g., life insurance, medical) to your employer via TP1 form, your PCB is reduced</li>
            <li>Zakat payments made directly can replace PCB ringgit-for-ringgit</li>
          </ul>

          <h2>Worked Example: RM5,000 Gross Salary</h2>
          <p>Here is a step-by-step breakdown for a single employee with no TP1 declaration:</p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Item</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Amount (RM)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Note</th>
                </tr>
              </thead>
              <tbody>
                {deductions.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.type === "net"
                        ? "bg-blue-50 font-bold"
                        : row.type === "gross"
                        ? "font-semibold"
                        : ""
                    }
                  >
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-800">{row.label}</td>
                    <td className={`px-4 py-3 border-b border-gray-100 text-right font-mono ${row.type === "deduct" ? "text-red-600" : row.type === "net" ? "text-blue-700" : "text-gray-900"}`}>
                      {row.amount > 0 ? `RM ${row.amount.toLocaleString("en-MY", { minimumFractionDigits: 2 })}` : `− RM ${Math.abs(row.amount).toLocaleString("en-MY", { minimumFractionDigits: 2 })}`}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            So on a gross salary of <strong>RM5,000</strong>, you take home approximately <strong>RM4,330</strong> after all statutory deductions. The exact PCB amount varies significantly with marital status and declared reliefs.
          </p>

          <h2>How to Reduce Your Deductions Legally</h2>
          <ul>
            <li><strong>Submit a TP1 form to your employer</strong> declaring life insurance premiums, medical insurance, or education expenses. This lowers your PCB each month rather than waiting for a tax refund at year-end.</li>
            <li><strong>Pay Zakat</strong> — Zakat payments are a 1-for-1 rebate against PCB for Muslim employees. Every RM you pay in Zakat reduces your PCB by RM1.</li>
            <li><strong>Elect the 9% EPF rate</strong> if you prefer higher monthly cash flow (at the cost of lower retirement savings).</li>
          </ul>

          {/* CTA */}
          <div className="not-prose bg-sky-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Calculate Your Exact Take-Home Pay</h3>
            <p className="text-sky-100 mb-5 text-sm">
              Enter your salary to instantly see EPF, SOCSO, EIS, and PCB deductions, employer contributions, and your net pay.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/salary-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-sky-50 transition-colors text-sm">
                Salary Calculator →
              </Link>
              <Link href="/pcb-calculator-malaysia" className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-sky-400 transition-colors text-sm border border-sky-400">
                PCB Calculator →
              </Link>
            </div>
          </div>

          <h2>Related Guides and Calculators</h2>
          <ul>
            <li><Link href="/salary-calculator-malaysia">Salary Calculator Malaysia</Link> — instant net pay breakdown</li>
            <li><Link href="/pcb-calculator-malaysia">PCB Calculator Malaysia</Link> — estimate your monthly tax deduction</li>
            <li><Link href="/epf-calculator-malaysia">EPF Calculator Malaysia</Link> — project your retirement savings</li>
            <li><Link href="/guides/pcb-vs-income-tax-malaysia">PCB vs Income Tax — What&rsquo;s the Difference?</Link></li>
          </ul>
        </article>

        {/* FAQ */}
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
