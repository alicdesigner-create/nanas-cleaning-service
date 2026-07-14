"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { contacts } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Free Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white p-10 text-center shadow-sm shadow-navy/5 ring-1 ring-navy/5"
      >
        <CheckCircle2 className="h-10 w-10 text-leaf" aria-hidden="true" />
        <p className="font-display text-xl text-navy">Thank you!</p>
        <p className="text-sm text-gray-dark">
          Your email app should now be open with your request pre-filled. We&apos;ll get
          back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-blue hover:text-navy"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-white p-8 shadow-sm shadow-navy/5 ring-1 ring-navy/5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-navy/10 bg-bg-light px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-navy/10 bg-bg-light px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-navy/10 bg-bg-light px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your space and what you'd like cleaned..."
          className="w-full resize-none rounded-xl border border-navy/10 bg-bg-light px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/20 transition-all hover:-translate-y-0.5 hover:bg-navy sm:w-auto"
      >
        Request a Free Quote
      </button>
    </form>
  );
}
