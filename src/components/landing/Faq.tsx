import { useState } from "react";
import { Reveal } from "./Reveal";

const FAQS: Array<[string, string]> = [
  [
    "¿El servicio es 100% online?",
    "Sí. Trabajamos de manera online para que puedas gestionar tu contabilidad desde donde estés.",
  ],
  [
    "¿Me avisan de los vencimientos?",
    "Sí. La propuesta de Contax-AI incorpora avisos y recordatorios automáticos para ayudarte a anticiparte.",
  ],
  [
    "¿Trabajan con monotributistas y responsables inscriptos?",
    "Sí. Contamos con servicios específicos para ambas situaciones y para distintas necesidades fiscales.",
  ],
  [
    "¿También trabajan con e-commerce?",
    "Sí. Podemos asesorarte sobre facturación y obligaciones vinculadas a ventas online y marketplaces.",
  ],
  [
    "¿Puedo consultar si tengo deudas?",
    "Sí. Analizamos tu situación y evaluamos alternativas de regularización cuando corresponda.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-ct">
        <Reveal className="mb-[42px] max-w-[690px]">
          <span className="tag">PREGUNTAS FRECUENTES</span>
          <h2 className="section-title">
            Lo que seguramente <b>querés saber.</b>
          </h2>
        </Reveal>
        <Reveal className="max-w-[850px]">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-t border-line py-[22px]">
                <div
                  className="flex cursor-pointer justify-between gap-5 font-extrabold text-ink"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {q}
                  <span
                    className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`overflow-hidden text-sm leading-[1.6] text-[#74858c] transition-all duration-300 ${
                    isOpen ? "mt-3 max-h-[160px]" : "max-h-0"
                  }`}
                >
                  {a}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
