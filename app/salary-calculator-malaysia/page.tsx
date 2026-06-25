import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SalaryCalculator from "./SalaryCalculator";
import JsonLd from "@/components/JsonLd";
import CalcSeoSection, { type CalcFaq, type RelatedCalc } from "@/components/CalcSeoSection";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/salary-calculator-malaysia`;

export const metadata: Metadata = {
  title: "Salary Calculator Malaysia — EPF, SOCSO, EIS & PCB 2024",
  description:
    "Free Malaysian salary calculator. Instantly calculate your take-home pay after EPF (11%), SOCSO, EIS, and PCB income tax deductions. Updated for 2024 rates.",
  keywords: [
    "salary calculator Malaysia",
    "take home pay Malaysia",
    "EPF calculator Malaysia",
    "PCB calculator Malaysia",
    "SOCSO calculator",
    "EIS calculator Malaysia",
    "net salary Malaysia",
    "gaji bersih Malaysia",
    "kalkulator gaji Malaysia",
  ],
  alternates: { canonical: "/salary-calculator-malaysia" },
  openGraph: {
    title: "Salary Calculator Malaysia — EPF, SOCSO, EIS & PCB 2024",
    description:
      "Calculate your Malaysian take-home pay after EPF, SOCSO, EIS, and PCB deductions. Free, instant, no sign-up.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Salary Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Calculator Malaysia — EPF, SOCSO, EIS & PCB",
    description: "Calculate your Malaysian take-home pay instantly. Free, accurate, 2024 rates.",
    images: ["/og-image.png"],
  },
};

const faqs: CalcFaq[] = [
  {
    q: "What is the take-home pay for a RM3,000 salary in Malaysia?",
    a: "For a single, resident employee earning RM3,000 gross per month in 2024, approximate deductions are: EPF (11%) = RM330, SOCSO ≈ RM14.75, EIS ≈ RM7.90, PCB ≈ RM0 (below taxable threshold with standard personal relief). Estimated take-home pay is approximately RM2,647. Actual figures depend on tax declarations and employer.",
  },
  {
    q: "Is EPF deducted from gross or net salary?",
    a: "EPF is deducted from your gross monthly salary (before any other deductions). The employee rate is 11% of gross salary. The employer contributes an additional 13% (for salaries ≤ RM5,000) or 12% (for salaries above RM5,000). Both contributions are remitted to EPF monthly.",
  },
  {
    q: "At what income level do I start paying PCB (income tax)?",
    a: "PCB generally begins when your annual chargeable income exceeds RM5,000 after deducting personal relief (RM9,000) and EPF contributions (up to RM4,000). For a single employee, PCB typically starts at around RM2,500–RM3,000 gross monthly salary. Below this level, PCB is usually RM0.",
  },
  {
    q: "Are bonuses subject to EPF, SOCSO, and PCB deductions?",
    a: "Bonuses are subject to EPF deductions (both employee and employer contributions). SOCSO and EIS do not apply to bonuses. Bonuses are included in annual chargeable income for PCB purposes — your employer will adjust PCB in the month the bonus is paid.",
  },
  {
    q: "What is the SOCSO contribution rate in 2024?",
    a: "SOCSO contributions are capped at RM4,000 gross salary per month. For employees earning RM4,000 or below: employee pays 0.5%, employer pays 1.75% (First Category — Employment Injury and Invalidity). For employees above RM4,000 or over 60 years: only Employment Injury Scheme applies. Refer to the SOCSO contribution table for exact ringgit amounts.",
  },
  {
    q: "How can I reduce my monthly PCB deduction legally?",
    a: "Submit Form TP1 to your employer to declare eligible reliefs: life insurance premiums, medical expenses, education fees, spouse relief (RM4,000), and child relief (RM2,000 per child). If you pay Zakat to an official Majlis Agama, declare it via TP1 — Zakat is a ringgit-for-ringgit tax rebate, reducing tax payable directly.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/epf-calculator-malaysia", emoji: "🏦", title: "EPF Calculator Malaysia", desc: "Project your KWSP retirement savings with dividends" },
  { href: "/pcb-calculator-malaysia", emoji: "📋", title: "PCB Calculator Malaysia", desc: "Estimate your monthly PCB / MTD income tax deduction" },
  { href: "/income-tax-calculator-malaysia", emoji: "📊", title: "Income Tax Calculator Malaysia", desc: "Calculate LHDN annual tax payable for YA 2024" },
  { href: "/dsr-calculator-malaysia", emoji: "🏦", title: "DSR Calculator Malaysia", desc: "Check your Debt Service Ratio before applying for a loan" },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Salary Calculator Malaysia",
      url: PAGE_URL,
      description: "Free Malaysian salary calculator with EPF, SOCSO, EIS, and PCB income tax deductions using 2024 statutory rates.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Salary Calculator", item: PAGE_URL },
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

export default function SalaryCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              2024 Rates · EPF · SOCSO · EIS · PCB
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Salary Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Enter your gross monthly salary and instantly see your take-home pay after all statutory deductions — EPF, SOCSO, EIS, and estimated PCB income tax.
            </p>
          </div>
        </section>
        <SalaryCalculator />
        <FinancialDisclaimer />

        <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Malaysian Salary Deductions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every Malaysian employee has four mandatory statutory deductions taken from their gross monthly salary before receiving take-home pay. Understanding each deduction — how it is calculated and where the money goes — helps you plan your finances accurately and verify your payslip.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The four deductions are: <strong>EPF (Employees Provident Fund / KWSP)</strong> for retirement savings, <strong>SOCSO (Social Security Organisation / PERKESO)</strong> for workplace injury and disability insurance, <strong>EIS (Employment Insurance System)</strong> for retrenchment benefits, and <strong>PCB (Potongan Cukai Berjadual / MTD)</strong> which is the monthly income tax withholding remitted to LHDN on your behalf.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Malaysian Salary Deduction Rates 2024</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Deduction</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Employee Rate</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Employer Rate</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Salary Cap</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["EPF / KWSP", "11%", "12–13%", "No cap", "Retirement savings"],
                    ["SOCSO / PERKESO", "0.5%", "1.75%", "RM4,000/mth", "Work injury & disability"],
                    ["EIS / SIP", "0.2%", "0.2%", "RM4,000/mth", "Retrenchment benefits"],
                    ["PCB / MTD", "Varies 0–30%", "—", "—", "Income tax prepayment"],
                  ].map(([name, emp, er, cap, purpose]) => (
                    <tr key={name} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{name}</td>
                      <td className="px-4 py-3 text-gray-700">{emp}</td>
                      <td className="px-4 py-3 text-gray-700">{er}</td>
                      <td className="px-4 py-3 text-gray-600">{cap}</td>
                      <td className="px-4 py-3 text-gray-600">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Employer EPF rate: 13% for gross salary ≤ RM5,000; 12% for above RM5,000.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example: RM5,000 Gross Monthly Salary Breakdown</h2>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4">Single Resident Employee, RM5,000 Gross</h3>
              <div className="space-y-2 mb-4">
                {[
                  { label: "Gross Salary", value: "RM 5,000.00", highlight: true },
                  { label: "EPF (Employee 11%)", value: "− RM 550.00" },
                  { label: "SOCSO (0.5%, cap RM4,000)", value: "− RM 19.75" },
                  { label: "EIS (0.2%, cap RM4,000)", value: "− RM 7.90" },
                  { label: "PCB / Income Tax (est.)", value: "− RM 50.00" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between text-sm bg-white rounded-lg px-4 py-2.5 border border-green-100">
                    <span className="text-gray-700">{r.label}</span>
                    <span className={r.highlight ? "font-bold text-green-700" : "text-gray-700"}>{r.value}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm bg-green-700 text-white rounded-lg px-4 py-3 font-bold mt-2">
                  <span>Estimated Take-Home Pay</span>
                  <span>≈ RM 4,372</span>
                </div>
              </div>
              <p className="text-xs text-green-800">PCB assumes single, resident employee with standard personal relief only. Actual PCB varies with TP1 declarations.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Estimated Take-Home Pay at Different Salary Levels</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Gross Salary</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">EPF (11%)</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">SOCSO + EIS</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Est. PCB</th>
                    <th className="px-4 py-3 font-semibold text-green-700">Est. Take-Home</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["RM 2,000", "RM 220", "RM 14.30", "RM 0", "≈ RM 1,766"],
                    ["RM 3,000", "RM 330", "RM 19.30", "RM 0", "≈ RM 2,651"],
                    ["RM 4,000", "RM 440", "RM 27.90", "RM 10", "≈ RM 3,522"],
                    ["RM 5,000", "RM 550", "RM 27.65", "RM 50", "≈ RM 4,372"],
                    ["RM 7,000", "RM 770", "RM 27.65", "RM 230", "≈ RM 5,972"],
                    ["RM 10,000", "RM 1,100", "RM 27.65", "RM 600", "≈ RM 8,272"],
                  ].map(([gross, epf, socso, pcb, net]) => (
                    <tr key={gross} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{gross}</td>
                      <td className="px-4 py-3 text-gray-700">{epf}</td>
                      <td className="px-4 py-3 text-gray-700">{socso}</td>
                      <td className="px-4 py-3 text-gray-700">{pcb}</td>
                      <td className="px-4 py-3 font-semibold text-green-700">{net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Estimates for single, resident employee. Use the calculator above for precise personalised figures.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Increase Your Take-Home Pay Legally</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While EPF and SOCSO are mandatory and fixed, there are legitimate ways to reduce your PCB deduction and keep more of your salary each month:
            </p>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Submit Form TP1 to your employer</strong> — declare eligible reliefs such as life insurance premiums, medical expenses, education fees, spouse relief (RM4,000), and child relief (RM2,000 per child) to reduce monthly PCB immediately.</span></li>
              <li className="flex gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Claim Zakat via TP1</strong> — Zakat paid to an official Majlis Agama is a ringgit-for-ringgit tax rebate, not just a relief. RM1 of Zakat reduces your tax bill by RM1 — the most powerful tax reducer available to Muslim taxpayers.</span></li>
              <li className="flex gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Voluntary EPF top-ups</strong> — Additional EPF contributions beyond the statutory 11% are tax-deductible up to RM4,000 per year, reducing your chargeable income and subsequent PCB.</span></li>
              <li className="flex gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>File your LHDN return early</strong> — Submit Form BE by 30 April to claim all eligible reliefs and receive any PCB overpayment as a tax refund promptly.</span></li>
            </ul>
          </div>
        </CalcSeoSection>
      </main>
      <Footer />
    </>
  );
}
