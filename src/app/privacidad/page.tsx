import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidad | Gestión Multas Colombia',
  description: 'Política de privacidad y protección de datos personales de Gestión Multas Colombia.',
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary-700">
            Gestión Multas <span className="font-light text-slate-500">Colombia</span>
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
          Política de Privacidad
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Responsable del tratamiento</h2>
            <p className="text-slate-600 mb-4">
              <strong>Gestión Multas Colombia</strong>, identificado con email de contacto <strong>shaggy6685@gmail.com</strong>, es el responsable del tratamiento de sus datos personales.
            </p>
            <p className="text-slate-600 mb-4">
              Nos comprometemos a proteger su privacidad y a tratar sus datos personales de accordance con la normativa colombiana de protección de datos, en particular la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normatividad que los adicione, modifique o complemente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Datos personales que recopilamos</h2>
            <p className="text-slate-600 mb-4">
              Recopilamos los siguientes datos personales cuando usted utiliza nuestros servicios o se comunica con nosotros:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Nombre completo</strong> - Para identificarlo y generar la documentación del caso.</li>
              <li><strong>Número de documento de identidad (cédula)</strong> - Para identificarlo ante las autoridades de tránsito.</li>
              <li><strong>Ciudad y municipio</strong> - Para determinar la autoridad de tránsito competente.</li>
              <li><strong>Tipo de multa o comparendo</strong> - Para evaluar la viabilidad del caso.</li>
              <li><strong>Número de comparendo o resolución</strong> - Para acceder al expediente.</li>
              <li><strong>Teléfono de contacto</strong> - Para comunicarnos con usted durante el proceso.</li>
              <li><strong>Correo electrónico</strong> - Para enviar notificaciones y actualizaciones.</li>
              <li><strong>Descripción de los hechos</strong> - Para evaluar la viabilidad jurídica del caso.</li>
              <li><strong>Información sobre vehículos</strong> (placa) - Para identificar el bien inmovilizado o relacionado con la multa.</li>
            </ul>
            <p className="text-slate-600">
              En casos de alcoholemia, podemos recopilar información adicional sobre el nivel reportado, el procedimiento de retención y otros datos relevantes para la defensa.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Finalidad del tratamiento</h2>
            <p className="text-slate-600 mb-4">
              Sus datos personales son recopilados y tratados para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Evaluar la viabilidad jurídica de su caso de multa de tránsito.</li>
              <li>Gestionar trámites y procesos ante las autoridades de tránsito competentes.</li>
              <li>Comunicarnos con usted para informar sobre el estado de su caso.</li>
              <li>Enviar notificaciones sobre actualizaciones, requerimientos o resultados.</li>
              <li>Gestionar pagos y facturación de nuestros servicios.</li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
              <li>Mantener registros históricos de casos tramitados (opcional, con su consentimiento).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Derechos del titular</h2>
            <p className="text-slate-600 mb-4">
              Como titular de sus datos personales, usted tiene los siguientes derechos:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Conocer</strong> sus datos personales que son objeto de tratamiento.</li>
              <li><strong>Actualizar</strong> y rectificar sus datos personales cuando estén incompletos o inexactos.</li>
              <li><strong>Solicitar prueba</strong> de la autorización otorgada para el tratamiento de sus datos.</li>
              <li><strong>Revocar</strong> la autorización cuando el tratamiento no respete los principios legales.</li>
              <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio si cree que sus derechos fueron vulnerados.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Para ejercer cualquiera de estos derechos, puede contactarnos a través de los canales indicados al final de esta política.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Autorización</h2>
            <p className="text-slate-600 mb-4">
              Al proporcionar sus datos personales a través de nuestro sitio web, formulario de contacto o comunicación directa, usted autoriza expresamente a Gestión Multas Colombia para el tratamiento de sus datos personales de acuerdo con las finalidades descritas en esta política.
            </p>
            <p className="text-slate-600 mb-4">
              La autorización será recopilada de manera previa, expresa e informada, cumpliendo con los requisitos establecidos en la Ley 1581 de 2012.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Medidas de seguridad</h2>
            <p className="text-slate-600 mb-4">
              Implementamos medidas técnicas, administrativas y físicas apropiadas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o destrucción. Estas medidas incluyen, entre otras:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Uso de conexiones seguras (HTTPS) en nuestro sitio web.</li>
              <li>Almacenamiento seguro de documentos y datos.</li>
              <li>Restricción de acceso a datos personales solo a personal autorizado.</li>
              <li>Capacitación de nuestro equipo en protección de datos.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Compartición de datos</h2>
            <p className="text-slate-600 mb-4">
              Sus datos personales pueden ser compartidos con:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Autoridades de tránsito</strong> - Para radicar y gestionar su caso ante los organismos competentes.</li>
              <li><strong>Entidades judiciales</strong> - Cuando sea requerido por ley o resolución judicial.</li>
              <li><strong>Proveedores de servicios</strong> - Empresas que nos ayudan a prestar el servicio (procesamiento de pagos, hosting, etc.), bajo estrictos acuerdos de confidencialidad.</li>
            </ul>
            <p className="text-slate-600">
              No vendemos, alquilamos ni compartimos sus datos personales con terceros para fines de marketing sin su consentimiento expreso.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Retención de datos</h2>
            <p className="text-slate-600 mb-4">
              Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en esta política. Los criterios utilizados para determinar los períodos de retención incluyen:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>La duración de la relación contractual y la gestión de su caso.</li>
              <li>Las obligaciones legales de conservación de documentación.</li>
              <li>Los plazos de prescripción aplicables a acciones legales relacionadas.</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Una vez finalizado el período de retención, sus datos serán eliminados de forma segura o anonimizados de acuerdo con nuestras políticas internas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">9. Uso de cookies</h2>
            <p className="text-slate-600 mb-4">
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el uso del sitio y personalizar contenido. Las cookies son pequeños archivos que se almacenan en su dispositivo.
            </p>
            <p className="text-slate-600 mb-4">
              Puede configurar su navegador para rechazar cookies; sin embargo, esto podría afectar la funcionalidad de algunas partes del sitio.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">10. Menores de edad</h2>
            <p className="text-slate-600 mb-4">
              Nuestros servicios no están dirigidos a menores de edad. No recopilamos intencionalmente datos personales de menores. Si descubrimos que hemos recopilado datos de un menor sin verificación de consentimiento parental, tomaremos medidas para eliminar esa información lo antes posible.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">11. Cambios a esta política</h2>
            <p className="text-slate-600 mb-4">
              Podemos actualizar esta política de privacidad periódicamente. Cualquier cambio será publicado en esta página con la fecha de "última actualización" modificada.
            </p>
            <p className="text-slate-600 mb-4">
              Le recomendamos revisar esta política regularmente para estar informado sobre cómo protegemos su información.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">12. Contacto</h2>
            <p className="text-slate-600 mb-4">
              Si tiene preguntas, comentarios o solicitudes relacionadas con esta política de privacidad o el tratamiento de sus datos personales, puede contactarnos:
            </p>
            <div className="bg-slate-100 rounded-xl p-6">
              <p className="text-slate-700 mb-2">
                <strong>Email:</strong> shaggy6685@gmail.com
              </p>
              <p className="text-slate-700 mb-2">
                <strong>WhatsApp:</strong> +57 315 676 9443
              </p>
              <p className="text-slate-600 text-sm mt-4">
                Responderemos a su solicitud en los plazos establecidos por la ley.
              </p>
            </div>
          </section>
        </div>

        {/* Navegación */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            ← Volver al inicio
          </Link>
          <span className="hidden sm:block text-slate-300">|</span>
          <Link
            href="/terminos"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Términos y Condiciones →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Gestión Multas Colombia. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
