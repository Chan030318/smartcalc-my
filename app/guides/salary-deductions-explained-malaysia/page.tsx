import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/salary-deductions-explained-malaysia`;

export const metadata: Metadata = {
  title: "Malaysian Salary Deductions Explained — EPF, SOCSO, EIS, PCB (2024)",
  description:
    "A complete guide to every deduction on a Malaysian payslip — EPF, SOCSO, EIS, and PCB. Understand what each is for, how rates are calculated, and how to read your payslip.",
  keywords: [
    "salary deductions Malaysia",
    "EPF SOCSO EIS PCB Malaysia",
    "Malaysian payslip explained",
    "potongan gaji Malaysia",
    "salary deduction 2024 Malaysia",
    "SOCSO contribution Malaysia",
    "EIS Malaysia",
    "how to read payslip Malaysia",
  ],
  alternates: { canonical: "/guides/salary-deductions-explained-malaysia" },
  openGraph: {
    title: "Malaysian Salary Deductions Explained — EPF, SOCSO, EIS, PCB (2024)",
    description: "Every deduction on your Malaysian payslip — what it is, what the rate is, what the money is used for, and how to verify your employer is doing it correctly.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Malaysia Payslip Deductions Explained" }],
  },
  twitter: { card: "summary_large_image", title: "Malaysian Salary Deductions Explained — EPF, SOCSO, EIS, PCB", description: "What every deduction on your Malaysian payslip means, how it's calculated, and who benefits.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "Why does Malaysia have four different salary deductions?", a: "Each deduction serves a different purpose: EPF funds your personal retirement account, SOCSO provides injury and disability insurance, EIS provides temporary income if you lose your job, and PCB (MTD) prepays your annual income tax. Together they form Malaysia's social protection and tax collection system for employees." },
  { q: "Are SOCSO and EIS contributions mandatory for all employees?", a: "SOCSO is mandatory for Malaysian citizens and permanent residents earning RM5,000/month or below, and it covers those above RM5,000 who opt in voluntarily. EIS is mandatory for employees aged 18–60 (excluding civil servants and domestic workers). Non-citizens are not covered under SOCSO but may be under EIS." },
  { q: "How do I verify my employer is contributing the correct EPF amount?", a: "Log in to the KWSP member portal (i-Akaun) or the MyKWSP app to check your contribution history. Your employer must remit contributions by the 15th of the following month. Discrepancies or delays should first be raised with your employer, then formally reported to EPF at 1-800-22-5790 or at any KWSP branch." },
  { q: "What happens if I earn above RM5,000 — do SOCSO rates change?", a: "Yes. SOCSO only applies to the first RM5,000 of monthly salary (the contribution table caps at RM5,000). If you earn RM6,000, SOCSO is still calculated as if your salary is RM5,000. EIS also has a salary cap — contributions are calculated on the first RM5,000 of monthly wages. EPF and PCB have no such cap and are calculated on full gross salary." },
  { q: "Can I see exactly how my PCB is calculated?", a: "Yes. LHDN publishes the PCB computation formula (CP38A) and schedule. Your employer should be able to show you the PCB calculation. For a clear monthly breakdown, use the PCB Calculator at SmartCalc MY — it shows how PCB changes with salary, marital status, children, and TP1 declarations." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Malaysian Salary Deductions Explained — EPF, SOCSO, EIS, PCB (2024)",
  description: "A complete guide to every statutory deduction on a Malaysian payslip — EPF (11%), SOCSO, EIS, and PCB monthly income tax — with rates, purposes, and employer obligations.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "Salary Deductions Explained Malaysia", item: PAGE_URL },
  ]},
};

const deductions = [
  {
    name: "EPF (KWSP)",
    fullName: "Employees Provident Fund / Kumpulan Wang Simpanan Pekerja",
    employee: "11%",
    employer: "12–13%",
    cap: "No cap",
    law: "EPF Act 1991",
    purpose: "Retirement savings in your personal EPF account. Earns annual dividends (~5–6%). You own all contributions.",
    whoGets: "You (into your EPF account)",
    tip: "Verify monthly via KWSP i-Akaun app. Employer must remit by 15th of next month.",
  },
  {
    name: "SOCSO (PERKESO)",
    fullName: "Social Security Organisation / Pertubuhan Keselamatan Sosial",
    employee: "~0.5% (tiered table)",
    employer: "~1.75% (tiered table)",
    cap: "Capped at RM5,000 salary",
    law: "Employees' Social Security Act 1969",
    purpose: "Two schemes: Employment Injury (workplace accidents, occupational diseases) and Invalidity (permanent disability). Provides medical, disability, and survivors' benefits.",
    whoGets: "You, if you suffer a workplace injury or permanent disability",
    tip: "Register on PERKESO Assist portal to check contribution history and file claims.",
  },
  {
    name: "EIS (SIP)",
    fullName: "Employment Insurance System / Sistem Insurans Pekerjaan",
    employee: "0.2%",
    employer: "0.2%",
    cap: "Capped at RM5,000 salary",
    law: "Employment Insurance System Act 2017",
    purpose: "Temporary income replacement and job-seeking support if you are retrenched, constructively dismissed, or your employer closes. Benefits include job loss allowance, career counselling, and training.",
    whoGets: "You, if you lose your job involuntarily (retrenchment, VSS, company closure)",
    tip: "File EIS claims within 60 days of job loss on the EIS portal (eismy.com.my). You are eligible after 6 months of EIS contributions.",
  },
  {
    name: "PCB / MTD",
    fullName: "Potongan Cukai Berjadual / Monthly Tax Deduction",
    employee: "Varies (based on LHDN schedule)",
    employer: "0 (employer remits your portion)",
    cap: "No cap",
    law: "Income Tax Act 1967",
    purpose: "Monthly prepayment of your annual income tax to LHDN. Amount depends on salary, marital status, and TP1 declarations. Reconciled when you file annual return (Borang BE).",
    whoGets: "LHDN (refunded to you if overpaid at year-end)",
    tip: "Submit TP1 to employer to reduce monthly PCB if you have reliefs (insurance, education, children).",
  },
];

export default function SalaryDeductionsPage() {
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
              <span className="text-gray-500">Salary Deductions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Malaysian Salary Deductions Explained — EPF, SOCSO, EIS & PCB
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Four statutory deductions are taken from every Malaysian payslip. This guide explains what each one is, who benefits, how it is calculated, and what your employer is legally required to do.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full">Salary</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">7 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Overview: The Four Deductions</h2>
          <p>Every Malaysian employee in the private sector has four statutory deductions removed from their gross salary before they receive their take-home pay. Three of them benefit the employee directly; one prepays a tax obligation.</p>

          {deductions.map((d) => (
            <div key={d.name} className="not-prose mb-8 bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-sky-600 px-6 py-4">
                <h3 className="text-white font-bold text-lg mb-0.5">{d.name}</h3>
                <p className="text-sky-200 text-xs">{d.fullName}</p>
              </div>
              <div className="px-6 py-5 grid grid-cols-2 sm:grid-cols-3 gap-4 mb-2">
                <div><p className="text-xs text-gray-500 mb-0.5">Employee rate</p><p className="font-bold text-gray-900">{d.employee}</p></div>
                <div><p className="text-xs text-gray-500 mb-0.5">Employer rate</p><p className="font-bold text-gray-900">{d.employer}</p></div>
                <div><p className="text-xs text-gray-500 mb-0.5">Salary cap</p><p className="font-bold text-gray-900">{d.cap}</p></div>
              </div>
              <div className="px-6 pb-5 space-y-2">
                <div><p className="text-xs font-semibold text-gray-600 mb-1">Purpose</p><p className="text-sm text-gray-700">{d.purpose}</p></div>
                <div><p className="text-xs font-semibold text-gray-600 mb-1">Benefit goes to</p><p className="text-sm text-gray-700">{d.whoGets}</p></div>
                <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5"><p className="text-xs font-semibold text-amber-700 mb-0.5">Tip</p><p className="text-xs text-amber-800">{d.tip}</p></div>
              </div>
            </div>
          ))}

          <h2>Employer vs Employee Contributions — Who Pays What</h2>
          <p>A key distinction: your employer has obligations of their own that are <em>in addition</em> to your salary, not deducted from it:</p>
          <ul>
            <li><strong>EPF employer contribution (12–13%):</strong> Paid on top of your salary. A RM5,000/month employee costs the employer RM5,650–RM5,750/month total, before SOCSO and EIS.</li>
            <li><strong>SOCSO employer contribution (~1.75%):</strong> Also paid by the employer.</li>
            <li><strong>EIS employer contribution (0.2%):</strong> Matched by employer.</li>
          </ul>
          <p>PCB is different — it is entirely your income tax, and the employer simply acts as a collection agent, remitting your deducted amount to LHDN. The employer has no cost here.</p>

          <h2>What Your Employer Is Legally Required to Do</h2>
          <ul>
            <li>Deduct and remit EPF contributions by the <strong>15th of the following month</strong>. Late payment attracts a 6% per annum penalty.</li>
            <li>Deduct and remit SOCSO contributions by the <strong>last day of the following month</strong>.</li>
            <li>Deduct and remit EIS contributions by the <strong>last day of the following month</strong>.</li>
            <li>Deduct PCB (MTD) monthly and remit by the <strong>15th of the following month</strong>. Employers must provide EA Forms (Form EA) by 28 February each year showing total remuneration and PCB.</li>
            <li>Issue payslips showing all deductions. Employers must maintain payroll records for at least 7 years.</li>
          </ul>

          <h2>How to Check Your Contributions Are Correct</h2>
          <ul>
            <li><strong>EPF:</strong> Log in to <em>i-Akaun</em> (MyKWSP app) and check monthly contribution history. Employer name, contribution amount, and date should all match your payslip.</li>
            <li><strong>SOCSO:</strong> Use the PERKESO Assist portal to verify contributions.</li>
            <li><strong>EIS:</strong> Check via EIS portal (eismy.com.my) or PERKESO (EIS is administered by PERKESO).</li>
            <li><strong>PCB:</strong> Your annual EA Form shows total PCB remitted. Cross-check against your LHDN MyTax account.</li>
          </ul>
          <p>If your employer is not remitting the correct amounts, you can report to EPF, PERKESO, or LHDN respectively. Non-compliance is a criminal offence under the respective acts.</p>

          <div className="not-prose bg-sky-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">See Your Full Payslip Breakdown</h3>
            <p className="text-sky-100 mb-5 text-sm">Enter your salary to instantly see EPF, SOCSO, EIS, and PCB amounts — plus your net take-home pay.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/salary-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-sky-50 transition-colors text-sm">Salary Calculator →</Link>
              <Link href="/pcb-calculator-malaysia" className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-sky-400 transition-colors text-sm border border-sky-400">PCB Calculator →</Link>
            </div>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/how-to-calculate-salary-after-epf">How to Calculate Take-Home Salary After EPF</Link> — full worked example</li>
            <li><Link href="/guides/pcb-vs-income-tax-malaysia">PCB vs Income Tax Malaysia</Link></li>
            <li><Link href="/guides/how-pcb-tax-works-malaysia">How PCB Tax Works in Malaysia</Link></li>
            <li><Link href="/salary-calculator-malaysia">Salary Calculator Malaysia</Link></li>
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
