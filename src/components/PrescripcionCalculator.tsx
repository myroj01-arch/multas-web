'use client'

import { useState } from 'react'

export function PrescripcionCalculator(): JSX.Element {
  const [fechaComparendo, setFechaComparendo] = useState('')
  const [resultado, setResultado] = useState<{
    prescrita: boolean
    anosTranscurridos: number
    anosRestantes: number
    fechaPrescripcion: string
  } | null>(null)

  const calcularPrescripcion = (): void => {
    if (!fechaComparendo) return

    const fecha = new Date(fechaComparendo)
    const hoy = new Date()
    
    // 6 años desde la fecha del comparendo (plazo máximo)
    const fechaPrescripcion = new Date(fecha)
    fechaPrescripcion.setFullYear(fechaPrescripcion.getFullYear() + 6)
    
    const diffTime = hoy.getTime() - fecha.getTime()
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365)
    
    const prescrita = hoy >= fechaPrescripcion
    const anosTranscurridos = Math.round(diffYears * 10) / 10
    const anosRestantes = prescrita ? 0 : Math.round((fechaPrescripcion.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24 * 365) * 10) / 10

    setResultado({
      prescrita,
      anosTranscurridos,
      anosRestantes,
      fechaPrescripcion: fechaPrescripcion.toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })
  }

  const fechaMinima = (): string => {
    const fecha = new Date()
    fecha.setFullYear(fecha.getFullYear() - 10)
    return fecha.toISOString().split('T')[0]
  }

  const fechaMaxima = (): string => {
    return new Date().toISOString().split('T')[0]
  }

  return (
    <section id="prescripcion" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Calculadora de Prescripción
          </h2>
          <p className="text-lg text-slate-500">
            Ingresa la fecha de tu comparendo y verifica si tu multa ya prescribe (6 años máximo).
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-6">
            <label htmlFor="fechaComparendo" className="block text-sm font-semibold text-slate-700 mb-2">
              Fecha del comparendo *
            </label>
            <input
              type="date"
              id="fechaComparendo"
              value={fechaComparendo}
              onChange={(e) => {
                setFechaComparendo(e.target.value)
                setResultado(null)
              }}
              min={fechaMinima()}
              max={fechaMaxima()}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <button
            onClick={calcularPrescripcion}
            disabled={!fechaComparendo}
            className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
          >
            Calcular Prescripción
          </button>

          {/* Result */}
          {resultado && (
            <div className={`mt-6 p-6 rounded-lg ${resultado.prescrita ? 'bg-green-50 border-2 border-green-200' : 'bg-yellow-50 border-2 border-yellow-200'}`}>
              {resultado.prescrita ? (
                <div className="text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Tu multa HA PRESCRITO
                  </h3>
                  <p className="text-green-700">
                    Han pasado <strong>{resultado.anosTranscurridos} años</strong> desde tu comparendo.
                    El término de prescripción de 6 años ya vencido.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-2">⏳</div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">
                    Tu multa aún NO HA PRESCRITO
                  </h3>
                  <p className="text-yellow-700">
                    Han pasado <strong>{resultado.anosTranscurridos} años</strong>. 
                    Faltan <strong>{resultado.anosRestantes} años</strong> para la prescripción.
                  </p>
                  <p className="text-sm text-yellow-600 mt-2">
                    Fecha de prescripción: <strong>{resultado.fechaPrescripcion}</strong>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Info SIMIT */}
          <div className="mt-6 p-5 bg-primary-50 border border-primary-200 rounded-lg">
            <p className="text-sm text-primary-700 mb-3">
              <strong>Consulta tus multas directamente en el SIMIT:</strong>
            </p>
            <a 
              href="https://www.fcm.org.co/simit/#/home-public" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-center rounded-lg transition">
              🔍 Consultar multas en SIMIT
            </a>
            <p className="text-xs text-primary-600 mt-2 text-center">
              Ingresa tu número de documento y ve todas tus multas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
