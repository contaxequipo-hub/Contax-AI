import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section id="contacto" className="section-pad">
      <div className="container-ct">
        <Reveal className="cta-box relative flex flex-col gap-[30px] overflow-hidden rounded-[34px] bg-gradient-to-br from-ink to-blue p-[40px_30px] text-paper lg:flex-row lg:items-center lg:justify-between lg:p-[58px_62px]">
          <div>
            <h2 className="mb-3 text-[clamp(34px,4vw,52px)] tracking-[-0.04em]">
              Tu contabilidad puede funcionar de otra manera.
            </h2>
            <p className="m-0 max-w-[600px] leading-[1.6] text-[#dce6e8]">
              Menos olvidos. Menos incertidumbre. Más orden, información y anticipación.
            </p>
          </div>
          <a className="btn btn-light" href="mailto:contacto@contax-ai.com">
            Quiero hablar con Contax-AI <span className="text-[17px]">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
