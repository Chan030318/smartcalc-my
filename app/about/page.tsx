import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us - SmartCalc MY",
  description:
    "Learn about SmartCalc MY, a Malaysia-focused platform for calculators, financial literacy, and practical money tools for young Malaysians.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutPageClient />
      <Footer />
    </>
  );
}
