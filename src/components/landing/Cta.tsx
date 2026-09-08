import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "./Reveal";
import { sendContactMessage } from "@/lib/contact.functions";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-[14px] border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-paper placeholder:text-[#a9bcc2] outline-none transition focus:border-white/60 focus:bg-white/15";
const labelClass = "mb-2 block text-[13px] font-bold text-[#dce6e8]";

export function Cta() {
  const send = useServerFn(sendContactMessage);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("loading");
    setErrorMsg("");
    try {
      await send({
        data: {
          nombre: String(fd.get("nombre") ?? ""),
          telefono: String(fd.get("telefono") ?? ""),
          email: String(fd.get("email") ?? ""),
          consulta: String(fd.get("consulta") ?? ""),
        },
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : "No pudimos enviar tu consulta. Probá de nuevo en unos minutos.",
      );
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="section-pad">
      <div className="container-ct">
        <Reveal className="cta-box relative overflow-hidden rounded-[34px] bg-gradient-to-br from-ink to-blue p-[40px_30px] text-paper lg:p-[58px_62px]">
          <div className="grid gap-[42px] lg:grid-cols-[1fr_1fr] lg:gap-[70px]">
            <div className="lg:self-center">
              <h2 className="mb-3 text-[clamp(34px,4vw,52px)] tracking-[-0.04em]">
                Tu contabilidad puede funcionar de otra manera.
              </h2>
              <p className="m-0 max-w-[600px] leading-[1.6] text-[#dce6e8]">
                Menos olvidos. Menos incertidumbre. Más orden, información y anticipación.
              </p>
            </div>

            <form onSubmit={onSubmit} className="grid gap-[18px]" noValidate={false}>
              <div>
                <label className={labelClass} htmlFor="nombre">
                  Nombre y apellido
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre completo"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+54 11 0000 0000"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@email.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="consulta">
                  ¿Qué consulta tiene?
                </label>
                <textarea
                  id="consulta"
                  name="consulta"
                  required
                  rows={4}
                  placeholder="Contanos brevemente tu situación."
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-light justify-center disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Enviando…" : "Enviar consulta"}
              </button>

              <div aria-live="polite" className="min-h-[20px] text-[13px]">
                {status === "success" && (
                  <p className="m-0 text-[#cdeede]">
                    ¡Gracias! Te vamos a contactar a la brevedad.
                  </p>
                )}
                {status === "error" && <p className="m-0 text-[#ffc7c7]">{errorMsg}</p>}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
