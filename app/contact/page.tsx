import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — SmartCalc MY",
  description:
    "Get in touch with the SmartCalc MY team. We welcome feedback, bug reports, and partnership enquiries.",
  alternates: { canonical: "/contact" },
};

const topics = [
  { emoji: "🐛", title: "Bug Reports", body: "Found a calculation that seems off? Let us know the inputs you used and what result you expected." },
  { emoji: "💡", title: "Feature Requests", body: "Want a new calculator or an additional feature? We'd love to hear what would help you most." },
  { emoji: "🤝", title: "Partnerships", body: "Interested in collaborating, advertising, or licensing our tools? Reach out to discuss." },
  { emoji: "📋", title: "General Enquiries", body: "Any other questions about SmartCalc MY — we're happy to hear from you." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="text-5xl mb-5">✉️</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              We&apos;re a small team passionate about building useful tools for Malaysians. Feedback, corrections, and suggestions are always welcome.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact card */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-5">Get in Touch</h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-lg">📧</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-0.5">Email</p>
                      <a
                        href="mailto:hello@smartcalc.my"
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        hello@smartcalc.my
                      </a>
                      <p className="text-xs text-gray-400 mt-0.5">We aim to respond within 2 business days</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 text-lg">📍</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-0.5">Based In</p>
                      <p className="text-sm text-gray-600">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-lg">🕐</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-0.5">Response Time</p>
                      <p className="text-sm text-gray-600">Within 2 business days</p>
                      <p className="text-xs text-gray-400 mt-0.5">Monday – Friday, MYT (UTC+8)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-700">
                <p className="font-semibold mb-1">Note</p>
                <p className="leading-relaxed">We are not able to provide personalised financial or medical advice. For specific questions about your tax, salary, loans, or health, please consult a qualified professional.</p>
              </div>
            </div>

            {/* Topics */}
            <div className="lg:col-span-3">
              <h2 className="text-lg font-bold text-gray-900 mb-4">What Can We Help With?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topics.map((t) => (
                  <div key={t.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <div className="text-2xl mb-2">{t.emoji}</div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{t.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Before You Write</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Check our FAQ sections on each calculator page — your question may already be answered.",
                    "For calculation discrepancies, include the exact inputs you entered.",
                    "For partnership or advertising enquiries, include your website or company name.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
