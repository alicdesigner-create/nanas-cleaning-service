import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";

type ServiceCardProps = {
  service: Service;
  href?: string;
};

export default function ServiceCard({ service, href }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={href ?? `/services#${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm shadow-navy/5 ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} in Greeley, Colorado`}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/0 to-navy/0" />
        <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-md">
          <Icon className="h-5 w-5 text-blue" aria-hidden="true" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-sans text-xl font-bold tracking-tight text-navy">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-dark">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
          Learn more
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
