import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const AUDIENCES: Array<{
  title: string;
  text: string;
  popupTitle: string;
  bullets: string[];
}> = [
  {
    title: "🧾 Monotributista",
    text: "Querés cumplir sin estar pendiente de cada vencimiento.",
    popupTitle: "¿Sos monotributista?",
    bullets: [
      "Te avisamos antes de cada vencimiento.",
      "Facturación electrónica sin dolores de cabeza.",
      "Te decimos cuándo conviene recategorizarte.",
    ],
  },
  {
    title: "💻 Negocio digital",
    text: "Vendés online, por marketplace o e-commerce.",
    popupTitle: "¿Vendés online?",
    bullets: [
      "Conciliamos tus ventas de Mercado Libre y marketplaces.",
      "Manejamos las retenciones de estas plataformas por vos.",
      "Reportes claros de rentabilidad por canal.",
    ],
  },
  {
    title: "📊 Responsable Inscripto",
    text: "Necesitás seguimiento fiscal integral.",
    popupTitle: "¿Sos Responsable Inscripto?",
    bullets: [
      "IVA, Ganancias y todo al día, sin sorpresas.",
      "Seguimiento fiscal integral, no solo carga de datos.",
      "Planificamos para que no te agarre desprevenido un pago grande.",
    ],
  },
  {
    title: "🚀 Emprendedor",
    text: "Querés planificar, no solamente pagar impuestos.",
    popupTitle: "¿Estás emprendiendo?",
    bullets: [
      "Elegimos juntos la estructura fiscal correcta desde el inicio.",
      "Sabés cuánto podés retirar sin ahogar el negocio.",
      "Te acompañamos cuando el negocio empieza a crecer.",
    ],
  },
];

export function Audience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? AUDIENCES[openIndex] : null;

  // Cerrar con la tecla Escape
  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  // Bloquear el scroll del body mientras el popup está abierto
  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section className="section-pad bg-[#f7f9f8]">
      <div className="container-ct grid items-center gap-[60px] lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <span className="tag">PARA QUIÉN ES</span>
          <h2 className="section-title">
            Contax-AI es para vos <b>si querés dejar de perseguir la contabilidad.</b>
          </h2>
          <p className="sub">
            Monotributistas, profesionales, emprendedores, negocios digitales y responsables
            inscriptos que valoran orden, información y anticipación.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2">
          {AUDIENCES.map((item, i) => (
            <Reveal key={item.title}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="w-full rounded-[18px] border border-earth bg-[#f7f9f8] p-[19px] text-left transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_26px_rgba(49,66,75,.08)]"
              >
                <b className="text-sm text-ink">{item.title}</b>
                <p className="mt-[7px] mb-0 text-xs leading-[1.5] text-[#788990]">{item.text}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Popup / Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[420px] rounded-[22px] bg-paper p-7 shadow-[0_30px_80px_rgba(0,0,0,.25)] max-sm:p-5"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-lg text-[#788990] transition-colors hover:bg-[#f0f4f4] hover:text-ink"
            >
              ✕
            </button>

            <span className="tag">{active.title}</span>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-ink max-sm:text-xl">
              {active.popupTitle}
            </h3>

            <ul className="mt-4 flex flex-col gap-3">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm leading-[1.5] text-[#536a73]">
                  <span className="mt-[3px] text-earth">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              onClick={() => setOpenIndex(null)}
              className="btn btn-primary mt-6 w-full justify-center"
            >
              ◔ &nbsp;Quiero asesorarme
            </a>
          </div>
        </div>
      )}
    </section>
  );
}