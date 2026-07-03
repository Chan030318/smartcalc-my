"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";

const CONTENT = {
  en: {
    eyebrow: "Our vision",
    title: "Helping young Malaysians turn salary into freedom.",
    intro:
      "SmartCalc MY exists to make money simple: understand your income, protect your cash flow, build passive income, and know when work can become a choice.",
    activeTitle: "Active income",
    activeText: "You trade time for money. Salary, freelance work, overtime, and commissions stop when you stop.",
    passiveTitle: "Passive income",
    passiveText: "You build assets that can keep paying you. EPF dividends, ASB, REITs, rental income, and business systems work beyond your daily hours.",
    compareNote:
      "The goal is not to quit tomorrow. The goal is to build enough passive income to cover your expenses, step by step.",
    roadmapTitle: "From salary to freedom",
    steps: [
      ["01", "Earn active income", "Use salary and business income as fuel, not as the final destination."],
      ["02", "Protect cash flow", "Track tax, debt, commitments, and emergency savings before lifestyle grows."],
      ["03", "Buy or build assets", "Move part of cash flow into EPF, ASB, REITs, dividends, rental, or business systems."],
      ["04", "Measure freedom", "Compare passive income with monthly expenses until work becomes a choice."],
    ],
    ctaTitle: "When can you retire?",
    ctaText: "Retirement is not just an age. It is the point where passive income can cover your monthly expenses.",
    cta: "Calculate my freedom number",
  },
  bm: {
    eyebrow: "Visi kami",
    title: "Bantu anak muda Malaysia tukar gaji kepada kebebasan.",
    intro:
      "SmartCalc MY mahu jadikan kewangan mudah difahami: faham pendapatan, jaga cash flow, bina pendapatan pasif, dan tahu bila kerja menjadi pilihan.",
    activeTitle: "Pendapatan aktif",
    activeText: "Kau tukar masa dengan wang. Gaji, kerja freelance, overtime, dan komisen berhenti bila kau berhenti.",
    passiveTitle: "Pendapatan pasif",
    passiveText: "Kau bina aset yang terus membayar. Dividen EPF, ASB, REITs, sewa, dan sistem bisnes boleh bekerja di luar masa harian kau.",
    compareNote:
      "Matlamatnya bukan berhenti kerja esok. Matlamatnya ialah bina pendapatan pasif yang cukup untuk menanggung perbelanjaan, langkah demi langkah.",
    roadmapTitle: "Dari gaji kepada kebebasan",
    steps: [
      ["01", "Jana pendapatan aktif", "Guna gaji dan pendapatan bisnes sebagai bahan bakar, bukan destinasi terakhir."],
      ["02", "Lindungi cash flow", "Pantau cukai, hutang, komitmen, dan dana kecemasan sebelum gaya hidup membesar."],
      ["03", "Beli atau bina aset", "Alihkan sebahagian cash flow ke EPF, ASB, REITs, dividen, sewa, atau sistem bisnes."],
      ["04", "Ukur kebebasan", "Bandingkan pendapatan pasif dengan belanja bulanan sehingga kerja menjadi pilihan."],
    ],
    ctaTitle: "Bila kau boleh bersara?",
    ctaText: "Persaraan bukan sekadar umur. Ia ialah titik apabila pendapatan pasif mampu menanggung perbelanjaan bulanan.",
    cta: "Kira freedom number saya",
  },
  zh: {
    eyebrow: "我们的愿景",
    title: "帮助马来西亚年轻人，把薪水变成自由。",
    intro:
      "SmartCalc MY 想把理财讲得简单一点：先了解收入和现金流，再建立被动收入，最后知道自己什么时候可以把工作变成选择。",
    activeTitle: "主动收入",
    activeText: "你用时间换钱。薪水、兼职、加班费、佣金，一旦你停下来，收入也会停下来。",
    passiveTitle: "被动收入",
    passiveText: "你建立会付钱给你的资产。EPF 股息、ASB、REITs、租金收入和商业系统，都可以在你睡觉时继续运作。",
    compareNote:
      "目标不是明天就辞职，而是一步一步建立足够的被动收入，让它覆盖你的生活开销。",
    roadmapTitle: "从薪水走向自由",
    steps: [
      ["01", "赚取主动收入", "把薪水和生意收入当成燃料，而不是终点。"],
      ["02", "保护现金流", "在生活开销变大前，先看清税务、债务、承诺支出和紧急备用金。"],
      ["03", "购买或建立资产", "把一部分现金流转进 EPF、ASB、REITs、股息、租金或商业系统。"],
      ["04", "衡量自由距离", "比较被动收入和每月开销，直到工作慢慢变成选择。"],
    ],
    ctaTitle: "你几时可以退休？",
    ctaText: "退休不只是一个年龄，而是当你的被动收入足够覆盖每月开销的那一天。",
    cta: "计算我的自由数字",
  },
} as const;

export default function Vision() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">{c.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
              {c.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">{c.intro}</p>
            <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold leading-7 text-emerald-900">{c.compareNote}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <IncomeCard tone="red" label={c.activeTitle} metric="Time -> Money" copy={c.activeText} />
            <IncomeCard tone="emerald" label={c.passiveTitle} metric="Assets -> Cash flow" copy={c.passiveText} />
          </div>
        </div>

        <div className="mt-14">
          <div className="rounded-3xl border border-gray-100 bg-gray-950 p-5 text-white shadow-sm sm:p-7">
            <h3 className="text-2xl font-black">{c.roadmapTitle}</h3>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {c.steps.map(([number, title, desc]) => (
                <article key={number} className="grid grid-cols-[48px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-sm font-black text-gray-950">
                    {number}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">{title}</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-400">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-black text-gray-950">{c.ctaTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">{c.ctaText}</p>
            </div>
            <Link
              href="/financial-freedom-calculator"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-black text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400"
            >
              {c.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function IncomeCard({
  tone,
  label,
  metric,
  copy,
}: {
  tone: "red" | "emerald";
  label: string;
  metric: string;
  copy: string;
}) {
  const styles =
    tone === "red"
      ? "border-red-200 bg-red-50 text-red-700"
      : "border-emerald-200 bg-emerald-50 text-emerald-700";

  return (
    <article className={`rounded-3xl border p-6 ${styles}`}>
      <p className="text-xs font-black uppercase tracking-[0.18em] opacity-80">{label}</p>
      <p className="mt-5 text-2xl font-black text-gray-950">{metric}</p>
      <p className="mt-4 text-sm leading-7 text-gray-700">{copy}</p>
    </article>
  );
}
