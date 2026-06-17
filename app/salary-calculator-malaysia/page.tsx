import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SalaryCalculator from "./SalaryCalculator";

export const metadata: Metadata = {
  title: "Salary Calculator Malaysia — EPF, SOCSO, EIS & PCB Deductions",
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
  ],
  alternates: {
    canonical: "/salary-calculator-malaysia",
  },
};

export default function SalaryCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
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
      </main>
      <Footer />
    </>
  );
}
