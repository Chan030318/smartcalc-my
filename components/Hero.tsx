"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <>
      <section className="relative overflow-hidden bg-[#071427] text-white">
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
          <div className="absolute left-1/2 top-16 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-emerald-950/70 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-2 text-sm font-semibold text-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              {h.badge}
            </span>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-white">{h.headline1}</span>
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-emerald-300 bg-clip-text text-transparent">
                {h.headline2}
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {h.sub}
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {[h.pill1, h.pill2, h.pill3].map((pill) => (
                <span key={pill} className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm text-gray-300">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/financial-freedom-calculator"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-8 py-4 text-base font-black text-gray-950 shadow-lg shadow-amber-400/20 transition-colors hover:bg-amber-300"
              >
                {h.cta1}
              </Link>
              <Link
                href="/calculators"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/15"
              >
                {h.cta2} <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">
              {[
                { n: h.stat1n, l: h.stat1l },
                { n: h.stat2n, l: h.stat2l },
                { n: h.stat3n, l: h.stat3l },
              ].map((stat) => (
                <div key={stat.n} className="text-center">
                  <p className="text-sm font-black leading-tight text-white sm:text-base">{stat.n}</p>
                  <p className="mt-1 text-xs text-gray-500">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { marker: "01", title: t.mission.t1, desc: t.mission.d1, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { marker: "02", title: t.mission.t2, desc: t.mission.d2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { marker: "03", title: t.mission.t3, desc: t.mission.d3, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
            ].map((item) => (
              <div key={item.title} className={`flex gap-4 rounded-2xl border p-5 ${item.border} ${item.bg}`}>
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border bg-white text-xs font-black ${item.border} ${item.color}`}>
                  {item.marker}
                </div>
                <div>
                  <h3 className={`mb-1 text-sm font-bold ${item.color}`}>{item.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
