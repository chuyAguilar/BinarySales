/**
 * Isotipo FZ redibujado en vector a partir de marca/formazero-isotipo-color.jpeg:
 * hexágono, F blanca en volumen, Z cian y el punto rosa con anillo punteado.
 */
export function Isotipo({
  className,
  borde = "#232634",
}: {
  className?: string;
  /** Color del contorno del hexágono (cian en la versión de color) */
  borde?: string;
}) {
  return (
    <svg
      viewBox="160 120 580 660"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M450 140 L720 295 L720 605 L450 760 L180 605 L180 295 Z"
        fill="#0D0E12"
        stroke={borde}
        strokeWidth="18"
        strokeLinejoin="miter"
      />
      <path
        d="M270 325 L450 222 L540 272 L360 376 L360 442 L490 368 L490 435 L360 510 L360 642 L270 592 Z"
        fill="#F1F3F6"
      />
      <path
        d="M468 432 L628 340 L628 408 L518 552 L628 486 L628 558 L437 668 L437 600 L548 458 L468 503 Z"
        fill="#00E5FF"
      />
      <circle
        cx="628"
        cy="615"
        r="56"
        fill="none"
        stroke="#FF2A85"
        strokeWidth="10"
        strokeDasharray="20 12"
      />
      <circle cx="628" cy="615" r="36" fill="#FF2A85" />
    </svg>
  );
}

/** Logo horizontal: isotipo + «FORMAZERO.» con el punto rosa y «MX». */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Isotipo className="h-9 w-auto sm:h-10" />
      <span className="font-display text-xl leading-none tracking-tight text-light sm:text-2xl">
        FORMAZERO<span className="text-pink">.</span>
        <sup className="ml-0.5 font-display text-[0.45em] align-super">MX</sup>
      </span>
    </span>
  );
}
