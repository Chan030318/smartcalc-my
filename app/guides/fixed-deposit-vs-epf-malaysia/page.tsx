import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/fixed-deposit-vs-epf-malaysia`;

export const metadata: Metadata = {
  title: "Fixed Deposit vs EPF Malaysia 2026 — Which Gives Better Returns?",
  description: "Compare fixed deposit interest rates vs EPF dividend rates in Malaysia. Liquidity, tax treatment, risk, and long-term compounding — which is better for your savings goal?",
  keywords: ["fixed deposit vs EPF Malaysia", "FD vs KWSP Malaysia", "EPF vs fixed deposit returns", "fixed deposit interest rate Malaysia 2026", "EPF dividend vs FD", "best savings Malaysia", "simpanan tetap vs EPF"],
  alternates: { canonical: "/guides/fixed-deposit-vs-epf-malaysia" },
  openGraph: {
    title: "Fixed Deposit vs EPF Malaysia 2026 — Which Gives Better Returns?",
    description: "FD interest rates vs EPF dividend rates compared — returns, tax, liquidity, and which to choose for your savings goals.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Fixed Deposit vs EPF Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Fixed Deposit vs EPF Malaysia 2026", description: "FD vs EPF — returns, tax, and liquidity compared for Malaysian savers.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "Does EPF give better returns than fixed deposits in Malaysia?", a: "Historically, yes — EPF has consistently outperformed fixed deposit rates in Malaysia. In 2024, EPF declared a 6.30% conventional dividend compared to bank FD rates of approximately 2.85%–3.95% for 12-month deposits. Over the past 20 years, EPF's average dividend of ~5.9%–6.2% p.a. significantly exceeds the average FD rate of 3.0%–3.5% p.a. The key caveat: EPF savings are locked until retirement (with limited withdrawal exceptions), while FDs are typically accessible after the fixed term." },
  { q: "Is EPF dividend tax-free?", a: "Yes. EPF dividends are completely tax-free for Malaysian members — they are not included in taxable income and do not need to be declared in your income tax return. Fixed deposit interest, by contrast, is subject to income tax — at higher income levels, you pay 13%–26% tax on FD interest, dramatically reducing the effective after-tax return. For a Malaysian in the 26% income tax bracket, a 3.5% FD rate becomes an effective after-tax return of approximately 2.6%." },
  { q: "Can I put extra money into EPF for better returns?", a: "Yes. Employees can make voluntary additional contributions to EPF (beyond the statutory 11%) through the i-Saraan or direct voluntary contribution facility. Voluntary contributions receive the same annual dividend as mandatory contributions. Additionally, voluntary contributions up to RM4,000/year qualify for income tax relief under the EPF/PRS relief category. Self-employed Malaysians can also contribute voluntarily through i-Saraan. The main constraint is that these funds are subject to EPF's withdrawal rules." },
  { q: "Which is better for short-term savings — FD or EPF?", a: "Fixed deposits are better for short-term savings because of liquidity. If you need the money in 6, 12, or 24 months, an FD (or money market fund) is the appropriate vehicle. EPF funds in Akaun Persaraan are locked until age 55. Akaun Fleksibel (the new third account introduced in 2024) allows flexible withdrawals — making it potentially suitable for medium-term saving — but access is still more restricted than a bank account or FD." },
  { q: "What are current fixed deposit rates in Malaysia (2026)?", a: "As of 2026, standard 12-month FD rates at major Malaysian banks range from approximately 2.80%–3.90% p.a. Islamic fixed deposit (GIRO/TALA) rates are similar. Digital bank savings rates are higher — GXBank and BigPay offer around 3%–4% p.a. on liquid savings with no lock-in. Money market funds yield approximately 3.5%–4.3% p.a. with next-day liquidity. Compare these against EPF's 6.30% (2024) with the caveat of limited access." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Fixed Deposit vs EPF Malaysia 2026 — Which Gives Better Returns?", description: "Comprehensive comparison of fixed deposit interest rates vs EPF dividend rates in Malaysia, covering returns, tax treatment, liquidity, and which is appropriate for different savings goals.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Fixed Deposit vs EPF Malaysia", item: PAGE_URL }] },
  ],
};

export default function FixedDepositVsEpfPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 border-b border-teal-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-teal-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Fixed Deposit vs EPF Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Fixed Deposit vs EPF Malaysia 2026 — Which Gives Better Returns?</h1>
            <p className="text-gray-600 text-lg leading-relaxed">EPF consistently outperforms FD rates — but liquidity and tax treatment change the real comparison. Here is a full breakdown to help you decide where to put your savings.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Savings · EPF</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Returns: EPF Wins Decisively</h2>
          <p>Over any 5-year, 10-year, or 20-year period in Malaysia's history, EPF has delivered higher annual returns than standard bank fixed deposits. In 2024, EPF declared a 6.30% conventional dividend — roughly double the best 12-month FD rate available at major banks (~3.0%–3.9%). The gap widens on an after-tax basis because EPF dividends are completely tax-free, while FD interest is taxable income.</p>
          <p>A practical example: RM100,000 invested over 10 years at 6.3% (EPF) grows to approximately RM185,000. The same amount at 3.5% (FD, pre-tax) grows to approximately RM141,000. After tax at 26%, the FD net annual return is approximately 2.59%, growing to only RM129,000. EPF wins by RM56,000 on identical starting capital — but only if you don't need the money during those 10 years.</p>

          <h2>The Critical Difference: Liquidity</h2>
          <p>The fundamental trade-off is accessibility. Fixed deposits are available after their term (3, 6, or 12 months) with minor early-withdrawal penalties. Your FD is your money, available when you need it.</p>
          <p>EPF is structured primarily for retirement. The main Akaun Persaraan (Account 1, containing 75% of your contributions) is locked until age 55. Akaun Sejahtera (Account 2, 15%) allows specific withdrawals for housing, education, and medical purposes. Akaun Fleksibel (Account 3, 10% since mid-2024) allows flexible withdrawals at any time — but only from the 10% portion.</p>
          <p>This means the right comparison is not "EPF vs FD" but "which pool of money serves which purpose." Your <strong>emergency fund</strong> must be in liquid instruments — FD, money market fund, or digital bank savings. Your <strong>retirement savings</strong> should maximise EPF (and supplemental investments) for the highest long-term compounding. Mixing up these purposes is a financial planning mistake.</p>

          <h2>Tax Treatment: EPF's Hidden Advantage</h2>
          <p>This is where the EPF advantage becomes most pronounced for higher earners. EPF dividends are tax-exempt under Section 127(3A) of the Income Tax Act 1967. Fixed deposit interest is ordinary income — taxed at your marginal rate.</p>
          <p>At a chargeable income of RM100,001–RM250,000, the marginal income tax rate is 24%. A 3.5% FD rate at this tax bracket yields only 2.66% after tax. At RM250,001–RM400,000, the rate is 24.5%, reducing FD to 2.64% effective. For high earners, the effective after-tax FD return may be less than half the EPF dividend rate.</p>
          <p>On the contribution side, EPF contributions also reduce your taxable income — up to RM4,000 in voluntary EPF contributions above the statutory amount are deductible. This provides an immediate tax benefit on top of the dividend.</p>

          <h2>Risk Comparison</h2>
          <p><strong>Fixed deposits</strong>: Protected by PIDM (Perbadanan Insurans Deposit Malaysia) up to RM250,000 per depositor per member institution. Zero investment risk — the principal and interest are guaranteed. The risk is inflation risk — if your FD rate is 3.5% and inflation is 3.0%, your real return is only 0.5%.</p>
          <p><strong>EPF</strong>: Protected by the EPF Act and government backing. EPF has never in its history failed to pay a dividend above the statutory minimum of 2.5%. The investment is managed by a professional fund manager with a diversified portfolio. The main risk is that dividends may vary year to year and in severe economic downturns could theoretically fall. EPF is considered extremely low-risk, comparable to government-backed instruments.</p>

          <h2>When to Choose FD Over EPF</h2>
          <p>Fixed deposits are the right choice for: money you might need within 1–2 years, your emergency fund (6 months of expenses — FDs and digital savings accounts are both appropriate), funds earmarked for a specific near-term goal (down payment, education fees, renovation), and amounts above your EPF voluntary contribution limit.</p>
          <p>For near-term liquid savings, also consider money market funds (3.5%–4.3% p.a., next-day liquidity) and high-yield digital bank savings accounts (3%–4% p.a., instant access) — both offer better rates than traditional FDs with comparable or better liquidity.</p>
          <p>Explore our <Link href="/guides/best-savings-accounts-malaysia">Best Savings Accounts Malaysia guide</Link> for current rates and options. For the EPF dividend rate history, see <Link href="/guides/epf-dividend-history-malaysia">EPF Dividend History Malaysia</Link>.</p>
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
