import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().trim().min(2).max(120),
  telefono: z.string().trim().min(5).max(40),
  email: z.string().trim().email().max(160),
  consulta: z.string().trim().min(5).max(4000),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      nombre: data.nombre,
      telefono: data.telefono,
      email: data.email,
      consulta: data.consulta,
    });
    if (error) {
      console.error("contact insert failed", error);
      throw new Error("No pudimos guardar tu consulta. Intentá de nuevo.");
    }

    const resendApiKey = process.env["RESEND_API_KEY"];

    if (!resendApiKey) {
      console.warn("Resend no configurado: la consulta se guardó pero no se envió el email.");
      return { ok: true, emailed: false };
    }

    const html = `
      <h2>Nueva consulta desde la web</h2>
      <p><strong>Nombre y apellido:</strong> ${escapeHtml(data.nombre)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(data.telefono)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Consulta:</strong><br/>${escapeHtml(data.consulta).replace(/\n/g, "<br/>")}</p>
    `;

    // Llamada directa a la API de Resend (sin conector de Lovable)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        // Mientras no verifiques un dominio propio en Resend, tenés que usar
        // esta dirección de prueba. Una vez que verifiques tu dominio,
        // cambiá esto por algo como "Contax-AI <contacto@tudominio.com>".
        from: "Contax-AI <contacto@contax-ai.com.ar>",
        to: ["contax.equipo@gmail.com"],
        reply_to: data.email,
        subject: "Nueva consulta desde la web - Contax-AI",
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Resend request failed [${response.status}]: ${body}`);
      return { ok: true, emailed: false };
    }

    return { ok: true, emailed: true };
  });