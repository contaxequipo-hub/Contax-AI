import { Reveal } from "./Reveal";

const STATS = [
  ["+200", "Clientes activos"],
  ["99%", "Vencimientos al día"],
  ["100%", "Asesoramiento online"],
  ["24/7", "Automatizaciones"],
];

export function Trust() {
  return (
    <Reveal initialShow className="container-ct relative z-[8] -mt-[34px] max-sm:-mt-[18px]">
      <div className="grid grid-cols-2 gap-[18px] rounded-[22px] border border-[#e3e9ea] bg-paper p-[19px] text-center shadow-[0_22px_70px_rgba(49,66,75,.13)] sm:grid-cols-4 sm:gap-0">
        {STATS.map(([n, label]) => (
          <div key={label}>
            <strong className="block text-[25px] text-ink">{n}</strong>
            <span className="text-[11px] text-[#778990]">{label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
