'use client'

import { casosPruebaSocial } from '@/lib/data'

export default function SocialProof() {
  return (
    <section id="casos" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Resultados documentados
          </h2>
          <p className="text-lg text-slate-500">
            Solo avanzamos cuando vemos sustento jurídico y documental.
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {casosPruebaSocial.map((caso, index) => (
            <div
              key={index}
              className="p-5 bg-white border border-slate-100 rounded-lg hover:border-slate-200 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-600">{caso.inicial}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-600">{caso.ciudad}</span>
                </div>
                <span className="text-xs text-green-600 font-medium">{caso.resultado}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{caso.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Nota */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Cada resultado respaldado por resolución o acto administrativo de la autoridad de tránsito.
        </p>
      </div>
    </section>
  )
}
