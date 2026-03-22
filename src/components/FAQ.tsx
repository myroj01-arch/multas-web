'use client'

import { useState } from 'react'
import { faqContent } from '@/lib/data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        {/* FAQ */}
        <div className="space-y-1">
          {faqContent.map((item, index) => (
            <div key={index} className="bg-white rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
              >
                <span className="text-sm font-medium text-slate-700">
                  {item.pregunta}
                </span>
                <svg
                  className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
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
                <div className="px-5 pb-4">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-3">¿Tienes otra pregunta?</p>
          <a
            href="#contacto"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-200 hover:bg-primary-50 rounded-lg transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}
