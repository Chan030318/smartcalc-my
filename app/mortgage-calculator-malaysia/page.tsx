import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import MortgageCalculator from "./MortgageCalculator";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Mortgage Calculator Malaysia 2024 | Home Loan Monthly Repayment",
  description:
    "Calculate your home loan monthly repayment in Malaysia. Enter house price, down payment, interest rate and tenure to see total repayment, interest cost, and income needed.",
  keywords: [
    "mortgage calculator Malaysia",
    "home loan calculator Malaysia",
    "house loan calculator",
    "monthly repayment calculator",
    "property loan Malaysia",
  ],
  alternates: { canonical: `${SITE_URL}/mortgage-calculator-malaysia` },
  openGraph: {
    title: "Mortgage Calculator Malaysia — Home Loan Monthly Repayment",
    description:
      "Calculate Malaysia home loan monthly repayment, total interest, and income required to qualify.",
    url: `${SITE_URL}/mortgage-calculator-malaysia`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Calculator Malaysia",
    description: "Calculate home loan monthly repayment and affordability for Malaysian properties.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Mortgage Calculator Malaysia",
      url: `${SITE_URL}/mortgage-calculator-malaysia`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: "Calculate Malaysia home loan monthly repayment, total interest and income needed.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators` },
        { "@type": "ListItem", position: 3, name: "Mortgage Calculator", item: `${SITE_URL}/mortgage-calculator-malaysia` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the current home loan interest rate in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Malaysian home loan rates are typically pegged to the Base Rate (BR) or Base Lending Rate (BLR). As of 2024, effective home loan rates range from approximately 3.5% to 4.5% p.a. depending on the bank, your credit profile, and the property type.",
          },
        },
        {
          "@type": "Question",
          name: "How much down payment is needed for a house in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a first property below RM500,000, banks can finance up to 90% (10% down payment). For a second property, the margin drops to 70% (30% down). Third property or above: maximum 70% financing. First-time buyer schemes may offer higher financing ratios.",
          },
        },
        {
          "@type": "Question",
          name: "What is the maximum mortgage tenure in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bank Negara Malaysia caps home loan tenure at 35 years, or until the borrower turns 70, whichever is earlier. Most buyers opt for 25 to 30 years to balance monthly payment with total interest cost.",
          },
        },
        {
          "@type": "Question",
          name: "What income do I need to qualify for a mortgage in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Malaysian banks use the Debt Service Ratio (DSR) to assess eligibility. DSR = total monthly debt commitments ÷ gross income. Most banks cap DSR at 60–70%. A rough rule: your mortgage payment should not exceed 30–33% of gross monthly income.",
          },
        },
        {
          "@type": "Question",
          name: "What extra costs should I budget for when buying a house in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beyond the down payment, budget for: stamp duty on SPA (1–3%), legal fees for SPA and loan (0.4–0.8%), valuation fee (~0.25%), MRTA/MLTA insurance (1–3% of loan), and a loan processing fee. First-time buyers may qualify for stamp duty exemptions.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose a 25-year or 30-year mortgage in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 30-year loan has lower monthly payments but costs significantly more in total interest. For a RM400,000 loan at 4%: 25-year = RM2,112/month, total interest RM233,600; 30-year = RM1,910/month, total interest RM287,600 — RM54,000 more. Choose shorter if DSR allows.",
          },
        },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  {
    q: "What is the current home loan interest rate in Malaysia?",
    a: "Malaysian home loan rates are typically pegged to the Base Rate (BR). As of 2024, effective home loan rates range from approximately 3.5% to 4.5% p.a. depending on the bank, your credit profile, and property type.",
  },
  {
    q: "How much down payment is needed for a house in Malaysia?",
    a: "For a first property below RM500,000, banks can finance up to 90% (10% down payment). For a second property, the margin drops to 70% (30% down). First-time buyer schemes may offer higher financing ratios.",
  },
  {
    q: "What is the maximum mortgage tenure in Malaysia?",
    a: "Bank Negara Malaysia caps home loan tenure at 35 years, or until the borrower turns 70, whichever is earlier. Most buyers opt for 25 to 30 years.",
  },
  {
    q: "What income do I need to qualify for a mortgage in Malaysia?",
    a: "Malaysian banks use DSR (Debt Service Ratio). Most banks cap DSR at 60–70%. A rough rule: mortgage payment should not exceed 30–33% of gross monthly income.",
  },
  {
    q: "What extra costs should I budget for when buying a house in Malaysia?",
    a: "Budget for: stamp duty on SPA (1–3%), legal fees (0.4–0.8%), valuation fee (~0.25%), MRTA/MLTA insurance, and a loan processing fee. First-time buyers may qualify for stamp duty exemptions.",
  },
  {
    q: "Should I choose a 25-year or 30-year mortgage in Malaysia?",
    a: "A 30-year loan has lower monthly payments but costs more in total interest. For a RM400,000 loan at 4%: 25 years costs ~RM233,600 in interest vs ~RM287,600 for 30 years — RM54,000 more. Choose shorter tenure if your DSR allows.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/car-loan-calculator-malaysia", title: "Car Loan Calculator", emoji: "🚗", desc: "Estimate hire purchase instalments" },
  { href: "/dsr-calculator-malaysia", title: "DSR Calculator", emoji: "📊", desc: "Check your Debt Service Ratio" },
  { href: "/loan-calculator", title: "Loan Calculator", emoji: "💳", desc: "Reducing balance loan repayments" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Calculate your take-home pay" },
];

export default function MortgagePage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/calculators" className="hover:text-blue-600 transition-colors">Calculators</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">Mortgage</span>
          </nav>
          <div className="text-4xl mb-4">🏠</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Mortgage Calculator Malaysia
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Calculate your home loan monthly repayment using reducing balance method. See total interest, income needed, and year-by-year amortisation schedule.
          </p>
        </div>
      </div>

      <MortgageCalculator />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Loan Calculator Malaysia — Complete Mortgage Guide</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Buying a home in Malaysia is the biggest financial decision most people make. Understanding your mortgage repayment, total interest cost, and the income required to qualify helps you plan confidently and negotiate with lenders from a position of knowledge.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">How Malaysian Home Loans Work</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike car loans (flat rate), Malaysian home loans use <strong>reducing balance</strong> interest. You pay interest only on the outstanding balance — as you repay principal, your interest charge falls each month. The standard formula uses the same monthly payment throughout the loan period.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">25-Year vs 30-Year Loan: Real Cost Comparison</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Parameter</th>
                  <th className="text-right p-3 border border-gray-200">25 Years</th>
                  <th className="text-right p-3 border border-gray-200">30 Years</th>
                  <th className="text-right p-3 border border-gray-200">35 Years</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Loan (RM400k @ 4%)", "", "", ""],
                  ["Monthly Payment", "RM 2,112", "RM 1,910", "RM 1,766"],
                  ["Total Repayment", "RM 633,600", "RM 687,600", "RM 741,720"],
                  ["Total Interest", "RM 233,600", "RM 287,600", "RM 341,720"],
                  ["Extra vs 25yr", "—", "+RM 54,000", "+RM 108,120"],
                ].map(([label, a, b, c], i) => (
                  <tr key={i} className={`border border-gray-200 ${i === 0 ? "bg-blue-50 font-semibold" : ""}`}>
                    <td className="p-3 text-gray-700">{label}</td>
                    <td className="p-3 text-right text-gray-600">{a}</td>
                    <td className="p-3 text-right text-gray-600">{b}</td>
                    <td className="p-3 text-right text-gray-600">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Down Payment & Margin of Finance Rules</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Property</th>
                  <th className="text-right p-3 border border-gray-200">Max Financing</th>
                  <th className="text-right p-3 border border-gray-200">Min Down Payment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1st property (any price)", "90%", "10%"],
                  ["2nd property", "70%", "30%"],
                  ["3rd property & above", "70%", "30%"],
                  ["Property above RM1M", "70%", "30%"],
                ].map(([p, m, d]) => (
                  <tr key={p} className="border border-gray-200">
                    <td className="p-3 text-gray-700">{p}</td>
                    <td className="p-3 text-right font-semibold text-blue-600">{m}</td>
                    <td className="p-3 text-right text-gray-600">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Extra Costs to Budget When Buying Property in Malaysia</h3>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>Stamp duty (MOT)</strong>: 1% on first RM100k, 2% on RM100k–RM500k, 3% above RM500k</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>Legal fees (SPA + Loan)</strong>: approximately 0.4–0.8% of property price</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>Valuation fee</strong>: ~0.25% of property value (required for secondary market)</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>MRTA / MLTA insurance</strong>: 1–3% of loan amount (mortgage life insurance)</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>Fire insurance</strong>: mandatory for mortgaged properties, ~RM200–500/year</span></li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategies to Pay Off Your Mortgage Faster</h3>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li className="flex gap-2"><span className="text-blue-600 font-bold">1.</span> <span>Make one extra full payment per year — reduces a 30-year loan by ~4–5 years</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">2.</span> <span>Round up your monthly payment — RM2,110 rounded to RM2,200 saves thousands</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">3.</span> <span>Use windfall income (bonus, tax refund) for lump-sum partial settlement</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">4.</span> <span>Refinance if market rates drop significantly (consider legal and valuation costs)</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">5.</span> <span>Choose a flexi loan account — deposits reduce daily outstanding balance</span></li>
          </ul>
        </div>
      </CalcSeoSection>
    </>
  );
}
