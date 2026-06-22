import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/emergency-fund-malaysia`;

export const metadata: Metadata = {
  title: "Emergency Fund Malaysia 2026 — How Much to Save & Where to Keep It",
  description:
    "How much emergency fund do you need in Malaysia? 3 months or 6 months? Where to park it for liquidity and returns. Practical guide for Malaysian workers, freelancers, and families to build financial resilience.",
  keywords: [
    "emergency fund Malaysia",
    "how much emergency fund Malaysia",
    "tabung kecemasan Malaysia",
    "emergency savings Malaysia",
    "where to put emergency fund Malaysia",
    "3 months expenses Malaysia",
    "financial resilience Malaysia",
  ],
  alternates: { canonical: "/guides/emergency-fund-malaysia" },
  openGraph: {
    title: "Emergency Fund Malaysia 2026 — How Much to Save & Where to Keep It",
    description: "How much emergency fund do you need in Malaysia and where to keep it for liquidity and decent returns.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Emergency Fund Malaysia Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Fund Malaysia 2026 — Complete Guide",
    description: "3 months or 6 months emergency fund? Where to park it in Malaysia.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "How many months of expenses should my emergency fund cover in Malaysia?",
    a: "The standard recommendation is 3–6 months of essential living expenses. Salaried employees with stable jobs in established companies can target 3 months. Self-employed, freelancers, contract workers, or those in volatile industries should target 6 months or more. If you have dependents (spouse, children, elderly parents) or a single income household, aim for 6 months minimum.",
  },
  {
    q: "Where should I keep my emergency fund in Malaysia?",
    a: "Your emergency fund must be in a liquid, low-risk account you can access within 24–48 hours. Good options: high-yield savings accounts (some digital banks like GXBank, BigPay, or Boost offer 3%–4% p.a.), money market funds (accessible within 1 business day via platforms like Wahed, StashAway Simple, or Versa), or bank fixed deposits with monthly interest payout (though breaking early penalties may apply). Avoid keeping it in equity unit trusts, stocks, or EPF — these are too volatile or illiquid for emergency purposes.",
  },
  {
    q: "Can my EPF savings serve as my emergency fund?",
    a: "EPF savings should not be treated as your primary emergency fund. EPF Account Fleksibel (since 2024) allows partial withdrawals but the process takes days and is limited. EPF is intended for retirement and has contribution rules. More importantly, EPF funds are invested — their value can drop temporarily during market downturns, precisely when you might need to withdraw. Keep a separate cash emergency fund outside EPF.",
  },
  {
    q: "What counts as 'monthly expenses' for emergency fund calculation?",
    a: "For emergency fund purposes, count only essential monthly expenses — not total spending. Essential expenses include: rent or mortgage instalment, utilities, food and groceries, transportation (fuel/public transport/car instalment), phone/internet, insurance premiums, minimum loan repayments, and any essential medications or medical costs. Exclude entertainment, dining out, subscriptions, and other discretionary spending you can cut in a genuine emergency.",
  },
  {
    q: "I have credit card debt — should I build an emergency fund first or pay off debt?",
    a: "Do both in parallel, prioritising debt repayment but maintaining a small emergency buffer. Build a RM3,000–RM5,000 emergency buffer first (roughly 1 month of minimal expenses). Then direct surplus income aggressively at credit card debt (highest interest first). Without any buffer, the first unexpected expense puts you back on the credit card at 15%–18% p.a. interest. Once credit card debt is cleared, build the full 3–6 month emergency fund.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Emergency Fund Malaysia 2026 — How Much to Save & Where to Keep It",
      description: "Practical guide to building an emergency fund in Malaysia — how much you need, how to calculate your target, and the best places to park it for liquidity and returns.",
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
        { "@type": "ListItem", position: 3, name: "Emergency Fund Malaysia", item: PAGE_URL },
      ],
    },
  ],
};

export default function EmergencyFundMalaysiaPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-cyan-50 to-teal-50 border-b border-cyan-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-cyan-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Emergency Fund Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Emergency Fund Malaysia 2026 — How Much to Save & Where to Keep It
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              An emergency fund is the foundation of personal finance. Here is how much you need in Malaysia, how to calculate your target, and where to park it so it is accessible and still earning a return.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">Savings · Financial Planning</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>Why an Emergency Fund Is Non-Negotiable</h2>
          <p>
            COVID-19 exposed a brutal reality: millions of Malaysians had no financial buffer when income suddenly stopped. A 2019 Bank Negara Malaysia Financial Stability and Payment Systems Report found that 75% of Malaysians could not raise RM1,000 for an emergency without borrowing. When the MCO hit in March 2020, many families had no savings to cover even one month of expenses — forcing them to withdraw from EPF emergency facilities, take up emergency loans, or go into default.
          </p>
          <p>
            An emergency fund is simply cash you set aside — separate from your regular savings — specifically for genuine emergencies: sudden job loss, medical emergency, urgent car repair, or any other large unexpected expense. It is not for planned expenses. It is not for investment. It is a financial shock absorber.
          </p>
          <p>
            Without an emergency fund, any financial shock forces you to either go into expensive debt (credit card at 15%–18% p.a., or personal loan) or liquidate long-term investments at potentially the worst time (markets are often down during economic crises, when job losses peak). The emergency fund prevents this domino effect.
          </p>

          <h2>How Much Should Your Emergency Fund Be?</h2>
          <p>
            The standard advice is 3–6 months of essential living expenses. But &quot;essential&quot; is the key word — not your total monthly spending, but the minimum you need to survive: rent/mortgage, utilities, food, transport, loan repayments, insurance, and essential medications.
          </p>
          <p>
            Use this framework to determine your target:
          </p>
          <ul>
            <li><strong>3 months</strong>: Stable salaried employee, dual-income household, no dependents, working in a growing industry, clear in-demand skills. Minimum acceptable for most Malaysians.</li>
            <li><strong>6 months</strong>: Single-income household, employees in volatile sectors (construction, tourism, retail, F&B), self-employed, freelancers, or contract workers. Also appropriate if you have dependents — spouse, children, or elderly parents relying on your income.</li>
            <li><strong>9–12 months</strong>: Business owners, highly specialised workers in a narrow job market, or anyone with chronic health conditions that might interrupt their ability to work. Also advisable if you are over 50 and may face age discrimination in the job market.</li>
          </ul>

          <h2>Calculating Your Emergency Fund Target</h2>
          <p>
            Step 1 — List your essential monthly expenses:
          </p>
          <ul>
            <li>Rent or home loan instalment</li>
            <li>Utilities (electricity, water, gas, internet, phone)</li>
            <li>Food and groceries (not dining out — cook at home budget)</li>
            <li>Transportation (petrol + toll, or public transport pass + occasional Grab)</li>
            <li>Car loan instalment (if any)</li>
            <li>Insurance premiums (life, medical, car)</li>
            <li>Minimum loan repayments (credit card minimum, PTPTN, personal loan)</li>
            <li>Essential medications</li>
          </ul>
          <p>
            Step 2 — Multiply by your target months (3 or 6).
          </p>
          <p>
            Example: If your essential monthly expenses are RM2,500 and you target 6 months, your emergency fund goal is RM15,000. If expenses are RM3,500 with 3 months target, goal is RM10,500.
          </p>

          <h2>Where to Keep Your Emergency Fund in Malaysia</h2>
          <p>
            Your emergency fund must satisfy three criteria: <strong>liquid</strong> (accessible within 1–2 days), <strong>safe</strong> (not subject to market risk), and <strong>earning a return</strong> (ideally at least matching inflation).
          </p>
          <p>
            <strong>Best options for emergency funds in Malaysia:</strong>
          </p>
          <ul>
            <li><strong>Digital bank high-yield savings</strong>: GXBank, BigPay, and Boost offer 3%–4% p.a. on savings with instant withdrawal. No lock-in period, no minimum balance. Best liquidity with decent returns. The principal is covered under PIDM (Perbadanan Insurans Deposit Malaysia) up to RM250,000.</li>
            <li><strong>Money market funds (MMF)</strong>: Platforms like StashAway Simple, Versa, Wahed Invest, and Moomoo offer money market fund products yielding 3.5%–4.5% p.a. Withdrawals typically processed within 1 business day. Slightly better returns than standard savings accounts. Not covered by PIDM but invests in government securities and short-term bank deposits.</li>
            <li><strong>Standard savings account with ATM access</strong>: BSN, Maybank, CIMB, or any bank. Lower returns (1%–2% p.a.) but maximum liquidity — withdraw from any ATM immediately. PIDM-covered. Use this for the immediate-access portion of your fund.</li>
            <li><strong>Fixed deposits (with caution)</strong>: FDs offer better rates (3%–4% p.a.) but early withdrawal typically forfeits accrued interest. Only suitable if you can maintain a portion of your fund in FD while keeping 1 month of expenses in instant-access savings.</li>
          </ul>
          <p>
            <strong>Avoid for emergency funds</strong>: Equity unit trusts (value fluctuates), stocks (can be down significantly when you need to sell), cryptocurrency (highly volatile), property (completely illiquid), EPF (withdrawal process takes days and is limited).
          </p>

          <h2>How to Build Your Emergency Fund</h2>
          <p>
            If you have RM0 in emergency savings right now, the goal of RM10,000–RM20,000 can feel overwhelming. Break it down:
          </p>
          <ul>
            <li><strong>Phase 1 — RM1,000 buffer</strong>: Save RM1,000 as fast as possible. This covers minor emergencies (car tyre puncture, minor medical bill) without going to a credit card. Even RM200/month gets you there in 5 months.</li>
            <li><strong>Phase 2 — 1 month expenses</strong>: Once you have RM1,000, push to 1 month of essential expenses. This takes the real pressure off — one month gives you time to adapt to any financial shock.</li>
            <li><strong>Phase 3 — Full target (3 or 6 months)</strong>: From 1 month, systematically add every month until you hit your target. Automate: set a standing instruction on salary day to transfer a fixed amount to your emergency fund account before you spend it.</li>
          </ul>

          <h2>The Emergency Fund and Your Overall Financial Plan</h2>
          <p>
            The emergency fund comes before investing. This might feel counterintuitive — surely it&apos;s better to put that money in the market earning 8%+ p.a. than in a savings account earning 3%? But the purpose of an emergency fund is insurance, not investment. Without it, the first emergency forces you to sell investments at whatever price the market is at, or take on expensive debt. The cost of that instability is far higher than the foregone investment return.
          </p>
          <p>
            The sequence should be: (1) Emergency fund → (2) Pay off high-interest debt → (3) Maximise EPF contributions → (4) Invest surplus. Read <Link href="/guides/rm3000-salary-budget-plan-malaysia">How to Budget on RM3,000 Salary in Malaysia</Link> for a step-by-step allocation framework at common salary levels, or use our <Link href="/salary-calculator-malaysia">Salary Calculator</Link> to see your take-home after EPF, SOCSO, and PCB deductions.
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
