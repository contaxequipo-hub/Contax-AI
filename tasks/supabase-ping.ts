import { defineTask } from "nitro/task";
import { supabaseAdmin } from "../src/integrations/supabase/client.server";

export default defineTask({
  meta: {
    name: "supabase:ping",
    description: "Ping semanal a Supabase para evitar que el proyecto se pause por inactividad",
  },
  async run() {
    const { error } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1 });

    if (error) {
      console.error("[supabase:ping] Error:", error.message);
      throw new Error(error.message);
    }

    console.log("[supabase:ping] OK - Supabase respondió correctamente");
    return { result: "ok" };
  },
});
