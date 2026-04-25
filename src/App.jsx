import { Routes, Route } from 'react-router-dom'
import { Nav }          from './components/Nav'
import { Hero }         from './components/Hero'
import { Sobre }        from './components/Sobre'
import { Problema }     from './components/Problema'
import { Servico1 }     from './components/Servico1'
import { Servico2 }     from './components/Servico2'
import { Tratamentos }  from './components/Tratamentos'
import { Diferenciais } from './components/Diferenciais'
import { Processo }     from './components/Processo'
import { Depoimentos }  from './components/Depoimentos'
import { FAQ }          from './components/FAQ'
import { CTAFinal }     from './components/CTAFinal'
import { Footer }       from './components/Footer'
import { FloatingWA }   from './components/FloatingWA'
import { ScrollToTop }  from './components/ScrollToTop'
import AssimetriaCraniana from './pages/AssimetriaCraniana'
import ConsultoriaDoSono  from './pages/ConsultoriaDoSono'
import IntervencaoPrecoce from './pages/IntervencaoPrecoce'

function HomePage() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Problema />
      <Servico1 />
      <Servico2 />
      <Tratamentos />
      <Diferenciais />
      <Processo />
      <Depoimentos />
      <FAQ />
      <CTAFinal />
    </main>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/"                               element={<HomePage />} />
        <Route path="/assimetria-craniana-e-torcicolo" element={<AssimetriaCraniana />} />
        <Route path="/consultoria-do-sono"            element={<ConsultoriaDoSono />} />
        <Route path="/intervencao-precoce"            element={<IntervencaoPrecoce />} />
      </Routes>
      <Footer />
      <FloatingWA />
    </>
  )
}
