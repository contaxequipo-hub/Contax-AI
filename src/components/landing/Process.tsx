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
          <div className="absolute top-[79px] right-[6%] left-[6%] hidden h-[2px] bg-[#dbe4e5] md:block" />
          <div
            className="absolute top-[79px] left-[6%] hidden h-[2px] bg-earth transition-[width] duration-700 ease-in-out md:block"
            style={{ width: `${pct}%` }}
          />
          <div className="relative z-[2] grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-4">
            {STEPS.map(([title, text], i) => (
              <article
                key={title}
                onClick={() => setCurrent(i)}
                className={`min-h-[205px] cursor-pointer rounded-[23px] border bg-paper/90 px-[18px] pt-[22px] pb-5 shadow-[0_12px_35px_rgba(49,66,75,.07)] transition-all duration-300 ${
                  i === current
                    ? "-translate-y-[9px] border-[#c8d6d9] shadow-[0_22px_45px_rgba(49,66,75,.13)]"
                    : "border-[#e1e8e9]"
                }`}
              >
                <div
                  className={`mb-6 grid h-8 w-8 place-items-center rounded-full text-[13px] font-extrabold text-paper ${
                    i === current ? "bg-earth" : "bg-[#cdb79e]"
                  }`}
                >
                  {i + 1}
                </div>
                <h3 className="mb-[7px] text-[15px] text-ink">{title}</h3>
                <p className="m-0 text-xs leading-[1.5] text-[#788990]">{text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
