import { BarraProgresso } from './components/BarraProgresso/BarraProgresso';
import { BotaoWhatsApp } from './components/BotaoWhatsApp/BotaoWhatsApp';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ComoAlugar } from './sections/ComoAlugar/ComoAlugar';
import { Contato } from './sections/Contato/Contato';
import { Duvidas } from './sections/Duvidas/Duvidas';
import { Faixa } from './sections/Faixa/Faixa';
import { Hero } from './sections/Hero/Hero';
import { Planos } from './sections/Planos/Planos';
import { QualSeuCaso } from './sections/QualSeuCaso/QualSeuCaso';
import { QuemSomos } from './sections/QuemSomos/QuemSomos';

export function App() {
  return (
    <>
      <BarraProgresso />
      <Header />
      <main id="topo">
        <Hero />
        <Faixa />
        <QuemSomos />
        <QualSeuCaso />
        <Planos />
        <ComoAlugar />
        <Duvidas />
        <Contato />
      </main>
      <Footer />
      <BotaoWhatsApp />
    </>
  );
}
