"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, contacts } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Nana's Cleaning Service logo"
            width={703}
            height={201}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold tracking-wide transition-colors ${
                      isActive ? "text-blue" : "text-navy hover:text-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={contacts.sales.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue"
          >
            <Phone className="h-4 w-4 text-leaf" aria-hidden="true" />
            {contacts.sales.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue/20 transition-all hover:-translate-y-0.5 hover:bg-navy"
          >
            Request a Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full p-2 text-navy lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-navy/5 bg-white lg:hidden">
          <nav aria-label="Mobile" className="px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-navy hover:bg-bg-light hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-navy/5 pt-4">
              <a
                href={contacts.sales.phoneHref}
                className="flex items-center gap-2 text-base font-semibold text-navy"
              >
                <Phone className="h-4 w-4 text-leaf" aria-hidden="true" />
                Call {contacts.sales.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-blue px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue/20"
              >
                Request a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
