import { defineConfig } from "vite";
import path from "path";
import process from "process";

export default defineConfig({
  server: {
    port: 3000,
    open: false,
    cors: true,

  },
  root: "src/",
  build: {
    outDir: "./dist"
  },
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") }
  },
});