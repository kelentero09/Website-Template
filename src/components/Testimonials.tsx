import { Quote } from "lucide-react";
import { business } from "../config/business";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Testimonials
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Real feedback from real people — the reason we do what we do.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {business.testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-card border border-slate-200 bg-white p-7 shadow-card"
            >
              <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-xs text-ink-soft">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}