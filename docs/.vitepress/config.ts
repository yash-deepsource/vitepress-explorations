import { defineConfig } from "vitepress";
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
  },
});
