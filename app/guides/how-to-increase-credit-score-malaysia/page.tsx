import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-to-increase-credit-score-malaysia`;

export const metadata: Metadata = {
  title: "How to Increase Your Credit Score in Malaysia — 8 Proven Steps",
  description: "Step-by-step guide to improving your CTOS score and CCRIS record in Malaysia. Pay on time, reduce utilisation, dispute errors, and build a clean credit history for better loan approvals.",
  keywords: ["how to increase credit score Malaysia", "improve CTOS score Malaysia", "improve CCRIS record Malaysia", "raise credit score Malaysia", "cara tingkatkan skor kredit Malaysia", "better credit score Malaysia loan"],
  alternates: { canonical: "/guides/how-to-increase-credit-score-malaysia" },
  openGraph: {
    title: "How to Increase Your Credit Score in Malaysia — 8 Proven Steps",
    description: "Proven steps to improve your CTOS score and CCRIS record for better loan approvals in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How to Increase Credit Score Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "How to Increase Credit Score Malaysia", description: "8 steps to improve your CTOS score and CCRIS record in Malaysia.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "How long does it take to improve my credit score in Malaysia?", a: "The CCRIS report shows the past 12 months of payment history — so maintaining a perfect payment record for 12 consecutive months will completely replace any poor payment history from the previous year. CTOS score improvements typically lag by 1–3 months after CCRIS improves (CTOS updates when CCRIS is refreshed). For someone with recent late payments but no defaults or legal actions, 6–12 months of consistent on-time payments typically yields a meaningful score improvement. Legal judgments and bankruptcies take longer — these must be resolved before full credit rehabilitation." },
  { q: "Does paying off all my debt improve my credit score?", a: "Paying off debt reduces your credit utilisation (outstanding balance ÷ credit limit), which positively affects your CTOS score. However, closing paid-off credit accounts can actually reduce your score temporarily — it lowers your total available credit, which increases utilisation on remaining accounts. The better approach: pay down balances without closing accounts. Keep old accounts open even if unused (assuming no annual fee) as they contribute to credit history length. Only close accounts with fees that outweigh the credit history benefit." },
  { q: "Can I dispute errors on my CCRIS report?", a: "Yes. If your CCRIS report contains incorrect information (wrong balances, payments recorded as late when they were on time, accounts you don't recognise), you can dispute it by contacting Bank Negara Malaysia's BNMLINK or the credit institution that submitted the incorrect data. For CCRIS disputes: contact BNM through the bnmlink@bnm.gov.my email or call 1-300-88-5465. Bring supporting documents (bank statements, payment receipts). Resolution typically takes 14–30 working days. For CTOS disputes, use the CTOS dispute resolution form on their website." },
  { q: "Does checking my own credit score lower it?", a: "No. Checking your own CCRIS report through eCCRIS or your own CTOS report through MyCTOS is a 'soft inquiry' — it does not affect your score or appear on your report as seen by lenders. Only 'hard inquiries' — when a lender checks your credit report as part of a loan application — are visible to other lenders and may slightly affect your score. Having many hard inquiries in a short period (applying for multiple loans or credit cards within 3–6 months) can suggest financial stress to lenders." },
  { q: "What is the fastest way to improve credit score in Malaysia?", a: "The fastest actionable steps: (1) Bring all overdue accounts current immediately — pay any outstanding late amounts right now. (2) Set up autopay for minimum payments on all accounts so you never miss a payment going forward. (3) Pay down credit card balances to below 30% of their limits. (4) Dispute any errors on your CCRIS or CTOS report. (5) Avoid applying for new credit for 6–12 months while rebuilding. None of these are 'instant' — the fastest meaningful improvement typically takes 3–6 months of consistent behaviour." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "How to Increase Your Credit Score in Malaysia — 8 Proven Steps", description: "Actionable guide to improving your CTOS score and CCRIS record in Malaysia through consistent payment behaviour, debt reduction, dispute resolution, and strategic credit management.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "How to Increase Credit Score Malaysia", item: PAGE_URL }] },
  ],
};

export default function HowToIncreaseCreditScoreMalaysiaPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-b border-indigo-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-indigo-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">How to Increase Credit Score Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">How to Increase Your Credit Score in Malaysia — 8 Proven Steps</h1>
            <p className="text-gray-600 text-lg leading-relaxed">A low CTOS score or poor CCRIS record does not have to be permanent. These eight concrete steps will improve your credit profile, typically showing meaningful progress within 6–12 months.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Credit · CTOS · CCRIS</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Step 1: Check Your Current CCRIS and CTOS Reports</h2>
          <p>You cannot improve what you haven't measured. Start by getting your current CCRIS report (free via eCCRIS at eccris.bnm.gov.my) and your MyCTOS Basic Report (free once per year at myctos.com). Read both carefully. Identify: any accounts with missed payments, any balances close to credit limits, any accounts you don't recognise, and any legal records or judgments.</p>
          <p>This is your baseline. Understanding exactly what is hurting your score — late payments, high utilisation, errors, or legal records — tells you which steps to prioritise. Learn more in our <Link href="/guides/credit-score-malaysia-explained">Credit Score Malaysia Explained guide</Link>.</p>

          <h2>Step 2: Bring All Overdue Accounts Current</h2>
          <p>The single most impactful action is bringing any overdue accounts fully current. Every month an account sits in arrears, a new negative entry appears on your CCRIS. Call the lender immediately if you are behind — many offer hardship arrangements, payment plans, or grace periods that stop further negative reporting while you catch up.</p>
          <p>After settling arrears, the existing late payment markers don't disappear immediately — but they stop accumulating. After 12 months of on-time payments, the old late entries scroll off the CCRIS report.</p>

          <h2>Step 3: Set Up Autopay for All Credit Accounts</h2>
          <p>Payment history is the most significant factor in your credit score. Set up automatic payment (at minimum, the minimum payment amount) for every credit card and loan you have. This eliminates human error as a cause of late payments. Most Malaysian banks — Maybank, CIMB, Public Bank, RHB, HLB — allow autopay setup via their internet banking portals.</p>
          <p>Paying the minimum is sufficient to prevent late payment recording, but to reduce debt and improve utilisation, pay as much above the minimum as possible each month.</p>

          <h2>Step 4: Reduce Credit Card Utilisation Below 30%</h2>
          <p>Credit utilisation — the percentage of your credit limit currently used — is a key scoring factor. If you have a RM10,000 credit card limit and RM7,000 outstanding, your utilisation is 70% — too high. Aim for below 30% on each individual card and across all cards combined. Pay down balances before the statement date (since CCRIS captures the balance at month-end). Requesting a credit limit increase (without spending more) also mechanically reduces utilisation.</p>
          <p>Once your utilisation is under control and your score improves, you may qualify for a better credit card product. Read our <Link href="/guides/credit-card-eligibility-malaysia">Credit Card Eligibility Malaysia guide</Link> for the income and CCRIS criteria banks use when evaluating card applications.</p>

          <h2>Step 5: Dispute Any Errors on Your Reports</h2>
          <p>Credit report errors are more common than many people realise — wrong balances, payments recorded as late when they were on time, accounts belonging to someone with a similar name, or closed accounts still showing as open. Each error potentially hurts your score unfairly. Dispute errors through BNM (for CCRIS) or CTOS directly with supporting documentation. Corrections typically take 14–30 working days.</p>

          <h2>Step 6: Avoid Applying for Multiple Credit Products in a Short Period</h2>
          <p>Each loan or credit card application triggers a hard inquiry on your CCRIS — visible to subsequent lenders for 12 months. Multiple applications in a short period signal desperation for credit, which increases perceived risk. During a credit rebuilding phase, resist the temptation to apply for anything new for at least 6 months. If you must apply, target only one product at a time and wait for the outcome before applying elsewhere.</p>

          <h2>Step 7: Keep Old Credit Accounts Open</h2>
          <p>Credit history length matters. An account you have held for 5 years with clean history is a positive asset to your credit profile. Closing old accounts reduces the average age of your credit history and can also reduce your total available credit limit (increasing utilisation). Unless an account has a fee that outweighs its benefit, keep it open even if you no longer use it actively. Occasional small purchases (and immediate full repayment) keep the account active without accumulating debt.</p>

          <h2>Step 8: Resolve Any Legal Records</h2>
          <p>CTOS includes court records — legal suits, judgment debts, and bankruptcies. These significantly lower your CTOS score and may appear on your report even after repayment. If you have a judgment debt, settle it and obtain a Satisfaction of Judgment document from the court. Lodge this with CTOS for update. Consult a lawyer if you have unresolved legal proceedings — waiting passively worsens the situation. Read our <Link href="/guides/how-to-improve-ctos-score-malaysia">CTOS Score Improvement guide</Link> for more detail on CTOS-specific strategies.</p>
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

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/guides/credit-score-malaysia-explained", title: "Credit Score Malaysia Explained", desc: "How CCRIS and CTOS work — what banks see when you apply for credit." },
              { href: "/guides/how-to-check-ccris-malaysia", title: "How to Check CCRIS Malaysia", desc: "Free step-by-step guide to accessing your CCRIS report via BNM eCCRIS." },
              { href: "/guides/credit-card-eligibility-malaysia", title: "Credit Card Eligibility Malaysia", desc: "Income and credit score requirements for Malaysian credit cards." },
              { href: "/guides/how-to-improve-ctos-score-malaysia", title: "How to Improve CTOS Score", desc: "CTOS-specific strategies for resolving legal records and boosting your score." },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="block bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-indigo-200 hover:bg-indigo-50 transition-colors">
                <div className="font-semibold text-sm text-gray-800">{g.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{g.desc}</div>
              </Link>
            ))}
          </div>
        </div>
        <AuthorCard />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
