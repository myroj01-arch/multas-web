'use client'

import { casosPruebaSocial } from '@/lib/data'

export default function SocialProof() {
  return (
    <section id="casos" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="text-sm font-semibold text-white/40 uppercase tracking-wider">Casos de éxito</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-4">
            Resultados documentados
          </h2>
          <p className="text-xl text-white/50">
            Solo avanzamos cuando vemos sustento jurídico y documental.
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {casosPruebaSocial.map((caso, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-sm font-bold text-black">{caso.inicial}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">{caso.ciudad}</span>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-lg">
                  {caso.resultado}
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{caso.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Nota */}
        <p className="mt-10 text-center text-sm text-white/30">
          Cada resultado respaldado por resolución o acto administrativo de la autoridad de tránsito.
        </p>
      </div>
    </section>
  )
}
