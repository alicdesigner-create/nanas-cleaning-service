import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import GalleryPreview from "@/components/GalleryPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Cleaning Services Across Colorado",
  description:
    "Professional commercial and residential cleaning, deep cleaning, high dusting, pressure washing, day porter services, painting, graffiti removal, and construction cleaning across the Front Range — from Denver to Greeley. Reliable, eco-friendly, locally owned.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <ServiceArea />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
