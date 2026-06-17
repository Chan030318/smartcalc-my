import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CalculatorCards from "@/components/CalculatorCards";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://smartcalc.my";

export const metadata: Metadata = {
  title: "SmartCalc MY — Free BMI, Salary & Loan Calculators for Malaysians",
  description:
    "Free online calculators for Malaysians. Instantly calculate your BMI, estimate your net salary after EPF & PCB deductions, and plan your loan repayments.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SmartCalc MY — Free BMI, Salary & Loan Calculators for Malaysians",
    description:
      "Free BMI, Salary, and Loan calculators built for Malaysians. Instant results, no sign-up required.",
    url: BASE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SmartCalc MY",
  url: BASE_URL,
  description:
    "Free online calculators for Malaysians — BMI, Salary (EPF/PCB), and Loan calculators.",
  publisher: {
    "@type": "Organization",
    name: "SmartCalc MY",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/icon-192.png`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CalculatorCards />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
