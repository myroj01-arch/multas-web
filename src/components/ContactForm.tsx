'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/data'
import { WhatsAppIcon } from './WhatsAppIcon'

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitted(true)
    } catch {
      setError('Hubo un error al enviar la solicitud. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="contacto" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Solicitud recibida</h2>
          <p className="text-slate-500 mb-6">
            Te contactaremos pronto. El diagnóstico inicial es gratis.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Solicita tu diagnóstico
          </h2>
          <p className="text-lg text-slate-500">
            Completa tus datos y te contactamos.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo *</label>
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Cédula *</label>
            <input 
              type="text" 
              name="cedula" 
              value={formData.cedula} 
              onChange={handleChange} 
              required
              placeholder="Tu número de cédula"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono *</label>
            <input 
              type="tel" 
              name="telefono" 
              value={formData.telefono} 
              onChange={handleChange} 
              required
              placeholder="300 123 4567"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" 
            />
          </div>

          {/* Disclaimer */}
          {error && (
            <p className="text-sm text-red-600 text-center mb-4">{error}</p>
          )}
          <p className="text-xs text-slate-400 text-center">
            Diagnóstico inicial gratis. Sin compromiso.
          </p>

          {/* Botón */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition disabled:opacity-50">
            {isSubmitting ? 'Enviando...' : 'Solicitar diagnóstico gratis'}
          </button>
        </form>

        {/* WhatsApp */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400 mb-3">O escríbenos directo por WhatsApp:</p>
          <a 
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20gratuito.%20Nombre:%20${encodeURIComponent(formData.nombre || '')}%20C%C3%A9dula:%20${encodeURIComponent(formData.cedula || '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition">
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
