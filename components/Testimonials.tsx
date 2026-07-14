import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data";
import MotionSection from "@/components/MotionSection";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const avatarPalette = ["bg-blue", "bg-leaf", "bg-navy", "bg-sky"];

function initialsFor(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((testimonial, index) => (
        <MotionSection key={testimonial.name} delay={index * 0.08}>
          <figure className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm shadow-navy/5 ring-1 ring-navy/5">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-lime text-lime" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-dark">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${
                  avatarPalette[index % avatarPalette.length]
                }`}
                aria-hidden="true"
              >
                {initialsFor(testimonial.name)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy">
                  {testimonial.name}
                </span>
                <span className="block text-xs text-gray-dark">
                  {testimonial.location}
                </span>
              </span>
            </figcaption>
          </figure>
        </MotionSection>
      ))}
    </div>
  );
}
