import { Fragment } from 'react'
import { Download, Mail } from 'lucide-react'
import { sitio } from '../data/site'

const etapas = [
  { titulo: 'Extraer', detalle: 'Bases de datos, APIs y archivos' },
  { titulo: 'Transformar', detalle: 'Limpieza, validación y modelado' },
  { titulo: 'Cargar', detalle: 'Datos listos para analizar' },
]

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-6 pb-28 pt-16 md:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <h1 className="max-w-3xl text-balance font-display text-5xl font-extrabold leading-[1.04] tracking-tight md:text-6xl">
            {sitio.titular}
          </h1>

          <div className="mt-8 max-w-xl space-y-4 text-pretty text-xl text-suave">
            {sitio.presentacion.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 font-display font-semibold">
            <a
              href={sitio.cv}
              download
              className="inline-flex items-center gap-2 rounded-full bg-acento px-6 py-3 text-white transition-colors hover:bg-acento-oscuro"
            >
              <Download size={18} aria-hidden="true" />
              Descargar CV
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-tinta/20 px-6 py-3 transition-colors hover:border-tinta"
            >
              <Mail size={18} aria-hidden="true" />
              Escribirme
            </a>
          </div>
        </div>

        <img
          src={sitio.foto}
          alt={`Foto de ${sitio.nombre}`}
          className="aspect-[4/5] w-56 justify-self-start rounded-3xl border border-linea object-cover sm:w-64 lg:w-80 lg:justify-self-end"
        />
      </div>

      <ol className="mt-24 flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
        {etapas.map((etapa, i) => (
          <Fragment key={etapa.titulo}>
            <li className="rounded-2xl border border-linea bg-superficie px-5 py-4 md:w-60">
              <p className="font-display text-lg font-semibold">{etapa.titulo}</p>
              <p className="mt-1 text-base leading-snug text-suave">{etapa.detalle}</p>
            </li>
            {i < etapas.length - 1 && (
              <li aria-hidden="true" className="relative hidden h-px flex-1 bg-linea md:block">
                <span className="flujo-punto" style={{ animationDelay: i === 0 ? '0s' : '3.5s' }} />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </section>
  )
}
