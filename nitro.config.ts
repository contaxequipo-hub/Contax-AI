import { defineConfig } from "nitro";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);
const tslibPath = require.resolve("tslib");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const taskPath = path.resolve(__dirname, "tasks/supabase-ping.ts");

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
    "supabase-ping": {
      handler: taskPath,
      description: "Ping semanal a Supabase para evitar pausa por inactividad",
    },
  },
  scheduledTasks: {
    "0 8 * * 1": "supabase-ping",
  },
});
