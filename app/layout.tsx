import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono, Montserrat } from "next/font/google";
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_URL } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const DESCRIPCION =
  "Impresión 3D en Tula de Allende: stands QR con tu logo, llaveros personalizados, piezas a medida y figuras. Además, webs y chatbots de WhatsApp para tu negocio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FormaZero — Impresión 3D, webs y chatbots en Tula de Allende",
  description: DESCRIPCION,
  keywords: [
    "impresión 3D Tula de Allende",
    "stand QR personalizado",
    "llaveros personalizados 3D",
    "piezas impresas en 3D Hidalgo",
    "chatbot WhatsApp",
    "páginas web Tula de Allende",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "FormaZero",
    title: "FormaZero — Del código digital a la realidad física",
    description: DESCRIPCION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FormaZero — Del código digital a la realidad física",
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
  name: "FormaZero",
  description: DESCRIPCION,
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
      ...[
        "Stand QR impreso en 3D con tu logo",
        "Llaveros personalizados impresos en 3D",
        "Piezas a medida impresas en 3D",
        "Figuras y coleccionables impresos en 3D",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
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
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${montserrat.variable} ${archivoBlack.variable} ${jetbrainsMono.variable}`}>
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
