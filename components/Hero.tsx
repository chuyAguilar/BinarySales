import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/**
 * Mockup de una conversación de WhatsApp atendida por el chatbot,
 * de madrugada: el producto demostrándose a sí mismo. Decorativo.
 */
function ChatDemo() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5">
        <div className="flex items-center gap-3 bg-navy px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cta text-sm font-bold text-navy">
            TN
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Tu negocio</p>
            <p className="text-xs text-emerald-300">
              en línea · responde al instante
            </p>
          </div>
        </div>
        <div className="space-y-3 bg-cloud px-4 py-5">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
            <p className="text-sm text-navy">
              Hola, ¿siguen abiertos? ¿Hacen envíos?
            </p>
            <p className="mt-1 text-right text-[10px] text-muted">11:47 p. m.</p>
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-3.5 py-2.5 shadow-sm">
            <p className="text-sm text-navy">
              ¡Hola! 👋 Sí, hacemos envíos en todo Tula. ¿Te comparto el
              catálogo o te agendo un pedido?
            </p>
            <p className="mt-1 text-right text-[10px] text-muted">
              11:47 p. m. ✓✓
            </p>
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
            <p className="text-sm text-navy">El catálogo, porfa 🙌</p>
            <p className="mt-1 text-right text-[10px] text-muted">11:48 p. m.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-slate-200/70 bg-white px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <p className="text-xs font-medium text-muted">
            Respuesta automática · 24/7
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Tecnología que te trae{" "}
            <span className="text-accent">más clientes.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Webs y chatbots de WhatsApp para negocios de Tula y todo México.
            Automatizamos tu atención para que no se te escape ninguna venta.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-cta px-6 py-3.5 font-semibold text-navy shadow-md shadow-amber-500/25 transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Habla con nosotros por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-navy transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Ver servicios
            </a>
          </div>
        </div>
        <ChatDemo />
      </div>
    </section>
  );
}
