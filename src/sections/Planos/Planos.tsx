import type { ReactNode } from 'react';
import { Contador } from '../../components/Contador/Contador';
import { FORMULARIOS } from '../../config';
import { useRevelar } from '../../hooks/useRevelar';
import styles from './Planos.module.css';

type PlanoCardProps = {
  indice: number;
  destaque?: boolean;
  titulo: string;
  subtitulo?: string;
  preco: ReactNode;
  observacao: ReactNode;
  itens: string[];
  acao: string;
  formulario: string;
};

function PlanoCard({ indice, destaque, titulo, subtitulo, preco, observacao, itens, acao, formulario }: PlanoCardProps) {
  const { ref, className, style } = useRevelar<HTMLElement>(indice);

  return (
    <article ref={ref} className={`${styles.plano} ${destaque ? styles.destaque : ''} ${className}`} style={style}>
      <h3>{titulo}</h3>
      {subtitulo && <p className={`muted ${styles.subtitulo}`}>{subtitulo}</p>}
      {preco}
      <div className={styles.observacao}>{observacao}</div>
      <ul className={styles.itens}>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className={`btn ${styles.acao}`} href={formulario} target="_blank" rel="noopener">
        {acao}
      </a>
    </article>
  );
}

export function Planos() {
  return (
    <section id="planos" className="section-alt">
      <div className="container">
        <h2>Dois jeitos de decolar.</h2>
        <p className="muted">Escolha o que combina com a sua rotina. Disponibilidade sujeita à frota do dia.</p>
        <div className={styles.planos}>
          <PlanoCard
            indice={0}
            destaque
            titulo="Motorista de app"
            preco={
              <div className={styles.preco}>
                R$ <Contador valor={500} /> <small>1ª semana</small>
              </div>
            }
            observacao={
              <>
                Promoção na 1ª semana: de R$ <span className={styles.antigo}>650</span> por R$ 500. Depois, R$
                650/semana.
              </>
            }
            itens={[
              'Tanque cheio na entrega, para os primeiros dias',
              'Proteção veicular inclusa',
              'Carro higienizado e pronto para rodar',
              'Caução facilitado',
            ]}
            acao="Quero rodar no app"
            formulario={FORMULARIOS.app}
          />
          <PlanoCard
            indice={1}
            titulo="Motorista de temporada"
            subtitulo="Turismo, carro reserva ou uso comercial"
            preco={<div className={`${styles.preco} ${styles.consulta}`}>Sob consulta</div>}
            observacao="Valor conforme período e modelo. Resposta rápida pelo WhatsApp."
            itens={[
              'Escolha o período: dias, semanas ou meses',
              'Opções para turistas e para quem ficou sem carro',
              'Locação para empresas e setor comercial',
              'Condições claras antes de fechar',
            ]}
            acao="Pedir orçamento"
            formulario={FORMULARIOS.temporada}
          />
        </div>
      </div>
    </section>
  );
}
