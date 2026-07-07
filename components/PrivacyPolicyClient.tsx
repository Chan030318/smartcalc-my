"use client";

import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const EFFECTIVE_DATE = "17 June 2025";
const CONTACT_EMAIL = "hello@smartcalc.my";

const PRIVACY_COPY = {
  en: {
    title: "Privacy Policy",
    effective: "Effective date",
    intro:
      "SmartCalc MY operates smartcalc.my. This policy explains what information we collect, how we use it, and how you can contact us about privacy matters.",
    sections: [
      {
        title: "1. Information We Collect",
        body: [
          "Calculator inputs are processed in your browser wherever possible. We do not intentionally collect the salary, tax, loan, health, or dream-board numbers you enter into calculators.",
          "We may collect non-personal usage data such as browser type, device type, pages visited, referring URLs, and general analytics events to improve the website.",
          "If you email us, we receive the information you choose to send, such as your email address, message, and any attachments.",
        ],
      },
      {
        title: "2. Cookies, Analytics, and Advertising",
        body: [
          "We may use cookies or similar technologies for site functionality, analytics, and advertising.",
          "Third-party services such as Google Analytics or Google AdSense may use cookies according to their own policies. You can manage cookies through your browser settings or Google advertising settings.",
        ],
      },
      {
        title: "3. How We Use Information",
        body: [
          "We use information to operate the site, improve calculators and content, respond to messages, prevent abuse, and understand which tools are useful to visitors.",
          "We do not sell personal information.",
        ],
      },
      {
        title: "4. Third-Party Links",
        body: [
          "SmartCalc MY may link to government, bank, reference, or partner websites. We are not responsible for the privacy practices or content of third-party sites.",
        ],
      },
      {
        title: "5. Your Rights and Contact",
        body: [
          `Depending on your jurisdiction, you may request access, correction, or deletion of personal information we hold. For privacy questions, contact us at ${CONTACT_EMAIL}.`,
          "We may update this policy from time to time. Changes will be posted on this page with an updated effective date.",
        ],
      },
    ],
  },
  bm: {
    title: "Dasar Privasi",
    effective: "Tarikh berkuat kuasa",
    intro:
      "SmartCalc MY mengendalikan smartcalc.my. Dasar ini menerangkan maklumat yang kami kumpul, cara kami menggunakannya, dan cara menghubungi kami tentang privasi.",
    sections: [
      {
        title: "1. Maklumat Yang Kami Kumpul",
        body: [
          "Input kalkulator diproses dalam pelayar anda setakat yang boleh. Kami tidak sengaja mengumpul nombor gaji, cukai, pinjaman, kesihatan, atau dream-board yang anda masukkan.",
          "Kami mungkin mengumpul data penggunaan bukan peribadi seperti jenis pelayar, jenis peranti, halaman dilawati, URL rujukan, dan acara analitik umum untuk menambah baik laman web.",
          "Jika anda menghantar e-mel kepada kami, kami menerima maklumat yang anda pilih untuk hantar, seperti alamat e-mel, mesej, dan lampiran.",
        ],
      },
      {
        title: "2. Kuki, Analitik, dan Pengiklanan",
        body: [
          "Kami mungkin menggunakan kuki atau teknologi serupa untuk fungsi laman, analitik, dan pengiklanan.",
          "Perkhidmatan pihak ketiga seperti Google Analytics atau Google AdSense mungkin menggunakan kuki mengikut dasar mereka sendiri. Anda boleh mengurus kuki melalui tetapan pelayar atau tetapan iklan Google.",
        ],
      },
      {
        title: "3. Cara Kami Menggunakan Maklumat",
        body: [
          "Kami menggunakan maklumat untuk mengendalikan laman, menambah baik kalkulator dan kandungan, membalas mesej, mencegah penyalahgunaan, dan memahami alat yang berguna kepada pelawat.",
          "Kami tidak menjual maklumat peribadi.",
        ],
      },
      {
        title: "4. Pautan Pihak Ketiga",
        body: [
          "SmartCalc MY mungkin memaut kepada laman kerajaan, bank, rujukan, atau rakan kongsi. Kami tidak bertanggungjawab terhadap amalan privasi atau kandungan laman pihak ketiga.",
        ],
      },
      {
        title: "5. Hak Anda dan Hubungan",
        body: [
          `Bergantung pada bidang kuasa anda, anda boleh meminta akses, pembetulan, atau pemadaman maklumat peribadi yang kami simpan. Untuk soalan privasi, hubungi ${CONTACT_EMAIL}.`,
          "Kami mungkin mengemas kini dasar ini dari semasa ke semasa. Perubahan akan dipaparkan pada halaman ini dengan tarikh berkuat kuasa yang dikemas kini.",
        ],
      },
    ],
  },
  zh: {
    title: "隐私政策",
    effective: "生效日期",
    intro:
      "SmartCalc MY 运营 smartcalc.my。本政策说明我们会收集什么资料、如何使用资料，以及你可以如何就隐私事项联系我们。",
    sections: [
      {
        title: "1. 我们收集的资料",
        body: [
          "在可行范围内，计算器输入会在你的浏览器中处理。我们不会刻意收集你输入的薪水、税务、贷款、健康或梦想图数字。",
          "我们可能收集非个人使用数据，例如浏览器类型、设备类型、访问页面、来源网址和一般分析事件，用于改善网站。",
          "如果你通过电邮联系我们，我们会收到你选择发送的资料，例如电邮地址、信息和附件。",
        ],
      },
      {
        title: "2. Cookie、分析与广告",
        body: [
          "我们可能使用 Cookie 或类似技术，用于网站功能、分析和广告。",
          "Google Analytics 或 Google AdSense 等第三方服务可能根据它们自己的政策使用 Cookie。你可以通过浏览器设置或 Google 广告设置管理 Cookie。",
        ],
      },
      {
        title: "3. 我们如何使用资料",
        body: [
          "我们使用资料来运营网站、改善计算器与内容、回复信息、防止滥用，并了解哪些工具对访客有帮助。",
          "我们不会出售个人资料。",
        ],
      },
      {
        title: "4. 第三方链接",
        body: [
          "SmartCalc MY 可能链接到政府、银行、参考资料或合作伙伴网站。我们不负责第三方网站的隐私做法或内容。",
        ],
      },
      {
        title: "5. 你的权利与联系方式",
        body: [
          `根据你所在地区的法律，你可以要求访问、更正或删除我们持有的个人资料。如有隐私问题，请联系 ${CONTACT_EMAIL}。`,
          "我们可能不时更新本政策。任何变更会发布在本页，并注明更新后的生效日期。",
        ],
      },
    ],
  },
} satisfies Record<Lang, unknown>;

export default function PrivacyPolicyClient() {
  const { lang } = useLang();
  const copy = PRIVACY_COPY[lang];

  return (
    <main className="flex-1 bg-gray-50">
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{copy.title}</h1>
          <p className="text-gray-500 text-sm">
            {copy.effective}: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 space-y-8">
          <p className="text-gray-600 text-sm leading-relaxed">{copy.intro}</p>
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h2>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
