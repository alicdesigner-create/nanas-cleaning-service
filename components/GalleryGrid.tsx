import Image from "next/image";
import type { GalleryPair } from "@/lib/data";
import MotionSection from "@/components/MotionSection";

type GalleryGridProps = {
  pairs: GalleryPair[];
};

export default function GalleryGrid({ pairs }: GalleryGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {pairs.map((pair, index) => (
        <MotionSection key={pair.title} delay={index * 0.08}>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-navy/5 ring-1 ring-navy/5">
            <div className="grid grid-cols-2">
              <div className="relative aspect-square">
                <Image
                  src={pair.beforeSrc}
                  alt={`${pair.title} before cleaning`}
                  fill
                  sizes="(min-width: 640px) 25vw, 45vw"
                  className="object-cover grayscale"
                />
                <span className="absolute left-2 top-2 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-square">
                <Image
                  src={pair.afterSrc}
                  alt={`${pair.title} after cleaning`}
                  fill
                  sizes="(min-width: 640px) 25vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute right-2 top-2 rounded-full bg-leaf px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  After
                </span>
              </div>
            </div>
            <p className="px-5 py-4 text-sm font-semibold text-navy">{pair.title}</p>
          </div>
        </MotionSection>
      ))}
    </div>
  );
}
