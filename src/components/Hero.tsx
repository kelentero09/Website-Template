import { ArrowRight, Phone } from "lucide-react";
import { business } from "../config/business";

export default function Hero() {
  const { hero, contact } = business;

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink">
      {/* Background image */}
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Overlays for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/70 to-ink/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-ink/70 to-transparent"
      />

      <div className="container-site flex min-h-[calc(100svh_-_4.5rem)] flex-col justify-center py-20 sm:py-24">
        <div className="max-w-2xl animate-fade-up">
          {hero.badge && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
              {hero.badge}
            </p>
          )}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-accent">
              {hero.primaryButton}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#services" className="btn-light ring-1 ring-white/20">
              {hero.secondaryButton}
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm font-medium text-white/70">
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            Call us any time:{" "}
            <a href={`tel:${contact.phoneHref}`} className="font-semibold text-white hover:underline">
              {contact.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}