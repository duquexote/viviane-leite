import { Reveal } from './Reveal'
import { WaIcon } from './WaIcon'
import { waLink } from '../lib/wa'

const STEPS = [
  { n: '01', title: 'Avaliação com escaneamento 3D', desc: 'Primeiro passo: escaneamento tridimensional do crânio com precisão milimétrica, identificando tipo, grau e o melhor caminho de tratamento.' },
  { n: '02', title: 'Plano de fisioterapia individualizado', desc: 'Sessões adaptadas ao caso do bebê, trabalhando mobilidade cervical, postura e estimulação do crescimento craniano nas direções corretas.' },
  { n: '03', title: 'Orientação de reposicionamento em casa', desc: 'Orientações claras e práticas sobre posicionamento no berço, no colo, nas mamadas e nas brincadeiras — para potencializar os resultados entre as sessões.' },
  { n: '04', title: 'Acompanhamento contínuo', desc: 'Evolução avaliada a cada sessão e plano ajustado conforme necessário, sempre com base nos dados do escaneamento 3D.' },
]

export function Servico1() {
  return (
    <section id="servicos" className="py-[clamp(72px,10vw,140px)] border-t border-border bg-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Header */}
        <div className="mb-14">
          <span className="block text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold mb-[18px]">
            Fisioterapia e reposicionamento · 0 a 6 meses
          </span>
          <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold">
            Nos primeiros meses, o tratamento pode ser{' '}
            <em className="italic text-sage font-medium">mais simples do que você imagina.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-[72px]">
          <Reveal>
            <div className="border-t-2 border-ink-mid pt-7 mb-7">
              <p className="text-[12px] tracking-[0.14em] uppercase text-sage-dark font-semibold mb-4">
                0 — 6 meses · assimetria leve a moderada
              </p>
              <p className="text-[17px] text-ink-mid leading-[1.68] max-w-[52ch]">
                Para bebês de até 6 meses, a fisioterapia especializada combinada com técnicas de reposicionamento em
                casa costuma trazer resultados excelentes — sem necessidade de órtese na grande maioria dos casos. O
                crânio ainda é extremamente plástico e responde muito bem a estímulos posturais corretos. Cada semana conta.
              </p>
            </div>

            <ol className="list-none p-0 m-0">
              {STEPS.map(({ n, title, desc }) => (
                <li key={n} className="py-[22px] border-t border-border grid grid-cols-[60px_1fr] gap-6 items-start last:border-b last:border-border">
                  <span className="text-[12px] tracking-[0.1em] text-sage-dark font-semibold pt-0.5">{n}</span>
                  <div>
                    <h4 className="font-body text-[16px] font-semibold mb-1.5 tracking-[-0.005em] text-ink">{title}</h4>
                    <p className="text-[14.5px] text-ink-soft leading-[1.6]">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Price */}
            <div className="mt-8 p-7 bg-sage-pale border border-border rounded-lg">
              <p className="text-[10.5px] tracking-[0.16em] uppercase text-ink-soft font-semibold mb-3.5">Investimento</p>
              <div className="flex justify-between items-baseline py-2.5 border-b border-dashed border-border gap-3 flex-wrap">
                <span className="text-[14.5px] text-ink-mid">Avaliação com escaneamento 3D</span>
                <span className="font-head text-[22px] italic font-semibold text-ink">R$ 310,00</span>
              </div>
              <div className="flex justify-between items-baseline py-2.5 gap-3 flex-wrap">
                <span className="text-[14.5px] text-ink-mid">Sessões de fisioterapia (mensal)</span>
                <span className="font-head text-[22px] italic font-semibold text-ink">
                  R$ 310,00<span className="text-[14px] text-ink-soft font-normal font-body not-italic"> /mês</span>
                </span>
              </div>
              <p className="text-[12.5px] text-ink-soft mt-3.5 leading-[1.5]">
                Inclui escaneamento inicial, plano de tratamento personalizado e orientações de reposicionamento.
              </p>
              <div className="mt-5">
                <a
                  href={waLink('fisio')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14.5px] font-semibold bg-sage text-white shadow-[0_4px_18px_rgba(122,158,142,.32)] hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-200"
                >
                  <WaIcon size={15} /> Agendar avaliação
                </a>
              </div>
            </div>
          </Reveal>

          {/* Visual */}
          <Reveal>
            <div className="relative aspect-[4/5] bg-sage-pale border border-border rounded overflow-hidden">
              <img
                src="/fisioterapia.png"
                alt="Sessão de fisioterapia pediátrica"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
