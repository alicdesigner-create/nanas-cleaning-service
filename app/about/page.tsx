import type { Metadata } from "next";
import Image from "next/image";
import { company, contacts, brandPillars, industriesServed } from "@/lib/data";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderSection from "@/components/FounderSection";
import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";
import Button from "@/components/Button";
import MotionSection from "@/components/MotionSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nana's Cleaning Service, a locally owned cleaning company founded by Isis Noriega, proudly serving offices, schools, government buildings, construction companies, and homes across the Front Range for 5 years.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`${company.yearsInBusiness} Years of Trusted Cleaning Across Colorado`}
        subtitle="Nana's Cleaning Service is a locally owned company built on reliability, professionalism, and genuine care for every space we clean — from Greeley to Denver, Colorado Springs, and Fort Collins."
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
                title={company.owner}
                subtitle="Founder"
                align="left"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-dark">
                <p>
                  {company.owner} started {company.name} with a simple goal: bring
                  reliable, professional cleaning services to communities across the
                  Front Range, from the Denver Metro Area up through Greeley and Fort
                  Collins. Five years later, that same commitment drives everything we
                  do — from Commercial &amp; Residential Cleaning businesses and
                  families count on, to specialized services like Pressure Washing and
                  Construction Cleaning.
                </p>
                <p>
                  Today, our services have grown to include Deep Cleaning, High
                  Dusting, Day Porter Services, Painting Services, and Graffiti
                  Removal — with the same attention to detail and eco-friendly
                  approach on every job, big or small.
                </p>
                <p className="font-medium text-navy">{industriesServed}</p>
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

      <FounderSection />
      <Certifications />

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
          <p className="font-sans text-2xl font-bold tracking-tight text-navy">
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
