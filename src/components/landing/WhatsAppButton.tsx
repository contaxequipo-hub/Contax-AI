const WHATSAPP_NUMBER = "5491126577018";
const DEFAULT_MESSAGE = "Hola! Quiero hacer una consulta sobre Contax-AI.";

export function WhatsAppButton() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 max-sm:bottom-4 max-sm:right-4 max-sm:h-12 max-sm:w-12"
    >
      {/* Pulso animado detrás del botón para llamar la atención */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />

      {/* Ícono de WhatsApp */}
      <svg
        viewBox="0 0 32 32"
        className="relative z-[1] h-7 w-7 fill-white max-sm:h-6 max-sm:w-6"
        aria-hidden="true"
      >
        <path d="M16.004 2.667c-7.363 0-13.337 5.973-13.337 13.336 0 2.353.615 4.646 1.782 6.666L2.667 29.333l6.83-1.792a13.27 13.27 0 0 0 6.507 1.658h.006c7.362 0 13.336-5.973 13.336-13.336 0-3.563-1.387-6.914-3.905-9.432a13.24 13.24 0 0 0-9.437-3.764Zm0 24.406h-.005a11.06 11.06 0 0 1-5.636-1.543l-.404-.24-4.053 1.063 1.082-3.953-.263-.406a11.05 11.05 0 0 1-1.694-5.89c0-6.113 4.975-11.087 11.088-11.087a11.02 11.02 0 0 1 7.842 3.253 11.02 11.02 0 0 1 3.245 7.845c-.001 6.113-4.976 11.087-11.088 11.087Zm6.083-8.304c-.334-.167-1.972-.973-2.278-1.084-.306-.111-.529-.167-.751.167-.223.334-.863 1.084-1.058 1.307-.195.223-.39.25-.723.083-.334-.167-1.409-.52-2.684-1.657-.992-.885-1.663-1.978-1.858-2.312-.195-.334-.021-.514.146-.68.15-.15.334-.39.5-.585.167-.195.223-.334.334-.557.111-.223.056-.418-.028-.585-.084-.167-.751-1.81-1.029-2.479-.271-.65-.546-.562-.751-.573l-.64-.011c-.223 0-.585.084-.891.418-.306.334-1.169 1.142-1.169 2.785 0 1.643 1.196 3.23 1.363 3.453.167.223 2.354 3.594 5.703 5.04.797.344 1.418.55 1.902.704.799.254 1.526.218 2.101.132.641-.096 1.972-.806 2.25-1.585.278-.779.278-1.446.195-1.585-.084-.14-.306-.223-.64-.39Z" />
      </svg>
    </a>
  );
}