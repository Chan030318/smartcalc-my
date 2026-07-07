"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const EFFECTIVE_DATE = "17 June 2025";
const CONTACT_EMAIL = "hello@smartcalc.my";

const TERMS_COPY = {
  en: {
    title: "Terms of Use",
    effective: "Effective date",
    calloutTitle: "All calculator results are estimates only",
    callout:
      "SmartCalc MY calculators are educational tools. Results do not constitute financial, medical, tax, legal, or investment advice.",
    intro:
      "These Terms govern your access to and use of SmartCalc MY, including calculators, articles, and learning tools. By using the site, you agree to these Terms.",
    sections: [
      {
        title: "1. Nature of the Service",
        body: [
          "SmartCalc MY provides free online calculators and educational content for general information.",
          "Our tools may cover topics such as salary, tax, EPF, SOCSO, EIS, DSR, loans, savings, health, and financial literacy.",
        ],
      },
      {
        title: "2. No Professional Advice",
        body: [
          "Calculator outputs are estimates based on simplified assumptions, public rates, or user-provided inputs.",
          "They may not reflect your personal circumstances, employer arrangements, bank-specific terms, tax reliefs, or official calculations.",
          "Always verify important decisions with LHDN, EPF/KWSP, SOCSO/PERKESO, your bank, or a qualified professional.",
        ],
      },
      {
        title: "3. Acceptable Use",
        body: [
          "You agree not to misuse the site, attempt to disrupt its operation, scrape content at scale without permission, or misrepresent our results as official advice.",
        ],
      },
      {
        title: "4. Intellectual Property",
        body: [
          "The site design, text, code, calculator logic, and content are owned by SmartCalc MY or its contributors unless stated otherwise.",
          "You may link to our pages, but you may not reproduce substantial parts of the site without written permission.",
        ],
      },
      {
        title: "5. Limitation of Liability",
        body: [
          "To the fullest extent permitted by Malaysian law, SmartCalc MY is not liable for losses arising from reliance on calculator results, content, interruptions, errors, or third-party links.",
        ],
      },
      {
        title: "6. Changes and Contact",
        body: [
          `We may update these Terms from time to time. For questions, contact ${CONTACT_EMAIL}.`,
        ],
      },
    ],
    privacyLead: "See also our",
    privacyLink: "Privacy Policy",
  },
  bm: {
    title: "Terma Penggunaan",
    effective: "Tarikh berkuat kuasa",
    calloutTitle: "Semua keputusan kalkulator hanyalah anggaran",
    callout:
      "Kalkulator SmartCalc MY ialah alat pendidikan. Keputusan bukan nasihat kewangan, perubatan, cukai, undang-undang, atau pelaburan.",
    intro:
      "Terma ini mengawal akses dan penggunaan SmartCalc MY, termasuk kalkulator, artikel, dan alat pembelajaran. Dengan menggunakan laman ini, anda bersetuju dengan Terma ini.",
    sections: [
      {
        title: "1. Sifat Perkhidmatan",
        body: [
          "SmartCalc MY menyediakan kalkulator dalam talian percuma dan kandungan pendidikan untuk maklumat umum.",
          "Alat kami mungkin merangkumi topik seperti gaji, cukai, KWSP, PERKESO, SIP/EIS, DSR, pinjaman, simpanan, kesihatan, dan celik kewangan.",
        ],
      },
      {
        title: "2. Bukan Nasihat Profesional",
        body: [
          "Output kalkulator ialah anggaran berdasarkan andaian mudah, kadar awam, atau input pengguna.",
          "Ia mungkin tidak mencerminkan keadaan peribadi, aturan majikan, terma bank, pelepasan cukai, atau kiraan rasmi anda.",
          "Sentiasa sahkan keputusan penting dengan LHDN, KWSP, PERKESO, bank anda, atau profesional bertauliah.",
        ],
      },
      {
        title: "3. Penggunaan Yang Dibenarkan",
        body: [
          "Anda bersetuju untuk tidak menyalahgunakan laman, mengganggu operasi, menyalin kandungan secara besar-besaran tanpa izin, atau menggambarkan keputusan kami sebagai nasihat rasmi.",
        ],
      },
      {
        title: "4. Harta Intelek",
        body: [
          "Reka bentuk laman, teks, kod, logik kalkulator, dan kandungan dimiliki oleh SmartCalc MY atau penyumbangnya kecuali dinyatakan sebaliknya.",
          "Anda boleh memaut ke halaman kami, tetapi tidak boleh menghasilkan semula bahagian besar laman tanpa kebenaran bertulis.",
        ],
      },
      {
        title: "5. Had Liabiliti",
        body: [
          "Setakat yang dibenarkan oleh undang-undang Malaysia, SmartCalc MY tidak bertanggungjawab atas kerugian akibat pergantungan pada keputusan kalkulator, kandungan, gangguan, ralat, atau pautan pihak ketiga.",
        ],
      },
      {
        title: "6. Perubahan dan Hubungan",
        body: [
          `Kami mungkin mengemas kini Terma ini dari semasa ke semasa. Untuk pertanyaan, hubungi ${CONTACT_EMAIL}.`,
        ],
      },
    ],
    privacyLead: "Lihat juga",
    privacyLink: "Dasar Privasi",
  },
  zh: {
    title: "使用条款",
    effective: "生效日期",
    calloutTitle: "所有计算器结果都只是估算",
    callout: "SmartCalc MY 的计算器属于教育工具。结果不构成财务、医疗、税务、法律或投资建议。",
    intro:
      "本条款适用于你访问和使用 SmartCalc MY，包括计算器、文章和学习工具。使用本网站即代表你同意这些条款。",
    sections: [
      {
        title: "1. 服务性质",
        body: [
          "SmartCalc MY 提供免费的线上计算器和教育内容，用于一般参考。",
          "我们的工具可能涵盖薪水、税务、EPF、SOCSO、EIS、DSR、贷款、储蓄、健康和财商教育等主题。",
        ],
      },
      {
        title: "2. 不构成专业建议",
        body: [
          "计算结果是根据简化假设、公开费率或用户输入所产生的估算。",
          "它可能无法反映你的个人情况、雇主安排、银行条款、税务减免或官方计算。",
          "重要决定前，请向 LHDN、EPF/KWSP、SOCSO/PERKESO、你的银行或合格专业人士确认。",
        ],
      },
      {
        title: "3. 可接受使用",
        body: [
          "你同意不滥用网站、不干扰网站运行、不在未经许可下大量抓取内容，也不把我们的结果误称为官方建议。",
        ],
      },
      {
        title: "4. 知识产权",
        body: [
          "网站设计、文字、代码、计算逻辑和内容，除非另有说明，均属于 SmartCalc MY 或贡献者所有。",
          "你可以链接到我们的页面，但未经书面许可，不得复制网站的大量内容。",
        ],
      },
      {
        title: "5. 责任限制",
        body: [
          "在马来西亚法律允许的最大范围内，SmartCalc MY 不对因依赖计算器结果、内容、中断、错误或第三方链接而造成的损失承担责任。",
        ],
      },
      {
        title: "6. 变更与联系",
        body: [
          `我们可能不时更新这些条款。如有疑问，请联系 ${CONTACT_EMAIL}。`,
        ],
      },
    ],
    privacyLead: "也请查看",
    privacyLink: "隐私政策",
  },
} satisfies Record<Lang, unknown>;

export default function TermsPageClient() {
  const { lang } = useLang();
  const copy = TERMS_COPY[lang];

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
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-bold text-amber-800 mb-1">{copy.calloutTitle}</p>
              <p className="text-amber-700 text-sm leading-relaxed">{copy.callout}</p>
            </div>
          </div>
        </div>

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
          <p className="text-gray-600 text-sm leading-relaxed">
            {copy.privacyLead}{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              {copy.privacyLink}
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
