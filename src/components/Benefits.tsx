'use client'

import { beneficiosContent } from '@/lib/data'

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-slate-600">
            Somos diferentes a un estudio jurídico tradicional. Enfocamos nuestro trabajo en resultados reales, no en promesas vacías.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficiosContent.map((beneficio, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl hover:bg-primary-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {beneficio.titulo}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
