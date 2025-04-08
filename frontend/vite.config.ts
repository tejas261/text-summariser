import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { writeFileSync, copyFileSync, mkdirSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-extension-files",
      closeBundle() {
        // Create icons directory
        mkdirSync("./dist/icons", { recursive: true });

        // Copy manifest and icons
        copyFileSync("./manifest.json", "./dist/manifest.json");
        copyFileSync("./public/icons/icon16.png", "./dist/icons/icon16.png");
        copyFileSync("./public/icons/icon48.png", "./dist/icons/icon48.png");
        copyFileSync("./public/icons/icon128.png", "./dist/icons/icon128.png");

        // Copy background and content scripts
        copyFileSync("./src/background.js", "./dist/background.js");
        copyFileSync("./src/content.js", "./dist/content.js");
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
