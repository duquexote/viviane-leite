import { Reveal } from './Reveal'
import { WaIcon } from './WaIcon'
import { waLink } from '../lib/wa'

const TIPOS = [
  {
    name: 'Plagiocefalia',
    desc: 'O tipo mais comum. Achatamento de um dos lados da parte de trás da cabeça, que pode causar desalinhamento das orelhas, da testa e até da face. Visto de cima, o crânio assume formato de paralelogramo.',
    img: '/plagiocefalia.png',
  },
  {
    name: 'Braquicefalia',
    desc: 'Achatamento simétrico na parte de trás da cabeça, deixando-a mais larga e curta. A testa pode ficar mais proeminente e as laterais do crânio mais salientes.',
    img: '/braquicefalia.png',
  },
  {
    name: 'Escafocefalia',
    desc: 'Crânio estreito nas laterais e alongado no sentido ântero-posterior. Mais comum em bebês que passaram muito tempo apoiados de lado. Aparência comprida e estreita.',
    img: '/escafocefalia.png',
  },
]

export function Problema() {
  return (
    <section id="problema" className="py-[clamp(72px,10vw,140px)] border-t border-border bg-sage-pale">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Header */}
        <div className="mb-14">
          <span className="block text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold mb-[18px]">
            Educação / Diagnóstico
          </span>
          <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold">
            A cabeça do seu bebê está diferente de um lado?{' '}
            <em className="italic text-sage font-medium">Isso tem nome — e tem tratamento.</em>
          </h2>
          <p className="text-[18px] text-ink-soft max-w-[62ch] mt-5 leading-[1.65]">
            A assimetria craniana é uma alteração no formato do crânio que pode surgir na gestação, no parto ou nos
            primeiros meses de vida. Quando identificada cedo, tem tratamento eficaz e seguro — sem cirurgia, sem dor,
            e com resultados comprovados.
          </p>
        </div>

        {/* Type cards */}
        <div className="grid grid-cols-1 gap-5 mt-14 md:grid-cols-3">
          {TIPOS.map(({ name, desc, img }) => (
            <Reveal key={name}>
              <div className="bg-white border border-border rounded-xl p-7 flex flex-col min-h-[340px] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,46,37,.10)] hover:border-sage-light transition-all duration-200">
                <div className="aspect-square bg-sage-pale rounded-lg mb-5 relative overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-head text-[22px] mb-2.5 italic text-ink font-medium">{name}</h3>
                <p className="text-[14.5px] text-ink-mid leading-[1.6]">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Fact banner */}
        <Reveal className="mt-14">
          <div className="bg-ink rounded-xl p-[48px_clamp(28px,5vw,56px)] grid grid-cols-1 gap-8 items-center md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <div>
              <p className="text-[11px] tracking-[0.16em] uppercase text-gold font-semibold mb-2.5">
                Incidência estimada
              </p>
              <p className="font-head text-[clamp(64px,8vw,108px)] leading-[0.95] italic font-medium text-sage-light">
                20<span className="text-sage-light/60">–</span>40<span className="text-[0.4em] tracking-[0.02em] text-gold">%</span>
              </p>
            </div>
            <div>
              <p className="text-[17px] leading-[1.65] text-white/82 mb-6">
                É muito mais comum do que parece: estima-se que entre 20% e 40% dos bebês apresentem algum grau de
                assimetria craniana. O crânio cresce de forma acelerada nos primeiros 18 meses — depois disso, já não
                oferece a mesma plasticidade para correção.{' '}
                <strong className="text-white">A janela certa é agora.</strong>
              </p>
              <a
                href={waLink('geral')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14.5px] font-semibold bg-white border border-border text-ink hover:bg-sage-pale transition-colors duration-200"
              >
                Agendar avaliação com escaneamento 3D →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
