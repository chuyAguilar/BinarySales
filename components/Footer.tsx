import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_DM_URL,
  INSTAGRAM_URL,
} from "@/lib/site";
import { InstagramIcon } from "./icons";
import { Logo } from "./Logo";

const redes = [
  {
    nombre: "Facebook",
    url: FACEBOOK_URL,
    icono: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    nombre: "Instagram",
    url: INSTAGRAM_URL,
    icono: <InstagramIcon className="h-6 w-6" />,
  },
].filter((red) => red.url !== "#");

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-carbon">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-muted">
              Del código digital a la realidad física.
            </p>
            <p className="label-mono mt-2 text-cyan">[FZ // 3D-LAB • DIGITAL]</p>
          </div>

          <div className="md:text-right">
            <p className="text-muted">
              <a
                href={INSTAGRAM_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded font-medium text-cyan hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                Instagram @formazero.mx
              </a>{" "}
              ·{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded font-medium text-cyan hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                Correo
              </a>{" "}
              · Tula de Allende, Hidalgo, México
            </p>

            {/* Los iconos aparecen solo cuando las URLs reales estén en lib/site.ts (mientras sigan en "#" se ocultan) */}
            {redes.length > 0 && (
              <div className="mt-4 flex gap-4 md:justify-end">
                {redes.map((red) => (
                  <a
                    key={red.nombre}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${red.nombre} de FormaZero`}
                    className="rounded-md text-muted transition-colors hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  >
                    {red.icono}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="label-mono text-muted">© 2026 FormaZero.mx</p>
        </div>
      </div>
    </footer>
  );
}
