import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "../config/business";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "./SocialIcons";

export default function Footer() {
  const { name, shortName, footer, contact, social, theme } = business;

  const socialLinks = [
    { href: social.facebook, label: "Facebook", icon: FacebookIcon },
    { href: social.instagram, label: "Instagram", icon: InstagramIcon },
    { href: social.tiktok, label: "TikTok", icon: TikTokIcon },
    { href: social.youtube, label: "YouTube", icon: YouTubeIcon },
  ].filter((link) => link.href && link.href !== "#");

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2.5" aria-label={`${name} — back to top`}>
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-md text-center text-lg font-extrabold text-white"
              style={{ backgroundColor: theme.primary }}
            >
              {shortName.charAt(0).toUpperCase()}
            </span>
            <span className="text-base font-bold tracking-tight text-white">{name}</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            {footer.description}
          </p>
          {socialLinks.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 text-slate-400 transition-colors hover:border-white hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {business.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-slate-400 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-slate-400">{contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              <a href={`tel:${contact.phoneHref}`} className="text-slate-400 hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-white">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {name}. {footer.rights}
          </p>
          {footer.creditsLabel && <p>{footer.creditsLabel}</p>}
        </div>
      </div>
    </footer>
  );
}