import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

const CARDS = [
  {
    to: '/assimetria-craniana-e-torcicolo',
    tag: 'Especialidade principal',
    badge: '0 — 18 meses',
    title: 'Assimetria Craniana e Torcicolo Congênito',
    desc: 'Diagnóstico preciso e tratamento especializado para as duas condições mais comuns nos primeiros meses de vida — com escaneamento 3D e plano individualizado.',
  },
  {
    to: '/intervencao-precoce',
    tag: 'Desenvolvimento infantil',
    badge: '0 — 3 anos',
    title: 'Estimulação Precoce',
    desc: 'Acompanhamento especializado para bebês e crianças com atraso ou risco de atraso no desenvolvimento neuropsicomotor — com participação ativa da família.',
  },
  {
    to: '/consultoria-do-sono',
    tag: 'Para a família toda',
    badge: '0 — 5 anos',
    title: 'Consultoria do Sono',
    desc: 'Orientação especializada para construir rotinas de sono saudáveis e autônomas, respeitando o ritmo e a fase do seu bebê — sem métodos rígidos.',
  },
]

export function Tratamentos() {
  return (
    <section id="tratamentos" className="py-[clamp(72px,10vw,140px)] border-t border-border bg-sage-pale">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        <div className="mb-14">
          <span className="block text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold mb-[18px]">
            TODAS AS NOSSAS ESPECIALIDADES
          </span>
          <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold">
            Mais do que assimetria craniana.{' '}
            <em className="italic text-sage font-medium">Cuidado integral para o bebê.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded overflow-hidden">
          {CARDS.map(({ to, tag, badge, title, desc }) => (
            <Reveal key={to}>
              <Link
                to={to}
                className="group flex flex-col gap-5 p-9 bg-white hover:bg-ink transition-colors duration-300 min-h-[340px] h-full"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] tracking-[0.14em] uppercase text-ink-soft font-medium group-hover:text-white/50 transition-colors">
                    {tag}
                  </span>
                  <span className="text-[11px] tracking-[0.12em] uppercase text-sage-dark font-semibold bg-sage-pale px-2.5 py-1 rounded-full group-hover:bg-white/10 group-hover:text-sage-light transition-colors whitespace-nowrap">
                    {badge}
                  </span>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="font-head text-[22px] leading-[1.2] font-medium text-ink group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <p className="text-[14.5px] text-ink-soft leading-[1.65] group-hover:text-white/70 transition-colors">
                    {desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[13px] font-semibold text-sage-dark group-hover:text-sage-light transition-colors">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
