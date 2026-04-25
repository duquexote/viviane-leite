import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WaIcon } from './WaIcon'
import { waLink } from '../lib/wa'

const TREATMENTS = [
  { to: '/assimetria-craniana-e-torcicolo', label: 'Assimetria Craniana e Torcicolo' },
  { to: '/consultoria-do-sono',            label: 'Consultoria do Sono' },
  { to: '/intervencao-precoce',            label: 'Intervenção Precoce' },
]

const SECTION_LINKS = [
  { href: '/#sobre',    label: 'Sobre Mim' },
  { href: '/#problema', label: 'Assimetria' },
  { href: '/#processo', label: 'Como funciona' },
  { href: '/#faq',      label: 'FAQ' },
]

const MOBILE_SECTION_LINKS = [
  { href: '/#sobre',    label: 'Sobre a Dra. Viviane' },
  { href: '/#problema', label: 'Assimetria Craniana' },
  { href: '/#processo', label: 'Como funciona' },
  { href: '/#faq',      label: 'Perguntas Frequentes' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/94 backdrop-blur-[12px] border-b border-border">
        <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,56px)] flex items-center justify-between h-[68px]">
          {/* Brand */}
          <Link to="/" className="flex items-center">
            <img src="/logo-horizontal.svg" alt="Viviane Leite — fisioterapia pediátrica" className="h-12" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-7 text-sm text-ink-mid font-medium items-center">
            {SECTION_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="tracking-[0.01em] hover:text-sage-dark transition-colors"
              >
                {label}
              </a>
            ))}

            {/* Tratamentos dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 tracking-[0.01em] hover:text-sage-dark transition-colors bg-transparent border-none cursor-pointer text-sm font-medium text-ink-mid p-0">
                Tratamentos
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-y-px" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 z-50">
                <div className="bg-white border border-border shadow-[0_8px_32px_rgba(26,46,37,.12)] rounded-lg p-2 min-w-[272px]">
                  {TREATMENTS.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className="block px-4 py-2.5 rounded-md text-[13.5px] font-medium text-ink-mid hover:bg-sage-pale hover:text-sage-dark transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={waLink('geral')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-sage text-white shadow-[0_4px_18px_rgba(122,158,142,.32)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            <WaIcon size={15} /> Agendar
          </a>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label="Abrir menu"
          >
            <span className="block w-[22px] h-0.5 bg-ink rounded-sm" />
            <span className="block w-[22px] h-0.5 bg-ink rounded-sm" />
            <span className="block w-[22px] h-0.5 bg-ink rounded-sm" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="fixed top-[68px] left-0 right-0 bg-white border-t border-border shadow-[0_8px_32px_rgba(26,46,37,.10)] z-40 p-5 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-68px)]">
          {MOBILE_SECTION_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-ink-soft font-medium hover:bg-sage-pale hover:text-sage-dark transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="border-t border-border mt-2 pt-3">
            <p className="px-4 text-[11px] tracking-[0.14em] uppercase text-ink-soft font-semibold mb-1">
              Tratamentos
            </p>
            {TREATMENTS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-ink-soft font-medium hover:bg-sage-pale hover:text-sage-dark transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <a
            href={waLink('geral')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-sage text-white"
          >
            <WaIcon size={15} /> Agendar Avaliação pelo WhatsApp
          </a>
        </nav>
      )}
    </>
  )
}
