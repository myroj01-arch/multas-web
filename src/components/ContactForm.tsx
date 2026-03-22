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
    nombre: '',
    ciudad: '',
    tipoMulta: '',
    numeroComparendo: '',
    telefono: '',
    email: '',
    descripcion: '',
    nivelAlcoholemia: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const whatsappMessage = `Hola! Quiero que revisen mi caso.

Nombre: ${formData.nombre || 'No proporcionado'}
Ciudad: ${formData.ciudad || 'No proporcionada'}
Tipo de multa: ${formData.tipoMulta || 'No proporcionado'}
Comparendo: ${formData.numeroComparendo || 'No proporcionado'}
Descripción: ${formData.descripcion || 'No proporcionada'}`

  if (submitted) {
    return (
      <section id="contacto" className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            ¡Solicitud recibida!
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Hemos recibido tu información. En las próximas 24 a 48 horas nos pondremos en contacto contigo para revisar tu caso.
          </p>
          <div className="p-4 bg-primary-50 rounded-xl">
            <p className="text-sm text-primary-800">
              <strong>Recuerda:</strong> El diagnóstico inicial es completamente gratis. Solo cobramos si hay sustento jurídico para avanzar y tú decides continuar.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Solicita tu diagnóstico gratis
          </h2>
          <p className="text-lg text-slate-600">
            Completa el formulario y te responderemos en 24 a 48 horas con nuestra evaluación.
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo como aparece en tu cédula"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            {/* Ciudad y Tipo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="ciudad" className="block text-sm font-medium text-slate-700 mb-2">
                  Ciudad / Municipio *
                </label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  required
                  placeholder="Ejemplo: Cali, Bogotá, Medellín"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="tipoMulta" className="block text-sm font-medium text-slate-700 mb-2">
                  Tipo de multa *
                </label>
                <select
                  id="tipoMulta"
                  name="tipoMulta"
                  value={formData.tipoMulta}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Selecciona el tipo</option>
                  <option value="comparendo">Comparendo de tránsito</option>
                  <option value="fotomulta">Fotomulta</option>
                  <option value="reincidencia">Reincidencia</option>
                  <option value="alcoholemia">Alcoholemia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            {/* Número comparendo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="numeroComparendo" className="block text-sm font-medium text-slate-700 mb-2">
                  Número de comparendo o resolución
                </label>
                <input
                  type="text"
                  id="numeroComparendo"
                  name="numeroComparendo"
                  value={formData.numeroComparendo}
                  onChange={handleChange}
                  placeholder="Ejemplo: 123456789 o RES-2024-001"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono de contacto *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="300 123 4567"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            {/* Descripción */}
            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-slate-700 mb-2">
                Describe brevemente tu situación *
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Cuéntanos qué pasó, qué multa tienes y si ya radicaste algún recurso. Entre más detalles, mejor podemos evaluar tu caso."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
              />
            </div>

            {/* Campo adicional para alcoholemia */}
            {formData.tipoMulta === 'alcoholemia' && (
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <label htmlFor="nivelAlcoholemia" className="block text-sm font-medium text-amber-800 mb-2">
                  Nivel de alcoholemia reportado (si lo conoces)
                </label>
                <input
                  type="text"
                  id="nivelAlcoholemia"
                  name="nivelAlcoholemia"
                  value={formData.nivelAlcoholemia}
                  onChange={handleChange}
                  placeholder="Ejemplo: 40 mg/100 ml"
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
                <p className="mt-2 text-sm text-amber-700">
                  <strong>Nota:</strong> Para casos de alcoholemia, el precio del servicio se acuerda directamente contigo después de la revisión inicial (gratis).
                </p>
              </div>
            )}

            {/* Disclaimer */}
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600">
                <strong>Importante:</strong> Al enviar este formulario aceptas que realicemos una revisión inicial de tu caso sin costo. El envío no genera obligación de pago ni compromiso de representación legal.
              </p>
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-lg shadow-primary-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Solicitar diagnóstico gratis'
              )}
            </button>
          </form>

          {/* Alternativa WhatsApp */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 mb-3">
              O también puedes escribirnos directamente por WhatsApp:
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
