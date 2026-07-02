"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";

export type ToolPageKey =
  | "financialFreedom"
  | "mortgage"
  | "salary"
  | "epf"
  | "loan"
  | "dsr"
  | "savings"
  | "compound"
  | "carLoan"
  | "incomeTax";

const TOOL_HERO = {
  financialFreedom: {
    theme: "emerald",
    emoji: "🏆",
    en: {
      badge: "Passive income planning",
      title: "Freedom Number Calculator",
      description: "Calculate how much investment capital you need before passive income can cover your monthly expenses.",
    },
    bm: {
      badge: "Perancangan pendapatan pasif",
      title: "Kalkulator Freedom Number",
      description: "Kira berapa modal pelaburan yang kau perlukan sebelum pendapatan pasif boleh menanggung perbelanjaan bulanan.",
    },
    zh: {
      badge: "被动收入规划",
      title: "自由数字计算器",
      description: "计算你需要多少投资资产，才可以让被动收入覆盖每月生活开销。",
    },
  },
  mortgage: {
    theme: "blue",
    emoji: "🏠",
    en: {
      badge: "Home loan affordability",
      title: "Mortgage Calculator Malaysia",
      description: "Estimate monthly repayment, DSR pressure, down payment needs, and the real cost of buying a home.",
    },
    bm: {
      badge: "Kemampuan pinjaman rumah",
      title: "Kalkulator Mortgage Malaysia",
      description: "Anggar bayaran bulanan, tekanan DSR, deposit, dan kos sebenar membeli rumah.",
    },
    zh: {
      badge: "房贷负担能力",
      title: "马来西亚房贷计算器",
      description: "估算每月供款、DSR 压力、头期需求，以及买房的真实成本。",
    },
  },
  salary: {
    theme: "green",
    emoji: "💵",
    en: {
      badge: "EPF, SOCSO, EIS and PCB",
      title: "Salary Calculator Malaysia",
      description: "Enter your gross salary and see estimated take-home pay after statutory deductions.",
    },
    bm: {
      badge: "EPF, SOCSO, EIS dan PCB",
      title: "Kalkulator Gaji Malaysia",
      description: "Masukkan gaji kasar dan lihat anggaran gaji bersih selepas potongan wajib.",
    },
    zh: {
      badge: "EPF、SOCSO、EIS 与 PCB",
      title: "马来西亚薪水计算器",
      description: "输入税前薪水，估算扣除法定项目后的实际到手收入。",
    },
  },
  epf: {
    theme: "teal",
    emoji: "🏛️",
    en: {
      badge: "KWSP retirement projection",
      title: "EPF Calculator Malaysia",
      description: "Project your EPF savings with salary growth, employer contributions, and dividend compounding.",
    },
    bm: {
      badge: "Unjuran persaraan KWSP",
      title: "Kalkulator EPF Malaysia",
      description: "Unjur simpanan EPF dengan kenaikan gaji, caruman majikan, dan dividen kompaun.",
    },
    zh: {
      badge: "公积金退休预测",
      title: "马来西亚 EPF 计算器",
      description: "根据薪水成长、雇主供款和股息复利，预测你的 EPF 储蓄。",
    },
  },
  loan: {
    theme: "purple",
    emoji: "🏦",
    en: {
      badge: "Reducing balance estimate",
      title: "Loan Calculator Malaysia",
      description: "Estimate monthly repayment, total interest, and amortisation for Malaysian loans.",
    },
    bm: {
      badge: "Anggaran baki berkurangan",
      title: "Kalkulator Pinjaman Malaysia",
      description: "Anggar bayaran bulanan, jumlah faedah, dan jadual bayaran balik pinjaman.",
    },
    zh: {
      badge: "递减余额估算",
      title: "马来西亚贷款计算器",
      description: "估算每月供款、总利息，以及贷款摊还表。",
    },
  },
  dsr: {
    theme: "blue",
    emoji: "📊",
    en: {
      badge: "Bank loan eligibility",
      title: "DSR Calculator Malaysia",
      description: "Check your debt service ratio before applying for a home, car, or personal loan.",
    },
    bm: {
      badge: "Kelayakan pinjaman bank",
      title: "Kalkulator DSR Malaysia",
      description: "Semak nisbah khidmat hutang sebelum memohon pinjaman rumah, kereta, atau peribadi.",
    },
    zh: {
      badge: "银行贷款资格",
      title: "马来西亚 DSR 计算器",
      description: "申请房贷、车贷或个人贷款前，先检查你的债务偿还比率。",
    },
  },
  savings: {
    theme: "emerald",
    emoji: "💰",
    en: {
      badge: "Savings goal planning",
      title: "Savings Calculator Malaysia",
      description: "Work out how much to save each month to reach your target amount on time.",
    },
    bm: {
      badge: "Perancangan matlamat simpanan",
      title: "Kalkulator Simpanan Malaysia",
      description: "Kira berapa perlu simpan setiap bulan untuk capai sasaran tepat pada masa.",
    },
    zh: {
      badge: "储蓄目标规划",
      title: "马来西亚储蓄计算器",
      description: "计算每个月需要存多少钱，才能准时达到你的目标金额。",
    },
  },
  compound: {
    theme: "emerald",
    emoji: "📈",
    en: {
      badge: "Long-term wealth growth",
      title: "Compound Interest Calculator",
      description: "See how monthly investing and compound returns can grow your money over time.",
    },
    bm: {
      badge: "Pertumbuhan kekayaan jangka panjang",
      title: "Kalkulator Faedah Kompaun",
      description: "Lihat bagaimana pelaburan bulanan dan pulangan kompaun membesarkan wang kau.",
    },
    zh: {
      badge: "长期财富成长",
      title: "复利计算器",
      description: "看看每月投资和复利回报，如何随着时间放大你的资金。",
    },
  },
  carLoan: {
    theme: "amber",
    emoji: "🚗",
    en: {
      badge: "True car affordability",
      title: "Car Loan Calculator Malaysia",
      description: "Estimate instalment, ownership costs, and whether a car fits your monthly cash flow.",
    },
    bm: {
      badge: "Kemampuan sebenar beli kereta",
      title: "Kalkulator Pinjaman Kereta Malaysia",
      description: "Anggar ansuran, kos pemilikan, dan sama ada kereta itu sesuai dengan cash flow bulanan.",
    },
    zh: {
      badge: "真实买车能力",
      title: "马来西亚车贷计算器",
      description: "估算车贷供款、持车成本，以及这辆车是否适合你的月现金流。",
    },
  },
  incomeTax: {
    theme: "orange",
    emoji: "🧾",
    en: {
      badge: "LHDN tax estimate",
      title: "Income Tax Calculator Malaysia",
      description: "Estimate annual tax payable, reliefs, chargeable income, and effective tax rate.",
    },
    bm: {
      badge: "Anggaran cukai LHDN",
      title: "Kalkulator Cukai Pendapatan Malaysia",
      description: "Anggar cukai tahunan, pelepasan, pendapatan bercukai, dan kadar cukai efektif.",
    },
    zh: {
      badge: "LHDN 税务估算",
      title: "马来西亚所得税计算器",
      description: "估算年度税额、税务减免、应课税收入和有效税率。",
    },
  },
} as const;

const THEME = {
  emerald: "bg-emerald-50 text-emerald-700",
  blue: "bg-blue-50 text-blue-700",
  green: "bg-green-50 text-green-700",
  teal: "bg-teal-50 text-teal-700",
  purple: "bg-purple-50 text-purple-700",
  amber: "bg-amber-50 text-amber-700",
  orange: "bg-orange-50 text-orange-700",
} as const;

const HOME_LABEL = {
  en: "Home",
  bm: "Laman utama",
  zh: "首页",
} as const;

export default function ToolPageHero({ page }: { page: ToolPageKey }) {
  const { lang } = useLang();
  const data = TOOL_HERO[page];
  const copy = data[lang];

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <nav className="mb-5 flex items-center justify-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-emerald-600 transition-colors">{HOME_LABEL[lang]}</Link>
          <span>/</span>
          <span className="font-medium text-gray-600">{copy.title}</span>
        </nav>
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4 ${THEME[data.theme]}`}>
          <span>{data.emoji}</span>
          {copy.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{copy.title}</h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">{copy.description}</p>
      </div>
    </section>
  );
}
