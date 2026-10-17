import type { ReactNode } from 'react'

type Props = { id: string; titulo: string; children: ReactNode }

export default function Seccion({ id, titulo, children }: Props) {
  return (
    <section id={id} className="border-t border-linea">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-[14rem_1fr] md:gap-12">
        <h2 className="font-display text-3xl font-bold tracking-tight">{titulo}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}