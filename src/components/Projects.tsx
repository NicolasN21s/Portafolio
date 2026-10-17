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
            <img
              src={proyecto.imagen}
              alt={proyecto.alt}
              loading="lazy"
              className={`aspect-[16/10] w-full rounded-2xl border border-linea bg-fondo object-contain ${
                indice % 2 === 1 ? 'lg:order-2' : ''
              }`}
            />
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
            </div>
          </article>
        ))}
      </div>
    </Seccion>
  )
}
