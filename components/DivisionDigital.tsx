import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/**
 * Mockup de una conversación de WhatsApp atendida por el chatbot,
 * de madrugada: el producto demostrándose a sí mismo. Decorativo.
 * Las burbujas conservan los colores de WhatsApp para que se reconozcan.
 */
function ChatDemo() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-md border-b-4 border-pink bg-lab shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className="flex items-center gap-3 bg-carbon px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink text-sm font-bold text-carbon">
            TN
          </div>
          <div>
            <p className="text-sm font-semibold text-light">Tu negocio</p>
            <p className="text-xs text-emerald-300">
              en línea · responde al instante
            </p>
          </div>
        </div>
        <div className="space-y-3 bg-[#efeae2] px-4 py-5">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
            <p className="text-sm text-carbon">
              Hola, ¿siguen abiertos? ¿Hacen envíos?
            </p>
            <p className="mt-1 text-right text-[10px] text-slate-500">
              11:47 p. m.
            </p>
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-3.5 py-2.5 shadow-sm">
            <p className="text-sm text-carbon">
              ¡Hola! 👋 Sí, hacemos envíos en todo Tula. ¿Te comparto el
              catálogo o te agendo un pedido?
            </p>
            <p className="mt-1 text-right text-[10px] text-slate-500">
              11:47 p. m. ✓✓
            </p>
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
            <p className="text-sm text-carbon">El catálogo, porfa 🙌</p>
            <p className="mt-1 text-right text-[10px] text-slate-500">
              11:48 p. m.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <p className="label-mono text-muted">Respuesta automática · 24/7</p>
        </div>
      </div>
    </div>
  );
}

/** Portada de la División Digital: webs y chatbots de WhatsApp. */
export default function DivisionDigital() {
  return (
    <section id="division-digital" className="border-t border-white/10 bg-lab">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <p className="label-mono text-pink">[FZ // DIVISIÓN DIGITAL]</p>
          <h2 className="mt-3 font-display text-3xl text-light sm:text-4xl">
            TECNOLOGÍA QUE TE TRAE MÁS CLIENTES
            <span className="text-pink">.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Webs y chatbots de WhatsApp para negocios de Tula y todo México.
            Automatizamos tu atención para que no se te escape ninguna venta.
          </p>
          <a
            href={whatsappUrl(
              "Hola FormaZero, quiero información sobre webs y chatbots",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono mt-9 inline-flex items-center justify-center gap-2.5 rounded-md bg-pink px-6 py-4 text-sm font-bold text-carbon transition-colors hover:bg-[#ff5c9f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pide tu demo por WhatsApp
          </a>
        </div>
        <ChatDemo />
      </div>
    </section>
  );
}
