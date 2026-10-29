const razones = [
  {
    titulo: "Fabricación propia en 3D.",
    texto: "Diseñamos e imprimimos aquí; sin intermediarios ni esperas largas.",
  },
  {
    titulo: "Somos de aquí.",
    texto: "Atención directa y en persona en Tula de Allende.",
  },
  {
    titulo: "Tecnología propia.",
    texto: "Ingeniería, modelado y automatización, no plantillas genéricas.",
  },
  {
    titulo: "Precio justo para empezar.",
    texto: "Pensado para negocios que están creciendo.",
  },
  {
    titulo: "Resultados, no complicaciones.",
    texto: "Tú vendes; de la tecnología y la fabricación nos encargamos nosotros.",
  },
];

export default function PorQue() {
  return (
    <section className="border-t border-white/10 bg-lab">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-3xl text-light sm:text-4xl">
          POR QUÉ FORMAZERO<span className="text-pink">.</span>
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {razones.map((razon) => (
            <li key={razon.titulo} className="flex gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-cyan/10 text-cyan ring-1 ring-cyan/30">
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
                <h3 className="font-bold text-light">{razon.titulo}</h3>
                <p className="mt-1 leading-relaxed text-muted">{razon.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
