import { Phone, Mail, MapPin } from "lucide-react";
import { contacts, company } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import MotionSection from "@/components/MotionSection";

type ContactSectionProps = {
  showHeading?: boolean;
};

export default function ContactSection({ showHeading = true }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="Get In Touch"
            title="Request your free quote today"
            subtitle="Reach out to our Greeley team and we'll get back to you promptly with a customized cleaning plan."
            className="mb-14"
          />
        )}

        <div className="grid gap-10 lg:grid-cols-5">
          <MotionSection className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl bg-white p-6 shadow-sm shadow-navy/5 ring-1 ring-navy/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-light text-blue">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Sales — {contacts.sales.name}
                    </p>
                    <a
                      href={contacts.sales.phoneHref}
                      className="text-sm text-gray-dark hover:text-blue"
                    >
                      {contacts.sales.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm shadow-navy/5 ring-1 ring-navy/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-light text-blue">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Owner — {contacts.owner.name}
                    </p>
                    <a
                      href={contacts.owner.phoneHref}
                      className="text-sm text-gray-dark hover:text-blue"
                    >
                      {contacts.owner.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm shadow-navy/5 ring-1 ring-navy/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-light text-blue">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Email</p>
                    <a
                      href={`mailto:${contacts.email}`}
                      className="text-sm text-gray-dark hover:text-blue"
                    >
                      {contacts.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm shadow-navy/5 ring-1 ring-navy/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-light text-blue">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Location</p>
                    <p className="text-sm text-gray-dark">
                      {company.addressLine} — serving {company.region}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <GoogleMapEmbed />
              </div>
            </div>
          </MotionSection>

          <MotionSection delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
