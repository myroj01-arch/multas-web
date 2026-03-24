'use client'

import { heroContent, siteConfig } from '@/lib/data'
import { useState } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Hero(): JSX.Element {
  const [variant, setVariant] = useState<'A' | 'B'>('A')
  const content = variant === 'A' ? heroContent.variantA : heroContent.variantB

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Variante A/B Toggle */}
        <div className="inline-flex items-center gap-2 p-1 bg-slate-100 rounded-full mb-8">
          <button
            onClick={() => setVariant('A')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              variant === 'A' 
                ? 'bg-primary-600 text-white shadow-md' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Variante A
          </button>
          <button
            onClick={() => setVariant('B')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              variant === 'B' 
                ? 'bg-primary-600 text-white shadow-md' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Variante B
          </button>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-8">
          Diagnóstico inicial sin costo
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
          {content.titulo}
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.subtitulo}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
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
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2 text-green-600" />
            WhatsApp
          </a>
        </div>

        {/* Texto secundario */}
        <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          {content.textoSecundario}
        </p>

        {/* Disclaimer alcoholemia */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 text-sm rounded-lg">
          Para casos de alcoholemia, el precio se acuerda directamente con el cliente.
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-3 gap-px bg-slate-100 max-w-3xl mx-auto">
        <div className="bg-white px-6 py-8 text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">19+</div>
          <div className="text-sm text-slate-500">Casos documentados</div>
        </div>
        <div className="bg-white px-6 py-8 text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">$150K</div>
          <div className="text-sm text-slate-500">Por multa tramitada</div>
        </div>
        <div className="bg-white px-6 py-8 text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">$0</div>
          <div className="text-sm text-slate-500">Si no hay sustento</div>
        </div>
      </div>
    </section>
  )
}
