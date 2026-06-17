import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EpfCalculator from "./EpfCalculator";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/epf-calculator-malaysia`;

export const metadata: Metadata = {
  title: "EPF Calculator Malaysia 2024 — KWSP Retirement Savings Projection",
  description:
    "Free EPF / KWSP calculator for Malaysia. Project your retirement savings with year-by-year contributions, employer matching, and dividend growth. Based on 2024 EPF rates.",
  keywords: [
    "EPF calculator Malaysia",
    "KWSP calculator",
    "EPF retirement calculator",
    "EPF savings calculator Malaysia",
    "kalkulator KWSP",
    "EPF contribution calculator",
    "EPF projection Malaysia",
    "retirement savings Malaysia",
    "EPF dividend calculator",
    "how much EPF at retirement Malaysia",
  ],
  alternates: {
    canonical: "/epf-calculator-malaysia",
  },
  openGraph: {
    title: "EPF Calculator Malaysia 2024 — KWSP Retirement Savings Projection",
    description:
      "Project your EPF / KWSP retirement savings with employer contributions and dividend compounding. Free, instant, year-by-year breakdown.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EPF Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPF Calculator Malaysia — KWSP Retirement Savings Projection",
    description: "Free EPF retirement savings calculator — see how much you'll have at 55 with dividend compounding.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "EPF Calculator Malaysia",
  url: PAGE_URL,
  description:
    "Free EPF / KWSP retirement savings projection calculator for Malaysia. Models year-by-year employee contributions (11%), employer contributions (12–13%), and annual dividend compounding based on EPF rates.",
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
      { "@type": "ListItem", position: 2, name: "EPF Calculator Malaysia", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the EPF contribution rates in Malaysia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employees contribute 11% of gross monthly salary. Employers contribute 13% for salaries ≤RM5,000 and 12% for salaries above RM5,000.",
        },
      },
      {
        "@type": "Question",
        name: "When can I withdraw my EPF savings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full withdrawal from Akaun Persaraan is allowed at age 55 or 60. Akaun Fleksibel (10% of contributions) can be withdrawn at any time via i-Akaun.",
        },
      },
      {
        "@type": "Question",
        name: "What dividend rate does EPF pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EPF declares dividends annually. Recent Akaun Persaraan rates: 5.50% (2023), 5.35% (2022), 6.10% (2021), 5.20% (2020). The long-term average is around 6%.",
        },
      },
    ],
  },
};

export default function EpfCalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              2024 Rates · Employee 11% · Employer 12–13% · Dividend Compounding
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              EPF Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Project your EPF / KWSP retirement savings with your current balance, monthly salary, annual increments, and dividend compounding — with a full year-by-year breakdown.
            </p>
          </div>
        </section>

        <EpfCalculator />
      </main>
      <Footer />
    </>
  );
}
