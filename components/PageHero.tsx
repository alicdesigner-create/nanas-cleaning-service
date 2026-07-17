import Image from "next/image";
import Parallax from "@/components/Parallax";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
};

export default function PageHero({ eyebrow, title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
      {backgroundImage && (
        <>
          <Parallax speed={0.12} className="absolute inset-[-10%]">
            <Image
              src={backgroundImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-navy/80" />
        </>
      )}
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky">
          {eyebrow}
        </p>
        <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
