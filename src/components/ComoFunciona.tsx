'use client'

import { modeloContent } from '@/lib/data'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-slate-500">
            Un modelo directo y transparente. No escondemos costos.
          </p>
        </div>

        {/* Cards del modelo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          {/* Diagnóstico gratis */}
          <div className="p-6 bg-white border border-slate-100 rounded-lg">
            <div className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wide">Diagnóstico</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">GRATIS</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Para todo tipo de caso. Revisamos tu situación sin costo.
            </p>
          </div>

          {/* Gestión normal */}
          <div className="p-6 bg-primary-600 rounded-lg">
            <div className="text-xs font-semibold text-primary-200 mb-2 uppercase tracking-wide">Gestión multas</div>
            <h3 className="text-base font-bold text-white mb-2">$150.000 COP</h3>
            <p className="text-sm text-primary-100 leading-relaxed">
              Por cada multa tramitada. Análisis, expediente, radicación y seguimiento.
            </p>
          </div>

          {/* Alcoholemia */}
          <div className="p-6 bg-white border border-slate-100 rounded-lg">
            <div className="text-xs font-semibold text-amber-600 mb-2 uppercase tracking-wide">Alcoholemia</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Precio a acordar</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Evaluamos cada caso. Acordamos el precio antes de empezar.
            </p>
          </div>
        </div>

        {/* Compromiso */}
        <div className="text-center p-4 bg-primary-50 rounded-lg">
          <p className="text-sm text-primary-700">
            Solo avanzamos cuando vemos sustento. Si no hay caso sólido, no cobramos nada.
          </p>
        </div>
      </div>
    </section>
  )
}
