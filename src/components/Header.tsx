import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business } from "../config/business";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent horizontal scrolling / body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <div
        className={`container-site flex items-center justify-between transition-all duration-200 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5"
          aria-label={`${business.name} — back to top`}
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-center text-lg font-extrabold text-white"
          >
            {business.shortName.charAt(0).toUpperCase()}
          </span>
          <span className="truncate text-base font-bold tracking-tight text-ink">
            {business.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {business.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${business.contact.phoneHref}`} className="btn-primary !px-4 !py-2.5">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Get in Touch</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav
          aria-label="Mobile navigation"
          className="container-site flex flex-col gap-1 border-t border-slate-100 py-4"
        >
          {business.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-primary-soft hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${business.contact.phoneHref}`}
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}