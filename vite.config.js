import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envVar from "./config/envVar.js";

const REACT_APP_API_URL = envVar.REACT_APP_API_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: REACT_APP_API_URL,
      },
    },
  },
});
