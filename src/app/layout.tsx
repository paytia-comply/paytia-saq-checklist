import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL = "https://paytia-comply.github.io/paytia-saq-checklist";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PCI DSS SAQ Checklist — Free Open-Source Self-Assessment Guide",
    template: "%s | PCI SAQ Checklist",
  },
  description:
    "Free, open-source PCI DSS Self-Assessment Questionnaire (SAQ) checklists for SAQ A, A-EP, B, and D. Plain-English compliance guidance for merchants and QSAs.",
  keywords: [
    "PCI DSS SAQ",
    "SAQ A checklist",
    "SAQ A-EP",
    "SAQ D",
    "PCI compliance checklist",
    "phone payment PCI",
    "call centre PCI compliance",
  ],
  openGraph: {
    title: "PCI DSS SAQ Checklist — Free Self-Assessment Guide",
    description:
      "Open-source PCI DSS SAQ checklists in plain English. SAQ A, A-EP, B, and D covered.",
    url: SITE_URL,
    siteName: "PCI SAQ Checklist",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
