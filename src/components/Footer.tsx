import Link from 'next/link'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold mb-2 tracking-tight">EXPERTOS EN MULTAS DE TRÁNSITO</div>
            <div className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Asesoría Legal Integral</div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Evaluamos tu multa sin costo. Si hay sustento, gestionamos tu caso.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
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
            <h4 className="text-sm font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.telefono}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Colombia
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-xs text-slate-400">Gestión: <span className="text-white font-semibold">$150.000 COP</span></div>
              <div className="text-xs text-slate-400">Alcoholemia: <span className="text-white font-semibold">a acordar</span></div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Expertos en Multas de Tránsito
              </p>
              <span className="text-slate-700">·</span>
              <p className="text-sm text-slate-500 italic">
                "Evaluamos tu multa sin costo. Si hay sustento, la gestionamos."
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
              <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
