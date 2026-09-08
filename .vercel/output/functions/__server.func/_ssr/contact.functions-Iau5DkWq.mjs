import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-Iau5DkWq.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var schema = objectType({
	nombre: stringType().trim().min(2).max(120),
	telefono: stringType().trim().min(5).max(40),
	email: stringType().trim().email().max(160),
	consulta: stringType().trim().min(5).max(4e3)
});
var escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
var sendContactMessage_createServerFn_handler = createServerRpc({
	id: "f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a",
	name: "sendContactMessage",
	filename: "src/lib/contact.functions.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
var sendContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => schema.parse(data)).handler(sendContactMessage_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { error } = await supabaseAdmin.from("contact_submissions").insert({
		nombre: data.nombre,
		telefono: data.telefono,
		email: data.email,
		consulta: data.consulta
	});
	if (error) {
		console.error("contact insert failed", error);
		throw new Error("No pudimos guardar tu consulta. Intentá de nuevo.");
	}
	const lovableApiKey = process.env["LOVABLE_API_KEY"];
	const resendApiKey = process.env["RESEND_API_KEY"];
	if (!lovableApiKey || !resendApiKey) {
		console.warn("Resend no configurado: la consulta se guardó pero no se envió el email.");
		return {
			ok: true,
			emailed: false
		};
	}
	const html = `
      <h2>Nueva consulta desde la web</h2>
      <p><strong>Nombre y apellido:</strong> ${escapeHtml(data.nombre)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(data.telefono)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Consulta:</strong><br/>${escapeHtml(data.consulta).replace(/\n/g, "<br/>")}</p>
    `;
	const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${lovableApiKey}`,
			"X-Connection-Api-Key": resendApiKey
		},
		body: JSON.stringify({
			from: "Contax-AI <onboarding@resend.dev>",
			to: ["contax.equipo@gmail.com"],
			reply_to: data.email,
			subject: "Nueva consulta desde la web - Contax-AI",
			html
		})
	});
	if (!response.ok) {
		const body = await response.text();
		console.error(`Resend request failed [${response.status}]: ${body}`);
		return {
			ok: true,
			emailed: false
		};
	}
	return {
		ok: true,
		emailed: true
	};
});
//#endregion
export { sendContactMessage_createServerFn_handler };
