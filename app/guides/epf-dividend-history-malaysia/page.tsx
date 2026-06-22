import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/epf-dividend-history-malaysia`;

export const metadata: Metadata = {
  title: "EPF Dividend History Malaysia 2026 — KWSP Rates Since 1983",
  description:
    "Complete EPF (KWSP) dividend history from 1983 to 2025. Conventional and Syariah rates, how dividends are calculated, why they vary each year, and what historical returns mean for your retirement savings.",
  keywords: [
    "EPF dividend history Malaysia",
    "KWSP dividend history",
    "EPF dividend rate 2024 2025",
    "EPF conventional dividend",
    "EPF syariah dividend",
    "KWSP dividen 2025",
    "EPF return rate history",
  ],
  alternates: { canonical: "/guides/epf-dividend-history-malaysia" },
  openGraph: {
    title: "EPF Dividend History Malaysia 2026 — KWSP Rates Since 1983",
    description: "Complete EPF dividend history from 1983 to 2025. Conventional and Syariah rates and what they mean for retirement.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EPF Dividend History Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPF Dividend History Malaysia — KWSP Rates Since 1983",
    description: "Full EPF/KWSP dividend history. Conventional and Syariah rates explained.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the EPF dividend rate for 2024?",
    a: "EPF declared a dividend of 6.30% for conventional savings (Akaun Konvensional) and 6.30% for Syariah savings (Akaun Patuh Syariah) for the year 2024. This is one of the highest rates in recent years, reflecting strong investment returns from EPF's global and domestic portfolio. Dividends are credited directly to members' accounts on a tax-free basis.",
  },
  {
    q: "How does EPF calculate its dividend?",
    a: "EPF calculates dividends based on the investment income earned on its total fund assets during the year. The board sets a dividend rate that is applied to each member's daily average balance throughout the year — not just the year-end balance. This means even contributions made in December still earn a portion of the annual dividend. The minimum dividend is guaranteed at 2.5% under the EPF Act.",
  },
  {
    q: "Is EPF dividend tax-free in Malaysia?",
    a: "Yes. EPF dividends are completely tax-free for Malaysian members. They are credited directly to your EPF accounts and are not subject to income tax. This tax exemption significantly enhances the real return on EPF savings compared to taxable fixed deposits or investment instruments.",
  },
  {
    q: "What is the difference between EPF Conventional and Syariah dividends?",
    a: "EPF introduced a separate Syariah savings option in 2017, where contributions are invested only in Syariah-compliant assets. Conventional savings invest in a broader portfolio including conventional bonds and equities. Historically, rates have been similar or identical (from 2021 onwards they have been set at the same level), but in earlier years Syariah dividends were slightly lower due to a smaller and less mature portfolio.",
  },
  {
    q: "What is the guaranteed minimum EPF dividend?",
    a: "Under Section 27 of the Employees Provident Fund Act 1991, EPF is required to pay a minimum dividend of 2.5% per year. This floor has never been triggered — EPF has always paid well above 2.5% in every year of its history. However, the guarantee provides a statutory floor that distinguishes EPF from unit trusts or other market-linked investments.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "EPF Dividend History Malaysia 2026 — KWSP Rates Since 1983",
      description: "Complete EPF (KWSP) dividend history for Malaysia, covering conventional and Syariah rates from 1983 to 2025, with analysis of trends and how dividends compound retirement savings.",
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
        { "@type": "ListItem", position: 3, name: "EPF Dividend History Malaysia", item: PAGE_URL },
      ],
    },
  ],
};

const dividendHistory = [
  { year: "2024", conventional: "6.30%", syariah: "6.30%" },
  { year: "2023", conventional: "5.50%", syariah: "5.40%" },
  { year: "2022", conventional: "5.35%", syariah: "4.75%" },
  { year: "2021", conventional: "6.10%", syariah: "5.65%" },
  { year: "2020", conventional: "5.20%", syariah: "4.90%" },
  { year: "2019", conventional: "5.45%", syariah: "5.00%" },
  { year: "2018", conventional: "6.15%", syariah: "5.90%" },
  { year: "2017", conventional: "6.90%", syariah: "6.40%" },
  { year: "2016", conventional: "5.70%", syariah: "5.70%" },
  { year: "2015", conventional: "6.40%", syariah: "6.40%" },
  { year: "2014", conventional: "6.75%", syariah: "6.75%" },
  { year: "2013", conventional: "6.35%", syariah: "—" },
  { year: "2012", conventional: "6.15%", syariah: "—" },
  { year: "2011", conventional: "6.00%", syariah: "—" },
  { year: "2010", conventional: "5.80%", syariah: "—" },
  { year: "2009", conventional: "5.65%", syariah: "—" },
  { year: "2008", conventional: "4.50%", syariah: "—" },
  { year: "2007", conventional: "5.80%", syariah: "—" },
  { year: "2006", conventional: "5.15%", syariah: "—" },
  { year: "2005", conventional: "5.00%", syariah: "—" },
  { year: "2004", conventional: "4.75%", syariah: "—" },
  { year: "2003", conventional: "4.50%", syariah: "—" },
  { year: "2002", conventional: "4.25%", syariah: "—" },
  { year: "2001", conventional: "5.00%", syariah: "—" },
  { year: "2000", conventional: "6.00%", syariah: "—" },
  { year: "1999", conventional: "6.84%", syariah: "—" },
  { year: "1998", conventional: "6.70%", syariah: "—" },
  { year: "1997", conventional: "6.70%", syariah: "—" },
  { year: "1996", conventional: "7.70%", syariah: "—" },
  { year: "1995", conventional: "7.50%", syariah: "—" },
  { year: "1994", conventional: "7.25%", syariah: "—" },
  { year: "1993", conventional: "8.00%", syariah: "—" },
  { year: "1992", conventional: "8.00%", syariah: "—" },
  { year: "1991", conventional: "8.00%", syariah: "—" },
  { year: "1990", conventional: "8.00%", syariah: "—" },
  { year: "1989", conventional: "8.00%", syariah: "—" },
  { year: "1988", conventional: "8.00%", syariah: "—" },
  { year: "1987", conventional: "8.00%", syariah: "—" },
  { year: "1986", conventional: "8.00%", syariah: "—" },
  { year: "1985", conventional: "8.50%", syariah: "—" },
  { year: "1984", conventional: "8.50%", syariah: "—" },
  { year: "1983", conventional: "8.50%", syariah: "—" },
];

export default function EpfDividendHistoryPage() {
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
              <span className="text-gray-500">EPF Dividend History Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              EPF Dividend History Malaysia 2026
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every EPF (KWSP) dividend rate from 1983 to 2024 — conventional and Syariah rates, why they change each year, how dividends are calculated, and what the historical average means for your retirement.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Retirement · EPF</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>Why EPF Dividend History Matters</h2>
          <p>
            Every Malaysian private-sector employee contributes to EPF (Employees Provident Fund, or KWSP — Kumpulan Wang Simpanan Pekerja). Your contributions grow through two mechanisms: new contributions each month and the annual dividend credited to your balance. Unlike a savings account with a fixed interest rate, EPF dividends vary each year based on investment performance. Understanding the historical track record helps you make informed projections about your retirement savings.
          </p>
          <p>
            EPF has consistently delivered above-inflation returns over its 70-year history. The long-term average dividend rate is approximately 6%–6.5% per year, which is significantly higher than standard bank fixed deposit rates. Crucially, EPF dividends are tax-free — a benefit that makes the real return even more attractive when compared with taxable investments.
          </p>

          <h2>EPF Dividend Rate 2024</h2>
          <p>
            For the financial year 2024, EPF declared a dividend of <strong>6.30%</strong> for both conventional and Syariah savings. This represents a strong return and was above the long-term average, reflecting EPF&apos;s diversified global investment portfolio that includes equities, fixed income, real estate, and infrastructure assets across multiple markets.
          </p>
          <p>
            The 2024 dividend was credited to members&apos; accounts in early 2025. If you had an EPF balance of RM100,000 at the start of 2024, the 6.30% dividend would add approximately RM6,300 to your balance — tax-free, and then compounding into future dividends in subsequent years.
          </p>

          <h2>Full EPF Dividend History (1983–2024)</h2>
          <p>EPF introduced a separate Syariah option in 2016/2017. Years marked &quot;—&quot; for Syariah had only conventional savings available.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Year</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Conventional</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-teal-100">Syariah</th>
                </tr>
              </thead>
              <tbody>
                {dividendHistory.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 last:border-0 hover:bg-teal-50/30 transition-colors ${i < 8 ? "font-medium" : ""}`}>
                    <td className="px-4 py-2.5 text-gray-700">{row.year}</td>
                    <td className="px-4 py-2.5 text-right text-gray-700">{row.conventional}</td>
                    <td className="px-4 py-2.5 text-right text-gray-500">{row.syariah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Source: EPF official announcements. Rates are per annum and tax-free.</p>

          <h2>Key Trends in EPF Dividend History</h2>
          <p>
            Looking at the full history, several patterns emerge. In the 1980s and early 1990s, EPF paid consistently high dividends of 8.0%–8.5%. This was partly a reflection of the high-interest-rate environment globally and Malaysia&apos;s rapid economic growth during that period. The 1985 and 1984 rates of 8.5% remain among the highest in EPF&apos;s history.
          </p>
          <p>
            The Asian Financial Crisis of 1997–1998 brought some pressure, but EPF maintained dividends at 6.70% — evidence of its well-diversified and conservative investment approach. The 2001 rate dropped to 5.00% as the dot-com crash and September 11 attacks weighed on global markets. The 2002–2004 period of 4.25%–4.75% represents the lowest sustained rates in EPF history. The 2008 Global Financial Crisis saw dividends drop to 4.50%, reflecting EPF&apos;s exposure to global equity markets through its Member Investment Scheme and overseas investments.
          </p>
          <p>
            From 2010 onwards, EPF gradually restored its dividend rate, reaching 6.90% in 2017 — the highest in over 20 years. The 2020 rate of 5.20% reflects COVID-19&apos;s impact on global markets. The subsequent recovery to 6.15% in 2018, 6.10% in 2021, and 6.30% in 2024 shows EPF&apos;s long-term resilience.
          </p>

          <h2>How EPF Calculates Your Annual Dividend</h2>
          <p>
            EPF calculates dividends based on each member&apos;s <strong>daily average balance</strong> throughout the year. This is an important distinction from many fixed deposit products that use only the year-end balance.
          </p>
          <p>
            Here&apos;s how it works in practice: EPF records your account balance at the end of each day. At year-end, EPF calculates the average daily balance and applies the declared dividend rate to it. This means that contributions made in January have more &quot;days&quot; in the calculation than contributions made in December — but even December contributions earn a partial dividend.
          </p>
          <p>
            The formula is: <strong>Dividend = (Sum of daily balances throughout the year ÷ 365) × Dividend rate</strong>. EPF then credits the calculated dividend directly to your Akaun Persaraan (retirement account), Akaun Sejahtera, and Akaun Fleksibel proportionally based on your balances in each account.
          </p>

          <h2>The Power of Compounding in EPF</h2>
          <p>
            The real magic of EPF is long-term compounding. If you start working at age 25 and retire at 60, your contributions compound for 35 years. At a 6% average annual return, a single RM10,000 contribution made today grows to approximately RM76,861 by retirement — without you adding another sen. The contributions you make and the employer matching you receive each month all benefit from this compounding effect.
          </p>
          <p>
            This is why the EPF Basic Savings benchmarks are achievable even for average earners who stay disciplined: RM10,000 at 30, RM25,000 at 35, RM50,000 at 40, RM90,000 at 45, RM150,000 at 50, and RM240,000 at 55. These benchmarks assume consistent contributions and average EPF dividends over time.
          </p>
          <p>
            Use our <Link href="/epf-calculator-malaysia">EPF Calculator Malaysia</Link> to project your own EPF balance at retirement using your current salary, age, and expected dividend rates. To understand how much EPF you should have at your current age, read <Link href="/guides/how-much-epf-at-30-malaysia">How Much EPF Should I Have at 30?</Link>
          </p>

          <h2>Conventional vs Syariah EPF: Which Should You Choose?</h2>
          <p>
            Since 2016, EPF members can choose to have their savings placed in the Simpanan Konvensional (Conventional Savings) or Simpanan Patuh Syariah (Syariah-Compliant Savings) option. Conventional savings invest in both conventional and Syariah-compliant assets. Syariah savings invest only in assets that comply with Islamic finance principles — no interest-bearing instruments and no investment in prohibited industries.
          </p>
          <p>
            Historically, Syariah dividends were slightly lower (e.g., 5.65% vs 6.10% in 2021) because the Syariah portfolio was smaller and newer. However, from 2022 onward the rates have converged. Both options carry the same minimum 2.5% guarantee. Non-Muslim members can also choose the Syariah option if they prefer the investment principles. Once you switch to Syariah, switching back to Conventional is not permitted under the current rules.
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
