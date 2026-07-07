import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetailPage from "@/components/ArticleDetailPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { getArticle, getArticlesByCategory } from "@/content/articles";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export function generateStaticParams() {
  return getArticlesByCategory("finance").map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("finance", slug);
  if (!article) return {};

  const url = `${BASE_URL}/finance/${slug}`;
  const title = article.title.en;
  const desc =
    article.summary.en.length > 155
      ? article.summary.en.slice(0, 152) + "..."
      : article.summary.en;

  return {
    title,
    description: desc,
    alternates: { canonical: `/finance/${slug}` },
    openGraph: {
      title,
      description: desc,
      url,
      type: "article",
      locale: "en_MY",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/og-image.png"],
    },
  };
}

export default async function FinanceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle("finance", slug);

  if (!article) {
    notFound();
  }

  const url = `${BASE_URL}/finance/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title.en,
        description: article.summary.en,
        url,
        datePublished: "2026-07-03",
        dateModified: "2026-07-03",
        inLanguage: "en",
        author: { "@id": `${BASE_URL}/#organization` },
        publisher: {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
          name: "SmartCalc MY",
          url: BASE_URL,
          logo: { "@type": "ImageObject", url: `${BASE_URL}/icon-192.png` },
        },
        articleBody: article.summary.en + " " + article.what.en,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Why does ${article.title.en} matter?`,
            acceptedAnswer: { "@type": "Answer", text: article.why.en },
          },
          {
            "@type": "Question",
            name: `What is ${article.title.en}?`,
            acceptedAnswer: { "@type": "Answer", text: article.what.en },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Finance", item: `${BASE_URL}/finance` },
          { "@type": "ListItem", position: 3, name: article.title.en, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <ArticleDetailPage article={article} />
      <Footer />
    </>
  );
}
