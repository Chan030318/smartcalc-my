import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IncomeTaxCalculator from "./IncomeTaxCalculator";
import JsonLd from "@/components/JsonLd";
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
  alternates: {
    canonical: "/income-tax-calculator-malaysia",
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Income Tax Calculator Malaysia",
  url: PAGE_URL,
  description:
    "Free Malaysian income tax calculator for Year of Assessment 2024. Calculates tax payable based on annual income, personal reliefs, EPF, medical, education, spouse, and child reliefs using LHDN progressive tax rates.",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Income Tax Calculator Malaysia",
        item: PAGE_URL,
      },
    ],
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who needs to file income tax in Malaysia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Malaysian residents with an annual income exceeding RM34,000 after EPF deduction are required to register and file income tax with LHDN.",
        },
      },
      {
        "@type": "Question",
        name: "What is the personal relief for YA 2024?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every Malaysian tax resident receives an automatic personal relief of RM9,000 per year of assessment.",
        },
      },
      {
        "@type": "Question",
        name: "What is the income tax rate in Malaysia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Malaysia uses progressive income tax rates from 0% to 30% depending on chargeable income. The first RM5,000 is taxed at 0%, rising through 1%, 3%, 8%, 13%, 21%, 24%, 24.5%, 25%, up to 30% on income above RM2,000,000.",
        },
      },
    ],
  },
};

export default function IncomeTaxPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
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
      </main>
      <Footer />
    </>
  );
}
