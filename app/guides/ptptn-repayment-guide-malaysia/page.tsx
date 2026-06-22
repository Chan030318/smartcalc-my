import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/ptptn-repayment-guide-malaysia`;

export const metadata: Metadata = {
  title: "PTPTN Repayment Guide Malaysia 2026 — How to Pay, Discounts & Options",
  description: "Complete PTPTN repayment guide for Malaysia — monthly repayment schedule, lump-sum discount offers, MySaraan Automatic Deduction, and what happens if you don't pay your PTPTN loan.",
  keywords: ["PTPTN repayment Malaysia 2026", "cara bayar PTPTN", "PTPTN monthly repayment", "PTPTN discount lump sum", "PTPTN MySaraan auto deduction", "PTPTN blacklist travel ban", "bayaran balik PTPTN"],
  alternates: { canonical: "/guides/ptptn-repayment-guide-malaysia" },
  openGraph: {
    title: "PTPTN Repayment Guide Malaysia 2026 — How to Pay, Discounts & Options",
    description: "PTPTN repayment schedule, discount offers, MySaraan deduction, and what to do if you can't pay.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PTPTN Repayment Guide Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "PTPTN Repayment Guide Malaysia 2026", description: "How to repay PTPTN, get discounts, and avoid travel bans in Malaysia.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "When do I need to start repaying PTPTN?", a: "PTPTN repayment begins one year after completing your studies (graduation or end of loan disbursement, whichever is later). If you graduated in June 2024, your first repayment is due in June 2025. You will receive a repayment notice from PTPTN. If you do not receive a notice, log in to MyPTPTN (myptptn.ptptn.gov.my) to check your repayment schedule and outstanding balance. Repayment that begins late incurs a 1% per annum service charge (bukan faedah — PTPTN loans are structured as qardhul hasan Islamic financing)." },
  { q: "How much is my monthly PTPTN repayment?", a: "Monthly repayment depends on your total loan amount and repayment tenure (typically 10–15 years). As a rough guide: a RM30,000 loan over 10 years at 1% annual service charge is approximately RM260/month. A RM40,000 loan over 15 years is approximately RM235/month. Log in to MyPTPTN to see your exact scheduled monthly repayment. You can also request a revised repayment schedule if your financial circumstances change." },
  { q: "Does PTPTN affect my CCRIS and loan eligibility?", a: "Yes. PTPTN loans are reported to CCRIS as a credit facility. Outstanding PTPTN balance and monthly repayment amount are visible to banks when you apply for loans. The monthly PTPTN repayment is counted in your DSR (Debt Service Ratio) calculation — reducing how much banks will lend you for a home loan or car loan. If you are applying for a home loan, consider accelerating PTPTN repayment before applying to reduce your DSR commitments." },
  { q: "What is the PTPTN lump-sum discount offer?", a: "PTPTN periodically offers discounts for early repayment. Historical discount offers have included: 10%–20% off outstanding balance for lump-sum full settlement; 5%–10% for early partial repayments. PTPTN's MySaraan salary deduction scheme (automatic deduction of 2%–15% of salary via EPF) previously carried incentives too. Monitor PTPTN's official announcements (ptptn.gov.my) for current discount offers — these are time-limited promotions, not permanent policy." },
  { q: "What happens if I don't pay PTPTN?", a: "PTPTN has enforcement powers including: (1) Travel ban — PTPTN borrowers with outstanding debts may be barred from overseas travel at the Immigration Department checkpoint. (2) CCRIS reporting — arrears appear on CCRIS, affecting future loan approvals. (3) Court action — PTPTN can sue defaulters for recovery and obtain judgment debts. (4) Salary attachment — a court judgment allows PTPTN to garnish your salary. If you cannot afford repayment, contact PTPTN proactively to arrange a reduced repayment schedule or deferment — options are available for genuine financial hardship cases." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "PTPTN Repayment Guide Malaysia 2026 — How to Pay, Discounts & Options", description: "Complete guide to PTPTN student loan repayment in Malaysia — when to start, monthly amounts, discount offers, MySaraan auto-deduction, CCRIS impact, and enforcement consequences.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "PTPTN Repayment Guide Malaysia", item: PAGE_URL }] },
  ],
};

export default function PtptnRepaymentGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-orange-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">PTPTN Repayment Guide Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">PTPTN Repayment Guide Malaysia 2026 — How to Pay, Discounts &amp; Options</h1>
            <p className="text-gray-600 text-lg leading-relaxed">Over 3 million Malaysians have outstanding PTPTN loans. Here is everything you need to know about when to start, how much to pay, how to get discounts, and what happens if you miss payments.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Loans · PTPTN</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>How PTPTN Loans Work</h2>
          <p>PTPTN (Perbadanan Tabung Pendidikan Tinggi Nasional) is Malaysia's national student loan body under the Ministry of Education. PTPTN loans are structured as <strong>qardhul hasan</strong> — an Islamic interest-free loan with a small annual service charge of 1% per annum to cover administrative costs. This is not interest (riba) — it is a service fee. The 1% charge is only applied to outstanding principal, not compounded.</p>
          <p>PTPTN loans are disbursed semester by semester during your studies and must be repaid once you graduate. Unlike some countries where student loans are income-contingent, PTPTN repayment is on a fixed schedule regardless of your income — though income-based deductions (MySaraan) are now available.</p>

          <h2>Repayment Start Date and Schedule</h2>
          <p>Repayment begins exactly <strong>12 months after completing your studies</strong>. "Completing studies" is defined as the end date of your final semester's loan disbursement, which may differ from your actual graduation ceremony date. Log in to MyPTPTN (myptptn.ptptn.gov.my) with your MyKad number to check your exact repayment start date and outstanding balance.</p>
          <p>Your repayment schedule is set based on: total loan amount disbursed, agreed repayment tenure (5–20 years depending on loan size), and monthly instalment amount. You receive a notice by post and email. If you moved addresses after graduation, update your contact details in MyPTPTN to ensure you receive notices.</p>

          <h2>How to Pay PTPTN</h2>
          <p>PTPTN accepts multiple payment channels: (1) Online banking via Maybank2u, CIMB Clicks, RHB Now, Public Bank, and other major banks (search "PTPTN" as payee); (2) JomPAY with biller code 8002 (PTPTN); (3) PTPTN Counter at any PTPTN branch; (4) AutoDebit/Standing instruction via your bank; (5) MySaraan — automatic salary deduction via EPF (2%–15% of salary, optional). Setting up MySaraan removes the manual repayment burden and shows lenders you are actively repaying your loan.</p>

          <h2>PTPTN Discount Offers and Incentives</h2>
          <p>PTPTN has historically offered time-limited discount campaigns to encourage early settlement. Types of discounts seen in past years: full lump-sum settlement discounts (10%–20% off outstanding balance), partial prepayment discounts (for significant lump-sum top-ups), and MySaraan incentives (no travel ban for active MySaraan deduction participants).</p>
          <p>These discounts are not permanent policy — they are announced periodically (often around Budget time or national events) with deadlines. Monitor ptptn.gov.my and sign up for PTPTN's newsletter to receive alerts when promotions are announced. The value of a 10%–15% lump-sum discount can be significant: on a RM30,000 outstanding balance, a 15% discount saves RM4,500.</p>

          <h2>PTPTN and Your Home Loan / DSR</h2>
          <p>Your PTPTN monthly repayment appears in your CCRIS as a credit commitment. When applying for a home loan, banks count this repayment in your DSR. If your PTPTN repayment is RM300/month and you want to buy a home with a RM1,500/month instalment, your total commitments are RM1,800/month. On a RM5,000 gross salary, that's 36% DSR — manageable. But if you also have a car loan of RM700/month, the combined RM2,500 is 50% DSR, which starts to limit your borrowing capacity.</p>
          <p>If you are planning to apply for a home loan within 2–3 years, consider aggressively paying down PTPTN (especially if PTPTN offers a settlement discount) to reduce this commitment. Use our <Link href="/dsr-calculator-malaysia">DSR Calculator</Link> to see how your PTPTN repayment affects home loan eligibility.</p>

          <h2>What If You Cannot Afford Repayment?</h2>
          <p>If you face genuine financial hardship, contact PTPTN proactively before defaulting. Options available: (1) Deferment — defer repayment for up to 12 months (approved case by case); (2) Reduced monthly payment — request a lower instalment for a limited period; (3) MySaraan minimum deduction (2%) — reduces burden while keeping you compliant. Ignoring PTPTN and not paying leads to travel ban enforcement, CCRIS defaults, and eventually legal action. Proactive communication is always the better path.</p>
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
