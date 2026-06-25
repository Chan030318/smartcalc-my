import Link from "next/link";
import type { ReactNode } from "react";

export interface CalcFaq {
  q: string;
  a: string;
}

export interface RelatedCalc {
  href: string;
  title: string;
  emoji: string;
  desc: string;
}

interface Props {
  faqs: CalcFaq[];
  relatedCalcs: RelatedCalc[];
  children: ReactNode;
}

export default function CalcSeoSection({ faqs, relatedCalcs, children }: Props) {
  return (
    <section className="bg-white border-t border-gray-100 mt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main editorial content */}
        <div className="space-y-10">{children}</div>

        {/* FAQ */}
        {faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="ml-4 flex-shrink-0 text-gray-400 text-lg leading-none group-open:rotate-180 transition-transform duration-200">
                      ▾
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Related Calculators */}
        {relatedCalcs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Calculators</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedCalcs.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{c.emoji}</span>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">{c.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{c.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
