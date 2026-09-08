import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const STEPS = [
  ["Nos contactás", "Contanos qué hacés y qué necesitás."],
  ["Analizamos", "Revisamos tu situación fiscal."],
  ["Ordenamos", "Organizamos tus obligaciones."],
  ["Automatizamos", "Configuramos avisos y procesos."],
  ["Te acompañamos", "Seguimos tu situación durante el año."],
];

export function Process() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % STEPS.length), 2300);
    return () => clearInterval(timer);
  }, []);

  const pct = (current / (STEPS.length - 1)) * 88;

  return (
    <section id="como-funciona" className="section-pad">
      <div className="container-ct">
        <Reveal className="mb-[42px] max-w-[690px]">
          <span className="tag">CÓMO FUNCIONA</span>
          <h2 className="section-title">
            Tu contabilidad, <b>en otro nivel.</b>
          </h2>
          <p className="sub">Un proceso simple, claro y acompañado por tecnología.</p>
        </Reveal>
        <Reveal className="relative pt-[15px] pb-5">
          {/* Línea base estática */}
          <div className="absolute top-[79px] right-[6%] left-[6%] hidden h-[3px] bg-[#dbe4e5] md:block" />
          
          {/* Línea de progreso interactiva */}
          <div
            className="absolute top-[79px] left-[6%] hidden h-[3px] bg-earth transition-[width] duration-700 ease-in-out md:block"
            style={{ width: `${pct}%` }}
          />

          <div className="relative z-[2] grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-4">
            {STEPS.map(([title, text], i) => {
              const isActive = i === current;
              return (
                <article
                  key={title}
                  onClick={() => setCurrent(i)}
                  className={`min-h-[205px] cursor-pointer rounded-[23px] border bg-paper px-[18px] pt-[22px] pb-5 transition-all duration-300 ${
                    isActive
                      ? "-translate-y-[10px] border-earth bg-white shadow-[0_22px_45px_rgba(180,120,60,0.18)] ring-4 ring-earth/20 scale-[1.03]"
                      : "border-[#e1e8e9] opacity-75 hover:opacity-100 shadow-[0_12px_35px_rgba(49,66,75,.05)]"
                  }`}
                >
                  <div
                    className={`mb-6 grid h-9 w-9 place-items-center rounded-full text-[14px] font-extrabold transition-colors duration-300 ${
                      isActive
                        ? "bg-earth text-white shadow-md"
                        : "bg-[#cdb79e]/40 text-[#63777f]"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <h3 className={`mb-[7px] text-[15px] font-bold ${isActive ? "text-earth" : "text-ink"}`}>
                    {title}
                  </h3>
                  <p className="m-0 text-xs leading-[1.5] text-[#788990]">{text}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}