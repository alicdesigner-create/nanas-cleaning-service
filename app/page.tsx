import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import GalleryPreview from "@/components/GalleryPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Cleaning Services in Greeley, Colorado",
  description:
    "Professional residential cleaning, commercial cleaning, deep cleaning, carpet cleaning, and interior painting in Greeley, Colorado. Reliable, eco-friendly, locally owned.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
