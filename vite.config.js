import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: "https://stage-3-frontend-auth--gilded-donut-46b63f.netlify.app/",
});
