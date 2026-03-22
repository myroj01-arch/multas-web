'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/data'
import BrandLogo from './BrandLogo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <BrandLogo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#como-funciona" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Cómo funciona</a>
            <a href="#casos" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Casos</a>
            <a href="#faq" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Preguntas</a>
            <a href="#pagos" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Pagos</a>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-500 hover:text-slate-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-3 space-y-1">
            <a href="#como-funciona" onClick={() => setIsOpen(false)} className="block text-sm text-slate-600 py-2">Cómo funciona</a>
            <a href="#casos" onClick={() => setIsOpen(false)} className="block text-sm text-slate-600 py-2">Casos</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block text-sm text-slate-600 py-2">Preguntas</a>
            <a href="#pagos" onClick={() => setIsOpen(false)} className="block text-sm text-slate-600 py-2">Pagos</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="block text-sm text-slate-600 py-2">Contacto</a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg mt-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
