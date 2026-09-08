import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    nitro: {
      preset: "vercel",
      // Forzar el empaquetado de todas las dependencias del servidor
      rollupConfig: {
        external: [],
      },
      inlineDynamicImports: true,
    },
  },
});