import { INSTAGRAM_DM_URL } from "@/lib/site";
import { InstagramIcon } from "./icons";

/** Las dos divisiones, tal como las define la ficha de identidad visual. */
export default function Divisiones() {
  return (
    <section aria-labelledby="divisiones-titulo" className="border-y border-white/10 bg-carbon">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2
            id="divisiones-titulo"
            className="font-display text-2xl text-light sm:text-3xl"
          >
            DOS DIVISIONES, UN LABORATORIO
          </h2>
          <p className="label-mono hidden text-muted sm:block">[X:0 Y:0 Z:0]</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-md border-b-4 border-cyan bg-lab p-8 ring-1 ring-white/10">
            <p className="label-mono text-cyan">[FZ // 3D]</p>
            <h3 className="mt-3 font-display text-2xl text-light sm:text-3xl">
              DIVISIÓN 3D
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">
              Stands QR, llaveros, piezas a medida y figuras. Diseñamos,
              modelamos e imprimimos aquí mismo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={INSTAGRAM_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono inline-flex items-center justify-center gap-2 rounded-md bg-pink px-6 py-3.5 text-sm font-bold text-carbon transition-colors hover:bg-[#ff5c9f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                <InstagramIcon className="h-4 w-4" />
                Cotizar pieza 3D <span aria-hidden="true">⚡</span>
              </a>
              <a
                href="#division-3d"
                className="label-mono inline-flex items-center justify-center rounded-md px-4 py-3.5 text-sm font-bold text-light hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                Ver catálogo
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-md border-b-4 border-pink bg-light p-8">
            <p className="label-mono font-bold text-[#c4005a]">[FZ // DIGITAL]</p>
            <h3 className="mt-3 font-display text-2xl text-carbon sm:text-3xl">
              DIVISIÓN DIGITAL
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-slate-700">
              Páginas web y chatbots de WhatsApp que atienden y venden por ti,
              las 24 horas.
            </p>
            <div className="mt-8">
              <a
                href="#division-digital"
                className="label-mono inline-flex items-center justify-center gap-2 rounded-md bg-lab px-6 py-3.5 text-sm font-bold text-light transition-colors hover:bg-carbon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
              >
                Ver demo digital <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
