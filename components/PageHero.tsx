type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
