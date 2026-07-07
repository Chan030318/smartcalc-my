import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us - SmartCalc MY",
  description:
    "Get in touch with the SmartCalc MY team for feedback, bug reports, feature requests, and partnership enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactPageClient />
      <Footer />
    </>
  );
}
