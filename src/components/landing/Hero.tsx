import laptop from "@/assets/laptop.png";
import soniAsset from "@/assets/soni.asset.json";

const soni = soniAsset.url;

export function Hero() {
  return (
    <section id="inicio" className="hero relative overflow-hidden pt-[96px] pb-[46px] max-lg:pt-[110px]">
      <div className="container-ct hero-grid relative z-[2] grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col items-start justify-center">
          <span className="hero-enter inline-flex items-center gap-2 rounded-full bg-[#e9f0f1] px-[13px] py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue" style={{ animationDelay: "0.05s" }}>
            Estudio contable · Online 24/7
          </span>
          <h1 className="hero-enter my-5 text-[clamp(48px,6vw,78px)] leading-[0.98] tracking-[-0.055em] text-ink" style={{ animationDelay: "0.15s" }}>
            Contabilidad que <span className="block text-blue">evoluciona</span>
          </h1>
          <p className="hero-enter mb-7 max-w-[570px] text-lg leading-[1.55] text-[#687c84] max-sm:text-base" style={{ animationDelay: "0.25s" }}>
            Un estudio contable online que combina asesoramiento profesional, tecnología y
            automatización para que tu gestión impositiva sea más simple, ordenada y previsible.
          </p>
          <div className="my-7 grid w-full grid-cols-1 gap-[9px] sm:grid-cols-3 sm:gap-3">
            {[
              ["Te avisamos", "Antes de cada vencimiento."],
              ["Te acompañamos", "Cuando lo necesitás."],
              ["Automatizamos", "Para que ganes tiempo."],
            ].map(([b, s], i) => (
              <div
                key={b}
                className="hero-enter flex min-h-[68px] flex-col items-start justify-center gap-1 rounded-[17px] border border-[#e0e8e9] bg-paper/80 px-4 py-[13px] text-[13px] text-[#536a73] shadow-[0_10px_26px_rgba(49,66,75,.07)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#c9d8db] hover:shadow-[0_16px_30px_rgba(49,66,75,.11)] max-sm:min-h-0"
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
              >
                <b className="text-sm text-[#3e5963]">{b}</b>
                <small className="text-[10px] leading-[1.3] text-[#829198]">{s}</small>
              </div>
            ))}
          </div>
          <div className="hero-enter flex flex-wrap gap-[13px]" style={{ animationDelay: "0.65s" }}>
            <a className="btn btn-primary" href="#contacto">
              ◔ &nbsp;Quiero asesorarme <span className="text-[17px]">→</span>
            </a>
            <a className="btn btn-light" href="#servicios">
              Ver servicios <span className="text-[17px]">→</span>
            </a>
          </div>
        </div>

        <div className="hero-enter-stage hero-stage relative flex min-h-[660px] items-center justify-center overflow-visible max-lg:mt-3 max-lg:min-h-[500px] max-sm:min-h-[390px]">

          <div
            className="hero-composition relative mx-auto h-[680px] w-[min(1200px,108%)] max-lg:h-[510px] max-lg:w-full max-sm:h-[400px]"
            aria-label="Soni junto al panel de Contax-AI"
          >
            <div className="hero-laptop-tilt absolute right-[-9%] bottom-0 w-[112%] max-lg:right-[-4%] max-lg:w-[104%] max-sm:right-[-8%] max-sm:w-[116%]">
              <img
                className="hero-laptop-art block w-full max-w-none"
                src={laptop}
                alt="Panel de control de Contax-AI en una computadora"
                width={1408}
                height={912}
                fetchPriority="high"
              />
            </div>
            <img
              className="hero-soni-art absolute bottom-[3%] left-[0%] z-[3] block w-[30%] max-w-[300px] max-lg:w-[28%] max-sm:w-[32%]"
              src={soni}
              alt="Soni, la IA Contable de Contax-AI"
              width={912}
              height={912}
            />
            <div className="soni-bubble absolute bottom-[38%] left-[13%] z-[4] max-w-[230px] rounded-2xl rounded-bl-[4px] bg-paper px-4 py-3 text-[13px] font-bold leading-[1.35] text-ink shadow-[0_14px_30px_rgba(49,66,75,.16)] max-sm:left-[10%] max-sm:max-w-[180px] max-sm:text-[11px]">
              Hola, soy Soni. Estoy aquí para ayudarte
              <span className="absolute -bottom-[7px] left-4 h-4 w-4 rotate-45 bg-paper" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
