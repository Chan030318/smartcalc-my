"use client";

import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const CONTACT_EMAIL = "hello@smartcalc.my";

const CONTACT_COPY = {
  en: {
    icon: "✉️",
    title: "Contact Us",
    subtitle:
      "We are building practical financial tools for Malaysians. Feedback, corrections, and partnership ideas are welcome.",
    cardTitle: "Get in Touch",
    emailLabel: "Email",
    emailNote: "We aim to respond within 2 business days",
    locationLabel: "Based In",
    location: "Kuala Lumpur, Malaysia",
    timeLabel: "Response Time",
    time: "Within 2 business days",
    timeNote: "Monday to Friday, MYT (UTC+8)",
    noteTitle: "Note",
    note:
      "We cannot provide personalised financial, tax, legal, or medical advice. For personal decisions, please consult a qualified professional.",
    topicsTitle: "What Can We Help With?",
    topics: [
      { icon: "🐞", title: "Bug Reports", body: "Found a calculation that seems off? Send the inputs and the result you expected." },
      { icon: "💡", title: "Feature Requests", body: "Want a new calculator, article, or learning tool? Tell us what would help." },
      { icon: "🤝", title: "Partnerships", body: "Interested in collaboration, sponsorship, or licensing? Reach out to discuss." },
      { icon: "📋", title: "General Enquiries", body: "Questions about SmartCalc MY, our content, or our roadmap are welcome." },
    ],
    beforeTitle: "Before You Write",
    checklist: [
      "For calculation issues, include the exact inputs you entered.",
      "For partnership enquiries, include your website, company, or project name.",
      "For personal tax, loan, salary, or health questions, speak with a qualified professional.",
    ],
  },
  bm: {
    icon: "✉️",
    title: "Hubungi Kami",
    subtitle:
      "Kami sedang membina alat kewangan praktikal untuk rakyat Malaysia. Maklum balas, pembetulan, dan idea kerjasama amat dialu-alukan.",
    cardTitle: "Hubungi Kami",
    emailLabel: "E-mel",
    emailNote: "Kami cuba membalas dalam 2 hari bekerja",
    locationLabel: "Berpangkalan Di",
    location: "Kuala Lumpur, Malaysia",
    timeLabel: "Masa Respons",
    time: "Dalam 2 hari bekerja",
    timeNote: "Isnin hingga Jumaat, MYT (UTC+8)",
    noteTitle: "Nota",
    note:
      "Kami tidak boleh memberi nasihat kewangan, cukai, undang-undang, atau perubatan yang diperibadikan. Untuk keputusan peribadi, sila rujuk profesional bertauliah.",
    topicsTitle: "Apa Yang Boleh Kami Bantu?",
    topics: [
      { icon: "🐞", title: "Laporan Ralat", body: "Jumpa kiraan yang kelihatan tidak tepat? Hantar input dan keputusan yang anda jangka." },
      { icon: "💡", title: "Cadangan Ciri", body: "Mahukan kalkulator, artikel, atau alat pembelajaran baru? Beritahu apa yang membantu." },
      { icon: "🤝", title: "Kerjasama", body: "Berminat dengan kolaborasi, tajaan, atau pelesenan? Hubungi kami untuk berbincang." },
      { icon: "📋", title: "Pertanyaan Umum", body: "Soalan tentang SmartCalc MY, kandungan, atau hala tuju kami dialu-alukan." },
    ],
    beforeTitle: "Sebelum Anda Menulis",
    checklist: [
      "Untuk isu kiraan, sertakan input tepat yang anda masukkan.",
      "Untuk pertanyaan kerjasama, sertakan laman web, syarikat, atau nama projek.",
      "Untuk soalan peribadi tentang cukai, pinjaman, gaji, atau kesihatan, rujuk profesional bertauliah.",
    ],
  },
  zh: {
    icon: "✉️",
    title: "联系我们",
    subtitle: "我们正在为马来西亚用户打造实用的财务工具。欢迎反馈、纠错、建议新功能或洽谈合作。",
    cardTitle: "联系方式",
    emailLabel: "电邮",
    emailNote: "我们会尽量在 2 个工作日内回复",
    locationLabel: "所在地",
    location: "马来西亚吉隆坡",
    timeLabel: "回复时间",
    time: "2 个工作日内",
    timeNote: "星期一至星期五，马来西亚时间 UTC+8",
    noteTitle: "说明",
    note:
      "我们不能提供个人化的财务、税务、法律或医疗建议。如涉及个人决定，请咨询合格专业人士。",
    topicsTitle: "我们可以帮什么？",
    topics: [
      { icon: "🐞", title: "错误回报", body: "如果你发现计算结果不对，请提供输入数据和你预期的结果。" },
      { icon: "💡", title: "功能建议", body: "想要新的计算器、文章或学习工具？告诉我们什么最有帮助。" },
      { icon: "🤝", title: "合作洽谈", body: "如果你想合作、赞助或授权工具，欢迎联系讨论。" },
      { icon: "📋", title: "一般询问", body: "关于 SmartCalc MY、内容或路线图的问题都可以告诉我们。" },
    ],
    beforeTitle: "写信前可以先准备",
    checklist: [
      "如果是计算问题，请附上你输入的具体数字。",
      "如果是合作询问，请附上网站、公司或项目名称。",
      "如果是个人税务、贷款、薪水或健康问题，请咨询合格专业人士。",
    ],
  },
} satisfies Record<Lang, unknown>;

export default function ContactPageClient() {
  const { lang } = useLang();
  const copy = CONTACT_COPY[lang];

  return (
    <main className="flex-1 bg-gray-50">
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="text-5xl mb-5" aria-hidden="true">{copy.icon}</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{copy.title}</h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">{copy.subtitle}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">{copy.cardTitle}</h2>
              <div className="space-y-5">
                <InfoRow icon="📧" label={copy.emailLabel}>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:text-blue-700 text-sm transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">{copy.emailNote}</p>
                </InfoRow>
                <InfoRow icon="📍" label={copy.locationLabel}>
                  <p className="text-sm text-gray-600">{copy.location}</p>
                </InfoRow>
                <InfoRow icon="⏱️" label={copy.timeLabel}>
                  <p className="text-sm text-gray-600">{copy.time}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{copy.timeNote}</p>
                </InfoRow>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-700">
              <p className="font-semibold mb-1">{copy.noteTitle}</p>
              <p className="leading-relaxed">{copy.note}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-lg font-bold text-gray-900 mb-4">{copy.topicsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {copy.topics.map((topic) => (
                <div key={topic.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                  <div className="text-2xl mb-2" aria-hidden="true">{topic.icon}</div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{topic.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{topic.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-3">{copy.beforeTitle}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {copy.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoRow({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-lg" aria-hidden="true">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  );
}
