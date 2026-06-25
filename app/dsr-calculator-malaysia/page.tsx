import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DsrCalculator from "./DsrCalculator";
import JsonLd from "@/components/JsonLd";
import CalcSeoSection, { type CalcFaq, type RelatedCalc } from "@/components/CalcSeoSection";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/dsr-calculator-malaysia`;

export const metadata: Metadata = {
  title: "DSR Calculator Malaysia — Debt Service Ratio for Loan Eligibility",
  description:
    "Free DSR calculator for Malaysia. Enter your gross income, existing commitments, and new loan repayment to instantly check your Debt Service Ratio and whether Malaysian banks will approve your loan application.",
  keywords: [
    "DSR calculator Malaysia",
    "debt service ratio Malaysia",
    "loan eligibility calculator Malaysia",
    "DSR bank Malaysia",
    "kalkulator DSR Malaysia",
    "debt ratio calculator Malaysia",
    "loan approval calculator Malaysia",
    "how to calculate DSR Malaysia",
    "maximum loan amount Malaysia",
    "BNM DSR guidelines",
  ],
  alternates: { canonical: "/dsr-calculator-malaysia" },
  openGraph: {
    title: "DSR Calculator Malaysia — Debt Service Ratio for Loan Eligibility",
    description:
      "Check your Debt Service Ratio instantly. See if you meet the 60% bank threshold and how much more you can borrow. Free, accurate, no sign-up.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DSR Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSR Calculator Malaysia — Loan Eligibility Check",
    description: "Calculate your Debt Service Ratio and find out if Malaysian banks will approve your loan. Free and instant.",
    images: ["/og-image.png"],
  },
};

const faqs: CalcFaq[] = [
  {
    q: "What is DSR (Debt Service Ratio)?",
    a: "DSR is the percentage of gross monthly income used to service all debt repayments. It is calculated as: DSR = (total monthly loan repayments ÷ gross monthly income) × 100. Malaysian banks use DSR as the primary metric to determine whether a borrower can afford a new loan. A lower DSR indicates healthier financial capacity.",
  },
  {
    q: "What DSR do Malaysian banks accept?",
    a: "Most Malaysian banks apply a DSR threshold of 60% for standard borrowers. Some banks allow up to 70% for high-income earners (above RM10,000/month) or government employees with stable job security. A DSR above 70% will typically result in loan rejection. Bank Negara Malaysia (BNM) guidelines require banks to assess borrowers' ability to repay based on net income, though most banks use gross income as the base.",
  },
  {
    q: "What monthly commitments are included in DSR?",
    a: "Monthly debt commitments included in DSR calculations are: home loan repayments, car loan repayments, personal loan repayments, PTPTN student loan monthly instalments, and 5% of credit card limits per card (regardless of actual usage). Excluded from DSR: rent, utilities, food, insurance premiums, and general living expenses.",
  },
  {
    q: "Is DSR calculated on gross or net income?",
    a: "Malaysian banks typically use gross monthly income (before EPF, SOCSO, EIS, and income tax deductions) when calculating DSR for salaried employees. For self-employed borrowers, banks typically average the last 2–3 years of declared income from tax returns or bank statements. Some banks also assess Net DSR (after EPF and tax) for a more conservative risk assessment.",
  },
  {
    q: "How can I reduce my DSR to qualify for a loan?",
    a: "Strategies to improve your DSR: (1) Pay off existing loans early to reduce monthly commitments. (2) Close unused credit cards — each card's limit adds 5% to your monthly commitment even if unused. (3) Increase your income — a pay raise, rental income, or documented side income directly lowers DSR. (4) Apply jointly with a spouse or co-borrower to combine incomes. (5) Reduce the loan amount or extend the tenure (though this increases total interest).",
  },
  {
    q: "How does credit card limit affect my DSR?",
    a: "Banks count 5% of each credit card's credit limit as a monthly commitment when calculating DSR — regardless of how much you actually spend. For example, a RM10,000 credit card limit adds RM500/month to your monthly commitments. Cancelling unused or underused credit cards before applying for a major loan can meaningfully improve your DSR and loan eligibility.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/loan-calculator", emoji: "🏠", title: "Loan Calculator Malaysia", desc: "Estimate monthly repayment and total interest on any loan" },
  { href: "/salary-calculator-malaysia", emoji: "💰", title: "Salary Calculator Malaysia", desc: "See your full take-home pay after all deductions" },
  { href: "/epf-calculator-malaysia", emoji: "🏦", title: "EPF Calculator Malaysia", desc: "Project your KWSP retirement savings with dividends" },
  { href: "/income-tax-calculator-malaysia", emoji: "📊", title: "Income Tax Calculator Malaysia", desc: "Calculate LHDN annual income tax payable" },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "DSR Calculator Malaysia",
      url: PAGE_URL,
      description:
        "Free Debt Service Ratio (DSR) calculator for Malaysia. Enter monthly income, existing loan commitments, and new loan repayment to check DSR percentage and loan eligibility.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "DSR Calculator Malaysia", item: PAGE_URL },
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

export default function DsrCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Malaysian Bank Standard · 60% / 70% Thresholds · Loan Eligibility
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              DSR Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Check your Debt Service Ratio before applying for a loan. Enter your gross income, existing commitments, and new repayment to instantly see your DSR, eligibility category, and remaining borrowing capacity.
            </p>
          </div>
        </section>

        <DsrCalculator />
        <FinancialDisclaimer />

        <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is DSR and Why Do Malaysian Banks Use It?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Debt Service Ratio (DSR) is the most important metric Malaysian banks use to assess a borrower&#39;s capacity to take on new debt. It measures what percentage of your gross monthly income is already committed to servicing existing and proposed loan repayments. A high DSR signals financial stress and increases the risk of default; a low DSR indicates capacity to absorb new debt obligations comfortably.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bank Negara Malaysia (BNM) requires all licensed financial institutions to assess borrowers&#39; repayment capacity as part of responsible lending practices. While BNM does not mandate a specific DSR ceiling, market practice has standardised at 60% for most borrowers and up to 70% for high-income or low-risk borrowers. Banks also consider other factors — CCRIS/CTOS credit history, employment stability, and collateral — but DSR is typically the first gating criteria.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How DSR Is Calculated</h2>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-5">
              <div className="font-mono text-lg text-center text-blue-900 font-bold mb-4">
                DSR = (Total Monthly Debt Repayments ÷ Gross Monthly Income) × 100
              </div>
              <p className="text-sm text-blue-800 text-center">Include all existing loans PLUS the proposed new loan in &#34;Total Monthly Debt Repayments&#34;</p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              What counts as monthly debt commitments in the DSR calculation:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "✅ Included in DSR", items: ["Home loan / mortgage repayment", "Car loan repayment", "Personal loan repayment", "PTPTN student loan instalment", "5% of each credit card limit", "Business loan repayments"], color: "green" },
                { label: "❌ Not included in DSR", items: ["Monthly rent (if renting)", "Utilities and phone bills", "Groceries and food", "Insurance premiums", "EPF and tax deductions", "General living expenses"], color: "red" },
              ].map((col) => (
                <div key={col.label} className={`bg-${col.color}-50 border border-${col.color}-100 rounded-xl p-4`}>
                  <div className={`font-semibold text-${col.color}-700 text-sm mb-3`}>{col.label}</div>
                  <ul className="space-y-1.5">
                    {col.items.map((item) => (
                      <li key={item} className="text-sm text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example DSR Calculation</h2>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Example: Applying for a home loan with existing commitments</h3>
              <div className="space-y-2 text-sm mb-4">
                {[
                  { label: "Gross monthly income", value: "RM 6,000" },
                  { label: "Existing car loan repayment", value: "RM 800" },
                  { label: "Personal loan repayment", value: "RM 400" },
                  { label: "Credit card limit RM5,000 (5%)", value: "RM 250" },
                  { label: "Proposed home loan repayment", value: "RM 1,500" },
                  { label: "Total monthly commitments", value: "RM 2,950", highlight: true },
                  { label: "DSR = RM2,950 ÷ RM6,000 × 100", value: "49.2%", highlight: true },
                ].map((r) => (
                  <div key={r.label} className={`flex justify-between px-4 py-2.5 rounded-lg border ${r.highlight ? "bg-blue-700 text-white border-blue-700 font-bold" : "bg-white border-blue-100 text-gray-700"}`}>
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-sm text-green-800">
                <strong>DSR of 49.2% — likely approved.</strong> This is below the 60% standard threshold, giving the borrower comfortable headroom. The bank will also review CCRIS credit history and employment stability.
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DSR Eligibility Thresholds in Malaysia</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">DSR Range</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Eligibility</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Bank Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Below 40%", "Excellent", "Likely approved; may qualify for better rates"],
                    ["40% – 60%", "Good — Standard Threshold", "Generally approved for most borrowers"],
                    ["60% – 70%", "Borderline", "Possible for high-income or government employees; requires strong credit profile"],
                    ["Above 70%", "High Risk", "Typically rejected; reduce commitments first"],
                  ].map(([range, elig, action]) => (
                    <tr key={range} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{range}</td>
                      <td className="px-4 py-3 text-gray-700">{elig}</td>
                      <td className="px-4 py-3 text-gray-600">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Improve Your DSR Before Applying</h2>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Pay off smaller loans first</strong> — Eliminating a personal loan or hire-purchase commitment removes it from your monthly debt obligations, directly reducing DSR.</span></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Cancel unused credit cards</strong> — Each card adds 5% of its limit to your monthly commitments in the bank&#39;s calculation, even if you never use it. Cancelling a RM10,000-limit card removes RM500/month from your DSR.</span></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Apply with a co-borrower</strong> — Joint applications combine incomes, which directly lowers the DSR ratio. Both borrowers&#39; credit profiles will be assessed, so ensure your co-borrower has a clean record.</span></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Include all income sources</strong> — Banks may consider rental income, freelance income, bonuses, and allowances if documented. A letter from your employer confirming consistent allowances can improve your income base.</span></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Choose a longer loan tenure</strong> — A 35-year mortgage has a lower monthly repayment than a 25-year mortgage, reducing DSR. The trade-off is higher total interest paid over the life of the loan.</span></li>
            </ul>
          </div>
        </CalcSeoSection>
      </main>
      <Footer />
    </>
  );
}
