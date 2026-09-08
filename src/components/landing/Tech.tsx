import { Reveal } from "./Reveal";

const ROWS: Array<[string, string, string]> = [
  ["🔔", "Recordatorio enviado", "Vencimiento próximo · Monotributo"],
  ["✉", "Email automático", "Resumen de obligaciones"],
  ["↗", "Seguimiento actualizado", "Información sincronizada"],
  ["⚙", "Proceso automatizado", "Sin tareas repetitivas"],
];

export function Tech() {
  return (
    <section id="sobre" className="section-pad">
      <div className="container-ct grid items-center gap-[60px] lg:grid-cols-2">
        <Reveal>
          <span className="tag">TECNOLOGÍA + CRITERIO</span>
          <h2 className="section-title">
            No queremos que recuerdes tus vencimientos. <b>Queremos recordártelos.</b>
          </h2>
          <p className="sub">
            Conectamos sistemas y automatizamos tareas para que recibas avisos, emails y
            recordatorios en el momento indicado.
          </p>
          <p className="sub">
            <b>La automatización no reemplaza al contador. Lo potencia.</b>
          </p>
        </Reveal>
        <Reveal className="relative min-h-[390px] overflow-hidden rounded-[30px] bg-[#eef3f3] p-6">
          {/* Contenedor principal con el borde marrón (border-earth) */}
          <div className="relative z-[2] rounded-[18px] border-2 border-earth bg-paper p-[18px] shadow-[0_22px_70px_rgba(49,66,75,.13)]">
            <div className="mb-4 flex gap-[7px]">
              <i className="h-[7px] w-[7px] rounded-full bg-[#c9d2d4]" />
              <i className="h-[7px] w-[7px] rounded-full bg-[#c9d2d4]" />
              <i className="h-[7px] w-[7px] rounded-full bg-[#c9d2d4]" />
            </div>
            <div className="grid gap-[11px]">
              {ROWS.map(([icon, title, sub], i) => (
                <div
                  key={title}
                  className="auto-row grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-[13px] border border-[#e7eded] p-3"
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  <div className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#e8eff0]">
                    {icon}
                  </div>
                  <div>
                    <b className="text-xs text-ink">{title}</b>
                    <br />
                    <span className="text-[10px] text-[#829198]">{sub}</span>
                  </div>
                  <span className="text-[11px] text-[#688c78]">✓</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}