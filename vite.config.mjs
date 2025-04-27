import { defineConfig } from "vite";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production" ? "/ch-meet-the-team-section/" : "./",
  server: {
    open: true,
  },
});
