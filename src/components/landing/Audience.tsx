import { Reveal } from "./Reveal";

const AUDIENCES: Array<[string, string]> = [
  ["🧾 Monotributista", "Querés cumplir sin estar pendiente de cada vencimiento."],
  ["💻 Negocio digital", "Vendés online, por marketplace o e-commerce."],
  ["📊 Responsable Inscripto", "Necesitás seguimiento fiscal integral."],
  ["🚀 Emprendedor", "Querés planificar, no solamente pagar impuestos."],
];

export function Audience() {
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
          {AUDIENCES.map(([title, text]) => (
            <Reveal
              key={title}
              className="rounded-[18px] border border-[#e3e9e9] bg-[#f7f9f8] p-[19px]"
            >
              <b className="text-sm text-ink">{title}</b>
              <p className="mt-[7px] mb-0 text-xs leading-[1.5] text-[#788990]">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
