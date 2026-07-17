import Image from "next/image";
import { company } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import MotionSection from "@/components/MotionSection";
import Parallax from "@/components/Parallax";

export default function AboutPreview() {
  return (
    <section className="bg-bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <MotionSection>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-navy/10">
              <Parallax speed={0.08} className="absolute inset-[-10%]">
                <Image
                  src={company.aboutImage}
                  alt="Nana's Cleaning Service professional cleaning team"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
          </MotionSection>

          <MotionSection delay={0.1}>
            <SectionHeading
              eyebrow="About Nana's Cleaning Service"
              title={`${company.yearsInBusiness} years of trusted cleaning in Colorado`}
              align="left"
            />
            <p className="mt-6 text-base leading-relaxed text-gray-dark">
              Founded and led by {company.owner}, Nana&apos;s Cleaning Service has spent
              the last {company.yearsInBusiness} years building a reputation across{" "}
              {company.region} for reliability, professionalism, and genuine care for
              every home and business we serve. Our team uses eco-friendly products and
              an unwavering attention to detail on every visit.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="primary">
                Learn More About Us
              </Button>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
