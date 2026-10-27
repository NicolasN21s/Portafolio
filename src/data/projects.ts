export const proyectos = [
  {
    nombre: 'Bogotá en Movimiento',
    imagenes: [
      { src: '/dashboard.png', alt: 'Dashboard de aforos de Bogotá en Movimiento' },
      { src: '/BEnMovimiento.jpg', alt: 'Vista del proyecto Bogotá en Movimiento' },
    ],
    categoria: 'Datos abiertos · ETL · Streamlit',
    contribucion: 'Construí el flujo ETL, el catálogo geográfico y el dashboard interactivo.',
    nota: 'Si el dashboard está inactivo, pulsa «Wake up» para reactivarlo.',
    descripcion:
      'Proyecto de datos abiertos para explorar aforos oficiales de bicicletas y vehículos en Bogotá. Los ZIP del visor se descargan manualmente; mis scripts extraen los Excel de volumen, detectan duplicados, normalizan categorías y fechas, y generan un dataset común con trazabilidad al archivo fuente. Después produzco resúmenes y un catálogo geográfico de nodos, y los muestro en un dashboard de Streamlit con filtros de nodo, modalidad y fecha. También incluí una opción para publicar un snapshot comprimido y cargar datos en PostgreSQL. El alcance corresponde a los estudios seleccionados: el dashboard comunica los faltantes y evita presentar los resultados como una medida completa de toda la movilidad de Bogotá.',
    enlace: 'https://bogota-en-movimiento-ggbjhvvrzhma5ykpbx8xjv.streamlit.app/',
  },
  {
    nombre: 'DataRift',
    imagen: '/DataRift1.jpg',
    alt: 'Interfaz de la plataforma DataRift',
    categoria: 'Web scraping · Marketing',
    contribucion: 'Lideré el desarrollo frontend y colaboré en el backend.',
    descripcion:
      'Herramienta para que los equipos de marketing consulten información de YouTube, Instagram y TikTok de forma más puntual y organizada, y puedan trabajar con datos más limpios.',
    nota: '',
  },
  {
    nombre: 'Latitud',
    imagen: '/Latitud.jpg',
    alt: 'Vista de administración de la plataforma Latitud',
    categoria: 'Plataforma · Alcance LATAM',
    contribucion: 'Desarrollo colaborativo junto al equipo de ingeniería.',
    descripcion:
      'Plataforma robusta para consultar vallas publicitarias en un mapa en vivo, cargar documentos y certificaciones, y revisar controles de facturación. Ofrece interfaces distintas según el rol, incluida la vista de administración mostrada.',
    nota: 'El sistema pasó por pruebas de QA y se encuentra en producción.',
  },
]
