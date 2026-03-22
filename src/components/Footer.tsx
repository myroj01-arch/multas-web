import Link from 'next/link'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-base font-bold mb-3">EXPERTOS EN MULTAS DE TRÁNSITO</div>
            <div className="text-xs text-slate-500 mb-3">ASESORÍA LEGAL INTEGRAL</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Evaluamos tu multa sin costo. Si hay sustento, gestionamos tu caso.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#casos" className="hover:text-white transition-colors">Casos</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#alcoholemia" className="hover:text-white transition-colors">Alcoholemia</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas</a></li>
              <li><a href="#pagos" className="hover:text-white transition-colors">Pagos</a></li>
              <li><Link href="/terminos" className="hover:text-white transition-colors">Términos</Link></li>
              <li><Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{siteConfig.telefono}</li>
              <li>{siteConfig.email}</li>
              <li>Colombia</li>
            </ul>
            <div className="mt-4 text-xs text-slate-500">
              <div>Gestión: $150.000 COP</div>
              <div>Alcoholemia: a acordar</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} EXPERTOS EN MULTAS DE TRÁNSITO — ASESORÍA LEGAL INTEGRAL
          </p>
        </div>
      </div>
    </footer>
  )
}
