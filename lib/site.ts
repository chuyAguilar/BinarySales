// Datos de contacto y constantes del sitio.

// Número de WhatsApp en formato internacional: 52 + 10 dígitos, sin espacios.
const WHATSAPP_NUMBER = "525661900801";

/** Enlace a WhatsApp con un mensaje prellenado. */
export function whatsappUrl(mensaje: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

export const WHATSAPP_URL = whatsappUrl(
  "Hola FormaZero, vengo de su página y quiero información",
);

// TODO: crear este buzón (correo del dominio o reenvío gratis a tu Gmail)
export const CONTACT_EMAIL = "hola@formazero.mx";

// TODO: confirmar el dominio final y conectarlo a Vercel vía DNS
export const SITE_URL = "https://formazero.mx";

// TODO: redes sociales (Facebook / Instagram)
export const FACEBOOK_URL = "#";
export const INSTAGRAM_URL = "#";
