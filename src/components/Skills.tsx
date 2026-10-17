import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Seccion from './Seccion'
import { grupos } from '../data/skills'

export default function Skills() {
  const carrusel = useRef<HTMLDivElement>(null)

  const mover = (direccion: -1 | 1) => {
    const contenedor = carrusel.current
    if (!contenedor) return

    const tarjetas = Array.from(contenedor.querySelectorAll<HTMLElement>('[data-habilidad]'))
    if (tarjetas.length === 0) return

    const borde = contenedor.getBoundingClientRect()
    const primeraVisible = tarjetas.findIndex((tarjeta) => {
      const rect = tarjeta.getBoundingClientRect()
      return rect.right > borde.left && rect.left < borde.right
    })
    if (primeraVisible < 0) return

    const ultimaVisible = tarjetas.reduce((ultima, tarjeta, indice) => {
      const rect = tarjeta.getBoundingClientRect()
      return rect.right > borde.left && rect.left < borde.right ? indice : ultima
    }, primeraVisible)

    let destino: number
    if (direccion > 0 && ultimaVisible === tarjetas.length - 1) {
      destino = 0
    } else if (direccion < 0 && primeraVisible === 0) {
      destino = tarjetas.length - 1
    } else {
      destino = Math.max(0, Math.min(tarjetas.length - 1, primeraVisible + direccion))
    }

    const tarjetaDestino = tarjetas[destino]
    const desplazamiento = tarjetaDestino.getBoundingClientRect().left - borde.left
    contenedor.scrollTo({ left: contenedor.scrollLeft + desplazamiento, behavior: 'smooth' })
  }

  return (
    <Seccion id="habilidades" titulo="Habilidades">
      <div>
        <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <p className="max-w-md text-suave">Tecnologías y áreas en las que he trabajado.</p>
          <div className="flex shrink-0 overflow-hidden rounded-full border border-linea">
            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label="Ver habilidades anteriores"
              className="grid size-10 place-items-center text-suave transition-colors hover:bg-acento hover:text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-acento"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              aria-label="Ver más habilidades"
              className="grid size-10 place-items-center border-l border-linea text-suave transition-colors hover:bg-acento hover:text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-acento"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={carrusel}
          role="region"
          aria-label="Carrusel de habilidades por categoría"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {grupos.map((grupo, indice) => (
            <article
              key={grupo.nombre}
              data-habilidad
              className="w-[min(86%,22rem)] shrink-0 snap-start rounded-2xl border border-linea p-5 sm:w-[min(72%,24rem)] lg:w-[calc(50%-0.625rem)] lg:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-xs font-bold tracking-[0.16em] text-acento">
                    ÁREA 0{indice + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{grupo.nombre}</h3>
                </div>
                <span className="rounded-full border border-linea px-3 py-1 text-sm text-suave">
                  {grupo.items.length} {grupo.items.length === 1 ? 'habilidad' : 'habilidades'}
                </span>
              </div>
              <p className="mt-3 min-h-12 text-sm leading-relaxed text-suave">{grupo.descripcion}</p>
              <ul className="mt-4 divide-y divide-linea border-y border-linea">
                {grupo.items.map(({ nombre, Icono }) => (
                  <li key={nombre} className="flex min-h-14 items-center gap-3 py-3">
                    <Icono size={22} className="shrink-0 text-suave" aria-hidden="true" />
                    <span>{nombre}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-3 text-xs text-suave sm:hidden">Desliza para explorar las demás áreas</p>
      </div>
    </Seccion>
  )
}
