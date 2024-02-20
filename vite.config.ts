import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "kaludemy",
  // base: 'https://LaxusxN.github.io/kaludemy'
});
