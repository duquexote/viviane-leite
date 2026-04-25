import { waLink } from '../lib/wa'

const NAV = [
  { href: '#sobre',       label: 'Sobre a Dra. Viviane' },
  { href: '#problema',    label: 'Assimetria craniana' },
  { href: '#servicos',    label: 'Fisioterapia e reposicionamento' },
  { href: '#ortese',      label: 'Órtese Craniana 3D Cmoon' },
  { href: '#faq',         label: 'Perguntas frequentes' },
  { href: '#agendar',     label: 'Agendar avaliação' },
]

export function Footer() {
  return (
    <footer className="bg-[#0f1a28] text-white/65 pt-20 pb-8 text-[14px]">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-[1.3fr_1fr_1fr] md:gap-16">
          {/* Brand */}
          <div>
            <p className="font-head text-[26px] text-white font-semibold mb-4">Viviane Leite</p>
            <p className="max-w-[34ch] leading-[1.65]">
              Fisioterapeuta pediátrica. Especialista em assimetria craniana. Atendimento presencial em Salvador (BA).
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[11px] tracking-[0.14em] uppercase text-sage-light font-semibold mb-5">Navegação</h5>
            <ul className="list-none p-0 m-0 space-y-2">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-white/65 hover:text-sage-light transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[11px] tracking-[0.14em] uppercase text-sage-light font-semibold mb-5">Contato</h5>
            <ul className="list-none p-0 m-0 space-y-2">
              <li>
                <a href={waLink('geral')} target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-sage-light transition-colors">
                  WhatsApp: (71) [ ]
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-sage-light transition-colors">
                  Instagram: @vivianefisio
                </a>
              </li>
              <li className="pt-3.5">
                Salvador (BA)
                <br />
                <span className="text-[13px] text-white/45">Rua das Dálias, 262</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex justify-between gap-4 flex-wrap text-[11.5px] tracking-[0.05em] text-white/38 font-medium">
          <span>© 2025 Viviane Leite Fisioterapia Pediátrica</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  )
}
