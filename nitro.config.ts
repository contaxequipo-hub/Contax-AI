import { defineConfig } from "nitro";

export default defineConfig({
  preset: "vercel",
  noExternals: ["tslib"],
  traceDeps: ["tslib*"],
  inlineDynamicImports: true,
  commonJS: {
    requireReturnsDefault: "auto",
  },
  alias: {
    tslib: "tslib/tslib.js",
  },
});
