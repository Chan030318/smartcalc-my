import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SmartCalc MY — Free Calculators for Malaysians",
    template: "%s | SmartCalc MY",
  },
  description:
    "Free online calculators for Malaysians. BMI Calculator, Salary Calculator with EPF & PCB deductions, and Loan Calculator. Fast, accurate, and 100% private.",
  keywords: [
    "BMI calculator Malaysia",
    "salary calculator Malaysia",
    "loan calculator Malaysia",
    "EPF calculator",
    "PCB calculator",
    "take home pay Malaysia",
    "body mass index calculator",
    "kalkulator gaji Malaysia",
    "kalkulator pinjaman",
  ],
  authors: [{ name: "SmartCalc MY", url: BASE_URL }],
  creator: "SmartCalc MY",
  publisher: "SmartCalc MY",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: BASE_URL,
    siteName: "SmartCalc MY",
    title: "SmartCalc MY — Free Calculators for Malaysians",
    description:
      "Free BMI, Salary, and Loan calculators built for Malaysians. Instant results, no sign-up required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartCalc MY — Free Calculators for Malaysians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartCalc MY — Free Calculators for Malaysians",
    description:
      "Free BMI, Salary, and Loan calculators built for Malaysians. Instant results, no sign-up required.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
  verification: {
    google: "3Prg_wgitm3K1u_UdSSVHS-ZJCxE9cIWut5QUbt619Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MY"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1748627778343988"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
