import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
  description:
    "East Valley, Arizona residential painters. Cabinet refinishing, interior, and exterior repainting with a written $300/day finish promise, HOA Champion Service, and 12-month wellness check.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${sourceSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
