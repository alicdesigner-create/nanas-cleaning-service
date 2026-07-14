import type { Metadata } from "next";
import { galleryPairs } from "@/lib/data";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See before-and-after results from Nana's Cleaning Service — Residential Cleaning, Commercial Cleaning, Deep Cleaning, and Carpet Cleaning in Greeley, Colorado.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Before & After Transformations"
        subtitle="A look at the kind of results you can expect from our cleaning teams. Photos shown are representative placeholders until our full project gallery is live."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid pairs={galleryPairs} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
