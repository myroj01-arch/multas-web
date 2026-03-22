'use client'

import { heroContent, siteConfig } from '@/lib/data'
import { useState } from 'react'

export default function Hero() {
  const [variant, setVariant] = useState<'A' | 'B'>('A')
  const content = variant === 'A' ? heroContent.variantA : heroContent.variantB

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

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
            <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
