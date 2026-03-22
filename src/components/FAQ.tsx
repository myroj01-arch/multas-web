'use client'

import { useState } from 'react'
import { faqContent } from '@/lib/data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-slate-600">
            Resolvemos las dudas más comunes sobre nuestro servicio.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {faqContent.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900">
                  {item.pregunta}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">
                    {item.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-6 bg-primary-50 rounded-xl">
          <p className="text-slate-600 mb-4">
            ¿Tienes otra pregunta? Escríbenos directamente.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-primary-700 bg-white hover:bg-primary-50 rounded-lg transition-colors shadow-sm"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
