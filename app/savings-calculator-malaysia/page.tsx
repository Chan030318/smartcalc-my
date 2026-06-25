import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SavingsCalculator from "./SavingsCalculator";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Savings Calculator Malaysia 2024 | Future Value & Interest Earned",
  description:
    "Calculate how much your savings will grow in Malaysia. Enter monthly savings amount, interest rate and years to see future value, total deposited and interest earned.",
  keywords: [
    "savings calculator Malaysia",
    "tabungan kalkulator",
    "FD calculator Malaysia",
    "savings interest calculator",
    "future value calculator",
  ],
  alternates: { canonical: `${SITE_URL}/savings-calculator-malaysia` },
  openGraph: {
    title: "Savings Calculator Malaysia — See Your Money Grow",
    description:
      "Calculate your savings future value with monthly deposits and compound interest. Compare FD, ASB, and EPF rates.",
    url: `${SITE_URL}/savings-calculator-malaysia`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savings Calculator Malaysia",
    description: "Calculate savings future value and interest earned over time in Malaysia.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Savings Calculator Malaysia",
      url: `${SITE_URL}/savings-calculator-malaysia`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: "Calculate savings future value and interest earned with monthly deposits.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators` },
        { "@type": "ListItem", position: 3, name: "Savings Calculator", item: `${SITE_URL}/savings-calculator-malaysia` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a good savings rate in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Financial advisors recommend saving at least 20% of net income (the 50/30/20 rule). For Malaysian context: EPF contributions already enforce 23% (11% employee + 12% employer). Additional savings should target an emergency fund of 3–6 months expenses before investing.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best savings account interest rate in Malaysia 2024?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In 2024, regular savings accounts pay 0–2% p.a. Fixed deposits range from 3.5–4.1% for 12-month tenures. ASB (Amanah Saham Bumiputera) historically pays ~5–6% (bumiputera only). For the best rates, compare bank promotions on BNM's rate comparison tool.",
          },
        },
        {
          "@type": "Question",
          name: "How much should I save monthly to retire with RM1 million?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At 6% annual return: starting at age 25 with 35 years to retirement, you need about RM695/month. Starting at 35 (25 years): ~RM1,440/month. Starting at 45 (15 years): ~RM3,440/month. Starting early dramatically reduces the required monthly amount.",
          },
        },
        {
          "@type": "Question",
          name: "Is FD (Fixed Deposit) a good savings option in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FD is safe (PIDM guaranteed up to RM250,000 per bank), predictable, and currently pays 3.5–4.1% p.a. It is ideal for emergency funds and short-term goals (1–3 years). For long-term goals (10+ years), it may not beat inflation, so consider EPF, unit trusts, or equities.",
          },
        },
        {
          "@type": "Question",
          name: "What is the 50/30/20 rule and does it work in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 50/30/20 rule: 50% of net income on needs, 30% on wants, 20% on savings/debt. In Malaysia's high-cost urban areas (KL, PJ), housing alone can consume 40–50% of income, making this ratio difficult. A modified version: 60/20/20 (needs/wants/savings) may be more realistic for city dwellers.",
          },
        },
        {
          "@type": "Question",
          name: "Should I save or invest in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both, ideally. First build an emergency fund (3–6 months expenses) in a liquid savings account or FD. Then invest surplus savings for long-term goals. EPF is compulsory. Beyond EPF, consider: low-risk (ASB, FD, government bonds), medium-risk (unit trusts, REITs), higher-risk (stocks, ETFs).",
          },
        },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  {
    q: "What is a good savings rate in Malaysia?",
    a: "Financial advisors recommend saving at least 20% of net income. For Malaysian context: EPF contributions already enforce 23% (11% employee + 12% employer). Additional savings should target an emergency fund of 3–6 months expenses before investing.",
  },
  {
    q: "What is the best savings account interest rate in Malaysia 2024?",
    a: "In 2024, regular savings accounts pay 0–2% p.a. Fixed deposits range 3.5–4.1% for 12-month tenures. ASB historically pays ~5–6% (bumiputera only). Compare bank promotions on BNM's rate comparison tool.",
  },
  {
    q: "How much should I save monthly to retire with RM1 million?",
    a: "At 6% return: starting at 25 with 35 years, you need ~RM695/month. Starting at 35 (25 years): ~RM1,440/month. Starting at 45 (15 years): ~RM3,440/month. Starting early dramatically reduces the monthly amount needed.",
  },
  {
    q: "Is FD (Fixed Deposit) a good savings option in Malaysia?",
    a: "FD is safe (PIDM guaranteed up to RM250,000 per bank), predictable, and pays 3.5–4.1% p.a. Ideal for emergency funds and short-term goals. For long-term goals (10+ years), consider EPF, unit trusts or equities to beat inflation.",
  },
  {
    q: "What is the 50/30/20 rule and does it work in Malaysia?",
    a: "50% of net income on needs, 30% on wants, 20% on savings/debt. In high-cost cities like KL, housing alone can consume 40–50%, making this difficult. A modified 60/20/20 split may be more realistic for urban Malaysians.",
  },
  {
    q: "Should I save or invest in Malaysia?",
    a: "Both. First build an emergency fund (3–6 months expenses) in a liquid account or FD. Then invest surplus for long-term goals. EPF is compulsory. Beyond EPF: low-risk (ASB, FD), medium-risk (unit trusts, REITs), higher-risk (stocks, ETFs).",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/compound-interest-calculator", title: "Compound Interest Calculator", emoji: "📈", desc: "Calculate investment growth" },
  { href: "/epf-calculator-malaysia", title: "EPF Calculator", emoji: "🏦", desc: "Project your EPF retirement savings" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Calculate your take-home pay" },
  { href: "/income-tax-calculator-malaysia", title: "Income Tax Calculator", emoji: "📋", desc: "Calculate Malaysia income tax" },
];

export default function SavingsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-teal-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/calculators" className="hover:text-teal-600 transition-colors">Calculators</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">Savings Calculator</span>
          </nav>
          <div className="text-4xl mb-4">💰</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Savings Calculator Malaysia
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            See how your monthly savings grow over time with compound interest. Compare FD, ASB, EPF and other savings rates to reach your financial goals.
          </p>
        </div>
      </div>

      <SavingsCalculator />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Savings Calculator Malaysia — Build Your Wealth Guide</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Building savings is the foundation of financial security. Whether you are saving for an emergency fund, a house down payment, your children&apos;s education, or retirement, this calculator shows exactly how your money grows with consistent monthly deposits and compound interest.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">How Much to Save: Monthly Target by Goal</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Goal</th>
                  <th className="text-right p-3 border border-gray-200">Target</th>
                  <th className="text-right p-3 border border-gray-200">Timeline</th>
                  <th className="text-right p-3 border border-gray-200">Monthly @ 4%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Emergency Fund (3 months)", "RM 9,000", "2 years", "RM 366"],
                  ["House Down Payment (10%)", "RM 50,000", "5 years", "RM 754"],
                  ["Car Down Payment (10%)", "RM 10,000", "2 years", "RM 407"],
                  ["Child Education Fund", "RM 100,000", "18 years", "RM 301"],
                  ["Retirement (top-up)", "RM 500,000", "30 years", "RM 868"],
                ].map(([g, t, tl, m]) => (
                  <tr key={g} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{g}</td>
                    <td className="p-3 text-right text-gray-600">{t}</td>
                    <td className="p-3 text-right text-gray-600">{tl}</td>
                    <td className="p-3 text-right font-semibold text-teal-700">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Savings Rate Comparison in Malaysia (2024)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Account / Product</th>
                  <th className="text-right p-3 border border-gray-200">Rate (p.a.)</th>
                  <th className="text-right p-3 border border-gray-200">Guarantee</th>
                  <th className="text-left p-3 border border-gray-200">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Savings Account", "0.25–2%", "PIDM RM250k", "Daily access"],
                  ["Fixed Deposit (12M)", "3.5–4.1%", "PIDM RM250k", "1–3 year goals"],
                  ["ASB (Bumiputera)", "~5.0–6.0%", "Govt-linked", "Long-term bumi"],
                  ["EPF (Conventional)", "~5.5–6.0%", "Govt", "Retirement (mandatory)"],
                  ["Unit Trust (Mixed)", "5–10%", "None", "5+ year goals"],
                ].map(([acc, rate, guar, best]) => (
                  <tr key={acc} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{acc}</td>
                    <td className="p-3 text-right font-bold text-teal-700">{rate}</td>
                    <td className="p-3 text-right text-gray-600">{guar}</td>
                    <td className="p-3 text-gray-500 text-xs">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">The Malaysian Savings Ladder</h3>
          <p className="text-gray-600 leading-relaxed mb-3">Build your savings in order of priority:</p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-teal-500 font-bold">Step 1</span> <span>Emergency fund: 3–6 months of expenses in a savings account or short-term FD (highly liquid)</span></li>
            <li className="flex gap-2"><span className="text-teal-500 font-bold">Step 2</span> <span>Maximise EPF voluntary contributions (up to RM60,000/year) — compulsory + tax deductible</span></li>
            <li className="flex gap-2"><span className="text-teal-500 font-bold">Step 3</span> <span>ASB (eligible buyers) up to RM200,000 — consistently competitive, low risk</span></li>
            <li className="flex gap-2"><span className="text-teal-500 font-bold">Step 4</span> <span>Unit trusts / ETFs for higher growth over 10+ year horizons</span></li>
            <li className="flex gap-2"><span className="text-teal-500 font-bold">Step 5</span> <span>Direct equities, REITs, or other investments once basics are covered</span></li>
          </ul>
        </div>
      </CalcSeoSection>
      <Footer />
    </>
  );
}
