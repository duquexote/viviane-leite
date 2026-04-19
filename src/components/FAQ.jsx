const FAQS = [
  {
    q: 'A órtese dói ou incomoda o bebê?',
    a: 'Não. A órtese é leve, ventilada e feita sob medida para o crânio do seu bebê. A grande maioria dos bebês se adapta em poucos dias e não tem o sono, as brincadeiras ou o desenvolvimento prejudicados.',
  },
  {
    q: 'Com quantos meses meu bebê pode começar o tratamento?',
    a: 'Para fisioterapia e reposicionamento, o tratamento pode começar desde o primeiro mês de vida. Para a órtese craniana, a indicação é a partir dos 6 meses — e deve ser concluída até os 18 meses, que é o limite da janela de tratamento eficaz.',
  },
  {
    q: 'O escaneamento 3D é seguro para o bebê?',
    a: 'Sim, totalmente. O escaneamento 3D utiliza luz estruturada — sem qualquer tipo de radiação. O processo é rápido (menos de 1 minuto), indolor e completamente seguro para bebês de qualquer idade.',
  },
  {
    q: 'Quanto tempo dura o tratamento com a órtese?',
    a: 'Em média, de 3 a 5 meses — dependendo da idade do bebê no início do tratamento, do tipo e do grau da assimetria. Quanto mais cedo começar, mais rápido é o resultado.',
  },
  {
    q: 'O plano de saúde cobre o tratamento?',
    a: 'A legislação brasileira garante a cobertura da órtese craniana pelos planos de saúde quando há indicação médica. Muitos planos tentam negar — mas a jurisprudência é amplamente favorável ao paciente. Posso orientar você sobre como proceder para solicitar a cobertura.',
  },
  {
    q: 'Você atende fora de Salvador?',
    a: 'Sim. Atendo presencialmente em Salvador (BA) e em Aracaju (SE). Para famílias de outras cidades da Bahia, é possível realizar a avaliação inicial e retornos combinados conforme a necessidade.',
  },
]

function FaqItem({ q, a }) {
  return (
    <details className="border-b border-border group">
      <summary className="list-none cursor-pointer py-[26px] flex items-center justify-between gap-6 font-head text-[clamp(19px,2.1vw,25px)] leading-[1.25] text-ink font-medium select-none hover:text-sage-dark transition-colors duration-200 [&::-webkit-details-marker]:hidden">
        {q}
        <span className="w-[34px] h-[34px] shrink-0 border border-sage rounded-full flex items-center justify-center text-sage-dark transition-all duration-300 group-open:rotate-45 group-open:bg-sage group-open:text-white group-open:border-sage">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <line x1="7" y1="1" x2="7" y2="13" />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </span>
      </summary>
      <div className="pb-7 max-w-[72ch] text-[16px] text-ink-mid leading-[1.65]">{a}</div>
    </details>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-[clamp(72px,10vw,140px)] border-t border-border bg-sage-pale">
      <div className="max-w-[960px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-3 mb-14 md:grid-cols-[220px_1fr] md:gap-12 md:items-start">
          <div className="flex items-baseline gap-3.5 text-[12px] tracking-[0.14em] uppercase text-ink-soft font-medium">
            <span className="inline-block w-9 h-px bg-current shrink-0 -translate-y-0.5" aria-hidden="true" />
            09 · Dúvidas frequentes
          </div>
          <div>
            <span className="block text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold mb-[18px]">
              Tire suas dúvidas
            </span>
            <h2 className="font-head text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-0.018em] font-semibold">
              Perguntas frequentes{' '}
              <em className="italic text-sage font-medium">— respondidas com clareza.</em>
            </h2>
          </div>
        </div>

        <div className="border-t border-border">
          {FAQS.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
        </div>
      </div>
    </section>
  )
}
