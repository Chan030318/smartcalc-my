const benefits = [
  {
    icon: "🇲🇾",
    title: "Built for Malaysia",
    description:
      "All calculations use Malaysian-specific rates — EPF contributions, SOCSO, EIS, PCB tax brackets, and local health guidelines.",
  },
  {
    icon: "⚡",
    title: "Instant Results",
    description:
      "No loading screens. Results update as you type so you can explore different scenarios in seconds.",
  },
  {
    icon: "🔒",
    title: "100% Private",
    description:
      "All calculations happen in your browser. We never store or transmit your personal financial or health data.",
  },
  {
    icon: "📱",
    title: "Works on Any Device",
    description:
      "Fully responsive design works perfectly on your phone, tablet, or desktop — no app download required.",
  },
  {
    icon: "🆓",
    title: "Always Free",
    description:
      "No subscriptions, no hidden fees, no sign-up. SmartCalc MY is and will always be free to use.",
  },
  {
    icon: "🔄",
    title: "Always Up-to-date",
    description:
      "We keep our calculators updated with the latest Malaysian tax rates, EPF rates, and statutory contribution rules.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why SmartCalc MY?
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Trusted by Malaysians for fast, accurate, and private calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-3xl flex-shrink-0">{b.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 border-t border-gray-100 pt-10 flex flex-wrap justify-center gap-10 text-center">
          {[
            { stat: "3", label: "Calculators" },
            { stat: "100%", label: "Free Forever" },
            { stat: "0", label: "Data Collected" },
            { stat: "🇲🇾", label: "Malaysia-focused" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl font-extrabold text-blue-600">{item.stat}</div>
              <div className="text-sm text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
