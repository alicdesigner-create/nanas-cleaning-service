"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { company, contacts, services } from "@/lib/data";
import Button from "@/components/Button";
import Parallax from "@/components/Parallax";

const SLIDE_DURATION = 6000;

export default function Hero() {
  const serviceNames = services.map((s) => s.title).join(" · ");
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (company.heroImages.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = () => {
      intervalRef.current = setInterval(() => {
        setActiveSlide((current) => (current + 1) % company.heroImages.length);
      }, SLIDE_DURATION);
    };
    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        {company.heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Parallax speed={0.12} className="absolute inset-[-10%]">
              <Image
                src={src}
                alt="Professional cleaning by Nana's Cleaning Service in Colorado"
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </Parallax>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-sky">
            Greeley &middot; Fort Collins &middot; Denver
          </p>
          <h1 className="font-sans text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            {company.tagline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
            {serviceNames} — five years of reliable, professional, eco-friendly cleaning
            for homes and businesses across {company.region}.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" variant="secondary">
              Request a Free Quote
            </Button>
            <Button href={contacts.sales.phoneHref} variant="outline">
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
