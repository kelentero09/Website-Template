// Convert "#RRGGBB" (or 3-digit "#RGB") to a space-separated "r g b" string.
// Space syntax is required here: with comma syntax, `rgb(31, 78, 121 / 1)`
// is invalid CSS and the browser drops the background-color entirely.
export function hexToRgbTriplet(hex: string): string {
  let clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    clean = clean
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) {
    return "31 41 55"; // graceful fallback to slate-800
  }
  const num = parseInt(clean, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r} ${g} ${b}`;
}

// Convert a hex color into a CSS variable on the document root.
export function applyThemeVars(vars: Record<string, string>, scope: HTMLElement = document.documentElement): void {
  Object.entries(vars).forEach(([name, value]) => {
    scope.style.setProperty(name, hexToRgbTriplet(value));
  });
}