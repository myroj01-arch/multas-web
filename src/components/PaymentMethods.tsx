'use client'

export default function PaymentMethods() {
  const phoneNumber = '3156769443'
  const methods = [
    { nombre: 'Nequi', numero: phoneNumber, color: 'bg-pink-50 border-pink-100', text: 'text-pink-600', qr: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${phoneNumber}` },
    { nombre: 'Bancolombia', numero: phoneNumber, color: 'bg-yellow-50 border-yellow-100', text: 'text-yellow-600', qr: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${phoneNumber}` },
    { nombre: 'Daviplata', numero: phoneNumber, color: 'bg-red-50 border-red-100', text: 'text-red-600', qr: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${phoneNumber}` },
    { nombre: 'Llave Bre-B', numero: phoneNumber, color: 'bg-blue-50 border-blue-100', text: 'text-blue-600', qr: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${phoneNumber}` },
  ]

  return (
    <section id="pagos" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Métodos de pago
          </h2>
          <p className="text-lg text-slate-500">
            Escanea el código QR o copia el número para realizar tu pago.
          </p>
        </div>

        {/* Payment methods grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {methods.map((method) => (
            <div key={method.nombre} className={`p-5 rounded-lg border ${method.color} flex flex-col items-center`}>
              <div className="mb-3">
                <img 
                  src={method.qr} 
                  alt={`QR ${method.nombre}`}
                  className="w-28 h-28 rounded-lg border-2 border-white shadow-sm"
                />
              </div>
              <div className="text-sm font-semibold text-slate-700 mb-1">{method.nombre}</div>
              <div className="text-base font-bold text-slate-900">{method.numero}</div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="bg-slate-50 rounded-lg p-5">
          <p className="text-sm text-slate-500">
            <strong className="text-slate-700">Importante:</strong> Envía el comprobante por WhatsApp al <strong>315 676 9443</strong> incluyendo tu nombre y número de comparendo.
          </p>
        </div>

        {/* WhatsApp */}
        <div className="mt-5 text-center">
          <a
            href="https://wa.me/573156769443?text=Hola,%20acabo%20de%20realizar%20el%20pago.%20Adjunto%20comprobante."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            Enviar comprobante por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
