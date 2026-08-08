import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { business } from "./config/business";
import { applyThemeVars } from "./lib/theme";

// Apply the client's colors as CSS variables before first render so every
// text-primary / bg-primary style picks them up.
applyThemeVars({
  "--color-primary": business.theme.primary,
  "--color-primary-dark": business.theme.primaryDark,
  "--color-primary-soft": business.theme.primarySoft,
  "--color-accent": business.theme.accent,
  "--color-accent-soft": business.theme.accentSoft,
  "--color-ink": business.theme.ink,
  "--color-ink-soft": business.theme.inkSoft,
});

// Keep SEO metadata in sync with the business config.
function applySeo() {
  const { seo, name } = business;
  document.title = seo.title;

  const description =
    document.querySelector<HTMLMetaElement>('meta[name="description"]');
  description?.setAttribute("content", seo.description);

  const keywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]');
  keywords?.setAttribute("content", seo.keywords);

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  themeColor?.setAttribute("content", business.theme.primary);

  document
    .querySelectorAll<HTMLMetaElement>('meta[property^="og:"]')
    .forEach((meta) => {
      const prop = meta.getAttribute("property");
      if (prop === "og:title") meta.setAttribute("content", seo.title);
      if (prop === "og:description") meta.setAttribute("content", seo.description);
      if (prop === "og:site_name") meta.setAttribute("content", name);
    });
}
applySeo();

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);