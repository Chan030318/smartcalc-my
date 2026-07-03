"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";

type Lang = "en" | "bm" | "zh";

type Tool = {
  href: string;
  marker: string;
  label: Record<Lang, string>;
  desc: Record<Lang, string>;
  tag?: "hot" | "new";
};

const HEADING = {
  en: {
    eyebrow: "Financial Awakening Tools",
    title: "Use calculators to see the truth behind each money decision.",
    sub: "These tools are not just for numbers. They help you notice cash flow, debt pressure, tax leakage, and how far you are from freedom.",
  },
  bm: {
    eyebrow: "Alat Kesedaran Kewangan",
    title: "Guna kalkulator untuk nampak kebenaran di sebalik setiap keputusan wang.",
    sub: "Alat ini bukan sekadar nombor. Ia bantu anda nampak cash flow, tekanan hutang, cukai yang keluar, dan jarak anda dari kebebasan.",
  },
  zh: {
    eyebrow: "财务觉醒工具",
    title: "用计算器看见每个金钱决定背后的真相。",
    sub: "这些工具不只是算数字，而是帮你看见现金流、债务压力、税务流失，以及你离财务自由还有多远。",
  },
} as const;

const FREEDOM_TOOLS: Tool[] = [
  {
    href: "/financial-freedom-calculator",
    marker: "01",
    tag: "hot",
    label: { en: "Freedom Number Calculator", bm: "Kalkulator Freedom Number", zh: "自由数字计算器" },
    desc: {
      en: "Estimate how much investment capital you need before passive income can cover monthly expenses.",
      bm: "Anggar berapa modal pelaburan diperlukan sebelum pendapatan pasif boleh menanggung belanja bulanan.",
      zh: "估算你需要多少投资本金，才能让被动收入覆盖每月生活开销。",
    },
  },
  {
    href: "/income-tax-calculator-malaysia",
    marker: "02",
    tag: "new",
    label: { en: "Income Tax Awakening Tool", bm: "Alat Kesedaran Cukai Pendapatan", zh: "所得税觉醒工具" },
    desc: {
      en: "See how active income is taxed, then decide how much after-tax cash flow can become assets.",
      bm: "Lihat bagaimana pendapatan aktif dikenakan cukai, kemudian tentukan berapa cash flow selepas cukai boleh jadi aset.",
      zh: "看见主动收入如何被征税，再决定多少税后现金流可以转成资产。",
    },
  },
  {
    href: "/compound-interest-calculator",
    marker: "03",
    label: { en: "Compound Interest", bm: "Faedah Kompaun", zh: "复利计算器" },
    desc: {
      en: "Watch time turn small repeated contributions into long-term wealth.",
      bm: "Lihat bagaimana masa menukar caruman kecil yang berulang menjadi kekayaan jangka panjang.",
      zh: "看时间如何把重复的小额投入，慢慢变成长期财富。",
    },
  },
];

const DEBT_TOOLS: Tool[] = [
  {
    href: "/dsr-calculator-malaysia",
    marker: "04",
    label: { en: "DSR Calculator", bm: "Kalkulator DSR", zh: "DSR 计算器" },
    desc: {
      en: "Check whether debt repayments are quietly trapping your future cash flow.",
      bm: "Semak sama ada bayaran hutang sedang memerangkap cash flow masa depan anda.",
      zh: "检查债务还款是否正在悄悄锁住你未来的现金流。",
    },
  },
  {
    href: "/car-loan-calculator-malaysia",
    marker: "05",
    label: { en: "Car Loan Reality Check", bm: "Semakan Realiti Pinjaman Kereta", zh: "车贷现实检查" },
    desc: {
      en: "Look beyond installment and compare the real cost of owning a car.",
      bm: "Lihat lebih daripada ansuran dan bandingkan kos sebenar memiliki kereta.",
      zh: "不要只看月供，先看清拥有一辆车的真实成本。",
    },
  },
  {
    href: "/mortgage-calculator-malaysia",
    marker: "06",
    label: { en: "Home Loan Planner", bm: "Perancang Pinjaman Rumah", zh: "房贷规划工具" },
    desc: {
      en: "Estimate repayment, affordability, and DSR pressure before buying a home.",
      bm: "Anggar bayaran, kemampuan, dan tekanan DSR sebelum membeli rumah.",
      zh: "买房前先估算月供、负担能力和 DSR 压力。",
    },
  },
];

const CASHFLOW_TOOLS: Tool[] = [
  {
    href: "/salary-calculator-malaysia",
    marker: "07",
    label: { en: "Salary Cash Flow", bm: "Cash Flow Gaji", zh: "薪水现金流" },
    desc: {
      en: "See your take-home pay after EPF, SOCSO, EIS, and PCB deductions.",
      bm: "Lihat gaji bersih selepas potongan EPF, SOCSO, EIS, dan PCB.",
      zh: "看见 EPF、SOCSO、EIS 和 PCB 扣除后的实际到手薪水。",
    },
  },
  {
    href: "/epf-calculator-malaysia",
    marker: "08",
    label: { en: "EPF Growth", bm: "Pertumbuhan EPF", zh: "EPF 成长" },
    desc: {
      en: "Project retirement savings and see how compounding works inside KWSP.",
      bm: "Unjur simpanan persaraan dan lihat cara kompaun bekerja dalam KWSP.",
      zh: "预测退休储蓄，也看见复利如何在 EPF 里慢慢发挥作用。",
    },
  },
  {
    href: "/savings-calculator-malaysia",
    marker: "09",
    label: { en: "Savings Target", bm: "Sasaran Simpanan", zh: "储蓄目标" },
    desc: {
      en: "Plan the monthly habit needed to reach a clear savings target.",
      bm: "Rancang tabiat bulanan yang diperlukan untuk mencapai sasaran simpanan.",
      zh: "规划每月需要养成的储蓄习惯，慢慢达到明确目标。",
    },
  },
];

function ToolCard({ tool, lang }: { tool: Tool; lang: Lang }) {
  return (
    <Link
      href={tool.href}
      className="group relative flex min-h-[150px] gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:border-amber-200 hover:bg-amber-50/40 hover:shadow-sm"
    >
      {tool.tag && (
        <span className="absolute right-3 top-3 rounded-full bg-gray-950 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-white">
          {tool.tag}
        </span>
      )}
      <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xs font-black text-gray-900">
        {tool.marker}
      </span>
      <div className="pr-8">
        <p className="mb-2 text-sm font-black leading-tight text-gray-950 transition-colors group-hover:text-amber-700">
          {tool.label[lang]}
        </p>
        <p className="text-xs leading-6 text-gray-600">{tool.desc[lang]}</p>
      </div>
    </Link>
  );
}

export default function CalculatorCards() {
  const { lang, t } = useLang();
  const h = HEADING[lang];

  const sections = [
    { key: "freedom", cat: t.cats.freedom, tools: FREEDOM_TOOLS },
    { key: "loans", cat: t.cats.loans, tools: DEBT_TOOLS },
    { key: "salary", cat: t.cats.salary, tools: CASHFLOW_TOOLS },
  ];

  return (
    <section className="bg-gray-50 py-16" id="calculators">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-600">{h.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-gray-950 sm:text-4xl">{h.title}</h2>
          <p className="mt-4 text-base leading-7 text-gray-600">{h.sub}</p>
        </div>

        {sections.map((section) => (
          <div key={section.key}>
            <div className="mb-5">
              <h3 className="text-lg font-black text-gray-950">{section.cat.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{section.cat.sub}</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.tools.map((tool) => (
                <ToolCard key={tool.href} tool={tool} lang={lang} />
              ))}
            </div>
          </div>
        ))}

        <div className="pt-2 text-center">
          <Link href="/calculators" className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition-colors hover:text-amber-600">
            {t.toolsCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
