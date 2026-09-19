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
  title: "FEDSEC — Trusted Security Solutions",
  description:
    "FEDSEC is a multidisciplinary cybersecurity firm built around trust, expertise, and collaboration. We help organizations identify risks, strengthen their security posture, and build resilience against evolving cyber threats.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "security assessment",
    "GRC",
    "network security",
    "incident response",
  ],
  openGraph: {
    title: "FEDSEC — Trusted Security Solutions",
    description:
      "Multidisciplinary cybersecurity firm built around trust, expertise, and collaboration.",
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
