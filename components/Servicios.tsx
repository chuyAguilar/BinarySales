const paquetes = [
  {
    nombre: "Presencia",
    tagline: "Que te encuentren.",
    texto:
      "Página web profesional con tu información, ubicación y botón directo a tu chat. Optimizada para que aparezcas en Google.",
    precio: "$1,800",
    condicion: "+ mantenimiento.",
    popular: false,
  },
  {
    nombre: "Chatbot",
    tagline: "Que no se te escape ningún cliente.",
    texto:
      "Un asistente en tus mensajes que contesta 24/7, resuelve dudas, agenda citas o pedidos y te avisa de cada interesado.",
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
    <section id="servicios" className="bg-lab">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="label-mono text-pink">[FZ // DIGITAL • PAQUETES]</p>
        <h2 className="mt-3 font-display text-3xl text-light sm:text-4xl">
          LO QUE HACEMOS POR TI
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {paquetes.map((paquete) => (
            <li
              key={paquete.nombre}
              className={`relative flex flex-col rounded-md bg-carbon p-7 ${
                paquete.popular
                  ? "shadow-lg shadow-pink/10 ring-2 ring-pink"
                  : "ring-1 ring-white/10"
              }`}
            >
              {paquete.popular && (
                <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap label-mono rounded-md bg-pink px-4 py-1 font-bold text-carbon">
                  Más popular
                </p>
              )}
              <h3 className="font-display text-xl text-light">{paquete.nombre}</h3>
              <p className="mt-1 font-semibold text-cyan">{paquete.tagline}</p>
              <p className="mt-4 flex-1 leading-relaxed text-muted">
                {paquete.texto}
              </p>
              <p className="mt-6 border-t border-white/10 pt-5 text-muted">
                Desde{" "}
                <span className="font-display text-3xl text-light">
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
