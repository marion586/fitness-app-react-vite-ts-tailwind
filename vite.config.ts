import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//from @types/node that we installed
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
