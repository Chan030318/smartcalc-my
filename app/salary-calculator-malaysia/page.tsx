import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SalaryCalculator from "./SalaryCalculator";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

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
  alternates: {
    canonical: "/salary-calculator-malaysia",
  },
  openGraph: {
    title: "Salary Calculator Malaysia — EPF, SOCSO, EIS & PCB 2024",
    description:
      "Calculate your Malaysian take-home pay after EPF, SOCSO, EIS, and PCB deductions. Free, instant, no sign-up.",
    url: `${BASE_URL}/salary-calculator-malaysia`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Salary Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Calculator Malaysia — EPF, SOCSO, EIS & PCB",
    description: "Calculate your Malaysian take-home pay instantly. Free, accurate, 2024 rates.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Salary Calculator Malaysia",
  url: `${BASE_URL}/salary-calculator-malaysia`,
  description:
    "Free Malaysian salary calculator with EPF, SOCSO, EIS, and PCB income tax deductions using 2024 statutory rates.",
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
      { "@type": "ListItem", position: 2, name: "Salary Calculator", item: `${BASE_URL}/salary-calculator-malaysia` },
    ],
  },
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
      </main>
      <Footer />
    </>
  );
}
