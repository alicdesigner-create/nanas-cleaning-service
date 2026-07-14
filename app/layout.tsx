import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} | Cleaning Services in Greeley, Colorado`,
    template: `%s | ${company.name}`,
  },
  description:
    "Nana's Cleaning Service provides professional residential cleaning, commercial cleaning, deep cleaning, carpet cleaning, and interior painting in Greeley, Colorado and Northern Colorado.",
  keywords: [
    "Cleaning Services in Greeley, Colorado",
    "Commercial Cleaning Greeley",
    "Residential Cleaning Greeley",
    "Deep Cleaning Greeley",
    "Carpet Cleaning Greeley",
    "Interior Painting Greeley",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-light text-navy font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
