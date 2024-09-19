import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/bundle-report.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      open: true,
    }),
    // Sử dụng plugin compression để nén file
    viteCompression({
      algorithm: "brotliCompress", // Sử dụng thuật toán Brotli để nén
      ext: ".br", // Đuôi file sau khi nén
    }),
    viteCompression({
      algorithm: "gzip", // Sử dụng thuật toán Gzip để nén
      ext: ".gz", // Đuôi file sau khi nén
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Tách các thư viện lớn thành các chunk riêng
          react: ["react", "react-dom"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
        },
      },
    },
  },
});
