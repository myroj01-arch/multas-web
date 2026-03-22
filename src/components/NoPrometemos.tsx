'use client'

import { queNoPrometemos } from '@/lib/data'

export default function NoPrometemos() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que NO prometemos
          </h2>
          <p className="text-lg text-slate-300">
            Somos directos. Creemos que la honestidad protege tanto a ti como a nosotros. Por eso te decimos claro lo que NO prometemos:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {queNoPrometemos.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800 rounded-xl border border-slate-700"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-900/50 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusión */}
        <div className="mt-12 text-center max-w-3xl mx-auto p-6 bg-slate-800 rounded-xl border border-slate-700">
          <p className="text-lg text-slate-300">
            Preferimos perdernos una gestión antes que cobrarte por un caso sin fundamento. Si tu multa no tiene errores, vicios o causales de prescripción, <strong className="text-white">no te recomendamos avanzar</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
