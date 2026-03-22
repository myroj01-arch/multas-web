'use client'

import { beneficiosContent } from '@/lib/data'

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-slate-500">
            Enfocamos nuestro trabajo en resultados reales, no en promesas vacías.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {beneficiosContent.map((beneficio, index) => (
            <div key={index} className="p-5 border border-slate-100 rounded-lg">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {beneficio.titulo}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
