import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/what-is-dsr-malaysia`;

export const metadata: Metadata = {
  title: "What Is DSR in Malaysia? Debt Service Ratio Explained (2024)",
  description:
    "Learn what Debt Service Ratio (DSR) means in Malaysia, how banks calculate it, what the 60% and 70% thresholds mean, and how to improve your DSR before applying for a loan.",
  keywords: [
    "what is DSR Malaysia",
    "debt service ratio Malaysia",
    "DSR bank Malaysia",
    "DSR calculation Malaysia",
    "loan eligibility Malaysia",
    "how to improve DSR Malaysia",
    "BNM DSR guideline",
    "DSR 60% 70% Malaysia",
  ],
  alternates: { canonical: "/guides/what-is-dsr-malaysia" },
  openGraph: {
    title: "What Is DSR in Malaysia? Debt Service Ratio Explained (2024)",
    description:
      "DSR explained for Malaysians — what it is, how banks calculate it, the 60%/70% thresholds, and 6 ways to improve it before your next loan application.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DSR Malaysia Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is DSR in Malaysia? Debt Service Ratio Explained",
    description: "DSR explained: how banks calculate it, the 60%/70% threshold, and how to improve yours.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What does DSR stand for in Malaysia?",
    a: "DSR stands for Debt Service Ratio. It is the percentage of your gross monthly income that goes toward servicing all your monthly debt repayments. Malaysian banks use DSR as the primary criterion for loan approval.",
  },
  {
    q: "What is a good DSR in Malaysia?",
    a: "A DSR below 40% is excellent. Most Malaysian banks approve loans for borrowers with DSR up to 60%. Some banks allow up to 70% for high-income earners (above RM10,000/month) or civil servants. Above 70% will typically result in rejection.",
  },
  {
    q: "Does DSR include credit card debt?",
    a: "Yes. Banks count 5% of your total credit card limit per card as a monthly commitment — regardless of whether you currently carry a balance. Cancelling unused credit cards can meaningfully lower your DSR.",
  },
  {
    q: "Is DSR calculated on gross or net income?",
    a: "Malaysian banks use gross monthly income (before EPF, SOCSO, and income tax deductions) for salaried employees. For self-employed borrowers, banks typically use average net profit or declared income from tax returns.",
  },
  {
    q: "Can I get a loan with DSR above 60%?",
    a: "It depends on the bank and your income level. Some banks allow DSR up to 70% for borrowers earning above RM10,000/month or for government employees with stable income. However, fewer banks will approve you and the terms may be less favourable.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is DSR in Malaysia? Debt Service Ratio Explained (2024)",
  description:
    "A complete guide to Debt Service Ratio (DSR) for Malaysians — how it is calculated, what the 60% and 70% bank thresholds mean, and practical tips to improve your DSR.",
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
      { "@type": "ListItem", position: 3, name: "What Is DSR Malaysia", item: PAGE_URL },
    ],
  },
};

export default function WhatIsDsrPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-sky-50 border-b border-blue-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">DSR Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              What Is DSR in Malaysia? Debt Service Ratio Explained
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Before approving any loan, Malaysian banks will calculate your Debt Service Ratio. Here is what DSR means, how it is calculated, and what you can do to improve yours.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Loan Eligibility</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">5 min read</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>What Is DSR?</h2>
          <p>
            DSR, or <strong>Debt Service Ratio</strong>, is the percentage of your gross monthly income that is committed to monthly debt repayments. Malaysian banks use it as the single most important number when deciding whether to approve your loan application.
          </p>
          <p>
            The formula is straightforward:
          </p>
          <div className="not-prose bg-blue-50 border border-blue-100 rounded-2xl p-5 my-6 text-center">
            <p className="text-sm text-blue-600 font-semibold mb-1">DSR Formula</p>
            <p className="text-2xl font-bold text-gray-900">
              DSR = (Total Monthly Debt Repayments ÷ Gross Monthly Income) × 100
            </p>
          </div>
          <p>
            For example, if your gross monthly income is <strong>RM5,000</strong> and your total monthly loan repayments are <strong>RM2,000</strong>, your DSR is 40%.
          </p>

          <h2>What Counts as &ldquo;Monthly Debt Repayments&rdquo;?</h2>
          <p>Banks include the following commitments in your DSR calculation:</p>
          <ul>
            <li>Home loan / mortgage instalments</li>
            <li>Car loan instalments</li>
            <li>Personal loan repayments</li>
            <li>PTPTN student loan repayments</li>
            <li><strong>5% of each credit card&rsquo;s limit</strong> (not the outstanding balance — the limit)</li>
            <li>Hire purchase and leasing repayments</li>
          </ul>
          <p>
            <strong>Not included:</strong> rent, utilities, groceries, insurance premiums, or EPF contributions. DSR is strictly about formal credit obligations.
          </p>

          <h2>The 60% and 70% Thresholds</h2>
          <p>
            Malaysia&rsquo;s central bank (Bank Negara Malaysia) does not set a universal DSR cap, but market practice has settled on clear thresholds:
          </p>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              { label: "Excellent", range: "≤ 40%", color: "bg-emerald-50 border-emerald-200 text-emerald-700", desc: "Strong approval chance at most banks" },
              { label: "Acceptable", range: "41% – 60%", color: "bg-amber-50 border-amber-200 text-amber-700", desc: "Standard approval threshold for most lenders" },
              { label: "High Risk", range: "> 70%", color: "bg-red-50 border-red-200 text-red-700", desc: "Typically results in rejection" },
            ].map((t) => (
              <div key={t.label} className={`rounded-2xl border p-5 ${t.color}`}>
                <p className="font-bold text-xl mb-1">{t.range}</p>
                <p className="font-semibold text-sm mb-1">{t.label}</p>
                <p className="text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
          <p>
            Some banks allow up to <strong>70% DSR</strong> for borrowers earning above RM10,000 per month or for permanent government employees (civil servants / kakitangan kerajaan), who are seen as lower credit risk due to job security.
          </p>

          <h2>Gross vs Net Income: Which Does the Bank Use?</h2>
          <p>
            Banks use <strong>gross monthly income</strong> — your salary before EPF, SOCSO, income tax, and other deductions. This applies to salaried employees. For freelancers and the self-employed, banks typically average the last 2–3 years of declared income from tax returns (Borang BE).
          </p>
          <p>
            This is important: EPF contributions and income tax are not debt, so they are excluded from both sides of the ratio.
          </p>

          <h2>How to Improve Your DSR</h2>
          <p>If your DSR is too high, here are the most effective ways to lower it before applying:</p>
          <ol>
            <li><strong>Cancel unused credit cards.</strong> Each card adds 5% of its limit to your monthly commitments, even if you never use it.</li>
            <li><strong>Pay off or settle smaller loans first.</strong> Eliminating a personal loan completely removes it from the numerator.</li>
            <li><strong>Request a lower credit card limit</strong> on cards you keep — this directly reduces the 5% commitment counted.</li>
            <li><strong>Increase your income.</strong> A salary increment, rental income, or documented side income can raise the denominator and drop your ratio.</li>
            <li><strong>Extend the tenure of existing loans</strong> (if refinancing is available) to reduce monthly instalments — though you pay more interest overall.</li>
            <li><strong>Apply with a co-borrower.</strong> A spouse or family member&rsquo;s income can be combined, which improves the ratio as a household.</li>
          </ol>

          <h2>DSR vs CCRIS</h2>
          <p>
            DSR and CCRIS are both used in loan assessment but measure different things. DSR is a capacity ratio — can you afford the repayment? CCRIS (Central Credit Reference Information System) is a repayment history report — have you been paying on time? You can have a low DSR but be rejected due to CCRIS issues, and vice versa. Both need to be in good shape for loan approval.
          </p>

          {/* CTA */}
          <div className="not-prose bg-blue-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Check Your DSR Instantly</h3>
            <p className="text-blue-100 mb-5 text-sm">
              Enter your gross income, existing commitments, and new loan repayment to see your DSR percentage, eligibility category, and remaining borrowing capacity.
            </p>
            <Link
              href="/dsr-calculator-malaysia"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              DSR Calculator Malaysia →
            </Link>
          </div>

          {/* Related calculators */}
          <h2>Related Calculators</h2>
          <ul>
            <li><Link href="/dsr-calculator-malaysia">DSR Calculator Malaysia</Link> — check your DSR and borrowing capacity</li>
            <li><Link href="/loan-calculator">Loan Calculator</Link> — estimate monthly repayments and total interest</li>
            <li><Link href="/salary-calculator-malaysia">Salary Calculator Malaysia</Link> — find your gross take-home pay</li>
          </ul>
        </article>

        {/* FAQ */}
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

        {/* Breadcrumb back */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
