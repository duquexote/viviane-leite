import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { WaIcon } from '../components/WaIcon'
import { waLink } from '../lib/wa'

const PROBLEMAS = [
  'Seu bebê só dorme no colo ou no peito',
  'Acorda múltiplas vezes por noite e não consegue voltar a dormir sozinho',
  'Não tem rotina definida de sono — cada noite é uma surpresa',
  'Você está exausta e sem saber por onde começar',
  'Tentou métodos que não funcionaram ou que não fazem sentido para você',
]

const INCLUI = [
  'Anamnese completa: histórico de sono, rotinas, alimentação e ambiente',
  'Plano de sono personalizado com estratégias adaptadas à fase e ao perfil do bebê',
  'Orientações sobre janelas de sono, sonecas e rotina noturna',
  'Suporte durante o período de implementação do plano',
  'Ajustes conforme a evolução do bebê',
]

const PASSOS = [
  {
    n: '01',
    title: 'Contato inicial',
    desc: 'Você entra em contato pelo WhatsApp, me conta um pouco sobre a situação do sono do seu bebê e agendamos uma conversa.',
  },
  {
    n: '02',
    title: 'Anamnese e diagnóstico',
    desc: 'Realizo uma entrevista aprofundada sobre os hábitos, rotinas e histórico do sono do seu filho — e da família como um todo. Tudo isso é fundamental para construir um plano que realmente funcione.',
  },
  {
    n: '03',
    title: 'Plano personalizado',
    desc: 'Com base na anamnese, elaboro um plano de sono detalhado, com estratégias específicas para o perfil do seu bebê, orientações de rotina e ajustes ambientais.',
  },
  {
    n: '04',
    title: 'Acompanhamento',
    desc: 'Durante o período de implementação, estou disponível para tirar dúvidas, ajustar o plano e dar suporte para que a mudança seja sustentável e respeitosa.',
  },
]

export default function ConsultoriaDoSono() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden py-[clamp(72px,11vw,130px)]">
        <div className="tonal-stripes" aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)] relative z-10">
          <span className="block text-[11px] tracking-[0.18em] uppercase text-sage-light font-semibold mb-5">
            Para famílias que querem noites mais tranquilas
          </span>
          <h1 className="font-head text-[clamp(32px,5vw,60px)] leading-[1.08] tracking-[-0.022em] font-semibold text-white max-w-[18ch] mb-6">
            Consultoria do Sono:{' '}
            <em className="italic text-sage-light font-medium">
              seu bebê pode — e deve — dormir bem.
            </em>
          </h1>
          <p className="text-[17px] text-white/75 leading-[1.7] max-w-[52ch] mb-10">
            O sono do bebê não é só conforto — é desenvolvimento neurológico, emocional e físico. Com orientação especializada, é possível construir rotinas de sono saudáveis respeitando o ritmo e a fase do seu filho.
          </p>
          <a
            href={waLink('sono')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[15px] bg-sage text-white shadow-[0_4px_18px_rgba(107,174,214,.35)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            <WaIcon size={16} /> Falar com a Dra. Viviane pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Você se identifica? */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(28px,3.5vw,46px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-4">
              Você se identifica com{' '}
              <em className="italic text-sage font-medium">alguma dessas situações?</em>
            </h2>
            <p className="text-[16px] text-ink-soft mb-10 max-w-[58ch]">
              Se você marcou pelo menos um, a Consultoria do Sono pode transformar as suas noites — e as do seu bebê.
            </p>
            <ul className="list-none p-0 m-0 max-w-[680px]">
              {PROBLEMAS.map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-4 border-t border-border first:border-t-0">
                  <span className="w-5 h-5 rounded border-2 border-sage-dark shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-sm bg-sage-dark" />
                  </span>
                  <span className="text-[15.5px] text-ink-mid leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* O que é */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-sage-pale">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
              <div>
                <h2 className="font-head text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-6">
                  O que é a{' '}
                  <em className="italic text-sage font-medium">Consultoria do Sono?</em>
                </h2>
                <p className="text-[17px] text-ink-mid leading-[1.7] mb-5">
                  A Consultoria do Sono é um acompanhamento individualizado para ajudar bebês e crianças a desenvolverem hábitos de sono mais saudáveis e autônomos — sempre com respeito ao desenvolvimento e ao temperamento de cada criança e ao estilo de cada família.
                </p>
                <p className="text-[17px] text-ink-mid leading-[1.7] mb-8">
                  Não existe método único que funcione para todos. Por isso, o processo começa pela escuta ativa da rotina, das dificuldades e dos valores da família — e só então construímos juntas um plano que faça sentido para a realidade de vocês.
                </p>
                <div className="p-5 bg-white border border-border rounded-lg">
                  <p className="text-[11px] tracking-[0.14em] uppercase text-sage-dark font-semibold mb-2">
                    Faixa etária atendida
                  </p>
                  <p className="text-[15px] text-ink-mid">
                    A consultoria atende bebês e crianças de{' '}
                    <strong className="font-semibold text-ink">0 a 5 anos</strong>.
                    Cada fase tem características próprias de sono — e o plano é sempre adequado à idade e ao desenvolvimento do seu filho.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-head text-[20px] font-medium text-ink mb-5">
                  O que a consultoria inclui:
                </h3>
                <ul className="list-none p-0 m-0">
                  {INCLUI.map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5 py-4 border-t border-border">
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

      {/* Como funciona */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(28px,3.5vw,46px)] leading-[1.1] tracking-[-0.018em] font-semibold mb-12">
              Como funciona{' '}
              <em className="italic text-sage font-medium">o atendimento?</em>
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
            <div className="mt-10">
              <a
                href={waLink('sono')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-sage text-white shadow-[0_4px_18px_rgba(122,158,142,.32)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
              >
                <WaIcon size={15} /> Quero Saber Mais
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-[clamp(64px,9vw,120px)] border-t border-border bg-ink">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
          <Reveal>
            <h2 className="font-head text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-[-0.018em] font-semibold text-white mb-6">
              Por que fazer a consultoria com a{' '}
              <em className="italic text-sage-light font-medium">Dra. Viviane?</em>
            </h2>
            <p className="text-[17px] text-white/70 leading-[1.75] max-w-[62ch] mb-5">
              Sou fisioterapeuta pediátrica com mais de 20 anos de experiência no cuidado de bebês — o que me permite olhar para o sono com uma perspectiva mais ampla: desenvolvimento motor, neurológico, alimentar e emocional fazem parte do quadro.
            </p>
            <p className="text-[17px] text-white/70 leading-[1.75] max-w-[62ch] mb-12">
              A consultoria não é sobre método — é sobre o seu bebê. Cada plano é construído do zero, com escuta, ciência e respeito pelo ritmo de cada família.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={waLink('sono')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-sage text-white hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
              >
                <WaIcon size={15} /> Agendar Consultoria pelo WhatsApp
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
