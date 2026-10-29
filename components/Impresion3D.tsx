import { whatsappUrl } from "@/lib/site";

/* Ilustraciones decorativas de cada producto, en la paleta de la marca. */

/** Stand QR de mostrador con logo arriba y QR abajo. */
function StandIlustracion() {
  return (
    <svg viewBox="0 0 160 140" aria-hidden="true" className="h-36 w-auto">
      <path d="M40 128 L120 128 L112 116 L48 116 Z" fill="#2c3040" />
      <rect x="52" y="14" width="56" height="102" rx="4" fill="#F1F3F6" />
      <rect x="60" y="24" width="40" height="8" rx="1" fill="#0D0E12" />
      <circle cx="104" cy="28" r="3" fill="#FF2A85" />
      <g fill="#0D0E12">
        <rect x="62" y="42" width="12" height="12" />
        <rect x="86" y="42" width="12" height="12" />
        <rect x="62" y="66" width="12" height="12" />
        <rect x="78" y="58" width="6" height="6" />
        <rect x="86" y="70" width="6" height="6" />
        <rect x="92" y="62" width="6" height="6" />
        <rect x="78" y="74" width="6" height="6" />
      </g>
      <rect x="52" y="88" width="56" height="28" fill="#00E5FF" />
    </svg>
  );
}

/** Llavero FZ con mini patrón tipo QR. */
function LlaveroIlustracion() {
  return (
    <svg viewBox="0 0 160 140" aria-hidden="true" className="h-36 w-auto">
      <circle cx="80" cy="18" r="11" fill="none" stroke="#A3A9B8" strokeWidth="4" />
      <rect x="76" y="28" width="8" height="12" rx="3" fill="#6b7180" />
      <path
        d="M80 40 L122 64 L122 112 L80 136 L38 112 L38 64 Z"
        fill="#0D0E12"
        stroke="#00E5FF"
        strokeWidth="3"
      />
      <text
        x="80"
        y="98"
        textAnchor="middle"
        fontFamily="var(--font-archivo-black), sans-serif"
        fontSize="30"
      >
        <tspan fill="#F1F3F6">F</tspan>
        <tspan fill="#00E5FF">Z</tspan>
      </text>
      <circle cx="108" cy="106" r="5" fill="#FF2A85" />
    </svg>
  );
}

/** Engrane con calibrador: la pieza técnica a medida. */
function PiezaIlustracion() {
  const dientes = Array.from({ length: 10 }, (_, i) => (i * 360) / 10);
  return (
    <svg viewBox="0 0 160 140" aria-hidden="true" className="h-36 w-auto">
      <g transform="translate(80 72)">
        {dientes.map((angulo) => (
          <rect
            key={angulo}
            x="-7"
            y="-50"
            width="14"
            height="16"
            rx="2"
            fill="#00E5FF"
            transform={`rotate(${angulo})`}
          />
        ))}
        <circle r="38" fill="#00E5FF" />
        <circle r="14" fill="#161820" />
        <circle r="26" fill="none" stroke="#0D0E12" strokeWidth="2" strokeDasharray="4 4" />
      </g>
      <g fontFamily="var(--font-jetbrains-mono), monospace" fontSize="9" fill="#FF2A85">
        <line x1="30" y1="134" x2="130" y2="134" stroke="#FF2A85" />
        <text x="80" y="130" textAnchor="middle">Ø 100.00MM</text>
      </g>
    </svg>
  );
}

/** Figura low-poly: coleccionables y decoración. */
function FiguraIlustracion() {
  return (
    <svg viewBox="0 0 160 140" aria-hidden="true" className="h-36 w-auto">
      <ellipse cx="80" cy="128" rx="44" ry="8" fill="#2c3040" />
      {/* Cuerpo */}
      <path d="M52 124 L60 74 L100 74 L108 124 Z" fill="#F1F3F6" />
      <path d="M80 74 L100 74 L108 124 L80 124 Z" fill="#d5d9e2" />
      {/* Cabeza */}
      <path d="M50 44 L80 22 L110 44 L102 76 L58 76 Z" fill="#F1F3F6" />
      <path d="M80 22 L110 44 L102 76 L80 76 Z" fill="#d5d9e2" />
      {/* Orejas */}
      <path d="M54 46 L50 12 L72 30 Z" fill="#FF2A85" />
      <path d="M106 46 L110 12 L88 30 Z" fill="#FF2A85" />
      {/* Ojos */}
      <rect x="64" y="48" width="10" height="12" rx="2" fill="#0D0E12" />
      <rect x="86" y="48" width="10" height="12" rx="2" fill="#0D0E12" />
      <rect x="67" y="50" width="4" height="4" fill="#00E5FF" />
      <rect x="89" y="50" width="4" height="4" fill="#00E5FF" />
    </svg>
  );
}

const productos = [
  {
    codigo: "FZ-01",
    nombre: "Stand QR con tu logo",
    texto:
      "Base de mostrador con tu logo y un QR a tu WhatsApp, menú, redes o pagos. Que tus clientes te encuentren con un escaneo.",
    mensaje: "Hola FormaZero, quiero cotizar un Stand QR con mi logo",
    ilustracion: <StandIlustracion />,
  },
  {
    codigo: "FZ-02",
    nombre: "Llaveros personalizados",
    texto:
      "Con el logo de tu negocio, en varios colores. Ideales para regalar a tus clientes, eventos o mercancía de tu marca.",
    mensaje: "Hola FormaZero, quiero cotizar llaveros personalizados",
    ilustracion: <LlaveroIlustracion />,
  },
  {
    codigo: "FZ-03",
    nombre: "Piezas a medida",
    texto:
      "Refacciones, soportes, prototipos o lo que imagines. Nos traes la idea, la medida o el archivo y lo fabricamos.",
    mensaje: "Hola FormaZero, quiero cotizar una pieza a medida en 3D",
    ilustracion: <PiezaIlustracion />,
  },
  {
    codigo: "FZ-04",
    nombre: "Figuras y coleccionables",
    texto:
      "Personajes, figuras decorativas y regalos únicos con acabado detallado. Para tu colección o para sorprender a alguien.",
    mensaje: "Hola FormaZero, quiero cotizar una figura impresa en 3D",
    ilustracion: <FiguraIlustracion />,
  },
];

export default function Impresion3D() {
  return (
    <section id="division-3d" className="grid-bg bg-carbon">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="label-mono text-cyan">[FZ // DIVISIÓN 3D]</p>
        <h2 className="mt-3 font-display text-3xl text-light sm:text-4xl">
          LO DISEÑAS. LO IMPRIMIMOS.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Impresión 3D multicolor hecha en Tula de Allende. Cada pieza se cotiza
          a tu medida: escríbenos con tu idea y te respondemos con precio y
          tiempo de entrega.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map((producto) => (
            <li
              key={producto.codigo}
              className="flex flex-col overflow-hidden rounded-md border-b-4 border-cyan bg-lab ring-1 ring-white/10"
            >
              <div className="relative flex justify-center border-b border-white/10 py-6">
                <p className="label-mono absolute left-4 top-3 text-muted">
                  {producto.codigo}
                </p>
                {producto.ilustracion}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg leading-snug text-light">
                  {producto.nombre.toUpperCase()}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {producto.texto}
                </p>
                <a
                  href={whatsappUrl(producto.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar ${producto.nombre} por WhatsApp`}
                  className="label-mono mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-pink px-4 py-3 font-bold text-carbon transition-colors hover:bg-[#ff5c9f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                  Cotizar <span aria-hidden="true">⚡</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
