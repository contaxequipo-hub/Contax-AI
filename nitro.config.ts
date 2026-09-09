import { defineConfig } from "nitro";

export default defineConfig({
  preset: "vercel",
  noExternals: ["tslib"],
  traceDeps: ["tslib*"],
  inlineDynamicImports: true,
});
