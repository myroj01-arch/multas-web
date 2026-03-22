'use client'

import { queRevisamos } from '@/lib/data'

export default function QueRevisamos() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            ¿Qué revisamos en tu caso?
          </h2>
          <p className="text-lg text-slate-600">
            En cada caso hacemos un análisis completo. No vamos por la vida a ciegas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {queRevisamos.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-200 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-600">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
