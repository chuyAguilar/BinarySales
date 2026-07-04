const paquetes = [
  {
    nombre: "Presencia",
    tagline: "Que te encuentren.",
    texto:
      "Página web profesional con tu información, ubicación y botón directo a WhatsApp. Optimizada para que aparezcas en Google.",
    precio: "$1,800",
    condicion: "+ mantenimiento.",
    popular: false,
  },
  {
    nombre: "Chatbot",
    tagline: "Que no se te escape ningún cliente.",
    texto:
      "Un asistente en tu WhatsApp que contesta 24/7, resuelve dudas, agenda citas o pedidos y te avisa de cada interesado.",
    precio: "$1,200",
    condicion: "+ mensualidad.",
    popular: true,
  },
  {
    nombre: "Completo",
    tagline: "Presencia + ventas automáticas.",
    texto:
      "Tu web y tu chatbot trabajando juntos: el botón de la página abre el chat que atiende solo.",
    precio: "$2,800",
    condicion: "+ mensualidad.",
    popular: false,
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Lo que hacemos por ti
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {paquetes.map((paquete) => (
            <li
              key={paquete.nombre}
              className={`relative flex flex-col rounded-2xl bg-white p-7 ${
                paquete.popular
                  ? "shadow-lg ring-2 ring-cta"
                  : "shadow-sm ring-1 ring-slate-900/5"
              }`}
            >
              {paquete.popular && (
                <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-cta px-4 py-1 text-xs font-semibold text-navy shadow-sm">
                  ⭐ Más popular
                </p>
              )}
              <h3 className="text-xl font-bold text-navy">{paquete.nombre}</h3>
              <p className="mt-1 font-medium text-accent">{paquete.tagline}</p>
              <p className="mt-4 flex-1 leading-relaxed text-muted">
                {paquete.texto}
              </p>
              <p className="mt-6 border-t border-slate-100 pt-5 text-muted">
                Desde{" "}
                <span className="text-3xl font-bold tracking-tight text-navy">
                  {paquete.precio}
                </span>{" "}
                {paquete.condicion}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
