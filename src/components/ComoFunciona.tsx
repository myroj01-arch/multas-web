'use client'

import { modeloContent } from '@/lib/data'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="text-sm font-semibold text-white/40 uppercase tracking-wider">Proceso</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-white/50">
            Un modelo directo y transparente. No escondemos costos.
          </p>
        </div>

        {/* Cards del modelo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          {/* Diagnóstico gratis */}
          <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">Diagnóstico</div>
            <h3 className="text-3xl font-bold text-white mb-3">GRATIS</h3>
            <p className="text-base text-white/60 leading-relaxed">
              Para todo tipo de caso. Revisamos tu situación sin costo.
            </p>
          </div>

          {/* Gestión normal */}
          <div className="relative p-8 bg-white rounded-3xl">
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-black/40 mb-2 uppercase tracking-wide">Gestión multas</div>
            <h3 className="text-3xl font-bold text-black mb-3">$150.000 COP</h3>
            <p className="text-base text-black/60 leading-relaxed">
              Por cada multa tramitada. Análisis, expediente, radicación y seguimiento.
            </p>
          </div>

          {/* Alcoholemia */}
          <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wide">Alcoholemia</div>
            <h3 className="text-3xl font-bold text-white mb-3">Precio a acordar</h3>
            <p className="text-base text-white/60 leading-relaxed">
              Evaluamos cada caso. Acordamos el precio antes de empezar.
            </p>
          </div>
        </div>

        {/* Compromiso */}
        <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-base font-medium text-white/70">
            Solo avanzamos cuando vemos sustento. Si no hay caso sólido, no cobramos nada.
          </p>
        </div>
      </div>
    </section>
  )
}
