import { Reveal } from "./Reveal";

const SERVICES: Array<[string, string, string, string[]]> = [
  [
    "◎",
    "Monotributo",
    "Te ayudamos a mantener tu situación correctamente encuadrada.",
    ["Alta, baja y recategorización", "Seguimiento mensual", "Reporte de situación"],
  ],
  [
    "▣",
    "Responsable Inscripto",
    "Liquidaciones y declaraciones con seguimiento profesional.",
    ["IVA y Ganancias", "Ingresos Brutos", "DDJJ mensuales y anuales"],
  ],
  [
    "◌",
    "Ingresos Brutos",
    "Inscripción, liquidación y asesoramiento para tus obligaciones.",
    ["CABA, ARBA y Convenio Multilateral", "COMARB y SIFERE", "Certificados y padrones"],
  ],
  [
    "⌁",
    "Regímenes de facturación",
    "Facturá correctamente, también si vendés online.",
    ["Factura electrónica", "Marketplace y e-commerce", "Asesoramiento"],
  ],
  [
    "?",
    "Asistencia y asesoramiento",
    "Consultas, planificación y proyección fiscal durante todo el año.",
    ["Consultas ilimitadas", "Planificación fiscal", "Proyección real"],
  ],
  [
    "↻",
    "Planes y regularización",
    "Analizamos alternativas cuando aparecen deudas u obligaciones pendientes.",
    ["Moratorias y planes", "AFIP, ARBA y AGIP", "Adhesión cuando corresponda"],
  ],
];

export function Services() {
  return (
    <section id="servicios" className="section-pad bg-[#f7f9f8]">
      <div className="container-ct">
        <Reveal className="mb-[42px] max-w-[690px]">
          <span className="tag">SERVICIOS</span>
          <h2 className="section-title">
            Todo lo que necesitás para <b>ordenar tu gestión.</b>
          </h2>
          <p className="sub">
            Desde tu primera inscripción hasta el seguimiento fiscal del día a día.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {SERVICES.map(([icon, title, desc, items]) => (
            <Reveal
              as="article"
              key={title}
              className="min-h-[245px] rounded-3xl border border-[#e2e8e9] bg-paper p-7 shadow-[0_14px_40px_rgba(49,66,75,.06)] transition duration-300 hover:-translate-y-[7px] hover:shadow-[0_24px_55px_rgba(49,66,75,.12)]"
            >
              <div className="mb-[19px] grid h-[45px] w-[45px] place-items-center rounded-[14px] bg-[#e8eff0] text-[21px]">
                {icon}
              </div>
              <h3 className="mb-[9px] text-lg text-ink">{title}</h3>
              <p className="text-[13px] leading-[1.6] text-[#71838a]">{desc}</p>
              <ul className="mt-[14px] list-none p-0 text-xs leading-[1.9] text-[#667a82]">
                {items.map((it) => (
                  <li key={it} className="check-li">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
