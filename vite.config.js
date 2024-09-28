import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envVar from "./config/envVar";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: envVar.REACT_APP_API_URL,
      },
    },
  },
});
