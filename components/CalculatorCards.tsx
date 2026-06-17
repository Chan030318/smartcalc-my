import Link from "next/link";

const calculators = [
  {
    href: "/bmi-calculator",
    emoji: "⚖️",
    title: "BMI Calculator",
    description:
      "Calculate your Body Mass Index instantly. Get a clear picture of your health status with personalised BMI interpretation based on Asian health guidelines.",
    badge: "Health",
    badgeColor: "bg-green-100 text-green-700",
    features: ["Weight & height input", "BMI category", "Health tips"],
    cta: "Calculate BMI",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-100",
    ctaStyle: "bg-green-600 hover:bg-green-700",
  },
  {
    href: "/salary-calculator-malaysia",
    emoji: "💰",
    title: "Salary Calculator Malaysia",
    description:
      "Estimate your net take-home pay after EPF, SOCSO, EIS, and PCB (income tax) deductions — based on the latest Malaysian regulations.",
    badge: "Finance",
    badgeColor: "bg-blue-100 text-blue-700",
    features: ["EPF & SOCSO", "PCB income tax", "Net salary breakdown"],
    cta: "Calculate Salary",
    gradient: "from-blue-50 to-sky-50",
    border: "border-blue-100",
    ctaStyle: "bg-blue-600 hover:bg-blue-700",
    popular: true,
  },
  {
    href: "/loan-calculator",
    emoji: "🏦",
    title: "Loan Calculator",
    description:
      "Plan your personal loan, car loan, or home loan repayments. See your monthly installment, total interest, and full amortisation schedule.",
    badge: "Finance",
    badgeColor: "bg-purple-100 text-purple-700",
    features: ["Monthly installment", "Total interest", "Amortisation table"],
    cta: "Calculate Loan",
    gradient: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    ctaStyle: "bg-purple-600 hover:bg-purple-700",
  },
];

export default function CalculatorCards() {
  return (
    <section className="py-20 bg-gray-50" id="calculators">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Calculators
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Free, accurate, and built specifically for Malaysians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {calculators.map((calc) => (
            <div
              key={calc.href}
              className={`relative bg-gradient-to-b ${calc.gradient} rounded-2xl border ${calc.border} p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow`}
            >
              {calc.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-4xl mb-4">{calc.emoji}</div>

              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit ${calc.badgeColor}`}>
                {calc.badge}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{calc.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {calc.description}
              </p>

              <ul className="space-y-2 mb-8">
                {calc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={calc.href}
                className={`${calc.ctaStyle} text-white text-sm font-semibold px-6 py-3 rounded-xl text-center transition-colors`}
              >
                {calc.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
