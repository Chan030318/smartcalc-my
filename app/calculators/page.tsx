import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/calculators`;

export const metadata: Metadata = {
  title: "All Free Malaysian Calculators — SmartCalc MY",
  description:
    "Browse all free calculators for Malaysians: BMI, Salary, Income Tax, EPF, PCB, SOCSO, EIS, Loan, and DSR. Instant results, no sign-up required.",
  keywords: [
    "free calculators Malaysia",
    "Malaysian calculator tools",
    "BMI calculator Malaysia",
    "salary calculator Malaysia",
    "income tax calculator Malaysia",
    "EPF calculator Malaysia",
    "PCB calculator Malaysia",
    "loan calculator Malaysia",
    "DSR calculator Malaysia",
    "kalkulator Malaysia",
  ],
  alternates: { canonical: "/calculators" },
  openGraph: {
    title: "All Free Malaysian Calculators — SmartCalc MY",
    description:
      "9 free calculators for Malaysians: BMI, Salary, Income Tax, EPF, PCB, SOCSO, Loan, and DSR. Instant results, no sign-up.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY — All Calculators" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free Malaysian Calculators — SmartCalc MY",
    description: "9 free calculators for Malaysians. BMI, Salary, Tax, EPF, PCB, SOCSO, Loan, DSR. Instant results.",
    images: ["/og-image.png"],
  },
};

// ─── Tool data ────────────────────────────────────────────────────────────────
const categories = [
  {
    id: "health",
    label: "Health",
    description: "Body and wellness calculators",
    tools: [
      {
        href: "/bmi-calculator",
        emoji: "⚖️",
        title: "BMI Calculator",
        description: "Calculate your Body Mass Index and get a personalised health interpretation based on Asian BMI guidelines used in Malaysia.",
        features: ["Weight & height input", "Asian BMI categories", "Health guidance"],
        badge: "Health",
        badgeColor: "bg-green-100 text-green-700",
        gradient: "from-green-50 to-emerald-50",
        border: "border-green-100",
        cta: "Calculate BMI",
        ctaStyle: "bg-green-600 hover:bg-green-700",
      },
    ],
  },
  {
    id: "salary-tax",
    label: "Salary & Tax",
    description: "Income, tax, and statutory contribution calculators",
    tools: [
      {
        href: "/salary-calculator-malaysia",
        emoji: "💰",
        title: "Salary Calculator",
        description: "Estimate your monthly take-home pay after EPF (11%), SOCSO, EIS, and PCB income tax deductions. Based on 2024 statutory rates.",
        features: ["EPF & SOCSO deductions", "PCB income tax", "Employer contributions"],
        badge: "Salary",
        badgeColor: "bg-sky-100 text-sky-700",
        gradient: "from-sky-50 to-blue-50",
        border: "border-sky-100",
        cta: "Calculate Salary",
        ctaStyle: "bg-sky-600 hover:bg-sky-700",
      },
      {
        href: "/income-tax-calculator-malaysia",
        emoji: "🧾",
        title: "Income Tax Calculator",
        description: "Calculate your annual income tax payable under LHDN YA 2024 progressive rates. Includes EPF, medical, education, spouse, and child reliefs.",
        features: ["YA 2024 LHDN rates", "Full relief deductions", "Effective tax rate"],
        badge: "Tax",
        badgeColor: "bg-orange-100 text-orange-700",
        gradient: "from-orange-50 to-amber-50",
        border: "border-orange-100",
        cta: "Calculate Tax",
        ctaStyle: "bg-orange-500 hover:bg-orange-600",
      },
      {
        href: "/epf-calculator-malaysia",
        emoji: "🏦",
        title: "EPF / KWSP Calculator",
        description: "Project your EPF retirement savings with year-by-year dividend compounding, employer matching, and salary increments. Includes EPF Basic Savings benchmarks.",
        features: ["Year-by-year projection", "Dividend compounding", "Retirement benchmarks"],
        badge: "Retirement",
        badgeColor: "bg-teal-100 text-teal-700",
        gradient: "from-teal-50 to-cyan-50",
        border: "border-teal-100",
        cta: "Calculate EPF",
        ctaStyle: "bg-teal-600 hover:bg-teal-700",
      },
      {
        href: "/pcb-calculator-malaysia",
        emoji: "📋",
        title: "PCB Calculator",
        description: "Estimate your monthly Potongan Cukai Berjadual (MTD) deduction. Supports TP1 declarations, Zakat rebate, spouse and child reliefs, and non-resident rate.",
        features: ["TP1 & Zakat support", "Resident & non-resident", "Payslip breakdown"],
        badge: "PCB / MTD",
        badgeColor: "bg-indigo-100 text-indigo-700",
        gradient: "from-indigo-50 to-violet-50",
        border: "border-indigo-100",
        cta: "Calculate PCB",
        ctaStyle: "bg-indigo-600 hover:bg-indigo-700",
      },
      {
        href: "/socso-calculator-malaysia",
        emoji: "🛡️",
        title: "SOCSO Calculator",
        description: "Calculate your SOCSO (PERKESO) employee and employer contributions. Supports First Category (below 60) and Second Category (60 and above) with RM5,000 wage ceiling.",
        features: ["First & Second Category", "Employee & employer split", "Wage ceiling RM5,000"],
        badge: "SOCSO",
        badgeColor: "bg-rose-100 text-rose-700",
        gradient: "from-rose-50 to-pink-50",
        border: "border-rose-100",
        cta: "Calculate SOCSO",
        ctaStyle: "bg-rose-600 hover:bg-rose-700",
      },
      {
        href: "/eis-calculator-malaysia",
        emoji: "🛟",
        title: "EIS / SIP Calculator",
        description: "Calculate your Employment Insurance System (EIS/SIP) contributions. 0.2% employee + 0.2% employer, capped at RM4,000 insured wage. See net salary after EIS deduction.",
        features: ["0.2% + 0.2% rate", "Wage ceiling RM4,000", "EIS vs SOCSO vs EPF table"],
        badge: "EIS / SIP",
        badgeColor: "bg-amber-100 text-amber-700",
        gradient: "from-amber-50 to-yellow-50",
        border: "border-amber-100",
        cta: "Calculate EIS",
        ctaStyle: "bg-amber-500 hover:bg-amber-600",
      },
    ],
  },
  {
    id: "loan-finance",
    label: "Loan & Finance",
    description: "Borrowing, repayment, and debt management calculators",
    tools: [
      {
        href: "/loan-calculator",
        emoji: "🏠",
        title: "Loan Calculator",
        description: "Estimate monthly repayments, total interest, and get a full annual amortisation schedule for personal loans, home loans, or car loans.",
        features: ["Monthly repayment", "Total interest cost", "Amortisation table"],
        badge: "Loans",
        badgeColor: "bg-purple-100 text-purple-700",
        gradient: "from-purple-50 to-violet-50",
        border: "border-purple-100",
        cta: "Calculate Loan",
        ctaStyle: "bg-purple-600 hover:bg-purple-700",
      },
      {
        href: "/dsr-calculator-malaysia",
        emoji: "📊",
        title: "DSR Calculator",
        description: "Check your Debt Service Ratio before applying for a loan. See your DSR category, remaining borrowing capacity at 60% and 70% bank thresholds, and tips to improve.",
        features: ["60% / 70% thresholds", "Borrowing capacity", "Eligibility category"],
        badge: "Eligibility",
        badgeColor: "bg-blue-100 text-blue-700",
        gradient: "from-blue-50 to-sky-50",
        border: "border-blue-100",
        cta: "Check DSR",
        ctaStyle: "bg-blue-600 hover:bg-blue-700",
      },
      {
        href: "/car-loan-calculator-malaysia",
        emoji: "🚗",
        title: "Car Loan Calculator",
        description: "Calculate your monthly hire purchase instalment using Malaysia's flat rate method. Enter car price, down payment, interest rate and tenure to see total repayment.",
        features: ["Hire purchase flat rate", "Annual breakdown", "Effective rate estimate"],
        badge: "Car Loan",
        badgeColor: "bg-orange-100 text-orange-700",
        gradient: "from-orange-50 to-amber-50",
        border: "border-orange-100",
        cta: "Calculate Car Loan",
        ctaStyle: "bg-orange-500 hover:bg-orange-600",
      },
      {
        href: "/mortgage-calculator-malaysia",
        emoji: "🏠",
        title: "Mortgage Calculator",
        description: "Calculate your home loan monthly repayment using reducing balance method. See total interest, income needed to qualify, and year-by-year amortisation schedule.",
        features: ["Reducing balance method", "Income required", "30-year amortisation"],
        badge: "Mortgage",
        badgeColor: "bg-indigo-100 text-indigo-700",
        gradient: "from-indigo-50 to-blue-50",
        border: "border-indigo-100",
        cta: "Calculate Mortgage",
        ctaStyle: "bg-indigo-600 hover:bg-indigo-700",
      },
    ],
  },
  {
    id: "savings-investment",
    label: "Savings & Investment",
    description: "Grow your wealth with compounding and savings calculators",
    tools: [
      {
        href: "/compound-interest-calculator",
        emoji: "📈",
        title: "Compound Interest Calculator",
        description: "Discover how your investments grow exponentially with compound interest. Model any compounding frequency with monthly contributions over up to 50 years.",
        features: ["Annual / monthly / daily compounding", "Monthly contributions", "Year-by-year table"],
        badge: "Investment",
        badgeColor: "bg-emerald-100 text-emerald-700",
        gradient: "from-emerald-50 to-green-50",
        border: "border-emerald-100",
        cta: "Calculate Growth",
        ctaStyle: "bg-emerald-600 hover:bg-emerald-700",
      },
      {
        href: "/savings-calculator-malaysia",
        emoji: "💰",
        title: "Savings Calculator",
        description: "See how your monthly savings grow with compound interest. Compare FD, ASB, and EPF rates. Project future value, total deposited, and interest earned.",
        features: ["Future value projection", "Monthly savings model", "Interest earned breakdown"],
        badge: "Savings",
        badgeColor: "bg-teal-100 text-teal-700",
        gradient: "from-teal-50 to-cyan-50",
        border: "border-teal-100",
        cta: "Calculate Savings",
        ctaStyle: "bg-teal-600 hover:bg-teal-700",
      },
      {
        href: "/currency-converter-malaysia",
        emoji: "💱",
        title: "Currency Converter",
        description: "Convert Malaysian Ringgit to USD, SGD, EUR, JPY, CNY, AUD and GBP with indicative reference rates. See all major currency pairs against MYR.",
        features: ["8 major currencies", "MYR reference rates", "Quick swap & amounts"],
        badge: "Currency",
        badgeColor: "bg-violet-100 text-violet-700",
        gradient: "from-violet-50 to-purple-50",
        border: "border-violet-100",
        cta: "Convert Currency",
        ctaStyle: "bg-violet-600 hover:bg-violet-700",
      },
    ],
  },
];

const totalTools = categories.reduce((sum, c) => sum + c.tools.length, 0);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Malaysian Calculators",
  description: "All free calculators for Malaysians — BMI, Salary, Income Tax, EPF, PCB, Loan, and DSR.",
  url: PAGE_URL,
  numberOfItems: totalTools,
  itemListElement: categories.flatMap((cat) =>
    cat.tools.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.title,
      url: `${BASE_URL}${tool.href}`,
      description: tool.description,
    }))
  ),
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CalculatorsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">

        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {totalTools} Free Tools · No Sign-up · Instant Results
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              All Calculators
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Free, accurate calculators built specifically for Malaysians. From health and salary to tax, EPF, and loan planning.
            </p>
          </div>
        </section>

        {/* Category sections */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-gray-900">{cat.label}</h2>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2.5 py-1 rounded-full">
                  {cat.tools.length} {cat.tools.length === 1 ? "tool" : "tools"}
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>
              <p className="text-sm text-gray-500 mb-6 -mt-2">{cat.description}</p>

              {/* Tool cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.href}
                    className={`relative bg-gradient-to-br ${tool.gradient} rounded-2xl border ${tool.border} p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl">{tool.emoji}</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {tool.description}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {tool.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                          <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={tool.href}
                      className={`${tool.ctaStyle} text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center transition-colors`}
                    >
                      {tool.cta} →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Category jump links */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-base font-semibold text-gray-700 mb-4">Jump to category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                >
                  {cat.label}
                  <span className="text-xs text-gray-400">{cat.tools.length}</span>
                </a>
              ))}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 hover:text-blue-600 transition-colors"
              >
                ← Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
