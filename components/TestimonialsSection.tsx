import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";

type TestimonialsSectionProps = {
  showHeading?: boolean;
};

export default function TestimonialsSection({
  showHeading = true,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by homes and businesses across Colorado"
            subtitle="Don't just take our word for it — here's what our customers have to say."
            className="mb-14"
          />
        )}
        <Testimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
