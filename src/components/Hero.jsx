import { Reveal } from './Reveal'
import { WaIcon } from './WaIcon'
import { waLink } from '../lib/wa'

export function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden py-[clamp(56px,7vw,96px)]">
      {/* Decorative blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] pointer-events-none"
        style={{ borderRadius: '40% 60% 55% 45% / 50% 45% 55% 50%', background: 'rgba(168,196,184,.10)' }}
      />
      <div
        className="absolute bottom-[-8%] left-[-4%] w-[38vw] h-[38vw] max-w-[480px] max-h-[480px] pointer-events-none"
        style={{ borderRadius: '55% 45% 40% 60% / 45% 55% 50% 50%', background: 'rgba(168,196,184,.07)' }}
      />

      <div className="relative z-10 max-w-[1340px] mx-auto px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px] lg:items-center">

          {/* Content */}
          <Reveal>
            <p className="flex items-center gap-2.5 text-[11.5px] tracking-[0.18em] uppercase text-gold font-semibold mb-7
              before:inline-block before:w-7 before:h-px before:bg-gold">
              Pioneira na Bahia · Escaneamento 3D
            </p>

            <h1 className="font-head text-[clamp(40px,6vw,80px)] leading-[1.05] tracking-[-0.025em] font-semibold text-white mb-7">
              A cabecinha do seu bebê{' '}
              <em className="italic text-sage-light font-medium">merece o cuidado mais preciso.</em>
            </h1>

            <p className="text-[18px] text-white/82 max-w-[54ch] mb-9 leading-[1.7]">
              Fisioterapia pediátrica com mais de 20 anos de experiência. Diagnóstico com escaneamento 3D
              e tratamento individualizado — do reposicionamento à Órtese Craniana Cmoon.
            </p>

            <div className="flex flex-wrap gap-3 mb-11">
              <a
                href={waLink('geral')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-[14.5px] bg-sage text-white shadow-[0_4px_18px_rgba(122,158,142,.35)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
              >
                <WaIcon size={16} /> Agendar avaliação pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14.5px] border border-white/30 text-white/85 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                Conhecer os tratamentos →
              </a>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-x-7 gap-y-[18px] pt-7 border-t border-white/18 max-w-[560px]">
              {[
                { num: '20+', title: 'Anos de experiência', sub: 'em fisioterapia pediátrica' },
                { num: '3D',  title: 'Escaneamento tridimensional', sub: 'o único na Bahia para Cmoon' },
                { num: 'BA', title: 'Atendimento presencial', sub: 'Salvador' },
                { num: '600+', title: 'Famílias atendidas', sub: 'em mais de duas décadas' },
              ].map(({ num, title, sub }) => (
                <div key={num} className="flex gap-3 text-[13.5px] leading-[1.35] text-white/88">
                  <span className="font-head text-[24px] leading-none text-gold italic font-semibold shrink-0 min-w-[44px]">
                    {num}
                  </span>
                  <div>
                    <div>{title}</div>
                    <div className="text-[12px] text-white/55">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Visual */}
          <Reveal>
            <div className="relative">
              <div
                className="relative aspect-[4/5] bg-sage-light/15 border border-sage-light/25 rounded overflow-hidden"
              >
                <img
                  src="/dra-com-bebe.png"
                  alt="Dra. Viviane Leite com bebê"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="absolute left-[-28px] bottom-[42px] bg-white border border-border shadow-[0_16px_48px_rgba(26,46,37,.14)] max-w-[240px] rounded p-[18px_22px] max-sm:left-auto max-sm:right-4 max-sm:bottom-4">
                <p className="text-[10.5px] tracking-[0.14em] uppercase text-ink-soft font-medium mb-1.5">
                  Janela de tratamento
                </p>
                <p className="font-head text-[28px] leading-none text-ink font-semibold mb-1.5">
                  0 — 18 <span className="text-[14px] text-ink-soft font-normal font-body">meses</span>
                </p>
                <p className="text-[12.5px] text-ink-soft leading-[1.4]">
                  Quanto mais cedo, mais rápido e eficaz é o resultado.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
