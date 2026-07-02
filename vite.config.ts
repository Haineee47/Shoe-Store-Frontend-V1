import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 1. Phải import cái này
import path from "path";

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // 2. Phải gọi hàm này trong mảng plugins
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});