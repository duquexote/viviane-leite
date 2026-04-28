import { Reveal } from './Reveal'

const DIFFS = [
  { idx: '01 / Precisão',      title: 'Escaneamento 3D — o mais preciso', em: 'do mercado',          desc: 'Enquanto a maioria das clínicas ainda avalia o crânio manualmente, o escaneamento tridimensional é usado em todas as etapas — do diagnóstico a confecção da órtese e o acompanhamento. Dados precisos, decisões seguras, resultados mensuráveis.' },
  { idx: '02 / Pioneirismo',   title: 'Pioneira na Bahia',                em: 'com a Cmoon',         desc: 'Primeira profissional da Bahia a oferecer o tratamento completo com a Órtese Craniana 3D Cmoon.' },
  { idx: '03 / Experiência',   title: '+20 anos',                         em: 'de prática pediátrica', desc: 'Uma profissional com experiência à mais de duas décadas dedicadas exclusivamente ao cuidado de bebês e crianças. Cada família encontra uma profissional que já viu — e tratou — centenas de casos parecidos.' },
  { idx: '04 / Alcance',       title: 'Atendimento em',                   em: 'Salvador',     desc: 'A clínica fica em Salvador (BA), mas atendo famílias de toda a Bahia. Se você não é de Salvador, podemos organizar a avaliação e os retornos de forma prática, sem complicar a sua rotina.' },
  { idx: '05 / Acessibilidade',title: 'O preço mais acessível',           em: 'para esse nível de serviço', desc: 'Tecnologia 3D de ponta com investimento que cabe no planejamento. Nenhuma outra clínica na Bahia oferece o mesmo nível de serviço e tecnologia pelo mesmo valor.' },
  { idx: '06 / Cuidado',       title: 'Atendimento humanizado',           em: 'e personalizado',     desc: 'Não trato crânios — trato famílias. Cada bebê recebe um plano único. A mãe nunca sai de uma consulta sem saber exatamente o que está acontecendo e o que fazer.' },
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-[clamp(72px,10vw,140px)] border-t border-border bg-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Header */}
        <div className="mb-14">
          <span className="block text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold mb-[18px]">
            Diferenciais
          </span>
          <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold">
            Tecnologia, experiência e cuidado humanizado{' '}
            <em className="italic text-sage font-medium">no mesmo lugar.</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded overflow-hidden mt-14">
          {DIFFS.map(({ idx, title, em, desc }) => (
            <Reveal key={idx}>
              <div className="bg-white p-9 flex flex-col gap-3.5 min-h-[260px] hover:bg-sage-pale transition-colors duration-200">
                <p className="text-[11px] tracking-[0.14em] uppercase text-ink-soft font-medium">{idx}</p>
                <h3 className="font-head text-[21px] leading-[1.2] font-medium text-ink">
                  {title} <em className="italic text-sage-dark">{em}</em>
                </h3>
                <p className="text-[14.5px] text-ink-mid leading-[1.6]">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
