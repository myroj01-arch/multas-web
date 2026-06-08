'use client'

import { casosPruebaSocial } from '@/lib/data'

export default function SocialProof() {
  return (
    <section id="casos" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Casos de éxito</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            Resultados documentados
          </h2>
          <p className="text-lg text-slate-600">
            Solo avanzamos cuando vemos sustento jurídico y documental.
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {casosPruebaSocial.map((caso, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{caso.inicial}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900 block">{caso.ciudad}</span>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-lg border border-green-100">
                  {caso.resultado}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{caso.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Nota */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Cada resultado respaldado por resolución o acto administrativo de la autoridad de tránsito.
        </p>
      </div>
    </section>
  )
}
