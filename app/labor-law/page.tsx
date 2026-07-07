import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Malaysia Labor Rights — Probation & Overtime Pay Guide | SmartCalc MY",
  description:
    "Know your rights on probation, overtime pay, leave, and fair treatment. Plain-language labor law guides for young Malaysian workers — 试用期权益，加班费怎么算。",
  alternates: { canonical: "/labor-law" },
  openGraph: {
    title: "Malaysia Labor Rights — Probation & Overtime Pay Guide | SmartCalc MY",
    description:
      "Plain-language guides for Malaysian workers on probation, overtime, leave, and fair treatment. Know your rights before it is too late.",
    url: `${BASE_URL}/labor-law`,
    type: "website",
    locale: "en_MY",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY Labor Rights Library" }],
  },
};

export default function LaborLawPage() {
  return (
    <>
      <Navbar />
      <ArticleListPage category="labor-law" />
      <Footer />
    </>
  );
}
