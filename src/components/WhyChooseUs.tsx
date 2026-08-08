import { business } from "../config/business";
import { getIcon } from "../lib/icons";

export default function WhyChooseUs() {
  const { whyIntro, whyUs } = business;

  return (
    <section id="why-us" className="bg-primary py-20 text-white sm:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {whyIntro.eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {whyIntro.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{whyIntro.description}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="rounded-card border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}