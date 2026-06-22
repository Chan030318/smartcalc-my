import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/socso-contribution-table-malaysia`;

export const metadata: Metadata = {
  title: "SOCSO Contribution Table Malaysia 2026 — Full PERKESO Rate Guide",
  description:
    "Complete SOCSO (PERKESO) contribution table for 2026. First Category and Second Category rates, wage ceiling, employee vs employer split, and how to read the table. Updated for Malaysian private-sector employees.",
  keywords: [
    "SOCSO contribution table 2026",
    "PERKESO contribution table Malaysia",
    "SOCSO first category rate",
    "SOCSO second category rate",
    "SOCSO wage ceiling Malaysia",
    "SOCSO employee employer contribution",
    "caruman SOCSO Malaysia",
  ],
  alternates: { canonical: "/guides/socso-contribution-table-malaysia" },
  openGraph: {
    title: "SOCSO Contribution Table Malaysia 2026 — Full PERKESO Rate Guide",
    description: "Complete SOCSO contribution table with First and Second Category rates, examples, and employer obligations.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SOCSO Contribution Table Malaysia 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOCSO Contribution Table Malaysia 2026 — Full PERKESO Rate Guide",
    description: "Complete SOCSO contribution table for Malaysia. First and Second Category rates explained.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the SOCSO contribution rate in Malaysia 2026?",
    a: "For First Category (employees below 60), the employee contributes 0.5% and the employer contributes 1.75% of insured wages, capped at RM5,000. For Second Category (employees 60 and above), only the employer contributes at 1.25% — the employee pays nothing. These rates are set under the Employees' Social Security Act 1969 and administered by PERKESO.",
  },
  {
    q: "What is the SOCSO wage ceiling?",
    a: "The insured wage ceiling for SOCSO is RM5,000 per month. This means contributions are calculated on a maximum of RM5,000 even if an employee's actual salary is higher. The maximum employee contribution (First Category) is RM25.00/month and the maximum employer contribution is RM87.50/month.",
  },
  {
    q: "Who is exempt from SOCSO contributions?",
    a: "Self-employed individuals, domestic workers (maids, gardeners), civil servants under the government pension scheme, and foreign workers (covered separately under the Foreign Worker Social Security Scheme) are not covered under the standard SOCSO scheme. Malaysian citizens and permanent residents in private-sector employment are generally required to contribute.",
  },
  {
    q: "What is the difference between First Category and Second Category SOCSO?",
    a: "First Category covers employees below age 60 and provides both the Employment Injury Scheme and the Invalidity Pension Scheme — the broadest coverage. Second Category covers employees aged 60 and above for the Employment Injury Scheme only. Employees in the Second Category do not contribute; only the employer pays 1.25% of insured wages.",
  },
  {
    q: "How do I verify my employer is paying SOCSO correctly?",
    a: "You can check your SOCSO contribution history by logging into the mySIPP portal (mysipp.perkeso.gov.my) using your MyKad number. Your payslip should also show SOCSO deductions each month. If you suspect underpayment, you can file a complaint directly with PERKESO via their helpline at 1-300-22-8000.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "SOCSO Contribution Table Malaysia 2026 — Full PERKESO Rate Guide",
      description: "Complete SOCSO (PERKESO) contribution table for 2026 with First Category and Second Category rates, employer obligations, and worked examples.",
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
        { "@type": "ListItem", position: 3, name: "SOCSO Contribution Table Malaysia 2026", item: PAGE_URL },
      ],
    },
  ],
};

const firstCategoryRows = [
  { range: "RM 100 – RM 300", employee: "0.60", employer: "2.10", total: "2.70" },
  { range: "RM 300.01 – RM 500", employee: "1.50", employer: "5.25", total: "6.75" },
  { range: "RM 500.01 – RM 700", employee: "2.50", employer: "8.75", total: "11.25" },
  { range: "RM 700.01 – RM 900", employee: "3.50", employer: "12.25", total: "15.75" },
  { range: "RM 900.01 – RM 1,100", employee: "4.50", employer: "15.75", total: "20.25" },
  { range: "RM 1,100.01 – RM 1,300", employee: "5.50", employer: "19.25", total: "24.75" },
  { range: "RM 1,300.01 – RM 1,500", employee: "6.50", employer: "22.75", total: "29.25" },
  { range: "RM 1,500.01 – RM 2,000", employee: "8.25", employer: "28.85", total: "37.10" },
  { range: "RM 2,000.01 – RM 2,500", employee: "10.75", employer: "37.62", total: "48.37" },
  { range: "RM 2,500.01 – RM 3,000", employee: "13.25", employer: "46.37", total: "59.62" },
  { range: "RM 3,000.01 – RM 3,500", employee: "15.75", employer: "55.12", total: "70.87" },
  { range: "RM 3,500.01 – RM 4,000", employee: "18.25", employer: "63.87", total: "82.12" },
  { range: "RM 4,000.01 – RM 4,500", employee: "20.75", employer: "72.62", total: "93.37" },
  { range: "RM 4,500.01 – RM 5,000", employee: "23.25", employer: "81.37", total: "104.62" },
  { range: "Above RM 5,000", employee: "25.00", employer: "87.50", total: "112.50" },
];

export default function SocsoContributionTablePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 border-b border-rose-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-rose-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">SOCSO Contribution Table 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              SOCSO Contribution Table Malaysia 2026
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              The complete PERKESO contribution schedule for First Category and Second Category employees — with rates, wage bands, employer obligations, and worked examples.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">SOCSO / PERKESO</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">7 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>What Is the SOCSO Contribution Table?</h2>
          <p>
            The SOCSO contribution table — published by PERKESO (Pertubuhan Keselamatan Sosial) — is the official reference that shows how much an employee and employer must contribute to the Social Security Organisation each month based on the employee&apos;s wage. It is not a simple percentage applied to salary; instead, the table groups salaries into wage bands and assigns fixed contribution amounts to each band. This approach ensures small rounding differences don&apos;t accumulate over time.
          </p>
          <p>
            SOCSO contributions are mandatory for all private-sector employees who are Malaysian citizens or permanent residents. They fund two protection schemes: the Employment Injury Scheme (which covers workplace accidents and commuting accidents) and the Invalidity Pension Scheme (which pays a monthly pension if you become permanently unable to work due to non-work causes). Knowing how to read the contribution table helps you verify that your employer is deducting and remitting the correct amounts each month.
          </p>

          <h2>The Two SOCSO Categories</h2>
          <p>
            Before looking at the table, you need to know which category applies to you, because the contribution rates are different.
          </p>
          <p>
            <strong>First Category</strong> applies to employees below 60 years of age. It covers both the Employment Injury Scheme and the Invalidity Pension Scheme. Both the employee and the employer contribute. The employee pays 0.5% of insured wages and the employer pays 1.75% of insured wages. This is the category that applies to the vast majority of Malaysian private-sector workers.
          </p>
          <p>
            <strong>Second Category</strong> applies to employees aged 60 and above who continue to work. It covers the Employment Injury Scheme only — the Invalidity Pension Scheme no longer applies at this age. Only the employer contributes, at a rate of 1.25% of insured wages. The employee makes no contribution from their salary.
          </p>
          <p>
            The insured wage ceiling for both categories is <strong>RM5,000 per month</strong>. If your salary exceeds RM5,000, contributions are still calculated on RM5,000 — meaning your maximum SOCSO contribution as a First Category employee is RM25.00 per month, and your employer&apos;s maximum contribution is RM87.50 per month.
          </p>

          <h2>SOCSO First Category Contribution Table 2026</h2>
          <p>The table below shows the contribution amounts for employees under 60 years of age:</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-rose-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Salary Range (RM)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Employee (RM)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Employer (RM)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-rose-100">Total (RM)</th>
                </tr>
              </thead>
              <tbody>
                {firstCategoryRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-rose-50/30 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.range}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.employee}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.employer}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-800">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Source: PERKESO official contribution schedule. Rates are subject to change; verify at perkeso.gov.my.</p>

          <h2>SOCSO Second Category Contribution Table 2026</h2>
          <p>
            For employees aged 60 and above, only the employer contributes (1.25% of insured wages). The employee has no deduction. The insured wage ceiling is the same: RM5,000. The employer&apos;s maximum monthly contribution under Second Category is RM62.50.
          </p>
          <p>
            As an example: an employee earning RM4,000/month who is 62 years old will have zero SOCSO deducted from their payslip. However, their employer is obligated to contribute RM4,000 × 1.25% = RM50.00 per month to PERKESO on their behalf. This covers the employee for workplace injuries and accidents while commuting.
          </p>

          <h2>How to Read the SOCSO Contribution Table</h2>
          <p>
            The SOCSO contribution table uses wage bands rather than exact percentages, because the actual contribution amounts are rounded to the nearest 10 sen. Here&apos;s how to use the table:
          </p>
          <ol>
            <li><strong>Find your gross monthly salary</strong> on your payslip (before any deductions).</li>
            <li><strong>Cap at RM5,000</strong> — if your salary exceeds RM5,000, use RM5,000 as the insured wage for the purpose of SOCSO contributions.</li>
            <li><strong>Locate the wage band</strong> that includes your salary in the table above.</li>
            <li><strong>Read off the employee and employer amounts</strong> for that band.</li>
            <li><strong>Confirm against your payslip</strong> — the employee contribution should appear as a deduction labelled &quot;SOCSO&quot; or &quot;PERKESO&quot;.</li>
          </ol>
          <p>
            For example, if your monthly salary is RM3,200, it falls in the RM3,000.01–RM3,500 band. Your employee contribution is RM15.75 and your employer contributes RM55.12. The total monthly SOCSO contribution for you is RM70.87.
          </p>

          <h2>Why Employers Must Not Skip SOCSO</h2>
          <p>
            Under the Employees&apos; Social Security Act 1969, failing to register employees with SOCSO or failing to make contributions is a criminal offence. Employers found guilty can face fines of up to RM10,000, imprisonment of up to 2 years, or both. PERKESO also has the power to seize and sell employer assets to recover unpaid contributions plus late payment penalties.
          </p>
          <p>
            From an employee&apos;s perspective, if your employer fails to pay SOCSO and you are involved in a workplace accident, your claim may still be honoured by PERKESO — but PERKESO will pursue the employer for the unpaid contributions and penalties. It is always worth verifying through the mySIPP portal that your contributions are up to date.
          </p>

          <h2>SOCSO vs EPF: What&apos;s the Difference?</h2>
          <p>
            Employees sometimes confuse SOCSO and EPF because both are deducted from their salary each month. They serve entirely different purposes. EPF (Employees Provident Fund) is a retirement savings scheme — your contributions build up in a personal account that you can withdraw at age 55 or 60, or earlier for approved purposes like housing or medical needs. Your EPF money belongs to you.
          </p>
          <p>
            SOCSO, by contrast, is a social insurance scheme. There is no personal balance that accumulates in your name. Instead, your contributions go into a collective pool that pays benefits to anyone who files a valid claim for a workplace injury, occupational disease, or invalidity. Think of it like car insurance — you pay premiums whether or not you claim, and the benefit is the protection it provides, not a savings balance.
          </p>
          <p>
            Use our <Link href="/socso-calculator-malaysia">SOCSO Calculator Malaysia</Link> to see exactly how much is deducted from your salary and how much your employer contributes on your behalf. To see the combined picture including EPF and EIS, try the <Link href="/salary-calculator-malaysia">Salary Calculator Malaysia</Link>.
          </p>

          <h2>SOCSO Contribution Deadlines</h2>
          <p>
            Employers must remit SOCSO contributions by the <strong>15th of the following month</strong>. For example, January contributions must be paid by 15 February. Late payments attract a penalty of 6% per annum on the outstanding amount. Employers who consistently pay late may also face prosecution under the Act.
          </p>
          <p>
            Contributions can be submitted online via the PERKESO e-CARUMAN portal (mycukai.perkeso.gov.my), which also generates Form 8A (the monthly contribution schedule). Most Malaysian payroll software integrates directly with e-CARUMAN to automate this process.
          </p>

          <h2>What SOCSO Covers</h2>
          <p>
            Understanding what you get from SOCSO contributions puts the deduction in perspective. Under the Employment Injury Scheme, SOCSO pays for medical treatment at government and panel hospitals, a temporary disability allowance while you cannot work, a permanent disability pension if the injury is permanent, a dependent&apos;s benefit (survivor pension) for your spouse and children if you die from a work-related cause, and rehabilitation costs.
          </p>
          <p>
            Under the Invalidity Pension Scheme (First Category only), SOCSO pays a monthly invalidity pension if you suffer a permanent physical or mental condition that prevents you from earning a living — even if the cause is not work-related. The pension amount depends on your contribution history and insured wages. Your dependants also receive a reduced pension if you pass away while receiving invalidity benefits.
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
