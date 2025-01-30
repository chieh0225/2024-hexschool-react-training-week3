import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/2024-hexschool-react-training-week3/",
  plugins: [react()],
});
