import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig, mergeConfig } from "vite";

const baseConfig = defineLovableConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});

export default mergeConfig(
  baseConfig,
  defineConfig({
    nitro: {
      preset: "vercel",
    },
  })
);