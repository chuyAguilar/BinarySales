import { WHATSAPP_URL } from "@/lib/site";

/**
 * Mini-mockups de conversación con el mismo lenguaje visual del hero:
 * cliente a la izquierda (burbuja blanca), bot a la derecha (burbuja verde).
 * Son ilustraciones decorativas (aria-hidden).
 */
type Pieza =
  | { tipo: "cliente" | "bot"; texto: string }
  | { tipo: "botones"; opciones: string[] };

const tipos: { nombre: string; descripcion: string; chat: Pieza[] }[] = [
  {
    nombre: "Chatbot basado en reglas",
    descripcion:
      "Guía a tus clientes con menús de botones y rutas fijas: respuestas siempre correctas. Ideal para dudas frecuentes como precios, envíos y horarios.",
    chat: [
      { tipo: "bot", texto: "¡Hola! 👋 ¿Cómo puedo ayudarte?" },
      { tipo: "botones", opciones: ["Precios 💰", "Envíos 🚚", "Horarios 🕐"] },
      { tipo: "cliente", texto: "Precios 💰" },
    ],
  },
  {
    nombre: "Chatbot IA o cognitivo",
    descripcion:
      "Entiende lenguaje natural y conversa como una persona. Resuelve preguntas abiertas con la información de tu negocio, sin menús de por medio.",
    chat: [
      { tipo: "cliente", texto: "Hola, quisiera saber el estado de mi pedido." },
      { tipo: "bot", texto: "¡Claro! 🌟 ¿Me compartes el número de tu pedido y lo reviso?" },
    ],
  },
  {
    nombre: "Chatbot de palabras clave",
    descripcion:
      "Detecta palabras como “pedido” o “catálogo” en el mensaje y responde al instante con la información correcta.",
    chat: [
      { tipo: "cliente", texto: "Catálogo 🙌" },
      { tipo: "bot", texto: "¡Va! 👗 Aquí tienes el catálogo con todos nuestros vestidos. ¿Te aparto algo?" },
    ],
  },
  {
    nombre: "Chatbot de menú interactivo (ITR)",
    descripcion:
      "Un asistente que combina botones y texto: tus clientes consultan, reservan o piden sin salir del chat.",
    chat: [
      { tipo: "bot", texto: "👋 ¡Hola! Soy tu asistente virtual. ¿Qué te gustaría consultar?" },
      { tipo: "botones", opciones: ["🍕 Menú", "📋 Reservar", "🚚 Para llevar", "📞 Soporte"] },
    ],
  },
];

function Chat({ piezas }: { piezas: Pieza[] }) {
  return (
    <div aria-hidden="true" className="space-y-2.5 border-b border-slate-100 bg-cloud p-5">
      {piezas.map((pieza, i) => {
        if (pieza.tipo === "botones") {
          return (
            <div key={i} className="ml-auto max-w-[85%] space-y-1.5">
              {pieza.opciones.map((opcion) => (
                <p
                  key={opcion}
                  className="rounded-xl bg-white px-3 py-1.5 text-center text-xs font-medium text-navy shadow-sm ring-1 ring-slate-200"
                >
                  {opcion}
                </p>
              ))}
            </div>
          );
        }
        const esBot = pieza.tipo === "bot";
        return (
          <p
            key={i}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm text-navy shadow-sm ${
              esBot
                ? "ml-auto rounded-tr-sm bg-[#d9fdd3]"
                : "rounded-tl-sm bg-white"
            }`}
          >
            {pieza.texto}
          </p>
        );
      })}
    </div>
  );
}

export default function TiposChatbot() {
  return (
    <section id="tipos-de-chatbot" className="bg-cloud">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Tipos de chatbot para tu negocio
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
          No todos los negocios necesitan el mismo asistente. Estos son los
          tipos de chatbot que podemos armar para ti:
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {tipos.map((tipo) => (
            <li
              key={tipo.nombre}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5"
            >
              <Chat piezas={tipo.chat} />
              <div className="flex-1 p-6">
                <h3 className="text-lg font-bold text-navy">{tipo.nombre}</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {tipo.descripcion}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-slate-600">
          ¿No sabes cuál le conviene a tu negocio?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded font-semibold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Escríbenos y te ayudamos a elegir
          </a>
          .
        </p>
      </div>
    </section>
  );
}
