import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/insureAI/", // ✅ Correct base for a project page under a custom domain
});
