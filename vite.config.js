import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Chemin de base pour GitHub Pages
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Remplacez "some-package" par le nom de la dépendance
    },
  },
});
