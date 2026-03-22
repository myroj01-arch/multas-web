'use client'

import { procesoPasos } from '@/lib/data'

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Así funciona
          </h2>
          <p className="text-lg text-slate-500">
            De la solicitud a la resolución, te acompañamos en cada paso.
          </p>
        </div>

        {/* Pasos */}
        <div className="max-w-3xl mx-auto space-y-6">
          {procesoPasos.map((paso) => (
            <div key={paso.paso} className="flex gap-5 items-start">
              {/* Número */}
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {paso.paso}
              </div>
              {/* Contenido */}
              <div className="flex-1 pt-1">
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {paso.titulo}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
          >
            Empezar con diagnóstico gratis
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
