import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarLoanCalculator from "./CarLoanCalculator";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Car Loan Calculator Malaysia 2025 | Hire Purchase Instalment Estimator",
  description:
    "Calculate your car hire purchase monthly instalment in Malaysia instantly. Uses the official flat rate method with full amortisation breakdown. Covers Proton, Perodua, Toyota and all brands.",
  keywords: [
    "car loan calculator Malaysia",
    "hire purchase calculator Malaysia",
    "monthly instalment calculator",
    "kereta loan calculator",
    "HP calculator Malaysia",
    "car financing flat rate",
  ],
  alternates: { canonical: `${SITE_URL}/car-loan-calculator-malaysia` },
  openGraph: {
    title: "Car Loan Calculator Malaysia 2025 — Hire Purchase Instalment",
    description:
      "Calculate your monthly car loan instalment using Malaysia's hire purchase flat rate method. Full amortisation, effective rate, and real cost breakdown.",
    url: `${SITE_URL}/car-loan-calculator-malaysia`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Loan Calculator Malaysia",
    description: "Calculate hire purchase monthly instalment for any Malaysian car model. Flat rate method with full breakdown.",
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
      description: "Calculate Malaysia hire purchase monthly instalment using flat rate method.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators` },
        { "@type": "ListItem", position: 3, name: "Car Loan Calculator", item: `${SITE_URL}/car-loan-calculator-malaysia` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How is a car loan calculated in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Malaysian car loans use hire purchase (HP) with a flat rate. Total interest = loan amount × flat rate % × years. Monthly instalment = (loan amount + total interest) ÷ total months. The interest does not decrease as you repay — it is fixed on the original principal." } },
        { "@type": "Question", name: "What is the minimum down payment for a car loan in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Most Malaysian banks require a minimum 10% down payment. However, this is a banking practice, not a legal requirement under the Hire Purchase Act 1967. Some banks offer up to 100% financing for borrowers with excellent credit (CCRIS/CTOS) and stable income." } },
        { "@type": "Question", name: "What is the typical car loan interest rate in Malaysia in 2025?", acceptedAnswer: { "@type": "Answer", text: "Hire purchase flat rates for new cars in Malaysia typically range from 2.5% to 3.5% p.a. Perodua and Proton models often attract the lowest rates (around 2.5–2.8%). Used cars and non-national brands can reach 3.5–4.5%. Islamic hire purchase (Al-Ijarah Thumma Al-Bay') has similar effective rates." } },
        { "@type": "Question", name: "What is the maximum car loan tenure in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Bank Negara Malaysia guidelines cap hire purchase tenure at 9 years for passenger cars. Commercial vehicles may have different limits. Most buyers choose 5 to 7 years — 9 years maximises the amount you pay in interest while providing the lowest monthly instalment." } },
        { "@type": "Question", name: "What is the difference between flat rate and reducing balance for a car loan?", acceptedAnswer: { "@type": "Answer", text: "Flat rate applies interest to the original loan amount for the entire tenure regardless of repayments made. Reducing balance (used for home loans) applies interest only to the outstanding balance. A 3% flat rate is roughly equivalent to a 5.4–5.7% reducing balance effective rate. This is why you cannot directly compare car loan rates to home loan rates." } },
        { "@type": "Question", name: "How does early settlement work for car loans in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Under the Hire Purchase Act 1967, early settlement rebates in Malaysia use the Rule of 78. Rebate = total finance charge × [n(n+1)/2 ÷ N(N+1)/2], where n = remaining instalments and N = original total instalments. The earlier you settle, the larger the rebate but it is always less than the remaining unearned interest." } },
        { "@type": "Question", name: "Can I get a 100% car loan in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Yes, 100% financing (no down payment) is available from some Malaysian banks for borrowers with a strong credit history, stable employment, and good CCRIS records. However, 100% loans typically carry slightly higher flat rates and require comprehensive insurance. Most financial advisors recommend at least 10% down to reduce total interest paid." } },
        { "@type": "Question", name: "How does my CCRIS or CTOS score affect car loan approval?", acceptedAnswer: { "@type": "Answer", text: "Banks in Malaysia check CCRIS (Credit Reporting Agency, via BNM) and CTOS before approving any hire purchase. Key factors: existing commitments relative to income (DSR), payment history on existing loans, number of active credit facilities, and whether you have any legal action or bankruptcy record. Clean CCRIS with DSR below 60% gives the best approval odds and rates." } },
        { "@type": "Question", name: "Is a 5-year or 9-year car loan better in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Shorter tenure is almost always financially better. For a RM90,000 loan at 3% flat: 5-year total interest = RM13,500 (monthly RM1,725); 9-year total interest = RM24,300 (monthly RM1,115). The 9-year option costs RM10,800 more in interest for RM610 less monthly. Choose the shortest tenure your income and DSR permit." } },
        { "@type": "Question", name: "What are the total costs of buying a car beyond the loan?", acceptedAnswer: { "@type": "Answer", text: "Beyond the hire purchase instalment, budget for: road tax (based on engine cc, ~RM90–RM2,000+ annually), comprehensive insurance (1–3% of car value annually), annual service and maintenance (RM300–RM2,000), toll and fuel, and potential AP/import duty for foreign models. The loan instalment is typically only 60–70% of true monthly ownership cost." } },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  { q: "How is a car loan calculated in Malaysia?", a: "Malaysian car loans use hire purchase (HP) with a flat rate. Total interest = loan amount × flat rate % × years. Monthly instalment = (loan amount + total interest) ÷ total months. The interest does not decrease as you repay — it is fixed on the original principal for the entire tenure." },
  { q: "What is the minimum down payment for a car loan in Malaysia?", a: "Most Malaysian banks require a minimum 10% down payment. This is a banking practice, not a legal requirement. Some banks offer up to 100% financing for borrowers with excellent CCRIS records and stable income, though 100% loans typically carry higher rates." },
  { q: "What is the typical car loan interest rate in Malaysia in 2025?", a: "Hire purchase flat rates for new cars typically range from 2.5% to 3.5% p.a. Perodua and Proton models often attract 2.5–2.8%. Used cars and foreign brands can reach 3.5–4.5%. Rates vary between banks — it pays to compare at least three lenders." },
  { q: "What is the maximum car loan tenure in Malaysia?", a: "Bank Negara Malaysia guidelines cap hire purchase tenure at 9 years for passenger cars. Most buyers choose 5–7 years. Taking the full 9 years minimises monthly payments but significantly increases total interest paid." },
  { q: "What is the difference between flat rate and reducing balance?", a: "Flat rate applies interest to the original loan amount for the entire tenure regardless of repayments. Reducing balance (used for home loans) applies interest only to the outstanding balance. A 3% flat rate is roughly equivalent to a 5.4–5.7% reducing balance effective rate — this is why you cannot directly compare them." },
  { q: "How does early settlement work for car loans in Malaysia?", a: "Under the Hire Purchase Act 1967, early settlement rebates use the Rule of 78. The earlier you settle, the larger the rebate, but it is always less than the total remaining unearned interest. Contact your bank for the exact settlement figure." },
  { q: "Can I get a 100% car loan in Malaysia?", a: "Yes, 100% financing is available from some banks for borrowers with strong credit, stable employment, and clean CCRIS records. 100% loans typically carry slightly higher rates. Most advisors recommend at least 10% down to reduce total interest paid." },
  { q: "How does my CCRIS or CTOS score affect car loan approval?", a: "Banks check CCRIS (via BNM) and CTOS before approving hire purchase. Key factors: your debt service ratio (DSR), payment history on existing loans, number of active credit facilities, and any legal/bankruptcy records. Clean CCRIS with DSR below 60% gives the best approval odds." },
  { q: "Is a 5-year or 9-year car loan better in Malaysia?", a: "Shorter tenure is almost always financially better. For a RM90,000 loan at 3% flat: 5-year total interest = RM13,500 (monthly RM1,725); 9-year total interest = RM24,300 (monthly RM1,115). The 9-year option costs RM10,800 more for RM610 less monthly. Choose the shortest tenure your DSR allows." },
  { q: "What are the total costs of buying a car beyond the loan?", a: "Beyond the monthly instalment, budget for: road tax (~RM90–RM2,000+ annually based on cc), comprehensive insurance (1–3% of car value), annual servicing (RM300–RM2,000), toll, and fuel. The loan instalment is typically only 60–70% of true monthly car ownership cost." },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/mortgage-calculator-malaysia", title: "Mortgage Calculator", emoji: "🏠", desc: "Calculate home loan monthly repayment" },
  { href: "/loan-calculator", title: "Personal Loan Calculator", emoji: "💳", desc: "Reducing balance loan repayments" },
  { href: "/dsr-calculator-malaysia", title: "DSR Calculator", emoji: "📊", desc: "Check your Debt Service Ratio" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Calculate your monthly take-home pay" },
  { href: "/savings-calculator-malaysia", title: "Savings Calculator", emoji: "🏦", desc: "Project your savings growth" },
  { href: "/compound-interest-calculator", title: "Compound Interest", emoji: "📈", desc: "See how investments grow over time" },
  { href: "/income-tax-calculator-malaysia", title: "Income Tax Calculator", emoji: "📋", desc: "Calculate your annual tax payable" },
  { href: "/epf-calculator-malaysia", title: "EPF Calculator", emoji: "🏛️", desc: "Project your retirement savings" },
];

export default function CarLoanPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />

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
            Calculate your monthly hire purchase instalment using Malaysia&apos;s flat rate method. Enter car price, down payment, interest rate and loan tenure for a full cost breakdown.
          </p>
        </div>
      </div>

      <CarLoanCalculator />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        {/* EEAT Author Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Written by <a href="/author/alvin-chan" className="text-orange-600 hover:underline">Alvin Chan</a></p>
              <p className="text-xs text-gray-500 mt-0.5">Reviewed by the SmartCalc Editorial Team · Last updated: 25 June 2025</p>
              <p className="text-xs text-gray-400 mt-0.5">Sources: Bank Negara Malaysia, Hire Purchase Act 1967, JPJ, CCRIS</p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Car Loan in Malaysia — The Complete Hire Purchase Guide (2025)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Buying a car in Malaysia means entering a <strong>hire purchase (HP)</strong> agreement — a financing structure governed by the <a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Bank Negara Malaysia</a> and the Hire Purchase Act 1967. Unlike a regular loan where interest reduces as you pay down principal, hire purchase charges interest on the <em>full original amount</em> for the entire tenure. This distinction is critical — it affects how much you truly pay, how early settlement is calculated, and whether taking a 5-year or 9-year loan makes financial sense for you.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            This guide explains how every ringgit of your car instalment is calculated, with three fully worked examples using real car prices from the Malaysian market. You will also find a detailed comparison of flat rate vs reducing balance, common buyer mistakes, and strategies to minimise total interest paid.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Malaysian Hire Purchase Interest Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under a Malaysian hire purchase agreement, the bank technically <em>owns</em> the car until your final instalment. You pay a fixed monthly amount that covers both principal and interest. The interest is calculated upfront on the original loan balance — not on the reducing outstanding balance — which is why the method is called a <strong>flat rate</strong>.
          </p>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-800 mb-3">The Hire Purchase Formula</p>
            <div className="space-y-1.5 text-sm text-gray-700 font-mono">
              <p>Loan Amount = Car Price − Down Payment</p>
              <p>Total Interest = Loan Amount × Flat Rate (%) × Years</p>
              <p>Total Repayment = Loan Amount + Total Interest</p>
              <p>Monthly Instalment = Total Repayment ÷ (Years × 12)</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            The key insight: if your loan amount is RM90,000 and the flat rate is 3%, you pay 3% of RM90,000 every year — even in year 7 when you may have already repaid RM70,000 of principal. This is fundamentally different from a home loan, where interest in year 7 would only apply to the RM20,000 remaining balance.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Worked Examples — Real Malaysian Car Prices</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 1: Perodua Ativa (Budget Family Car)</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            The Perodua Ativa 1.0L Turbo H is one of Malaysia&apos;s best-selling small SUVs. Here&apos;s a typical hire purchase scenario:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">OTR Price:</span><span>RM 62,500</span>
              <span className="font-medium">Down Payment (10%):</span><span>RM 6,250</span>
              <span className="font-medium">Loan Amount:</span><span>RM 56,250</span>
              <span className="font-medium">Flat Rate:</span><span>2.8% p.a.</span>
              <span className="font-medium">Tenure:</span><span>7 years (84 months)</span>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Total Interest = RM56,250 × 2.8% × 7 = <strong>RM11,025.00</strong></p>
            <p>Total Repayment = RM56,250 + RM11,025 = <strong>RM67,275.00</strong></p>
            <p>Monthly Instalment = RM67,275 ÷ 84 = <strong>RM800.89/month</strong></p>
            <p className="mt-2">Effective rate ≈ 2.8% × 1.84 = <strong>~5.1% reducing balance equivalent</strong></p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 2: Proton X70 (Mid-Range SUV, Larger Down Payment)</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            The Proton X70 is a popular choice for families upgrading from a national car. With a 20% down payment and 9-year tenure:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">OTR Price:</span><span>RM 118,800</span>
              <span className="font-medium">Down Payment (20%):</span><span>RM 23,760</span>
              <span className="font-medium">Loan Amount:</span><span>RM 95,040</span>
              <span className="font-medium">Flat Rate:</span><span>3.0% p.a.</span>
              <span className="font-medium">Tenure:</span><span>9 years (108 months)</span>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-3 text-sm font-mono text-gray-700">
            <p>Total Interest = RM95,040 × 3.0% × 9 = <strong>RM25,660.80</strong></p>
            <p>Total Repayment = RM95,040 + RM25,660.80 = <strong>RM120,700.80</strong></p>
            <p>Monthly Instalment = RM120,700.80 ÷ 108 = <strong>RM1,117.60/month</strong></p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Compare: if you chose a 5-year tenure instead, the monthly would be RM1,901 but total interest drops to RM14,256 — saving RM11,404 over the life of the loan. This illustrates the enormous cost of choosing maximum tenure just to lower monthly payments.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 3: Toyota Camry (Executive Sedan)</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            For a higher-value foreign brand vehicle where the interest rate is slightly elevated:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">OTR Price:</span><span>RM 199,900</span>
              <span className="font-medium">Down Payment (20%):</span><span>RM 39,980</span>
              <span className="font-medium">Loan Amount:</span><span>RM 159,920</span>
              <span className="font-medium">Flat Rate:</span><span>3.3% p.a.</span>
              <span className="font-medium">Tenure:</span><span>5 years (60 months)</span>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Total Interest = RM159,920 × 3.3% × 5 = <strong>RM26,386.80</strong></p>
            <p>Total Repayment = RM159,920 + RM26,386.80 = <strong>RM186,306.80</strong></p>
            <p>Monthly Instalment = RM186,306.80 ÷ 60 = <strong>RM3,105.11/month</strong></p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table 1: Flat Rate vs Reducing Balance</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Many Malaysians mistakenly compare their car loan flat rate directly to their home loan rate. They are calculated differently and cannot be compared at face value.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-orange-700">Flat Rate (HP)</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-blue-700">Reducing Balance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Interest applied to", "Original principal (full term)", "Outstanding balance only"],
                  ["Monthly interest falls over time", "No — fixed throughout", "Yes — decreases each month"],
                  ["Transparency of true cost", "Less transparent", "More transparent (APR = stated rate)"],
                  ["Stated vs effective rate", "Stated rate × ~1.8 = effective", "Stated rate = effective rate"],
                  ["Typical stated rate (MY)", "2.5–3.5% (cars)", "3.5–4.5% (home loans)"],
                  ["Typical effective rate (MY)", "~4.5–6.3%", "~3.5–4.5%"],
                  ["Early settlement", "Rule of 78 rebate", "Simple outstanding balance"],
                  ["Used for", "All car hire purchase in MY", "Home loans, personal loans"],
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
          <p className="text-gray-600 leading-relaxed mb-6">
            The approximate conversion rule: <strong>Effective rate ≈ Flat rate × 1.8</strong>. So a 3.0% flat rate is roughly equivalent to a 5.4% reducing balance rate. When comparing financing options, always convert to the same basis before deciding.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table 2: Car Loan vs Personal Loan for Vehicle Purchase</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some buyers consider a personal loan to fund a vehicle purchase, particularly for used cars or motorbikes. Here is how the two options compare:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-orange-700">Hire Purchase</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-purple-700">Personal Loan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Collateral", "Vehicle (bank owns until paid)", "None (unsecured)"],
                  ["Flat rate", "2.5–3.5%", "6–12%"],
                  ["Effective rate (approx.)", "~4.5–6.3%", "~11–22%"],
                  ["Maximum tenure", "9 years", "7 years (most banks)"],
                  ["Down payment", "Typically 10% required", "Not required"],
                  ["Loan amount", "Up to 90% of OTR", "Usually RM1k–RM150k fixed"],
                  ["Approval speed", "1–3 business days", "Same day to 3 days"],
                  ["Best for", "New or used cars, main purchase", "Motorbikes, car accessories, low amounts"],
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

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Early Settlement Under the Hire Purchase Act 1967</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you decide to settle your car loan early — whether through windfall income, refinancing, or upgrading your car — you are entitled to an interest rebate under the <strong>Hire Purchase Act 1967</strong>. Malaysian banks use the <strong>Rule of 78</strong> method.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 text-sm">
            <p className="font-semibold text-gray-800 mb-2">Rule of 78 Formula:</p>
            <p className="font-mono text-gray-700">Rebate = Total Finance Charge × [n(n+1) ÷ N(N+1)]</p>
            <p className="text-gray-500 mt-1">Where n = remaining instalments, N = original total instalments</p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Example:</strong> You took a 7-year (84-month) loan and settle after 4 years (48 months paid). Remaining instalments n = 36. Total Finance Charge = RM11,025 (from Example 1 above).
          </p>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6 text-sm font-mono text-gray-700">
            <p>Rebate = RM11,025 × [36×37 ÷ 84×85]</p>
            <p>= RM11,025 × [1,332 ÷ 7,140]</p>
            <p>= RM11,025 × 0.1866 = <strong>RM2,057 rebate</strong></p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            This means your settlement amount = outstanding principal + remaining interest − rebate. Always request the exact <strong>settlement letter</strong> from your bank before paying — do not calculate this yourself for the actual transaction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes Malaysian Car Buyers Make</h2>
          <div className="space-y-4 mb-6">
            {[
              ["Comparing flat rate to home loan rate directly", "A 3% car loan flat rate and a 3% home loan rate are NOT the same. The home loan at 3% reducing balance is actually cheaper. Always convert to effective rate before comparing."],
              ["Choosing maximum tenure just for lower monthly payments", "A 9-year loan on RM90,000 costs RM10,800 more in interest than a 5-year loan. The lower monthly instalment feels comfortable but significantly increases total cost."],
              ["Not checking your DSR before visiting the showroom", "If your existing debt commitments already exceed 60–70% of gross income, you may be rejected regardless of how good the car deal is. Check your <a href='/dsr-calculator-malaysia' class='text-orange-600 hover:underline'>DSR</a> first."],
              ["Accepting the dealer's bank without comparison", "Dealers often have preferred banks and may present only one option. Rates for the same car can vary by 0.2–0.5% between banks — on a RM90,000 loan over 7 years, 0.3% = RM1,890 difference."],
              ["Not reading the HP agreement for lock-in clauses", "Some hire purchase agreements include conditions on insurance. The Hire Purchase Act 1967 allows you to choose your own insurer — you are not legally required to use the bank's panel insurer."],
              ["Forgetting the true OTR cost", "The OTR price includes road tax, comprehensive insurance (1st year), and registration fee. Some dealers quote base price without these. Confirm what exactly is included before signing."],
            ].map(([title, body]) => (
              <div key={title} className="border-l-4 border-orange-300 pl-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{title}</p>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Banks Look at When Approving Your Car Loan</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Malaysian banks assess car loan applications based on several factors, and understanding them helps you prepare before applying:
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-orange-500 font-bold">1.</span><span><strong>Debt Service Ratio (DSR):</strong> Total monthly debt ÷ gross income. Most banks cap at 60–70%. Use our <a href="/dsr-calculator-malaysia" className="text-orange-600 hover:underline">DSR Calculator</a> before applying.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">2.</span><span><strong>CCRIS/CTOS record:</strong> Any late payments, legal action, or default history will negatively affect approval. Check your record via <a href="https://www.bnm.gov.my/ccris" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">BNM CCRIS</a> before applying.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">3.</span><span><strong>Employment type and tenure:</strong> Salaried employees with ≥6 months tenure at current employer are preferred. Self-employed applicants typically need 2 years of consistent income proof (tax returns, bank statements).</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">4.</span><span><strong>Income level:</strong> Most banks have a minimum income threshold, typically RM1,500–RM2,000 monthly. Higher income opens doors to higher loan amounts and lower rates.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">5.</span><span><strong>Down payment amount:</strong> A larger down payment reduces the bank&apos;s risk. Offering 20% vs 10% down can sometimes unlock a lower flat rate.</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Scenarios: Which Option Makes Sense?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { scenario: "Fresh Graduate", car: "Perodua Myvi", strategy: "Take 7-year tenure to keep monthly below RM700. Clear PTPTN debt first to improve DSR. Choose Perodua or Proton for lower flat rate (~2.5%).", link: "/guides/rm3000-salary-budget-plan-malaysia", linkText: "RM3,000 budget plan →" },
              { scenario: "Family Upgrade", car: "Proton X70 / Honda HR-V", strategy: "Consider 5-year tenure if salary allows — saves RM10k+ in interest. Check if trading in old car can boost effective down payment above 20%.", link: "/guides/what-salary-to-afford-house-malaysia", linkText: "Affordability guide →" },
              { scenario: "Second Car", car: "Any used car", strategy: "Used car rates are 0.5–1% higher. Check DSR carefully — if existing home loan + new car HP exceed 70% of gross income, consider downsizing the purchase.", link: "/dsr-calculator-malaysia", linkText: "Check DSR →" },
            ].map((s) => (
              <div key={s.scenario} className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                <p className="font-bold text-gray-800 text-sm mb-1">{s.scenario}</p>
                <p className="text-xs text-orange-700 font-medium mb-2">{s.car}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-2">{s.strategy}</p>
                <a href={s.link} className="text-xs text-orange-600 hover:underline font-medium">{s.linkText}</a>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Misunderstood: Is Hire Purchase Islamic-Compliant?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Conventional hire purchase involves interest (riba), which is not permissible under Islamic finance. Malaysian banks offer an Islamic alternative called <strong>Al-Ijarah Thumma Al-Bay&apos; (AITAB)</strong> — a lease-to-own structure where the bank leases the car to you, and you purchase it at the end. The profit rate in AITAB is typically similar to conventional HP flat rates. You can find AITAB financing at Bank Islam, Maybank Islamic, CIMB Islamic, and other Islamic banking windows. The monthly payment calculation is identical to conventional HP from a numbers perspective.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips to Minimise Your Total Car Loan Cost</h2>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li className="flex gap-2"><span className="text-orange-500 font-bold">1.</span><span><strong>Save a larger down payment</strong> — every extra RM5,000 down saves RM5,000 in principal plus years of interest on that amount.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">2.</span><span><strong>Choose national cars for lower rates</strong> — Perodua and Proton buyers typically qualify for 2.5–2.8% flat vs 3.0–3.5% for foreign brands.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">3.</span><span><strong>Apply to multiple banks</strong> — rates vary. Submit applications to at least three banks and choose the lowest. Multiple HP inquiries within 30 days typically count as one inquiry in CCRIS.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">4.</span><span><strong>Take the shortest tenure your DSR allows</strong> — use our <a href="/dsr-calculator-malaysia" className="text-orange-600 hover:underline">DSR Calculator</a> and our <a href="/salary-calculator-malaysia" className="text-orange-600 hover:underline">Salary Calculator</a> to find your safe monthly ceiling.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">5.</span><span><strong>Consider year-end vs year-start</strong> — dealers often offer OTR discounts, free insurance, or rebates at year-end to clear stock. This effectively reduces your loan principal.</span></li>
          </ul>

          {/* Related Guides */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { href: "/guides/car-loan-eligibility-malaysia", title: "Car Loan Eligibility Guide", desc: "Who qualifies, income requirements, and how to improve your chances" },
              { href: "/guides/car-loan-interest-calculator-guide-malaysia", title: "Car Loan Interest Guide", desc: "Deep dive into how flat rate interest is calculated and compared" },
              { href: "/guides/how-to-check-ccris-malaysia", title: "How to Check Your CCRIS", desc: "Step-by-step guide to viewing your credit report via BNM" },
              { href: "/guides/how-to-improve-ctos-score-malaysia", title: "Improve Your CTOS Score", desc: "Actions that raise your creditworthiness for loan approval" },
              { href: "/guides/how-to-improve-loan-approval-malaysia", title: "Improve Loan Approval Odds", desc: "Practical steps to maximise approval rate before applying" },
              { href: "/guides/what-is-dsr-malaysia", title: "What Is DSR in Malaysia?", desc: "How banks calculate debt service ratio and what it means for you" },
            ].map((g) => (
              <a key={g.href} href={g.href} className="flex flex-col bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-orange-200 hover:bg-orange-50 transition-colors">
                <span className="font-semibold text-sm text-gray-800">{g.title}</span>
                <span className="text-xs text-gray-500 mt-0.5">{g.desc}</span>
              </a>
            ))}
          </div>

          {/* Official References */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Official References</h2>
          <ul className="text-sm text-gray-600 space-y-2 mb-4">
            <li><a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-medium">Bank Negara Malaysia (BNM)</a> — Regulator for hire purchase financing and consumer credit guidelines</li>
            <li><a href="https://www.bnm.gov.my/ccris" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-medium">BNM CCRIS Portal</a> — Check your credit report and repayment history</li>
            <li><a href="https://www.jpj.gov.my" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-medium">Jabatan Pengangkutan Jalan (JPJ)</a> — Road tax rates, vehicle registration, and transfer guidelines</li>
            <li><span className="font-medium text-gray-700">Hire Purchase Act 1967 (Act 212)</span> — Governs all hire purchase agreements in Malaysia including early settlement rules</li>
          </ul>
        </div>
      </CalcSeoSection>
      <Footer />
    </>
  );
}
