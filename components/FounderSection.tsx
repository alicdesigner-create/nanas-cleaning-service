import Image from "next/image";
import { founder } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import MotionSection from "@/components/MotionSection";

export default function FounderSection() {
  return (
    <section className="bg-bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Meet the Founder" title="The person behind the mission" className="mb-14" />
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          <MotionSection>
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full bg-white shadow-sm shadow-navy/5 ring-1 ring-navy/10 lg:mx-0">
              <Image
                src={founder.image}
                alt={`${founder.name}, ${founder.title} of Nana's Cleaning Service`}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div className="text-center lg:text-left">
              <h3 className="font-sans text-2xl font-bold tracking-tight text-navy">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-blue">
                {founder.title}
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-dark lg:mx-0">
                {founder.bio}
              </p>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
