type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Heading = as;
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? "text-sky" : "text-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg ${
            light ? "text-white/80" : "text-gray-dark"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
