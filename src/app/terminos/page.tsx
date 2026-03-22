import Link from 'next/link'

export const metadata = {
  title: 'Términos y Condiciones | Expertos en Multas de Tránsito',
  description: 'Términos y condiciones del servicio de multas de tránsito en Colombia.',
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary-700">
            Expertos en Multas de Tránsito <span className="font-light text-slate-500">— Asesoría Legal Integral</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Términos y Condiciones
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Aceptación de los términos</h2>
            <p className="text-slate-600 mb-4">
              Al acceder y utilizar los servicios de Expertos en Multas de Tránsito, usted acepta cumplir y estar sujeto a los presentes términos y condiciones. Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestros servicios.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Descripción del servicio</h2>
            <p className="text-slate-600 mb-4">
              Expertos en Multas de Tránsito ofrece un servicio de evaluación de viabilidad jurídica y gestión de procesos relacionados con multas de tránsito en Colombia. El servicio incluye:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Diagnóstico inicial sin costo:</strong> Revisión preliminar de la situación del usuario para determinar si existe sustento jurídico para avanzar.</li>
              <li><strong>Gestión de multas:</strong> Tramitación formal ante las autoridades de tránsito competentes por un valor de $150.000 COP por cada multa gestionada.</li>
              <li><strong>Gestión de casos de alcoholemia:</strong> Servicio especializado con precio a acordar directamente con el cliente según la complejidad del caso.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Diagnóstico inicial</h2>
            <p className="text-slate-600 mb-4">
              El diagnóstico inicial es completamente gratuito y tiene carácter informativo. Este diagnóstico no constituye representación legal ni garantiza un resultado favorable. Su propósito es orientar al usuario sobre la viabilidad potencial de su caso.
            </p>
            <p className="text-slate-600 mb-4">
              El diagnóstico gratuito no genera obligación de pago ni compromiso de representación legal. El usuario puede solicitar el diagnóstico sin comprometerse a contratar el servicio de gestión.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Precios y forma de pago</h2>
            <p className="text-slate-600 mb-4">
              <strong>Gestión de multas de tránsito:</strong> $150.000 COP por cada multa tramitada. Este valor incluye análisis jurídico, preparación del expediente, radicación ante la autoridad competente y seguimiento hasta resolución.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Casos de alcoholemia:</strong> El precio se acuerda directamente con el cliente después de la revisión inicial, según la complejidad particular de cada caso.
            </p>
            <p className="text-slate-600 mb-4">
              El pago se realiza únicamente después de que el cliente confirme que desea avanzar con la gestión y acepte expresamente los términos del servicio.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Compromiso de no cobro sin sustento</h2>
            <p className="text-slate-600 mb-4">
              Si después de la revisión del caso determinamos que no existe sustento jurídico razonable para avanzar, no cobraremos el servicio. Esta política aplica para el diagnóstico inicial (que es gratuito) y para la decisión de avanzar con la gestión.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Importante:</strong> La ausencia de cobro en casos sin sustento no implica una admisión de error por parte de la autoridad de tránsito ni garantiza resultados en casos futuros similares.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Limitación de responsabilidad</h2>
            <p className="text-slate-600 mb-4">
              Expertos en Multas de Tránsito no garantiza resultados específicos en ningún caso. Los procesos de tránsito están sujetos a la valoración de las autoridades competentes y escapan a nuestro control directo.
            </p>
            <p className="text-slate-600 mb-4">
              No somos responsables por decisiones desfavorables de las autoridades de tránsito, retrasos en los procesos administrativos, cambios en la normatividad vigente, o cualquier consecuencia derivada de la información inexacta o incompleta proporcionada por el usuario.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Obligaciones del usuario</h2>
            <p className="text-slate-600 mb-4">El usuario se compromete a:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Proporcionar información veraz, completa y actualizada sobre su caso.</li>
              <li>Entregar oportunamente los documentos requeridos para la gestión.</li>
              <li>Realizar los pagos acordados en los plazos establecidos.</li>
              <li>Mantener comunicación activa durante el proceso.</li>
              <li>Informar cualquier cambio en su situación que pueda afectar el caso.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Propiedad intelectual</h2>
            <p className="text-slate-600 mb-4">
              Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de Expertos en Multas de Tránsito o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual colombianas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">9. Modificaciones</h2>
            <p className="text-slate-600 mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor desde su publicación en el sitio web. Se recomienda revisar periódicamente esta página para estar al tanto de cualquier modificación.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">10. Ley aplicable</h2>
            <p className="text-slate-600 mb-4">
              Estos términos y condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia derivada de la interpretación o ejecución de estos términos será sometida a los jueces competentes de Colombia.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">11. Contacto</h2>
            <p className="text-slate-600 mb-4">
              Para cualquier consulta relacionada con estos términos y condiciones, puede contactarnos a través de:
            </p>
            <ul className="list-none text-slate-600 space-y-2">
              <li><strong>Email:</strong> shaggy6685@gmail.com</li>
              <li><strong>WhatsApp:</strong> +57 315 676 9443</li>
            </ul>
          </section>
        </div>

        {/* Navegación */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
          <Link
            href="/privacidad"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            ← Política de Privacidad
          </Link>
          <span className="hidden sm:block text-slate-300">|</span>
          <Link
            href="/"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Volver al inicio →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Expertos en Multas de Tránsito — Asesoría Legal Integral. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
