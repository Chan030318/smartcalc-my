import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EisCalculator from "./EisCalculator";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "EIS Calculator Malaysia 2026 (SIP / Employment Insurance Contribution)",
  description:
    "Calculate your EIS (SIP) contributions instantly. Free Malaysia EIS calculator showing employee and employer contributions. 0.2% each, wage ceiling RM4,000. Based on PERKESO 2024 rates.",
  keywords: [
    "EIS calculator Malaysia",
    "SIP calculator Malaysia",
    "employment insurance system calculator",
    "EIS contribution Malaysia 2026",
    "PERKESO EIS calculator",
    "EIS SIP Malaysia rate",
    "EIS deduction calculator",
  ],
  alternates: { canonical: "/eis-calculator-malaysia" },
  openGraph: {
    title: "EIS Calculator Malaysia 2026 (SIP / Employment Insurance Contribution)",
    description:
      "Free EIS (SIP) contribution calculator for Malaysian employees. 0.2% employee + 0.2% employer, RM4,000 wage ceiling.",
    url: `${BASE_URL}/eis-calculator-malaysia`,
    siteName: "SmartCalc MY",
    type: "website",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "EIS Calculator Malaysia",
      url: `${BASE_URL}/eis-calculator-malaysia`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description:
        "Free EIS (Employment Insurance System / SIP) calculator for Malaysian employees. Calculate employee and employer contributions based on PERKESO 2024 rates.",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "EIS Calculator Malaysia",
          item: `${BASE_URL}/eis-calculator-malaysia`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is EIS (Employment Insurance System) Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EIS (Employment Insurance System) or SIP (Sistem Insurans Pekerjaan) is a mandatory social protection scheme under PERKESO that provides temporary financial assistance to employees who lose their jobs through retrenchment, contract expiry, or voluntary separation scheme (VSS).",
          },
        },
        {
          "@type": "Question",
          name: "What is the EIS contribution rate in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both employee and employer each contribute 0.2% of the employee's insured wages per month. The wage ceiling is RM4,000, so the maximum contribution is RM8.00 per side (RM16.00 total) per month.",
          },
        },
        {
          "@type": "Question",
          name: "Can I claim EIS benefits if I resign voluntarily?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally no. EIS Job Search Allowance is only available for involuntary job loss — retrenchment, company closure, or contract non-renewal. Voluntary resignation is not eligible unless it qualifies as constructive dismissal.",
          },
        },
        {
          "@type": "Question",
          name: "What is the EIS wage ceiling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The EIS insured wage ceiling is RM4,000 per month. Employees earning above RM4,000 still contribute, but only at the RM4,000 cap — giving a maximum employee contribution of RM8.00/month.",
          },
        },
      ],
    },
  ],
};

export default function EisCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              2024 Rates · 0.2% Employee · 0.2% Employer · Wage Ceiling RM4,000
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              EIS Calculator Malaysia 2026
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Calculate your EIS (SIP — Sistem Insurans Pekerjaan) employee and employer contributions instantly. Based on official PERKESO 2024 rates — 0.2% each side, wage ceiling RM4,000.
            </p>
          </div>
        </section>

        <EisCalculator />
        <FinancialDisclaimer />
      </main>
      <Footer />
    </>
  );
}
