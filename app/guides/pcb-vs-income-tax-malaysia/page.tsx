import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/pcb-vs-income-tax-malaysia`;

export const metadata: Metadata = {
  title: "PCB vs Income Tax Malaysia — What's the Difference? (2024)",
  description:
    "Confused about PCB and income tax in Malaysia? Learn how Potongan Cukai Berjadual (MTD) relates to your annual LHDN income tax, why you may get a refund, and how to reduce both.",
  keywords: [
    "PCB vs income tax Malaysia",
    "PCB MTD Malaysia",
    "potongan cukai berjadual",
    "income tax Malaysia 2024",
    "LHDN tax refund Malaysia",
    "monthly tax deduction Malaysia",
    "TP1 Malaysia",
    "cukai pendapatan vs PCB",
  ],
  alternates: { canonical: "/guides/pcb-vs-income-tax-malaysia" },
  openGraph: {
    title: "PCB vs Income Tax Malaysia — What's the Difference? (2024)",
    description:
      "PCB is prepaid income tax. Your annual filing reconciles the two. Find out why you get a refund (or owe more) and how to optimise both.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PCB vs Income Tax Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCB vs Income Tax Malaysia — What's the Difference?",
    description: "PCB is prepaid income tax. Here's how they relate, why refunds happen, and how to reduce both.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What does PCB stand for in Malaysia?",
    a: "PCB stands for Potongan Cukai Berjadual, which translates to Scheduled Tax Deduction (MTD — Monthly Tax Deduction). It is the income tax that your employer withholds from your monthly salary and remits to LHDN on your behalf.",
  },
  {
    q: "Is PCB the same as income tax?",
    a: "PCB is a prepayment of your annual income tax. It is not a separate tax — it is income tax collected monthly. At year-end, LHDN calculates your actual tax liability. If PCB overpaid, you get a refund; if underpaid, you top up the difference.",
  },
  {
    q: "Why do I get a tax refund from LHDN?",
    a: "You get a refund when your total PCB deducted throughout the year exceeds your actual income tax liability after claiming all reliefs and deductions in your annual tax return. This commonly happens when you claim reliefs (medical, education, life insurance) that your employer was not aware of because you did not submit a TP1 form.",
  },
  {
    q: "What is a TP1 form and how does it help?",
    a: "TP1 is a declaration form you submit to your employer to inform them of deductible reliefs — such as life insurance premiums, medical insurance, education fees, or EPF top-ups. With this information, your employer adjusts your monthly PCB downward, so you receive more cash each month instead of waiting for a year-end refund.",
  },
  {
    q: "What happens if my PCB is not enough to cover my actual tax?",
    a: "If your annual tax liability exceeds total PCB paid, you will owe LHDN the difference. This is payable when you file your annual return (Borang BE for employees, Borang B for the self-employed). It is important to ensure PCB is sufficient, especially if you have additional income (rental, dividends, freelance) outside of your salary.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "PCB vs Income Tax Malaysia — What's the Difference? (2024)",
  description:
    "A clear explanation of how PCB (MTD) and annual income tax relate in Malaysia, why tax refunds happen, and how to use TP1 declarations to optimise your monthly deductions.",
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
      { "@type": "ListItem", position: 3, name: "PCB vs Income Tax Malaysia", item: PAGE_URL },
    ],
  },
};

export default function PcbVsIncomeTaxPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-orange-600 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">PCB vs Income Tax</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              PCB vs Income Tax Malaysia — What&rsquo;s the Difference?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Many Malaysians confuse PCB with income tax. They are related but not the same thing. Understanding the difference will help you optimise your monthly cash flow and avoid surprises at year-end.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Tax</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">7 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>The Short Answer</h2>
          <div className="not-prose bg-orange-50 border border-orange-100 rounded-2xl p-5 my-4">
            <p className="text-gray-800 font-semibold mb-1">PCB is prepaid income tax.</p>
            <p className="text-gray-600 text-sm">Your employer deducts PCB from your salary each month and pays it to LHDN. At year-end, your actual income tax is calculated. If PCB &gt; actual tax → you get a refund. If PCB &lt; actual tax → you pay the difference.</p>
          </div>

          <h2>What Is PCB (Potongan Cukai Berjadual)?</h2>
          <p>
            PCB stands for <strong>Potongan Cukai Berjadual</strong>, which translates literally as &ldquo;Scheduled Tax Deduction.&rdquo; It is also called <strong>MTD (Monthly Tax Deduction)</strong>. Your employer is legally required to calculate and withhold this amount each month and remit it to LHDN (Inland Revenue Board of Malaysia) on your behalf.
          </p>
          <p>
            Think of PCB as an instalment plan for your income tax. Instead of paying a large lump sum once a year, the government collects it monthly through your employer.
          </p>

          <h2>What Is Annual Income Tax?</h2>
          <p>
            Malaysia&rsquo;s income tax is an annual liability calculated on your <strong>chargeable income</strong> — your total annual income minus all eligible reliefs and deductions. The tax rate is progressive, ranging from 0% to 30% depending on your bracket.
          </p>
          <p>
            The tax year in Malaysia follows the calendar year (January to December). Employees file their annual return via <strong>Borang BE</strong> between March and April the following year.
          </p>

          <h2>How They Connect: The Year-End Reconciliation</h2>
          <p>
            Your employer calculates PCB using LHDN&rsquo;s PCB schedule (or the computerised PCB formula), based on your salary and whatever reliefs you have declared via TP1 form. This is an <em>estimate</em>.
          </p>
          <p>
            When you file your annual return (Borang BE), you declare all your income for the year and claim all eligible reliefs. LHDN then calculates your <strong>actual tax liability</strong>. The two figures are then reconciled:
          </p>
          <ul>
            <li><strong>Total PCB paid &gt; Actual tax</strong> → LHDN refunds the excess (usually within 30–90 days)</li>
            <li><strong>Total PCB paid &lt; Actual tax</strong> → You pay the shortfall to LHDN</li>
            <li><strong>Total PCB paid = Actual tax</strong> → No further action needed</li>
          </ul>

          <h2>Why Is My PCB Too High? (Why Do I Get a Refund?)</h2>
          <p>
            The most common reason for a refund is that your employer calculates PCB without full knowledge of your reliefs. Your employer knows your salary but does not know:
          </p>
          <ul>
            <li>How much you pay in life insurance or medical insurance premiums</li>
            <li>Whether you have education expenses or skills training fees</li>
            <li>How many children you have and their ages</li>
            <li>Whether your spouse has income or is a full-time homemaker</li>
          </ul>
          <p>
            When you file your return and claim all these reliefs, your actual tax drops below what PCB already paid — hence a refund.
          </p>

          <h2>The TP1 Fix: Get Your Money Monthly, Not Annually</h2>
          <p>
            Instead of waiting for a year-end refund, you can submit a <strong>TP1 form</strong> to your employer (also called <strong>CP34A</strong> in LHDN&rsquo;s system). This declares your personal reliefs so your employer can reduce your monthly PCB accordingly.
          </p>
          <p>
            Common reliefs declarable via TP1:
          </p>
          <ul>
            <li>Life insurance premiums (up to RM3,000/year)</li>
            <li>Medical and education insurance (up to RM3,000/year, combined with life insurance up to RM7,000)</li>
            <li>Private retirement scheme (PRS) contributions (up to RM3,000/year)</li>
            <li>SSPN savings for children (up to RM8,000/year)</li>
            <li>Spouse (up to RM4,000/year if spouse has no income)</li>
            <li>Each child under 18 (RM2,000/child)</li>
          </ul>
          <p>
            <strong>Important:</strong> A TP1 declaration is not filed with LHDN — it is given only to your employer. It affects your PCB only, not your annual tax return.
          </p>

          <h2>Zakat as a PCB Rebate</h2>
          <p>
            For Muslim employees, Zakat payments receive a 1-for-1 PCB rebate. Every ringgit you pay in Zakat (for harta/income Zakat) reduces your PCB by exactly RM1. This is different from a tax relief — it is a <em>direct rebate</em> against the tax itself. Inform your employer via TP1 or provide Zakat receipts.
          </p>

          <h2>PCB for Non-Residents</h2>
          <p>
            Non-resident employees (those in Malaysia for fewer than 182 days in a tax year) are taxed at a flat rate of <strong>30%</strong> on all income, with no personal reliefs. Their PCB is a straightforward 30% of each monthly salary. Non-residents are not eligible for the progressive resident tax rates or reliefs.
          </p>

          {/* CTA */}
          <div className="not-prose bg-orange-500 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Calculate Your PCB and Annual Tax</h3>
            <p className="text-orange-100 mb-5 text-sm">
              Use our free calculators to see your monthly PCB deduction and estimate your annual income tax payable for YA 2024.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pcb-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors text-sm">
                PCB Calculator →
              </Link>
              <Link href="/income-tax-calculator-malaysia" className="inline-flex items-center gap-2 bg-orange-400 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-300 transition-colors text-sm border border-orange-300">
                Income Tax Calculator →
              </Link>
            </div>
          </div>

          <h2>Related Guides and Calculators</h2>
          <ul>
            <li><Link href="/pcb-calculator-malaysia">PCB Calculator Malaysia</Link> — estimate your monthly MTD deduction with TP1</li>
            <li><Link href="/income-tax-calculator-malaysia">Income Tax Calculator Malaysia</Link> — calculate YA 2024 annual tax with reliefs</li>
            <li><Link href="/guides/how-to-calculate-salary-after-epf">How to Calculate Salary After EPF</Link> — full payslip breakdown</li>
            <li><Link href="/salary-calculator-malaysia">Salary Calculator Malaysia</Link> — instant net pay estimate</li>
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
