import { Reveal } from "./Reveal";
import laptop from "@/assets/laptop.png";
import soni from "@/assets/soni.png";

export function Hero() {
  return (
    <section id="inicio" className="hero relative overflow-hidden pt-[76px] pb-[70px]">
      <div className="container-ct hero-grid relative z-[2] grid items-center gap-0 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
        <Reveal initialShow>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e9f0f1] px-[13px] py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue">
            Estudio contable · Online 24/7
          </span>
          <h1 className="my-5 text-[clamp(48px,6vw,78px)] leading-[0.98] tracking-[-0.055em] text-ink">
            Contabilidad que <span className="block text-blue">evoluciona</span>
          </h1>
          <p className="mb-7 max-w-[570px] text-lg leading-[1.55] text-[#687c84] max-sm:text-base">
            Un estudio contable online que combina asesoramiento profesional, tecnología y
            automatización para que tu gestión impositiva sea más simple, ordenada y previsible.
          </p>
          <div className="my-7 grid grid-cols-1 gap-[9px] sm:grid-cols-3 sm:gap-3">
            {[
              ["Te avisamos", "Antes de cada vencimiento."],
              ["Te acompañamos", "Cuando lo necesitás."],
              ["Automatizamos", "Para que ganes tiempo."],
            ].map(([b, s]) => (
              <div
                key={b}
                className="flex min-h-[68px] flex-col items-start justify-center gap-1 rounded-[17px] border border-[#e0e8e9] bg-paper/80 px-4 py-[13px] text-[13px] text-[#536a73] shadow-[0_10px_26px_rgba(49,66,75,.07)] transition duration-200 hover:-translate-y-[3px] hover:border-[#c9d8db] hover:shadow-[0_16px_30px_rgba(49,66,75,.11)] max-sm:min-h-0"
              >
                <b className="text-sm text-[#3e5963]">{b}</b>
                <small className="text-[10px] leading-[1.3] text-[#829198]">{s}</small>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-[13px]">
            <a className="btn btn-primary" href="#contacto">
              ◔ &nbsp;Quiero asesorarme <span className="text-[17px]">→</span>
            </a>
            <a className="btn btn-light" href="#servicios">
              Ver servicios <span className="text-[17px]">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal
          initialShow
          className="hero-stage relative flex min-h-[575px] items-center justify-end overflow-visible max-lg:mt-3 max-lg:min-h-[430px] max-lg:justify-center max-sm:min-h-[350px]"
        >
          <div
            className="hero-composition relative ml-auto h-[585px] w-[min(930px,132%)] max-lg:h-[440px] max-lg:w-full max-sm:h-[350px]"
            aria-label="Soni junto al panel de Contax-AI"
          >
            <img
              className="hero-laptop-art absolute right-[-1%] bottom-0 block w-[88%] max-w-none max-lg:w-[93%] max-sm:w-[108%] max-sm:right-[-10%]"
              src={laptop}
              alt="Panel de control de Contax-AI en una computadora"
              width={1408}
              height={912}
              fetchPriority="high"
            />
            <img
              className="hero-soni-art absolute bottom-[8%] left-[2%] z-[3] block w-[31%] max-w-[245px] max-lg:w-[29%] max-sm:w-[32%]"
              src={soni}
              alt="Soni, la IA Contable de Contax-AI"
              width={912}
              height={912}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
