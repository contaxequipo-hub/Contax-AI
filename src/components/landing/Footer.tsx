export function Footer() {
  return (
    <footer className="border-t border-[#e3e9ea] py-[45px]">
      <div className="container-ct flex flex-wrap items-end justify-between gap-[30px] max-sm:block">
        <div>
          <span className="text-xl font-bold tracking-tight text-ink block mb-2">
            Contax-AI
          </span>
          <small className="text-[#85949a] block">
            © 2026 Contax-AI · Estudio Contable · Asesoramiento online
          </small>
        </div>
        <div className="flex gap-[18px] text-xs text-[#71838a] max-sm:mt-[15px]">
          <a href="#servicios">Servicios</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
}