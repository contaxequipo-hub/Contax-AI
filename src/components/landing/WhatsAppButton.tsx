import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "5491126577018";
const MENSAJE_PREDETERMINADO = "Hola! Quiero hacer una consulta sobre Contax-AI.";

// Se mantiene este export porque otros archivos (Nav.tsx, Hero.tsx) ya lo
// usan para armar links directos a WhatsApp desde otras partes del sitio.
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  MENSAJE_PREDETERMINADO
)}`;

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
        <div className="fixed bottom-9 right-[110px] z-[60] flex max-w-[180px] items-center gap-2 rounded-[16px] rounded-br-[4px] bg-white px-4 py-3 text-[13px] font-bold leading-snug text-[#1f1f1f] shadow-[0_8px_24px_rgba(0,0,0,0.18)] max-sm:bottom-7 max-sm:right-[88px] max-sm:max-w-[150px] max-sm:px-3 max-sm:py-2 max-sm:text-[12px]">
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

      {/* Animación propia para el flotecito de Soni (no depende de la config de Tailwind) */}
      <style>{`
        @keyframes soni-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Botón flotante: Soni + logo de WhatsApp como insignia, con animación */}
      <button
        type="button"
        onClick={handleAbrir}
        aria-label={abierto ? "Cerrar chat" : "Hablar con Soni"}
        className="group fixed bottom-5 right-5 z-[60] flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(16,33,46,0.35)] transition-transform duration-300 hover:scale-110 max-sm:bottom-4 max-sm:right-4 max-sm:h-16 max-sm:w-16"
        style={!abierto ? { animation: "soni-float 3s ease-in-out infinite" } : undefined}
      >
        {!abierto && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/30" />
        )}

        {abierto ? (
          <span className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-ink to-blue">
            <svg viewBox="0 0 24 24" className="relative z-[1] h-6 w-6 fill-white" aria-hidden="true">
              <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41L10.59 13l-6.3 6.3 1.41 1.41L12 14.41l6.3 6.3 1.41-1.41L13.41 13l6.3-6.3z" />
            </svg>
          </span>
        ) : (
          <>
            <img
              src="/soni.png"
              alt=""
              aria-hidden="true"
              className="relative z-[1] h-full w-full rounded-full border-2 border-white object-contain p-0.5"
            />
            {/* Insignia de WhatsApp sobre el avatar, como notificación */}
            <span className="absolute -bottom-1 -right-1 z-[2] flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] ring-2 ring-white">
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white" aria-hidden="true">
                <path d="M16.004 2.667c-7.363 0-13.337 5.973-13.337 13.336 0 2.353.615 4.646 1.782 6.666L2.667 29.333l6.83-1.792a13.27 13.27 0 0 0 6.507 1.658h.006c7.362 0 13.336-5.973 13.336-13.336 0-3.563-1.387-6.914-3.905-9.432a13.24 13.24 0 0 0-9.437-3.764Zm0 24.406h-.005a11.06 11.06 0 0 1-5.636-1.543l-.404-.24-4.053 1.063 1.082-3.953-.263-.406a11.05 11.05 0 0 1-1.694-5.89c0-6.113 4.975-11.087 11.088-11.087a11.02 11.02 0 0 1 7.842 3.253 11.02 11.02 0 0 1 3.245 7.845c-.001 6.113-4.976 11.087-11.088 11.087Zm6.083-8.304c-.334-.167-1.972-.973-2.278-1.084-.306-.111-.529-.167-.751.167-.223.334-.863 1.084-1.058 1.307-.195.223-.39.25-.723.083-.334-.167-1.409-.52-2.684-1.657-.992-.885-1.663-1.978-1.858-2.312-.195-.334-.021-.514.146-.68.15-.15.334-.39.5-.585.167-.195.223-.334.334-.557.111-.223.056-.418-.028-.585-.084-.167-.751-1.81-1.029-2.479-.271-.65-.546-.562-.751-.573l-.64-.011c-.223 0-.585.084-.891.418-.306.334-1.169 1.142-1.169 2.785 0 1.643 1.196 3.23 1.363 3.453.167.223 2.354 3.594 5.703 5.04.797.344 1.418.55 1.902.704.799.254 1.526.218 2.101.132.641-.096 1.972-.806 2.25-1.585.278-.779.278-1.446.195-1.585-.084-.14-.306-.223-.64-.39Z" />
              </svg>
            </span>
          </>
        )}
      </button>
    </>
  );
}