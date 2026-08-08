import { ArrowRight } from "lucide-react";
import { business } from "../config/business";
import { getIcon } from "../lib/icons";

export default function Services() {
  const { servicesIntro, services } = business;

  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {servicesIntro.eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {servicesIntro.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {servicesIntro.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <article
                key={service.title}
                className="group rounded-card border border-slate-200 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}