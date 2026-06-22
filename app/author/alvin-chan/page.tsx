import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Alvin Chan Wun Long — Creator of SmartCalc MY",
  description:
    "Alvin Chan Wun Long is a Software Engineer based in Malaysia and the creator of SmartCalc MY — a free calculator platform covering personal finance, salary, EPF, tax, and housing loan calculations for Malaysians.",
  alternates: { canonical: "/author/alvin-chan" },
  openGraph: {
    title: "Alvin Chan Wun Long — Creator of SmartCalc MY",
    description:
      "Software Engineer and creator of SmartCalc MY. Building free, accurate calculators and guides for Malaysians.",
    url: `${BASE_URL}/author/alvin-chan`,
    siteName: "SmartCalc MY",
    type: "profile",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alvin Chan Wun Long",
  url: `${BASE_URL}/author/alvin-chan`,
  jobTitle: "Software Engineer",
  description:
    "Creator of SmartCalc MY — a free financial calculator platform for Malaysian users covering salary, EPF, income tax, SOCSO, EIS, loan, and DSR calculations.",
  knowsAbout: [
    "Personal Finance",
    "Salary Calculations",
    "EPF (Employees Provident Fund)",
    "Income Tax Malaysia",
    "Housing Loan Malaysia",
    "SOCSO Contributions",
    "EIS Employment Insurance",
    "Debt Service Ratio",
  ],
  worksFor: {
    "@type": "Organization",
    name: "SmartCalc MY",
    url: BASE_URL,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "MY",
    addressLocality: "Malaysia",
  },
  sameAs: [`${BASE_URL}/author/alvin-chan`],
};

const calculators = [
  { href: "/bmi-calculator", emoji: "⚖️", label: "BMI Calculator" },
  { href: "/salary-calculator-malaysia", emoji: "💰", label: "Salary Calculator" },
  { href: "/income-tax-calculator-malaysia", emoji: "🧾", label: "Income Tax Calculator" },
  { href: "/epf-calculator-malaysia", emoji: "🏦", label: "EPF Calculator" },
  { href: "/pcb-calculator-malaysia", emoji: "📋", label: "PCB Calculator" },
  { href: "/socso-calculator-malaysia", emoji: "🛡️", label: "SOCSO Calculator" },
  { href: "/eis-calculator-malaysia", emoji: "🛟", label: "EIS Calculator" },
  { href: "/loan-calculator", emoji: "🏠", label: "Loan Calculator" },
  { href: "/dsr-calculator-malaysia", emoji: "📊", label: "DSR Calculator" },
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
];

const topics = [
  { emoji: "💰", label: "Personal Finance" },
  { emoji: "🧮", label: "Salary Calculations" },
  { emoji: "🏦", label: "EPF / KWSP" },
  { emoji: "🧾", label: "Income Tax Malaysia" },
  { emoji: "🏠", label: "Housing Loan Education" },
  { emoji: "🛡️", label: "SOCSO & EIS" },
];

export default function AuthorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Profile hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                A
              </div>
              {/* Identity */}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Author</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Alvin Chan Wun Long</h1>
                <p className="text-gray-500 text-base">
                  Software Engineer &middot; Creator of SmartCalc MY &middot; Based in Malaysia
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {topics.map((t) => (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {t.emoji} {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">About</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Alvin Chan Wun Long is a Software Engineer based in Malaysia and the creator of{" "}
                <Link href="/" className="text-blue-600 hover:underline font-medium">
                  SmartCalc MY
                </Link>{" "}
                — a free calculator platform built specifically for Malaysians.
              </p>
              <p>
                SmartCalc MY was created to fill a simple gap: most financial calculators online use generic
                global figures that don&apos;t reflect Malaysian statutory rates. Alvin built SmartCalc MY to
                give Malaysians accurate, up-to-date tools for understanding their salary deductions, EPF
                contributions, income tax, SOCSO, EIS, loan eligibility, and more — all in one place, with
                no sign-up required.
              </p>
              <p>
                Alvin&apos;s focus areas include personal finance education for the Malaysian market, salary
                and payroll calculations under Malaysian law (EPF, SOCSO, EIS, PCB/MTD), income tax
                planning under LHDN guidelines, and housing loan and DSR education for first-time home
                buyers.
              </p>
              <p>
                All content on SmartCalc MY is written for educational purposes to help Malaysians make
                more informed financial decisions. Results from SmartCalc MY calculators are estimates and
                should be verified with official sources or qualified professionals before acting on them.
              </p>
            </div>
          </div>
        </section>

        {/* Calculators */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Calculators by Alvin Chan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {calculators.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all group"
                >
                  <span className="text-xl flex-shrink-0">{c.emoji}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                    {c.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Guides by Alvin Chan
            </h2>
            <ul className="space-y-2">
              {guides.map((g) => (
                <li key={g.href}>
                  <Link
                    href={g.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors group"
                  >
                    <span className="text-gray-300 group-hover:text-blue-400 flex-shrink-0">→</span>
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
