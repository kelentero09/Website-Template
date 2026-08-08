import { business } from "../config/business";

export default function Stats() {
  return (
    <section aria-label="Business statistics" className="border-b border-slate-100 bg-white">
      <div className="container-site grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {business.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 py-8 text-center sm:py-10">
            <span className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-ink-soft">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}