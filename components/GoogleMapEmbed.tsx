export default function GoogleMapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl shadow-sm shadow-navy/5 ring-1 ring-navy/5">
      <iframe
        title="Nana's Cleaning Service — Greeley, Colorado service area map"
        src="https://www.google.com/maps?q=Greeley,+Colorado&output=embed"
        className="h-72 w-full border-0 sm:h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
