import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { sitio, enlaces, contacto } from '../data/site'

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-linea bg-fondo/85 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Principal"
      >
        <a href="#inicio" className="flex items-center gap-3 font-display font-semibold">
          <span className="grid size-9 place-items-center rounded-lg bg-tinta text-white">N</span>
          <span className="hidden sm:inline">{sitio.nombre}</span>
        </a>

        <ul className="hidden items-center gap-8 font-display text-[0.95rem] md:flex">
          {enlaces.map((e) => (
            <li key={e.id}>
              <a href={`#${e.id}`} className="text-suave transition-colors hover:text-tinta">
                {e.etiqueta}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`#${contacto.id}`}
              className="rounded-full border border-tinta/20 px-4 py-1.5 font-semibold transition-colors hover:border-tinta"
            >
              {contacto.etiqueta}
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg md:hidden"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {abierto && (
        <ul
          id="menu-movil"
          className="flex flex-col gap-1 border-t border-linea bg-fondo px-6 py-4 font-display md:hidden"
        >
          {[...enlaces, contacto].map((e) => (
            <li key={e.id}>
              <a
                href={`#${e.id}`}
                onClick={() => setAbierto(false)}
                className="block py-2 text-lg text-suave hover:text-tinta"
              >
                {e.etiqueta}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}