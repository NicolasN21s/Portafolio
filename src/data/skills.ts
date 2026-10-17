import type { IconType } from 'react-icons'
import { FaAws, FaCode, FaDatabase, FaJava, FaJs, FaReact } from 'react-icons/fa'
import { SiAngular, SiGooglecloud, SiPython } from 'react-icons/si'

type Grupo = {
  nombre: string
  descripcion: string
  items: { nombre: string; Icono: IconType }[]
}

export const grupos: Grupo[] = [
  {
    nombre: 'Lenguajes de programación',
    descripcion: 'Lenguajes que utilizo para construir soluciones y trabajar con datos.',
    items: [
      { nombre: 'Python', Icono: SiPython },
      { nombre: 'Java', Icono: FaJava },
      { nombre: 'JavaScript', Icono: FaJs },
      { nombre: 'TypeScript', Icono: FaCode },
    ],
  },
  {
    nombre: 'Desarrollo web',
    descripcion: 'Tecnologías para crear interfaces web modernas e interactivas.',
    items: [
      { nombre: 'React', Icono: FaReact },
      { nombre: 'Angular', Icono: SiAngular },
    ],
  },
  {
    nombre: 'Bases de datos',
    descripcion: 'Consulta y gestión de información en bases de datos relacionales.',
    items: [{ nombre: 'SQL', Icono: FaDatabase }],
  },
  {
    nombre: 'Nube',
    descripcion: 'Plataformas y servicios cloud con los que tengo experiencia.',
    items: [
      { nombre: 'Google Cloud', Icono: SiGooglecloud },
      { nombre: 'AWS', Icono: FaAws },
      { nombre: 'Oracle Cloud (OCI)', Icono: FaDatabase },
    ],
  },
]
