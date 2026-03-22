'use client'

import { casosPruebaSocial } from '@/lib/data'

export default function SocialProof() {
  return (
    <section id="casos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-full mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Resultados documentados
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Casos reales tramitados con resoluciones favorables
          </h2>
          <p className="text-lg text-slate-600">
            Contamos con expedientes documentados con resoluciones y cierres favorables. Solo avanzamos cuando vemos sustento jurídico y documental.
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casosPruebaSocial.map((caso, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all"
            >
              {/* Header del caso */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-700">
                      {caso.inicial}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{caso.inicial}</div>
                    <div className="text-sm text-slate-500">{caso.ciudad}</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                  ✓ Favorable
                </div>
              </div>

              {/* Resultado */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {caso.resultado}
                </span>
              </div>

              {/* Descripción */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {caso.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Nota */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 italic">
            Cada resultado está respaldado por la resolución o el acto administrativo de la autoridad de tránsito correspondiente.
          </p>
        </div>
      </div>
    </section>
  )
}
