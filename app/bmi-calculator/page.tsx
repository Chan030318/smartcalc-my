import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BMICalculator from "./BMICalculator";

export const metadata: Metadata = {
  title: "BMI Calculator Malaysia — Asian BMI Chart & Categories",
  description:
    "Free BMI calculator for Malaysians using WHO Asia-Pacific guidelines. Enter your height and weight to get your BMI and Asian category instantly.",
  keywords: [
    "BMI calculator Malaysia",
    "body mass index Malaysia",
    "Asian BMI chart",
    "BMI calculator kg cm",
    "healthy BMI Malaysia",
  ],
  alternates: {
    canonical: "/bmi-calculator",
  },
};

export default function BMICalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
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
