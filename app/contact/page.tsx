import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Nana's Cleaning Service in Greeley, the Denver Metro Area, or Fort Collins for a free quote on residential cleaning, commercial cleaning, deep cleaning, carpet cleaning, or interior painting.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Request Your Free Quote"
        subtitle="Tell us about your space and we'll get back to you promptly with a customized cleaning plan for your home or business."
      />
      <ContactSection showHeading={false} />
    </>
  );
}
