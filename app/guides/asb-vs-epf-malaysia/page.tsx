import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/asb-vs-epf-malaysia`;

export const metadata: Metadata = {
  title: "ASB vs EPF Malaysia 2026 — Which is Better for Bumiputera Investors?",
  description: "Compare ASB (Amanah Saham Bumiputera) and EPF for Bumiputera Malaysians. Returns, liquidity, tax treatment, ASB loan strategy, and how to optimise both for retirement.",
  keywords: ["ASB vs EPF Malaysia", "Amanah Saham Bumiputera vs EPF", "ASB returns vs KWSP", "ASB dividend 2024 2025", "EPF vs ASB which is better", "ASB loan strategy Malaysia", "pelaburan ASB vs EPF"],
  alternates: { canonical: "/guides/asb-vs-epf-malaysia" },
  openGraph: {
    title: "ASB vs EPF Malaysia 2026 — Which is Better?",
    description: "ASB dividend vs EPF dividend, liquidity, ASB loan strategy, and how Bumiputera Malaysians should use both.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ASB vs EPF Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "ASB vs EPF Malaysia 2026", description: "ASB vs EPF — returns, liquidity, and strategy for Bumiputera Malaysians.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is ASB and who can invest in it?", a: "ASB (Amanah Saham Bumiputera) is a unit trust fund managed by Amanah Saham Nasional Berhad (ASNB), a subsidiary of PNB (Permodalan Nasional Berhad). It is exclusively available to Bumiputera Malaysians (Malays, indigenous peoples of Sabah and Sarawak, and other groups classified as Bumiputera under the Federal Constitution). Each Bumiputera can invest up to RM200,000 in ASB. ASB is a fixed-price (RM1.00 per unit) fund, meaning units do not fluctuate in value — returns come entirely through annual dividends and bonuses." },
  { q: "How do ASB and EPF dividends compare?", a: "Both ASB and EPF have historically delivered similar dividend rates in the 5%–7% range. EPF 2024: 6.30% conventional. ASB has historically paid dividends plus bonuses in the range of 5.5%–7.5% in recent years. Both are tax-free. The key difference: EPF dividends are calculated on your daily average balance throughout the year (so new contributions earn partial dividends immediately), while ASB dividends are typically calculated on the lowest balance held at any point during the distribution period — meaning timing of investments matters more for ASB." },
  { q: "What is the ASB loan strategy?", a: "The ASB loan (or ASB financing) strategy involves taking a bank loan specifically to invest in ASB. The idea: borrow at approximately 4%–5% p.a. (interest rate on ASB financing), invest in ASB at approximately 6%–7% dividend — and pocket the ~1%–2% spread. The risk: ASB dividends are not guaranteed and can fall below the loan interest rate in bad years, resulting in a net loss. The strategy is controversial and risky — only consider it if you can service the loan repayments from income without relying on ASB dividends, and understand that historical returns do not guarantee future results." },
  { q: "Should I prioritise ASB or EPF contributions?", a: "Both serve retirement savings purposes and both are tax-efficient. EPF contributions are mandatory (statutory 11% + employer 12%–13%) — these happen automatically. ASB is voluntary. The conventional wisdom for Bumiputera investors: maximise EPF to get full employer matching first (this is an automatic 12%+ return from employer contribution), then invest surplus into ASB for higher liquidity (ASB allows withdrawals anytime, EPF Akaun Persaraan does not until 55). EPF for illiquid long-term retirement base; ASB for accessible medium-term savings." },
  { q: "Can I withdraw ASB savings anytime?", a: "Yes — ASB is significantly more liquid than EPF's main retirement account. You can redeem (withdraw) ASB units at any ASNB counter, myASNB app, or participating banks within 1–3 business days at RM1.00 per unit. There is no lock-in period or early withdrawal penalty. This makes ASB superior to EPF for savings you might need before age 55 — while still offering similar tax-free dividend returns. The main trade-off: ASB has an investment cap of RM200,000 per person." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "ASB vs EPF Malaysia 2026 — Which is Better for Bumiputera Investors?", description: "Comprehensive comparison of ASB and EPF for Bumiputera Malaysians — dividends, liquidity, ASB loan strategy, and how to optimise both for retirement planning.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "ASB vs EPF Malaysia", item: PAGE_URL }] },
  ],
};

export default function AsbVsEpfPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-emerald-50 to-green-50 border-b border-emerald-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">ASB vs EPF Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">ASB vs EPF Malaysia 2026 — Which is Better for Bumiputera Investors?</h1>
            <p className="text-gray-600 text-lg leading-relaxed">Both ASB and EPF are cornerstones of Bumiputera wealth-building in Malaysia. They serve different roles and work best together, not as alternatives. Here is how they compare and how to optimise both.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Savings · Investments</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>ASB and EPF: Complementary, Not Competing</h2>
          <p>The framing of "ASB vs EPF" is somewhat misleading — for Bumiputera Malaysians, these two vehicles complement each other rather than compete. EPF is mandatory and employer-matched; ASB is voluntary with no employer contribution but offers higher liquidity. The optimal strategy is to maximise both, prioritising EPF for the free employer contributions and using ASB for the flexible portion of savings.</p>
          <p>Non-Bumiputera Malaysians do not have access to ASB. For them, the relevant comparison is EPF versus PRS (Private Retirement Scheme), unit trusts, or other investment vehicles.</p>

          <h2>Side-by-Side Comparison</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-emerald-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-emerald-100">Feature</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-emerald-100">ASB</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-emerald-100">EPF</th></tr></thead>
              <tbody>
                {[
                  ["Eligibility", "Bumiputera only", "All Malaysian employees"],
                  ["Investment cap", "RM200,000/person", "No cap on voluntary contributions"],
                  ["2024 return", "~5.5%–6.5% (div + bonus)", "6.30% conventional"],
                  ["Tax on returns", "Tax-free", "Tax-free"],
                  ["Employer contribution", "None", "12%–13% of salary"],
                  ["Liquidity", "Anytime (1–3 days)", "Akaun Persaraan locked till 55"],
                  ["Price volatility", "Fixed RM1.00/unit", "Not applicable (balance-based)"],
                  ["Minimum to invest", "RM10", "Statutory minimum"],
                  ["Income tax deduction", "None", "Up to RM4,000 voluntary"],
                ].map(([f, a, e], i) => (
                  <tr key={i} className="border-b border-gray-50"><td className="px-4 py-2.5 text-gray-700 font-medium">{f}</td><td className="px-4 py-2.5 text-center text-gray-600">{a}</td><td className="px-4 py-2.5 text-center text-gray-600">{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The Employer Match: Why EPF Comes First</h2>
          <p>The single most important factor in this comparison is EPF's employer matching. Your employer contributes 12%–13% of your gross salary into your EPF account on top of your 11% employee contribution. This means for every RM11 you put in, your employer adds RM12–RM13 — a 109%–118% immediate return on your contribution before any dividend is considered.</p>
          <p>No savings product in Malaysia — not ASB, not unit trusts, not stocks — offers an equivalent employer-matched return. Maximising your EPF contributions to capture the full employer match is always the first priority. ASB investing comes after your mandatory EPF contributions are secured.</p>

          <h2>ASB's Liquidity Advantage</h2>
          <p>ASB's key advantage over EPF Akaun Persaraan is that you can withdraw at any time with no penalty. This makes ASB suitable for medium-term savings goals (3–10 year horizon) where you want better-than-FD returns but need the option to access funds. Examples: saving for a business venture, building a down payment fund that supplements EPF Akaun Sejahtera, or maintaining a large emergency reserve that earns a decent return.</p>
          <p>ASB's RM1.00 fixed unit price also means no capital loss risk — unlike equity unit trusts where unit prices fluctuate. When you invest RM50,000 in ASB, it remains RM50,000 in units (plus accumulated dividends) regardless of market conditions. This capital preservation property, combined with tax-free dividends, makes ASB one of the best risk-adjusted savings vehicles available to Bumiputera Malaysians.</p>

          <h2>The ASB Loan Strategy: Risks and Reality</h2>
          <p>The "ASB loan" strategy — taking a bank loan to invest in ASB, hoping the dividend exceeds the loan interest rate — is commonly discussed in Malaysian financial circles. The appeal: if you borrow at 4.5% and ASB pays 6.3%, you profit 1.8% on borrowed money. With RM200,000 borrowed, that is RM3,600/year "free money."</p>
          <p>The risks are significant: ASB dividends are not guaranteed and have previously been as low as 4.25% (in some years); loan interest is payable regardless of ASB performance; if dividends fall below loan interest, you pay out of pocket; and the total debt servicing pressure adds financial stress. Most prudent financial planners caution against ASB loans for anyone without a high income buffer (meaning you can comfortably service the loan from income without needing ASB dividends). This is speculative leverage, not guaranteed income.</p>
          <p>For more on EPF projections and retirement planning, use our <Link href="/epf-calculator-malaysia">EPF Calculator</Link>. For the EPF dividend track record, read <Link href="/guides/epf-dividend-history-malaysia">EPF Dividend History Malaysia</Link>.</p>
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
