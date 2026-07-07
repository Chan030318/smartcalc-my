"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const ABOUT_COPY = {
  en: {
    icon: "📊",
    title: "About SmartCalc MY",
    subtitle:
      "SmartCalc MY helps young Malaysians understand money through practical calculators, simple guides, and financial literacy tools.",
    missionTitle: "Our Mission",
    mission: [
      "We believe financial confidence starts with clear numbers. Salary, tax, EPF, loans, DSR, and compounding should not feel mysterious.",
      "SmartCalc MY exists to help Malaysians make better everyday decisions before taking on debt, buying a home, filing tax, or planning for freedom.",
      "Our tools are educational, Malaysia-focused, and designed to be easy enough for beginners to use without feeling judged.",
    ],
    calculatorsTitle: "What We Build",
    calculatorsCta: "View all calculators",
    calculators: [
      { href: "/salary-calculator-malaysia", icon: "💵", title: "Salary & Tax", body: "Estimate take-home pay, PCB, EPF, SOCSO, and EIS with Malaysia-focused assumptions." },
      { href: "/dsr-calculator-malaysia", icon: "🏦", title: "Loans & Debt", body: "Check loan affordability, DSR, repayments, and the true cost of borrowing before you sign." },
      { href: "/financial-freedom-calculator", icon: "🌱", title: "Freedom Planning", body: "Understand active income, passive income, expenses, and the number needed to retire with choices." },
      { href: "/dream-board", icon: "🎯", title: "Dream Board", body: "Turn goals into something visible so action becomes easier to repeat." },
    ],
    valuesTitle: "What We Stand For",
    values: [
      { title: "Malaysia-first", body: "Rates, rules, examples, and language are shaped around local Malaysian life." },
      { title: "Beginner-friendly", body: "We explain concepts plainly so young people can act earlier and with less fear." },
      { title: "Privacy-aware", body: "We avoid collecting unnecessary personal data and keep tools simple." },
      { title: "Education, not pressure", body: "The goal is better thinking and better habits, not hype or quick-rich promises." },
    ],
    disclaimerTitle: "Important Disclaimer",
    disclaimer:
      "SmartCalc MY provides educational estimates only. Results are not financial, tax, legal, medical, or investment advice. Always verify with official sources or qualified professionals before making decisions.",
  },
  bm: {
    icon: "📊",
    title: "Tentang SmartCalc MY",
    subtitle:
      "SmartCalc MY membantu anak muda Malaysia memahami wang melalui kalkulator praktikal, panduan mudah, dan alat celik kewangan.",
    missionTitle: "Misi Kami",
    mission: [
      "Kami percaya keyakinan kewangan bermula dengan nombor yang jelas. Gaji, cukai, KWSP, pinjaman, DSR, dan kompaun tidak patut terasa mengelirukan.",
      "SmartCalc MY wujud untuk membantu rakyat Malaysia membuat keputusan harian yang lebih baik sebelum berhutang, membeli rumah, melapor cukai, atau merancang kebebasan kewangan.",
      "Alat kami bersifat pendidikan, berfokus kepada Malaysia, dan cukup mudah untuk digunakan oleh pemula tanpa rasa takut.",
    ],
    calculatorsTitle: "Apa Yang Kami Bina",
    calculatorsCta: "Lihat semua kalkulator",
    calculators: [
      { href: "/salary-calculator-malaysia", icon: "💵", title: "Gaji & Cukai", body: "Anggar gaji bersih, PCB, KWSP, PERKESO, dan SIP/EIS dengan andaian Malaysia." },
      { href: "/dsr-calculator-malaysia", icon: "🏦", title: "Pinjaman & Hutang", body: "Semak kemampuan pinjaman, DSR, ansuran, dan kos sebenar sebelum menandatangani apa-apa." },
      { href: "/financial-freedom-calculator", icon: "🌱", title: "Perancangan Kebebasan", body: "Fahami pendapatan aktif, pendapatan pasif, perbelanjaan, dan nombor untuk bersara dengan pilihan." },
      { href: "/dream-board", icon: "🎯", title: "Dream Board", body: "Jadikan matlamat lebih jelas supaya tindakan lebih mudah diulang." },
    ],
    valuesTitle: "Prinsip Kami",
    values: [
      { title: "Fokus Malaysia", body: "Kadar, peraturan, contoh, dan bahasa dibentuk mengikut kehidupan tempatan Malaysia." },
      { title: "Mesra pemula", body: "Kami jelaskan konsep dengan mudah supaya anak muda boleh bertindak lebih awal." },
      { title: "Peka privasi", body: "Kami mengelakkan pengumpulan data peribadi yang tidak perlu dan mengekalkan alat yang ringkas." },
      { title: "Pendidikan, bukan tekanan", body: "Matlamatnya ialah pemikiran dan tabiat yang lebih baik, bukan janji cepat kaya." },
    ],
    disclaimerTitle: "Penafian Penting",
    disclaimer:
      "SmartCalc MY menyediakan anggaran pendidikan sahaja. Keputusan bukan nasihat kewangan, cukai, undang-undang, perubatan, atau pelaburan. Sentiasa semak dengan sumber rasmi atau profesional bertauliah sebelum membuat keputusan.",
  },
  zh: {
    icon: "📊",
    title: "关于 SmartCalc MY",
    subtitle: "SmartCalc MY 帮助马来西亚年轻人，用实用计算器、简单指南和财商工具，更清楚地理解金钱。",
    missionTitle: "我们的使命",
    mission: [
      "我们相信，财务信心从清楚的数字开始。薪水、税务、EPF、贷款、DSR 和复利，不应该让年轻人觉得神秘。",
      "SmartCalc MY 的存在，是为了帮助马来西亚人在借贷、买房、报税或规划财务自由前，做出更好的日常决定。",
      "我们的工具以教育为主，贴近马来西亚，也尽量让新手可以轻松使用，不需要感到压力。",
    ],
    calculatorsTitle: "我们正在打造什么",
    calculatorsCta: "查看全部计算器",
    calculators: [
      { href: "/salary-calculator-malaysia", icon: "💵", title: "薪水与税务", body: "用马来西亚情境估算实收薪水、PCB、EPF、SOCSO 和 EIS。" },
      { href: "/dsr-calculator-malaysia", icon: "🏦", title: "贷款与债务", body: "在签任何贷款前，先检查贷款能力、DSR、月供与真实借贷成本。" },
      { href: "/financial-freedom-calculator", icon: "🌱", title: "自由规划", body: "理解主动收入、被动收入、开销，以及要有选择权所需要的退休数字。" },
      { href: "/dream-board", icon: "🎯", title: "梦想图", body: "把目标变成看得见的画面，让行动更容易持续。" },
    ],
    valuesTitle: "我们的原则",
    values: [
      { title: "马来西亚优先", body: "利率、规则、例子和语言，都围绕本地生活来设计。" },
      { title: "新手友善", body: "用简单的话解释概念，让年轻人可以更早行动。" },
      { title: "重视隐私", body: "避免收集不必要的个人资料，让工具保持简单。" },
      { title: "教育，不制造压力", body: "目标是更好的思维和习惯，不是快速致富的承诺。" },
    ],
    disclaimerTitle: "重要免责声明",
    disclaimer:
      "SmartCalc MY 只提供教育性质的估算。结果不构成财务、税务、法律、医疗或投资建议。作出决定前，请以官方资料或合格专业人士意见为准。",
  },
} satisfies Record<Lang, unknown>;

export default function AboutPageClient() {
  const { lang } = useLang();
  const copy = ABOUT_COPY[lang];

  return (
    <main className="flex-1 bg-gray-50">
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="text-5xl mb-5" aria-hidden="true">{copy.icon}</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{copy.title}</h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{copy.subtitle}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{copy.missionTitle}</h2>
          <div className="space-y-4">
            {copy.mission.map((paragraph) => (
              <p key={paragraph} className="text-gray-600 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{copy.calculatorsTitle}</h2>
          <Link href="/calculators" className="text-sm font-medium text-blue-600 hover:underline">
            {copy.calculatorsCta} →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {copy.calculators.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{copy.valuesTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {copy.values.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-amber-800 mb-3">{copy.disclaimerTitle}</h2>
          <p className="text-amber-700 text-sm leading-relaxed">{copy.disclaimer}</p>
        </div>
      </section>
    </main>
  );
}
