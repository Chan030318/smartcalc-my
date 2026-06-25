import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PcbCalculator from "./PcbCalculator";
import JsonLd from "@/components/JsonLd";
import CalcSeoSection, { type CalcFaq, type RelatedCalc } from "@/components/CalcSeoSection";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/pcb-calculator-malaysia`;

export const metadata: Metadata = {
  title: "PCB Calculator Malaysia 2024 — Monthly Tax Deduction (MTD) Estimator",
  description:
    "Free PCB / MTD calculator for Malaysia. Enter your monthly salary, marital status, children, and TP1 declarations to estimate your monthly Potongan Cukai Berjadual. Includes Zakat rebate, resident and non-resident rates.",
  keywords: [
    "PCB calculator Malaysia",
    "MTD calculator Malaysia",
    "Potongan Cukai Berjadual calculator",
    "monthly tax deduction Malaysia",
    "PCB 2024 Malaysia",
    "LHDN PCB calculator",
    "TP1 declaration Malaysia",
    "kalkulator PCB Malaysia",
    "cukai bulanan Malaysia",
    "PCB non-resident Malaysia",
  ],
  alternates: { canonical: "/pcb-calculator-malaysia" },
  openGraph: {
    title: "PCB Calculator Malaysia 2024 — Monthly Tax Deduction (MTD) Estimator",
    description:
      "Estimate your monthly PCB / MTD deduction instantly. Enter salary, reliefs, Zakat, and TP1 declarations. YA 2024 rates.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PCB Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCB Calculator Malaysia 2024 — Monthly Tax Deduction Estimator",
    description: "Free LHDN PCB / MTD calculator — enter salary + TP1 reliefs for instant monthly deduction estimate.",
    images: ["/og-image.png"],
  },
};

const faqs: CalcFaq[] = [
  {
    q: "What is PCB (Potongan Cukai Berjadual)?",
    a: "PCB stands for Potongan Cukai Berjadual (Monthly Tax Deduction / MTD). It is the monthly income tax instalment deducted from your salary by your employer and remitted directly to LHDN. PCB is a prepayment of your annual income tax spread over 12 months — not a separate tax.",
  },
  {
    q: "How is PCB calculated in Malaysia?",
    a: "PCB uses the formula method: (monthly salary × 12) minus EPF contributions and declared TP1 reliefs equals annual chargeable income. Progressive tax rates are applied, personal rebate (RM400) and spouse rebate (if applicable) are subtracted, Zakat is deducted, and the result divided by 12 gives the monthly PCB amount.",
  },
  {
    q: "What is Form TP1 and how does it reduce PCB?",
    a: "Form TP1 allows employees to declare additional tax reliefs to their employer — including life insurance premiums, medical expenses, education fees, spouse relief (RM4,000), and child relief (RM2,000 per child). These reduce the chargeable income used in the PCB calculation, directly lowering your monthly deduction.",
  },
  {
    q: "Can Zakat reduce my PCB?",
    a: "Yes. Zakat paid to an official State Islamic Religious Council is a ringgit-for-ringgit rebate against tax payable — more powerful than a relief. RM1 of Zakat reduces your annual tax bill by RM1 (not just your chargeable income). Declare monthly Zakat to your employer via TP1 for immediate PCB reduction.",
  },
  {
    q: "What is the PCB rate for non-residents in Malaysia?",
    a: "Non-resident employees (those who are in Malaysia for less than 182 days in a year) are taxed at a flat rate of 30% on their gross Malaysian-source income. They are not entitled to personal reliefs, spouse relief, child relief, or the personal rebate. Non-residents also cannot claim Zakat rebates.",
  },
  {
    q: "What happens if my employer deducts too much or too little PCB?",
    a: "If too much PCB was deducted over the year, you will receive a tax refund after filing your annual LHDN return (Form BE/B). If too little was deducted, you will have a tax balance to pay. Submit Form TP1 reliefs to your employer to ensure accurate monthly deductions and avoid a large annual tax bill.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/income-tax-calculator-malaysia", emoji: "📊", title: "Income Tax Calculator Malaysia", desc: "Calculate annual LHDN tax payable and effective rate" },
  { href: "/salary-calculator-malaysia", emoji: "💰", title: "Salary Calculator Malaysia", desc: "See your full take-home pay after EPF, SOCSO, EIS & PCB" },
  { href: "/epf-calculator-malaysia", emoji: "🏦", title: "EPF Calculator Malaysia", desc: "Project your KWSP retirement savings with dividends" },
  { href: "/dsr-calculator-malaysia", emoji: "🏦", title: "DSR Calculator Malaysia", desc: "Check your Debt Service Ratio for loan eligibility" },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "PCB Calculator Malaysia",
      url: PAGE_URL,
      description:
        "Free PCB (Potongan Cukai Berjadual) / MTD calculator for Malaysia using the formula method with YA 2024 progressive rates. Supports resident and non-resident rates, TP1 declarations, Zakat rebate.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "PCB Calculator Malaysia", item: PAGE_URL },
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

export default function PcbCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              YA 2024 · Formula Method · TP1 &amp; Zakat Supported
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              PCB Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Estimate your monthly Potongan Cukai Berjadual (MTD) deduction. Enter your salary, marital status, TP1 declarations, and Zakat — for both resident and non-resident employees.
            </p>
          </div>
        </section>

        <PcbCalculator />
        <FinancialDisclaimer />

        <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is PCB / MTD in Malaysia?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Potongan Cukai Berjadual (PCB), also known as Monthly Tax Deduction (MTD), is the mandatory income tax withholding system in Malaysia. Under PCB, your employer deducts an estimated share of your annual income tax liability from each monthly salary payment and remits it to the Inland Revenue Board (LHDN) on your behalf. PCB is not a separate tax — it is a prepayment of your annual income tax liability, spread across 12 monthly instalments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The PCB system was introduced to prevent a large lump-sum tax payment at year-end. If your total annual PCB deductions equal your actual tax liability, you owe nothing when filing your return. If PCB was over-deducted, LHDN issues a refund. If under-deducted (e.g., because of a year-end bonus or undeclared reliefs), you pay the balance when filing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How PCB Is Calculated (Formula Method)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              LHDN uses the formula method to calculate PCB. The steps are:
            </p>
            <ol className="space-y-3 text-gray-600 text-sm leading-relaxed list-none">
              {[
                "Annualise gross monthly salary: Monthly Salary × 12",
                "Deduct EPF contributions (employee 11%, capped at RM4,000 per year via TP1 or formula)",
                "Deduct TP1 declared reliefs (life insurance, medical, education, spouse, children, etc.)",
                "Apply personal relief: RM9,000 (resident) or RM0 (non-resident)",
                "The result is the annual Chargeable Income",
                "Apply progressive income tax rates to compute annual tax payable",
                "Subtract personal rebate (RM400 for income ≤ RM35,000), spouse rebate (RM400), and Zakat rebate",
                "Divide remaining annual tax by 12 to get monthly PCB",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example PCB Calculation</h2>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-3">Example: Married employee, 2 children, RM6,000 gross/month</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Annual gross income", value: "RM 72,000" },
                  { label: "Less: EPF employee (11%)", value: "− RM 7,920" },
                  { label: "Less: Spouse relief (TP1)", value: "− RM 4,000" },
                  { label: "Less: Child relief × 2 (TP1)", value: "− RM 4,000" },
                  { label: "Less: Personal relief", value: "− RM 9,000" },
                  { label: "Annual Chargeable Income", value: "RM 47,080", highlight: true },
                  { label: "Tax on RM47,080 (progressive)", value: "≈ RM 2,400" },
                  { label: "Less: Personal rebate", value: "− RM 0 (income >RM35k)" },
                  { label: "Annual tax payable", value: "≈ RM 2,400" },
                  { label: "Monthly PCB (÷12)", value: "≈ RM 200", highlight: true },
                ].map((r) => (
                  <div key={r.label} className={`flex justify-between px-4 py-2.5 rounded-lg border ${r.highlight ? "bg-indigo-700 text-white border-indigo-700 font-bold" : "bg-white border-indigo-100 text-gray-700"}`}>
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-indigo-800 mt-4">Compared to RM6,000 × 12 = RM72,000 gross, effective tax is only about 3.3% due to reliefs. PCB is just RM200/month.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">PCB at Different Salary Levels (Single Resident, 2024)</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Gross Monthly Salary</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Annual Chargeable Income</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Est. Monthly PCB</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Effective Tax Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["RM 2,500", "RM 8,300", "RM 0", "0%"],
                    ["RM 3,000", "RM 14,200", "RM 0", "0%"],
                    ["RM 4,000", "RM 25,320", "≈ RM 8", "~0.2%"],
                    ["RM 5,000", "RM 36,400", "≈ RM 50", "~1.0%"],
                    ["RM 7,000", "RM 58,560", "≈ RM 230", "~3.3%"],
                    ["RM 10,000", "RM 84,800", "≈ RM 600", "~6.0%"],
                    ["RM 15,000", "RM 129,800", "≈ RM 1,600", "~10.7%"],
                  ].map(([gross, chargeable, pcb, rate]) => (
                    <tr key={gross} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{gross}</td>
                      <td className="px-4 py-3 text-gray-700">{chargeable}</td>
                      <td className="px-4 py-3 font-semibold text-indigo-700">{pcb}</td>
                      <td className="px-4 py-3 text-gray-600">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Estimates for single, resident employee with standard personal relief only. Actual PCB will be lower if TP1 reliefs are declared.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reduce PCB with TP1 Declarations and Zakat</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The most effective way to reduce your monthly PCB is to submit <strong>Form TP1</strong> to your employer declaring all eligible reliefs. The table below shows the most valuable reliefs you can declare:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Relief / Rebate</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Type</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Maximum Amount</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">How It Helps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Personal Relief", "Relief", "RM 9,000", "Auto-applied, no TP1 needed"],
                    ["Spouse Relief", "Relief", "RM 4,000", "Declare via TP1"],
                    ["Child Relief", "Relief", "RM 2,000 per child", "Declare via TP1"],
                    ["EPF / Life Insurance", "Relief", "RM 4,000 combined", "Employer applies EPF; life ins via TP1"],
                    ["Zakat (official body)", "Rebate (RM-for-RM)", "Actual amount paid", "Strongest reducer — submit monthly via TP1"],
                    ["Medical / Disability", "Relief", "RM 6,000–RM10,000", "Declare via TP1 with receipts"],
                  ].map(([relief, type, max, how]) => (
                    <tr key={relief} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{relief}</td>
                      <td className="px-4 py-3 text-gray-600">{type}</td>
                      <td className="px-4 py-3 text-gray-700">{max}</td>
                      <td className="px-4 py-3 text-gray-600">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CalcSeoSection>
      </main>
      <Footer />
    </>
  );
}
