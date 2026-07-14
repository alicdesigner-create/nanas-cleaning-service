import { galleryPairs } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import Button from "@/components/Button";

export default function GalleryPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="See the Nana's Cleaning Service difference"
          subtitle="A look at the kind of transformation you can expect — placeholder photos shown until our full project gallery is live."
          className="mb-14"
        />
        <GalleryGrid pairs={galleryPairs} />
        <div className="mt-12 text-center">
          <Button href="/gallery" variant="primary">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
