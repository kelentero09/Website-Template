import { ArrowRight } from "lucide-react";
import { business } from "../config/business";

export default function About() {
  const { about } = business;

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image + floating stat card */}
        <div className="relative">
          <div className="overflow-hidden rounded-card">
            <img
              src={about.image}
              alt={about.imageAlt}
              loading="lazy"
              className="aspect-[6/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 rounded-card border border-slate-100 bg-white p-5 shadow-card sm:left-6 sm:p-6">
            <p className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              {about.floatingStat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-ink-soft">{about.floatingStat.label}</p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {about.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <a href={about.ctaHref} className="btn-primary mt-8">
            {about.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}