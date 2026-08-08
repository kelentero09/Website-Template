import { ArrowRight, Phone } from "lucide-react";
import { business } from "../config/business";

export default function CTA() {
  const { cta } = business;

  return (
    <section aria-label="Call to action" className="bg-white py-20 sm:py-24">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-card bg-primary px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/5"
          />
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            {cta.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={cta.primaryHref} className="btn-accent">
              {cta.primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={cta.secondaryHref} className="btn-light ring-1 ring-white/20">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {cta.secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}