import Image from "next/image";
import Link from "next/link";
import { navLinks, company, contacts, socialLinks } from "@/lib/data";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.35 11.1h-9.17v2.98h5.24c-.23 1.36-1.6 4-5.24 4a5.78 5.78 0 0 1 0-11.56c1.65 0 2.76.7 3.4 1.31l2.32-2.24C16.36 3.9 14.5 3 12.18 3a9 9 0 1 0 0 18c5.2 0 8.64-3.66 8.64-8.81 0-.59-.06-1.04-.15-1.09Z" />
    </svg>
  );
}

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Google: GoogleIcon,
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="inline-block rounded-xl bg-white px-4 py-3">
              <Image
                src="/images/logo.png"
                alt="Nana's Cleaning Service logo"
                width={703}
                height={201}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Professional residential and commercial cleaning, deep cleaning, carpet
              cleaning, and interior painting — proudly serving Greeley and Northern
              Colorado for {company.yearsInBusiness} years.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[social.label as keyof typeof socialIcons] ?? FacebookIcon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Navigate
            </h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>{company.addressLine}</li>
              <li>
                <a href={contacts.sales.phoneHref} className="hover:text-white">
                  {contacts.sales.name} (Sales): {contacts.sales.phone}
                </a>
              </li>
              <li>
                <a href={contacts.owner.phoneHref} className="hover:text-white">
                  {contacts.owner.name} (Owner): {contacts.owner.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacts.email}`} className="hover:text-white">
                  {contacts.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Serving Greeley, Colorado &amp; Northern Colorado</p>
        </div>
      </div>
    </footer>
  );
}
