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
