import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FEDSEC — Know Your Risk | Multidisciplinary Cybersecurity Firm",
  description:
    "Different Expertise. One Collective. Secure by Trust. FEDSEC delivers VAPT, GRC advisory, network security, software security, security operations, and incident response services.",
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
    title: "FEDSEC — Know Your Risk | Multidisciplinary Cybersecurity Firm",
    description:
      "Different Expertise. One Collective. Secure by Trust. Cybersecurity that delivers results.",
    type: "website",
    siteName: "FEDSEC",
    url: "https://fedsec.tech.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "FEDSEC — Know Your Risk",
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
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-fedsec-black text-fedsec-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
