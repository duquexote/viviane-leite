import { Reveal } from './Reveal'
import { WaIcon } from './WaIcon'
import { waLink } from '../lib/wa'

const INCLUDES = [
  'Escaneamento 3D completo do crânio do bebê',
  'Diagnóstico detalhado com imagens tridimensionais',
  'Classificação do tipo e grau da assimetria',
  'Plano de tratamento recomendado, com explicação clara',
  'Orientações imediatas para começar a ajudar em casa',
]

export function CTAFinal() {
  return (
    <section
      id="agendar"
      className="py-[clamp(72px,10vw,140px)] bg-ink text-white relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[60%] aspect-square rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(122,158,142,.22), transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-[1.2fr_1fr] lg:gap-[72px]">
          <Reveal>
            <div className="flex items-baseline gap-3.5 text-[12px] tracking-[0.14em] uppercase text-sage-light/80 font-medium mb-7">
              <span className="inline-block w-9 h-px bg-current shrink-0 -translate-y-0.5" aria-hidden="true" />
              10 · Agendar
            </div>

            <h2 className="font-head text-[clamp(38px,5.4vw,70px)] leading-[1.05] font-semibold text-white max-w-[16ch] mb-6">
              A janela de tratamento do seu bebê{' '}
              <em className="italic text-sage-light font-medium">é agora.</em>
            </h2>

            <p className="text-[18.5px] max-w-[60ch] text-white/78 mb-11 leading-[1.7]">
              Cada mês dentro da fase certa faz diferença no resultado. Agende a avaliação com escaneamento 3D e entenda
              exatamente o que o seu bebê precisa — com dados, clareza e o cuidado de quem faz isso há mais de 20 anos.
            </p>

            <div className="inline-flex items-baseline gap-2.5 mb-9 px-[18px] py-2.5 border border-sage-light rounded-full">
              <span className="text-[11px] tracking-[0.12em] uppercase text-sage-light font-semibold">Avaliação</span>
              <span className="font-head italic text-[22px] text-white font-semibold">R$ 310,00</span>
            </div>

            <div className="block">
              <a
                href={waLink('geral')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] bg-white border border-border text-ink hover:bg-sage-pale transition-colors duration-200"
              >
                <WaIcon size={16} /> Agendar pelo WhatsApp
              </a>
            </div>

            <p className="mt-6 text-[11.5px] tracking-[0.1em] uppercase text-sage-light font-semibold">
              Atendimento em Salvador (BA) e Aracaju (SE)
            </p>
          </Reveal>

          <Reveal>
            <div className="bg-white/[0.07] border border-white/15 p-8 rounded-lg">
              <p className="text-[11px] tracking-[0.14em] uppercase text-sage-light font-semibold mb-5">
                O que você recebe na avaliação
              </p>
              <ul className="list-none p-0 m-0">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex gap-3.5 py-3.5 border-b border-dashed border-white/15 last:border-0 text-[15px] text-white/88">
                    <span className="font-head italic text-[20px] leading-none text-sage-light shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
