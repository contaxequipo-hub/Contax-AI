import { WHATSAPP_LINK } from "@/lib/whatsapp";
const soni = "/soni.png";
const pantalla = "/pantalla ok.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero relative flex min-h-[calc(100dvh-76px)] items-center overflow-hidden pt-8 pb-6 max-lg:pt-6"
    >
      <div className="container-ct hero-grid relative z-[2] grid w-full items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12">
        {/* Columna Izquierda: Texto */}
        <div className="flex flex-col items-start justify-center">
          <span
            className="hero-enter inline-flex items-center gap-2 rounded-full bg-[#e9f0f1] px-[13px] py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue"
            style={{ animationDelay: "0.05s" }}
          >
            Estudio contable · Online 24/7
          </span>
          <h1
            className="hero-enter my-4 text-[clamp(34px,4.8vw,70px)] leading-[0.98] tracking-[-0.055em] text-ink"
            style={{ animationDelay: "0.15s" }}
          >
            Contabilidad que <span className="block text-blue">evoluciona</span>
          </h1>
          <p
            className="hero-enter mb-5 max-w-[570px] text-lg leading-[1.5] text-[#687c84] max-sm:text-base"
            style={{ animationDelay: "0.25s" }}
          >
            Un estudio contable online que combina asesoramiento profesional, tecnología y
            automatización para que tu gestión impositiva sea más simple, ordenada y previsible.
          </p>
          <div className="my-5 grid w-full grid-cols-1 gap-[9px] sm:grid-cols-3 sm:gap-3">
            {[
              ["Te avisamos", "Antes de cada vencimiento."],
              ["Te acompañamos", "Cuando lo necesitás."],
              ["Automatizamos", "Para que ganes tiempo."],
            ].map(([b, s], i) => (
              <div
                key={b}
                className="hero-enter flex min-h-[64px] flex-col items-start justify-center gap-1 rounded-[17px] border border-[#e0e8e9] bg-paper/80 px-4 py-[13px] text-[13px] text-[#536a73] shadow-[0_10px_26px_rgba(49,66,75,.07)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#c9d8db] hover:shadow-[0_16px_30px_rgba(49,66,75,.11)] max-sm:min-h-0"
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
              >
                <b className="text-sm text-[#3e5963]">{b}</b>
                <small className="text-[10px] leading-[1.3] text-[#829198]">{s}</small>
              </div>
            ))}
          </div>
          <div className="hero-enter flex flex-wrap gap-[13px]" style={{ animationDelay: "0.65s" }}>
            <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              ◔ &nbsp;Quiero asesorarme <span className="text-[17px]">→</span>
            </a>
            <a className="btn btn-light" href="#servicios">
              Ver servicios <span className="text-[17px]">→</span>
            </a>
          </div>
        </div>

        {/* Columna Derecha: Soni + Dashboard alineados verticalmente */}
        <div className="hero-enter-stage hero-stage relative flex w-full items-center justify-center overflow-visible max-lg:mt-4">
          <div
            className="hero-composition relative flex w-full items-center justify-center"
            aria-label="Soni junto al panel de Contax-AI"
          >
            {/* Imagen limpia de la tablet */}
            <div className="relative w-full">
              <img
                src={pantalla}
                alt="Panel de control Contax-AI"
                className="h-auto w-full object-contain drop-shadow-xl"
              />
            </div>

            {/* Soni Art */}
            <img
              className="hero-soni-art absolute bottom-[-4%] left-[-4%] z-[3] block w-[34%] max-w-[270px] max-lg:w-[30%] max-sm:w-[38%]"
              src={soni}
              alt="Soni, la IA Contable de Contax-AI"
              width={912}
              height={912}
            />

            {/*
              Burbuja: reposicionada para NO tapar la cara de Soni.
              - Desktop/tablet: queda arriba a la izquierda del personaje, apuntando hacia abajo.
              - Mobile: sube más (bottom-[78%]) y se corre a la derecha (left en vez de negativo),
                así queda por ENCIMA de la cabeza en vez de sobre la cara.
            */}
            <div className="soni-bubble absolute bottom-[62%] left-[-6%] z-[20] max-w-[190px] rounded-2xl rounded-br-[2px] bg-paper px-4 py-3 text-[13px] font-bold leading-[1.35] text-ink shadow-xl border border-slate-200/90 max-sm:bottom-[80%] max-sm:left-[6%] max-sm:max-w-[135px] max-sm:px-3 max-sm:py-2 max-sm:text-[10px]">
              Hola, soy Soni. Estoy aquí para ayudarte
              <span className="absolute -bottom-1.5 right-6 h-3.5 w-3.5 rotate-45 bg-paper border-r border-b border-slate-200/90 max-sm:right-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}