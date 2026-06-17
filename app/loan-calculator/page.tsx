import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoanCalculator from "./LoanCalculator";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://smartcalc.my";

export const metadata: Metadata = {
  title: "Loan Calculator Malaysia — Monthly Repayment & Amortisation",
  description:
    "Free loan calculator for Malaysia. Instantly calculate your monthly repayment, total interest, and annual amortisation schedule for personal loans, home loans, and car loans.",
  keywords: [
    "loan calculator Malaysia",
    "monthly repayment calculator Malaysia",
    "home loan calculator Malaysia",
    "personal loan calculator Malaysia",
    "car loan calculator Malaysia",
    "mortgage calculator Malaysia",
    "kalkulator pinjaman Malaysia",
    "loan interest calculator",
  ],
  alternates: {
    canonical: "/loan-calculator",
  },
  openGraph: {
    title: "Loan Calculator Malaysia — Monthly Repayment & Amortisation",
    description:
      "Calculate monthly repayments, total interest, and amortisation for any Malaysian loan. Free, instant, no sign-up.",
    url: `${BASE_URL}/loan-calculator`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Loan Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator Malaysia — Monthly Repayment",
    description: "Calculate monthly repayments and total interest for Malaysian loans. Free and instant.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Loan Calculator Malaysia",
  url: `${BASE_URL}/loan-calculator`,
  description:
    "Free loan calculator for Malaysia with reducing-balance amortisation, monthly repayment, and annual schedule.",
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
      { "@type": "ListItem", position: 2, name: "Loan Calculator", item: `${BASE_URL}/loan-calculator` },
    ],
  },
};

export default function LoanCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Reducing Balance · Estimate Only
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Loan Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Estimate your monthly repayment, total interest cost, and year-by-year amortisation for any Malaysian loan — personal, home, or car.
            </p>
          </div>
        </section>
        <LoanCalculator />
      </main>
      <Footer />
    </>
  );
}
