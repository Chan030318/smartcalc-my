"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <>
      {/* ── Main Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 text-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-emerald-500/15 text-emerald-300 text-sm font-semibold px-5 py-2 rounded-full mb-8 border border-emerald-500/25">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              {h.badge}
            </span>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6">
              <span className="text-white">{h.headline1}</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {h.headline2}
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed mb-10">
              {h.sub}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {[h.pill1, h.pill2, h.pill3].map((p) => (
                <span key={p} className="bg-white/8 text-gray-300 text-sm px-4 py-1.5 rounded-full border border-white/15">
                  {p}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/financial-freedom-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black rounded-2xl transition-colors shadow-lg shadow-emerald-500/25 text-base">
                🏆 {h.cta1}
              </Link>
              <Link href="/calculators"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/20 transition-colors text-base">
                {h.cta2} →
              </Link>
            </div>

            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { n: h.stat1n, l: h.stat1l },
                { n: h.stat2n, l: h.stat2l },
                { n: h.stat3n, l: h.stat3l },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <p className="text-white font-black text-sm sm:text-base leading-tight">{s.n}</p>
                  <p className="text-gray-500 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Strip ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: "📖", title: t.mission.t1, desc: t.mission.d1, color: "text-blue-600",   bg: "bg-blue-50",   border: "border-blue-100"   },
              { emoji: "💸", title: t.mission.t2, desc: t.mission.d2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { emoji: "🏆", title: t.mission.t3, desc: t.mission.d3, color: "text-amber-600",  bg: "bg-amber-50",  border: "border-amber-100"   },
            ].map((m) => (
              <div key={m.title} className={`flex gap-4 p-5 rounded-2xl border ${m.border} ${m.bg}`}>
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl ${m.bg} border ${m.border}`}>
                  {m.emoji}
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${m.color} mb-1`}>{m.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
