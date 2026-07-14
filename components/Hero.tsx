import Image from "next/image";
import { company, contacts, services } from "@/lib/data";
import Button from "@/components/Button";

export default function Hero() {
  const serviceNames = services.map((s) => s.title).join(" · ");

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={company.heroImage}
          alt="Bright, professionally cleaned modern home interior in Greeley, Colorado"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-sky">
            Greeley, Colorado &middot; Northern Colorado
          </p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
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
