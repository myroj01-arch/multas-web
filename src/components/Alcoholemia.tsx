'use client'

import { siteConfig } from '@/lib/data'

export default function Alcoholemia() {
  return (
    <section id="alcoholemia" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full mb-4">
            Sección especial
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            ¿Caso de alcoholemia?
          </h2>
          <p className="text-lg text-slate-500">
            Sí, trabajamos casos de alcoholemia. Evaluamos tu situación y acordamos el precio.
          </p>
        </div>

        {/* Info */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">¿Qué evaluamos?</h3>
          <ul className="space-y-2">
            {[
              'Si la prueba fue aplicada por personal certificado',
              'Si se respetaron los protocolos del Código Nacional de Tránsito',
              'Si hubo errores en el procedimiento',
              'Si hay causales de defensa aplicables',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-amber-700">
            <strong>Nota:</strong> El precio se acuerda después de la revisión inicial (gratis). No prometemos ganar todos los casos.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20tengo%20un%20caso%20de%20alcoholemia%20y%20quiero%20que%20lo%20revisen.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors"
          >
            Revisar mi caso
          </a>
        </div>
      </div>
    </section>
  )
}
