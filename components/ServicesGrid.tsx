import { services } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import MotionSection from "@/components/MotionSection";

type ServicesGridProps = {
  showHeading?: boolean;
  linkToDetail?: boolean;
};

export default function ServicesGrid({
  showHeading = true,
  linkToDetail = false,
}: ServicesGridProps) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="Our Services"
            title="Complete cleaning solutions for Greeley homes & businesses"
            subtitle="From routine upkeep to full-scale transformations, our services are built around reliability, professionalism, and exceptional attention to detail."
            className="mb-14"
          />
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <MotionSection key={service.slug} delay={index * 0.06}>
              <ServiceCard
                service={service}
                href={linkToDetail ? `#${service.slug}` : undefined}
              />
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
