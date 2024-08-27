import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://ethioshop-backend.onrender.com",
      "/uploads/": "http://localhost:5000",
    },
  },
});
