import { defineConfig } from "nitro";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const tslibPath = require.resolve("tslib");

export default defineConfig({
  preset: "vercel",
  noExternals: ["tslib"],
  traceDeps: ["tslib*"],
  inlineDynamicImports: true,
  alias: {
    tslib: tslibPath,
  },
});
