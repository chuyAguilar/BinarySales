# BinarySales — Landing page

Landing de una sola página construida según `Brief-Web-para-ClaudeCode.md`.

**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS 4. 100% estática, lista para Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Antes de publicar — datos por completar

Todos los placeholders están centralizados en [`lib/site.ts`](lib/site.ts):

- [ ] `WHATSAPP_URL` — reemplaza `52XXXXXXXXXX` por el número real (52 + 10 dígitos).
- [ ] `CONTACT_EMAIL` — correo de contacto definitivo.
- [ ] `SITE_URL` — dominio final (se usa en metadatos y JSON-LD).
- [ ] `FACEBOOK_URL` / `INSTAGRAM_URL` — mientras sigan en `"#"`, los iconos del footer no se muestran; al poner las URLs reales aparecen solos.

Analítica (Google Analytics / Meta Pixel): hay un hueco comentado al final de [`app/layout.tsx`](app/layout.tsx).

## Deploy en Vercel

1. Sube el proyecto a un repo de GitHub (`git init`, commit, push).
2. En [vercel.com](https://vercel.com): **New Project** → importa el repo → **Deploy** (detecta Next.js automáticamente, sin configuración extra).
3. Cuando tengas el dominio: **Settings → Domains** en Vercel y actualiza `SITE_URL` en `lib/site.ts`.
4. Cada `git push` a `main` re-despliega solo.

## Estructura

- `app/layout.tsx` — metadatos SEO, Open Graph, JSON-LD LocalBusiness, fuente Inter, hueco para analítica.
- `app/page.tsx` — composición de la página.
- `components/` — Navbar, Hero (con mockup de chat), Problema, Servicios, ComoFunciona, Impresion3D, PorQue, CtaFinal, Footer.
- `lib/site.ts` — constantes de contacto (único lugar a editar).
- `public/` — logos y `og-image.png` (1200×630 para previews de WhatsApp/Facebook).
- `marca/` — archivos fuente de la marca.
