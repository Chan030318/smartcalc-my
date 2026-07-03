"use client";

import { useLang } from "@/components/LangProvider";

export default function HomeWhy() {
  const { t } = useLang();
  const c = t.homeWhy;

  return (
    <section className="bg-[#f7f8fb]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-600">{c.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-black leading-tight text-gray-950 sm:text-3xl">
              {c.title}
            </h2>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-600 lg:mt-0">
            {c.body}
          </p>
        </div>
      </div>
    </section>
  );
}
