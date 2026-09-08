import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    nitro: {
      preset: "vercel",
      rollupConfig: {
        external: [],
      },
      // Forzar explícitamente el empaquetado interno de todas las dependencias
      minify: false,
    },
  },
});