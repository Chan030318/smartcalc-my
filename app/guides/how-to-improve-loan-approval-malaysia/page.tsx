import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-to-improve-loan-approval-malaysia`;

export const metadata: Metadata = {
  title: "How to Improve Loan Approval Chances in Malaysia (2024 Guide)",
  description:
    "Practical steps to improve your loan approval chances in Malaysia — reduce DSR, clean up CCRIS, fix CTOS, increase income documentation, and choose the right bank.",
  keywords: [
    "how to improve loan approval Malaysia",
    "loan rejected Malaysia",
    "CCRIS clean Malaysia",
    "how to get loan approved Malaysia",
    "improve DSR Malaysia",
    "loan eligibility Malaysia",
    "CTOS score Malaysia",
    "cara lulus pinjaman Malaysia",
  ],
  alternates: { canonical: "/guides/how-to-improve-loan-approval-malaysia" },
  openGraph: {
    title: "How to Improve Loan Approval Chances in Malaysia (2024)",
    description: "12 proven ways to improve your loan approval odds in Malaysia — DSR, CCRIS, CTOS, income documentation, and more.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Improve Loan Approval Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "How to Improve Loan Approval Chances in Malaysia", description: "12 steps to get your loan approved — DSR, CCRIS, CTOS, and bank selection tips.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "Why was my loan rejected in Malaysia?", a: "The most common reasons for loan rejection in Malaysia are: (1) DSR too high — existing monthly commitments exceed 60–70% of gross income; (2) Poor CCRIS history — late payments or defaults in the past 12 months; (3) Insufficient income documentation — especially for self-employed borrowers; (4) Too many recent loan applications in a short period; (5) Blacklisted by CTOS due to legal judgments or unpaid debts." },
  { q: "How long does it take to improve my CCRIS?", a: "CCRIS records payment history for the past 12 months. Late payments drop off the record after 12 months of on-time payment. Defaults and restructured accounts may remain visible longer. The fastest way to improve CCRIS is to pay all existing commitments on time without exception for 12 consecutive months." },
  { q: "Does applying to multiple banks hurt my loan chances?", a: "Yes. Every bank that accesses your CCRIS creates an inquiry record. Multiple inquiries in a short period signal desperation or financial stress to underwriters. Ideally, research which bank is most likely to approve you first, then apply only to that bank. Using a loan broker can help, as they assess eligibility before applying." },
  { q: "Can I still get a loan with a high DSR?", a: "Some banks allow higher DSR (up to 70%) for borrowers earning above RM10,000/month or for government employees. Islamic banking products (e.g., personal financing-i) sometimes have different eligibility criteria. You can also reduce DSR by settling smaller loans before applying, cancelling unused credit cards, or applying with a co-borrower to combine income." },
  { q: "What is the difference between CCRIS and CTOS?", a: "CCRIS is operated by Bank Negara Malaysia and records your credit facilities (loans, credit cards) and payment history with financial institutions. CTOS is a private credit reporting agency that aggregates a broader range of data including legal suits, bankruptcy proceedings, trade references, and CCRIS data. Banks check both. Being blacklisted by CTOS (e.g., due to a judgment debt) is more serious and requires settling the underlying matter to resolve." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Improve Loan Approval Chances in Malaysia (2024 Guide)",
  description: "A practical guide to improving loan approval chances in Malaysia — DSR reduction, CCRIS clean-up, CTOS, income documentation, and bank selection strategies.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "Improve Loan Approval Malaysia", item: PAGE_URL },
  ]},
};

const steps = [
  { no: 1, title: "Know Your DSR Before Applying", desc: "Calculate your Debt Service Ratio (DSR) before approaching any bank. If it exceeds 60%, focus on reducing it first. Use our free DSR Calculator to get an instant reading.", urgent: false },
  { no: 2, title: "Pay Off or Close Small Loans First", desc: "Eliminating a RM300/month personal loan or hire-purchase agreement removes it from your DSR calculation entirely. Even a RM100/month reduction in commitments can meaningfully lower your ratio.", urgent: false },
  { no: 3, title: "Cancel Unused Credit Cards", desc: "Each credit card limit contributes 5% of the limit as a monthly commitment in DSR calculations — regardless of whether you carry a balance. A RM10,000-limit card you never use counts as RM500/month. Cancel cards you don't need.", urgent: true },
  { no: 4, title: "Pay All Commitments on Time for 12 Months", desc: "Banks view the last 12 months of CCRIS very closely. Even a single missed payment in the past 6 months can trigger rejection. Set up auto-debit for all loan repayments immediately.", urgent: true },
  { no: 5, title: "Check Your CCRIS and CTOS Reports", desc: "Request your CCRIS report (free via BNM or at any bank) and CTOS report (paid, from ctos.com.my). Look for errors, disputed amounts, or accounts you don't recognise. Dispute any inaccuracies with the respective agency.", urgent: true },
  { no: 6, title: "Avoid New Loan Applications for 3–6 Months", desc: "Every new application creates a CCRIS inquiry. Multiple recent inquiries signal financial stress to bank underwriters. Apply only after your profile is clean — not while you're still cleaning it up.", urgent: false },
  { no: 7, title: "Gather Strong Income Documentation", desc: "For salaried employees: 3 months' payslips, 3 months' bank statements, EA Form or EPF statement. For self-employed: 2 years of tax returns (Borang B), business bank statements, company financials. Incomplete documentation is one of the most common avoidable rejection reasons.", urgent: false },
  { no: 8, title: "Apply for the Right Loan Amount", desc: "Applying for the maximum possible loan makes banks nervous. If you qualify for RM400,000 but apply for RM380,000, your approval odds improve because the bank sees you have a buffer.", urgent: false },
  { no: 9, title: "Add a Co-Borrower", desc: "A co-borrower (spouse, parent, sibling) whose income is stable and whose CCRIS is clean can combine income with yours, improving DSR. Both borrowers are equally liable for repayment — discuss this commitment clearly.", urgent: false },
  { no: 10, title: "Choose Islamic Financing Products", desc: "Some Islamic banking products have slightly different eligibility assessments compared to conventional loans. If rejected by a conventional product, enquire about the Islamic equivalent at the same or a different bank.", urgent: false },
  { no: 11, title: "Try a Different Bank", desc: "Each bank has different risk appetite, DSR caps, and income documentation requirements. Regional development banks (like BSNI or BSN) may be more accessible. A licensed loan consultant can identify which banks are most likely to approve your specific profile.", urgent: false },
  { no: 12, title: "Maintain a Stable Employment History", desc: "Banks prefer applicants with at least 6 months at the current employer (some require 12 months for probationary employees). Frequent job changes or employment gaps raise flags. If you just changed jobs, wait 6 months before applying.", urgent: false },
];

export default function ImproveLoanApprovalPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 border-b border-blue-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-blue-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Improve Loan Approval</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How to Improve Loan Approval Chances in Malaysia
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Getting a loan rejected is frustrating — but usually fixable. Here are 12 concrete steps to clean up your financial profile and significantly improve your chances of approval.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Loans</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>What Banks Actually Look At</h2>
          <p>Malaysian banks assess loan applications on two main dimensions:</p>
          <ol>
            <li><strong>Capacity:</strong> Can you afford the repayments? → Measured by DSR (Debt Service Ratio)</li>
            <li><strong>Character:</strong> Have you repaid past debts reliably? → Measured by CCRIS and CTOS</li>
          </ol>
          <p>Both must pass. You can have a DSR of 40% but still be rejected if your CCRIS shows missed payments. Conversely, a clean CCRIS won't help if your DSR is 75%.</p>

          <h2>12 Steps to Improve Your Approval Odds</h2>
          <div className="not-prose space-y-4 my-6">
            {steps.map((step) => (
              <div key={step.no} className={`rounded-2xl border p-5 ${step.urgent ? "bg-red-50 border-red-100" : "bg-gray-50 border-gray-100"}`}>
                <div className="flex items-start gap-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step.urgent ? "bg-red-500 text-white" : "bg-blue-600 text-white"}`}>{step.no}</span>
                  <div>
                    <h3 className={`font-bold text-base mb-1 ${step.urgent ? "text-red-800" : "text-gray-900"}`}>{step.title}{step.urgent && <span className="ml-2 text-xs font-semibold bg-red-200 text-red-700 px-2 py-0.5 rounded-full">Do This First</span>}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2>Timeline: When Should You Apply?</h2>
          <p>If your profile needs work, here is a realistic timeline:</p>
          <ul>
            <li><strong>Month 1–2:</strong> Cancel unused credit cards, pay off smallest loans, get CCRIS and CTOS reports, set up auto-debit for all repayments.</li>
            <li><strong>Month 3–6:</strong> Build 6 months of clean CCRIS. Avoid any new applications. Save for down payment and fees.</li>
            <li><strong>Month 7–12:</strong> DSR should now reflect reduced commitments. Income documentation should show 3+ months of full, regular salary.</li>
            <li><strong>Month 12+:</strong> Apply with clean CCRIS, reduced DSR, and full documentation. Odds of approval are substantially higher.</li>
          </ul>

          <div className="not-prose bg-blue-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Check Your DSR Now</h3>
            <p className="text-blue-100 mb-5 text-sm">Enter your gross income and existing commitments to instantly see your DSR, how much headroom you have, and how a new loan affects your ratio.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dsr-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm">DSR Calculator →</Link>
              <Link href="/loan-calculator" className="inline-flex items-center gap-2 bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-400 transition-colors text-sm border border-blue-400">Loan Calculator →</Link>
            </div>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/what-is-dsr-malaysia">What Is DSR in Malaysia?</Link></li>
            <li><Link href="/guides/housing-loan-eligibility-malaysia">Housing Loan Eligibility Malaysia</Link></li>
            <li><Link href="/guides/what-salary-to-afford-house-malaysia">What Salary to Afford a House in Malaysia</Link></li>
            <li><Link href="/dsr-calculator-malaysia">DSR Calculator Malaysia</Link></li>
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
