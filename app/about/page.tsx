import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — SmartCalc MY",
  description:
    "SmartCalc MY provides 9 free calculators and 24 guides built specifically for Malaysians — BMI, salary, income tax, EPF, PCB, loan, DSR, SOCSO, and EIS calculators using Malaysian standards.",
  alternates: { canonical: "/about" },
};

const calculators = [
  {
    href: "/bmi-calculator",
    emoji: "⚖️",
    title: "BMI Calculator",
    desc: "Uses WHO Asia-Pacific guidelines, with lower thresholds calibrated for Malaysian and Asian adults.",
  },
  {
    href: "/salary-calculator-malaysia",
    emoji: "💰",
    title: "Salary Calculator",
    desc: "Computes EPF (11%), SOCSO, EIS, and estimated PCB income tax using 2024 statutory rates.",
  },
  {
    href: "/income-tax-calculator-malaysia",
    emoji: "🧾",
    title: "Income Tax Calculator",
    desc: "Estimates annual tax payable under LHDN YA 2024 progressive rates with full relief deductions.",
  },
  {
    href: "/epf-calculator-malaysia",
    emoji: "🏦",
    title: "EPF Calculator",
    desc: "Projects your KWSP retirement savings year-by-year with employer matching and dividend compounding.",
  },
  {
    href: "/pcb-calculator-malaysia",
    emoji: "📋",
    title: "PCB Calculator",
    desc: "Estimates your monthly Potongan Cukai Berjadual (MTD) with TP1 declarations and Zakat rebate.",
  },
  {
    href: "/loan-calculator",
    emoji: "🏠",
    title: "Loan Calculator",
    desc: "Reducing-balance amortisation with annual schedule — suitable for personal, home, and car loans.",
  },
  {
    href: "/dsr-calculator-malaysia",
    emoji: "📊",
    title: "DSR Calculator",
    desc: "Checks your Debt Service Ratio against bank thresholds before you apply for any loan.",
  },
  {
    href: "/socso-calculator-malaysia",
    emoji: "🛡️",
    title: "SOCSO Calculator",
    desc: "Calculate PERKESO employee and employer contributions for First and Second Category based on 2024 rates.",
  },
  {
    href: "/eis-calculator-malaysia",
    emoji: "🛟",
    title: "EIS Calculator",
    desc: "Calculate EIS (SIP) employment insurance contributions — 0.2% each side, wage ceiling RM4,000.",
  },
];

const guides = [
  { href: "/guides/epf-contribution-guide-malaysia", label: "EPF Contribution Guide Malaysia 2024" },
  { href: "/guides/epf-withdrawal-guide-malaysia", label: "EPF Withdrawal Guide Malaysia 2024" },
  { href: "/guides/how-much-epf-at-30-malaysia", label: "How Much EPF Should I Have at 30?" },
  { href: "/guides/how-to-calculate-salary-after-epf", label: "How to Calculate Take-Home Salary After EPF" },
  { href: "/guides/salary-deductions-explained-malaysia", label: "Malaysian Salary Deductions Explained" },
  { href: "/guides/pcb-vs-income-tax-malaysia", label: "PCB vs Income Tax — What's the Difference?" },
  { href: "/guides/how-pcb-tax-works-malaysia", label: "How PCB Tax Works in Malaysia" },
  { href: "/guides/how-to-reduce-income-tax-malaysia", label: "How to Reduce Income Tax Legally (YA 2024)" },
  { href: "/guides/what-salary-to-afford-house-malaysia", label: "What Salary Do You Need to Afford a House?" },
  { href: "/guides/housing-loan-eligibility-malaysia", label: "Housing Loan Eligibility — What Banks Check" },
  { href: "/guides/how-to-improve-loan-approval-malaysia", label: "How to Improve Loan Approval Chances" },
  { href: "/guides/personal-loan-vs-housing-loan-malaysia", label: "Personal Loan vs Housing Loan Malaysia" },
  { href: "/guides/what-is-dsr-malaysia", label: "What Is DSR in Malaysia?" },
  { href: "/guides/how-to-calculate-bmi-malaysia", label: "How to Calculate BMI in Malaysia" },
  { href: "/guides/socso-contribution-table-malaysia", label: "SOCSO Contribution Table Malaysia 2026" },
  { href: "/guides/eis-contribution-table-malaysia", label: "EIS Contribution Table Malaysia 2026" },
  { href: "/guides/epf-dividend-history-malaysia", label: "EPF Dividend History Malaysia 2026" },
  { href: "/guides/how-to-check-ccris-malaysia", label: "How to Check Your CCRIS Report Malaysia" },
  { href: "/guides/how-to-improve-ctos-score-malaysia", label: "How to Improve Your CTOS Score Malaysia" },
  { href: "/guides/first-home-buyer-guide-malaysia", label: "First Home Buyer Guide Malaysia 2026" },
  { href: "/guides/car-loan-eligibility-malaysia", label: "Car Loan Eligibility Malaysia 2026" },
  { href: "/guides/personal-loan-guide-malaysia", label: "Personal Loan Malaysia 2026 Guide" },
  { href: "/guides/emergency-fund-malaysia", label: "Emergency Fund Malaysia — How Much to Save" },
  { href: "/guides/rm3000-salary-budget-plan-malaysia", label: "RM3,000 Salary Budget Plan Malaysia 2026" },
];

const values = [
  { emoji: "🎯", title: "Malaysia-First", body: "Every calculator uses rates, thresholds, and regulations specific to Malaysia — not generic global figures." },
  { emoji: "🔒", title: "100% Private", body: "All calculations run entirely in your browser. We never collect, store, or transmit your personal data." },
  { emoji: "⚡", title: "Instant Results", body: "No sign-up, no waiting. Enter your numbers and get results immediately." },
  { emoji: "📱", title: "Works Everywhere", body: "Fully responsive — use SmartCalc MY on your phone, tablet, or desktop." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="text-5xl mb-5">🧮</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About SmartCalc MY</h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Free, accurate, and built for Malaysians. SmartCalc MY gives you 9 calculators and 24 guides — without sign-ups, fees, or data collection.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most online calculators are built for a global audience and use generic assumptions that don't reflect Malaysian realities — different EPF rates, SOCSO caps, Asian BMI thresholds, and local lending norms. SmartCalc MY was built to fill that gap.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We want every Malaysian — whether you&apos;re a fresh graduate calculating your first take-home pay, a homebuyer estimating a mortgage, or someone tracking their health — to have access to reliable tools that reflect <em>your</em> context.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All our calculators are free, run locally in your browser, and are kept up-to-date with the latest Malaysian statutory rates and guidelines.
            </p>
          </div>
        </section>

        {/* Calculators */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Calculators</h2>
            <Link href="/calculators" className="text-sm font-medium text-blue-600 hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {calculators.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-sm">{c.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Guides</h2>
            <Link href="/guides" className="text-sm font-medium text-blue-600 hover:underline">View all →</Link>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-blue-50 transition-colors group first:rounded-t-2xl last:rounded-b-2xl"
              >
                <span className="text-sm text-gray-700 group-hover:text-blue-700 font-medium">{g.label}</span>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-2xl mb-3">{v.emoji}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-amber-800 mb-3">Important Disclaimer</h2>
            <p className="text-amber-700 text-sm leading-relaxed mb-3">
              All results produced by SmartCalc MY calculators are <strong>estimates for informational purposes only</strong>. They do not constitute financial, medical, or legal advice.
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Salary calculations are based on standard statutory rates and a single personal relief — actual deductions depend on your declared reliefs and employer arrangements. Loan repayments assume reducing-balance interest and do not include fees, insurance, or variable rate changes. BMI is a screening tool and should be interpreted alongside professional medical advice. Always consult a qualified professional before making financial or health decisions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
