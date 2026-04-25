import { Reveal } from './Reveal'

const TESTIS = [
  { initial: 'M', name: 'Mariana S.',  loc: 'SALVADOR · BA',          text: 'Começamos o tratamento com a Dra. Viviane quando minha filha tinha 4 meses. A primeira coisa que me marcou foi ver o escaneamento 3D da cabecinha dela — pela primeira vez eu entendi exatamente o que estava acontecendo. Em três meses de fisioterapia, a simetria já era visível.' },
  { initial: 'J', name: 'Juliana R.',  loc: 'ARACAJU · SE',           text: 'Viajamos de Aracaju para Salvador e valeu cada minuto. A Dra. Viviane nos recebeu com uma paciência que eu nunca tinha visto num consultório. A órtese transformou a cabecinha do meu filho — e a nossa tranquilidade como família.' },
  { initial: 'C', name: 'Camila T.',   loc: 'FEIRA DE SANTANA · BA',  text: 'O que mais me impressionou foi a clareza. Saí da avaliação sabendo exatamente o diagnóstico, o que faríamos, quanto tempo duraria e o que eu precisava fazer em casa. Nunca me senti perdida no processo.' },
  { initial: 'P', name: 'Patrícia L.', loc: 'SALVADOR · BA',          text: 'Meu pediatra disse que era só esperar, que ia se resolver sozinho. Seis meses depois, a cabeça do meu filho continuava torta. A Dra. Viviane nos deu um caminho — e resultado. Só sinto não ter procurado ela antes.' },
]

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-[clamp(72px,10vw,140px)] border-t border-border bg-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-3 mb-14 md:grid-cols-[220px_1fr] md:gap-12 md:items-start">
          <div className="flex items-baseline gap-3.5 text-[12px] tracking-[0.14em] uppercase text-ink-soft font-medium">
            <span className="inline-block w-9 h-px bg-current shrink-0 -translate-y-0.5" aria-hidden="true" />
            08 · Depoimentos
          </div>
          <div>
            <span className="block text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold mb-[18px]">
              Depoimentos reais
            </span>
            <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold">
              Mais de 20 anos de histórias{' '}
              <em className="italic text-sage font-medium">que a gente não esquece.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-14 md:grid-cols-2">
          {TESTIS.map(({ initial, name, loc, text }) => (
            <Reveal key={name}>
              <div className="bg-white border border-border rounded-xl p-8 flex flex-col hover:shadow-[0_8px_32px_rgba(26,46,37,.10)] hover:border-sage-light transition-all duration-200">
                <p className="font-head text-[48px] leading-[0.5] text-sage italic mb-4">"</p>
                <p className="text-[17px] leading-[1.6] text-ink-mid mb-5 flex-1">{text}</p>
                <div className="flex items-center gap-3.5 pt-[18px] border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-sage-pale flex items-center justify-center font-head italic text-[18px] font-semibold text-sage-dark shrink-0">
                    {initial}
                  </div>
                  <div>
                    <p className="text-[14.5px] font-semibold text-ink">{name}</p>
                    <p className="text-[12.5px] text-ink-soft tracking-[0.06em] font-medium">{loc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
