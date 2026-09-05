import { useEffect, useState } from "react";
import logoAsset from "@/assets/contax-logo.asset.json";

const logo = logoAsset.url;

const LINKS = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#servicios", label: "Servicios", id: "servicios" },
  { href: "#como-funciona", label: "Cómo funciona", id: "como-funciona" },
  { href: "#sobre", label: "Sobre Contax-AI", id: "sobre" },
  { href: "#faq", label: "Preguntas frecuentes", id: "faq" },
];

export function Nav() {
  const [active, setActive] = useState("inicio");

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

  return (
    <nav className="sticky top-0 z-50 flex h-[76px] items-center justify-between border-b border-line/70 bg-paper/90 backdrop-blur-[18px]">
      <div className="container-ct flex w-full items-center justify-between">
        <a href="#inicio" aria-label="Contax-AI — inicio">
          <img
            src={logo}
            alt="Contax-AI"
            className="h-[58px] w-[184px] object-contain mix-blend-multiply max-sm:w-[160px]"
            width={1152}
            height={576}
          />
        </a>
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
        <a className="btn btn-primary" href="#contacto">
          ◔ &nbsp;Quiero asesorarme <span className="text-[17px]">→</span>
        </a>
      </div>
    </nav>
  );
}
