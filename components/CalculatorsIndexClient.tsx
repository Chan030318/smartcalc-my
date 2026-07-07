"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type ToolCopy = {
  title: string;
  description: string;
  features: string[];
  badge: string;
  cta: string;
};

type Tool = {
  href: string;
  emoji: string;
  badgeColor: string;
  gradient: string;
  border: string;
  ctaStyle: string;
  copy: Record<Lang, ToolCopy>;
};

type Category = {
  id: string;
  label: Record<Lang, string>;
  description: Record<Lang, string>;
  tools: Tool[];
};

const PAGE_COPY: Record<
  Lang,
  {
    badge: (count: number) => string;
    title: string;
    subtitle: string;
    singularTool: string;
    pluralTools: string;
    jumpTitle: string;
    home: string;
  }
> = {
  en: {
    badge: (count) => `${count} Free Tools · No Sign-up · Instant Results`,
    title: "All Calculators",
    subtitle:
      "Free, accurate calculators built specifically for Malaysians. From health and salary to tax, EPF, and loan planning.",
    singularTool: "tool",
    pluralTools: "tools",
    jumpTitle: "Jump to category",
    home: "Home",
  },
  bm: {
    badge: (count) => `${count} Alat Percuma · Tanpa Daftar · Keputusan Segera`,
    title: "Semua Kalkulator",
    subtitle:
      "Kalkulator percuma dan jelas untuk rakyat Malaysia, daripada kesihatan dan gaji hingga cukai, KWSP, dan perancangan pinjaman.",
    singularTool: "alat",
    pluralTools: "alat",
    jumpTitle: "Lompat ke kategori",
    home: "Laman utama",
  },
  zh: {
    badge: (count) => `${count} 个免费工具 · 无需注册 · 即时结果`,
    title: "全部计算器",
    subtitle: "为马来西亚用户打造的免费实用计算器，从健康、薪水、税务、EPF 到贷款规划都能快速估算。",
    singularTool: "个工具",
    pluralTools: "个工具",
    jumpTitle: "跳到分类",
    home: "首页",
  },
};

const CATEGORIES: Category[] = [
  {
    id: "health",
    label: { en: "Health", bm: "Kesihatan", zh: "健康" },
    description: {
      en: "Body and wellness calculators",
      bm: "Kalkulator badan dan kesejahteraan",
      zh: "身体与健康相关工具",
    },
    tools: [
      {
        href: "/bmi-calculator",
        emoji: "⚖️",
        badgeColor: "bg-green-100 text-green-700",
        gradient: "from-green-50 to-emerald-50",
        border: "border-green-100",
        ctaStyle: "bg-green-600 hover:bg-green-700",
        copy: {
          en: {
            title: "BMI Calculator",
            description:
              "Calculate your Body Mass Index and get a health interpretation based on Asian BMI guidelines used in Malaysia.",
            features: ["Weight and height input", "Asian BMI categories", "Health guidance"],
            badge: "Health",
            cta: "Calculate BMI",
          },
          bm: {
            title: "Kalkulator BMI",
            description:
              "Kira Indeks Jisim Badan dan lihat tafsiran kesihatan berdasarkan garis panduan BMI Asia yang digunakan di Malaysia.",
            features: ["Input berat dan tinggi", "Kategori BMI Asia", "Panduan kesihatan"],
            badge: "Kesihatan",
            cta: "Kira BMI",
          },
          zh: {
            title: "BMI 计算器",
            description: "计算身体质量指数，并根据马来西亚常用的亚洲 BMI 标准了解基本健康分类。",
            features: ["输入体重与身高", "亚洲 BMI 分类", "健康参考说明"],
            badge: "健康",
            cta: "计算 BMI",
          },
        },
      },
    ],
  },
  {
    id: "salary-tax",
    label: { en: "Salary & Tax", bm: "Gaji & Cukai", zh: "薪水与税务" },
    description: {
      en: "Income, tax, and statutory contribution calculators",
      bm: "Kalkulator pendapatan, cukai, dan caruman berkanun",
      zh: "收入、税务与法定供款计算器",
    },
    tools: [
      {
        href: "/salary-calculator-malaysia",
        emoji: "💵",
        badgeColor: "bg-sky-100 text-sky-700",
        gradient: "from-sky-50 to-blue-50",
        border: "border-sky-100",
        ctaStyle: "bg-sky-600 hover:bg-sky-700",
        copy: {
          en: {
            title: "Salary Calculator",
            description: "Estimate take-home pay after EPF, SOCSO, EIS, and PCB deductions using Malaysia-focused rules.",
            features: ["EPF and SOCSO deductions", "PCB income tax", "Employer contributions"],
            badge: "Salary",
            cta: "Calculate Salary",
          },
          bm: {
            title: "Kalkulator Gaji",
            description: "Anggar gaji bersih selepas potongan KWSP, PERKESO, SIP/EIS, dan PCB berdasarkan peraturan Malaysia.",
            features: ["Potongan KWSP dan PERKESO", "Cukai PCB", "Caruman majikan"],
            badge: "Gaji",
            cta: "Kira Gaji",
          },
          zh: {
            title: "薪水计算器",
            description: "根据马来西亚规则估算 EPF、SOCSO、EIS 与 PCB 扣除后的实收薪水。",
            features: ["EPF 与 SOCSO 扣除", "PCB 所得税", "雇主供款"],
            badge: "薪水",
            cta: "计算薪水",
          },
        },
      },
      {
        href: "/income-tax-calculator-malaysia",
        emoji: "🧾",
        badgeColor: "bg-orange-100 text-orange-700",
        gradient: "from-orange-50 to-amber-50",
        border: "border-orange-100",
        ctaStyle: "bg-orange-500 hover:bg-orange-600",
        copy: {
          en: {
            title: "Income Tax Calculator",
            description: "Estimate annual income tax payable with LHDN progressive rates and common relief categories.",
            features: ["LHDN rate brackets", "Relief deductions", "Effective tax rate"],
            badge: "Tax",
            cta: "Calculate Tax",
          },
          bm: {
            title: "Kalkulator Cukai Pendapatan",
            description: "Anggar cukai pendapatan tahunan dengan kadar progresif LHDN dan pelepasan biasa.",
            features: ["Kadar LHDN", "Pelepasan cukai", "Kadar cukai efektif"],
            badge: "Cukai",
            cta: "Kira Cukai",
          },
          zh: {
            title: "所得税计算器",
            description: "根据 LHDN 累进税率与常见税务减免，估算全年应缴所得税。",
            features: ["LHDN 税率级距", "税务减免", "有效税率"],
            badge: "税务",
            cta: "计算税务",
          },
        },
      },
      {
        href: "/epf-calculator-malaysia",
        emoji: "🏦",
        badgeColor: "bg-teal-100 text-teal-700",
        gradient: "from-teal-50 to-cyan-50",
        border: "border-teal-100",
        ctaStyle: "bg-teal-600 hover:bg-teal-700",
        copy: {
          en: {
            title: "EPF / KWSP Calculator",
            description: "Project retirement savings with dividends, employer matching, salary increments, and EPF benchmarks.",
            features: ["Year-by-year projection", "Dividend compounding", "Retirement benchmarks"],
            badge: "Retirement",
            cta: "Calculate EPF",
          },
          bm: {
            title: "Kalkulator EPF / KWSP",
            description: "Unjur simpanan persaraan dengan dividen, caruman majikan, kenaikan gaji, dan tanda aras KWSP.",
            features: ["Unjuran tahunan", "Kompaun dividen", "Tanda aras persaraan"],
            badge: "Persaraan",
            cta: "Kira KWSP",
          },
          zh: {
            title: "EPF / KWSP 计算器",
            description: "估算退休储蓄成长，包含股息复利、雇主供款、薪资增长与 EPF 基本储蓄参考。",
            features: ["逐年预测", "股息复利", "退休储蓄参考"],
            badge: "退休",
            cta: "计算 EPF",
          },
        },
      },
      {
        href: "/pcb-calculator-malaysia",
        emoji: "📋",
        badgeColor: "bg-indigo-100 text-indigo-700",
        gradient: "from-indigo-50 to-violet-50",
        border: "border-indigo-100",
        ctaStyle: "bg-indigo-600 hover:bg-indigo-700",
        copy: {
          en: {
            title: "PCB Calculator",
            description: "Estimate monthly Potongan Cukai Berjadual deductions with common declarations and relief inputs.",
            features: ["TP1 and zakat support", "Resident and non-resident", "Payslip breakdown"],
            badge: "PCB / MTD",
            cta: "Calculate PCB",
          },
          bm: {
            title: "Kalkulator PCB",
            description: "Anggar potongan PCB bulanan dengan input pelepasan dan deklarasi biasa.",
            features: ["Sokongan TP1 dan zakat", "Pemastautin dan bukan", "Pecahan slip gaji"],
            badge: "PCB / MTD",
            cta: "Kira PCB",
          },
          zh: {
            title: "PCB 计算器",
            description: "估算每月预扣税，支持常见申报、回扣与减免输入。",
            features: ["支持 TP1 与 Zakat", "居民与非居民", "薪资单拆解"],
            badge: "PCB / MTD",
            cta: "计算 PCB",
          },
        },
      },
      {
        href: "/socso-calculator-malaysia",
        emoji: "🛡️",
        badgeColor: "bg-rose-100 text-rose-700",
        gradient: "from-rose-50 to-pink-50",
        border: "border-rose-100",
        ctaStyle: "bg-rose-600 hover:bg-rose-700",
        copy: {
          en: {
            title: "SOCSO Calculator",
            description: "Calculate SOCSO/PERKESO employee and employer contributions with Malaysian wage ceilings.",
            features: ["First and second category", "Employee and employer split", "Wage ceiling reference"],
            badge: "SOCSO",
            cta: "Calculate SOCSO",
          },
          bm: {
            title: "Kalkulator SOCSO / PERKESO",
            description: "Kira caruman pekerja dan majikan PERKESO berdasarkan siling gaji Malaysia.",
            features: ["Kategori pertama dan kedua", "Bahagian pekerja dan majikan", "Rujukan siling gaji"],
            badge: "PERKESO",
            cta: "Kira PERKESO",
          },
          zh: {
            title: "SOCSO / PERKESO 计算器",
            description: "根据马来西亚薪资上限，估算员工与雇主的 SOCSO/PERKESO 供款。",
            features: ["第一与第二类别", "员工与雇主拆分", "薪资上限参考"],
            badge: "SOCSO",
            cta: "计算 SOCSO",
          },
        },
      },
      {
        href: "/eis-calculator-malaysia",
        emoji: "🧰",
        badgeColor: "bg-amber-100 text-amber-700",
        gradient: "from-amber-50 to-yellow-50",
        border: "border-amber-100",
        ctaStyle: "bg-amber-500 hover:bg-amber-600",
        copy: {
          en: {
            title: "EIS / SIP Calculator",
            description: "Calculate Employment Insurance System contributions and see how EIS affects net salary.",
            features: ["Employee and employer rate", "Wage ceiling reference", "Net salary impact"],
            badge: "EIS / SIP",
            cta: "Calculate EIS",
          },
          bm: {
            title: "Kalkulator EIS / SIP",
            description: "Kira caruman Sistem Insurans Pekerjaan dan lihat kesan SIP terhadap gaji bersih.",
            features: ["Kadar pekerja dan majikan", "Rujukan siling gaji", "Kesan kepada gaji bersih"],
            badge: "SIP / EIS",
            cta: "Kira SIP",
          },
          zh: {
            title: "EIS / SIP 计算器",
            description: "计算就业保险供款，并了解 EIS/SIP 对实收薪水的影响。",
            features: ["员工与雇主供款率", "薪资上限参考", "实收薪水影响"],
            badge: "EIS / SIP",
            cta: "计算 EIS",
          },
        },
      },
    ],
  },
  {
    id: "loan-finance",
    label: { en: "Loan & Finance", bm: "Pinjaman & Kewangan", zh: "贷款与财务" },
    description: {
      en: "Borrowing, repayment, and debt management calculators",
      bm: "Kalkulator pinjaman, bayaran balik, dan pengurusan hutang",
      zh: "借贷、还款与债务管理工具",
    },
    tools: [
      {
        href: "/loan-calculator",
        emoji: "🏠",
        badgeColor: "bg-purple-100 text-purple-700",
        gradient: "from-purple-50 to-violet-50",
        border: "border-purple-100",
        ctaStyle: "bg-purple-600 hover:bg-purple-700",
        copy: {
          en: {
            title: "Loan Calculator",
            description: "Estimate monthly repayments, total interest, and amortisation for personal, home, or car loans.",
            features: ["Monthly repayment", "Total interest cost", "Amortisation table"],
            badge: "Loans",
            cta: "Calculate Loan",
          },
          bm: {
            title: "Kalkulator Pinjaman",
            description: "Anggar ansuran bulanan, jumlah faedah, dan jadual pelunasan untuk pinjaman peribadi, rumah, atau kereta.",
            features: ["Ansuran bulanan", "Jumlah kos faedah", "Jadual pelunasan"],
            badge: "Pinjaman",
            cta: "Kira Pinjaman",
          },
          zh: {
            title: "贷款计算器",
            description: "估算个人贷款、房贷或车贷的月供、总利息与摊还表。",
            features: ["每月供款", "总利息成本", "摊还表"],
            badge: "贷款",
            cta: "计算贷款",
          },
        },
      },
      {
        href: "/dsr-calculator-malaysia",
        emoji: "📊",
        badgeColor: "bg-blue-100 text-blue-700",
        gradient: "from-blue-50 to-sky-50",
        border: "border-blue-100",
        ctaStyle: "bg-blue-600 hover:bg-blue-700",
        copy: {
          en: {
            title: "DSR Calculator",
            description: "Check your Debt Service Ratio before applying for a loan and understand borrowing capacity.",
            features: ["60% and 70% thresholds", "Borrowing capacity", "Eligibility category"],
            badge: "Eligibility",
            cta: "Check DSR",
          },
          bm: {
            title: "Kalkulator DSR",
            description: "Semak Nisbah Khidmat Hutang sebelum memohon pinjaman dan fahami kapasiti pinjaman.",
            features: ["Ambang 60% dan 70%", "Kapasiti pinjaman", "Kategori kelayakan"],
            badge: "Kelayakan",
            cta: "Semak DSR",
          },
          zh: {
            title: "DSR 计算器",
            description: "申请贷款前检查债务偿还比率，并了解你的借贷能力。",
            features: ["60% 与 70% 门槛", "借贷能力", "资格分类"],
            badge: "贷款资格",
            cta: "检查 DSR",
          },
        },
      },
      {
        href: "/car-loan-calculator-malaysia",
        emoji: "🚗",
        badgeColor: "bg-orange-100 text-orange-700",
        gradient: "from-orange-50 to-amber-50",
        border: "border-orange-100",
        ctaStyle: "bg-orange-500 hover:bg-orange-600",
        copy: {
          en: {
            title: "Car Loan Calculator",
            description: "Calculate hire purchase instalments using Malaysia's flat rate method.",
            features: ["Hire purchase flat rate", "Annual breakdown", "Effective rate estimate"],
            badge: "Car Loan",
            cta: "Calculate Car Loan",
          },
          bm: {
            title: "Kalkulator Pinjaman Kereta",
            description: "Kira ansuran sewa beli menggunakan kaedah kadar rata Malaysia.",
            features: ["Kadar rata sewa beli", "Pecahan tahunan", "Anggaran kadar efektif"],
            badge: "Pinjaman Kereta",
            cta: "Kira Pinjaman Kereta",
          },
          zh: {
            title: "车贷计算器",
            description: "使用马来西亚 hire purchase flat rate 方法估算车贷月供。",
            features: ["车贷平息算法", "年度拆解", "有效利率估算"],
            badge: "车贷",
            cta: "计算车贷",
          },
        },
      },
      {
        href: "/mortgage-calculator-malaysia",
        emoji: "🏡",
        badgeColor: "bg-indigo-100 text-indigo-700",
        gradient: "from-indigo-50 to-blue-50",
        border: "border-indigo-100",
        ctaStyle: "bg-indigo-600 hover:bg-indigo-700",
        copy: {
          en: {
            title: "Mortgage Calculator",
            description: "Calculate home loan repayments, total interest, income needed, and a year-by-year schedule.",
            features: ["Reducing balance method", "Income required", "Amortisation schedule"],
            badge: "Mortgage",
            cta: "Calculate Mortgage",
          },
          bm: {
            title: "Kalkulator Pinjaman Rumah",
            description: "Kira ansuran rumah, jumlah faedah, pendapatan diperlukan, dan jadual tahunan.",
            features: ["Kaedah baki berkurangan", "Pendapatan diperlukan", "Jadual pelunasan"],
            badge: "Rumah",
            cta: "Kira Rumah",
          },
          zh: {
            title: "房贷计算器",
            description: "估算房贷月供、总利息、所需收入与逐年摊还表。",
            features: ["递减余额法", "所需收入", "摊还时间表"],
            badge: "房贷",
            cta: "计算房贷",
          },
        },
      },
    ],
  },
  {
    id: "savings-investment",
    label: { en: "Savings & Investment", bm: "Simpanan & Pelaburan", zh: "储蓄与投资" },
    description: {
      en: "Grow your wealth with compounding and savings calculators",
      bm: "Bina kekayaan dengan kalkulator kompaun dan simpanan",
      zh: "用复利与储蓄工具规划财富成长",
    },
    tools: [
      {
        href: "/compound-interest-calculator",
        emoji: "📈",
        badgeColor: "bg-emerald-100 text-emerald-700",
        gradient: "from-emerald-50 to-green-50",
        border: "border-emerald-100",
        ctaStyle: "bg-emerald-600 hover:bg-emerald-700",
        copy: {
          en: {
            title: "Compound Interest Calculator",
            description: "See how investments grow over time with compounding and regular contributions.",
            features: ["Flexible compounding", "Monthly contributions", "Year-by-year table"],
            badge: "Investment",
            cta: "Calculate Growth",
          },
          bm: {
            title: "Kalkulator Faedah Kompaun",
            description: "Lihat bagaimana pelaburan berkembang melalui kompaun dan caruman berkala.",
            features: ["Kompaun fleksibel", "Caruman bulanan", "Jadual tahunan"],
            badge: "Pelaburan",
            cta: "Kira Pertumbuhan",
          },
          zh: {
            title: "复利计算器",
            description: "了解投资如何通过复利和定期投入，在时间中持续成长。",
            features: ["弹性复利频率", "每月投入", "逐年表格"],
            badge: "投资",
            cta: "计算成长",
          },
        },
      },
      {
        href: "/savings-calculator-malaysia",
        emoji: "💰",
        badgeColor: "bg-teal-100 text-teal-700",
        gradient: "from-teal-50 to-cyan-50",
        border: "border-teal-100",
        ctaStyle: "bg-teal-600 hover:bg-teal-700",
        copy: {
          en: {
            title: "Savings Calculator",
            description: "Project monthly savings growth and compare future value, deposits, and interest earned.",
            features: ["Future value projection", "Monthly savings model", "Interest breakdown"],
            badge: "Savings",
            cta: "Calculate Savings",
          },
          bm: {
            title: "Kalkulator Simpanan",
            description: "Unjur pertumbuhan simpanan bulanan dan bandingkan nilai masa depan, deposit, dan faedah.",
            features: ["Unjuran nilai masa depan", "Model simpanan bulanan", "Pecahan faedah"],
            badge: "Simpanan",
            cta: "Kira Simpanan",
          },
          zh: {
            title: "储蓄计算器",
            description: "预测每月储蓄成长，并比较未来价值、总存款与利息收益。",
            features: ["未来价值预测", "每月储蓄模型", "利息拆解"],
            badge: "储蓄",
            cta: "计算储蓄",
          },
        },
      },
      {
        href: "/currency-converter-malaysia",
        emoji: "💱",
        badgeColor: "bg-violet-100 text-violet-700",
        gradient: "from-violet-50 to-purple-50",
        border: "border-violet-100",
        ctaStyle: "bg-violet-600 hover:bg-violet-700",
        copy: {
          en: {
            title: "Currency Converter",
            description: "Convert Malaysian Ringgit against major currencies with indicative reference rates.",
            features: ["Major currencies", "MYR reference rates", "Quick amount swap"],
            badge: "Currency",
            cta: "Convert Currency",
          },
          bm: {
            title: "Penukar Mata Wang",
            description: "Tukar Ringgit Malaysia kepada mata wang utama menggunakan kadar rujukan indikatif.",
            features: ["Mata wang utama", "Kadar rujukan MYR", "Tukar amaun pantas"],
            badge: "Mata Wang",
            cta: "Tukar Mata Wang",
          },
          zh: {
            title: "货币兑换器",
            description: "使用参考汇率，将马来西亚令吉换算成主要外币。",
            features: ["主要货币", "MYR 参考汇率", "快速金额切换"],
            badge: "货币",
            cta: "兑换货币",
          },
        },
      },
    ],
  },
];

const totalTools = CATEGORIES.reduce((sum, category) => sum + category.tools.length, 0);

export default function CalculatorsIndexClient() {
  const { lang } = useLang();
  const page = PAGE_COPY[lang];

  return (
    <main className="flex-1 bg-gray-50">
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {page.badge(totalTools)}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{page.title}</h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">{page.subtitle}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id}>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-bold text-gray-900">{category.label[lang]}</h2>
              <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2.5 py-1 rounded-full">
                {category.tools.length} {category.tools.length === 1 ? page.singularTool : page.pluralTools}
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <p className="text-sm text-gray-500 mb-6 -mt-2">{category.description[lang]}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {category.tools.map((tool) => {
                const toolCopy = tool.copy[lang];

                return (
                  <div
                    key={tool.href}
                    className={`relative bg-gradient-to-br ${tool.gradient} rounded-2xl border ${tool.border} p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl" aria-hidden="true">
                        {tool.emoji}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tool.badgeColor}`}>
                        {toolCopy.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{toolCopy.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{toolCopy.description}</p>

                    <ul className="space-y-1.5 mb-5">
                      {toolCopy.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-gray-600">
                          <svg
                            className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={tool.href}
                      className={`${tool.ctaStyle} text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center transition-colors`}
                    >
                      {toolCopy.cta} →
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="text-base font-semibold text-gray-700 mb-4">{page.jumpTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
              >
                {category.label[lang]}
                <span className="text-xs text-gray-400">{category.tools.length}</span>
              </a>
            ))}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 hover:text-blue-600 transition-colors"
            >
              ← {page.home}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
