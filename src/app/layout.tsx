import type { Metadata } from "next";
import { Inter, Inter_Tight, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FEDSEC — Multidisciplinary Cybersecurity Firm",
  description:
    "FEDSEC is a multidisciplinary cybersecurity firm built on trust, expertise, and collaboration. We deliver VAPT, GRC advisory, network security, software security, security operations, and incident response services.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "vulnerability assessment",
    "VAPT",
    "GRC advisory",
    "network security",
    "software security",
    "incident response",
    "security operations",
  ],
  openGraph: {
    title: "FEDSEC — Multidisciplinary Cybersecurity Firm",
    description:
      "Different expertise. One collective. Secure by trust.",
    type: "website",
    siteName: "FEDSEC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
