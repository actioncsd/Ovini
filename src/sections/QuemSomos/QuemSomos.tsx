import { useRevelar } from '../../hooks/useRevelar';
import styles from './QuemSomos.module.css';

const DIFERENCIAIS = [
  { titulo: 'Preço claro', texto: 'Você sabe quanto vai pagar antes de fechar.' },
  { titulo: 'Atendimento ágil', texto: 'Resposta rápida no WhatsApp para tirar suas dúvidas.' },
  { titulo: 'Carro pronto', texto: 'Higienizado, com proteção veicular inclusa.' },
];

type DiferencialProps = {
  indice: number;
  titulo: string;
  texto: string;
};

function Diferencial({ indice, titulo, texto }: DiferencialProps) {
  const { ref, className, style } = useRevelar<HTMLDivElement>(indice);

  return (
    <div ref={ref} className={`${styles.diferencial} ${className}`} style={style}>
      <b>{titulo}</b>
      {texto}
    </div>
  );
}

export function QuemSomos() {
  return (
    <section id="quem" className="section-alt">
      <div className={`container ${styles.quem}`}>
        <div>
          <span className="eyebrow">Quem somos</span>
          <h2>Carro pronto, regra clara e sem enrolação.</h2>
          <p className={styles.abertura}>
            A OVNI Rent a Car nasceu para tornar o aluguel de carros mais simples, rápido e transparente.
          </p>
          <p className="muted">
            Atendemos quem precisa de um veículo para trabalhar como motorista de app, viajar, passar uma temporada,
            substituir temporariamente o carro que está na oficina ou simplesmente ter mais mobilidade no dia a dia.
          </p>
          <p className="muted">
            Aqui, você sabe como funciona desde o início: condições claras, atendimento próximo e veículos
            higienizados, revisados e prontos para rodar. Nosso objetivo é facilitar sua locação, com menos burocracia
            e mais praticidade para você seguir o seu caminho.
          </p>
          <p className={styles.fechamento}>
            Seja para trabalhar, viajar ou resolver a rotina, a OVNI tem uma opção que combina com a sua necessidade.
          </p>
        </div>
        <div className={styles.diferenciais}>
          {DIFERENCIAIS.map((diferencial, indice) => (
            <Diferencial key={diferencial.titulo} indice={indice} {...diferencial} />
          ))}
        </div>
      </div>
    </section>
  );
}
