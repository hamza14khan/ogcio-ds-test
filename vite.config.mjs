import { defineConfig } from "vite";
import { resolve } from "path";
import htmlConfig from "vite-plugin-html-config";

export default defineConfig({
  base: "./",
  plugins: [
    htmlConfig({
      pages: {
        main: {
          entry: "main.js",
          template: "index.html",
          filename: "index.html",
        },
        agriculture: {
          entry: "pages/agriculture/main.js",
          template: "pages/agriculture/index.html",
          filename: "pages/agriculture/index.html",
        },
        search: {
          entry: "pages/search/main.js",
          template: "pages/search/index.html",
          filename: "pages/search/index.html",
        },
      },
    }),
  ],
  build: {
    minify: "esbuild",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        agriculture: resolve(__dirname, "pages/agriculture/index.html"),
        search: resolve(__dirname, "pages/search/index.html"),
      },
    },
  },
});
