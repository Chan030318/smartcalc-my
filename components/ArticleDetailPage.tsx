"use client";

import Link from "next/link";
import { articles, categoryConfig, type Article } from "@/content/articles";
import { useLang } from "@/components/LangProvider";

const SECTION_LABELS = {
  en: {
    why: "Why",
    what: "What",
    comparison: "Ordinary thinking vs successful thinking",
    ordinary: "Ordinary thinking",
    successful: "Successful thinking",
    action: "What to do next",
    story: "Story",
    source: "Reference sources",
    disclaimer: "Important disclaimer",
    back: "Back to articles",
  },
  bm: {
    why: "Kenapa",
    what: "Apa",
    comparison: "Pemikiran biasa vs pemikiran berjaya",
    ordinary: "Pemikiran biasa",
    successful: "Pemikiran berjaya",
    action: "Apa perlu dibuat",
    story: "Cerita",
    source: "Sumber rujukan",
    disclaimer: "Penafian penting",
    back: "Kembali ke artikel",
  },
  zh: {
    why: "为什么",
    what: "是什么",
    comparison: "普通人 vs 成功者",
    ordinary: "普通人的想法",
    successful: "成功者的想法",
    action: "要怎样",
    story: "故事",
    source: "参考来源",
    disclaimer: "重要免责声明",
    back: "回到文章列表",
  },
} as const;

const DISCLAIMERS = {
  finance: {
    en: "This article is for financial education only and does not constitute investment, borrowing, tax, or personal financial advice.",
    bm: "Artikel ini untuk pendidikan kewangan sahaja dan bukan nasihat pelaburan, pinjaman, cukai, atau kewangan peribadi.",
    zh: "本文仅供财商教育参考，不构成投资、借贷、税务或个人财务建议。",
  },
  "labor-law": {
    en: "This article is general information only. Actual employment situations can differ; please consult Malaysia's Labour Department or a qualified lawyer.",
    bm: "Artikel ini hanya maklumat umum. Situasi kerja sebenar boleh berbeza; sila rujuk Jabatan Tenaga Kerja Malaysia atau peguam bertauliah.",
    zh: "本文仅供一般资讯参考。实际个案可能不同，请咨询马来西亚劳工部或合格律师。",
  },
} as const;

export default function ArticleDetailPage({
  article,
  forceLang,
}: {
  article: Article;
  forceLang?: "en" | "bm" | "zh";
}) {
  const { lang: hookLang } = useLang();
  const lang = forceLang ?? hookLang;
  const labels = SECTION_LABELS[lang];
  const config = categoryConfig[article.category];
  const disclaimer =
    article.category === "finance" || article.category === "labor-law"
      ? DISCLAIMERS[article.category][lang]
      : "";
  const related =
    article.relatedSlugs
      ?.map((slug) => articles.find((candidate) => candidate.slug === slug))
      .filter((candidate): candidate is Article => Boolean(candidate)) ?? [];

  return (
    <main className="min-h-screen bg-gray-50">
      <article>
        <header className="bg-[#071427] text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <Link href={config.href} className="text-sm font-bold text-amber-300 hover:text-amber-200">
              {labels.back}
            </Link>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-amber-300">
              {config.eyebrow[lang]}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              {article.title[lang]}
            </h1>
            <p className="mt-5 text-base leading-8 text-gray-300">{article.summary[lang]}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
          <TextBlock title={labels.why} body={article.why[lang]} />
          <TextBlock title={labels.what} body={article.what[lang]} />

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-gray-950">{labels.comparison}</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 bg-gray-100 text-sm font-black text-gray-700">
                <div className="border-r border-gray-200 p-4">{labels.ordinary}</div>
                <div className="p-4">{labels.successful}</div>
              </div>
              {article.comparison.map((row, index) => (
                <div key={index} className="grid grid-cols-2 border-t border-gray-200 text-sm leading-7">
                  <div className="border-r border-gray-200 p-4 text-gray-600">{row.ordinary[lang]}</div>
                  <div className="p-4 font-medium text-gray-800">{row.successful[lang]}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-gray-950">{labels.action}</h2>
            <ol className="mt-4 space-y-3">
              {article.action.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm leading-7 text-gray-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-black text-amber-800">
                    {index + 1}
                  </span>
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ol>
          </section>

          <TextBlock title={labels.story} body={article.story[lang]} />

          {related.length > 0 && (
            <section className="border-t border-gray-100 pt-8">
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                {lang === "zh" ? "相关文章" : lang === "bm" ? "Artikel Berkaitan" : "Related Articles"}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={lang === "zh" ? `/zh/${relatedArticle.category}/${relatedArticle.slug}` : `/${relatedArticle.category}/${relatedArticle.slug}`}
                    className="block rounded-xl border border-gray-200 p-4 transition-all hover:border-blue-300 hover:shadow-sm"
                  >
                    <p className="text-sm font-semibold text-gray-900">{relatedArticle.title[lang]}</p>
                    <p className="mt-1 line-clamp-2 text-xs text-gray-500">{relatedArticle.summary[lang]}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-gray-950">{labels.source}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
              {article.source.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </section>

          {article.disclaimer && disclaimer && (
            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-lg font-black text-amber-900">{labels.disclaimer}</h2>
              <p className="mt-2 text-sm leading-7 text-amber-900">{disclaimer}</p>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black text-gray-950">{title}</h2>
      <p className="mt-4 text-base leading-8 text-gray-700">{body}</p>
    </section>
  );
}
