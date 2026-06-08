'use client'

import { modeloContent } from '@/lib/data'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Proceso</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-slate-600">
            Un modelo directo y transparente. No escondemos costos.
          </p>
        </div>

        {/* Cards del modelo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {/* Diagnóstico gratis */}
          <div className="relative p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wide">Diagnóstico</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">GRATIS</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Para todo tipo de caso. Revisamos tu situación sin costo.
            </p>
          </div>

          {/* Gestión normal */}
          <div className="relative p-6 bg-slate-900 rounded-2xl shadow-lg shadow-slate-900/20">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Gestión multas</div>
            <h3 className="text-2xl font-bold text-white mb-2">$150.000 COP</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Por cada multa tramitada. Análisis, expediente, radicación y seguimiento.
            </p>
          </div>

          {/* Alcoholemia */}
          <div className="relative p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-amber-600 mb-2 uppercase tracking-wide">Alcoholemia</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Precio a acordar</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Evaluamos cada caso. Acordamos el precio antes de empezar.
            </p>
          </div>
        </div>

        {/* Compromiso */}
        <div className="text-center p-5 bg-white rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-700">
            Solo avanzamos cuando vemos sustento. Si no hay caso sólido, no cobramos nada.
          </p>
        </div>
      </div>
    </section>
  )
}
