import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "url";

import Icons from "unplugin-icons/vite";
import imagePresets, { hdPreset } from "vite-plugin-image-presets";

export default defineConfig({
  title: "VitePress",
  titleTemplate: "Amorpheuz's exploration",
  description: "Just playing around.",
  lang: "en-US",
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: "Short pages",
        items: [
          { text: "Home", link: "/" },
          { text: "Short 1", link: "/short-1" },
          { text: "Short 2", link: "/short-2" },
        ],
      },
      {
        text: "Medium pages",
        items: [
          { text: "Medium 1", link: "/medium-1" },
          { text: "Medium 2", link: "/medium-2" },
          { text: "Medium 3", link: "/medium-3" },
        ],
      },
      {
        text: "Long pages",
        items: [
          { text: "Long 1", link: "/long-1" },
          { text: "Long 2", link: "/long-2" },
        ],
      },
      {
        text: "Gigantic pages",
        items: [
          { text: "Giga 1", link: "/giga-1" },
          { text: "Giga 2", link: "/giga-2" },
        ],
      },
    ],
  },
  vite: {
    plugins: [
      Icons({
        compiler: "vue3",
      }),
      imagePresets({
        defaultHd: hdPreset({
          sizes:
            "(min-width: 1066px) 743px,(min-width: 800px) calc(75vw - 57px),100vw",
          widths: [176, 320, 760, 1200],
          formats: {
            avif: { quality: 70 },
            webp: { quality: 75 },
            png: { quality: 70 },
          },
        }),
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../docs", import.meta.url)),
      },
    },
  },
});
