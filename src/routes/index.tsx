import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import { Tech } from "@/components/landing/Tech";
import { Audience } from "@/components/landing/Audience";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Contax-AI | Contabilidad que evoluciona" },
      {
        name: "description",
        content:
          "Contax-AI — Contabilidad que evoluciona. Estudio contable online con asesoramiento, tecnología y automatización.",
      },
      { property: "og:title", content: "Contax-AI | Contabilidad que evoluciona" },
      {
        property: "og:description",
        content:
          "Estudio contable online con asesoramiento profesional, tecnología y automatización para tu gestión impositiva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "google-site-verification", content: "GXRLHYP9gg2DO9F_NqqDIW-uRv_rYvsfgypMVUe1t9U" },
      <link rel="icon" href="/CONTAX.png" type="image/png"></link>
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-paper font-sans text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Process />
        <Services />
        <Tech />
        <Audience />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
