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
  experimental: {
    tasks: true,
  },
  tasks: {
    "supabase:ping": {
      handler: "./tasks/supabase-ping.ts",
      description: "Ping semanal a Supabase para evitar pausa por inactividad",
    },
  },
  scheduledTasks: {
    "0 8 * * 1": "supabase:ping",
  },
});
