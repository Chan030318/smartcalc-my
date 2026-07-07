"use client";

import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const DISCLAIMER_COPY: Record<Lang, { label: string; body: string }> = {
  en: {
    label: "Disclaimer:",
    body:
      "This calculator and article are provided for educational and informational purposes only. Results are estimates and should not be considered financial, tax, legal, or investment advice. Please consult the relevant authority, financial institution, or qualified professional before making financial decisions.",
  },
  bm: {
    label: "Penafian:",
    body:
      "Kalkulator dan artikel ini disediakan untuk tujuan pendidikan dan maklumat umum sahaja. Keputusan adalah anggaran dan tidak harus dianggap sebagai nasihat kewangan, cukai, undang-undang, atau pelaburan. Sila rujuk pihak berkuasa berkaitan, institusi kewangan, atau profesional bertauliah sebelum membuat keputusan kewangan.",
  },
  zh: {
    label: "免责声明：",
    body:
      "本计算器与文章仅供教育和一般参考。计算结果属于估算，不应被视为财务、税务、法律或投资建议。在作出财务决定前，请咨询相关机构、金融机构或合格专业人士。",
  },
};

export default function FinancialDisclaimer() {
  const { lang } = useLang();
  const copy = DISCLAIMER_COPY[lang];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4">
        <svg
          className="flex-shrink-0 w-5 h-5 text-blue-400 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-blue-700 leading-relaxed">
          <span className="font-semibold">{copy.label}</span> {copy.body}
        </p>
      </div>
    </div>
  );
}
