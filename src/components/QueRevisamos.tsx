'use client'

import { queRevisamos } from '@/lib/data'

export default function QueRevisamos() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Análisis completo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            ¿Qué revisamos?
          </h2>
          <p className="text-lg text-slate-600">
            En cada caso hacemos un análisis completo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {queRevisamos.map((item, index) => (
            <div key={index} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <span className="text-sm font-bold text-white">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {item.titulo}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
