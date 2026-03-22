'use client'

import { modeloContent } from '@/lib/data'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-slate-600">
            Un modelo directo y transparente. No escondemos costos ni hacemos promesas vacías.
          </p>
        </div>

        {/* Cards del modelo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Diagnóstico gratis */}
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {modeloContent.diagnostico.titulo}
            </h3>
            <p className="text-slate-600">
              {modeloContent.diagnostico.descripcion}
            </p>
          </div>

          {/* Gestión normal */}
          <div className="p-8 bg-primary-600 rounded-2xl shadow-lg">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {modeloContent.gestionNormal.titulo}
            </h3>
            <div className="inline-flex items-center px-3 py-1 bg-white/20 text-white text-lg font-bold rounded-lg mb-3">
              $150.000 COP
            </div>
            <p className="text-primary-100">
              {modeloContent.gestionNormal.descripcion}
            </p>
          </div>

          {/* Alcoholemia */}
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {modeloContent.gestionAlcoholemia.titulo}
            </h3>
            <div className="inline-flex items-center px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium rounded-lg mb-3">
              Precio a acordar
            </div>
            <p className="text-slate-600">
              {modeloContent.gestionAlcoholemia.descripcion}
            </p>
          </div>
        </div>

        {/* Incluye - Multas normales */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            ¿Qué incluye la gestión de multas normales?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {modeloContent.gestionNormal.incluye.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Incluye - Alcoholemia */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            ¿Qué incluye la gestión de casos de alcoholemia?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {modeloContent.gestionAlcoholemia.incluye.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-amber-50 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Nota:</strong> Los casos de alcoholemia se valoran individualmente. Después de la revisión inicial (gratis), acordamos un precio justo según la complejidad de tu situación.
            </p>
          </div>
        </div>

        {/* Compromiso */}
        <div className="mt-8 text-center p-6 bg-primary-50 rounded-xl">
          <p className="text-primary-800 font-medium">
            {modeloContent.compromiso}
          </p>
        </div>
      </div>
    </section>
  )
}
