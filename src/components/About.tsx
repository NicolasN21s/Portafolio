import Seccion from './Seccion'

const parrafos = [
  'Mi camino empezó en la programación y me llevó a los datos. Hoy trabajo en ingeniería de datos y sigo formándome en Ingeniería de Software.',
  'Me interesa que el dato llegue completo y a tiempo a quien lo necesita, y que el código que lo mueve sea claro y fácil de mantener.',
]

const datos = [
  { termino: 'Formación técnica', detalle: 'Técnico en programación de software' },
  { termino: 'Estudios actuales', detalle: 'Ingeniería de Software' },
  { termino: 'Certificaciones', detalle: 'Desarrollo de software' },
]

export default function About() {
  return (
    <Seccion id="sobre-mi" titulo="Sobre mí">
      <div className="max-w-2xl space-y-5 text-pretty text-xl">
        {parrafos.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <dl className="mt-12 max-w-2xl divide-y divide-linea border-y border-linea">
        {datos.map((d) => (
          <div key={d.termino} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr]">
            <dt className="font-display font-semibold">{d.termino}</dt>
            <dd className="text-suave">{d.detalle}</dd>
          </div>
        ))}
      </dl>
    </Seccion>
  )
}