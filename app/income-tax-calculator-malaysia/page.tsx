import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IncomeTaxCalculator from "./IncomeTaxCalculator";
import JsonLd from "@/components/JsonLd";
import CalcSeoSection, { type CalcFaq, type RelatedCalc } from "@/components/CalcSeoSection";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/income-tax-calculator-malaysia`;

export const metadata: Metadata = {
  title: "Income Tax Calculator Malaysia 2024 — LHDN Tax Estimator",
  description:
    "Free Malaysia income tax calculator for YA 2024. Enter your annual income and reliefs (EPF, medical, education, spouse, children) to instantly estimate your tax payable, effective rate, and monthly PCB deduction.",
  keywords: [
    "income tax calculator Malaysia",
    "Malaysia tax calculator 2024",
    "LHDN tax calculator",
    "PCB calculator Malaysia",
    "cukai pendapatan Malaysia",
    "personal income tax Malaysia",
    "tax relief Malaysia 2024",
    "chargeable income Malaysia",
    "effective tax rate Malaysia",
    "kalkulator cukai pendapatan",
  ],
  alternates: { canonical: "/income-tax-calculator-malaysia" },
  openGraph: {
    title: "Income Tax Calculator Malaysia 2024 — LHDN Tax Estimator",
    description:
      "Estimate your Malaysia income tax instantly. Enter annual income + reliefs and get your tax payable, effective rate, and monthly PCB deduction. YA 2024 rates.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Income Tax Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Calculator Malaysia 2024",
    description: "Free LHDN income tax estimator — enter your income and reliefs for instant results.",
    images: ["/og-image.png"],
  },
};

const faqs: CalcFaq[] = [
  {
    q: "Who needs to file income tax in Malaysia?",
    a: "Malaysian residents with an annual income exceeding RM34,000 after EPF deduction are required to register and file income tax with LHDN. Even if your PCB deductions have fully covered your tax liability, you must still file Form BE (salaried) or Form B (business income) by the deadline — 30 April for salaried employees.",
  },
  {
    q: "What is the personal relief for YA 2024?",
    a: "Every Malaysian tax resident receives an automatic personal relief of RM9,000 per year of assessment. No application is needed — it is automatically applied when you calculate your chargeable income. Non-residents are not entitled to personal relief and are taxed at a flat 30% rate.",
  },
  {
    q: "What are the income tax rates in Malaysia for YA 2024?",
    a: "Malaysia uses progressive income tax rates from 0% to 30%: RM1–RM5,000 at 0%, RM5,001–RM20,000 at 1%, RM20,001–RM35,000 at 3%, RM35,001–RM50,000 at 8%, RM50,001–RM70,000 at 13%, RM70,001–RM100,000 at 21%, RM100,001–RM400,000 at 24%, RM400,001–RM600,000 at 24.5%, RM600,001–RM2,000,000 at 25%, and above RM2,000,000 at 30%.",
  },
  {
    q: "What is the difference between chargeable income and gross income?",
    a: "Gross income is your total income before any deductions. Chargeable income is what remains after subtracting all eligible tax reliefs (personal, EPF, life insurance, medical, education, spouse, children, etc.) from gross income. Income tax is calculated on your chargeable income, not your gross income. Maximising reliefs reduces chargeable income and therefore reduces your tax bill.",
  },
  {
    q: "What are the most valuable tax reliefs in Malaysia?",
    a: "The most impactful tax reliefs for most Malaysian salaried employees are: Personal relief (RM9,000), EPF & life insurance combined (RM4,000), Spouse relief (RM4,000), Children relief (RM2,000 per child), Medical expenses for self/parents/child (up to RM6,000–RM10,000), Education fees (RM7,000), and SSPN deposit (RM8,000). Zakat paid to an official body is a RM-for-RM rebate on tax payable — even more valuable than a relief.",
  },
  {
    q: "What is the deadline for filing income tax in Malaysia?",
    a: "For salaried employees (Form BE): the filing deadline is 30 April of the following year (e.g., YA 2024 returns must be filed by 30 April 2025). For sole proprietors and partnerships (Form B): the deadline is 30 June. All returns must be filed electronically via the MyTax portal (mytax.hasil.gov.my). Late filing incurs a penalty of 10% of tax payable.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/pcb-calculator-malaysia", emoji: "📋", title: "PCB Calculator Malaysia", desc: "Estimate your monthly income tax withholding (MTD)" },
  { href: "/salary-calculator-malaysia", emoji: "💰", title: "Salary Calculator Malaysia", desc: "Calculate take-home pay after EPF, SOCSO, EIS & PCB" },
  { href: "/epf-calculator-malaysia", emoji: "🏦", title: "EPF Calculator Malaysia", desc: "Project KWSP retirement savings with dividend compounding" },
  { href: "/loan-calculator", emoji: "🏠", title: "Loan Calculator Malaysia", desc: "Estimate monthly repayment and total interest on any loan" },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Income Tax Calculator Malaysia",
      url: PAGE_URL,
      description:
        "Free Malaysian income tax calculator for Year of Assessment 2024. Calculates tax payable based on annual income, reliefs, and LHDN progressive rates.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Income Tax Calculator Malaysia", item: PAGE_URL },
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

export default function IncomeTaxPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              YA 2024 · LHDN Rates · Reliefs Included
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Income Tax Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Enter your annual income and tax reliefs to instantly calculate your estimated income tax payable, effective rate, and monthly PCB deduction — based on LHDN YA 2024 progressive rates.
            </p>
          </div>
        </section>

        <IncomeTaxCalculator />
        <FinancialDisclaimer />

        <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Malaysian Personal Income Tax Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Malaysia operates a self-assessment income tax system under the purview of the Inland Revenue Board (Lembaga Hasil Dalam Negeri / LHDN). Malaysian tax residents — individuals who reside in Malaysia for 182 days or more in a calendar year — are taxed on their worldwide income at progressive rates ranging from 0% to 30% for Year of Assessment (YA) 2024.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Income tax is calculated on your <strong>chargeable income</strong> — your total income after deducting all eligible tax reliefs. This means the amount you actually pay in tax can be significantly lower than what you&#39;d expect based on your gross salary, especially if you maximise your available reliefs. A resident employee earning RM72,000 gross annually, for example, could reduce their chargeable income to below RM40,000 after claiming standard reliefs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Malaysia Income Tax Rates YA 2024</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Chargeable Income (RM)</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Tax Rate</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Tax on This Band</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Cumulative Tax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["1 – 5,000", "0%", "RM 0", "RM 0"],
                    ["5,001 – 20,000", "1%", "RM 150", "RM 150"],
                    ["20,001 – 35,000", "3%", "RM 450", "RM 600"],
                    ["35,001 – 50,000", "8%", "RM 1,200", "RM 1,800"],
                    ["50,001 – 70,000", "13%", "RM 2,600", "RM 4,400"],
                    ["70,001 – 100,000", "21%", "RM 6,300", "RM 10,700"],
                    ["100,001 – 400,000", "24%", "RM 72,000", "RM 82,700"],
                    ["400,001 – 600,000", "24.5%", "RM 49,000", "RM 131,700"],
                    ["600,001 – 2,000,000", "25%", "RM 350,000", "RM 481,700"],
                    ["Above 2,000,000", "30%", "On excess", "—"],
                  ].map(([band, rate, tax, cum]) => (
                    <tr key={band} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{band}</td>
                      <td className="px-4 py-3 font-semibold text-orange-600">{rate}</td>
                      <td className="px-4 py-3 text-gray-700">{tax}</td>
                      <td className="px-4 py-3 text-gray-600">{cum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Tax is calculated progressively — higher rates only apply to income above each band threshold, not to total income.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Income Tax Calculation</h2>
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-orange-900 mb-3">Example: Single resident employee, RM72,000 gross annual income</h3>
              <div className="space-y-2 text-sm mb-4">
                {[
                  { label: "Gross Annual Income", value: "RM 72,000" },
                  { label: "Less: EPF employee (11%)", value: "− RM 7,920" },
                  { label: "Less: Personal relief", value: "− RM 9,000" },
                  { label: "Less: Life insurance / VEPF", value: "− RM 3,000" },
                  { label: "Chargeable Income", value: "RM 52,080", highlight: true },
                  { label: "Tax: RM0 + 1% + 3% + 8% + 13% on excess", value: "≈ RM 4,870" },
                  { label: "Less: Personal rebate (income > RM35k)", value: "RM 0" },
                  { label: "Income Tax Payable", value: "≈ RM 4,870", highlight: true },
                  { label: "Effective tax rate", value: "≈ 6.8%" },
                  { label: "Monthly PCB", value: "≈ RM 406" },
                ].map((r) => (
                  <div key={r.label} className={`flex justify-between px-4 py-2.5 rounded-lg border ${r.highlight ? "bg-orange-700 text-white border-orange-700 font-bold" : "bg-white border-orange-100 text-gray-700"}`}>
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Tax Reliefs for YA 2024</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Relief</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Maximum (RM)</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Who Can Claim</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Personal relief", "9,000", "All residents"],
                    ["Spouse relief", "4,000", "If spouse has no income"],
                    ["Child relief (per child)", "2,000", "Dependant children under 18"],
                    ["EPF + Life Insurance", "4,000", "Employee EPF + life ins combined"],
                    ["Private Retirement Scheme (PRS)", "3,000", "PRS contributors"],
                    ["SSPN education savings", "8,000", "Parents with SSPN-i accounts"],
                    ["Medical expenses (self/parents)", "6,000 – 10,000", "With receipts"],
                    ["Education fees (self)", "7,000", "Degree/postgrad/skills courses"],
                    ["Lifestyle (books, electronics, etc.)", "2,500", "All residents"],
                    ["Zakat (official body)", "Rebate: full amount paid", "Muslim taxpayers"],
                  ].map(([relief, max, who]) => (
                    <tr key={relief} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{relief}</td>
                      <td className="px-4 py-3 text-orange-700 font-semibold">{max}</td>
                      <td className="px-4 py-3 text-gray-600">{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Relief amounts are subject to LHDN YA 2024 guidelines. Always verify the latest reliefs at mytax.hasil.gov.my.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips to Reduce Your Income Tax in Malaysia</h2>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Maximise EPF voluntary contributions</strong> — contributions beyond the statutory 11% are deductible up to RM4,000 (combined with life insurance). Extra EPF contributions also grow your retirement savings at EPF&#39;s dividend rate.</span></li>
              <li className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Invest in a Private Retirement Scheme (PRS)</strong> — PRS contributions qualify for an additional RM3,000 tax relief separate from EPF/life insurance. Ideal for those who have already maxed the RM4,000 EPF+life insurance relief.</span></li>
              <li className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Open an SSPN-i account for your children</strong> — Deposits into SSPN (Simpanan Pendidikan Nasional) qualify for up to RM8,000 tax relief per year and earn a government-guaranteed dividend.</span></li>
              <li className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Claim lifestyle relief</strong> — Up to RM2,500 for books, computers, smartphones, gym memberships, and internet subscriptions. Keep all receipts for LHDN audits.</span></li>
              <li className="flex gap-2"><span className="text-orange-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Pay Zakat via official channels</strong> — For Muslim taxpayers, Zakat paid to official state Islamic bodies is a ringgit-for-ringgit tax rebate — the single most powerful tax reducer in the Malaysian system.</span></li>
            </ul>
          </div>
        </CalcSeoSection>
      </main>
      <Footer />
    </>
  );
}
