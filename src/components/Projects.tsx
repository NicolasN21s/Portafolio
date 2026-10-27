import Seccion from './Seccion'
import { proyectos } from '../data/projects'

export default function Projects() {
  return (
    <Seccion id="proyectos" titulo="Proyectos">
      <div className="space-y-14">
        {proyectos.map((proyecto, indice) => (
          <article
            key={proyecto.nombre}
            className="grid items-center gap-6 border-b border-linea pb-14 last:border-b-0 last:pb-0 lg:grid-cols-2 lg:gap-10"
          >
            {'imagenes' in proyecto ? (
              <div
                className={`relative aspect-[16/10] w-full rounded-2xl border border-linea bg-[#e8eef8] p-4 sm:p-6 ${
                  indice % 2 === 1 ? 'lg:order-2' : ''
                }`}
                aria-label="Collage de imágenes del proyecto"
              >
                <img
                  src={proyecto.imagenes[0].src}
                  alt={proyecto.imagenes[0].alt}
                  loading="lazy"
                  className="absolute left-4 top-5 h-[72%] w-[72%] rounded-xl border border-white/80 bg-white object-cover shadow-xl sm:left-6 sm:top-6"
                />
                <img
                  src={proyecto.imagenes[1].src}
                  alt={proyecto.imagenes[1].alt}
                  loading="lazy"
                  className="absolute bottom-5 right-4 h-[48%] w-[48%] rounded-xl border-4 border-white bg-white object-cover shadow-xl sm:bottom-6 sm:right-6"
                />
              </div>
            ) : (
              <img
                src={proyecto.imagen}
                alt={proyecto.alt}
                loading="lazy"
                className={`aspect-[16/10] w-full rounded-2xl border border-linea bg-fondo object-contain ${
                  indice % 2 === 1 ? 'lg:order-2' : ''
                }`}
              />
            )}
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-suave">
                {proyecto.categoria}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                {proyecto.nombre}
              </h3>
              <p className="mt-4 text-lg leading-relaxed">{proyecto.descripcion}</p>
              <p className="mt-4 border-l-2 border-acento pl-4 font-semibold text-suave">
                {proyecto.contribucion}
              </p>
              {proyecto.nota && <p className="mt-3 text-sm text-suave">{proyecto.nota}</p>}
              {'enlace' in proyecto && proyecto.enlace && (
                <a
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-display text-base font-semibold text-acento underline decoration-acento/40 underline-offset-4 transition hover:text-acento-oscuro hover:decoration-acento-oscuro"
                >
                  Explorar el dashboard <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Seccion>
  )
}
