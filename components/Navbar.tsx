"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";

const links = [
  { href: "#division-3d", label: "División 3D" },
  { href: "#division-digital", label: "División Digital" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-carbon/85 backdrop-blur">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          aria-label="FormaZero — inicio"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md text-sm font-semibold text-light transition-colors hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono inline-flex items-center gap-2 rounded-md bg-pink px-5 py-2.5 font-bold text-carbon transition-colors hover:bg-[#ff5c9f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cotizar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-md p-2 text-light lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="menu-movil"
          className="border-t border-white/10 bg-carbon px-4 pb-6 pt-3 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-light hover:bg-lab focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="label-mono mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-pink px-5 py-3.5 text-sm font-bold text-carbon hover:bg-[#ff5c9f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
