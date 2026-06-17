import type { Metadata } from "next";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PcbCalculator from "./PcbCalculator";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/pcb-calculator-malaysia`;

export const metadata: Metadata = {
  title: "PCB Calculator Malaysia 2024 — Monthly Tax Deduction (MTD) Estimator",
  description:
    "Free PCB / MTD calculator for Malaysia. Enter your monthly salary, marital status, children, and TP1 declarations to estimate your monthly Potongan Cukai Berjadual. Includes Zakat rebate, resident and non-resident rates.",
  keywords: [
    "PCB calculator Malaysia",
    "MTD calculator Malaysia",
    "Potongan Cukai Berjadual calculator",
    "monthly tax deduction Malaysia",
    "PCB 2024 Malaysia",
    "LHDN PCB calculator",
    "TP1 declaration Malaysia",
    "kalkulator PCB Malaysia",
    "cukai bulanan Malaysia",
    "PCB non-resident Malaysia",
  ],
  alternates: {
    canonical: "/pcb-calculator-malaysia",
  },
  openGraph: {
    title: "PCB Calculator Malaysia 2024 — Monthly Tax Deduction (MTD) Estimator",
    description:
      "Estimate your monthly PCB / MTD deduction instantly. Enter salary, reliefs, Zakat, and TP1 declarations for an accurate result. YA 2024 rates.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PCB Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCB Calculator Malaysia 2024 — Monthly Tax Deduction Estimator",
    description: "Free LHDN PCB / MTD calculator — enter salary + TP1 reliefs for instant monthly deduction estimate.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PCB Calculator Malaysia",
  url: PAGE_URL,
  description:
    "Free PCB (Potongan Cukai Berjadual) / MTD calculator for Malaysia using the formula method with YA 2024 progressive rates. Supports resident and non-resident rates, TP1 declarations, Zakat rebate, spouse and child reliefs.",
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
      { "@type": "ListItem", position: 2, name: "PCB Calculator Malaysia", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PCB (Potongan Cukai Berjadual)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PCB stands for Potongan Cukai Berjadual (Monthly Tax Deduction / MTD). It is the monthly income tax instalment deducted from your salary by your employer and remitted directly to LHDN. It is a prepayment of your annual income tax spread over 12 months.",
        },
      },
      {
        "@type": "Question",
        name: "How is PCB calculated in Malaysia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PCB is calculated using the formula method: (Monthly salary × 12) minus EPF contributions and declared reliefs gives chargeable income. Progressive tax rates are applied, rebates subtracted, and the result divided by 12 to give the monthly PCB amount.",
        },
      },
      {
        "@type": "Question",
        name: "What is Form TP1 and how does it reduce PCB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Form TP1 allows employees to declare additional tax reliefs to their employer — including life insurance, medical expenses, education fees, spouse relief, and child relief. These reduce the chargeable income used in the PCB calculation, lowering your monthly deduction.",
        },
      },
      {
        "@type": "Question",
        name: "Can Zakat reduce my PCB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Zakat paid to an official State Islamic Religious Council is a ringgit-for-ringgit rebate against your tax payable — more powerful than a relief. RM1 of Zakat reduces your annual tax bill by RM1. Declare monthly Zakat to your employer for immediate PCB reduction.",
        },
      },
    ],
  },
};

export default function PcbCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              YA 2024 · Formula Method · TP1 & Zakat Supported
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              PCB Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Estimate your monthly Potongan Cukai Berjadual (MTD) deduction. Enter your salary, marital status, TP1 declarations, and Zakat — for both resident and non-resident employees.
            </p>
          </div>
        </section>

        <PcbCalculator />
        <FinancialDisclaimer />
      </main>
      <Footer />
    </>
  );
}
