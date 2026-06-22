import type { Metadata } from "next";
import Link from "next/link";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/epf-withdrawal-guide-malaysia`;

export const metadata: Metadata = {
  title: "EPF Withdrawal Guide Malaysia 2024 — When and How to Withdraw KWSP",
  description:
    "Complete guide to EPF (KWSP) withdrawal in Malaysia — age 55 retirement withdrawal, pre-retirement withdrawals for housing, education, and healthcare, and how the new 3-account structure affects access.",
  keywords: [
    "EPF withdrawal Malaysia",
    "KWSP withdrawal guide",
    "EPF withdrawal at 55 Malaysia",
    "EPF withdrawal housing Malaysia",
    "EPF akaun fleksibel withdrawal",
    "cara keluarkan EPF Malaysia",
    "EPF early withdrawal Malaysia",
    "KWSP pengeluaran",
  ],
  alternates: { canonical: "/guides/epf-withdrawal-guide-malaysia" },
  openGraph: {
    title: "EPF Withdrawal Guide Malaysia 2024 — When and How to Withdraw KWSP",
    description: "Every EPF withdrawal type explained — Akaun Persaraan, Sejahtera, and Fleksibel. Retirement at 55, housing, education, and healthcare withdrawals.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EPF Withdrawal Guide Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "EPF Withdrawal Guide Malaysia 2024", description: "When, how, and from which account you can withdraw your EPF savings in Malaysia.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "At what age can I withdraw my full EPF savings?", a: "You can make a full withdrawal from your Akaun Persaraan at age 55. At age 60, you can withdraw whatever remains in all accounts. Between 55 and 60, if you choose not to withdraw, your balance continues to earn dividends. Note: Akaun Fleksibel can be withdrawn at any time regardless of age." },
  { q: "Can I withdraw EPF for a house purchase?", a: "Yes, from Akaun Sejahtera only. You can withdraw to purchase a first or second residential property (land or building), to reduce or redeem a housing loan, or to pay for a property under construction. Third properties and commercial properties are not eligible. The property must be registered in your name." },
  { q: "How do I withdraw from EPF Akaun Fleksibel?", a: "Akaun Fleksibel (introduced 2024) allows withdrawal at any time for any purpose via the KWSP i-Akaun app or at any EPF branch. There is a minimum holding period of 3 months from the date of contribution before the amount can be withdrawn. The request is typically processed within 3–5 working days." },
  { q: "Can I withdraw EPF if I emigrate from Malaysia?", a: "Yes. Malaysian citizens who emigrate permanently or renounce citizenship can make a full withdrawal from all EPF accounts (Persaraan, Sejahtera, Fleksibel). Non-citizens who are no longer working in Malaysia and do not intend to return can also withdraw their full balance." },
  { q: "Does EPF withdrawal affect my income tax?", a: "EPF withdrawals are generally not subject to income tax in Malaysia. The dividends credited to your account are also tax-exempt. This is one of the significant benefits of EPF compared to some other retirement vehicles." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EPF Withdrawal Guide Malaysia 2024 — When and How to Withdraw KWSP",
  description: "A comprehensive guide to EPF withdrawals in Malaysia — the 3-account structure, retirement withdrawal at 55, pre-retirement withdrawals for housing/education/medical, and the new Akaun Fleksibel.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "EPF Withdrawal Guide Malaysia", item: PAGE_URL },
  ]},
};

const withdrawalTypes = [
  { account: "Akaun Fleksibel (10%)", when: "Any time", purpose: "Any purpose", how: "i-Akaun app or EPF branch", note: "3-month holding period from contribution date. Typically processed within 3–5 working days." },
  { account: "Akaun Sejahtera (15%)", when: "Pre-retirement (conditional)", purpose: "Housing, education, healthcare, hajj", how: "i-Akaun app or EPF branch (documents required)", note: "Each purpose has separate eligibility conditions. Property must be first or second residential purchase." },
  { account: "Akaun Persaraan (75%)", when: "Age 55", purpose: "Any purpose (retirement)", how: "EPF branch or i-Akaun at 55", note: "Full withdrawal or phased withdrawal available. Balance continues earning dividends if left in account." },
  { account: "All accounts", when: "Age 60 / death / incapacitation / emigration", purpose: "Any purpose", how: "EPF branch", note: "Full balance withdrawable. For death, paid to nominee." },
];

export default function EpfWithdrawalGuidePage() {
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
              <span className="text-gray-500">EPF Withdrawal Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              EPF Withdrawal Guide Malaysia 2024 — When and How to Withdraw KWSP
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              With the new 3-account structure introduced in 2024, when and how you can access EPF has changed significantly. This guide covers every withdrawal type — Akaun Fleksibel, Akaun Sejahtera, and retirement at 55.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Retirement</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>The 3-Account Structure: Which Account Can You Touch?</h2>
          <p>Since 2024, EPF restructured from Account 1 (70%) and Account 2 (30%) to three accounts with different accessibility levels:</p>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              { name: "Akaun Persaraan", pct: "75%", access: "Locked until 55", color: "bg-red-50 border-red-200 text-red-800" },
              { name: "Akaun Sejahtera", pct: "15%", access: "Conditional access", color: "bg-amber-50 border-amber-200 text-amber-800" },
              { name: "Akaun Fleksibel", pct: "10%", access: "Any time", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
            ].map(a => (
              <div key={a.name} className={`rounded-2xl border p-5 ${a.color}`}>
                <p className="font-bold text-2xl mb-0.5">{a.pct}</p>
                <p className="font-semibold text-sm mb-1">{a.name}</p>
                <p className="text-xs">{a.access}</p>
              </div>
            ))}
          </div>

          <h2>Withdrawal Types at a Glance</h2>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-50">
                  {["Account", "When", "Purpose", "How to Apply", "Notes"].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-teal-100 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {withdrawalTypes.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 align-top">
                    <td className="px-4 py-3 font-semibold text-teal-700 whitespace-nowrap">{r.account}</td>
                    <td className="px-4 py-3 text-gray-700">{r.when}</td>
                    <td className="px-4 py-3 text-gray-700">{r.purpose}</td>
                    <td className="px-4 py-3 text-gray-600">{r.how}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Akaun Fleksibel: The New Any-Time Withdrawal</h2>
          <p>Introduced with the 2024 restructuring, Akaun Fleksibel (10% of all contributions) can be withdrawn at any time, for any purpose, with no documentation required beyond identity verification. This addresses a long-standing complaint that EPF was completely inaccessible for emergencies before retirement.</p>
          <p>Important conditions:</p>
          <ul>
            <li>A minimum of 3 months must pass from the contribution date before that amount can be withdrawn from Akaun Fleksibel.</li>
            <li>Minimum withdrawal amount is RM50.</li>
            <li>Withdrawals are processed via the i-Akaun app (most convenient) or at any EPF branch.</li>
            <li>There is no limit on the number of withdrawals, but each withdrawal reduces the compounding base for retirement.</li>
          </ul>

          <h2>Akaun Sejahtera: Pre-Retirement Withdrawals</h2>
          <p>Akaun Sejahtera (15% of contributions) allows withdrawals before retirement age for specific approved purposes:</p>

          <h3>1. Housing Withdrawal</h3>
          <ul>
            <li><strong>Purchase of residential property</strong> (first or second property only)</li>
            <li><strong>Reduce or fully redeem a housing loan</strong></li>
            <li><strong>Property under construction</strong> (staged withdrawals based on progress billing)</li>
            <li>Property must be registered in the member&rsquo;s name. Commercial property and third properties are not eligible.</li>
          </ul>

          <h3>2. Education Withdrawal</h3>
          <ul>
            <li>Financing a child&rsquo;s education at an approved institution (diploma and above)</li>
            <li>Can be withdrawn in stages based on semester payment schedule</li>
          </ul>

          <h3>3. Medical Withdrawal</h3>
          <ul>
            <li>Critical or serious illness of the member, spouse, or children</li>
            <li>Covers medical and surgical expenses not covered by insurance</li>
            <li>Dialysis, cancer treatment, and major surgeries are common qualifying conditions</li>
          </ul>

          <h3>4. Hajj Withdrawal</h3>
          <ul>
            <li>Payment for hajj pilgrimage through Tabung Haji</li>
            <li>Only once in a lifetime</li>
          </ul>

          <h2>Retirement Withdrawal at Age 55</h2>
          <p>At age 55, Akaun Persaraan is fully unlocked. You have several options:</p>
          <ul>
            <li><strong>Full lump sum withdrawal:</strong> Withdraw all of Akaun Persaraan at once. Tax-free.</li>
            <li><strong>Partial withdrawal + leave remainder:</strong> Withdraw part and let the balance continue earning dividends until age 60 or beyond.</li>
            <li><strong>Monthly dividend payout:</strong> Leave the full balance in EPF and receive monthly dividend payments — EPF will calculate a monthly payout based on your balance and current dividend rate.</li>
            <li><strong>EPF Annuity Scheme:</strong> Purchase an annuity product through EPF&rsquo;s approved partners for guaranteed monthly lifetime income.</li>
          </ul>
          <p>There is no obligation to withdraw at 55. Many Malaysians leave their balance in EPF after 55 to continue earning the dividend rate (typically 5–6%), especially if they do not immediately need the funds.</p>

          <h2>Death, Incapacitation, and Emigration</h2>
          <ul>
            <li><strong>Death:</strong> The full EPF balance is paid to the registered nominee(s) directly without going through the estate. Nominating beneficiaries via i-Akaun is strongly recommended.</li>
            <li><strong>Incapacitation:</strong> If you are permanently incapacitated (unable to work), you can withdraw all EPF savings regardless of age.</li>
            <li><strong>Permanent emigration:</strong> Full withdrawal available for Malaysians renouncing citizenship or non-citizens permanently leaving Malaysia.</li>
          </ul>

          <h2>Should You Withdraw From EPF?</h2>
          <p>Before any pre-retirement withdrawal, consider the long-term cost. Every RM10,000 withdrawn from Akaun Sejahtera at age 35 foregoes approximately <strong>RM38,000</strong> by retirement at 55, assuming 7% annual growth (EPF dividends + compounding). Only withdraw for housing or critical needs — not for consumption or luxury purchases.</p>

          <div className="not-prose bg-teal-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Project Your EPF Balance Before Withdrawing</h3>
            <p className="text-teal-100 mb-5 text-sm">See how a withdrawal today impacts your projected retirement balance using our free EPF Calculator.</p>
            <Link href="/epf-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors">EPF Calculator Malaysia →</Link>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/epf-contribution-guide-malaysia">EPF Contribution Guide Malaysia</Link> — rates and account structure</li>
            <li><Link href="/guides/how-much-epf-at-30-malaysia">How Much EPF Should I Have at 30?</Link></li>
            <li><Link href="/epf-calculator-malaysia">EPF Calculator Malaysia</Link></li>
          </ul>
        </article>

        <FinancialDisclaimer />
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
        <AuthorCard />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
