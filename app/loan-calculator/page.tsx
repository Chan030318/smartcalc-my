import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoanCalculator from "./LoanCalculator";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import JsonLd from "@/components/JsonLd";
import CalcSeoSection, { type CalcFaq, type RelatedCalc } from "@/components/CalcSeoSection";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/loan-calculator`;

export const metadata: Metadata = {
  title: "Loan Calculator Malaysia — Monthly Repayment & Amortisation",
  description:
    "Free loan calculator for Malaysia. Instantly calculate your monthly repayment, total interest, and annual amortisation schedule for personal loans, home loans, and car loans.",
  keywords: [
    "loan calculator Malaysia",
    "monthly repayment calculator Malaysia",
    "home loan calculator Malaysia",
    "personal loan calculator Malaysia",
    "car loan calculator Malaysia",
    "mortgage calculator Malaysia",
    "kalkulator pinjaman Malaysia",
    "loan interest calculator",
  ],
  alternates: { canonical: "/loan-calculator" },
  openGraph: {
    title: "Loan Calculator Malaysia — Monthly Repayment & Amortisation",
    description:
      "Calculate monthly repayments, total interest, and amortisation for any Malaysian loan. Free, instant, no sign-up.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Loan Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator Malaysia — Monthly Repayment",
    description: "Calculate monthly repayments and total interest for Malaysian loans. Free and instant.",
    images: ["/og-image.png"],
  },
};

const faqs: CalcFaq[] = [
  {
    q: "How is monthly loan repayment calculated in Malaysia?",
    a: "Malaysian banks use the reducing-balance method for most loans (home loans, personal loans, car loans). The monthly repayment is calculated as: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12), and n is the total number of monthly payments. This formula is applied by both conventional and Islamic banks (the latter as a profit rate).",
  },
  {
    q: "What is the difference between flat rate and reducing balance interest?",
    a: "Flat rate interest is calculated on the original loan amount throughout the tenure. Reducing balance (also called diminishing balance) calculates interest on the outstanding principal only — so as you pay down the loan, less interest accrues each month. For the same stated interest rate, a reducing balance loan costs significantly less in total interest than a flat rate loan. Malaysian housing and personal loans typically use reducing balance; some hire-purchase agreements use flat rates.",
  },
  {
    q: "What interest rates do Malaysian banks charge in 2024?",
    a: "Interest rates vary by loan type: Home loans (mortgage) typically range from 3.5%–4.5% per annum (linked to Base Rate / BLR). Personal loans range from 4%–18% per annum depending on your credit score and the bank. Car loans (hire purchase) typically range from 2.5%–3.5% per annum flat rate (equivalent to roughly 4.5%–6.5% effective rate). Islamic home financing rates are similar to conventional, structured as profit rates under Murabahah or BBA contracts.",
  },
  {
    q: "Should I choose a 25-year or 30-year home loan in Malaysia?",
    a: "A shorter tenure (25 years) means higher monthly repayments but significantly less total interest paid. A longer tenure (30 years) lowers monthly repayments and improves affordability but costs more in total interest. For example, a RM400,000 loan at 4% — 25 years costs RM249,000 in total interest vs RM287,000 for 30 years (difference of RM38,000). Choose based on your monthly cash flow, DSR, and financial goals. Use our calculator to compare both scenarios.",
  },
  {
    q: "What is the maximum loan tenure in Malaysia?",
    a: "Maximum loan tenures in Malaysia: Home loans — up to 35 years (or until age 70, whichever is shorter, per BNM guidelines). Car loans (hire purchase) — up to 9 years. Personal loans — typically 2–7 years. PTPTN student loans — up to 15 years. Bank Negara Malaysia caps the maximum home loan tenure to reduce systemic risk, and individual bank policies may be more conservative.",
  },
  {
    q: "How do I reduce the total interest on my loan?",
    a: "Strategies to reduce total loan interest: (1) Make extra lump-sum payments when possible — most Malaysian home loans allow prepayment without penalty. (2) Shorten your loan tenure by making higher monthly payments. (3) Refinance to a lower rate when your credit profile improves or when market rates drop. (4) Avoid skipping repayments, which triggers compounding late charges. Even one extra monthly repayment per year can shave years off a 30-year mortgage.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/dsr-calculator-malaysia", emoji: "🏦", title: "DSR Calculator Malaysia", desc: "Check if your Debt Service Ratio qualifies for a loan" },
  { href: "/salary-calculator-malaysia", emoji: "💰", title: "Salary Calculator Malaysia", desc: "See your take-home pay after all statutory deductions" },
  { href: "/epf-calculator-malaysia", emoji: "🏦", title: "EPF Calculator Malaysia", desc: "Project your KWSP retirement savings with dividends" },
  { href: "/income-tax-calculator-malaysia", emoji: "📊", title: "Income Tax Calculator Malaysia", desc: "Calculate your LHDN annual income tax payable" },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Loan Calculator Malaysia",
      url: PAGE_URL,
      description:
        "Free loan calculator for Malaysia with reducing-balance amortisation, monthly repayment, and annual schedule.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Loan Calculator", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function LoanCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Reducing Balance · Estimate Only
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Loan Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Estimate your monthly repayment, total interest cost, and year-by-year amortisation for any Malaysian loan — personal, home, or car.
            </p>
          </div>
        </section>
        <LoanCalculator />
        <FinancialDisclaimer />

        <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Loan Interest Works in Malaysia</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most loans in Malaysia — including home loans, personal loans, and car loans — use the <strong>reducing-balance</strong> method to calculate interest. Under this method, interest is charged on the outstanding principal balance each month. As you make repayments, the outstanding balance decreases, so less interest accrues in each subsequent month — and a larger portion of each payment goes toward reducing the principal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This is fundamentally different from the <strong>flat rate</strong> method used in some hire-purchase agreements, where interest is calculated on the full original loan amount throughout the entire tenure. For the same stated rate, a reducing-balance loan costs considerably less in total interest than a flat-rate loan — so comparing loans requires converting all rates to a common basis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Loan Interest Rates in Malaysia (2024)</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Loan Type</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Typical Rate</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Rate Type</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Max Tenure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Home Loan / Mortgage", "3.5% – 4.5% p.a.", "Variable (BFR-based)", "35 years"],
                    ["Islamic Home Financing", "3.5% – 4.5% p.a.", "Profit rate (variable)", "35 years"],
                    ["Personal Loan (bank)", "6% – 18% p.a.", "Fixed (reducing balance)", "7 years"],
                    ["Car Loan (hire purchase)", "2.5% – 3.5% p.a. flat", "Flat rate", "9 years"],
                    ["Personal Loan (licensed moneylender)", "Up to 18% p.a.", "Regulated flat rate", "—"],
                    ["PTPTN student loan", "1% p.a.", "Flat rate", "15 years"],
                  ].map(([type, rate, rtype, tenure]) => (
                    <tr key={type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{type}</td>
                      <td className="px-4 py-3 font-semibold text-purple-700">{rate}</td>
                      <td className="px-4 py-3 text-gray-600">{rtype}</td>
                      <td className="px-4 py-3 text-gray-600">{tenure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Rates are indicative ranges as of 2024. Actual rates depend on your credit profile, income, and the lender&#39;s assessment.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example: RM400,000 Home Loan Calculation</h2>
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">RM400,000 loan at 4.0% per annum — 25 vs 30 years</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    tenure: "25 Years",
                    monthly: "RM 2,112",
                    total: "RM 633,500",
                    interest: "RM 233,500",
                    color: "purple",
                  },
                  {
                    tenure: "30 Years",
                    monthly: "RM 1,910",
                    total: "RM 687,600",
                    interest: "RM 287,600",
                    color: "gray",
                  },
                ].map((s) => (
                  <div key={s.tenure} className="bg-white rounded-xl p-4 border border-purple-100">
                    <div className="font-bold text-gray-800 mb-3">{s.tenure} Tenure</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Monthly repayment</span><span className="font-semibold text-gray-800">{s.monthly}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Total repaid</span><span className="font-semibold text-gray-800">{s.total}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Total interest</span><span className="font-semibold text-red-600">{s.interest}</span></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-purple-100 rounded-xl px-4 py-3 text-sm text-purple-800">
                <strong>Choosing 25 years over 30 years saves RM54,100 in total interest</strong> — but monthly repayment is RM202 higher. Consider your DSR and monthly budget before deciding.
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Loans Available in Malaysia</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Malaysian borrowers have access to a range of loan products through banks, development financial institutions (DFIs), and licensed moneylenders. The main loan types are:
            </p>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Home Loan / Mortgage</strong> — Secured against property. Lowest interest rates among retail loans. Variable rate linked to the bank&#39;s Base Financing Rate (BFR). Maximum tenure 35 years or until age 70.</span></li>
              <li className="flex gap-2"><span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Personal Loan</strong> — Unsecured; no collateral required. Higher rates (6–18%) reflecting higher lender risk. Used for education, renovation, medical emergencies, or debt consolidation. Maximum 7-year tenure with banks; shorter with licensed moneylenders.</span></li>
              <li className="flex gap-2"><span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Car Loan / Hire Purchase</strong> — The bank technically owns the car until full repayment. Flat interest rate (2.5–3.5%), which is equivalent to a higher effective rate. Up to 9-year tenure. Early settlement incurs a Rule-of-78 rebate calculation.</span></li>
              <li className="flex gap-2"><span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Islamic Financing</strong> — Available for all loan types. Structured as Murabahah (cost + markup), Musharakah (partnership), or BBA (deferred payment). Functionally similar to conventional loans but structured to comply with Shariah principles.</span></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Reduce Your Total Loan Interest</h2>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Make extra repayments</strong> — Most Malaysian home loans allow extra payments without penalty. Every RM1,000 extra paid on your principal reduces future interest directly. One additional monthly repayment per year can shorten a 30-year mortgage by 4–5 years.</span></li>
              <li className="flex gap-2"><span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Choose a shorter tenure</strong> — A 25-year mortgage generates far less total interest than a 30-year one. If your monthly budget allows the higher repayment, shorter tenure is almost always financially superior.</span></li>
              <li className="flex gap-2"><span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Refinance when rates drop</strong> — If your loan was taken out during a high-rate period and rates have since fallen, refinancing could save thousands. Factor in legal and valuation fees when calculating net savings.</span></li>
              <li className="flex gap-2"><span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Improve your credit score before applying</strong> — A higher CCRIS/CTOS score gives you access to lower rates. Paying all existing commitments on time for 12 months before a major loan application significantly improves your rate offer.</span></li>
            </ul>
          </div>
        </CalcSeoSection>
      </main>
      <Footer />
    </>
  );
}
