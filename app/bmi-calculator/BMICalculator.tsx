"use client";

import { useState, useCallback } from "react";
import { trackBmiCalculated } from "@/lib/gtag";

type BMICategory = {
  label: string;
  color: string;
  bg: string;
  border: string;
  description: string;
};

const BMI_CATEGORIES: BMICategory[] = [
  {
    label: "Underweight",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-300",
    description:
      "You may need to gain some weight. Consult a healthcare professional for personalised advice.",
  },
  {
    label: "Normal Weight",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-300",
    description:
      "Great — your BMI falls within the healthy range for Asian adults. Keep up your healthy lifestyle!",
  },
  {
    label: "Overweight",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    description:
      "You are in the overweight range. Small lifestyle changes in diet and activity can make a big difference.",
  },
  {
    label: "Obese",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-300",
    description:
      "Your BMI indicates obesity. We recommend speaking with a doctor about a weight management plan.",
  },
];

function getCategory(bmi: number): BMICategory {
  if (bmi < 18.5) return BMI_CATEGORIES[0];
  if (bmi < 23) return BMI_CATEGORIES[1];
  if (bmi < 27.5) return BMI_CATEGORIES[2];
  return BMI_CATEGORIES[3];
}

function getBMIBarPercent(bmi: number): number {
  return Math.min(100, Math.max(0, ((bmi - 10) / 30) * 100));
}

const faqs = [
  {
    q: "What is BMI?",
    a: "Body Mass Index (BMI) is a simple measure that uses your height and weight to estimate your body fat level. It is calculated by dividing your weight in kilograms by your height in metres squared (kg/m²).",
  },
  {
    q: "Why does this calculator use Asian BMI categories?",
    a: "Research shows that Asian populations — including Malaysians — develop obesity-related health risks at lower BMI thresholds than Western populations. The WHO Asia-Pacific guidelines set the overweight cut-off at 23 and obesity at 27.5, compared to 25 and 30 for the global standard.",
  },
  {
    q: "Is BMI an accurate measure of health?",
    a: "BMI is a useful screening tool but has limitations. It does not distinguish between muscle and fat, and may misclassify athletes, elderly individuals, or pregnant women. Always consult a healthcare professional for a full health assessment.",
  },
  {
    q: "What BMI range is healthy for Malaysians?",
    a: "For Malaysian and Asian adults, a BMI between 18.5 and 22.9 is considered healthy (normal weight). BMI of 23–27.4 is overweight, and 27.5 or above is obese, based on Asia-Pacific guidelines.",
  },
  {
    q: "How can I improve my BMI?",
    a: "A balanced diet with adequate vegetables, fruits, and protein combined with at least 150 minutes of moderate exercise per week is a proven approach. Speak with a registered dietitian or your GP for personalised guidance.",
  },
];

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculate = useCallback(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return;
    const heightM = h / 100;
    const result = Math.round((w / (heightM * heightM)) * 10) / 10;
    setBmi(result);
    trackBmiCalculated(result);
  }, [height, weight]);

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
  };

  const category = bmi !== null ? getCategory(bmi) : null;

  return (
    <>
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Enter Your Measurements
            </h2>
            <div className="space-y-5">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="height"
                >
                  Height
                </label>
                <div className="relative">
                  <input
                    id="height"
                    type="number"
                    min="50"
                    max="300"
                    placeholder="e.g. 170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-14 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">
                    cm
                  </span>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="weight"
                >
                  Weight
                </label>
                <div className="relative">
                  <input
                    id="weight"
                    type="number"
                    min="1"
                    max="500"
                    placeholder="e.g. 65"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-14 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">
                    kg
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              <button
                onClick={calculate}
                disabled={!height || !weight}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Calculate BMI
              </button>
              {bmi !== null && (
                <button
                  onClick={reset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {bmi === null ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">⚖️</div>
                <p className="text-gray-400 text-sm">
                  Enter your height and weight, then tap{" "}
                  <strong>Calculate BMI</strong>.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Your BMI</p>
                  <p className={`text-6xl font-bold mb-2 ${category!.color}`}>
                    {bmi}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${category!.bg} ${category!.color}`}
                  >
                    {category!.label}
                  </span>
                </div>

                {/* BMI gradient bar */}
                <div className="mb-5">
                  <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-500">
                    <div
                      className="absolute top-0 h-full w-1 bg-gray-900 rounded-full -translate-x-1/2 transition-all duration-500"
                      style={{ left: `${getBMIBarPercent(bmi)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>10</span>
                    <span>18.5</span>
                    <span>23</span>
                    <span>27.5</span>
                    <span>40+</span>
                  </div>
                </div>

                <div
                  className={`rounded-xl border p-4 text-sm ${category!.bg} ${category!.border}`}
                >
                  <p className={`font-medium ${category!.color} mb-1`}>
                    {category!.label}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {category!.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Asian BMI Category Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Asian BMI Categories
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Based on WHO Asia-Pacific guidelines — recommended for Malaysian,
            Chinese, Indian, and other Asian populations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">Category</th>
                  <th className="pb-3 font-semibold text-gray-700">BMI Range</th>
                  <th className="pb-3 font-semibold text-gray-700 hidden sm:table-cell">
                    Health Risk
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "Underweight",
                    range: "< 18.5",
                    risk: "Low (but other risks)",
                    color: "text-blue-600",
                    dot: "bg-blue-400",
                  },
                  {
                    label: "Normal Weight",
                    range: "18.5 – 22.9",
                    risk: "Minimal",
                    color: "text-green-600",
                    dot: "bg-green-400",
                  },
                  {
                    label: "Overweight",
                    range: "23.0 – 27.4",
                    risk: "Moderate",
                    color: "text-yellow-600",
                    dot: "bg-yellow-400",
                  },
                  {
                    label: "Obese",
                    range: "≥ 27.5",
                    risk: "High",
                    color: "text-red-600",
                    dot: "bg-red-500",
                  },
                ].map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${row.dot}`}
                        />
                        <span className={`font-medium ${row.color}`}>
                          {row.label}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 text-gray-700 font-mono">{row.range}</td>
                    <td className="py-3 text-gray-500 hidden sm:table-cell">
                      {row.risk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            * The global WHO standard uses 25 for overweight and 30 for obese.
            Asian guidelines are stricter because studies show higher metabolic
            risk at lower BMI in Asian populations.
          </p>
        </div>
      </section>

      {/* Explanation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What is BMI?</h2>
            <p className="text-gray-600 leading-relaxed">
              Body Mass Index (BMI) is a simple numerical value derived from your
              height and weight. It is widely used by healthcare professionals as
              a quick screening tool to identify whether a person&apos;s weight may be
              causing health risks.
            </p>
            <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 font-mono text-sm text-gray-700 text-center">
              BMI = Weight (kg) ÷ Height² (m)
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Asian BMI Thresholds Matter
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Multiple studies across Asian populations — including Malaysians —
              have found that cardiometabolic risk factors such as diabetes,
              hypertension, and dyslipidaemia begin to rise at a BMI of 23, which
              is lower than the global cutoff of 25. The WHO therefore recommends
              lower action points for Asian populations.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              This calculator applies those Asia-Pacific thresholds so the results
              are more relevant and actionable for you as a Malaysian.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Limitations of BMI
            </h2>
            <p className="text-gray-600 leading-relaxed">
              BMI is a population-level screening tool and has well-known
              limitations. It does not account for muscle mass, bone density, age,
              sex, or fat distribution. An athlete with high muscle mass may have
              an &quot;overweight&quot; BMI despite being very healthy, while someone with
              low muscle but high visceral fat may show a normal BMI yet carry
              significant health risks.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Always interpret BMI alongside other health metrics and consult a
              licensed healthcare professional for an accurate assessment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
