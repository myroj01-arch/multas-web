'use client'

import { queNoPrometemos } from '@/lib/data'

export default function NoPrometemos() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Lo que NO prometemos
          </h2>
          <p className="text-lg text-slate-400">
            Somos directos. Preferimos la honestidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {queNoPrometemos.map((item, index) => (
            <div key={index} className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-sm font-semibold mb-1">{item.titulo}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
