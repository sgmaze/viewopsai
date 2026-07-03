import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://viewopsai.com",
  vite: { plugins: [tailwindcss()] },
});
