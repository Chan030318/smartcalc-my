import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrencyConverter from "./CurrencyConverter";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Currency Converter Malaysia 2025 | MYR to USD SGD EUR JPY AUD GBP",
  description:
    "Convert Malaysian Ringgit (MYR) to USD, SGD, EUR, JPY, CNY, AUD and GBP with indicative rates. Understand the spread, best time to exchange, and how BNM reference rates work in Malaysia.",
  keywords: [
    "currency converter Malaysia",
    "MYR to USD",
    "ringgit to dollar",
    "MYR to SGD",
    "Malaysia exchange rate",
    "tukar wang Malaysia",
    "BNM reference rate",
    "money changer Malaysia",
  ],
  alternates: { canonical: `${SITE_URL}/currency-converter-malaysia` },
  openGraph: {
    title: "Currency Converter Malaysia 2025 — MYR to USD, SGD, EUR & More",
    description:
      "Convert Malaysian Ringgit to major world currencies with indicative rates. Learn about spreads, BNM reference rates, and how to get the best exchange rate in Malaysia.",
    url: `${SITE_URL}/currency-converter-malaysia`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter Malaysia",
    description: "Convert MYR to USD, SGD, EUR, JPY and more. Indicative rates with spread and BNM rate guide.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Currency Converter Malaysia",
      url: `${SITE_URL}/currency-converter-malaysia`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: "Convert Malaysian Ringgit to USD, SGD, EUR, JPY, CNY, AUD and GBP with indicative rates.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators` },
        { "@type": "ListItem", position: 3, name: "Currency Converter", item: `${SITE_URL}/currency-converter-malaysia` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the BNM reference rate for MYR?", acceptedAnswer: { "@type": "Answer", text: "Bank Negara Malaysia (BNM) publishes a daily indicative reference rate for MYR against major currencies. This mid-market rate is a benchmark — it reflects the midpoint between buying and selling rates. Banks and money changers quote rates around this midpoint, adding a spread as their profit margin. The BNM rate is available at www.bnm.gov.my." } },
        { "@type": "Question", name: "What is the difference between a bank rate and a money changer rate in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Banks typically offer less competitive exchange rates with wider spreads (1–3%), especially for over-the-counter transactions. Licensed money changers in Malaysia (BSN, KL Sentral, Berjaya Times Square, Sogo, etc.) often offer better rates for major currencies like USD, SGD, EUR and AUD, with spreads of 0.5–1.5%. For large amounts, it pays to compare both." } },
        { "@type": "Question", name: "What is a 'spread' in currency exchange?", acceptedAnswer: { "@type": "Answer", text: "The spread is the difference between the buy rate (what the exchanger pays you) and the sell rate (what they charge you). For example, if the mid-market rate for MYR/USD is 4.52, a money changer might buy USD at 4.47 and sell at 4.57 — a spread of 0.10. This is the exchanger's profit. A tighter spread means a better deal for you." } },
        { "@type": "Question", name: "Is it better to exchange money in Malaysia or at the destination country?", acceptedAnswer: { "@type": "Answer", text: "For most currencies, exchanging in Malaysia (particularly at licensed money changers in KL) gives better rates than airport kiosks abroad or hotel exchanges. Exception: for less common currencies (THB, IDR, VND), some destination countries offer competitive rates. Always avoid airport currency kiosks — they have the widest spreads (2–5%)." } },
        { "@type": "Question", name: "What is the best way to send money from Malaysia overseas?", acceptedAnswer: { "@type": "Answer", text: "Options for remittance from Malaysia: (1) Bank telegraphic transfer (TT) — reliable but expensive (RM10–RM50 fee + wide spread). (2) Wise (formerly TransferWise) — close to mid-market rate, low fees. (3) Western Union / MoneyGram — widely available but higher fees. (4) Licensed remittance companies (e.g. Merchantrade) — competitive rates for specific corridors. Compare total cost (fee + spread) not just the headline rate." } },
        { "@type": "Question", name: "Why does the MYR fluctuate against USD?", acceptedAnswer: { "@type": "Answer", text: "MYR/USD is influenced by: Malaysia's trade balance and export earnings (oil, palm oil, electronics), US Federal Reserve interest rate decisions, global risk sentiment (MYR typically weakens during global risk-off periods), BNM's monetary policy and OPR, and Malaysia's foreign reserves level. The MYR was pegged at 3.80 to USD from 1998–2005 and has floated since." } },
        { "@type": "Question", name: "Do I need to declare foreign currency when arriving in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Malaysian customs requires declaration if you carry cash (in any currency) exceeding RM30,000 equivalent when entering or leaving Malaysia. Failure to declare is an offence under the Exchange Control Act 1953. This applies to both MYR and foreign currency combined. There is no limit on how much you can carry — only the declaration requirement above the threshold." } },
        { "@type": "Question", name: "What currencies are best to bring to Thailand, Indonesia, and Japan from Malaysia?", acceptedAnswer: { "@type": "Answer", text: "For Thailand (THB): exchange MYR to THB in Malaysia at licensed money changers for best rates, or use ATMs on arrival. For Indonesia (IDR): IDR is rarely available in Malaysia at good rates — consider exchanging USD in Indonesia. For Japan (JPY): JPY is widely exchanged in Malaysia. Licensed money changers in KL typically offer competitive JPY rates. Always check rates the day before travel." } },
        { "@type": "Question", name: "How do I find a licensed money changer in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Licensed money changers in Malaysia are regulated by BNM. They must display their BNM licence number. Common locations: Berjaya Times Square (KL), Sogo KL basement, KL Sentral, Imbi Plaza, Central Market KL, and major shopping malls in Penang and JB. Avoid unlicensed changers — you have no legal recourse if they give short change or counterfeit notes." } },
        { "@type": "Question", name: "What is the best MYR exchange rate for SGD in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "MYR/SGD is one of the most actively traded pairs in Malaysia given trade and travel links with Singapore. The best SGD rates are typically at licensed money changers in KL (not banks) for amounts of SGD500 or more. The mid-market rate is typically around SGD1 = RM3.35–3.45 but fluctuates daily. Check BNM's published reference rate as a benchmark before exchanging." } },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  { q: "What is the BNM reference rate for MYR?", a: "Bank Negara Malaysia (BNM) publishes a daily indicative reference rate for MYR against major currencies. This mid-market rate reflects the midpoint between buying and selling rates. Banks and money changers quote rates around this midpoint, adding a spread as their margin. Check it at bnm.gov.my." },
  { q: "What is the difference between a bank rate and a money changer rate in Malaysia?", a: "Banks typically offer less competitive exchange rates with wider spreads (1–3%). Licensed money changers in Malaysia (KL Sentral, Sogo, Imbi Plaza, etc.) often offer better rates for USD, SGD, EUR and AUD, with spreads of 0.5–1.5%. For large amounts, compare both before exchanging." },
  { q: "What is a 'spread' in currency exchange?", a: "The spread is the difference between the buy rate (what the exchanger pays you) and the sell rate (what they charge you). If the mid-market rate is RM4.52 per USD, a money changer might buy at RM4.47 and sell at RM4.57 — a spread of RM0.10. Tighter spread = better deal for you." },
  { q: "Is it better to exchange money in Malaysia or at the destination country?", a: "For most major currencies, exchanging in Malaysia at licensed money changers (not airport kiosks) gives better rates. For less common currencies (THB, IDR, VND), destination countries may be competitive. Always avoid airport currency kiosks — spreads of 2–5% are common." },
  { q: "What is the best way to send money from Malaysia overseas?", a: "Options: (1) Bank TT — reliable but expensive (RM10–RM50 fee + wide spread). (2) Wise — close to mid-market rate, low fees. (3) Western Union/MoneyGram — widely available but higher fees. (4) Licensed remittance companies (Merchantrade, etc.). Always compare total cost (fee + spread) rather than just the headline rate." },
  { q: "Why does the MYR fluctuate against USD?", a: "MYR/USD is influenced by Malaysia's trade balance and exports (oil, palm oil, electronics), US Federal Reserve rate decisions, global risk sentiment, BNM's OPR, and Malaysia's foreign reserves. The MYR was pegged at 3.80 to USD from 1998–2005 and has floated since." },
  { q: "Do I need to declare foreign currency when arriving in Malaysia?", a: "Yes — Malaysian customs requires declaration if you carry cash (any currency) exceeding RM30,000 equivalent when entering or leaving Malaysia. There is no limit on how much you can carry, only the declaration requirement above RM30,000 combined." },
  { q: "What currencies are best to bring to Thailand, Indonesia, and Japan from Malaysia?", a: "Thailand (THB): exchange at Malaysian licensed money changers for best rates. Indonesia (IDR): IDR is rarely available in Malaysia at good rates — exchange USD in Indonesia instead. Japan (JPY): widely exchanged in Malaysia, KL money changers typically have competitive JPY rates." },
  { q: "How do I find a licensed money changer in Malaysia?", a: "Licensed money changers are regulated by BNM and must display their licence number. Common locations: Berjaya Times Square KL, Sogo KL basement, KL Sentral, Imbi Plaza, Central Market KL, and major malls in Penang and JB. Avoid unlicensed changers." },
  { q: "What is the best MYR exchange rate for SGD in Malaysia?", a: "MYR/SGD is the most actively traded pair in Malaysia. Best SGD rates are at licensed money changers in KL for amounts of SGD500+. The mid-market rate is typically SGD1 = RM3.35–3.45 but fluctuates daily. Use BNM's reference rate as a benchmark before exchanging." },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/savings-calculator-malaysia", title: "Savings Calculator", emoji: "🏦", desc: "Project savings growth in MYR" },
  { href: "/compound-interest-calculator", title: "Compound Interest", emoji: "📈", desc: "See how investments grow over time" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Calculate Malaysian take-home pay" },
  { href: "/income-tax-calculator-malaysia", title: "Income Tax Calculator", emoji: "📋", desc: "Calculate Malaysian income tax" },
  { href: "/epf-calculator-malaysia", title: "EPF Calculator", emoji: "🏛️", desc: "Project EPF retirement savings" },
  { href: "/mortgage-calculator-malaysia", title: "Mortgage Calculator", emoji: "🏠", desc: "Calculate home loan repayments" },
  { href: "/car-loan-calculator-malaysia", title: "Car Loan Calculator", emoji: "🚗", desc: "Calculate hire purchase instalments" },
  { href: "/dsr-calculator-malaysia", title: "DSR Calculator", emoji: "📊", desc: "Check your debt service ratio" },
];

export default function CurrencyConverterPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />

      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-b border-violet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-violet-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/calculators" className="hover:text-violet-600 transition-colors">Calculators</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">Currency Converter</span>
          </nav>
          <div className="text-4xl mb-4">💱</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Currency Converter Malaysia
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Convert Malaysian Ringgit (MYR) to USD, SGD, EUR, JPY, CNY, AUD and GBP with indicative mid-market rates. Learn about spreads, BNM reference rates, and where to get the best exchange rates in Malaysia.
          </p>
        </div>
      </div>

      <CurrencyConverter />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        {/* EEAT Author Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Written by <a href="/author/alvin-chan" className="text-violet-600 hover:underline">Alvin Chan</a></p>
              <p className="text-xs text-gray-500 mt-0.5">Reviewed by the SmartCalc Editorial Team · Last updated: 25 June 2025</p>
              <p className="text-xs text-gray-400 mt-0.5">Sources: Bank Negara Malaysia, Exchange Control Act 1953</p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-amber-800"><strong>Important:</strong> Rates shown in the calculator above are indicative mid-market rates only. They are not live and cannot be used for actual transactions. For real transactions, always check with your bank, licensed money changer, or <a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">Bank Negara Malaysia</a> for current rates.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Complete Malaysian Guide to Currency Exchange (2025)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you&apos;re planning a trip to Singapore, sending money to family overseas, paying for university tuition in Australia, or managing a business with USD receivables, understanding how currency exchange works in Malaysia — and where to get the best rates — can save you hundreds of ringgit per transaction. This guide covers three real-world scenarios, explains how the BNM reference rate system works, compares banks vs money changers vs digital remittance services, and answers common questions for Malaysians exchanging currency in 2025.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Worked Examples — Real Malaysian Currency Needs</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 1: Travel to Singapore — MYR to SGD</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: Weekend trip to Singapore, budget SGD500 for the trip. You want to exchange MYR to SGD before departure.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">Amount needed:</span><span>SGD 500</span>
              <span className="font-medium">BNM mid-market rate:</span><span>SGD 1 = RM 3.38</span>
              <span className="font-medium">Bank sell rate (~1.5% spread):</span><span>SGD 1 = RM 3.43</span>
              <span className="font-medium">Money changer rate (~0.6% spread):</span><span>SGD 1 = RM 3.40</span>
            </div>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>At bank rate: SGD500 costs RM1,715</p>
            <p>At money changer: SGD500 costs RM1,700</p>
            <p>Saving by using money changer: <strong>RM15</strong></p>
            <p className="text-gray-500 mt-2">For SGD, the difference is modest — but on larger amounts or less common currencies, spreads matter more.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 2: University Tuition in Australia — MYR to AUD</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: Your child is studying in Melbourne. Semester tuition is AUD8,000. You need to remit AUD from Malaysia quarterly.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">Amount:</span><span>AUD 8,000</span>
              <span className="font-medium">BNM mid-market:</span><span>AUD 1 = RM 2.92</span>
              <span className="font-medium">Bank TT rate (~2.5% spread):</span><span>AUD 1 = RM 2.99</span>
              <span className="font-medium">Wise / digital remittance:</span><span>AUD 1 ≈ RM 2.93 (+ flat fee ~RM50)</span>
            </div>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Bank TT: AUD8,000 × RM2.99 + RM30 fee = <strong>RM23,950</strong></p>
            <p>Wise: AUD8,000 × RM2.93 + RM50 fee = <strong>RM23,490</strong></p>
            <p>Saving with Wise vs bank: <strong>RM460 per transfer</strong></p>
            <p>Annual saving (4 transfers): <strong>RM1,840</strong></p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 3: USD Business Remittance — MYR to USD</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: Small business owner paying a USD5,000 invoice to a US supplier monthly.
          </p>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>BNM mid-market: USD 1 = RM 4.52</p>
            <p>Bank TT sell rate (~2%): USD 1 = RM 4.61 → USD5,000 costs RM23,050</p>
            <p>Merchantrade/Wise rate (~0.5%): USD 1 = RM 4.54 → USD5,000 costs RM22,700</p>
            <p>Monthly saving: <strong>RM350</strong> | Annual saving: <strong>RM4,200</strong></p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Exchange Rates Work in Malaysia</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Malaysia operates a managed float exchange rate system, meaning the Ringgit floats freely in the market but Bank Negara Malaysia may intervene to prevent excessive volatility. The exchange rate is primarily determined by:
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Demand and supply of MYR</strong> from trade flows, tourism, and investment</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Commodity prices</strong> — Malaysia exports crude oil and palm oil. Higher commodity prices typically strengthen MYR</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>US Federal Reserve policy</strong> — USD strength or weakness ripples through all USD/MYR pairs</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>BNM Overnight Policy Rate (OPR)</strong> — higher rates attract foreign capital, supporting MYR</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Malaysia&apos;s foreign reserves</strong> — higher reserves give BNM more capacity to stabilise the currency</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table 1: Bank vs Money Changer vs Digital Remittance</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-blue-700">Bank TT</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-violet-700">Money Changer</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-emerald-700">Digital (Wise)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Typical spread", "1.5–3.0%", "0.5–1.5%", "0.3–0.6%"],
                  ["Transaction fee", "RM10–RM50", "None", "Flat fee (varies)"],
                  ["Typical total cost", "High", "Medium", "Low"],
                  ["Suitable for", "Large transfers, security", "Cash (travel)", "Online transfers"],
                  ["Speed", "1–3 business days", "Instant (cash)", "Same day to 2 days"],
                  ["Max amount limits", "None (with docs)", "May vary", "Varies by product"],
                  ["BNM licensed", "Yes", "Licensed changers", "Varies by provider"],
                  ["Best for", "High-value transfers", "Travel cash (SGD, USD, EUR)", "Regular remittances"],
                ].map(([f, a, b, c]) => (
                  <tr key={f} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{f}</td>
                    <td className="p-3 text-right text-gray-600">{a}</td>
                    <td className="p-3 text-right text-gray-600">{b}</td>
                    <td className="p-3 text-right text-gray-600">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table 2: MYR vs Major Currencies — Historical Context</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Currency</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Mid-2025 (est.)</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Strongest MYR</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Weakest MYR</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Key driver</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["USD", "~4.45–4.55", "~3.80 (pegged era)", "~4.80 (2016 low)", "Fed rate, oil price"],
                  ["SGD", "~3.35–3.45", "~2.85 (2013)", "~3.50+ (2024)", "Trade, tourism"],
                  ["EUR", "~4.80–4.95", "~4.20 (2018)", "~5.20 (2022)", "ECB policy"],
                  ["JPY", "~2.95–3.10/100JPY", "~2.40 (2023)", "~3.50 (pre-2020)", "BOJ policy, yen carry"],
                  ["AUD", "~2.85–3.00", "~2.60 (2016)", "~3.20 (2020)", "Commodities, RBA"],
                  ["GBP", "~5.60–5.80", "~4.80 (post-Brexit)", "~6.10 (2015)", "UK economy, BoE"],
                ].map(([c, m, s, w, d]) => (
                  <tr key={c} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{c}</td>
                    <td className="p-3 text-right font-semibold text-violet-600">{m}</td>
                    <td className="p-3 text-right text-gray-600">{s}</td>
                    <td className="p-3 text-right text-gray-600">{w}</td>
                    <td className="p-3 text-right text-gray-500 text-xs">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed mb-6">
            Note: Historical ranges are approximate and for context only. Exchange rates fluctuate daily. Rates shown are approximate mid-market values — actual transaction rates will differ.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the BNM Reference Rate System</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Bank Negara Malaysia</a> publishes a daily indicative reference rate at around 3:30 PM on business days. This rate:
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span>Is a <strong>mid-market rate</strong> (midpoint between buy and sell) — not a transactable rate</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span>Is used as a <strong>benchmark</strong> for financial reporting and contracts</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span>Is used in income tax calculations for foreign income received in Malaysia</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span>Gives you a reference point to evaluate whether a bank or money changer is offering a reasonable rate</span></li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            A practical rule of thumb: if a money changer or bank offers you more than 2% worse than the BNM reference rate for a major currency (USD, SGD, EUR), shop around — you can likely find better.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Find the Best Exchange Rates in Malaysia</h2>
          <div className="space-y-3 mb-8">
            {[
              { location: "Licensed money changers in KL city centre", tip: "Best for: USD, SGD, EUR, AUD, GBP. Locations: Imbi Plaza, Berjaya Times Square, Sogo basement, Central Market. Compare rates between 2–3 changers for large amounts." },
              { location: "Licensed money changers in Penang", tip: "Competitive rates for SGD, AUD, JPY. Check changers around Gurney Plaza and Georgetown area." },
              { location: "Digital remittance (Wise, Merchantrade Money)", tip: "Best for: online transfers overseas. Close to mid-market rate with transparent fees. Register and verify identity in advance of your first transfer." },
              { location: "Airport money changers (KLIA, Penang, JB)", tip: "Avoid if possible — spreads are 2–4% wider than city centre changers. Use only for small emergency amounts." },
              { location: "Malaysian bank branches or online banking", tip: "Convenient for existing customers but typically 1.5–2.5% wider spread than money changers. Better for large, secure telegraphic transfers overseas." },
            ].map((l) => (
              <div key={l.location} className="border-l-4 border-violet-300 pl-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{l.location}</p>
                <p className="text-gray-600 text-sm">{l.tip}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchange Control Rules for Malaysians</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Malaysia has exchange control rules under the Exchange Control Act 1953 (now administered under the Financial Services Act 2013). Key rules for individuals:
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Declaration on crossing border:</strong> Declare cash exceeding RM30,000 equivalent in any currency at customs</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Investment abroad:</strong> Malaysian residents may invest overseas — subject to permitted limits and reporting</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Offshore accounts:</strong> Malaysian residents may maintain foreign currency accounts locally, subject to BNM rules</span></li>
            <li className="flex gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Remittances:</strong> Outward remittances for legitimate purposes (education, tourism, business) are generally permitted. Large amounts require documentation</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { href: "/guides/salary-rm4000-budget-plan-malaysia", title: "RM4,000 Salary Budget Plan", desc: "Budget allocation including travel savings" },
              { href: "/guides/salary-rm5000-budget-plan-malaysia", title: "RM5,000 Salary Budget Plan", desc: "Savings targets at RM5,000 monthly" },
              { href: "/guides/emergency-fund-malaysia", title: "Emergency Fund Guide Malaysia", desc: "How much to save for financial safety" },
              { href: "/guides/best-savings-accounts-malaysia", title: "Best Savings Accounts Malaysia", desc: "Highest-yield savings for MYR funds" },
              { href: "/guides/epf-withdrawal-guide-malaysia", title: "EPF Withdrawal Guide", desc: "When and how to withdraw EPF savings" },
              { href: "/guides/how-to-save-first-rm10000-malaysia", title: "How to Save First RM10,000", desc: "Build your first savings milestone" },
            ].map((g) => (
              <a key={g.href} href={g.href} className="flex flex-col bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-violet-200 hover:bg-violet-50 transition-colors">
                <span className="font-semibold text-sm text-gray-800">{g.title}</span>
                <span className="text-xs text-gray-500 mt-0.5">{g.desc}</span>
              </a>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Official References</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline font-medium">Bank Negara Malaysia (BNM)</a> — Daily reference exchange rates, exchange control policy, licensed money changers</li>
            <li><a href="https://www.bnm.gov.my/currency-exchange-rates" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline font-medium">BNM Currency Exchange Rates</a> — Official daily MYR reference rates against all major currencies</li>
            <li><span className="font-medium text-gray-700">Financial Services Act 2013 (FSA)</span> — Governs exchange control, licensed money changers and remittance providers in Malaysia</li>
          </ul>
        </div>
      </CalcSeoSection>
      <Footer />
    </>
  );
}
