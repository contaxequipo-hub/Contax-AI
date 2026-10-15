// Sección "Tu contabilidad puede funcionar de otra manera" con el
// formulario de contacto (Enviar consulta) — DESACTIVADA: el envío vía
// Supabase se pausaba y los mails dejaban de llegar, así que se sacó del
// sitio en vez de seguir parchando. El componente queda exportado (vacío)
// para no romper el import donde se use <Cta />; si no se vuelve a usar,
// se puede borrar el import de este archivo donde corresponda.
export function Cta() {
  return null;
}