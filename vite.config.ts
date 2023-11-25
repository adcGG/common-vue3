import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import UnoCSS from "unocss/vite";
import { unocssRules, unocssShortcuts } from "./uno.config";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],
    }),
    UnoCSS({
      rules: unocssRules,
      shortcuts: unocssShortcuts,
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      "views": path.join(__dirname, "./src/views"),
    },
  },
});
