import { Nav }         from './components/Nav'
import { Hero }        from './components/Hero'
import { Sobre }       from './components/Sobre'
import { Problema }    from './components/Problema'
import { Servico1 }    from './components/Servico1'
import { Servico2 }    from './components/Servico2'
import { Diferenciais} from './components/Diferenciais'
import { Processo }    from './components/Processo'
import { Depoimentos } from './components/Depoimentos'
import { FAQ }         from './components/FAQ'
import { CTAFinal }    from './components/CTAFinal'
import { Footer }      from './components/Footer'
import { FloatingWA }  from './components/FloatingWA'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Problema />
        <Servico1 />
        <Servico2 />
        <Diferenciais />
        <Processo />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
