import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The `base` is set to "./" so the built site works when deployed to a
// GitHub Pages project site (https://<user>.github.io/<repo>/) without
// any extra configuration. Both relative root paths and sub-paths work.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    target: "es2020",
    sourcemap: false,
  },
  server: {
    port: 5173,
    host: true,
  },
});