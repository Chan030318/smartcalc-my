import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — SmartCalc MY",
  description:
    "SmartCalc MY provides free, accurate calculators built specifically for Malaysians — BMI, salary, and loan calculators using Malaysian standards and regulations.",
  alternates: { canonical: "/about" },
};

const calculators = [
  {
    href: "/bmi-calculator",
    emoji: "⚖️",
    title: "BMI Calculator",
    desc: "Uses WHO Asia-Pacific guidelines, with lower thresholds calibrated for Malaysian and Asian adults.",
  },
  {
    href: "/salary-calculator-malaysia",
    emoji: "💰",
    title: "Salary Calculator",
    desc: "Computes EPF (11%), SOCSO, EIS, and estimated PCB income tax using 2024 statutory rates.",
  },
  {
    href: "/loan-calculator",
    emoji: "🏦",
    title: "Loan Calculator",
    desc: "Reducing-balance amortisation with annual schedule — suitable for personal, home, and car loans.",
  },
];

const values = [
  { emoji: "🎯", title: "Malaysia-First", body: "Every calculator uses rates, thresholds, and regulations specific to Malaysia — not generic global figures." },
  { emoji: "🔒", title: "100% Private", body: "All calculations run entirely in your browser. We never collect, store, or transmit your personal data." },
  { emoji: "⚡", title: "Instant Results", body: "No sign-up, no waiting. Enter your numbers and get results immediately." },
  { emoji: "📱", title: "Works Everywhere", body: "Fully responsive — use SmartCalc MY on your phone, tablet, or desktop." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="text-5xl mb-5">🧮</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About SmartCalc MY</h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Free, accurate, and built for Malaysians. SmartCalc MY gives you the financial and health tools you need — without sign-ups, fees, or data collection.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most online calculators are built for a global audience and use generic assumptions that don't reflect Malaysian realities — different EPF rates, SOCSO caps, Asian BMI thresholds, and local lending norms. SmartCalc MY was built to fill that gap.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We want every Malaysian — whether you&apos;re a fresh graduate calculating your first take-home pay, a homebuyer estimating a mortgage, or someone tracking their health — to have access to reliable tools that reflect <em>your</em> context.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All our calculators are free, run locally in your browser, and are kept up-to-date with the latest Malaysian statutory rates and guidelines.
            </p>
          </div>
        </section>

        {/* Calculators */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {calculators.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-2xl mb-3">{v.emoji}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-amber-800 mb-3">Important Disclaimer</h2>
            <p className="text-amber-700 text-sm leading-relaxed mb-3">
              All results produced by SmartCalc MY calculators are <strong>estimates for informational purposes only</strong>. They do not constitute financial, medical, or legal advice.
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Salary calculations are based on standard statutory rates and a single personal relief — actual deductions depend on your declared reliefs and employer arrangements. Loan repayments assume reducing-balance interest and do not include fees, insurance, or variable rate changes. BMI is a screening tool and should be interpreted alongside professional medical advice. Always consult a qualified professional before making financial or health decisions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
