import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "5491126577018";
const MENSAJE_PREDETERMINADO = "Hola! Quiero hacer una consulta sobre Contax-AI.";

export function WhatsAppButton() {
  const [abierto, setAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [mostrarGlobo, setMostrarGlobo] = useState(true);

  function handleAbrir() {
    setAbierto((v) => !v);
    setMostrarGlobo(false);
  }

  function handleEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const texto = mensaje.trim() || MENSAJE_PREDETERMINADO;
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    setEnviado(true);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  function handleNuevaConsulta() {
    setEnviado(false);
    setMensaje("");
  }

  return (
    <>
      {/* Panel de chat */}
      {abierto && (
        <div className="fixed bottom-24 right-5 z-[60] w-[320px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-[20px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] max-sm:bottom-20 max-sm:right-4">
          {/* Header con avatar de Soni */}
          <div className="flex items-center gap-3 bg-gradient-to-br from-ink to-blue px-4 py-3 text-paper">
            <img
              src="/soni.png"
              alt="Soni"
              className="h-10 w-10 rounded-full border-2 border-white/40 bg-white object-contain"
            />
            <div>
              <p className="m-0 text-[15px] font-bold leading-tight">Soni</p>
              <p className="m-0 flex items-center gap-1 text-[12px] text-[#dce6e8]">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                Te respondemos por WhatsApp
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar chat"
              className="ml-auto text-xl leading-none text-white/70 transition hover:text-white"
            >
              ×
            </button>
          </div>

          {/* Cuerpo tipo chat */}
          <div className="flex flex-col gap-3 bg-[#ece5dd] px-4 py-4">
            <div className="flex items-end gap-2">
              <img
                src="/soni.png"
                alt=""
                className="h-7 w-7 shrink-0 rounded-full bg-white object-contain"
              />
              <div className="max-w-[80%] rounded-[14px] rounded-bl-[2px] bg-white px-3 py-2 text-[14px] leading-snug text-[#1f1f1f] shadow-sm">
                ¡Hola! Soy Soni 👋 ¿Qué duda tenés? Contámela acá y seguimos por WhatsApp.
              </div>
            </div>

            {enviado && (
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-[14px] rounded-br-[2px] bg-[#dcf8c6] px-3 py-2 text-[14px] leading-snug text-[#1f1f1f] shadow-sm">
                  {mensaje.trim() || MENSAJE_PREDETERMINADO}
                </div>
              </div>
            )}

            {enviado && (
              <p className="m-0 text-center text-[12px] text-[#4a4a4a]">
                Se abrió WhatsApp con tu mensaje — tocá "Enviar" ahí para que nos llegue. 📲
              </p>
            )}
          </div>

          {/* Input para escribir la consulta */}
          {!enviado && (
            <form
              onSubmit={handleEnviar}
              className="flex items-center gap-2 border-t border-black/5 bg-white px-3 py-3"
            >
              <input
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribí tu consulta…"
                className="flex-1 rounded-full border border-black/10 bg-[#f5f5f5] px-4 py-2 text-[14px] text-[#1f1f1f] outline-none transition focus:border-[#25D366]"
              />
              <button
                type="submit"
                aria-label="Enviar por WhatsApp"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                </svg>
              </button>
            </form>
          )}

          {enviado && (
            <div className="border-t border-black/5 bg-white px-3 py-3 text-center">
              <button
                type="button"
                onClick={handleNuevaConsulta}
                className="text-[13px] font-bold text-blue underline underline-offset-2"
              >
                Escribir otra consulta
              </button>
            </div>
          )}
        </div>
      )}

      {/* Globo de diálogo que invita a escribir */}
      {!abierto && mostrarGlobo && (
        <div className="fixed bottom-7 right-[82px] z-[60] flex max-w-[180px] items-center gap-2 rounded-[16px] rounded-br-[4px] bg-white px-4 py-3 text-[13px] font-bold leading-snug text-[#1f1f1f] shadow-[0_8px_24px_rgba(0,0,0,0.18)] max-sm:bottom-6 max-sm:right-[70px] max-sm:max-w-[150px] max-sm:px-3 max-sm:py-2 max-sm:text-[12px]">
          <span>¿Tenés una consulta? ¡Escribinos! 💬</span>
          <button
            type="button"
            onClick={() => setMostrarGlobo(false)}
            aria-label="Cerrar mensaje"
            className="shrink-0 text-[14px] leading-none text-[#9a9a9a] transition hover:text-[#1f1f1f]"
          >
            ×
          </button>
        </div>
      )}

      {/* Botón flotante (con el avatar de Soni asomando) */}
      <button
        type="button"
        onClick={handleAbrir}
        aria-label={abierto ? "Cerrar chat" : "Hablar con Soni"}
        className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 max-sm:bottom-4 max-sm:right-4 max-sm:h-12 max-sm:w-12"
      >
        {!abierto && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
        )}
        {abierto ? (
          <svg viewBox="0 0 24 24" className="relative z-[1] h-6 w-6 fill-white" aria-hidden="true">
            <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41L10.59 13l-6.3 6.3 1.41 1.41L12 14.41l6.3 6.3 1.41-1.41L13.41 13l6.3-6.3z" />
          </svg>
        ) : (
          <img
            src="/soni.png"
            alt=""
            aria-hidden="true"
            className="relative z-[1] h-10 w-10 rounded-full object-contain"
          />
        )}
      </button>
    </>
  );
}