import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocsoCalculator from "./SocsoCalculator";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "SOCSO Calculator Malaysia 2026 (PERKESO Contribution Calculator)",
  description:
    "Calculate your SOCSO (PERKESO) contributions instantly. Free Malaysia SOCSO calculator for First Category and Second Category employees. See employee and employer contributions based on 2024 rates.",
  keywords: [
    "SOCSO calculator Malaysia",
    "PERKESO calculator",
    "SOCSO contribution 2026",
    "SOCSO first category calculator",
    "SOCSO second category calculator",
    "Malaysia social security calculator",
    "SOCSO employee employer contribution",
  ],
  alternates: { canonical: "/socso-calculator-malaysia" },
  openGraph: {
    title: "SOCSO Calculator Malaysia 2026 (PERKESO Contribution Calculator)",
    description:
      "Calculate your SOCSO (PERKESO) contributions instantly. First Category and Second Category. Employee and employer contributions shown.",
    url: `${BASE_URL}/socso-calculator-malaysia`,
    siteName: "SmartCalc MY",
    type: "website",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
  {
    "@type": "WebApplication",
    name: "SOCSO Calculator Malaysia",
    url: `${BASE_URL}/socso-calculator-malaysia`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    description:
      "Free SOCSO (PERKESO) calculator for Malaysian employees. Calculate First and Second Category employee and employer contributions based on monthly salary.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MYR",
    },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Calculators", item: `${BASE_URL}/calculators` },
      { "@type": "ListItem", position: 3, name: "SOCSO Calculator Malaysia", item: `${BASE_URL}/socso-calculator-malaysia` },
    ],
  },
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SOCSO (PERKESO)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SOCSO (Social Security Organisation), known in Malay as PERKESO, is a Malaysian government agency that provides social security protection to private-sector employees. It was established under the Employees' Social Security Act 1969 and covers work-related accidents, occupational diseases, and invalidity.",
        },
      },
      {
        "@type": "Question",
        name: "How is SOCSO calculated in Malaysia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SOCSO contributions are based on insured wages, capped at RM5,000 per month. First Category (below 60): employee 0.5%, employer 1.75%. Second Category (60 and above): employee 0%, employer 1.25%.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between First Category and Second Category SOCSO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First Category applies to employees below 60 and covers Employment Injury and Invalidity Pension schemes. Both employee and employer contribute. Second Category covers employees aged 60 and above for Employment Injury only — only the employer contributes (1.25%).",
        },
      },
      {
        "@type": "Question",
        name: "Can I withdraw my SOCSO contributions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. SOCSO is an insurance scheme, not a savings account. Contributions fund benefits paid when a valid claim is made (work accident, invalidity, death). There is no personal balance to withdraw.",
        },
      },
    ],
  },
  ],
};

export default function SocsoCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              2024 Rates · First &amp; Second Category · Wage Ceiling RM5,000
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              SOCSO Calculator Malaysia 2026
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Calculate your SOCSO (PERKESO) employee and employer contributions instantly. Supports First Category (below 60) and Second Category (60 &amp; above). Based on official PERKESO 2024 contribution rates.
            </p>
          </div>
        </section>

        <SocsoCalculator />
        <FinancialDisclaimer />
      </main>
      <Footer />
    </>
  );
}
