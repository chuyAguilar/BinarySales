const pasos = [
  {
    numero: "1",
    titulo: "Platicamos.",
    texto: "Nos cuentas de tu negocio y qué necesitas. Sin compromiso.",
  },
  {
    numero: "2",
    titulo: "Lo montamos.",
    texto: "Diseñamos tu web y/o chatbot y lo dejamos funcionando.",
  },
  {
    numero: "3",
    titulo: "Recibes más clientes.",
    texto: "Tu negocio atiende y vende, incluso mientras duermes.",
  },
];

export default function ComoFunciona() {
  return (
    // Fondo blanco: la sección anterior (tipos de chatbot) ya es gris
    <section id="como-funciona" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Así de fácil
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {pasos.map((paso) => (
            <li
              key={paso.numero}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
            >
              <p
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-lg font-bold text-white"
              >
                {paso.numero}
              </p>
              <h3 className="mt-5 text-lg font-bold text-navy">
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
