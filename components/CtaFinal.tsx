import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function CtaFinal() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Listo para no perder ni un cliente más?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
          Escríbenos hoy y te decimos cómo tu negocio puede atender y vender
          solo.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-3 rounded-2xl bg-cta px-8 py-4 text-lg font-semibold text-navy shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}
