import type { Metadata } from "next";
import { testimonials } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what customers across Greeley, Colorado and Northern Colorado have to say about Nana's Cleaning Service.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted by Homes & Businesses Across Greeley"
        subtitle="Don't just take our word for it — here's what our customers have to say about working with Nana's Cleaning Service."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
