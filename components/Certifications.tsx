import { certifications } from "@/lib/data";
import MotionSection from "@/components/MotionSection";

export default function Certifications() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-blue">
          Certifications &amp; Safety
        </p>
        <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <MotionSection key={cert.label} delay={index * 0.08}>
                <div className="flex w-40 flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-dashed border-navy/15 bg-bg-light text-blue">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-xs font-medium leading-snug text-gray-dark">
                    {cert.label}
                  </p>
                </div>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
