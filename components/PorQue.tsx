const razones = [
  {
    titulo: "Somos de aquí.",
    texto: "Atención directa y en persona en Tula de Allende.",
  },
  {
    titulo: "Tecnología propia.",
    texto: "Ingeniería y automatización, no plantillas genéricas.",
  },
  {
    titulo: "Precio justo para empezar.",
    texto: "Pensado para negocios que están creciendo.",
  },
  {
    titulo: "Resultados, no complicaciones.",
    texto: "Tú vendes; de la tecnología nos encargamos nosotros.",
  },
];

export default function PorQue() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Por qué BinarySales
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {razones.map((razon) => (
            <li key={razon.titulo} className="flex gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-navy">{razon.titulo}</h3>
                <p className="mt-1 leading-relaxed text-muted">{razon.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
