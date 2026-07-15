import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} | Cleaning Services in Greeley & Across Colorado`,
    template: `%s | ${company.name}`,
  },
  description:
    "Nana's Cleaning Service provides professional commercial and residential cleaning, deep cleaning, high dusting, pressure washing, day porter services, painting, graffiti removal, and construction cleaning across the Front Range, from Denver to Greeley.",
  keywords: [
    "Cleaning Services in Greeley, Colorado",
    "Commercial & Residential Cleaning Colorado",
    "Deep Cleaning Colorado",
    "High Dusting Colorado",
    "Pressure Washing Colorado",
    "Day Porter Services Colorado",
    "Painting Services Colorado",
    "Graffiti Removal Colorado",
    "Construction Cleaning Colorado",
    "Cleaning Services Denver",
    "Cleaning Services Fort Collins",
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
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-light text-navy font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
