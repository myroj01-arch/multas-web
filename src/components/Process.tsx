'use client'

import { procesoPasos } from '@/lib/data'

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Así funciona el proceso
          </h2>
          <p className="text-lg text-slate-600">
            De la solicitud a la resolución, te acompañamos en cada paso.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2" />

            {/* Pasos */}
            <div className="space-y-12">
              {procesoPasos.map((paso, index) => (
                <div
                  key={paso.paso}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Número del paso */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-600/30">
                    {paso.paso}
                  </div>

                  {/* Contenido */}
                  <div
                    className={`mt-4 md:mt-0 ml-0 md:ml-8 ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    } ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div
                      className={`p-6 bg-white rounded-xl shadow-sm border border-slate-100 ${
                        index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                      }`}
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {paso.titulo}
                      </h3>
                      <p className="text-slate-600">
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-lg shadow-primary-600/25"
          >
            Empezar con diagnóstico gratis
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
