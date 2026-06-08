'use client'

import { heroContent, siteConfig } from '@/lib/data'
import { useState } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Hero() {
  const [variant, setVariant] = useState<'A' | 'B'>('A')
  const content = variant === 'A' ? heroContent.variantA : heroContent.variantB

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-50/50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Variante A/B Toggle */}
        <div className="inline-flex items-center gap-2 p-1 bg-slate-100/80 backdrop-blur-sm rounded-full mb-8">
          <button
            onClick={() => setVariant('A')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              variant === 'A' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Variante A
          </button>
          <button
            onClick={() => setVariant('B')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              variant === 'B' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Variante B
          </button>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-full mb-8 border border-green-100">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Diagnóstico inicial sin costo
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.05]">
          {content.titulo}
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.subtitulo}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5"
          >
            {content.cta}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2 text-green-600" />
            WhatsApp
          </a>
        </div>

        {/* Texto secundario */}
        <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          {content.textoSecundario}
        </p>

        {/* Disclaimer alcoholemia */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50/80 text-amber-700 text-sm rounded-xl border border-amber-100">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Para casos de alcoholemia, el precio se acuerda directamente con el cliente.
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-2">
          <div className="px-6 py-6 text-center rounded-xl hover:bg-slate-50 transition-colors">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">19+</div>
            <div className="text-sm text-slate-500">Casos documentados</div>
          </div>
          <div className="px-6 py-6 text-center rounded-xl hover:bg-slate-50 transition-colors border-x border-slate-100">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">$150K</div>
            <div className="text-sm text-slate-500">Por multa tramitada</div>
          </div>
          <div className="px-6 py-6 text-center rounded-xl hover:bg-slate-50 transition-colors">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">$0</div>
            <div className="text-sm text-slate-500">Si no hay sustento</div>
          </div>
        </div>
      </div>
    </section>
  )
}
