# FormaZero — Landing page

Landing de una sola página de **FormaZero.mx**: impresión 3D (División 3D) y webs + chatbots de WhatsApp (División Digital), desde Tula de Allende.

**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS 4. 100% estática, lista para Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Identidad visual

Basada en la ficha técnica `marca/formazero-ficha-tecnica.jpeg`:

- **Colores** (tokens en `app/globals.css`): Carbon Zero `#0D0E12`, Gris Lab `#161820`, Cyber Cyan `#00E5FF`, Cyber Pink `#FF2A85`, Lab Light `#F1F3F6`.
- **Tipografías** (Google Fonts vía `next/font`): Archivo Black (títulos, `font-display`), Montserrat (cuerpo, `font-sans`), JetBrains Mono (etiquetas, `font-mono` / `label-mono`).
- **Logo:** redibujado en vector en `components/Logo.tsx` (navbar y footer) y `public/formazero-isotipo.svg` / `app/icon.svg` (favicon). Las imágenes originales están en `marca/`.

## Antes de publicar — datos por completar

Todo está centralizado en [`lib/site.ts`](lib/site.ts):

- [ ] `SITE_URL` — confirmar el dominio final (hoy `https://formazero.mx`; se usa en metadatos y JSON-LD).
- [ ] `CONTACT_EMAIL` — crear el buzón `hola@formazero.mx` o cambiarlo.
- [ ] `FACEBOOK_URL` — mientras siga en `"#"`, su icono del footer no se muestra.
- [ ] Fotos reales de piezas impresas para la División 3D (hoy son ilustraciones SVG).

**Contacto:** todos los botones abren el DM de Instagram de [@formazero.mx](https://www.instagram.com/formazero.mx) (`INSTAGRAM_DM_URL` = `ig.me/m/formazero.mx`). Instagram no permite mensaje prellenado, así que cada producto 3D muestra su código (FZ-01…FZ-04) para que el cliente lo mencione; el bot de DMs (`../automatizacion`) lo detecta.

Analítica (Google Analytics / Meta Pixel): hay un hueco comentado al final de [`app/layout.tsx`](app/layout.tsx).

## Deploy en Vercel

1. En [vercel.com](https://vercel.com): **New Project** → importa el repo → **Deploy**.
2. Con el dominio listo: **Settings → Domains** y actualiza `SITE_URL` en `lib/site.ts`.
3. Cada `git push` a `main` re-despliega solo.

## Estructura

- `app/layout.tsx` — metadatos SEO, Open Graph, JSON-LD LocalBusiness, fuentes.
- `app/page.tsx` — orden de secciones: Hero → Divisiones → División 3D → División Digital (Problema, Servicios, Tipos de chatbot) → Proceso → Por qué → CTA → Footer.
- `components/` — una sección por archivo; `Logo.tsx` con el isotipo; `icons.tsx`.
- `lib/site.ts` — contacto: usuario de Instagram, correo, dominio (único lugar a editar).
- `public/` — isotipo y `og-image.png` (1200×630).
- `marca/` — archivos fuente de la marca.
