import Image from "next/image";
import { whyChooseUs, whyChooseUsImage } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import MotionSection from "@/components/MotionSection";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <MotionSection>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-navy/10">
              <Image
                src={whyChooseUsImage}
                alt="Eco-friendly cleaning products used by Nana's Cleaning Service"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </MotionSection>

          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The trusted name in Greeley cleaning services"
              align="left"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <MotionSection key={item.title} delay={index * 0.06}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-light text-leaf">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-dark">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </MotionSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
