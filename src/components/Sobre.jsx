import { Reveal } from './Reveal'

const CREDS = [
  { n: '2005 →',   t: 'Fisioterapeuta pediátrica com atuação ininterrupta' },
  { n: 'Pioneira', t: 'Primeira profissional da Bahia com a Órtese Craniana 3D Cmoon' },
  { n: 'Especial.', t: 'Assimetria craniana, torcicolo congênito e desenvolvimento neuropsicomotor' },
  { n: 'BA · SE',  t: 'Atendimento presencial em Salvador (BA) e Aracaju (SE)' },
  { n: 'Lattes',   t: 'Currículo registrado na Plataforma Lattes / CNPq' },
]

export function Sobre() {
  return (
    <section id="sobre" className="py-[clamp(72px,10vw,140px)] border-t border-border bg-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Section header */}
        <div className="grid grid-cols-1 gap-3 mb-14 md:grid-cols-[220px_1fr] md:gap-12 md:items-start">
          <div className="flex items-baseline gap-3.5 text-[12px] tracking-[0.14em] uppercase text-ink-soft font-medium">
            <span className="inline-block w-9 h-px bg-current shrink-0 -translate-y-0.5" aria-hidden="true" />
            02 · Quem cuida
          </div>
          <div>
            <span className="block text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold mb-[18px]">
              Quem cuida do seu bebê
            </span>
            <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold">
              Mais de 20 anos dedicados ao{' '}
              <em className="italic text-sage font-medium">desenvolvimento saudável dos bebês.</em>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px]">
          {/* Photo placeholder */}
          <Reveal>
            <div className="relative aspect-[4/5] bg-sage-pale rounded overflow-hidden">
              <img
                src="/dra-viviane-retrato.png"
                alt="Dra. Viviane Leite"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal>
            <div className="space-y-[18px] text-[17.5px] leading-[1.68] text-ink-mid">
              <p>
                Sou <strong>Viviane Leite</strong>, fisioterapeuta pediátrica formada e apaixonada por cuidar dos bebês
                desde o início da vida. Atuo na área desde 2005 e me especializei no diagnóstico e tratamento de
                assimetrias cranianas — uma condição muito mais comum do que se imagina, e com solução quando identificada
                no momento certo.
              </p>
              <p>
                Fui a <strong>primeira fisioterapeuta da Bahia</strong> a oferecer o tratamento completo com a Órtese
                Craniana 3D Cmoon, com avaliação e acompanhamento por escaneamento tridimensional — a tecnologia mais
                precisa disponível hoje para o tratamento das assimetrias cranianas em bebês.
              </p>
              <p>
                Cada bebê é único. Por isso, trato cada caso com escuta ativa, tecnologia de ponta e um olhar clínico
                construído em mais de duas décadas de prática. Meu objetivo não é apenas corrigir a forma do crânio — é
                devolver tranquilidade para a família e qualidade de vida para o bebê.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-9 pt-7 border-t border-border">
              {CREDS.map(({ n, t }) => (
                <div
                  key={n}
                  className="grid grid-cols-[88px_1fr] items-baseline gap-5 py-3 border-b border-dashed border-border last:border-0 text-[15px]"
                >
                  <span className="text-[11px] tracking-[0.12em] uppercase text-sage-dark font-semibold">{n}</span>
                  <span className="text-ink-mid">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
