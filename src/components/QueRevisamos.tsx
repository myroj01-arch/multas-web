'use client'

import { queRevisamos } from '@/lib/data'

export default function QueRevisamos() {
  return (
    <section className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="text-sm font-semibold text-white/40 uppercase tracking-wider">Análisis completo</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-4">
            ¿Qué revisamos?
          </h2>
          <p className="text-xl text-white/50">
            En cada caso hacemos un análisis completo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {queRevisamos.map((item, index) => (
            <div key={index} className="flex gap-5 p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-sm font-bold text-black">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.titulo}
                </h3>
                <p className="text-base text-white/60 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
