import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import CarLoanCalculator from "./CarLoanCalculator";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Car Loan Calculator Malaysia 2024 | Monthly Instalment Estimator",
  description:
    "Calculate your car loan monthly instalment using Malaysia's hire purchase flat rate method. Enter car price, down payment, interest rate and tenure to get instant results.",
  keywords: [
    "car loan calculator Malaysia",
    "hire purchase calculator",
    "monthly instalment calculator Malaysia",
    "kereta loan calculator",
    "car financing calculator",
  ],
  alternates: { canonical: `${SITE_URL}/car-loan-calculator-malaysia` },
  openGraph: {
    title: "Car Loan Calculator Malaysia — Hire Purchase Instalment Estimator",
    description:
      "Estimate your car monthly instalment using hire purchase flat rate — the standard method for Malaysian car loans.",
    url: `${SITE_URL}/car-loan-calculator-malaysia`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Loan Calculator Malaysia",
    description: "Calculate monthly car instalments with Malaysia's hire purchase flat rate method.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Car Loan Calculator Malaysia",
      url: `${SITE_URL}/car-loan-calculator-malaysia`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "Calculate Malaysia car loan monthly instalment using hire purchase flat rate method.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Car Loan Calculator",
          item: `${SITE_URL}/car-loan-calculator-malaysia`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is a car loan calculated in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Malaysian car loans use hire purchase (HP) with a flat rate. Total interest = loan amount × flat rate × years. Monthly instalment = (loan amount + total interest) ÷ total months. Unlike reducing balance, the interest is fixed and does not decrease as you repay.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum down payment for a car loan in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Malaysian banks require a minimum 10% down payment for a car purchase. Some lenders may offer up to 90% or even 100% financing for certain vehicles or borrowers with strong credit profiles.",
          },
        },
        {
          "@type": "Question",
          name: "What is the typical car loan interest rate in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hire purchase flat rates in Malaysia typically range from 2.5% to 3.5% p.a. for new cars. Used cars may attract rates of 3.0% to 4.5%. National car models (Proton, Perodua) often qualify for lower rates near 2.5%.",
          },
        },
        {
          "@type": "Question",
          name: "What is the maximum car loan tenure in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bank Negara Malaysia guidelines allow a maximum hire purchase tenure of 9 years for cars. Most buyers opt for 5 to 7 years to balance monthly affordability against total interest paid.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between flat rate and reducing balance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Flat rate applies interest to the original loan amount throughout the tenure. Reducing balance (used for home loans) applies interest only to the remaining balance. A 3% flat rate is roughly equivalent to 5.5–6% reducing balance effective rate.",
          },
        },
        {
          "@type": "Question",
          name: "How does early settlement work for car loans in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the Hire Purchase Act 1967, early settlement rebates use the Rule-of-78 method. The rebate amount is calculated based on the proportion of remaining instalments versus total instalments. Contact your bank to get the exact settlement figure.",
          },
        },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  {
    q: "How is a car loan calculated in Malaysia?",
    a: "Malaysian car loans use hire purchase (HP) with a flat rate. Total interest = loan amount × flat rate × years. Monthly instalment = (loan amount + total interest) ÷ total months. Unlike reducing balance, the interest is fixed and does not decrease as you repay.",
  },
  {
    q: "What is the minimum down payment for a car loan in Malaysia?",
    a: "Most Malaysian banks require a minimum 10% down payment for a car purchase. Some lenders may offer up to 90% or even 100% financing for certain vehicles or borrowers with strong credit profiles.",
  },
  {
    q: "What is the typical car loan interest rate in Malaysia?",
    a: "Hire purchase flat rates in Malaysia typically range from 2.5% to 3.5% p.a. for new cars. Used cars may attract rates of 3.0% to 4.5%. National car models (Proton, Perodua) often qualify for rates near 2.5%.",
  },
  {
    q: "What is the maximum car loan tenure in Malaysia?",
    a: "Bank Negara Malaysia guidelines allow a maximum hire purchase tenure of 9 years. Most buyers opt for 5 to 7 years to balance monthly affordability against total interest paid.",
  },
  {
    q: "What is the difference between flat rate and reducing balance?",
    a: "Flat rate applies interest to the original loan amount throughout the tenure. Reducing balance applies interest only to the remaining balance. A 3% flat rate is roughly equivalent to 5.5–6% effective reducing balance rate.",
  },
  {
    q: "How does early settlement work for car loans in Malaysia?",
    a: "Under the Hire Purchase Act 1967, early settlement rebates use the Rule-of-78 method. The rebate is calculated based on remaining versus total instalments. Contact your bank for the exact settlement figure.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/mortgage-calculator-malaysia", title: "Mortgage Calculator", emoji: "🏠", desc: "Calculate home loan monthly repayments" },
  { href: "/loan-calculator", title: "Personal Loan Calculator", emoji: "💳", desc: "Reducing balance loan repayments" },
  { href: "/dsr-calculator-malaysia", title: "DSR Calculator", emoji: "📊", desc: "Check your debt service ratio" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Calculate your take-home pay" },
];

export default function CarLoanPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
            <span>/</span>
            <a href="/calculators" className="hover:text-orange-500 transition-colors">Calculators</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">Car Loan</span>
          </nav>
          <div className="text-4xl mb-4">🚗</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Car Loan Calculator Malaysia
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Calculate your monthly hire purchase instalment using Malaysia&apos;s flat rate method. Enter your car price, down payment, interest rate and loan tenure.
          </p>
        </div>
      </div>

      <CarLoanCalculator />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Car Loan Calculator Malaysia — Hire Purchase Guide</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When you buy a car in Malaysia, the financing is structured as hire purchase (HP) — not a conventional mortgage-style loan. Understanding how hire purchase works is essential for making smart car-buying decisions and avoiding surprises when your monthly instalment arrives.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">How Malaysian Car Loan (Hire Purchase) Works</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike home loans that use reducing balance, Malaysian car loans use a <strong>flat rate interest</strong> system. The interest is calculated on the full original loan amount for the entire tenure — it does not reduce as you pay down the principal. This makes flat rate interest more expensive than it appears at first glance.
          </p>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-800 mb-2">Hire Purchase Formula:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li><strong>Loan Amount</strong> = Car Price − Down Payment</li>
              <li><strong>Total Interest</strong> = Loan Amount × Flat Rate (%) × Years</li>
              <li><strong>Total Repayment</strong> = Loan Amount + Total Interest</li>
              <li><strong>Monthly Instalment</strong> = Total Repayment ÷ (Years × 12)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example: Proton X50 at RM100,000</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Parameter</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">5 Years</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">7 Years</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">9 Years</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Car Price", "RM 100,000", "RM 100,000", "RM 100,000"],
                  ["Down Payment (10%)", "RM 10,000", "RM 10,000", "RM 10,000"],
                  ["Loan Amount", "RM 90,000", "RM 90,000", "RM 90,000"],
                  ["Flat Rate", "3.0%", "3.0%", "3.0%"],
                  ["Total Interest", "RM 13,500", "RM 18,900", "RM 24,300"],
                  ["Monthly Instalment", "RM 1,725", "RM 1,320", "RM 1,115"],
                ].map(([label, ...vals]) => (
                  <tr key={label} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{label}</td>
                    {vals.map((v, i) => <td key={i} className="p-3 text-right text-gray-600">{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Flat Rate vs Reducing Balance: What&apos;s the Real Cost?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A common misconception is that a 3% flat rate is the same as a 3% home loan rate. It is not. A 3% flat rate is approximately equivalent to <strong>5.5–6% reducing balance</strong> (effective rate). This is because the flat rate charges interest on the full amount even when you have already repaid half the loan.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Loan Type</th>
                  <th className="text-right p-3 border border-gray-200">Stated Rate</th>
                  <th className="text-right p-3 border border-gray-200">Effective Rate</th>
                  <th className="text-right p-3 border border-gray-200">Used For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hire Purchase (Car)", "2.5–3.5%", "~4.5–6.3%", "All car loans in MY"],
                  ["Home Loan / Mortgage", "3.5–4.5%", "3.5–4.5%", "Property purchase"],
                  ["Personal Loan (Flat)", "6–12%", "~11–22%", "Unsecured personal"],
                ].map(([t, s, e, u]) => (
                  <tr key={t} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{t}</td>
                    <td className="p-3 text-right text-gray-600">{s}</td>
                    <td className="p-3 text-right font-semibold text-orange-600">{e}</td>
                    <td className="p-3 text-right text-gray-600">{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tips to Reduce Your Car Loan Cost in Malaysia</h3>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-orange-500 font-bold">1.</span> <span><strong>Larger down payment</strong> — Every extra ringgit reduces the loan principal and total interest directly.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">2.</span> <span><strong>Shorter tenure</strong> — A 5-year loan saves thousands vs. 7 or 9 years, even though monthly payments are higher.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">3.</span> <span><strong>National cars</strong> — Proton and Perodua models often qualify for preferential rates from Maybank, CIMB, and others.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">4.</span> <span><strong>Negotiate the OTR</strong> — The on-the-road (OTR) price includes insurance and road tax. Dealers often offer rebates on these.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">5.</span> <span><strong>Compare banks</strong> — Flat rates vary between lenders. Even a 0.2% difference on a RM80,000 loan over 7 years saves over RM1,100.</span></li>
          </ul>
        </div>
      </CalcSeoSection>
    </>
  );
}
