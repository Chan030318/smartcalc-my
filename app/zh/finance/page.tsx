import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "青年财商 — 学校没有认真教你的金钱规则 | SmartCalc MY",
  description:
    "在一个决定影响你多年以前，先看懂债务、银行、贷款、现金流和财务陷阱。大学生理财马来西亚入门。",
  alternates: {
    canonical: "/finance",
    languages: {
      "en-MY": `${BASE_URL}/finance`,
      "ms-MY": `${BASE_URL}/finance`,
      "zh-MY": `${BASE_URL}/zh/finance`,
    },
  },
  openGraph: {
    title: "青年财商 — 学校没有认真教你的金钱规则 | SmartCalc MY",
    description:
      "在一个决定影响你多年以前，先看懂债务、银行、贷款、现金流和财务陷阱。",
    url: `${BASE_URL}/zh/finance`,
    type: "website",
    locale: "zh_MY",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY 青年财商" }],
  },
};

export default function ZhFinancePage() {
  return (
    <>
      <Navbar />
      <ArticleListPage category="finance" forceLang="zh" />
      <Footer />
    </>
  );
}
