import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-[#e3e9ea] py-[45px]">
      <div className="container-ct flex flex-wrap items-end justify-between gap-[30px] max-sm:block">
        <div>
          <img
            src={logo}
            alt="Contax-AI"
            className="h-[58px] w-[184px] object-contain mix-blend-multiply"
            width={1152}
            height={576}
            loading="lazy"
          />
          <small className="text-[#85949a]">
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
