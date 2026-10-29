const pasos = [
  {
    numero: "01",
    titulo: "Platicamos.",
    texto:
      "Nos cuentas tu idea: una pieza, un llavero, tu web o tu chatbot. Sin compromiso.",
  },
  {
    numero: "02",
    titulo: "Lo diseñamos.",
    texto:
      "Modelamos la pieza en 3D o armamos tu web y tu chatbot, y te lo enseñamos antes.",
  },
  {
    numero: "03",
    titulo: "Lo fabricamos o lo lanzamos.",
    texto:
      "Imprimimos y te entregamos tu pieza, o dejamos tu negocio vendiendo en línea.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="proceso" className="grid-bg border-t border-white/10 bg-carbon">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="label-mono text-cyan">[FZ // PROCESO]</p>
        <h2 className="mt-3 font-display text-3xl text-light sm:text-4xl">
          ASÍ DE FÁCIL
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {pasos.map((paso) => (
            <li
              key={paso.numero}
              className="rounded-md bg-lab p-6 ring-1 ring-white/10"
            >
              <p
                aria-hidden="true"
                className="font-mono text-3xl font-bold text-cyan"
              >
                {paso.numero}
                <span className="text-pink">.</span>
              </p>
              <h3 className="mt-4 text-lg font-bold text-light">
                {paso.titulo}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
