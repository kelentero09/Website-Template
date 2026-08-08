import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { business } from "../config/business";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "./SocialIcons";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { contact, social } = business;
  const [status, setStatus] = useState<FormStatus>("idle");

  const endpoint = contact.form.endpoint ?? "";
  const usesLiveEndpoint = endpoint.length > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!usesLiveEndpoint) {
      // Demo mode: simulate a short delay so the success state feels real.
      setStatus("sending");
      window.setTimeout(() => setStatus("success"), 900);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const socialLinks = [
    { href: social.facebook, label: "Facebook", icon: FacebookIcon },
    { href: social.instagram, label: "Instagram", icon: InstagramIcon },
    { href: social.tiktok, label: "TikTok", icon: TikTokIcon },
    { href: social.youtube, label: "YouTube", icon: YouTubeIcon },
  ].filter((link) => link.href && link.href !== "#");

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {contact.eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{contact.description}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Contact details */}
          <div className="space-y-6">
            <ul className="space-y-4">
              <li className="flex gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Address</h3>
                  <a
                    href={"https://maps.google.com/?q=" + encodeURIComponent(contact.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm leading-relaxed text-ink-soft hover:text-primary"
                  >
                    {contact.address}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Phone</h3>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="mt-1 block text-sm text-ink-soft hover:text-primary"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Email</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block text-sm text-ink-soft hover:text-primary"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Business Hours</h3>
                  <dl className="mt-1 space-y-1 text-sm text-ink-soft">
                    {contact.hours.map((row) => (
                      <div key={row.days} className="flex justify-between gap-6">
                        <dt>{row.days}</dt>
                        <dd className="font-medium text-ink">{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>

            {socialLinks.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-ink">Follow Us</h3>
                <div className="mt-3 flex gap-3">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-ink-soft transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact form */}
          <div className="rounded-card border border-slate-200 bg-white p-7 shadow-card sm:p-8">
            <h3 className="text-lg font-bold tracking-tight text-ink">Send Us a Message</h3>
            <p className="mt-1 text-sm text-ink-soft">
              We usually respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Juan Dela Cruz"
                    className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+63 900 000 0000"
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you need..."
                  className="w-full resize-y rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none"
                />
              </div>

              <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="flex items-center gap-2 rounded-md border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-800"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Thank you! Your message has been sent. We'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800"
                >
                  Something went wrong. Please try again, or reach us by phone or email.
                </p>
              )}
              {!usesLiveEndpoint && status === "idle" && (
                <p className="text-xs text-ink-soft">
                  This is a working demo form. Connect a service like Formspree or EmailJS in{" "}
                  <code className="rounded bg-slate-100 px-1 py-0.5">src/config/business.ts</code>{" "}
                  to start receiving real messages.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}