import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/best-savings-accounts-malaysia`;

export const metadata: Metadata = {
  title: "Best Savings Accounts Malaysia 2026 — Highest Interest Rates Compared",
  description: "The best savings accounts in Malaysia in 2026 — highest interest rates, digital bank savings, money market funds, and fixed deposits compared by rate, access, and PIDM protection.",
  keywords: ["best savings accounts Malaysia 2026", "highest interest savings account Malaysia", "digital bank savings rate Malaysia", "GXBank savings rate", "money market fund Malaysia 2026", "akaun simpanan terbaik Malaysia"],
  alternates: { canonical: "/guides/best-savings-accounts-malaysia" },
  openGraph: {
    title: "Best Savings Accounts Malaysia 2026 — Highest Interest Rates",
    description: "Highest-rate savings accounts in Malaysia compared — digital banks, money market funds, and traditional FDs.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Savings Accounts Malaysia 2026" }],
  },
  twitter: { card: "summary_large_image", title: "Best Savings Accounts Malaysia 2026", description: "Highest interest savings accounts and money market funds for Malaysians compared.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the highest interest savings account in Malaysia?", a: "As of 2026, digital bank savings accounts and money market funds offer the highest rates for liquid savings. GXBank Savings Account: approximately 3.0%–4.5% p.a. on balances with instant access (rates change periodically — check the app for current rate). BigPay Savings: approximately 3%–4% p.a. Money market funds: 3.5%–4.5% p.a. (Public Mutual Money Market, Maybank Cash Management). Traditional bank savings accounts (Maybank, CIMB, Public Bank standard) pay only 0.5%–1.5% — significantly lower. For locked savings, 12-month FDs at major banks pay 2.8%–3.9%." },
  { q: "Are digital bank savings accounts safe in Malaysia?", a: "Yes. GXBank, BigPay, and other licensed digital banks in Malaysia are regulated by Bank Negara Malaysia (BNM) and covered by PIDM (Perbadanan Insurans Deposit Malaysia) protection up to RM250,000 per depositor per institution. This is the same protection offered by traditional banks. The key difference is that digital banks operate without physical branches — all operations are via app. Risk for digital banks: app/platform risk and operational resilience, though licensed digital banks must meet BNM's technology standards." },
  { q: "What is a money market fund and is it safe?", a: "A money market fund (MMF) is a unit trust fund that invests in short-term, high-quality debt instruments — government bonds, bank deposits, and commercial paper. Malaysian MMFs managed by reputable institutions (Public Mutual, Maybank Asset Management, Principal, RHB Asset Management) have never recorded a loss in Malaysia's history. However, they are NOT capital-guaranteed — there is a theoretical risk of loss. In practice, MMFs are treated as near-cash equivalents by most financial planners. They are not PIDM protected (they are investment funds, not bank deposits)." },
  { q: "Should I use a money market fund or fixed deposit for savings?", a: "Money market funds typically yield 0.5%–1.5% more than standard 12-month FDs with better liquidity (1–2 day withdrawal vs 12-month lock-in for FD). The trade-off: FD is PIDM-insured (guaranteed), MMF is not (though essentially zero-risk historically). For amounts below RM250,000, a PIDM-insured MMF with high yield (offered through platforms like Fundsupermart or bank-linked MMFs) offers the best of both worlds. For larger amounts or institutional savers, FD's capital guarantee may be preferred for a portion of savings." },
  { q: "What is PIDM and how much does it protect?", a: "PIDM (Perbadanan Insurans Deposit Malaysia) is Malaysia's deposit insurance corporation. It protects deposits in licensed Malaysian banks (conventional and Islamic) up to RM250,000 per depositor per member institution. Coverage applies separately for: conventional deposits (savings, current, FD) at one institution, Islamic deposits at the same institution, and joint accounts. So a married couple can each have RM250,000 protected at the same bank — RM500,000 total. Digital banks (GXBank, etc.) are PIDM members. Investment products (unit trusts, MMFs) are not PIDM-protected." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Best Savings Accounts Malaysia 2026 — Highest Interest Rates Compared", description: "Comprehensive comparison of the best savings options for Malaysians in 2026 — digital bank savings, money market funds, fixed deposits, and traditional savings accounts, comparing rates, liquidity, and deposit insurance protection.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Best Savings Accounts Malaysia 2026", item: PAGE_URL }] },
  ],
};

export default function BestSavingsAccountsMalaysiaPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-lime-50 to-green-50 border-b border-lime-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-lime-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Best Savings Accounts Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Best Savings Accounts Malaysia 2026 — Highest Interest Rates Compared</h1>
            <p className="text-gray-600 text-lg leading-relaxed">A standard savings account at a Malaysian bank pays only 0.5%–1.5% per year. Digital banks and money market funds offer 3%–4.5% with similar safety. Here is how to choose the right account for your savings goals.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-lime-100 text-lime-700 text-xs font-semibold px-3 py-1 rounded-full">Savings · Accounts</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Why Your Savings Account Rate Matters More Than You Think</h2>
          <p>On RM20,000 in savings, the difference between a 1% standard savings account and a 4% digital bank or money market account is RM600/year. Over 5 years with compounding, that difference grows to approximately RM3,400 in extra interest earned. This is not trivial — it is more than many Malaysians spend on a holiday or several months of groceries.</p>
          <p>The principle is simple: always keep your savings in the highest-rate liquid account available, consistent with your safety requirements. "Set and forget" in a low-rate account is a passive wealth destroyer.</p>

          <h2>Best Options Compared (2026)</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-lime-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-lime-100">Account Type</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-lime-100">Rate (p.a.)</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-lime-100">Liquidity</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-lime-100">PIDM Protected</th></tr></thead>
              <tbody>
                {[
                  ["Standard bank savings (Maybank, CIMB)", "0.5%–1.5%", "Instant", "Yes (up to RM250k)"],
                  ["Digital bank savings (GXBank, BigPay)", "3.0%–4.5%", "Instant", "Yes (up to RM250k)"],
                  ["12-month Fixed Deposit (major banks)", "2.8%–3.9%", "After 12 months", "Yes (up to RM250k)"],
                  ["Money market fund (Public Mutual, Maybank)", "3.5%–4.5%", "1–2 business days", "No (not capital guaranteed)"],
                  ["EPF Akaun Fleksibel (voluntary top-up)", "~6.3% (2024 dividend)", "Anytime (EPF 3rd account)", "Government-backed"],
                ].map(([t, r, l, p], i) => (
                  <tr key={i} className="border-b border-gray-50"><td className="px-4 py-2.5 text-gray-700">{t}</td><td className="px-4 py-2.5 text-center text-green-700 font-medium">{r}</td><td className="px-4 py-2.5 text-center text-gray-600">{l}</td><td className="px-4 py-2.5 text-center text-gray-600">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Digital Bank Savings — The New Default for Malaysians</h2>
          <p>Since Malaysia's digital bank licences were awarded in 2022 and banks launched from 2024 onwards, high-yield digital savings have become accessible to all Malaysian adults with a smartphone and MyKad. Key players: <strong>GXBank</strong> (backed by Grab and Kuok group), <strong>BigPay</strong> (by AirAsia), and <strong>RHB NOVA</strong> (digital banking arm of RHB).</p>
          <p>These accounts offer rates 2x–3x higher than traditional savings accounts, PIDM protection, and instant access via app. The practical limitation: no physical branches (not an issue for most digitally-literate Malaysians). Highly recommended as the primary savings account for your emergency fund and short-term savings goals.</p>

          <h2>Money Market Funds — Excellent for Medium-Term Savings</h2>
          <p>If you have RM10,000 or more in savings not needed for 3–12+ months, money market funds offer slightly higher returns than digital savings with 1–2 business day withdrawal. Accessible through your bank's investment platform (Maybank2u, CIMB Clicks) or third-party platforms (Fundsupermart, StashAway Simple). Minimum investments from RM100–RM1,000.</p>
          <p>The key advantage of MMFs over FDs: no lock-in, so you can add or withdraw at any time. The disadvantage: not PIDM-guaranteed. In practice, Malaysian MMFs from reputable managers have never lost principal — but understand this is a fund investment, not a deposit guarantee.</p>

          <h2>How to Structure Your Savings</h2>
          <p><strong>Immediate access (0–7 days):</strong> Keep 1 month of expenses in your digital bank savings or regular savings account — instant access, PIDM-protected. <strong>Emergency fund:</strong> Keep 2–5 months of expenses in a high-yield digital savings or money market fund. <strong>Medium-term goals (1–3 years):</strong> 12-month FDs or MMFs depending on rate and liquidity need. <strong>Long-term savings:</strong> EPF voluntary contributions, ASB, unit trusts.</p>
          <p>For context on how fixed deposits compare to EPF, read <Link href="/guides/fixed-deposit-vs-epf-malaysia">Fixed Deposit vs EPF Malaysia</Link>. For emergency fund sizing, see <Link href="/guides/how-much-emergency-fund-malaysia">How Much Emergency Fund Do I Need</Link>.</p>
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
