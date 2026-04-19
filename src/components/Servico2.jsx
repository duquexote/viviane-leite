import { Reveal } from './Reveal'
import { WaIcon } from './WaIcon'
import { waLink } from '../lib/wa'

const STEPS = [
  { n: '01', title: 'Avaliação com escaneamento 3D', desc: 'Mapeamento tridimensional do formato atual do crânio, identificação do tipo e grau da assimetria, e definição da indicação para órtese.' },
  { n: '02', title: 'Confecção da órtese personalizada', desc: 'A partir dos dados do escaneamento, a órtese Cmoon é projetada e confeccionada especificamente para o crânio do bebê. Encaixe perfeito, eficácia máxima.' },
  { n: '03', title: 'Uso diário e adaptação', desc: 'Uso por aproximadamente 23h/dia, retirada apenas para banho e higienização. Adaptação em poucos dias — a maioria dos bebês se acostuma rapidamente.' },
  { n: '04', title: 'Escaneamentos a cada 3 semanas', desc: 'Ajustes precisos na órtese ao longo do tratamento até que o crânio atinja a simetria desejada — em média, de 3 a 5 meses.' },
]

const HIGHLIGHTS = [
  'Confeccionada em tecnologia 3D — maior precisão que órteses convencionais.',
  'Mais leve e ventilada — mais conforto para o bebê durante o uso.',
  'Escaneamento 3D a cada 3 semanas para monitorar a evolução com dados exatos.',
  'Única profissional da Bahia a oferecer o tratamento completo com essa tecnologia.',
]

export function Servico2() {
  return (
    <section id="ortese" className="py-[clamp(72px,10vw,140px)] bg-ink text-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-3 mb-14 md:grid-cols-[220px_1fr] md:gap-12 md:items-start">
          <div className="flex items-baseline gap-3.5 text-[12px] tracking-[0.14em] uppercase text-gold-light/80 font-medium">
            <span className="inline-block w-9 h-px bg-current shrink-0 -translate-y-0.5" aria-hidden="true" />
            05 · Tratamento II
          </div>
          <div>
            <span className="block text-[11px] tracking-[0.16em] uppercase text-gold-light font-semibold mb-[18px]">
              Órtese Craniana 3D Cmoon · 6 a 18 meses
            </span>
            <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold text-white">
              A tecnologia mais avançada para a correção da assimetria —{' '}
              <em className="italic text-gold-light font-medium">feita sob medida para o seu bebê.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-[72px]">
          <Reveal>
            <div className="border-t-2 border-gold-light/30 pt-7 mb-7">
              <p className="text-[12px] tracking-[0.14em] uppercase text-gold-light font-semibold mb-4">
                6 — 18 meses · assimetria moderada a severa
              </p>
              <p className="text-[17px] text-white/80 leading-[1.68] max-w-[52ch]">
                A partir dos 6 meses, o bebê ganha mobilidade — o que reduz a eficácia do reposicionamento. A Órtese
                Craniana 3D Cmoon age como um guia de crescimento: cria espaço nas áreas achatadas e contém o crescimento
                nas áreas proeminentes, direcionando o desenvolvimento para o formato simétrico. Monitorada a cada três
                semanas com escaneamento 3D.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-9">
              {HIGHLIGHTS.map((txt, i) => (
                <div key={i} className="flex gap-3.5 text-[14.5px] py-3.5 border-t border-white/15 last:border-b last:border-white/15">
                  <span className="text-[11px] tracking-[0.1em] font-semibold text-gold-light shrink-0 w-[60px]">
                    +0{i + 1}
                  </span>
                  <span className="text-white/85">{txt}</span>
                </div>
              ))}
            </div>

            <ol className="list-none p-0 m-0">
              {STEPS.map(({ n, title, desc }) => (
                <li key={n} className="py-[22px] border-t border-white/15 grid grid-cols-[60px_1fr] gap-6 items-start last:border-b last:border-white/15">
                  <span className="text-[12px] tracking-[0.1em] text-gold-light font-semibold pt-0.5">{n}</span>
                  <div>
                    <h4 className="font-body text-[16px] font-semibold mb-1.5 tracking-[-0.005em] text-white">{title}</h4>
                    <p className="text-[14.5px] text-white/70 leading-[1.6]">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Price */}
            <div className="mt-8 p-7 bg-white/[0.06] border border-white/14 rounded-lg">
              <p className="text-[10.5px] tracking-[0.16em] uppercase text-gold-light font-semibold mb-3.5">Investimento</p>
              {[
                ['Avaliação com escaneamento 3D', 'R$ 310,00'],
                ['Tratamento completo — à vista', 'R$ 13.700,00'],
                ['Tratamento parcelado (até 10×)', 'R$ 15.000,00'],
              ].map(([label, value], i, arr) => (
                <div key={label} className={`flex justify-between items-baseline py-2.5 gap-3 flex-wrap ${i < arr.length - 1 ? 'border-b border-dashed border-white/12' : ''}`}>
                  <span className="text-[14.5px] text-white/82">{label}</span>
                  <span className="font-head text-[22px] italic font-semibold text-white">{value}</span>
                </div>
              ))}
              <p className="text-[12.5px] text-white/55 mt-3.5 leading-[1.5]">
                Inclui avaliação, confecção da órtese e todos os escaneamentos de acompanhamento até a alta.
              </p>
              <div className="mt-5">
                <a
                  href={waLink('ortese')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14.5px] font-semibold bg-white border border-border text-ink hover:bg-sage-pale transition-colors duration-200"
                >
                  <WaIcon size={15} /> Agendar avaliação
                </a>
              </div>
            </div>
          </Reveal>

          {/* Visual */}
          <Reveal>
            <div className="relative aspect-[4/5] bg-white/[0.08] border border-white/12 rounded overflow-hidden">
              <img
                src="/ortese cmoon.png"
                alt="Órtese Craniana 3D Cmoon"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
