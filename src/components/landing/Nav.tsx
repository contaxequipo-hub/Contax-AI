import { useEffect, useState } from "react";

const logo = "/contax-ai-logo.png";

const LINKS = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#servicios", label: "Servicios", id: "servicios" },
  { href: "#como-funciona", label: "Cómo funciona", id: "como-funciona" },
  { href: "#sobre", label: "Sobre Contax-AI", id: "sobre" },
  { href: "#faq", label: "Preguntas frecuentes", id: "faq" },
];

export function Nav() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Cierra el menú mobile automáticamente si el usuario agranda la ventana a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-[18px]">
      <div className="container-ct flex h-[76px] items-center justify-between">
        <a href="#inicio" aria-label="Contax-AI — inicio" onClick={handleLinkClick}>
          <img
            src={logo}
            alt="Contax-AI"
            className="h-[58px] w-[184px] object-contain max-sm:w-[150px]"
            width={1152}
            height={576}
          />
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-7 text-[13px] text-[#6b7b82] lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={`navlink relative py-[9px] transition-colors duration-200 hover:text-ink ${active === l.id ? "active text-ink" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Botón CTA: se achica en mobile en vez de desaparecer */}
          <a
            className="btn btn-primary max-sm:px-3 max-sm:py-2 max-sm:text-[12px]"
            href="#contacto"
            onClick={handleLinkClick}
          >
            ◔ &nbsp;<span className="max-sm:hidden">Quiero asesorarme</span>
            <span className="hidden max-sm:inline">Asesorarme</span>{" "}
            <span className="text-[17px]">→</span>
          </a>

          {/* Botón hamburguesa: solo visible en mobile/tablet */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-line/70 lg:hidden"
          >
            <span
              className={`block h-[2px] w-5 bg-ink transition-transform duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-ink transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-ink transition-transform duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Panel de links mobile, desplegable debajo del nav */}
      <div
        className={`overflow-hidden border-b border-line/70 bg-paper transition-[max-height] duration-300 lg:hidden ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="container-ct flex flex-col gap-1 py-3 text-[15px] text-[#6b7b82]">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={handleLinkClick}
              className={`rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-[#f2f6f7] hover:text-ink ${
                active === l.id ? "bg-[#f2f6f7] text-ink" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}