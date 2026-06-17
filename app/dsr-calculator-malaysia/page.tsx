import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DsrCalculator from "./DsrCalculator";
import JsonLd from "@/components/JsonLd";
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
  alternates: {
    canonical: "/dsr-calculator-malaysia",
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "DSR Calculator Malaysia",
  url: PAGE_URL,
  description:
    "Free Debt Service Ratio (DSR) calculator for Malaysia. Enter monthly income, existing loan commitments, and new loan repayment to check DSR percentage, loan eligibility category, and remaining borrowing capacity at 60% and 70% bank thresholds.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
  publisher: {
    "@type": "Organization",
    name: "SmartCalc MY",
    url: BASE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "DSR Calculator Malaysia", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is DSR (Debt Service Ratio)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DSR is the percentage of gross monthly income used to service all debt repayments. It is calculated as (total monthly loan repayments ÷ gross monthly income) × 100. Malaysian banks use DSR as the primary metric for loan eligibility.",
        },
      },
      {
        "@type": "Question",
        name: "What DSR do Malaysian banks accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Malaysian banks use a DSR threshold of 60% for standard loans. Some banks allow up to 70% for borrowers earning above RM10,000 per month or for government employees. A DSR above 70% will typically result in loan rejection.",
        },
      },
      {
        "@type": "Question",
        name: "What monthly commitments are included in DSR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monthly debt commitments include home loan repayments, car loans, personal loans, PTPTN repayments, and 5% of credit card limits per card. Rent, utilities, and living expenses are not included.",
        },
      },
      {
        "@type": "Question",
        name: "Is DSR calculated on gross or net income?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Malaysian banks typically use gross monthly income (before EPF and tax deductions) when calculating DSR for salaried employees.",
        },
      },
    ],
  },
};

export default function DsrCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
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
      </main>
      <Footer />
    </>
  );
}
