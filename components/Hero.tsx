import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <span className="inline-block bg-white/15 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          Free Malaysian Calculators
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Smart Calculators for <br className="hidden sm:block" />
          <span className="text-yellow-300">Malaysians</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
          Calculate your BMI, estimate your take-home salary, or plan your loan repayments — all in one place, completely free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/bmi-calculator"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Try BMI Calculator
          </Link>
          <Link
            href="/salary-calculator-malaysia"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
          >
            Calculate My Salary
          </Link>
          <Link
            href="/calculators"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-yellow-400 text-blue-900 font-semibold rounded-xl hover:bg-yellow-300 transition-colors"
          >
            Browse All Tools →
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 text-blue-200 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Free
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Malaysia-specific
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Instant Results
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No Sign-up Needed
          </div>
        </div>
      </div>
    </section>
  );
}
