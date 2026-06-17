import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CalculatorCards from "@/components/CalculatorCards";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SmartCalc MY — Free BMI, Salary & Loan Calculators for Malaysians",
  description:
    "Free online calculators for Malaysians. Instantly calculate your BMI, estimate your net salary after EPF & PCB deductions, and plan your loan repayments.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
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
