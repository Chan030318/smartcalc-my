import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BMICalculator from "./BMICalculator";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://smartcalc.my";

export const metadata: Metadata = {
  title: "BMI Calculator Malaysia — Asian BMI Chart & Categories",
  description:
    "Free BMI calculator for Malaysians using WHO Asia-Pacific guidelines. Enter your height and weight to get your BMI and Asian category instantly. No sign-up needed.",
  keywords: [
    "BMI calculator Malaysia",
    "body mass index Malaysia",
    "Asian BMI chart",
    "BMI calculator kg cm",
    "healthy BMI Malaysia",
    "kalkulator BMI Malaysia",
    "BMI normal range Malaysia",
  ],
  alternates: {
    canonical: "/bmi-calculator",
  },
  openGraph: {
    title: "BMI Calculator Malaysia — Asian BMI Chart & Categories",
    description:
      "Free BMI calculator using WHO Asia-Pacific guidelines. Get instant BMI results with Asian health categories.",
    url: `${BASE_URL}/bmi-calculator`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BMI Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator Malaysia — Asian BMI Chart",
    description: "Free BMI calculator using WHO Asia-Pacific guidelines for Malaysians.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BMI Calculator Malaysia",
  url: `${BASE_URL}/bmi-calculator`,
  description:
    "Free BMI calculator for Malaysians using WHO Asia-Pacific guidelines with Asian BMI categories.",
  applicationCategory: "HealthApplication",
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
      { "@type": "ListItem", position: 2, name: "BMI Calculator", item: `${BASE_URL}/bmi-calculator` },
    ],
  },
};

export default function BMICalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Asian BMI Guidelines
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              BMI Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Calculate your Body Mass Index using Asia-Pacific thresholds
              recommended for Malaysian and Asian adults.
            </p>
          </div>
        </section>
        <BMICalculator />
      </main>
      <Footer />
    </>
  );
}
