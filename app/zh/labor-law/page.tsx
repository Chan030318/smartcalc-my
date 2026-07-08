import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "劳动法保护 — 看懂你在职场里的基本权益 | SmartCalc MY",
  description:
    "试用期不是没有权益的时期。加班费怎么算马来西亚、试用期权益、雇主不能做的事，用简单语言说清楚。",
  alternates: {
    canonical: "/labor-law",
    languages: {
      "en-MY": `${BASE_URL}/labor-law`,
      "ms-MY": `${BASE_URL}/labor-law`,
      "zh-MY": `${BASE_URL}/zh/labor-law`,
    },
  },
  openGraph: {
    title: "劳动法保护 — 看懂你在职场里的基本权益 | SmartCalc MY",
    description:
      "试用期不是没有权益的时期。加班费怎么算马来西亚、试用期权益、雇主不能做的事，用简单语言说清楚。",
    url: `${BASE_URL}/zh/labor-law`,
    type: "website",
    locale: "zh_MY",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY 劳动法保护" }],
  },
};

export default function ZhLaborLawPage() {
  return (
    <>
      <Navbar />
      <ArticleListPage category="labor-law" forceLang="zh" />
      <Footer />
    </>
  );
}
