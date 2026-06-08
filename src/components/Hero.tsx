'use client'

import { heroContent, siteConfig } from '@/lib/data'
import { useState } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Hero() {
  const [variant, setVariant] = useState<'A' | 'B'>('A')
  const content = variant === 'A' ? heroContent.variantA : heroContent.variantB

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-black overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Variante A/B Toggle */}
        <div className="inline-flex items-center gap-2 p-1 bg-white/10 backdrop-blur-sm rounded-full mb-8">
          <button
            onClick={() => setVariant('A')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              variant === 'A' 
                ? 'bg-white text-black' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            Variante A
          </button>
          <button
            onClick={() => setVariant('B')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              variant === 'B' 
                ? 'bg-white text-black' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            Variante B
          </button>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Diagnóstico inicial sin costo
        </div>

        {/* Título */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 leading-[1.05]">
          {content.titulo}
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.subtitulo}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-white hover:bg-white/90 rounded-full transition-all hover:scale-105"
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
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/30 hover:border-white/60 rounded-full transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2 text-green-400" />
            WhatsApp
          </a>
        </div>

        {/* Texto secundario */}
        <p className="text-sm text-white/40 max-w-xl mx-auto leading-relaxed">
          {content.textoSecundario}
        </p>

        {/* Disclaimer alcoholemia */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white/60 text-sm rounded-full border border-white/10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Para casos de alcoholemia, el precio se acuerda directamente con el cliente.
        </div>
      </div>

      {/* Stats */}
      <div className="mt-24 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">19+</div>
            <div className="text-sm text-white/50">Casos documentados</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">$150K</div>
            <div className="text-sm text-white/50">Por multa tramitada</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">$0</div>
            <div className="text-sm text-white/50">Si no hay sustento</div>
          </div>
        </div>
      </div>
    </section>
  )
}
