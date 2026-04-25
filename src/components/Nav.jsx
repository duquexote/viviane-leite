import { useState } from 'react'
import { WaIcon } from './WaIcon'
import { waLink } from '../lib/wa'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/94 backdrop-blur-[12px] border-b border-border">
        <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,56px)] flex items-center justify-between h-[68px]">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 font-head text-[20px] tracking-[-0.01em] font-semibold text-ink">
            <span
              className="w-7 h-7 rounded-full bg-sage relative shrink-0"
              style={{}}
              aria-hidden="true"
            >
              <span className="absolute inset-[6px_4px_12px_8px] bg-white rounded-[50%_50%_40%_50%]" />
            </span>
            Viviane Leite{' '}
            <em className="not-italic font-normal text-ink-soft text-[13px] font-body tracking-[0.02em]">
              — fisioterapia pediátrica
            </em>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-7 text-sm text-ink-mid font-medium">
            {['#sobre', '#problema', '#servicos', '#processo', '#faq'].map((href, i) => (
              <a
                key={href}
                href={href}
                className="tracking-[0.01em] hover:text-sage-dark transition-colors"
              >
                {['Sobre Mim', 'Assimetria', 'Tratamentos', 'Como funciona', 'FAQ'][i]}
              </a>
            ))}
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
        <nav className="fixed top-[68px] left-0 right-0 bg-white border-t border-border shadow-[0_8px_32px_rgba(26,46,37,.10)] z-49 p-5 flex flex-col gap-1">
          {['#sobre', '#problema', '#servicos', '#diferenciais', '#processo', '#faq'].map((href, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-ink-soft font-medium hover:bg-sage-pale hover:text-sage-dark transition-colors"
            >
              {['Sobre a Dra. Viviane', 'Assimetria Craniana', 'Tratamentos', 'Diferenciais', 'Como funciona', 'Perguntas Frequentes'][i]}
            </a>
          ))}
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
