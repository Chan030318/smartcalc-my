"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";

type Tool = {
  href: string; emoji: string;
  label: { en: string; bm: string; zh: string };
  desc:  { en: string; bm: string; zh: string };
  tag?:  "hot" | "new";
};

const FREEDOM_TOOLS: Tool[] = [
  {
    href: "/financial-freedom-calculator", emoji: "🏆", tag: "hot",
    label: { en: "Freedom Number Calculator", bm: "Freedom Number Calculator", zh: "自由数字计算器" },
    desc:  { en: "How much capital do you need to retire? Calculate your Freedom Number and Rat Race status.", bm: "Berapa modal yang kau perlukan untuk bersara? Kira Freedom Number dan status Rat Race kau.", zh: "你需要多少资本才能退休？计算你的自由数字和老鼠赛跑状态。" },
  },
  {
    href: "/compound-interest-calculator", emoji: "📈",
    label: { en: "Compound Interest",  bm: "Faedah Kompaun",        zh: "复利计算器" },
    desc:  { en: "See how your money grows over time with compound interest — the 8th wonder of the world.", bm: "Lihat bagaimana wang kau membesar dengan faedah kompaun — keajaiban ke-8 dunia.", zh: "看看复利如何让你的钱随时间增长 — 世界第八大奇迹。" },
  },
  {
    href: "/epf-calculator-malaysia", emoji: "🏛️",
    label: { en: "EPF Calculator",     bm: "Kalkulator EPF",        zh: "EPF计算器" },
    desc:  { en: "Project your KWSP retirement savings with year-by-year compound dividend breakdown.", bm: "Unjurkan simpanan persaraan KWSP kau dengan pecahan dividen tahun demi tahun.", zh: "以逐年复利股息明细预测您的公积金退休储蓄。" },
  },
  {
    href: "/savings-calculator-malaysia", emoji: "💰",
    label: { en: "Savings Calculator", bm: "Kalkulator Simpanan",   zh: "储蓄计算器" },
    desc:  { en: "Plan your savings goal. How much to save monthly to hit your target amount?", bm: "Rancang matlamat simpanan kau. Berapa nak simpan sebulan untuk capai sasaran?", zh: "规划你的储蓄目标。每月需要存多少才能达到目标金额？" },
  },
  {
    href: "/spend-billionaire-money", emoji: "💸", tag: "new",
    label: { en: "Billionaire Money Game", bm: "Permainan Wang Bilionair", zh: "亿万富翁挥霍游戏" },
    desc:  { en: "Spend Elon Musk's money in MYR. Life-winner simulator — can you beat RM 2 trillion?", bm: "Belanja wang Elon Musk dalam MYR. Simulator pemenang hidup — boleh kau habiskan RM 2 trillion?", zh: "用令吉花光埃隆·马斯克的钱。人生赢家模拟器 — 你能花光2万亿令吉吗？" },
  },
];

const LOAN_TOOLS: Tool[] = [
  {
    href: "/car-loan-calculator-malaysia", emoji: "🚗", tag: "hot",
    label: { en: "Can I Afford This Car?", bm: "Boleh Beli Kereta Ini?",    zh: "我买得起这辆车吗？" },
    desc:  { en: "True cost of car ownership: installment + fuel + insurance + maintenance + parking.", bm: "Kos sebenar memiliki kereta: ansuran + minyak + insurans + servis + parking.", zh: "汽车拥有的真实成本：分期付款 + 油费 + 保险 + 维修 + 停车费。" },
  },
  {
    href: "/mortgage-calculator-malaysia", emoji: "🏠",
    label: { en: "Mortgage Calculator",   bm: "Kalkulator Mortgage",         zh: "房贷计算器" },
    desc:  { en: "10-card home buying decision dashboard: affordability, DSR, true cost, and action plan.", bm: "Dashboard keputusan beli rumah 10 kad: kemampuan, DSR, kos sebenar, dan pelan tindakan.", zh: "10卡购房决策仪表板：负担能力、DSR、真实成本和行动计划。" },
  },
  {
    href: "/loan-calculator", emoji: "🏦",
    label: { en: "Loan Calculator",       bm: "Kalkulator Pinjaman",         zh: "贷款计算器" },
    desc:  { en: "Monthly installment, total interest, and full amortisation schedule for any loan.", bm: "Ansuran bulanan, jumlah faedah, dan jadual amortisasi penuh untuk mana-mana pinjaman.", zh: "任何贷款的每月分期付款、总利息和完整摊还计划。" },
  },
  {
    href: "/dsr-calculator-malaysia", emoji: "📊",
    label: { en: "DSR Calculator",        bm: "Kalkulator DSR",              zh: "DSR计算器" },
    desc:  { en: "Check your Debt Service Ratio before applying. Banks cap at 60–70% DSR.", bm: "Semak DSR kau sebelum memohon. Bank had pada 60–70% DSR.", zh: "申请前检查你的债务偿还比率。银行上限为60-70% DSR。" },
  },
];

const SALARY_TOOLS: Tool[] = [
  {
    href: "/salary-calculator-malaysia", emoji: "💸", tag: "hot",
    label: { en: "Salary Calculator",   bm: "Kalkulator Gaji",          zh: "薪资计算器" },
    desc:  { en: "Net take-home pay after EPF, SOCSO, EIS, and PCB (income tax) deductions.", bm: "Gaji bersih selepas potongan EPF, SOCSO, EIS, dan PCB (cukai pendapatan).", zh: "扣除公积金、社险、EIS和PCB（所得税）后的实得薪资。" },
  },
  {
    href: "/income-tax-calculator-malaysia", emoji: "🧾",
    label: { en: "Income Tax Calculator", bm: "Kalkulator Cukai Pendapatan", zh: "所得税计算器" },
    desc:  { en: "Estimate annual income tax under LHDN YA 2024 rates with full relief deductions.", bm: "Anggaran cukai pendapatan tahunan di bawah kadar LHDN TA 2024 dengan pelepasan penuh.", zh: "在完整免税额扣除下，按LHDN YA 2024税率估算年度所得税。" },
  },
  {
    href: "/pcb-calculator-malaysia", emoji: "📋",
    label: { en: "PCB Calculator",      bm: "Kalkulator PCB",           zh: "PCB计算器" },
    desc:  { en: "Monthly PCB (MTD) deduction estimate. Supports TP1, Zakat, spouse and child reliefs.", bm: "Anggaran potongan PCB (MTD) bulanan. Sokong TP1, Zakat, pelepasan pasangan dan anak.", zh: "每月PCB（MTD）扣款估算。支持TP1、天课、配偶和子女免税额。" },
  },
  {
    href: "/socso-calculator-malaysia", emoji: "🛡️",
    label: { en: "SOCSO Calculator",    bm: "Kalkulator SOCSO",         zh: "SOCSO计算器" },
    desc:  { en: "Calculate your SOCSO and EIS monthly contribution based on your salary tier.", bm: "Kira caruman SOCSO dan EIS bulanan kau berdasarkan tahap gaji.", zh: "根据你的薪资级别计算每月SOCSO和EIS供款。" },
  },
];

function ToolCard({ tool, lang }: { tool: Tool; lang: "en" | "bm" | "zh" }) {
  return (
    <Link href={tool.href}
      className="group relative flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/40 hover:shadow-sm transition-all">
      {tool.tag && (
        <span className={`absolute -top-2 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${tool.tag === "hot" ? "bg-red-500 text-white" : "bg-emerald-500 text-white"}`}>
          {tool.tag === "hot" ? "🔥" : "✨ NEW"}
        </span>
      )}
      <span className="text-2xl flex-shrink-0 mt-0.5">{tool.emoji}</span>
      <div>
        <p className="font-bold text-sm text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight mb-1">
          {tool.label[lang]}
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">{tool.desc[lang]}</p>
      </div>
    </Link>
  );
}

export default function CalculatorCards() {
  const { lang, t } = useLang();

  const sections = [
    { key: "freedom", cat: t.cats.freedom, tools: FREEDOM_TOOLS, accent: "emerald", emoji: "🏆" },
    { key: "loans",   cat: t.cats.loans,   tools: LOAN_TOOLS,    accent: "blue",    emoji: "🏠" },
    { key: "salary",  cat: t.cats.salary,  tools: SALARY_TOOLS,  accent: "violet",  emoji: "💼" },
  ] as const;

  const accentMap = {
    emerald: { border: "border-emerald-200", bg: "bg-emerald-50",  text: "text-emerald-700", dot: "bg-emerald-500" },
    blue:    { border: "border-blue-200",    bg: "bg-blue-50",     text: "text-blue-700",    dot: "bg-blue-500"    },
    violet:  { border: "border-violet-200",  bg: "bg-violet-50",   text: "text-violet-700",  dot: "bg-violet-500"  },
  };

  return (
    <section className="py-16 bg-gray-50" id="calculators">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {sections.map((sec) => {
          const a = accentMap[sec.accent];
          return (
            <div key={sec.key}>
              {/* Section header */}
              <div className={`flex items-center gap-3 mb-5 px-4 py-3 rounded-2xl border ${a.border} ${a.bg} w-fit`}>
                <span className="text-xl">{sec.emoji}</span>
                <div>
                  <h2 className={`font-black text-sm ${a.text}`}>{sec.cat.title}</h2>
                  <p className="text-xs text-gray-400">{sec.cat.sub}</p>
                </div>
              </div>

              {/* Tool grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sec.tools.map((tool) => (
                  <ToolCard key={tool.href} tool={tool} lang={lang} />
                ))}
              </div>
            </div>
          );
        })}

        {/* View all link */}
        <div className="text-center pt-4">
          <Link href="/calculators"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors">
            {lang === "zh" ? "查看所有工具 →" : lang === "en" ? "View all tools →" : "Lihat semua alat →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
