import { business } from "../config/business";

export default function Map() {
  const { map } = business;
  if (!map.enabled || !map.url) return null;

  return (
    <section aria-label="Location map" className="bg-slate-50">
      <div className="container-site pb-20 pt-2 sm:pb-28">
        <div className="overflow-hidden rounded-card border border-slate-200 shadow-card">
          <iframe
            src={map.url}
            title={map.title}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 sm:h-[380px]"
          />
        </div>
      </div>
    </section>
  );
}