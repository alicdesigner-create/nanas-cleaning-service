import { serviceAreaCities } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import MotionSection from "@/components/MotionSection";

const ROW_HEIGHT = 34;
const TOP_PADDING = 24;
const SVG_WIDTH = 260;
const ROAD_X = 40;
const svgHeight = TOP_PADDING * 2 + ROW_HEIGHT * (serviceAreaCities.length - 1);

export default function ServiceArea() {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Area"
          title="Proudly serving the Front Range, Denver to Greeley"
          subtitle="From the Denver metro up through Greeley — and everywhere in between — our teams cover homes and businesses across the corridor."
          light
          className="mb-14"
        />
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
          <MotionSection className="mx-auto">
            <svg
              viewBox={`0 0 ${SVG_WIDTH} ${svgHeight}`}
              width={SVG_WIDTH}
              height={svgHeight}
              role="img"
              aria-label="Stylized map of the Colorado Front Range corridor from Denver to Greeley, marking the cities Nana's Cleaning Service covers"
              className="max-w-full"
            >
              <path
                d={`M ${ROAD_X} ${TOP_PADDING} V ${svgHeight - TOP_PADDING}`}
                stroke="#67c6f2"
                strokeWidth={4}
                strokeLinecap="round"
                strokeDasharray="1 14"
                fill="none"
              />
              {serviceAreaCities.map((city, index) => {
                const y = TOP_PADDING + index * ROW_HEIGHT;
                return (
                  <g key={city}>
                    <circle cx={ROAD_X} cy={y} r={6} fill="#a7d629" stroke="#1e2d49" strokeWidth={2} />
                    <text
                      x={ROAD_X + 18}
                      y={y}
                      dominantBaseline="middle"
                      className="fill-white"
                      fontSize={13}
                      fontWeight={600}
                    >
                      {city}
                    </text>
                  </g>
                );
              })}
            </svg>
          </MotionSection>

          <MotionSection delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Cities we cover
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-base text-white/85 sm:grid-cols-3">
              {serviceAreaCities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-white/60">
              Don&apos;t see your city listed? Reach out anyway — we&apos;re always happy to
              check if we can make it work.
            </p>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
