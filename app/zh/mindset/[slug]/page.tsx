import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetailPage from "@/components/ArticleDetailPage";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { getArticle, getArticlesByCategory } from "@/content/articles";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export function generateStaticParams() {
  return getArticlesByCategory("mindset").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("mindset", slug);
  if (!article) return {};

  const url = `${BASE_URL}/zh/mindset/${slug}`;
  const canonicalEn = `/mindset/${slug}`;

  return {
    title: article.title.zh,
    description: article.summary.zh.slice(0, 155),
    alternates: {
      canonical: canonicalEn,
      languages: {
        "en-MY": `${BASE_URL}/mindset/${slug}`,
        "ms-MY": `${BASE_URL}/mindset/${slug}`,
        "zh-MY": url,
      },
    },
    openGraph: {
      title: article.title.zh,
      description: article.summary.zh.slice(0, 155),
      url,
      type: "article",
      locale: "zh_MY",
    },
  };
}

export default async function ZhMindsetArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle("mindset", slug);
  if (!article) notFound();

  const url = `${BASE_URL}/zh/mindset/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title.zh,
        description: article.summary.zh,
        url,
        datePublished: "2026-07-03",
        dateModified: "2026-07-03",
        inLanguage: "zh",
        author: { "@id": `${BASE_URL}/#organization` },
        publisher: {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
          name: "SmartCalc MY",
          url: BASE_URL,
          logo: { "@type": "ImageObject", url: `${BASE_URL}/icon-192.png` },
        },
        articleBody: article.summary.zh + " " + article.what.zh,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `为什么 ${article.title.zh} 值得了解？`,
            acceptedAnswer: { "@type": "Answer", text: article.why.zh },
          },
          {
            "@type": "Question",
            name: `${article.title.zh} 是什么？`,
            acceptedAnswer: { "@type": "Answer", text: article.what.zh },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首页", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "思维", item: `${BASE_URL}/zh/mindset` },
          { "@type": "ListItem", position: 3, name: article.title.zh, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <ArticleDetailPage article={article} forceLang="zh" />
      <Footer />
    </>
  );
}
