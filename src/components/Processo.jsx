import { Reveal } from './Reveal'
import { WaIcon } from './WaIcon'
import { waLink } from '../lib/wa'

const STEPS = [
  { n: '01', title: 'Contato pelo WhatsApp',        desc: 'Você entra em contato, me conta a situação do bebê e agendamos a avaliação. Respondo pessoalmente todas as mensagens.' },
  { n: '02', title: 'Avaliação com escaneamento 3D', desc: 'Escaneamento tridimensional + avaliação clínica completa do bebê. Explico o diagnóstico com clareza, mostro o mapa do crânio e apresento o plano ideal.' },
  { n: '03', title: 'Início do tratamento',          desc: 'Dependendo da idade e do grau, iniciamos a fisioterapia e/ou o processo de confecção da órtese. Você recebe todas as orientações de casa.' },
  { n: '04', title: 'Acompanhamento e alta',         desc: 'Monitoro a evolução com escaneamentos regulares e faço os ajustes necessários até o resultado esperado — quando concedo a alta com segurança.' },
]

export function Processo() {
  return (
    <section id="processo" className="py-[clamp(72px,10vw,140px)] border-t border-border bg-sage-pale">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Header */}
        <div className="mb-14">
          <span className="block text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold mb-[18px]">
            Como funciona o atendimento
          </span>
          <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold">
            Do primeiro contato à alta:{' '}
            <em className="italic text-sage font-medium">um processo simples, claro e orientado</em>{' '}
            em cada etapa.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-0">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[34px] left-[6%] right-[6%] h-px bg-ink-mid" aria-hidden="true" />

          {STEPS.map(({ n, title, desc }) => (
            <Reveal key={n}>
              <div className="px-4.5 relative group">
                <div className="inline-flex items-center justify-center w-[68px] h-[68px] rounded-full bg-white border-[1.5px] border-sage font-head text-[24px] italic font-semibold text-sage-dark mb-5 relative z-10 group-hover:bg-sage group-hover:text-white group-hover:border-sage transition-all duration-200">
                  {n}
                </div>
                <h4 className="font-body text-[17px] font-semibold mb-2 text-ink">{title}</h4>
                <p className="text-[14.5px] text-ink-soft leading-[1.6]">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={waLink('geral')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] bg-sage text-white shadow-[0_4px_18px_rgba(122,158,142,.32)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            <WaIcon size={16} /> Quero agendar a avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
