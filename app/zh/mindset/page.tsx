import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "成功者思维 — 先升级思维，再追求收入 | SmartCalc MY",
  description:
    "给想建立资产、习惯和长期自由的马来西亚年轻人的思维模型。主动收入 vs 被动收入、老鼠圈是什么、怎样脱离老鼠圈。",
  alternates: {
    canonical: "/mindset",
    languages: {
      "en-MY": `${BASE_URL}/mindset`,
      "ms-MY": `${BASE_URL}/mindset`,
      "zh-MY": `${BASE_URL}/zh/mindset`,
    },
  },
  openGraph: {
    title: "成功者思维 — 先升级思维，再追求收入 | SmartCalc MY",
    description: "给想建立资产、习惯和长期自由的马来西亚年轻人的思维模型。",
    url: `${BASE_URL}/zh/mindset`,
    type: "website",
    locale: "zh_MY",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY 成功者思维" }],
  },
};

export default function ZhMindsetPage() {
  return (
    <>
      <Navbar />
      <ArticleListPage category="mindset" forceLang="zh" />
      <Footer />
    </>
  );
}
