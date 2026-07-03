import { notFound } from "next/navigation";
import ArticleDetailPage from "@/components/ArticleDetailPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getArticle, getArticlesByCategory } from "@/content/articles";

export function generateStaticParams() {
  return getArticlesByCategory("mindset").map((article) => ({
    slug: article.slug,
  }));
}

export default async function MindsetArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle("mindset", slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ArticleDetailPage article={article} />
      <Footer />
    </>
  );
}
