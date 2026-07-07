"use client";

import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

type TrustItem = {
  stat: string;
  label: string;
};

const BENEFITS_COPY: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    benefits: Benefit[];
    trust: TrustItem[];
  }
> = {
  en: {
    title: "Why SmartCalc MY?",
    subtitle: "Trusted by Malaysians for fast, accurate, and private calculations.",
    benefits: [
      {
        icon: "🇲🇾",
        title: "Built for Malaysia",
        description:
          "Calculations use Malaysia-focused assumptions such as EPF, SOCSO, EIS, PCB tax brackets, and local financial rules.",
      },
      {
        icon: "⚡",
        title: "Instant Results",
        description: "No loading screens. Results update as you type so you can explore different scenarios quickly.",
      },
      {
        icon: "🔒",
        title: "Private by Design",
        description: "Most tools run in your browser. We keep the experience simple and avoid collecting unnecessary personal data.",
      },
      {
        icon: "📱",
        title: "Works on Any Device",
        description: "The calculators are responsive on phone, tablet, and desktop without requiring an app download.",
      },
      {
        icon: "🆓",
        title: "Always Free",
        description: "No subscription, hidden fee, or sign-up is needed to use the core calculators and learning tools.",
      },
      {
        icon: "🔄",
        title: "Kept Practical",
        description: "We update the tools and content as Malaysian rates, rules, and young people's financial questions evolve.",
      },
    ],
    trust: [
      { stat: "14", label: "Calculators" },
      { stat: "100%", label: "Free Core Tools" },
      { stat: "0", label: "Sign-up Required" },
      { stat: "🇲🇾", label: "Malaysia-focused" },
    ],
  },
  bm: {
    title: "Mengapa SmartCalc MY?",
    subtitle: "Dipercayai untuk pengiraan Malaysia yang pantas, jelas, dan menjaga privasi.",
    benefits: [
      {
        icon: "🇲🇾",
        title: "Dibina untuk Malaysia",
        description:
          "Pengiraan menggunakan andaian tempatan seperti KWSP, PERKESO, SIP/EIS, kadar PCB, dan peraturan kewangan Malaysia.",
      },
      {
        icon: "⚡",
        title: "Keputusan Segera",
        description: "Tiada skrin menunggu. Keputusan berubah semasa anda menaip supaya senario berbeza mudah diuji.",
      },
      {
        icon: "🔒",
        title: "Privasi Diutamakan",
        description: "Kebanyakan alat berjalan dalam pelayar anda. Kami mengelakkan pengumpulan data peribadi yang tidak perlu.",
      },
      {
        icon: "📱",
        title: "Sesuai Semua Peranti",
        description: "Kalkulator responsif pada telefon, tablet, dan desktop tanpa perlu memuat turun aplikasi.",
      },
      {
        icon: "🆓",
        title: "Sentiasa Percuma",
        description: "Tiada langganan, caj tersembunyi, atau pendaftaran diperlukan untuk alat utama.",
      },
      {
        icon: "🔄",
        title: "Sentiasa Praktikal",
        description: "Alat dan kandungan dikemas kini mengikut kadar, peraturan, dan soalan kewangan anak muda Malaysia.",
      },
    ],
    trust: [
      { stat: "14", label: "Kalkulator" },
      { stat: "100%", label: "Alat Asas Percuma" },
      { stat: "0", label: "Pendaftaran Diperlukan" },
      { stat: "🇲🇾", label: "Fokus Malaysia" },
    ],
  },
  zh: {
    title: "为什么选择 SmartCalc MY？",
    subtitle: "为马来西亚用户提供快速、清楚、重视隐私的计算体验。",
    benefits: [
      {
        icon: "🇲🇾",
        title: "为马来西亚而做",
        description:
          "计算会贴近本地情境，例如 EPF/KWSP、SOCSO/PERKESO、EIS/SIP、PCB 税率与本地财务规则。",
      },
      {
        icon: "⚡",
        title: "即时结果",
        description: "不需要等待页面加载。你输入时结果会即时更新，方便快速比较不同情境。",
      },
      {
        icon: "🔒",
        title: "重视隐私",
        description: "大多数工具直接在浏览器运行。我们让体验保持简单，并避免收集不必要的个人资料。",
      },
      {
        icon: "📱",
        title: "任何设备都能用",
        description: "手机、平板和电脑都能顺畅使用，不需要下载额外 App。",
      },
      {
        icon: "🆓",
        title: "核心工具免费",
        description: "使用主要计算器和学习工具，不需要订阅、不需要隐藏费用，也不需要注册。",
      },
      {
        icon: "🔄",
        title: "保持实用",
        description: "我们会根据马来西亚的利率、规则和年轻人的财务问题，持续更新工具与内容。",
      },
    ],
    trust: [
      { stat: "14", label: "计算器" },
      { stat: "100%", label: "核心工具免费" },
      { stat: "0", label: "无需注册" },
      { stat: "🇲🇾", label: "马来西亚导向" },
    ],
  },
};

export default function Benefits() {
  const { lang } = useLang();
  const copy = BENEFITS_COPY[lang];

  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{copy.title}</h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-3xl flex-shrink-0" aria-hidden="true">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-100 pt-10 flex flex-wrap justify-center gap-10 text-center">
          {copy.trust.map((item) => (
            <div key={item.label}>
              <div className="text-3xl font-extrabold text-blue-600">{item.stat}</div>
              <div className="text-sm text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
