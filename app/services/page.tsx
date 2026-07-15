import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import MotionSection from "@/components/MotionSection";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Explore Nana's Cleaning Service offerings across the Front Range: Commercial & Residential Cleaning, Deep Cleaning, High Dusting, Pressure Washing, Day Porter Services, Painting Services, Graffiti Removal, and Construction Cleaning.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Cleaning Solutions Across the Front Range"
        subtitle="From everyday upkeep to full-scale transformations, every Nana's Cleaning Service visit is built on reliability, professionalism, and eco-friendly products — serving Denver to Greeley and everywhere in between."
      />

      <div className="divide-y divide-navy/5">
        {services.map((service, index) => {
          const Icon = service.icon;
          const reversed = index % 2 === 1;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 py-20 sm:py-24 ${
                index % 2 === 0 ? "bg-white" : "bg-bg-light"
              }`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid items-center gap-14 lg:grid-cols-2 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <MotionSection>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-navy/10">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Greeley, Colorado`}
                        fill
                        sizes="(min-width: 1024px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </MotionSection>

                  <MotionSection delay={0.1}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue shadow-sm shadow-navy/5 ring-1 ring-navy/5">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mt-5 font-sans text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-gray-dark">
                      {service.longDescription}
                    </p>
                    <div className="mt-8">
                      <Button href="/contact#contact" variant="primary">
                        Get a Free Quote
                      </Button>
                    </div>
                  </MotionSection>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
