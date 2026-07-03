"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";

export default function HomePillars() {
  const { t } = useLang();
  const c = t.homePillars;
  const itemLinks = ["#", "/mindset", "/finance", "#"];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">{c.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-gray-950 sm:text-4xl">{c.title}</h2>
          </div>
          <span className="w-fit rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700">
            {c.soon}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item, index) => {
            const href = itemLinks[index] ?? "#";
            const isComingSoon = href === "#";

            return (
            <Link
              key={item.title}
              href={href}
              aria-disabled={isComingSoon}
              className="group flex min-h-[220px] flex-col rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors hover:border-amber-200 hover:bg-amber-50/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white text-xl font-black text-gray-900">
                  {item.icon}
                </span>
                {isComingSoon && (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-500 ring-1 ring-gray-200">
                    {c.soon}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-black text-gray-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{item.desc}</p>
            </Link>
            );
          })}
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center">
          <Link href="/getting-started" className="text-sm font-black text-amber-800 hover:text-amber-700">
            {c.starterLabel} <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
