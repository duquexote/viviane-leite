import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { WaIcon } from '../components/WaIcon'
import { waLink } from '../lib/wa'

const TIPOS = [
  {
    name: 'Plagiocefalia',
    desc: 'Achatamento de um lado da parte posterior da cabeça. Vista de cima, a cabeça assume formato de paralelogramo. Pode causar desalinhamento das orelhas, testa e face.',
  },
  {
    name: 'Braquicefalia',
    desc: 'Achatamento simétrico na parte de trás da cabeça — mais larga e achatada. Comum em bebês que ficam muito tempo deitados de costas.',
  },
  {
    name: 'Escafocefalia',
    desc: 'Crânio estreito nas laterais e alongado na frente e atrás — formato mais comprido e estreito. Frequente em bebês que ficam apoiados de lado por longos períodos.',
  },
]

const SINAIS_TORCICOLO = [
  'Cabeça sempre inclinada para o mesmo lado',
  'Dificuldade para virar o pescoço completamente para os dois lados',
  'Preferência por mamar de um lado só',
  'Tensão ou "caroço" palpável no pescoço',
  'Assimetria no rosto ou na cabeça associada à posição do pescoço',
]

const VALORES = [
  { label: 'Avaliação com Escaneamento 3D', price: 'R$ 310,00' },
  { label: 'Sessões de Fisioterapia / mês', price: 'R$ 310,00' },
  { label: 'Órtese Craniana 3D Cmoon (à vista)', price: 'R$ 13.700,00' },
  { label: 'Órtese Craniana 3D Cmoon (10x)', price: 'R$ 15.000,00' },
]

const POR_QUE = [
  'Pioneira na Bahia no tratamento de assimetria craniana com Órtese Cmoon e escaneamento 3D',
  'Mais de 20 anos de experiência exclusiva em fisioterapia pediátrica',
  'Avaliação com escaneamento tridimensional — maior precisão que a avaliação manual',
  'Tratamento integrado: torcicolo e assimetria craniana conduzidos juntos quando necessário',
  'Atendimento presencial em Salvador (BA) e Aracaju (SE)',
]

export default function AssimetriaCraniana() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden py-[clamp(72px,11vw,130px)]">
        <div className="tonal-stripes" aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)] relative z-10">
          <span className="block text-[11px] tracking-[0.18em] uppercase text-sage-light font-semibold mb-5">
            Especialidade principal da Dra. Viviane Leite
          </span>
          <h1 className="font-head text-[clamp(32px,5vw,60px)] leading-[1.08] tracking-[-0.022em] font-semibold text-white max-w-[20ch] mb-6">
            Assimetria Craniana e Torcicolo Congênito:{' '}
            <em className="italic text-sage-light font-medium">
              diagnóstico preciso e tratamento especializado para o seu bebê.
            </em>
          </h1>
          <p className="text-[17px] text-white/75 leading-[1.7] max-w-[52ch] mb-10">
            Duas das condições mais comuns em bebês nos primeiros meses de vida — e que têm solução eficaz quando identificadas cedo. Atendo em Salvador (BA) e Aracaju (SE) com escaneamento 3D e plano de tratamento individualizado.
          </p>
          <a
            href={waLink('assimetria')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[15px] bg-sage text-white shadow-[0_4px_18px_rgba(107,174,214,.35)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            <WaIcon size={16} /> Agendar Avaliação pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Assimetria craniana */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(28px,3.5vw,46px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-6">
              O que é a{' '}
              <em className="italic text-sage font-medium">Assimetria Craniana?</em>
            </h2>
            <div className="max-w-[72ch] text-[17px] text-ink-mid leading-[1.7] space-y-4 mb-12">
              <p>
                A assimetria craniana é uma alteração no formato do crânio do bebê — achatamento, alongamento ou deformidade de um ou mais lados da cabeça. Pode surgir ainda na gestação, no parto ou se desenvolver nos primeiros meses de vida por conta do posicionamento.
              </p>
              <p>
                É uma das condições mais comuns da primeira infância: estima-se que afete entre 20% e 40% dos bebês em algum grau. Apesar disso, muitos casos passam despercebidos ou são minimizados — o que atrasa o tratamento e reduz os resultados.
              </p>
            </div>

            <h3 className="font-head text-[20px] font-medium text-ink mb-6">
              Principais tipos de assimetria craniana:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded overflow-hidden mb-12">
              {TIPOS.map(({ name, desc }) => (
                <div key={name} className="bg-white p-8">
                  <h4 className="font-head text-[18px] font-medium text-ink mb-3">{name}</h4>
                  <p className="text-[14.5px] text-ink-soft leading-[1.65]">{desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gold-light border border-gold rounded-lg">
              <h3 className="font-head text-[18px] font-semibold text-ink mb-4">
                A janela de tratamento é agora
              </h3>
              <ul className="text-[15px] text-ink-mid leading-[1.75] space-y-2 list-none p-0">
                <li>O crânio do bebê cresce de forma acelerada nos primeiros 18 meses de vida.</li>
                <li>Quanto mais cedo o tratamento começa, mais eficaz e mais rápido o resultado.</li>
                <li>Após os 18 meses, a plasticidade craniana diminui significativamente e a correção fica muito mais difícil.</li>
              </ul>
            </div>
            <a
            href={waLink('assimetria')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[15px] bg-sage text-white shadow-[0_4px_18px_rgba(107,174,214,.35)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200 mt-10"
          >
            <WaIcon size={16} /> Agendar Avaliação pelo WhatsApp
          </a>
          </Reveal>
        </div>
      </section>

      {/* Torcicolo congênito */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-sage-pale">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(28px,3.5vw,46px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-10">
              O que é o{' '}
              <em className="italic text-sage font-medium">Torcicolo Congênito?</em>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
              <div className="space-y-4 text-[17px] text-ink-mid leading-[1.7]">
                <p>
                  O torcicolo congênito é uma limitação do movimento do pescoço do bebê — ele tende a inclinar a cabeça para um lado e a girar para o lado oposto. A causa mais comum é o encurtamento de um músculo do pescoço chamado esternocleidomastoideo (ECM), que pode ocorrer durante a gestação ou o parto.
                </p>
                <p>
                  Quando não tratado precocemente, o torcicolo pode agravar a assimetria craniana — pois o bebê, sem conseguir girar livremente o pescoço, apoia sempre o mesmo ponto da cabeça. Por isso, o tratamento conjunto das duas condições é muito mais eficaz.
                </p>
              </div>
              <div>
                <h3 className="font-head text-[18px] font-medium text-ink mb-5">
                  Sinais que podem indicar torcicolo no seu bebê:
                </h3>
                <ul className="list-none p-0 m-0">
                  {SINAIS_TORCICOLO.map((s, i) => (
                    <li key={i} className="flex items-start gap-3.5 py-3.5 border-t border-border first:border-t-0">
                      <span className="w-5 h-5 rounded-full bg-sage/15 text-sage-dark flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                        ✓
                      </span>
                      <span className="text-[15px] text-ink-mid leading-[1.6]">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tratamento */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(28px,3.5vw,46px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-4">
              Como <em className="italic text-sage font-medium">tratamos</em>
            </h2>
            <p className="text-[17px] text-ink-mid leading-[1.7] max-w-[62ch] mb-12">
              O tratamento varia conforme a condição, a idade do bebê e o grau de comprometimento — e é sempre personalizado com base nos dados do escaneamento 3D e da avaliação clínica.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="border border-border rounded-lg p-8 bg-sage-pale">
                <h3 className="font-head text-[20px] font-medium text-ink mb-5">Para Assimetria Craniana:</h3>
                <ul className="list-none p-0 space-y-4">
                  {[
                    { label: 'Até 6 meses:', text: 'fisioterapia + técnicas de reposicionamento em casa' },
                    { label: 'De 6 a 18 meses:', text: 'Órtese Craniana 3D Cmoon, com escaneamentos de acompanhamento a cada 3 semanas' },
                    { label: 'Em todos os casos:', text: 'avaliação inicial com escaneamento 3D (R$ 310,00)' },
                  ].map(({ label, text }) => (
                    <li key={label} className="flex items-start gap-2 text-[14.5px] text-ink-mid leading-[1.6]">
                      <span className="text-sage-dark font-semibold shrink-0">{label}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8 bg-sage-pale">
                <h3 className="font-head text-[20px] font-medium text-ink mb-5">Para Torcicolo Congênito:</h3>
                <ul className="list-none p-0 space-y-3">
                  {[
                    'Fisioterapia especializada para ganho de amplitude de movimento do pescoço',
                    'Técnicas manuais de alongamento e mobilização',
                    'Orientações para os pais sobre como estimular o movimento em casa no dia a dia',
                    'Nos casos de assimetria craniana associada, os tratamentos são conduzidos de forma integrada',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-ink-mid leading-[1.6]">
                      <span className="text-sage mt-1.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
            href={waLink('assimetria')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[15px] bg-sage text-white shadow-[0_4px_18px_rgba(107,174,214,.35)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            <WaIcon size={16} /> Agendar Avaliação pelo WhatsApp
          </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
