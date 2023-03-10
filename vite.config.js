import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import Icons from "unplugin-icons/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
  ],
  server: {
    proxy: {
      // "/api": {
      //   target: "http://restapi.adequateshop.com/api/",
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
      "/api": {
        target: "http://mothercode.com/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
