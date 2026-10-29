import { INSTAGRAM_DM_URL } from "@/lib/site";
import { InstagramIcon } from "./icons";

// Patrón tipo QR 9×9 (1 = módulo lleno). Decorativo, no es un QR real.
const QR = [
  "111101111",
  "100100001",
  "101101101",
  "100010001",
  "111101111",
  "000110100",
  "110011011",
  "010100110",
  "111011101",
];

/**
 * Stand QR recién impreso sobre la cama de la impresora: la pieza
 * estrella de la División 3D, con capas visibles y cotas tipo laboratorio.
 * Decorativo.
 */
function StandQR() {
  const modulo = 11;
  const qrX = 171;
  const qrY = 132;

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <svg viewBox="0 0 440 440" className="h-auto w-full">
        {/* Cama de impresión en perspectiva */}
        <path
          d="M40 360 L220 300 L400 360 L220 420 Z"
          fill="#161820"
          stroke="rgb(255 255 255 / 0.12)"
        />
        {[0.25, 0.5, 0.75].map((t) => (
          <g key={t} stroke="rgb(255 255 255 / 0.07)">
            <line
              x1={40 + 180 * t}
              y1={360 - 60 * t}
              x2={220 + 180 * t}
              y2={420 - 60 * t}
            />
            <line
              x1={40 + 180 * t}
              y1={360 + 60 * t}
              x2={220 + 180 * t}
              y2={300 + 60 * t}
            />
          </g>
        ))}

        {/* Base del stand */}
        <path d="M120 350 L320 350 L300 322 L140 322 Z" fill="#232634" />
        <rect x="140" y="314" width="160" height="8" fill="#2c3040" />

        {/* Placa: capas de impresión visibles */}
        <rect x="150" y="70" width="140" height="244" rx="6" fill="#F1F3F6" />
        {Array.from({ length: 30 }, (_, i) => (
          <line
            key={i}
            x1="150"
            x2="290"
            y1={78 + i * 8}
            y2={78 + i * 8}
            stroke="rgb(13 14 18 / 0.06)"
          />
        ))}

        {/* "Tu logo" */}
        <text
          x="220"
          y="112"
          textAnchor="middle"
          fontFamily="var(--font-archivo-black), sans-serif"
          fontSize="22"
          fill="#0D0E12"
        >
          TU LOGO<tspan fill="#FF2A85">.</tspan>
        </text>

        {/* QR */}
        <g fill="#0D0E12">
          {QR.flatMap((fila, y) =>
            [...fila].map((celda, x) =>
              celda === "1" ? (
                <rect
                  key={`${x}-${y}`}
                  x={qrX + x * modulo}
                  y={qrY + y * modulo}
                  width={modulo - 1}
                  height={modulo - 1}
                />
              ) : null,
            ),
          )}
        </g>
        <text
          x="220"
          y="252"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains-mono), monospace"
          fontSize="10"
          fill="#0D0E12"
        >
          ESCANEA · PIDE · PAGA
        </text>
        <rect x="150" y="270" width="140" height="44" fill="#00E5FF" />
        <text
          x="220"
          y="297"
          textAnchor="middle"
          fontFamily="var(--font-archivo-black), sans-serif"
          fontSize="13"
          fill="#0D0E12"
        >
          SÍGUENOS
        </text>

        {/* Boquilla terminando la última capa */}
        <path d="M206 20 L234 20 L234 42 L226 54 L214 54 L206 42 Z" fill="#2c3040" />
        <circle cx="220" cy="62" r="4" fill="#FF2A85" />

        {/* Cotas */}
        <g
          fontFamily="var(--font-jetbrains-mono), monospace"
          fontSize="10"
          fill="#A3A9B8"
        >
          <line x1="312" y1="70" x2="312" y2="314" stroke="#00E5FF" strokeDasharray="3 3" />
          <line x1="306" y1="70" x2="318" y2="70" stroke="#00E5FF" />
          <line x1="306" y1="314" x2="318" y2="314" stroke="#00E5FF" />
          <text x="324" y="196" fill="#00E5FF">Z: 120MM</text>
          <text x="246" y="40">[X:0 Y:0 Z:0.20]</text>
          <text x="24" y="398">CAPA 600/600</text>
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="grid-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <p className="label-mono text-cyan">[FZ // 3D-LAB • EJE Z: 0.20MM]</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-light sm:text-5xl lg:text-[3.6rem]">
            DEL CÓDIGO DIGITAL A LA REALIDAD FÍSICA
            <span className="text-pink">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Imprimimos en 3D lo que tu negocio necesita: stands QR con tu logo,
            llaveros, piezas a medida y figuras. Y para vender más, también
            armamos tu web y tu chatbot. Desde Tula de Allende
            para todo México.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono inline-flex items-center justify-center gap-2 rounded-md bg-pink px-6 py-4 text-sm font-bold text-carbon shadow-lg shadow-pink/20 transition-colors hover:bg-[#ff5c9f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              <InstagramIcon className="h-4 w-4" />
              Cotizar pieza 3D
              <span aria-hidden="true">⚡</span>
            </a>
            <a
              href="#division-digital"
              className="label-mono inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-4 text-sm font-bold text-light transition-colors hover:border-cyan hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              Ver división digital
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            ¿Dudas?{" "}
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded font-semibold text-cyan hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              Escríbenos por Instagram
            </a>
            .
          </p>
        </div>
        <StandQR />
      </div>
    </section>
  );
}
