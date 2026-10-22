import styles from './Faixa.module.css';

const ITENS = [
  'Caução facilitado',
  'Proteção veicular inclusa',
  'Tanque cheio na 1ª semana',
  'Carro higienizado',
  'Alugou, decolou!',
];

export function Faixa() {
  return (
    <div className={styles.faixa} aria-hidden="true">
      <div className={styles.trilha}>
        {[...ITENS, ...ITENS].map((item, indice) => (
          <span key={indice}>{item}</span>
        ))}
      </div>
    </div>
  );
}
