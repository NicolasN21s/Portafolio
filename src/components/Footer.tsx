import { ArrowUp, ExternalLink } from 'lucide-react'
import { contacto, linkedin, sitio } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-tinta text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#inicio" className="font-display text-lg font-semibold text-white">
              {sitio.nombre}
            </a>
            <p className="mt-1 text-sm">Ingeniería de datos · Desarrollo de software</p>
          </div>

          <nav aria-label="Enlaces de contacto" className="flex flex-col gap-3 text-sm sm:items-end">
            <a className="transition-colors hover:text-white" href={`mailto:${contacto.correo}`}>
              {contacto.correo}
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              LinkedIn <ExternalLink size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {sitio.nombre}. Todos los derechos reservados.</p>
          <a href="#inicio" className="inline-flex items-center gap-1 transition-colors hover:text-white">
            Volver al inicio <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
