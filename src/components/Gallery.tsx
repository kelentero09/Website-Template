import { business } from "../config/business";

export default function Gallery() {
  const { galleryIntro, gallery } = business;

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {galleryIntro.eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {galleryIntro.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{galleryIntro.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.image}
              className="group relative overflow-hidden rounded-card border border-slate-200"
            >
              <img
                src={item.image}
                alt={item.alt ?? item.title}
                loading="lazy"
                className="aspect-[10/8] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 via-ink/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}