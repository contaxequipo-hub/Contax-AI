export function DashboardMockup() {
  return (
    <div className="hero-laptop-tilt absolute right-0 bottom-0 w-[96%] [transform:perspective(1600px)_rotateY(-10deg)_rotateX(2deg)]">
      <div className="relative mx-auto aspect-[1408/912] w-full rounded-[22px] bg-[#3a4650] p-[10px] shadow-[0_40px_80px_rgba(20,30,38,.35)]">
        <div className="absolute left-1/2 top-[6px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#1c2329]" />
        <div className="flex h-full w-full overflow-hidden rounded-[14px] bg-white text-left">
          <div className="flex w-[27%] flex-col bg-[#2b3a45] p-3 text-white">
            <div className="mb-4 flex items-center gap-2 text-[12px] font-bold">
              <span>⛵</span>
              <div>
                <div>Northwind</div>
                <div className="text-[8px] font-normal text-white/60">Contabilidad</div>
              </div>
            </div>
            <nav className="flex flex-col gap-[3px] text-[9px]">
              {["Panel", "Movimientos", "Facturas", "Gastos", "Clientes", "Informes", "Banco", "Impuestos", "Ajustes"].map((item, i) => (
                <div key={item} className={`rounded-md px-2 py-[5px] ${i === 0 ? "bg-white/15 font-semibold" : "text-white/65"}`}>
                  {item}
                </div>
              ))}
            </nav>
            <div className="mt-auto rounded-md bg-white/10 p-2 text-[8px]">
              <div className="font-semibold">Northwind SRL</div>
              <div className="text-white/60">Tim Baker</div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden p-3">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <div className="text-[12px] font-bold text-[#2b3a45]">Buenos días, Tim</div>
                <div className="text-[7px] text-[#8a97a0]">Esto es lo que pasa en tu negocio.</div>
              </div>
              <div className="rounded-full border border-[#e3e8eb] px-2 py-[3px] text-[6.5px] text-[#5c6b74]">
                1 may – 31 may 2024
              </div>
            </div>

            <div className="mb-2 grid grid-cols-4 gap-1.5">
              {[
                ["Ingresos totales", "$62.540", "+12,5%"],
                ["Gastos totales", "$18.210", "+5,3%"],
                ["Ganancia neta", "$44.330", "+18,7%"],
                ["Saldo en caja", "$76.890", "+9,2%"],
              ].map(([t, v, p]) => (
                <div key={t} className="rounded-md border border-[#eceff1] p-1.5">
                  <div className="text-[6px] text-[#8a97a0]">{t}</div>
                  <div className="text-[9.5px] font-bold text-[#2b3a45]">{v}</div>
                  <div className="text-[5.5px] text-emerald-600">↑ {p}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[1.4fr_1fr] gap-1.5">
              <div className="rounded-md border border-[#eceff1] p-1.5">
                <div className="mb-1 text-[6.5px] font-semibold text-[#2b3a45]">Ingresos y gastos</div>
                <div className="flex h-[46px] items-end gap-1.5">
                  {[40, 30, 45, 38, 42, 60].map((h, i) => (
                    <div key={i} className="w-2 rounded-t bg-[#3d5561]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-md border border-[#eceff1] p-1.5">
                <div className="mb-1 text-[6.5px] font-semibold text-[#2b3a45]">Desglose de ingresos</div>
                <div
                  className="mx-auto h-[38px] w-[38px] rounded-full"
                  style={{ background: "conic-gradient(#2b3a45 0% 66%, #7ea0ad 66% 90%, #cfd8dc 90% 100%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[10px] w-[80%] rounded-b-[10px] bg-[#7d8892]" />
    </div>
  );
}