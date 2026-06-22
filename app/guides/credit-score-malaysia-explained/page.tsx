import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/credit-score-malaysia-explained`;

export const metadata: Metadata = {
  title: "Credit Score Malaysia Explained — CCRIS, CTOS, and How They Work",
  description: "What is a credit score in Malaysia? How CCRIS and CTOS work, what a good score looks like, how banks use your credit report, and how to check your own credit score for free.",
  keywords: ["credit score Malaysia", "CCRIS Malaysia explained", "CTOS score Malaysia", "what is credit score Malaysia", "credit report Malaysia", "skor kredit Malaysia", "CCRIS vs CTOS"],
  alternates: { canonical: "/guides/credit-score-malaysia-explained" },
  openGraph: {
    title: "Credit Score Malaysia Explained — CCRIS, CTOS, and How They Work",
    description: "How credit scoring works in Malaysia — CCRIS, CTOS, what banks check, and how to read your own credit report.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Credit Score Malaysia Explained" }],
  },
  twitter: { card: "summary_large_image", title: "Credit Score Malaysia Explained", description: "CCRIS and CTOS explained for Malaysian borrowers.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "Does Malaysia have a credit score system?", a: "Malaysia uses two primary credit reference systems: CCRIS (Central Credit Reference Information System), managed by Bank Negara Malaysia (BNM), and CTOS, a private credit reporting agency. CCRIS does not generate a single numeric 'score' — it produces a report showing all your credit facilities and repayment history. CTOS generates a numeric score from 300–850 (similar to a Western credit score) by analysing CCRIS data, legal records, business ownership, and other factors. Banks typically check both." },
  { q: "What is a good CTOS score in Malaysia?", a: "CTOS scores range from 300 (very poor) to 850 (excellent). Score ranges: 750–850 = Excellent (best loan rates, easy approval); 650–749 = Good (most loans approved, competitive rates); 550–649 = Fair (may be approved with conditions or higher interest); 450–549 = Poor (likely rejected by mainstream banks, may need licensed moneylenders); 300–449 = Very Poor (significant credit issues, extremely difficult to borrow). Aim for 700+ for comfortable access to home loans and car loans at standard rates." },
  { q: "How do I check my CCRIS report for free?", a: "CCRIS reports are available free of charge through Bank Negara Malaysia's eCCRIS portal (eccris.bnm.gov.my). You need your MyKad number and to register for an account. Reports are updated monthly. You can view the same report that banks see when you apply for a loan. For your CTOS report, you are entitled to one free MyCTOS Basic Report per year, which includes your CTOS score and the factors affecting it." },
  { q: "How long do bad records stay on CCRIS?", a: "CCRIS maintains 12 months of payment history. A late payment from 13+ months ago is no longer visible on your CCRIS report. However, legal actions, bankruptcies, and accounts in default status remain visible for longer — until the matter is resolved. CTOS may retain negative information for a different period (up to 7 years for certain items) as it supplements CCRIS with court records and trade references. The key takeaway: for standard repayment history, you only need to maintain 12 months of clean records to wipe the CCRIS slate." },
  { q: "Can I be blacklisted by banks in Malaysia?", a: "Malaysia does not have a formal 'blacklist' but being in AKPK (Agensi Kaunseling dan Pengurusan Kredit — Malaysia's debt management agency) Debt Management Programme is visible to banks and affects loan approvals. Similarly, being declared bankrupt (which happens after a judgment creditor petition exceeds RM50,000 as of 2023) results in exclusion from most financial products. The Insolvency Department of Malaysia maintains a bankruptcy register that banks check. Short of bankruptcy or AKPK, the 'blacklisting' effect comes from your CCRIS and CTOS records — there is no secret list." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Credit Score Malaysia Explained — CCRIS, CTOS, and How They Work", description: "Comprehensive guide to credit scoring in Malaysia — how CCRIS and CTOS work, what constitutes a good score, and how banks use credit reports in loan assessment.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Credit Score Malaysia Explained", item: PAGE_URL }] },
  ],
};

export default function CreditScoreMalaysiaExplainedPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 border-b border-purple-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-purple-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Credit Score Malaysia Explained</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Credit Score Malaysia Explained — CCRIS, CTOS, and How They Work</h1>
            <p className="text-gray-600 text-lg leading-relaxed">Malaysia uses two credit reference systems — CCRIS (from Bank Negara) and CTOS (private). Together, they determine whether banks lend you money and at what rate. Here is how both work, what banks actually see, and what the numbers mean.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Credit · CCRIS · CTOS</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>What is CCRIS?</h2>
          <p>CCRIS (Central Credit Reference Information System) is Malaysia's national credit database, operated by Bank Negara Malaysia (BNM). Every bank, finance company, and development financial institution in Malaysia is required by law to submit credit facility information to CCRIS. This means that when you take out a loan, credit card, or hire purchase, BNM records it.</p>
          <p>CCRIS does not generate a single number. It produces a report showing: all your outstanding credit facilities (loan balances, credit limits), your repayment behaviour for the past 12 months (shown as a grid of 0s for on-time and 1, 2, 3... for months late), and any "Special Mention" or legal status flags. Lenders can request a CCRIS report (with your consent, which you give by signing a loan application) to see this full picture.</p>

          <h2>What is CTOS?</h2>
          <p>CTOS is a private credit reporting agency (CRA) licensed under the Credit Reporting Agencies Act 2010. Unlike CCRIS, CTOS generates a <strong>numeric credit score from 300 to 850</strong>. CTOS collects data from CCRIS, court records (legal suits, bankruptcies, judgments), company registrations (SSM), and trade references, then calculates a score reflecting your overall creditworthiness.</p>
          <p>Most Malaysian banks check both CCRIS and CTOS for loan applications. CCRIS gives raw historical data; CTOS gives a processed risk score. A low CTOS score despite a clean CCRIS can indicate court judgments or legal issues that don't appear in CCRIS.</p>

          <h2>How Banks Actually Use Your Credit Report</h2>
          <p>When you apply for any loan or credit card in Malaysia, the bank undertakes an assessment of: (1) Your income and DSR (Debt Service Ratio) — can you afford the repayments? (2) Your CCRIS — have you been reliable with past credit? (3) Your CTOS score — what does the broader credit risk picture look like? (4) Employment stability and industry. (5) Property value and LTV for secured loans.</p>
          <p>The weight given to each factor varies by bank and product. For home loans, income and property value matter most. For personal loans, CCRIS payment history is more decisive. For credit cards, CCRIS + CTOS score + income tier determine which card and what limit you're offered.</p>

          <h2>Reading Your CCRIS Report</h2>
          <p>When you access your CCRIS report via eCCRIS, you will see each credit facility listed with a 12-month payment grid. The numbers in the grid represent months of arrears: 0 = paid on time, 1 = 1 month late, 2 = 2 months late, etc. A row of all zeros is ideal. Lenders are most concerned by consecutive non-zero entries — one "1" in 12 months is often overlooked; two consecutive "2"s suggests a payment pattern problem.</p>
          <p>Also note the "Outstanding Balance" and "Credit Limit" for each facility — this shows your credit utilisation. High utilisation (close to your limits) can indicate financial stress even if all payments are on time. For a step-by-step guide to checking your CCRIS, read our <Link href="/guides/how-to-check-ccris-malaysia">How to Check CCRIS Malaysia guide</Link>.</p>

          <h2>Understanding Your CTOS Score</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-purple-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Score Range</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Rating</th><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-purple-100">Typical Outcome</th></tr></thead>
              <tbody>
                {[
                  ["750–850", "Excellent", "Best rates, easy approval for most products"],
                  ["700–749", "Very Good", "Strong approval chances, competitive rates"],
                  ["650–699", "Good", "Usually approved, standard rates"],
                  ["550–649", "Fair", "May be approved with conditions"],
                  ["450–549", "Poor", "Likely rejected by mainstream banks"],
                  ["300–449", "Very Poor", "Major credit issues, very difficult to borrow"],
                ].map(([s, r, o], i) => (
                  <tr key={i} className="border-b border-gray-50"><td className="px-4 py-2.5 text-gray-700 font-semibold">{s}</td><td className="px-4 py-2.5 text-center text-gray-600">{r}</td><td className="px-4 py-2.5 text-gray-600">{o}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>To get your CTOS score, register at myctos.com and request your MyCTOS Basic Report (free once per year). The report shows your score, the factors affecting it positively or negatively, and a breakdown of how each component contributes. For strategies to improve a low score, read our <Link href="/guides/how-to-improve-ctos-score-malaysia">guide on improving your CTOS score</Link>.</p>
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
