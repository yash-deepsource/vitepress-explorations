import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "url";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  title: "VitePress",
  titleTemplate: "Amorpheuz's exploration",
  description: "Just playing around.",
  lang: "en-US",
  lastUpdated: true,
  vite: {
    plugins: [
      Icons({
        compiler: "vue3",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../docs", import.meta.url)),
      },
    },
  },
});
