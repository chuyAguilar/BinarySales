import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Llavero BS con patrón tipo QR: el mismo llavero que trae a la gente a esta página. Decorativo. */
function Llavero() {
  return (
    <svg
      viewBox="0 0 220 260"
      aria-hidden="true"
      className="mx-auto h-56 w-auto sm:h-64"
    >
      {/* Argolla */}
      <circle
        cx="110"
        cy="34"
        r="20"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="7"
      />
      {/* Eslabón */}
      <rect x="103" y="52" width="14" height="22" rx="6" fill="#64748b" />
      {/* Placa del llavero */}
      <rect x="45" y="74" width="130" height="130" rx="26" fill="#0b1f3a" />
      <path d="M73 204 L62 232 L95 204 Z" fill="#0b1f3a" />
      {/* Letras BS, como en el isotipo */}
      <text
        x="110"
        y="130"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="42"
        fontWeight="700"
      >
        <tspan fill="#ffffff">B</tspan>
        <tspan fill="#f59e0b">S</tspan>
      </text>
      {/* Mini QR que lleva al WhatsApp */}
      <g fill="#ffffff">
        <rect x="80" y="148" width="12" height="12" rx="2" />
        <rect x="96" y="148" width="12" height="12" rx="2" fill="#f59e0b" />
        <rect x="128" y="148" width="12" height="12" rx="2" />
        <rect x="80" y="164" width="12" height="12" rx="2" fill="#2563eb" />
        <rect x="112" y="164" width="12" height="12" rx="2" />
        <rect x="128" y="164" width="12" height="12" rx="2" fill="#f59e0b" />
        <rect x="96" y="180" width="12" height="12" rx="2" />
        <rect x="112" y="180" width="12" height="12" rx="2" fill="#2563eb" />
      </g>
    </svg>
  );
}

export default function Impresion3D() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 rounded-2xl bg-cloud p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Además: productos personalizados
            </h2>
            {/* slate-600 y no muted: sobre bg-cloud, muted queda bajo el AA de contraste */}
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
              Imprimimos llaveros con el logo de tu negocio, artículos
              promocionales y piezas a medida en 3D multicolor. Ideal para
              regalar a tus clientes y que te tengan presente.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-cta px-6 py-3.5 font-semibold text-navy shadow-md shadow-amber-500/25 transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Cotiza tus llaveros
            </a>
          </div>
          <Llavero />
        </div>
      </div>
    </section>
  );
}
