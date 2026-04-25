import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { WaIcon } from '../components/WaIcon'
import { waLink } from '../lib/wa'

const INDICACOES = [
  'Bebê com atraso nos marcos motores (rolar, sentar, engatinhar, andar)',
  'Nascimento prematuro ou intercorrências no parto',
  'Baixo tônus muscular (hipotonia) ou tônus elevado (hipertonia)',
  'Diagnóstico de condições como síndrome de Down, paralisia cerebral, TEA, entre outros',
  'Bebê com assimetria de movimento ou preferência por um lado do corpo',
  'Pais ou pediatra com dúvidas sobre o desenvolvimento da criança',
]

const MARCOS = [
  { faixa: '0 a 3 meses',   desc: 'controle inicial da cabeça, seguimento visual, reações ao som' },
  { faixa: '3 a 6 meses',   desc: 'sustentação da cabeça, rolar, alcance e preensão de objetos' },
  { faixa: '6 a 9 meses',   desc: 'sentar com apoio, transferência de objetos entre as mãos, início do engatinhar' },
  { faixa: '9 a 12 meses',  desc: 'sentar sem apoio, engatinhar, ficar em pé com suporte, primeiras palavras' },
  { faixa: '12 a 18 meses', desc: 'primeiros passos, comunicação, exploração ativa do ambiente' },
]

const PASSOS = [
  {
    n: '01',
    title: 'Avaliação do Desenvolvimento',
    desc: 'Realizo uma avaliação clínica completa do desenvolvimento neuropsicomotor da criança, observando padrões de movimento, tônus muscular, reflexos, habilidades funcionais e interação com o ambiente.',
  },
  {
    n: '02',
    title: 'Plano Terapêutico Individualizado',
    desc: 'Com base na avaliação, elaboro um plano de intervenção com objetivos claros, atividades terapêuticas específicas e orientações para os pais replicarem em casa no dia a dia.',
  },
  {
    n: '03',
    title: 'Sessões de Intervenção',
    desc: 'As sessões são realizadas de forma lúdica e adaptada à fase da criança — usando brinquedos, posicionamentos, movimentos dirigidos e estimulação sensorial. A participação dos pais é muito bem-vinda e faz diferença no resultado.',
  },
  {
    n: '04',
    title: 'Orientação Familiar',
    desc: 'Grande parte da Intervenção Precoce acontece em casa. Por isso, oriento os pais e cuidadores sobre como criar um ambiente estimulante e como incorporar as atividades terapêuticas na rotina sem sobrecarregar a família.',
  },
  {
    n: '05',
    title: 'Acompanhamento e Reavaliação',
    desc: 'Acompanho a evolução da criança de forma contínua, ajustando o plano conforme os progressos e as necessidades mudam ao longo do tempo.',
  },
]

const POR_QUE = [
  'Mais de 20 anos de experiência em fisioterapia pediátrica — especialidade que forma o olhar clínico para o desenvolvimento infantil',
  'Abordagem integradora: considero o bebê como um todo — desenvolvimento motor, cognitivo, sensorial e relacional',
  'Participação ativa da família no processo terapêutico — você não é espectador, é parceiro',
  'Atendimento em Salvador (BA) e Aracaju (SE)',
]

export default function IntervencaoPrecoce() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden py-[clamp(72px,11vw,130px)]">
        <div className="tonal-stripes" aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)] relative z-10">
          <span className="block text-[11px] tracking-[0.18em] uppercase text-sage-light font-semibold mb-5">
            Cada marco do desenvolvimento é uma conquista — e você pode ajudar
          </span>
          <h1 className="font-head text-[clamp(32px,5vw,60px)] leading-[1.08] tracking-[-0.022em] font-semibold text-white max-w-[20ch] mb-6">
            Intervenção Precoce:{' '}
            <em className="italic text-sage-light font-medium">
              acompanhamento especializado para o desenvolvimento do seu bebê.
            </em>
          </h1>
          <p className="text-[17px] text-white/75 leading-[1.7] max-w-[52ch] mb-10">
            Os primeiros anos de vida são o período mais importante para o desenvolvimento do cérebro. Com acompanhamento especializado desde cedo, é possível identificar atrasos, estimular os marcos do desenvolvimento e garantir que o seu filho cresça com toda a sua potência.
          </p>
          <a
            href={waLink('precoce')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[15px] bg-sage text-white shadow-[0_4px_18px_rgba(107,174,214,.35)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            <WaIcon size={16} /> Falar com a Dra. Viviane pelo WhatsApp
          </a>
        </div>
      </section>

      {/* O que é */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
              <div>
                <h2 className="font-head text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-6">
                  O que é a{' '}
                  <em className="italic text-sage font-medium">Intervenção Precoce?</em>
                </h2>
                <p className="text-[17px] text-ink-mid leading-[1.7] mb-5">
                  A Intervenção Precoce é um conjunto de ações terapêuticas voltadas para bebês e crianças de 0 a 3 anos que apresentam — ou têm risco de apresentar — atrasos no desenvolvimento neuropsicomotor.
                </p>
                <p className="text-[17px] text-ink-mid leading-[1.7]">
                  Diferente do que o nome pode sugerir, não se trata de "adiantar" o desenvolvimento ou de treinar o bebê para atingir marcos antes do tempo. O objetivo é criar as condições certas para que cada criança desenvolva suas capacidades motoras, cognitivas, sociais e emocionais com qualidade e dentro do seu ritmo individual.
                </p>
              </div>
              <div>
                <h3 className="font-head text-[20px] font-medium text-ink mb-5">
                  Quando a Intervenção Precoce é indicada?
                </h3>
                <ul className="list-none p-0 m-0">
                  {INDICACOES.map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5 py-3.5 border-t border-border first:border-t-0">
                      <span className="w-5 h-5 rounded-full bg-sage/15 text-sage-dark flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                        ✓
                      </span>
                      <span className="text-[14.5px] text-ink-mid leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marcos do desenvolvimento */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-sage-pale">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(28px,3.5vw,46px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-6">
              O que são os{' '}
              <em className="italic text-sage font-medium">marcos do desenvolvimento?</em>
            </h2>
            <div className="text-[17px] text-ink-mid leading-[1.7] space-y-4 max-w-[68ch] mb-12">
              <p>
                Os marcos do desenvolvimento são habilidades que a maioria dos bebês adquire dentro de faixas etárias esperadas — como sustentar a cabeça, rolar, sentar, engatinhar, ficar em pé e dar os primeiros passos. Eles refletem a maturidade do sistema nervoso central e do desenvolvimento muscular.
              </p>
              <p>
                Quando um marco não é atingido no tempo esperado, isso pode indicar que o sistema nervoso ou muscular precisa de estimulação direcionada. A intervenção precoce age exatamente nesse ponto — antes que o atraso se consolide e se torne mais difícil de reverter.
              </p>
            </div>

            <h3 className="font-head text-[20px] font-medium text-ink mb-5">
              Alguns marcos que acompanhamos:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded overflow-hidden">
              {MARCOS.map(({ faixa, desc }) => (
                <div key={faixa} className="bg-white p-7">
                  <p className="text-[11px] tracking-[0.14em] uppercase text-sage-dark font-semibold mb-2">
                    {faixa}
                  </p>
                  <p className="text-[14.5px] text-ink-mid leading-[1.6]">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(28px,3.5vw,46px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-12">
              Como funciona o atendimento de{' '}
              <em className="italic text-sage font-medium">Intervenção Precoce?</em>
            </h2>
            <ol className="list-none p-0 m-0">
              {PASSOS.map(({ n, title, desc }) => (
                <li
                  key={n}
                  className="py-[22px] border-t border-border grid grid-cols-[60px_1fr] gap-6 items-start last:border-b last:border-border"
                >
                  <span className="text-[12px] tracking-[0.1em] text-sage-dark font-semibold pt-0.5">{n}</span>
                  <div>
                    <h4 className="font-body text-[16px] font-semibold mb-1.5 tracking-[-0.005em] text-ink">
                      {title}
                    </h4>
                    <p className="text-[14.5px] text-ink-soft leading-[1.6]">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-ink">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-[-0.018em] font-semibold text-white mb-10">
              Por que fazer Intervenção Precoce com a{' '}
              <em className="italic text-sage-light font-medium">Dra. Viviane?</em>
            </h2>
            <ul className="list-none p-0 m-0 mb-12">
              {POR_QUE.map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-4 border-t border-white/[0.08]">
                  <span className="text-sage shrink-0 mt-0.5">◎</span>
                  <span className="text-[16px] text-white/80 leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={waLink('precoce')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-sage text-white hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
              >
                <WaIcon size={15} /> Agendar Avaliação pelo WhatsApp
              </a>
              <Link to="/" className="text-[14px] text-white/50 hover:text-white/85 transition-colors">
                ← Voltar para a página inicial
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
