"use client";

import Link from "next/link";
import { categoryConfig, getArticlesByCategory, type ArticleCategory } from "@/content/articles";
import { useLang } from "@/components/LangProvider";

const LIST_TEXT = {
  en: {
    empty: "Articles are being prepared.",
    read: "Read article",
  },
  bm: {
    empty: "Artikel sedang disediakan.",
    read: "Baca artikel",
  },
  zh: {
    empty: "文章正在准备中。",
    read: "阅读文章",
  },
} as const;

export default function ArticleListPage({ category }: { category: ArticleCategory }) {
  const { lang } = useLang();
  const config = categoryConfig[category];
  const articles = getArticlesByCategory(category);
  const listText = LIST_TEXT[lang];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#071427] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
            {config.eyebrow[lang]}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            {config.title[lang]}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300">
            {config.description[lang]}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {articles.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500">
            {listText.empty}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`${config.href}/${article.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-amber-200 hover:bg-amber-50/30"
              >
                <h2 className="text-xl font-black text-gray-950 group-hover:text-amber-700">
                  {article.title[lang]}
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">{article.summary[lang]}</p>
                <span className="mt-5 inline-flex text-sm font-black text-amber-700">
                  {listText.read} <span aria-hidden="true" className="ml-1">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
