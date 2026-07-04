const dolores = [
  {
    titulo: "Se te escapan clientes.",
    texto:
      "Preguntan por WhatsApp y, si no contestas a tiempo, se van con otro.",
    icono: (
      // Burbuja de chat con reloj: el cliente que espera
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M12 8v4l2.5 1.5" />
      </svg>
    ),
  },
  {
    titulo: "No apareces en Google.",
    texto: "Tus clientes te buscan en internet y no te encuentran.",
    icono: (
      // Lupa con "x": la búsqueda que no encuentra nada
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M8.5 8.5l5 5M13.5 8.5l-5 5" />
      </svg>
    ),
  },
  {
    titulo: "Pierdes tiempo repitiendo lo mismo.",
    texto: "Horarios, precios y ubicación, una y otra vez.",
    icono: (
      // Flechas en círculo: la misma respuesta en bucle
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M17 2v6h-6" />
        <path d="M3 11a9 9 0 0 1 15-6.7L17 8" />
        <path d="M7 22v-6h6" />
        <path d="M21 13a9 9 0 0 1-15 6.7L7 16" />
      </svg>
    ),
  },
];

export default function Problema() {
  return (
    <section className="bg-cloud">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          ¿Te suena familiar?
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {dolores.map((dolor) => (
            <li
              key={dolor.titulo}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-accent">
                {dolor.icono}
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">
                {dolor.titulo}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{dolor.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
