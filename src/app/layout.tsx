import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

/**
 * Typography system (v2):
 *  - Headings: Clash Display — sculptural, contemporary display face
 *  - Body/UI:  Satoshi — crisp geometric grotesque, warm and human
 *  - Code:     JetBrains Mono
 * Self-hosted via next/font/local (no runtime CDN dependency).
 */
const clashDisplay = localFont({
  src: [
    { path: "../fonts/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ClashDisplay-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CYPHRA — Know Your Risk | Multidisciplinary Cybersecurity Firm",
  description:
    "Different Expertise. One Collective. Secure by Trust. CYPHRA delivers VAPT, GRC advisory, network security, software security, security operations, and incident response services.",
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
    "SOC",
    "know your risk",
  ],
  openGraph: {
    title: "CYPHRA — Know Your Risk | Multidisciplinary Cybersecurity Firm",
    description:
      "Different Expertise. One Collective. Secure by Trust. Cybersecurity that delivers results.",
    type: "website",
    siteName: "CYPHRA",
    url: "https://cyphraltd.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "CYPHRA — Know Your Risk",
    description:
      "Different Expertise. One Collective. Secure by Trust. Cybersecurity that delivers results.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${clashDisplay.variable} ${satoshi.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-fedsec-black text-fedsec-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
