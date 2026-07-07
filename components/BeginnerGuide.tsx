"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type LocalText = Record<Lang, string>;

type Step = {
  label: LocalText;
  desc: LocalText;
  href: string;
  cta: LocalText;
};

type Journey = {
  id: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
  accent: string;
  tag: LocalText;
  title: LocalText;
  sub: LocalText;
  steps: Step[];
};

const HEADING = {
  en: {
    badge: "For Young Malaysians",
    title: "Your Financial Starter Pack",
    sub: "Start with the money rules that affect real life: salary, tax, EPF, loans, and freedom planning.",
    bottom: "Learn the basics early. Small decisions compound into bigger choices later.",
  },
  bm: {
    badge: "Untuk Anak Muda Malaysia",
    title: "Starter Pack Kewangan Anda",
    sub: "Mula dengan peraturan wang yang benar-benar mempengaruhi hidup: gaji, cukai, KWSP, pinjaman, dan perancangan kebebasan.",
    bottom: "Belajar asas lebih awal. Keputusan kecil akan berkompaun menjadi pilihan yang lebih besar.",
  },
  zh: {
    badge: "给马来西亚年轻人",
    title: "你的财务入门包",
    sub: "先理解真正影响生活的金钱规则：薪水、税务、EPF、贷款和自由规划。",
    bottom: "越早学会基础越好。小决定会复利成未来更大的选择权。",
  },
} satisfies Record<Lang, unknown>;

const JOURNEYS: Journey[] = [
  {
    id: "income",
    emoji: "💵",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    accent: "bg-sky-500",
    tag: { en: "First Paycheck", bm: "Gaji Pertama", zh: "第一份薪水" },
    title: { en: "Understand Your Salary", bm: "Fahami Gaji Anda", zh: "看懂你的薪水" },
    sub: {
      en: "Know what comes in, what gets deducted, and what actually reaches your bank account.",
      bm: "Fahami apa yang masuk, apa yang ditolak, dan jumlah sebenar yang sampai ke akaun bank.",
      zh: "看懂收入、扣除项目，以及真正进到银行户口的钱。",
    },
    steps: [
      {
        label: { en: "Estimate take-home pay", bm: "Anggar gaji bersih", zh: "估算实收薪水" },
        desc: {
          en: "Start with gross salary, then subtract EPF, SOCSO, EIS, and PCB.",
          bm: "Mulakan dengan gaji kasar, kemudian tolak KWSP, PERKESO, SIP/EIS, dan PCB.",
          zh: "从 gross salary 开始，再扣除 EPF、SOCSO、EIS 和 PCB。",
        },
        href: "/salary-calculator-malaysia",
        cta: { en: "Use Salary Calculator", bm: "Guna Kalkulator Gaji", zh: "使用薪水计算器" },
      },
      {
        label: { en: "See your tax position", bm: "Lihat kedudukan cukai", zh: "了解税务位置" },
        desc: {
          en: "Compare yearly income, reliefs, PCB paid, and estimated tax payable.",
          bm: "Bandingkan pendapatan tahunan, pelepasan, PCB dibayar, dan cukai anggaran.",
          zh: "比较全年收入、税务减免、已扣 PCB 和预估应缴税。",
        },
        href: "/income-tax-calculator-malaysia",
        cta: { en: "Estimate Tax", bm: "Anggar Cukai", zh: "估算税务" },
      },
    ],
  },
  {
    id: "safety",
    emoji: "🏦",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    accent: "bg-teal-500",
    tag: { en: "Safety Net", bm: "Jaring Keselamatan", zh: "安全网" },
    title: { en: "Understand EPF, SOCSO, and EIS", bm: "Fahami KWSP, PERKESO, dan SIP", zh: "理解 EPF、SOCSO 和 EIS" },
    sub: {
      en: "These deductions are not just cuts. They are protection, retirement savings, and job-loss support.",
      bm: "Potongan ini bukan sekadar pengurangan. Ia perlindungan, simpanan persaraan, dan sokongan kehilangan kerja.",
      zh: "这些扣除不只是少拿钱，也是保障、退休储蓄和失业支援。",
    },
    steps: [
      {
        label: { en: "Project EPF growth", bm: "Unjur pertumbuhan KWSP", zh: "预测 EPF 成长" },
        desc: {
          en: "See how monthly contributions and dividends can grow over time.",
          bm: "Lihat bagaimana caruman bulanan dan dividen berkembang mengikut masa.",
          zh: "了解每月供款和股息如何随着时间成长。",
        },
        href: "/epf-calculator-malaysia",
        cta: { en: "Use EPF Calculator", bm: "Guna Kalkulator KWSP", zh: "使用 EPF 计算器" },
      },
      {
        label: { en: "Check statutory contributions", bm: "Semak caruman berkanun", zh: "检查法定供款" },
        desc: {
          en: "Understand SOCSO and EIS contributions before reading your payslip.",
          bm: "Fahami caruman PERKESO dan SIP sebelum membaca slip gaji.",
          zh: "看薪水单前，先理解 SOCSO 和 EIS 供款。",
        },
        href: "/socso-calculator-malaysia",
        cta: { en: "Check SOCSO", bm: "Semak PERKESO", zh: "检查 SOCSO" },
      },
    ],
  },
  {
    id: "debt",
    emoji: "📊",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    accent: "bg-blue-500",
    tag: { en: "Before Borrowing", bm: "Sebelum Meminjam", zh: "借钱之前" },
    title: { en: "Know Your Debt Capacity", bm: "Fahami Kapasiti Hutang", zh: "知道你的负债能力" },
    sub: {
      en: "A loan can be a tool or a trap. Know the repayment and DSR before signing.",
      bm: "Pinjaman boleh menjadi alat atau perangkap. Fahami ansuran dan DSR sebelum menandatangani.",
      zh: "贷款可以是工具，也可以是陷阱。签字前先看清月供和 DSR。",
    },
    steps: [
      {
        label: { en: "Check DSR first", bm: "Semak DSR dahulu", zh: "先检查 DSR" },
        desc: {
          en: "Banks look at your debt service ratio before approving loans.",
          bm: "Bank melihat nisbah khidmat hutang sebelum meluluskan pinjaman.",
          zh: "银行批贷款前，会看你的债务偿还比率。",
        },
        href: "/dsr-calculator-malaysia",
        cta: { en: "Check DSR", bm: "Semak DSR", zh: "检查 DSR" },
      },
      {
        label: { en: "Calculate total cost", bm: "Kira kos keseluruhan", zh: "计算总成本" },
        desc: {
          en: "Monthly instalment is only one part. Total interest shows the real cost.",
          bm: "Ansuran bulanan hanya satu bahagian. Jumlah faedah menunjukkan kos sebenar.",
          zh: "月供只是其中一部分，总利息才看得出真实成本。",
        },
        href: "/loan-calculator",
        cta: { en: "Use Loan Calculator", bm: "Guna Kalkulator Pinjaman", zh: "使用贷款计算器" },
      },
    ],
  },
  {
    id: "freedom",
    emoji: "🌱",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    accent: "bg-emerald-500",
    tag: { en: "Long Game", bm: "Permainan Jangka Panjang", zh: "长期游戏" },
    title: { en: "Move Toward Financial Freedom", bm: "Bergerak Ke Arah Kebebasan Kewangan", zh: "走向财务自由" },
    sub: {
      en: "The goal is not just earning more. It is building choices, cash flow, and assets.",
      bm: "Matlamatnya bukan sekadar pendapatan lebih tinggi. Ia tentang pilihan, aliran tunai, dan aset.",
      zh: "目标不只是赚更多，而是建立选择权、现金流和资产。",
    },
    steps: [
      {
        label: { en: "Find your freedom number", bm: "Cari freedom number anda", zh: "找出你的自由数字" },
        desc: {
          en: "Compare expenses with passive income needed to stop relying only on salary.",
          bm: "Bandingkan perbelanjaan dengan pendapatan pasif yang diperlukan supaya tidak bergantung pada gaji sahaja.",
          zh: "比较开销和所需被动收入，看看何时不再只依赖薪水。",
        },
        href: "/financial-freedom-calculator",
        cta: { en: "Calculate Freedom", bm: "Kira Kebebasan", zh: "计算自由数字" },
      },
      {
        label: { en: "Make goals visible", bm: "Jadikan matlamat jelas", zh: "让目标看得见" },
        desc: {
          en: "A visible dream is easier to turn into repeated action.",
          bm: "Impian yang kelihatan lebih mudah ditukar menjadi tindakan berulang.",
          zh: "看得见的梦想，更容易变成持续行动。",
        },
        href: "/dream-board",
        cta: { en: "Open Dream Board", bm: "Buka Dream Board", zh: "打开梦想图" },
      },
    ],
  },
];

export default function BeginnerGuide() {
  const { lang } = useLang();
  const [active, setActive] = useState<string | null>("income");
  const heading = HEADING[lang];

  return (
    <section className="py-16 bg-white border-t border-gray-100" id="starter-pack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-yellow-200">
            🎯 {heading.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{heading.title}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{heading.sub}</p>
        </div>

        <div className="space-y-4">
          {JOURNEYS.map((journey) => {
            const isOpen = active === journey.id;

            return (
              <div
                key={journey.id}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${isOpen ? journey.border : "border-gray-100"}`}
              >
                <button
                  className={`w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors ${isOpen ? journey.bg : "hover:bg-gray-50"}`}
                  onClick={() => setActive(isOpen ? null : journey.id)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl flex-shrink-0" aria-hidden="true">{journey.emoji}</span>
                    <div>
                      <span className={`text-xs font-bold ${journey.color} uppercase block mb-0.5`}>{journey.tag[lang]}</span>
                      <h2 className="text-lg sm:text-xl font-black text-gray-900">{journey.title[lang]}</h2>
                      <p className="text-sm text-gray-500 mt-0.5 hidden sm:block max-w-lg">{journey.sub[lang]}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isOpen ? journey.accent + " text-white" : "bg-gray-100 text-gray-500"}`}>
                    <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {!isOpen && <p className="sm:hidden px-5 pb-4 text-sm text-gray-400">{journey.sub[lang]}</p>}

                {isOpen && (
                  <div className={`${journey.bg} border-t ${journey.border} px-5 sm:px-6 pb-6`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                      {journey.steps.map((step) => (
                        <div key={step.href} className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col shadow-sm">
                          <p className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">{step.label[lang]}</p>
                          <p className="text-xs text-gray-500 leading-relaxed flex-1">{step.desc[lang]}</p>
                          <Link href={step.href} className={`mt-3 text-xs font-bold ${journey.color} hover:underline flex items-center gap-1`}>
                            {step.cta[lang]} →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">{heading.bottom}</p>
        </div>
      </div>
    </section>
  );
}
