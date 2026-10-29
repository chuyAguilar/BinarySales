import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function CtaFinal() {
  return (
    <section className="grid-bg border-t border-white/10 bg-carbon">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="label-mono text-cyan">[FZ // LISTO PARA IMPRIMIR]</p>
        <h2 className="mt-4 font-display text-3xl text-light sm:text-5xl">
          ¿LO IMAGINAS? LO FABRICAMOS<span className="text-pink">.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Escríbenos hoy con tu idea, sea una pieza en 3D, tu web o tu chatbot,
          y te respondemos con propuesta y precio.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono mt-9 inline-flex items-center justify-center gap-3 rounded-md bg-pink px-8 py-4 text-base font-bold text-carbon shadow-lg shadow-pink/20 transition-colors hover:bg-[#ff5c9f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}
