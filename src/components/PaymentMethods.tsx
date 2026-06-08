'use client'

export default function PaymentMethods() {
  const phoneNumber = '3156769443'

  return (
    <section id="pagos" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Métodos de pago
          </h2>
          <p className="text-lg text-slate-500">
            Paga por Nequi y envía el comprobante por WhatsApp.
          </p>
        </div>

        {/* Nequi QR */}
        <div className="flex justify-center mb-8">
          <div className="p-6 rounded-xl border bg-pink-50 border-pink-100 flex flex-col items-center">
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${phoneNumber}`}
              alt="QR Nequi"
              className="w-36 h-36 rounded-lg border-2 border-white shadow-sm mb-4"
            />
            <div className="text-sm font-semibold text-slate-700 mb-1">Nequi</div>
            <div className="text-lg font-bold text-slate-900">{phoneNumber}</div>
          </div>
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
