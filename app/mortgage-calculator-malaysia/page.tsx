import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MortgageCalculator from "./MortgageCalculator";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Mortgage Calculator Malaysia 2025 | Home Loan Monthly Repayment",
  description:
    "Calculate your Malaysia home loan monthly repayment instantly. Reducing balance method with full amortisation. Covers first home, second property, Islamic mortgage, stamp duty and DSR eligibility.",
  keywords: [
    "mortgage calculator Malaysia",
    "home loan calculator Malaysia",
    "house loan calculator",
    "monthly repayment calculator",
    "property loan Malaysia",
    "Islamic mortgage Malaysia",
    "first home buyer Malaysia",
  ],
  alternates: { canonical: `${SITE_URL}/mortgage-calculator-malaysia` },
  openGraph: {
    title: "Mortgage Calculator Malaysia 2025 — Home Loan Monthly Repayment",
    description:
      "Calculate Malaysia home loan monthly repayment, total interest, stamp duty, and income required to qualify. Covers conventional and Islamic mortgages.",
    url: `${SITE_URL}/mortgage-calculator-malaysia`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Calculator Malaysia",
    description: "Calculate home loan monthly repayment, total interest and affordability for Malaysian properties.",
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
      description: "Calculate Malaysia home loan monthly repayment, total interest and income needed using reducing balance method.",
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
        { "@type": "Question", name: "What is the current home loan interest rate in Malaysia in 2025?", acceptedAnswer: { "@type": "Answer", text: "Malaysian home loan rates are pegged to the Overnight Policy Rate (OPR) set by Bank Negara Malaysia. As of mid-2025, effective home loan rates range from approximately 3.4% to 4.6% p.a. depending on the bank, your credit profile, and loan amount. Islamic home financing (term financing-i) carries similar rates structured as a profit rate." } },
        { "@type": "Question", name: "How much down payment is needed for a house in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "For a first property (any price), banks can finance up to 90% — requiring a 10% down payment. For a second property, the maximum margin of finance drops to 70%, requiring a 30% down payment. For a third property and above, the cap remains 70%. These are BNM guidelines; individual banks may impose stricter requirements." } },
        { "@type": "Question", name: "What is the maximum mortgage tenure in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Bank Negara Malaysia caps residential home loan tenure at 35 years, or until the borrower reaches age 70, whichever is earlier. If you are 40 years old, your maximum loan tenure is 30 years (to age 70), not 35 years." } },
        { "@type": "Question", name: "What income do I need to qualify for a home loan in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Malaysian banks use the Debt Service Ratio (DSR) — total monthly debt payments ÷ gross income. Most banks cap DSR at 60–70%. For a RM2,000/month mortgage, you typically need gross income of at least RM3,333–RM5,000. Use our DSR Calculator to find your exact eligibility." } },
        { "@type": "Question", name: "What extra costs should I budget for beyond the down payment?", acceptedAnswer: { "@type": "Answer", text: "Budget for: stamp duty on Memorandum of Transfer (1–3% of property price), legal fees for SPA and loan agreement (0.4–0.8% each), valuation fee (~0.25%), MRTA or MLTA insurance (1–3% of loan amount), fire insurance (compulsory, ~RM200–500/year), and a bank processing fee. First-time buyers for properties below RM500k may qualify for stamp duty exemptions." } },
        { "@type": "Question", name: "Should I choose a 25-year or 30-year mortgage?", acceptedAnswer: { "@type": "Answer", text: "A 30-year loan gives lower monthly payments but costs significantly more in interest. For a RM400,000 loan at 4%: 25 years costs ~RM233,600 in total interest; 30 years costs ~RM287,600 — RM54,000 more. The answer depends on your DSR: choose the shortest tenure your income allows to minimise total cost." } },
        { "@type": "Question", name: "What is the difference between conventional and Islamic home financing in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Conventional mortgages charge interest on the outstanding loan balance. Islamic home financing (Murabahah or Musharakah Mutanaqisah) uses profit-rate structures with no riba. Practically, monthly payments and effective costs are similar. Islamic products may have additional features like fixed profit rates for initial years. Both are widely available at Malaysian banks." } },
        { "@type": "Question", name: "Can I use EPF savings for home loan down payment in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Yes. EPF Account 2 (now Account Flexible / Akaun Fleksibel) can be withdrawn for property purchase, to fund the down payment or reduce outstanding loan principal. The maximum withdrawal depends on your EPF balance and the property price. This can help bridge the down payment gap without depleting your cash savings." } },
        { "@type": "Question", name: "How do Malaysian banks calculate the mortgage monthly payment?", acceptedAnswer: { "@type": "Answer", text: "Malaysian home loans use reducing balance. The formula is the standard PMT (payment) calculation: M = P × [r(1+r)^n] ÷ [(1+r)^n − 1], where P = loan amount, r = monthly interest rate (annual rate ÷ 12), and n = total months. Our calculator uses this exact formula." } },
        { "@type": "Question", name: "What is a flexi home loan and is it worth it in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "A flexi home loan links your current account to your mortgage. Any deposits in the account reduce your daily outstanding balance, which reduces interest charged. You can also withdraw funds when needed. Semi-flexi accounts allow lump-sum payments but no withdrawals. Flexi loans typically have slightly higher rates (0.1–0.2%) but the interest savings from excess deposits can outweigh this if you have significant cash flow." } },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  { q: "What is the current home loan interest rate in Malaysia in 2025?", a: "Malaysian home loan rates are pegged to the OPR set by Bank Negara Malaysia. As of mid-2025, effective home loan rates range from approximately 3.4% to 4.6% p.a. depending on your bank, credit profile, and loan amount. Islamic home financing carries similar rates as profit rates." },
  { q: "How much down payment is needed for a house in Malaysia?", a: "For a first property (any price), banks can finance up to 90% — requiring a 10% down payment. For a second property, the maximum margin of finance drops to 70% (30% down). For third property and above, the cap remains 70%. These are BNM guidelines." },
  { q: "What is the maximum mortgage tenure in Malaysia?", a: "Bank Negara Malaysia caps residential home loan tenure at 35 years, or until the borrower reaches age 70, whichever is earlier. If you are 40 years old, your maximum loan tenure is 30 years (to age 70)." },
  { q: "What income do I need to qualify for a home loan in Malaysia?", a: "Malaysian banks use Debt Service Ratio (DSR) — total monthly debt ÷ gross income. Most banks cap DSR at 60–70%. For a RM2,000/month mortgage, you typically need gross income of at least RM3,333–RM5,000. Use our DSR Calculator for your specific situation." },
  { q: "What extra costs should I budget for beyond the down payment?", a: "Budget for: stamp duty on MOT (1–3%), legal fees for SPA and loan (0.4–0.8%), valuation fee (~0.25%), MRTA/MLTA insurance (1–3% of loan), fire insurance (~RM200–500/year), and bank processing fees. First-time buyers for sub-RM500k properties may qualify for stamp duty exemptions." },
  { q: "Should I choose a 25-year or 30-year mortgage?", a: "For RM400,000 at 4%: 25 years costs ~RM233,600 in total interest; 30 years costs ~RM287,600 — RM54,000 more. Choose the shortest tenure your DSR and monthly budget allow. Every year shorter saves thousands in total interest." },
  { q: "What is the difference between conventional and Islamic home financing in Malaysia?", a: "Conventional mortgages charge interest on the outstanding balance. Islamic home financing (Murabahah or MM) uses profit-rate structures with no riba. Practically, monthly payments and effective costs are similar. Both are available at major Malaysian banks." },
  { q: "Can I use EPF savings for a home loan down payment in Malaysia?", a: "Yes. EPF Account Flexible (formerly Account 2) can be withdrawn for property purchase to fund the down payment or reduce outstanding principal. The maximum withdrawal depends on your EPF balance and the property price." },
  { q: "How do Malaysian banks calculate the mortgage monthly payment?", a: "Malaysian home loans use reducing balance: M = P × [r(1+r)^n] ÷ [(1+r)^n − 1], where P = loan amount, r = monthly interest rate (annual ÷ 12), n = total months. Interest falls each month as the outstanding balance reduces." },
  { q: "What is a flexi home loan in Malaysia?", a: "A flexi home loan links your current account to your mortgage. Deposits reduce your daily outstanding balance, reducing interest charged. Semi-flexi allows lump-sum payments only. Flexi loans typically have slightly higher rates (0.1–0.2%) but can save more if you maintain significant deposits." },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/car-loan-calculator-malaysia", title: "Car Loan Calculator", emoji: "🚗", desc: "Calculate hire purchase monthly instalment" },
  { href: "/dsr-calculator-malaysia", title: "DSR Calculator", emoji: "📊", desc: "Check your Debt Service Ratio before applying" },
  { href: "/loan-calculator", title: "Personal Loan Calculator", emoji: "💳", desc: "Reducing balance loan repayments" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Calculate your monthly take-home pay" },
  { href: "/savings-calculator-malaysia", title: "Savings Calculator", emoji: "🏦", desc: "Project your savings towards a down payment" },
  { href: "/epf-calculator-malaysia", title: "EPF Calculator", emoji: "🏛️", desc: "Check EPF balance for property withdrawal" },
  { href: "/income-tax-calculator-malaysia", title: "Income Tax Calculator", emoji: "📋", desc: "Calculate your annual income tax" },
  { href: "/compound-interest-calculator", title: "Compound Interest", emoji: "📈", desc: "Grow your savings for a down payment" },
];

export default function MortgagePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />

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
            Calculate your home loan monthly repayment using the reducing balance method. Get full amortisation, total interest cost, stamp duty estimate, and income eligibility in seconds.
          </p>
        </div>
      </div>

      <MortgageCalculator />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        {/* EEAT Author Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Written by <a href="/author/alvin-chan" className="text-blue-600 hover:underline">Alvin Chan</a></p>
              <p className="text-xs text-gray-500 mt-0.5">Reviewed by the SmartCalc Editorial Team · Last updated: 25 June 2025</p>
              <p className="text-xs text-gray-400 mt-0.5">Sources: Bank Negara Malaysia, JPPH, EPF, Stamp Act 1949</p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Malaysia Home Loan Complete Guide (2025)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Buying property in Malaysia is typically the single largest financial commitment a person makes. Getting it right requires understanding not just the monthly repayment, but the total cost of ownership over 25–35 years, the income needed to qualify, all the hidden costs on top of the purchase price, and how choosing a shorter or longer tenure affects your lifetime financial health.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            This guide covers everything: how Malaysian home loans are calculated, three fully worked examples with real property prices, a comparison of conventional vs Islamic financing, stamp duty tables, DSR calculations, and proven strategies to reduce your total interest paid. All calculations follow <a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bank Negara Malaysia</a> guidelines current as of 2025.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Malaysian Home Loans Are Calculated</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike car loans (flat rate), Malaysian home loans use the <strong>reducing balance method</strong>. Each month, interest is charged only on the outstanding balance — not the original loan. As you repay principal, the interest component decreases. The standard PMT formula used by all Malaysian banks:
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-800 mb-2">Monthly Repayment Formula (PMT)</p>
            <div className="font-mono text-sm text-gray-700 space-y-1">
              <p>M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]</p>
              <p className="text-gray-500 text-xs mt-2">P = loan amount, r = monthly rate (annual rate ÷ 12), n = total months</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            The key benefit of reducing balance: every additional payment you make goes entirely to reducing principal, which shrinks future interest charges. This is why making extra payments early in a mortgage saves disproportionately more than making the same extra payment near the end.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Worked Examples — Real Malaysian Property Prices</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 1: First Home — RM350,000 Condominium</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            A first-time buyer purchasing a condo in Selangor or KL fringe at RM350,000 with 90% financing:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">Property Price:</span><span>RM 350,000</span>
              <span className="font-medium">Down Payment (10%):</span><span>RM 35,000</span>
              <span className="font-medium">Loan Amount:</span><span>RM 315,000</span>
              <span className="font-medium">Interest Rate:</span><span>4.0% p.a. (reducing balance)</span>
              <span className="font-medium">Tenure:</span><span>30 years (360 months)</span>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-3 text-sm font-mono text-gray-700">
            <p>r = 4.0% ÷ 12 = 0.3333% per month</p>
            <p>Monthly = RM315,000 × [0.003333 × (1.003333)³⁶⁰] ÷ [(1.003333)³⁶⁰ − 1]</p>
            <p>Monthly Repayment = <strong>RM1,503.19/month</strong></p>
            <p>Total Repayment = RM1,503.19 × 360 = <strong>RM541,148</strong></p>
            <p>Total Interest = RM541,148 − RM315,000 = <strong>RM226,148</strong></p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Minimum gross income needed (DSR 60%): RM1,503.19 ÷ 0.60 = ~RM2,506/month. Additional upfront costs: stamp duty MOT ~RM5,500, legal fees ~RM5,000, valuation ~RM875. Total cash needed: ~RM46,375.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 2: Family Home — RM550,000 Terrace</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            A family upgrading to a double-storey terrace in Petaling Jaya or Subang, with 20% down payment to improve approval odds:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">Property Price:</span><span>RM 550,000</span>
              <span className="font-medium">Down Payment (20%):</span><span>RM 110,000</span>
              <span className="font-medium">Loan Amount:</span><span>RM 440,000</span>
              <span className="font-medium">Interest Rate:</span><span>3.8% p.a.</span>
              <span className="font-medium">Tenure:</span><span>25 years (300 months)</span>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Monthly Repayment = <strong>RM2,286.71/month</strong></p>
            <p>Total Repayment = <strong>RM685,713</strong></p>
            <p>Total Interest = <strong>RM245,713</strong></p>
            <p>Minimum gross income needed: RM2,286.71 ÷ 0.60 = <strong>~RM3,811/month</strong></p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 3: Second Property Investment — RM800,000 Semi-D</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            An investor buying a second property. BNM rules cap financing at 70%, requiring a 30% down payment:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">Property Price:</span><span>RM 800,000</span>
              <span className="font-medium">Down Payment (30%):</span><span>RM 240,000</span>
              <span className="font-medium">Loan Amount:</span><span>RM 560,000</span>
              <span className="font-medium">Interest Rate:</span><span>4.2% p.a.</span>
              <span className="font-medium">Tenure:</span><span>30 years</span>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Monthly Repayment = <strong>RM2,740.09/month</strong></p>
            <p>Total Repayment = <strong>RM986,432</strong></p>
            <p>Total Interest = <strong>RM426,432</strong></p>
            <p>With existing car loan RM900/month: combined DSR needs income of at least <strong>RM5,900+/month</strong></p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table 1: Loan Tenure Impact (RM400,000 @ 4%)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Tenure</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Monthly</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Total Repayment</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Total Interest</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Extra vs 25yr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20 years", "RM 2,424", "RM 581,760", "RM 181,760", "−RM 51,840"],
                  ["25 years", "RM 2,112", "RM 633,600", "RM 233,600", "—"],
                  ["30 years", "RM 1,910", "RM 687,600", "RM 287,600", "+RM 54,000"],
                  ["35 years", "RM 1,766", "RM 741,720", "RM 341,720", "+RM 108,120"],
                ].map(([t, m, tr, ti, e]) => (
                  <tr key={t} className={`border border-gray-200 ${t === "25 years" ? "bg-blue-50 font-medium" : ""}`}>
                    <td className="p-3 text-gray-700">{t}</td>
                    <td className="p-3 text-right text-gray-700">{m}</td>
                    <td className="p-3 text-right text-gray-700">{tr}</td>
                    <td className="p-3 text-right text-gray-700">{ti}</td>
                    <td className={`p-3 text-right font-medium ${e.startsWith("-") ? "text-green-600" : e === "—" ? "text-gray-500" : "text-red-600"}`}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table 2: Conventional vs Islamic Home Financing</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-blue-700">Conventional</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-green-700">Islamic (MM / Murabahah)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Basis", "Interest on outstanding balance", "Profit rate / equity sharing"],
                  ["Riba (interest)", "Yes", "No"],
                  ["Rate type", "Variable (BR + spread)", "Variable or fixed options"],
                  ["Monthly payment", "Can change with OPR", "May be fixed for initial period"],
                  ["Effective monthly cost", "Typically similar", "Typically similar"],
                  ["Early settlement", "Based on outstanding balance", "Based on outstanding balance (similar)"],
                  ["Available at", "All major banks", "All major banks (Islamic window)"],
                  ["Suitable for", "Any borrower", "Muslim borrowers or those preferring fixed rates"],
                ].map(([f, a, b]) => (
                  <tr key={f} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{f}</td>
                    <td className="p-3 text-right text-gray-600">{a}</td>
                    <td className="p-3 text-right text-gray-600">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stamp Duty & Upfront Costs — What to Budget</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The down payment is only part of the cash you need to buy a house in Malaysia. The Memorandum of Transfer (MOT) stamp duty alone can add RM5,000–RM24,000 to the cost of a typical property. Here is the full breakdown for a RM550,000 property:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Cost Item</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Rate</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Estimate (RM550k)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Stamp Duty (MOT)", "1% on RM100k, 2% on RM100k–500k, 3% above", "RM 15,500"],
                  ["SPA Legal Fee", "Scaled (Solicitors Act)", "~RM 3,000–4,500"],
                  ["Loan Agreement Legal Fee", "Scaled on loan amount", "~RM 2,500–4,000"],
                  ["Valuation Fee", "~0.25% of property value", "~RM 1,375"],
                  ["MRTA Insurance (5yr cover)", "~1–1.5% of loan", "~RM 4,400–6,600"],
                  ["Fire Insurance (1st year)", "Based on sum insured", "~RM 300–600"],
                  ["Bank Processing Fee", "Varies per bank", "RM 0–500"],
                ].map(([item, rate, est]) => (
                  <tr key={item} className="border border-gray-200">
                    <td className="p-3 text-gray-700">{item}</td>
                    <td className="p-3 text-right text-gray-500 text-xs">{rate}</td>
                    <td className="p-3 text-right font-medium text-gray-800">{est}</td>
                  </tr>
                ))}
                <tr className="border border-gray-200 bg-blue-50 font-bold">
                  <td className="p-3 text-gray-800">Total Upfront (excluding DP)</td>
                  <td className="p-3 text-right"></td>
                  <td className="p-3 text-right text-blue-700">~RM 27,000–33,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            First-time buyers who purchase a property below RM500,000 may qualify for <strong>full stamp duty exemption on the MOT</strong> under government initiatives — check the latest conditions at LHDN or consult your property lawyer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">DSR Check Before You Apply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Banks in Malaysia calculate your <strong>Debt Service Ratio (DSR)</strong> — total monthly debt commitments divided by gross income. If your DSR exceeds the bank&apos;s threshold (typically 60–70%), your application will be rejected regardless of your salary.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-4 text-sm">
            <p className="font-semibold text-gray-800 mb-2">Example DSR Calculation:</p>
            <div className="text-gray-700 space-y-1">
              <p>Monthly Salary: RM 6,000</p>
              <p>Car Loan: RM 900 | Credit Card Minimum: RM 200</p>
              <p>Proposed Mortgage: RM 2,000</p>
              <p className="mt-2 font-medium">DSR = (900 + 200 + 2,000) ÷ 6,000 = <span className="text-blue-700">51.7%</span> ✓ (below 60%)</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Use our <a href="/dsr-calculator-malaysia" className="text-blue-600 hover:underline">DSR Calculator</a> to check your exact ratio before applying. Also use our <a href="/salary-calculator-malaysia" className="text-blue-600 hover:underline">Salary Calculator</a> to confirm your net take-home pay versus the proposed mortgage burden.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using EPF for Home Purchase</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The <a href="https://www.kwsp.gov.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Employees Provident Fund (EPF)</a> allows members to withdraw from their Account Flexible (Akaun Fleksibel) to assist with property purchase. Funds can be used for the down payment or to reduce the outstanding loan principal. The withdrawal reduces your future EPF retirement balance, so weigh the trade-off carefully. Withdrawals are only permitted for residential properties and must be supported by a valid Sale and Purchase Agreement. Use our <a href="/epf-calculator-malaysia" className="text-blue-600 hover:underline">EPF Calculator</a> to estimate your Account 2 balance before planning this.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategies to Pay Off Your Mortgage Faster</h2>
          <ul className="text-gray-600 space-y-3 mb-8">
            <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">1.</span><span><strong>Round up your monthly payment.</strong> If your instalment is RM1,910/month, round up to RM2,000. That RM90 extra goes entirely to principal and can cut years off your loan term.</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">2.</span><span><strong>Make a 13th payment each year.</strong> Putting one full extra payment toward principal annually can reduce a 30-year loan by 4–5 years.</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">3.</span><span><strong>Use a flexi home loan.</strong> Park your savings and emergency fund in the linked current account. Your savings reduce the daily outstanding balance, saving interest while remaining withdrawable.</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">4.</span><span><strong>Make lump-sum partial settlements from bonuses or EPF.</strong> Every RM10,000 principal reduction early in the loan saves multiples in future interest.</span></li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">5.</span><span><strong>Refinance if rates drop significantly.</strong> Consider refinancing if you can secure a rate at least 0.5% lower. Factor in legal and valuation costs (RM5,000–RM10,000) to ensure net savings justify the switch.</span></li>
          </ul>

          {/* Related Guides */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { href: "/guides/housing-loan-eligibility-malaysia", title: "Home Loan Eligibility Guide", desc: "Income, DSR and CCRIS requirements explained" },
              { href: "/guides/first-home-buyer-guide-malaysia", title: "First-Time Buyer Guide Malaysia", desc: "Step-by-step process from offer to keys" },
              { href: "/guides/what-salary-to-afford-house-malaysia", title: "What Salary to Afford a House?", desc: "Income needed for different property price ranges" },
              { href: "/guides/housing-loan-margin-of-finance-malaysia", title: "Margin of Finance Guide", desc: "How banks determine how much they lend" },
              { href: "/guides/refinancing-guide-malaysia", title: "Refinancing Your Home Loan", desc: "When and how to refinance for lower rates" },
              { href: "/guides/personal-loan-vs-housing-loan-malaysia", title: "Personal Loan vs Housing Loan", desc: "Which financing option is right for you" },
            ].map((g) => (
              <a key={g.href} href={g.href} className="flex flex-col bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                <span className="font-semibold text-sm text-gray-800">{g.title}</span>
                <span className="text-xs text-gray-500 mt-0.5">{g.desc}</span>
              </a>
            ))}
          </div>

          {/* Official References */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Official References</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Bank Negara Malaysia (BNM)</a> — Housing loan policy guidelines, OPR, Base Rate announcements</li>
            <li><a href="https://www.jpph.gov.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Jabatan Penilaian dan Perkhidmatan Harta (JPPH)</a> — Official property valuation data and market statistics</li>
            <li><a href="https://www.kwsp.gov.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Kumpulan Wang Simpanan Pekerja (EPF/KWSP)</a> — EPF housing withdrawal guidelines and eligibility</li>
            <li><a href="https://www.hasil.gov.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Lembaga Hasil Dalam Negeri (LHDN)</a> — Stamp duty rates and first-time buyer exemption criteria</li>
          </ul>
        </div>
      </CalcSeoSection>
      <Footer />
    </>
  );
}
