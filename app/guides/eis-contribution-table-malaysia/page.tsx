import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/eis-contribution-table-malaysia`;

export const metadata: Metadata = {
  title: "EIS Contribution Table Malaysia 2026 — SIP PERKESO Rate Guide",
  description:
    "Complete EIS (SIP) contribution table for Malaysia 2026. Both employee and employer pay 0.2% capped at RM4,000. Full wage-band table, how contributions are calculated, and who qualifies for EIS benefits.",
  keywords: [
    "EIS contribution table 2026",
    "SIP contribution table Malaysia",
    "EIS rate Malaysia 2026",
    "employment insurance system table",
    "PERKESO EIS contribution",
    "EIS wage ceiling Malaysia",
    "caruman EIS Malaysia",
  ],
  alternates: { canonical: "/guides/eis-contribution-table-malaysia" },
  openGraph: {
    title: "EIS Contribution Table Malaysia 2026 — SIP PERKESO Rate Guide",
    description: "Complete EIS/SIP contribution table for Malaysia. 0.2% employee + 0.2% employer, RM4,000 ceiling.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EIS Contribution Table Malaysia 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EIS Contribution Table Malaysia 2026 — SIP PERKESO Rate Guide",
    description: "Full EIS/SIP contribution table for Malaysian employees and employers. 0.2% each, RM4,000 ceiling.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the EIS contribution rate in Malaysia 2026?",
    a: "Both the employee and employer each contribute 0.2% of the employee's insured wages per month. The insured wage ceiling is RM4,000, so the maximum employee contribution is RM8.00/month and the maximum employer contribution is also RM8.00/month — for a combined maximum of RM16.00/month.",
  },
  {
    q: "Who is exempt from EIS contributions?",
    a: "Employees above 57 years old who have never previously contributed to EIS are exempt. Domestic workers, civil servants, self-employed individuals, and foreign workers are also not covered under the standard EIS scheme. Malaysian citizens and permanent residents between 18 and 60 who are employed in the private sector must contribute.",
  },
  {
    q: "How do I claim EIS if I lose my job?",
    a: "You must file your EIS claim within 60 days of your last working day. Log in to the mySIPP portal (mysipp.perkeso.gov.my) or visit any PERKESO office. You need your MyKad, termination letter, last three payslips, and bank account details. To qualify for Job Search Allowance, you must have contributed for at least 12 months within the past 24 months.",
  },
  {
    q: "Is EIS the same as SOCSO?",
    a: "No. Both are administered by PERKESO, but they are separate schemes. SOCSO (Social Security Organisation) covers workplace accidents and invalidity. EIS (Employment Insurance System) covers job loss — it provides temporary income replacement if you are retrenched. You will see separate line items for SOCSO and EIS on your payslip.",
  },
  {
    q: "Can I withdraw my EIS contributions?",
    a: "EIS is not a savings account — contributions cannot be withdrawn. It is an insurance pool. If you are retrenched and meet the eligibility criteria, you receive Job Search Allowance (up to 6 months), Training Allowance, and Early Re-employment Allowance. If you never make a claim, your contributions fund the system for others, similar to how car or health insurance works.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "EIS Contribution Table Malaysia 2026 — SIP PERKESO Rate Guide",
      description: "Complete EIS/SIP contribution table for Malaysia 2026. Both employee and employer contribute 0.2% capped at RM4,000. Includes full wage-band table and benefit guide.",
      url: PAGE_URL,
      datePublished: "2026-01-01",
      dateModified: "2026-06-22",
      author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "EIS Contribution Table Malaysia 2026", item: PAGE_URL },
      ],
    },
  ],
};

const tableRows = [
  { range: "RM 30 – RM 49.99", employee: "0.10", employer: "0.10", total: "0.20" },
  { range: "RM 50 – RM 99.99", employee: "0.20", employer: "0.20", total: "0.40" },
  { range: "RM 100 – RM 199.99", employee: "0.40", employer: "0.40", total: "0.80" },
  { range: "RM 200 – RM 299.99", employee: "0.60", employer: "0.60", total: "1.20" },
  { range: "RM 300 – RM 399.99", employee: "0.70", employer: "0.70", total: "1.40" },
  { range: "RM 400 – RM 499.99", employee: "0.90", employer: "0.90", total: "1.80" },
  { range: "RM 500 – RM 699.99", employee: "1.20", employer: "1.20", total: "2.40" },
  { range: "RM 700 – RM 899.99", employee: "1.60", employer: "1.60", total: "3.20" },
  { range: "RM 900 – RM 1,099.99", employee: "2.00", employer: "2.00", total: "4.00" },
  { range: "RM 1,100 – RM 1,299.99", employee: "2.40", employer: "2.40", total: "4.80" },
  { range: "RM 1,300 – RM 1,499.99", employee: "2.80", employer: "2.80", total: "5.60" },
  { range: "RM 1,500 – RM 1,999.99", employee: "3.50", employer: "3.50", total: "7.00" },
  { range: "RM 2,000 – RM 2,499.99", employee: "4.50", employer: "4.50", total: "9.00" },
  { range: "RM 2,500 – RM 2,999.99", employee: "5.50", employer: "5.50", total: "11.00" },
  { range: "RM 3,000 – RM 3,499.99", employee: "6.50", employer: "6.50", total: "13.00" },
  { range: "RM 3,500 – RM 3,999.99", employee: "7.50", employer: "7.50", total: "15.00" },
  { range: "RM 4,000 and above", employee: "8.00", employer: "8.00", total: "16.00" },
];

export default function EisContributionTablePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-amber-50 to-yellow-50 border-b border-amber-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-amber-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">EIS Contribution Table 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              EIS Contribution Table Malaysia 2026
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              The complete EIS (SIP — Sistem Insurans Pekerjaan) contribution table for Malaysian employees and employers — with rates, wage bands, worked examples, and how to claim EIS benefits if you lose your job.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">EIS / SIP</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">7 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>What Is the EIS (SIP) Contribution Table?</h2>
          <p>
            The EIS contribution table is the official PERKESO schedule that shows the exact monthly contribution amounts for employees and employers based on the employee&apos;s wage. EIS stands for Employment Insurance System; in Malay it is called Sistem Insurans Pekerjaan (SIP). The scheme was established under the Employment Insurance System Act 2017 and began collecting contributions on 1 January 2018.
          </p>
          <p>
            Unlike EPF — which is a personal savings account — EIS is an insurance pool. Contributions fund a collective scheme that pays out Job Search Allowance, Training Allowance, and other benefits to employees who lose their jobs involuntarily. The contribution amount is the same for both the employee and the employer: 0.2% of insured wages each, subject to a wage ceiling of RM4,000 per month.
          </p>
          <p>
            The table uses wage bands rather than exact percentages to avoid rounding issues in payroll calculations. If your salary is RM3,500, for example, you look up the RM3,500–RM3,999.99 band, not multiply RM3,500 × 0.2%.
          </p>

          <h2>EIS Contribution Rate 2026</h2>
          <p>
            The EIS contribution rate has remained unchanged since the scheme&apos;s introduction in 2018:
          </p>
          <ul>
            <li><strong>Employee contribution:</strong> 0.2% of insured wages</li>
            <li><strong>Employer contribution:</strong> 0.2% of insured wages</li>
            <li><strong>Insured wage ceiling:</strong> RM4,000 per month</li>
            <li><strong>Maximum employee contribution:</strong> RM8.00 per month</li>
            <li><strong>Maximum employer contribution:</strong> RM8.00 per month</li>
            <li><strong>Maximum total monthly contribution:</strong> RM16.00</li>
          </ul>
          <p>
            At first glance, EIS looks like a very small deduction — RM8.00 per month for most salaried employees. But the scheme provides meaningful protection: if you are retrenched after contributing for at least 12 months in the past 24 months, you can receive Job Search Allowance for up to 6 months while you look for a new job.
          </p>

          <h2>Full EIS Contribution Table 2026</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">Salary Range (RM)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">Employee (RM)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">Employer (RM)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">Total (RM)</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-amber-50/30 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.range}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.employee}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.employer}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-800">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Source: PERKESO EIS contribution schedule. Verify latest rates at perkeso.gov.my.</p>

          <h2>How the RM4,000 Wage Ceiling Works</h2>
          <p>
            The insured wage ceiling of RM4,000 means that contributions are calculated on a maximum of RM4,000, regardless of how much higher your actual salary might be. A software engineer earning RM8,000/month pays the same EIS contribution as someone earning RM4,000 — both have a maximum employee deduction of RM8.00.
          </p>
          <p>
            This ceiling also means that EIS Job Search Allowance — which is calculated as a percentage of your insured wages — is also capped at the RM4,000 level. The first month of Job Search Allowance is 80% of insured wages (maximum RM3,200), reducing in steps over subsequent months. High-income earners should be aware that EIS replaces only a fraction of their actual salary.
          </p>

          <h2>EIS Benefits Explained</h2>
          <p>
            Understanding what EIS provides helps you appreciate why the contribution matters even when the monthly amount is small.
          </p>
          <p>
            <strong>Job Search Allowance (JSA)</strong> is the main benefit. If you are retrenched — meaning your employer terminates your employment, your contract expires without renewal, or you accept a Voluntary Separation Scheme (VSS) — you can claim JSA for up to 6 months. The amount is calculated as a percentage of your last insured wages: 80% in month 1, 50% in month 2, 40% in months 3–6. You must have contributed for at least 12 months within the past 24 months.
          </p>
          <p>
            <strong>Training Allowance</strong> pays for approved upskilling or reskilling programmes while you are between jobs. PERKESO reimburses training fees and pays a daily training allowance during the programme period.
          </p>
          <p>
            <strong>Early Re-employment Allowance</strong> rewards you if you find a new job before your JSA period runs out. PERKESO pays a lump sum for the remaining months you would have received JSA — incentivising faster re-employment.
          </p>
          <p>
            <strong>Reduced Income Allowance</strong> applies if your employer reduces your working hours or pay (not full retrenchment). PERKESO tops up a portion of the income reduction.
          </p>

          <h2>EIS vs SOCSO vs EPF: Quick Comparison</h2>
          <p>
            All three schemes are deducted from your salary and appear on your payslip, but they serve very different purposes:
          </p>
          <ul>
            <li><strong>EPF</strong>: Retirement savings. Builds in your personal account. Withdrawable at age 55/60 or for housing/medical. Employee 11%, employer 12–13%.</li>
            <li><strong>SOCSO</strong>: Workplace accident and invalidity insurance. Pays if you are injured at work or become permanently disabled. Employee 0.5%, employer 1.75% (First Category).</li>
            <li><strong>EIS</strong>: Job loss insurance. Pays if you are retrenched. Employee 0.2%, employer 0.2%. Wage ceiling RM4,000.</li>
          </ul>
          <p>
            Use our <Link href="/eis-calculator-malaysia">EIS Calculator Malaysia</Link> to see your exact EIS deduction, or try the <Link href="/salary-calculator-malaysia">Salary Calculator</Link> for a complete payslip breakdown including EPF, SOCSO, EIS, and PCB tax. To compare SOCSO rates, see the <Link href="/guides/socso-contribution-table-malaysia">SOCSO Contribution Table 2026</Link>.
          </p>

          <h2>Employer Obligations Under EIS</h2>
          <p>
            Every employer with one or more eligible employees must register with PERKESO for EIS and make monthly contributions by the 15th of the following month. Contributions are submitted via the e-CARUMAN portal along with SOCSO contributions using the same Form 8A. Failure to register or contribute on time results in late payment penalties of 6% per annum on the outstanding sum, and persistent non-compliance can result in prosecution.
          </p>
          <p>
            Employers must also ensure that they correctly categorise employees who are exempt (such as those above 57 who have never contributed) versus those who must contribute, and report any employment terminations to PERKESO within the required timeframe so that retrenched employees can make their claims without unnecessary delays.
          </p>
        </article>

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
