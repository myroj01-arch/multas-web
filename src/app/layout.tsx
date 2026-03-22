import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gestión de Multas de Tránsito | Colombia',
  description: 'Evaluamos tu multa de tránsito sin costo. Si encontramos sustento jurídico, gestionamos tu caso por $150.000 COP. Revocatorias, prescripciones y exoneraciones documentadas.',
  keywords: 'multas de tránsito, prescripción, revocatoria, exoneración, comparendos, fotomultas, Colombia',
  openGraph: {
    title: 'Gestión de Multas de Tránsito | Colombia',
    description: 'Evaluamos tu multa sin costo. Si hay sustento, la gestionamos por $150.000 COP.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
