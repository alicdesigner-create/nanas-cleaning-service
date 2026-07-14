import type { Metadata } from "next";
import Image from "next/image";
import { company, contacts, brandPillars } from "@/lib/data";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Button from "@/components/Button";
import MotionSection from "@/components/MotionSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nana's Cleaning Service, a locally owned cleaning company led by Isis Noriega, proudly serving Greeley, Colorado and Northern Colorado for 5 years.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`${company.yearsInBusiness} Years of Trusted Cleaning in Greeley, Colorado`}
        subtitle="Nana's Cleaning Service is a locally owned company built on reliability, professionalism, and genuine care for every space we clean."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <MotionSection>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-navy/10">
                <Image
                  src={company.aboutImage}
                  alt="Nana's Cleaning Service team serving Greeley, Colorado"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </MotionSection>
            <MotionSection delay={0.1}>
              <SectionHeading
                eyebrow="Our Story"
                title={`Founded by ${company.owner}`}
                align="left"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-dark">
                <p>
                  {company.owner} started {company.name} with a simple goal: bring
                  reliable, professional cleaning services to Greeley and the
                  surrounding {company.region} communities. Five years later, that
                  same commitment drives everything we do — from Residential Cleaning
                  Greeley families count on, to Commercial Cleaning Greeley
                  businesses trust to keep their spaces guest-ready.
                </p>
                <p>
                  Today, our services have grown to include Deep Cleaning Greeley
                  homeowners rely on for move-ins and seasonal resets, Carpet
                  Cleaning Greeley residents trust for a fresher, healthier home, and
                  Interior Painting to give any room a polished finish. Every job,
                  big or small, gets the same attention to detail and eco-friendly
                  approach.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/services" variant="primary">
                  Explore Our Services
                </Button>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The values behind every clean"
            subtitle="Five pillars guide our team on every job, whether it's a single home or a multi-suite commercial property."
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {brandPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <MotionSection key={pillar.title} delay={index * 0.06}>
                  <div className="flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center shadow-sm shadow-navy/5 ring-1 ring-navy/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-light text-blue">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-semibold text-navy">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-dark">
                      {pillar.description}
                    </p>
                  </div>
                </MotionSection>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-2xl text-navy">
            Questions? Reach out directly.
          </p>
          <p className="mt-3 text-base text-gray-dark">
            {contacts.owner.name} (Owner):{" "}
            <a href={contacts.owner.phoneHref} className="font-semibold text-blue">
              {contacts.owner.phone}
            </a>{" "}
            &middot; {contacts.sales.name} (Sales):{" "}
            <a href={contacts.sales.phoneHref} className="font-semibold text-blue">
              {contacts.sales.phone}
            </a>
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
