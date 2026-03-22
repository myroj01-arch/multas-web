'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/data'

interface FormData {
  nombre: string
  ciudad: string
  tipoMulta: string
  numeroComparendo: string
  telefono: string
  email: string
  descripcion: string
  nivelAlcoholemia: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '', ciudad: '', tipoMulta: '', numeroComparendo: '', telefono: '', email: '', descripcion: '', nivelAlcoholemia: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <section id="contacto" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Solicitud recibida</h2>
          <p className="text-slate-500 mb-6">
            Te responderemos en 24 a 48 horas. El diagnóstico inicial es gratis.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Solicita tu diagnóstico
          </h2>
          <p className="text-lg text-slate-500">
            Completa el formulario y te responderemos en 24 a 48 horas.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre y Ciudad */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo *</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required
                placeholder="Tu nombre"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Ciudad *</label>
              <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} required
                placeholder="Ej: Cali"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
            </div>
          </div>

          {/* Tipo y Comparendo */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de multa *</label>
              <select name="tipoMulta" value={formData.tipoMulta} onChange={handleChange} required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white">
                <option value="">Selecciona</option>
                <option value="comparendo">Comparendo</option>
                <option value="fotomulta">Fotomulta</option>
                <option value="reincidencia">Reincidencia</option>
                <option value="alcoholemia">Alcoholemia</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">N° Comparendo</label>
              <input type="text" name="numeroComparendo" value={formData.numeroComparendo} onChange={handleChange}
                placeholder="Opcional"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
            </div>
          </div>

          {/* Teléfono y Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono *</label>
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required
                placeholder="300 123 4567"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Opcional"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" />
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Describe tu situación *</label>
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required rows={3}
              placeholder="Cuéntanos brevemente qué pasó y qué multa tienes."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none" />
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-slate-400">
            Al enviar aceptas que realicemos una revisión inicial sin costo. No genera obligación de pago.
          </p>

          {/* Botón */}
          <button type="submit" disabled={isSubmitting}
            className="w-full py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition disabled:opacity-50">
            {isSubmitting ? 'Enviando...' : 'Solicitar diagnóstico gratis'}
          </button>
        </form>

        {/* WhatsApp */}
        <div className="mt-5 text-center">
          <p className="text-sm text-slate-400 mb-2">O escríbenos directo por WhatsApp:</p>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
