import type { FormEvent } from 'react'
import { ExternalLink, Send } from 'lucide-react'
import { contacto, linkedin } from '../data/site'

export default function Contact() {
  const enviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    const datos = new FormData(evento.currentTarget)
    const nombre = String(datos.get('nombre') ?? '').trim()
    const correoRemitente = String(datos.get('correo') ?? '').trim()
    const mensaje = String(datos.get('mensaje') ?? '').trim()
    const asunto = `Mensaje desde mi portafolio: ${nombre}`
    const cuerpo = `Nombre: ${nombre}\nCorreo: ${correoRemitente}\n\nMensaje:\n${mensaje}`

    window.location.href = `mailto:${contacto.correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
  }

  return (
    <section id={contacto.id} className="border-t border-white/10 bg-tinta text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[14rem_1fr] md:gap-12 md:py-24">
        <div className="font-display text-3xl font-bold tracking-tight">Contacto</div>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(20rem,1.15fr)] lg:gap-16">
          <div>
            <p className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Hablemos.
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              ¿Tienes una oportunidad o quieres conversar sobre datos y desarrollo? Escríbeme.
            </p>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-display font-semibold text-white transition-colors hover:text-blue-200"
            >
              <ExternalLink size={19} aria-hidden="true" />
              Conecta conmigo en LinkedIn
            </a>
            <a
              href={`mailto:${contacto.correo}`}
              className="mt-3 block text-sm text-white/65 transition-colors hover:text-white"
            >
              {contacto.correo}
            </a>
          </div>

          <form onSubmit={enviar} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contacto-nombre" className="mb-1 block font-display text-sm font-semibold text-white/90">
                  Nombre
                </label>
                <input
                  id="contacto-nombre"
                  name="nombre"
                  autoComplete="name"
                  required
                  className="w-full rounded-lg border border-white/25 bg-transparent px-3 py-2 text-white outline-none transition-colors placeholder:text-white/40 focus:border-blue-300"
                />
              </div>
              <div>
                <label htmlFor="contacto-correo" className="mb-1 block font-display text-sm font-semibold text-white/90">
                  Correo
                </label>
                <input
                  id="contacto-correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-white/25 bg-transparent px-3 py-2 text-white outline-none transition-colors placeholder:text-white/40 focus:border-blue-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contacto-mensaje" className="mb-1 block font-display text-sm font-semibold text-white/90">
                Mensaje
              </label>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                rows={5}
                required
                className="w-full resize-y rounded-lg border border-white/25 bg-transparent px-3 py-2 text-white outline-none transition-colors placeholder:text-white/40 focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-acento px-5 py-3 font-display text-base font-semibold text-white transition-colors hover:bg-blue-500"
            >
              <Send size={17} aria-hidden="true" />
              Abrir correo para enviar
            </button>
            <p className="text-xs leading-relaxed text-white/60">
              Se abrirá la aplicación de correo con tus datos y el mensaje listo. Para enviarlo,
              tendrás que confirmar desde allí.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
