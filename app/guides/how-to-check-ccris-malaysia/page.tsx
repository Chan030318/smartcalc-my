import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-to-check-ccris-malaysia`;

export const metadata: Metadata = {
  title: "How to Check Your CCRIS Report Malaysia 2026 — Step-by-Step Guide",
  description:
    "Learn how to check your CCRIS (Central Credit Reference Information System) report online via BNM eCCRIS. Understand what CCRIS shows, how lenders use it, and how to fix errors before applying for a loan.",
  keywords: [
    "how to check CCRIS Malaysia",
    "CCRIS report Malaysia",
    "BNM eCCRIS",
    "CCRIS online check",
    "CCRIS vs CTOS Malaysia",
    "semak CCRIS Malaysia",
    "credit report Malaysia",
  ],
  alternates: { canonical: "/guides/how-to-check-ccris-malaysia" },
  openGraph: {
    title: "How to Check Your CCRIS Report Malaysia 2026 — Step-by-Step Guide",
    description: "Step-by-step guide to checking your CCRIS report online via BNM eCCRIS and understanding what lenders see.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How to Check CCRIS Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Check Your CCRIS Report Malaysia — Step-by-Step Guide",
    description: "How to access your CCRIS report free via BNM eCCRIS and what it means for loan applications.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "Is it free to check my CCRIS report in Malaysia?",
    a: "Yes. Checking your own CCRIS report through BNM's eCCRIS portal is completely free. You can access it at eccris.bnm.gov.my using your MyKad number and a registered email address. There is no limit on how many times you can check your own report.",
  },
  {
    q: "Does checking my CCRIS report affect my credit score?",
    a: "No. Checking your own CCRIS report is a 'soft inquiry' and does not affect your credit standing. Only 'hard inquiries' — made by financial institutions when you apply for credit — are recorded in CCRIS. You can check your own report as many times as you want without any negative impact.",
  },
  {
    q: "How long does negative information stay on my CCRIS?",
    a: "CCRIS retains credit information for 12 months from the reporting date. This means a missed payment or default from more than 12 months ago will not appear in your current CCRIS report. However, it may still appear in CTOS, which retains some categories of negative information for longer periods.",
  },
  {
    q: "What is the difference between CCRIS and CTOS?",
    a: "CCRIS is a centralised database managed by Bank Negara Malaysia (BNM) that captures credit facilities from all licensed financial institutions — banks, insurance companies, and licensed money lenders. CTOS is a private credit reporting agency that aggregates data from multiple sources including court judgements, bankruptcy records, trade references, and directorship information. Banks typically check both when assessing loan applications.",
  },
  {
    q: "Can I dispute errors in my CCRIS report?",
    a: "Yes. If you find inaccurate information in your CCRIS report, you should first contact the relevant financial institution directly (since they submit data to CCRIS). If the institution does not resolve the issue, you can escalate to BNM's Contact Centre at 1-300-88-5465 (BNMTELELINK) or submit a complaint online at bnm.gov.my. Bring supporting documents such as payment receipts or bank statements.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How to Check Your CCRIS Report Malaysia 2026 — Step-by-Step Guide",
      description: "Step-by-step guide to accessing your free CCRIS report through BNM eCCRIS, understanding what lenders see, and fixing errors before your next loan application.",
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
        { "@type": "ListItem", position: 3, name: "How to Check CCRIS Malaysia", item: PAGE_URL },
      ],
    },
  ],
};

export default function CcrisGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-sky-50 border-b border-blue-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-blue-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">How to Check CCRIS Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How to Check Your CCRIS Report Malaysia (2026 Guide)
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your CCRIS report is what every bank sees before approving your loan. Learn how to access it free through BNM eCCRIS, what each section means, and how to fix errors that could be blocking your applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Credit · Loans</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>What Is CCRIS?</h2>
          <p>
            CCRIS stands for Central Credit Reference Information System. It is a centralised database managed by Bank Negara Malaysia (BNM) that collects and stores credit information submitted by all licensed financial institutions in Malaysia — commercial banks, Islamic banks, insurance companies, development financial institutions, and licensed money-lenders. It was launched in 2001 and today holds credit records for tens of millions of Malaysians.
          </p>
          <p>
            Every time you apply for or hold a credit product — a home loan, personal loan, credit card, overdraft, hire purchase — the relevant institution reports your account status to CCRIS monthly. This includes your outstanding balance, whether you are making repayments on time, any arrears, and whether any legal action has been taken against you for non-payment.
          </p>
          <p>
            When you apply for a new loan, the bank pulls your CCRIS report as part of its credit assessment. A clean CCRIS record is one of the most important factors in getting your loan approved at a good interest rate. Negative entries — missed payments, high outstanding balances, accounts in legal action — can cause rejections or higher rates.
          </p>

          <h2>How to Check Your CCRIS Online (Step by Step)</h2>
          <p>
            BNM provides free public access to CCRIS reports through the <strong>eCCRIS portal</strong> at eccris.bnm.gov.my. Here is exactly how to check it:
          </p>
          <ol>
            <li><strong>Go to eccris.bnm.gov.my</strong> — use a desktop browser for the best experience. Mobile access works but some features display better on a wider screen.</li>
            <li><strong>Register for an account</strong> if this is your first time. You will need your MyKad (NRIC) number and a valid email address. BNM will send a verification email — click the link to activate your account.</li>
            <li><strong>Log in</strong> with your MyKad number and the password you created.</li>
            <li><strong>Request your CCRIS report</strong> — click &quot;Request CCRIS Report&quot; and verify your identity. For online requests, you may need to answer security questions related to your credit history.</li>
            <li><strong>Download the report</strong> in PDF format. Reports are usually available immediately or within a few minutes.</li>
          </ol>
          <p>
            Alternatively, you can request a physical CCRIS report at any BNM office (Kuala Lumpur, Johor Bahru, Kuching, Kota Kinabalu, Penang, Perlis, Melaka, Ipoh) by presenting your MyKad in person. The report is printed immediately and free of charge.
          </p>

          <h2>What Is in a CCRIS Report?</h2>
          <p>
            A CCRIS report is divided into three main sections:
          </p>
          <p>
            <strong>1. Outstanding Credit (Credit Facilities)</strong>: This shows all your current active credit accounts — home loans, car loans, personal loans, credit cards, and overdrafts. For each account, you will see the financial institution name, type of facility, approved limit or original loan amount, outstanding balance, monthly instalment, and the repayment status for the past 12 months (shown as months in arrears for each month, or &quot;0&quot; if paid on time).
          </p>
          <p>
            <strong>2. Special Attention Accounts</strong>: These are accounts flagged as requiring special attention — typically loans that have been classified as non-performing (NPL), restructured, or rescheduled. This section is a red flag for lenders and must be resolved before most credit applications will succeed.
          </p>
          <p>
            <strong>3. Credit Applications</strong>: This lists all credit applications made in the past 12 months, showing which institutions have pulled your credit report and when. A large number of recent credit applications in a short period can signal to lenders that you are credit-hungry or in financial distress.
          </p>

          <h2>How to Read Your Repayment Status</h2>
          <p>
            The most scrutinised section of your CCRIS report is the repayment history grid. For each credit account, CCRIS shows 12 columns — one for each of the past 12 months — with a number in each column indicating how many months in arrears your repayment was.
          </p>
          <ul>
            <li><strong>0</strong>: Paid on time — ideal</li>
            <li><strong>1</strong>: 1 month overdue</li>
            <li><strong>2</strong>: 2 months overdue</li>
            <li><strong>3+</strong>: 3 or more months overdue — serious concern for lenders</li>
            <li><strong>X</strong>: Account is in legal action or classified as non-performing</li>
          </ul>
          <p>
            Banks want to see all zeros in this grid. Even a single &quot;1&quot; can raise questions. Multiple &quot;2&quot; or &quot;3&quot; entries will typically cause a loan rejection or result in a higher interest rate being offered.
          </p>

          <h2>How Lenders Use Your CCRIS Report</h2>
          <p>
            When you apply for a home loan, car loan, or personal loan in Malaysia, the bank will pull your CCRIS report as part of its due diligence. Lenders use CCRIS to verify the information you provided on your application form, assess your total debt commitments (for Debt Service Ratio calculation), identify any repayment problems or defaults, check for undisclosed credit facilities, and determine the interest rate and terms to offer you.
          </p>
          <p>
            A clean CCRIS — all zeros, no special attention accounts, low number of recent applications — positions you as a low-risk borrower. This can result in faster approval, a lower interest rate, and better loan terms. Use our <Link href="/dsr-calculator-malaysia">DSR Calculator Malaysia</Link> to estimate whether your current debt level falls within a bankable range, and read <Link href="/guides/housing-loan-eligibility-malaysia">Housing Loan Eligibility — What Banks Check</Link> for the full picture.
          </p>
          <p>
            Your CCRIS also determines which credit cards you are eligible for. Banks use the same report when evaluating credit card applications — number of existing cards, outstanding balances, and repayment history all influence which card tier and what credit limit you receive. See our <Link href="/guides/credit-card-eligibility-malaysia">Credit Card Eligibility Malaysia guide</Link> to understand the income and credit criteria for major card categories.
          </p>

          <h2>CCRIS vs CTOS: What&apos;s the Difference?</h2>
          <p>
            Malaysian lenders typically check both CCRIS and CTOS. Here is how they differ:
          </p>
          <ul>
            <li><strong>CCRIS</strong>: Government-run (BNM). Contains credit facility data from all licensed financial institutions. Free for consumers to access online. Retains data for 12 months.</li>
            <li><strong>CTOS</strong>: Private credit reporting agency. Aggregates data from CCRIS plus court judgements, bankruptcy petitions, trade references, and directorship information. Has a scoring model (CTOS Score 300–850). Consumers can access a free basic report or pay for a detailed report.</li>
          </ul>
          <p>
            The key difference is that CTOS captures information beyond bank credit — including legal actions and court orders — and retains some negative information for longer. A bankruptcy record, for example, can appear in CTOS for years after discharge. Read our guide on <Link href="/guides/how-to-improve-ctos-score-malaysia">How to Improve Your CTOS Score</Link> for strategies to strengthen your private credit profile.
          </p>

          <h2>How to Fix Errors in Your CCRIS Report</h2>
          <p>
            CCRIS data is submitted by financial institutions — and errors do occasionally occur. Common errors include payments incorrectly recorded as late, closed accounts still showing as active, or facilities belonging to someone with the same name or similar IC number appearing on your report.
          </p>
          <p>
            If you find an error, follow these steps: First, contact the financial institution that submitted the incorrect data — they are responsible for correcting their submission to CCRIS. Provide documentary evidence (payment receipts, bank statements, closure letters). The institution has 14 days to investigate and correct. If they fail to act, escalate to BNM BNMTELELINK at 1-300-88-5465 with your supporting documents. BNM can investigate and instruct the institution to correct the data.
          </p>
          <p>
            Checking your CCRIS 3–6 months before applying for a major loan gives you time to resolve any errors or improve your repayment record before lenders pull it.
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

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/guides/credit-score-malaysia-explained", title: "Credit Score Malaysia Explained", desc: "How CCRIS and CTOS work together — and what banks actually see." },
              { href: "/guides/how-to-increase-credit-score-malaysia", title: "How to Increase Your Credit Score", desc: "8 proven steps to improve your CTOS score and CCRIS record." },
              { href: "/guides/how-to-improve-ctos-score-malaysia", title: "How to Improve Your CTOS Score", desc: "CTOS-specific strategies including resolving legal records." },
              { href: "/guides/credit-card-eligibility-malaysia", title: "Credit Card Eligibility Malaysia", desc: "Income and credit requirements for major Malaysian credit card tiers." },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="block bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-blue-200 hover:bg-blue-50 transition-colors">
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
