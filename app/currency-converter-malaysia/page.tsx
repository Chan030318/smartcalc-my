import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrencyConverter from "./CurrencyConverter";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Currency Converter Malaysia 2024 | MYR to USD SGD EUR JPY",
  description:
    "Convert Malaysian Ringgit (MYR) to USD, SGD, EUR, JPY, CNY, AUD and GBP. Indicative exchange rates for reference. See all major currency pairs against MYR.",
  keywords: [
    "currency converter Malaysia",
    "MYR to USD",
    "ringgit to dollar",
    "MYR to SGD",
    "Malaysia exchange rate",
    "tukar wang Malaysia",
  ],
  alternates: { canonical: `${SITE_URL}/currency-converter-malaysia` },
  openGraph: {
    title: "Currency Converter Malaysia — MYR to USD, SGD, EUR & More",
    description:
      "Convert Malaysian Ringgit to major world currencies. Indicative rates for USD, SGD, EUR, JPY, CNY, AUD and GBP.",
    url: `${SITE_URL}/currency-converter-malaysia`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter Malaysia",
    description: "Convert MYR to USD, SGD, EUR, JPY and more. Indicative rates for reference.",
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
        {
          "@type": "Question",
          name: "What is the current MYR to USD exchange rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The MYR/USD rate fluctuates daily. As of mid-2025, 1 USD is approximately RM 4.40–4.60. For the most accurate live rate, check Bank Negara Malaysia (BNM) or your bank's official rate board before any transaction.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I get the best exchange rate in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Licensed money changers in Malaysia typically offer better rates than bank counters for common currencies like USD and SGD. Online remittance services (Wise, BigPay) often offer mid-market rates with transparent fees for transfers. Always compare total cost (rate + fee) rather than just the headline rate.",
          },
        },
        {
          "@type": "Question",
          name: "What is the official exchange rate authority in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bank Negara Malaysia (BNM) publishes daily reference rates and is the official central bank authority on exchange rates. BNM rates are used as reference but actual transaction rates at banks and money changers will differ due to spread and fees.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the Malaysian Ringgit (MYR) weak against the US dollar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The MYR is influenced by commodity prices (oil, palm oil), US Federal Reserve interest rate policy, China economic outlook, and Malaysia's current account balance. When the USD strengthens globally or oil prices fall, MYR tends to weaken. BNM manages the currency but does not fix it to a peg.",
          },
        },
        {
          "@type": "Question",
          name: "Can I convert foreign currency at Malaysian banks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all major Malaysian banks (Maybank, CIMB, Public Bank, RHB, etc.) offer currency exchange services. Rates are published daily. For popular currencies (USD, SGD, EUR), rates are usually available immediately. For less common currencies, you may need to order in advance.",
          },
        },
        {
          "@type": "Question",
          name: "What is the MYR to SGD exchange rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The MYR/SGD rate is typically around RM 3.30–3.45 per Singapore Dollar (mid-2025). Many Malaysians working in Singapore or crossing the Causeway need to convert between these currencies frequently. Money changers at the Johor Bahru causeway area often offer competitive rates.",
          },
        },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  {
    q: "What is the current MYR to USD exchange rate?",
    a: "The MYR/USD rate fluctuates daily. As of mid-2025, 1 USD is approximately RM 4.40–4.60. For accurate live rates, check Bank Negara Malaysia (BNM) or your bank's official rate board before any transaction.",
  },
  {
    q: "Where can I get the best exchange rate in Malaysia?",
    a: "Licensed money changers typically offer better rates than bank counters for common currencies. Online remittance services (Wise, BigPay) often offer mid-market rates with transparent fees. Always compare total cost (rate + fee) rather than just the headline rate.",
  },
  {
    q: "What is the official exchange rate authority in Malaysia?",
    a: "Bank Negara Malaysia (BNM) publishes daily reference rates. BNM rates are used as reference but actual transaction rates at banks and money changers will differ due to spread and fees.",
  },
  {
    q: "Why is the Malaysian Ringgit (MYR) weak against the US dollar?",
    a: "The MYR is influenced by commodity prices (oil, palm oil), US Federal Reserve interest rate policy, China's economic outlook, and Malaysia's current account balance. BNM manages the currency but does not fix it to a peg.",
  },
  {
    q: "Can I convert foreign currency at Malaysian banks?",
    a: "Yes, all major Malaysian banks (Maybank, CIMB, Public Bank, RHB) offer currency exchange. For popular currencies (USD, SGD, EUR), rates are usually available immediately. Less common currencies may require advance ordering.",
  },
  {
    q: "What is the MYR to SGD exchange rate?",
    a: "The MYR/SGD rate is typically around RM 3.30–3.45 per Singapore Dollar (mid-2025). Money changers at the Johor Bahru causeway area often offer competitive rates for Malaysians working in or visiting Singapore.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Calculate your take-home pay" },
  { href: "/income-tax-calculator-malaysia", title: "Income Tax Calculator", emoji: "📋", desc: "Calculate Malaysia income tax" },
  { href: "/savings-calculator-malaysia", title: "Savings Calculator", emoji: "🏦", desc: "Project your savings growth" },
  { href: "/compound-interest-calculator", title: "Compound Interest", emoji: "📈", desc: "Calculate investment growth" },
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
            Convert Malaysian Ringgit (MYR) to USD, SGD, EUR, JPY, CNY, AUD and GBP with indicative reference rates. Always verify with your bank before transacting.
          </p>
        </div>
      </div>

      <CurrencyConverter />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">MYR Exchange Rate Guide — Currency Conversion in Malaysia</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Malaysian Ringgit (MYR, RM) is the official currency of Malaysia, managed by Bank Negara Malaysia. Understanding exchange rates matters for international travel, remittances, cross-border shopping, and overseas investments.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">MYR Historical Context</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Malaysia pegged the Ringgit at RM3.80 to USD from 1998 to 2005 following the Asian Financial Crisis. Since 2005, MYR has floated freely, reaching a low near RM4.80/USD in 2024 before strengthening. Key drivers: BNM interest rates, oil prices, China trade, and global USD strength.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Currency Pair</th>
                  <th className="text-right p-3 border border-gray-200">Indicative Rate</th>
                  <th className="text-left p-3 border border-gray-200">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["MYR / USD", "1 USD ≈ RM 4.52", "Global benchmark; oil, commodities priced in USD"],
                  ["MYR / SGD", "1 SGD ≈ RM 3.38", "Many Malaysians work or shop in Singapore"],
                  ["MYR / EUR", "1 EUR ≈ RM 4.89", "European travel, imports"],
                  ["MYR / JPY", "100 JPY ≈ RM 3.01", "Popular Japan travel destination for Malaysians"],
                  ["MYR / CNY", "1 CNY ≈ RM 0.63", "China-Malaysia trade corridor"],
                  ["MYR / AUD", "1 AUD ≈ RM 2.92", "Education — many Malaysians study in Australia"],
                  ["MYR / GBP", "1 GBP ≈ RM 5.78", "UK education, remittances"],
                ].map(([pair, rate, why]) => (
                  <tr key={pair} className="border border-gray-200">
                    <td className="p-3 font-bold text-gray-800">{pair}</td>
                    <td className="p-3 text-right font-semibold text-violet-700">{rate}</td>
                    <td className="p-3 text-gray-500 text-xs">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-2">Indicative rates, approximate mid-2025. For transactions, use BNM or your bank&apos;s live rate.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Where to Exchange Currency in Malaysia</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Licensed Money Changers", rating: "Best rates", body: "Money changers in shopping malls and Berjaya Times Square area often offer 1–2% better than banks. Look for licensed operators (BNM registered)." },
              { title: "Malaysian Banks", rating: "Convenient", body: "All major banks exchange common currencies. Rates are slightly lower than money changers but offer reliability and receipt. Good for large amounts or less-common currencies." },
              { title: "Online Remittance (Wise, BigPay)", rating: "Best for transfers", body: "For sending money overseas, mid-market rates with transparent fees often beat banks significantly. Compare total cost before committing." },
              { title: "Airport / Hotel", rating: "Worst rates", body: "Avoid exchanging at airports and hotels whenever possible — rates are typically 5–10% worse than street money changers due to captive audience pricing." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 font-medium">{item.rating}</span>
                </div>
                <p className="text-gray-500 text-sm">{item.body}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Currency Exchange Tips for Malaysians</h3>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li className="flex gap-2"><span className="text-violet-500 font-bold">1.</span> <span><strong>Always compare total cost</strong> — a lower headline rate with no fees may beat a better rate with high fees</span></li>
            <li className="flex gap-2"><span className="text-violet-500 font-bold">2.</span> <span><strong>Avoid dynamic currency conversion (DCC)</strong> — when using a card abroad, always pay in local currency, not MYR</span></li>
            <li className="flex gap-2"><span className="text-violet-500 font-bold">3.</span> <span><strong>Exchange larger amounts at once</strong> — money changers often give better rates for larger sums</span></li>
            <li className="flex gap-2"><span className="text-violet-500 font-bold">4.</span> <span><strong>Watch the spread</strong> — the difference between buy and sell rate is the money changer&apos;s profit</span></li>
            <li className="flex gap-2"><span className="text-violet-500 font-bold">5.</span> <span><strong>Check BNM&apos;s rate</strong> — BNM publishes daily reference rates at bnm.gov.my as a benchmark</span></li>
          </ul>
        </div>
      </CalcSeoSection>
      <Footer />
    </>
  );
}
