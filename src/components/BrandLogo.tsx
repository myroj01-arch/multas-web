'use client'

export default function BrandLogo({ className = 'h-10' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo mark */}
      <svg
        width="48"
        height="40"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Blue gradient background */}
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="scalesGradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>

        {/* Background rectangle */}
        <rect width="48" height="40" rx="6" fill="url(#logoGradient)" />

        {/* Hexagon */}
        <path
          d="M24 7L32.5 12V20L24 25L15.5 20V12L24 7Z"
          fill="white"
          fillOpacity="0.95"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Scales icon */}
        <g stroke="url(#scalesGradient)" strokeWidth="1.5" strokeLinecap="round" fill="none">
          {/* Center pole */}
          <line x1="24" y1="11" x2="24" y2="21" />
          {/* Horizontal beam */}
          <line x1="18" y1="14" x2="30" y2="14" />
          {/* Left pan */}
          <path d="M18 14 L16 17 L20 17 Z" strokeLinejoin="round" />
          {/* Right pan */}
          <path d="M30 14 L28 17 L32 17 Z" strokeLinejoin="round" />
          {/* Base */}
          <line x1="21" y1="21" x2="27" y2="21" />
        </g>
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm md:text-base font-bold text-primary-700 tracking-tight">
          EXPERTOS EN MULTAS DE TRÁNSITO
        </span>
        <span className="text-xs text-slate-500 font-medium tracking-wide">
          ASESORÍA LEGAL INTEGRAL
        </span>
      </div>
    </div>
  )
}
