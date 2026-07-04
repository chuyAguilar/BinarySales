import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BinarySales — Webs y chatbots de WhatsApp en Tula de Allende",
  description:
    "Webs y chatbots de WhatsApp para negocios de Tula y todo México. Automatizamos tu atención para que no se te escape ninguna venta.",
  keywords: [
    "páginas web Tula de Allende",
    "chatbot WhatsApp",
    "impresión 3D Tula",
    "diseño web Hidalgo",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "BinarySales",
    title: "BinarySales — Tecnología que te trae más clientes",
    description:
      "Webs y chatbots de WhatsApp para negocios de Tula y todo México. Automatizamos tu atención para que no se te escape ninguna venta.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BinarySales — Tecnología que te trae más clientes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// SEO local: datos estructurados de negocio (JSON-LD LocalBusiness)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BinarySales",
  description:
    "Webs y chatbots de WhatsApp para negocios de Tula y todo México, e impresión 3D de llaveros y productos personalizados.",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  image: `${SITE_URL}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tula de Allende",
    addressRegion: "Hidalgo",
    addressCountry: "MX",
  },
  areaServed: ["Tula de Allende", "México"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: WHATSAPP_URL,
    availableLanguage: "es",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Presencia — página web profesional",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 1800,
          priceCurrency: "MXN",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chatbot de WhatsApp",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 1200,
          priceCurrency: "MXN",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Completo — web + chatbot",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 2800,
          priceCurrency: "MXN",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Impresión 3D de llaveros y productos personalizados",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}

        {/*
          Analítica — descomenta cuando actives las campañas (Meta Ads / Google):

          1) Google Analytics 4: instala @next/third-parties y agrega
             import { GoogleAnalytics } from "@next/third-parties/google";
             <GoogleAnalytics gaId="G-XXXXXXXXXX" />

          2) Meta Pixel: pega el snippet oficial dentro de
             <Script id="meta-pixel" strategy="afterInteractive">…</Script>
             (import Script from "next/script")
        */}
      </body>
    </html>
  );
}
