import { useRevelar } from '../../hooks/useRevelar';
import styles from './ComoAlugar.module.css';

const PASSOS = [
  {
    titulo: 'Escolha seu perfil',
    texto: 'Abra o formulário de app ou de temporada e responda em poucos minutos.',
  },
  {
    titulo: 'Receba nosso contato',
    texto: 'Nosso time chama você no WhatsApp para alinhar valores e tirar dúvidas.',
  },
  {
    titulo: 'Confirme as condições',
    texto: 'Valores, período e documentos explicados antes de você fechar.',
  },
  {
    titulo: 'Retire e decole',
    texto: 'Carro higienizado e pronto. No plano de app, com tanque cheio para começar.',
  },
];

type PassoProps = {
  indice: number;
  titulo: string;
  texto: string;
};

function Passo({ indice, titulo, texto }: PassoProps) {
  const { ref, className, style } = useRevelar<HTMLLIElement>(indice);

  return (
    <li ref={ref} className={`${styles.passo} ${className}`} style={style}>
      <h3>{titulo}</h3>
      <p className="muted">{texto}</p>
    </li>
  );
}

export function ComoAlugar() {
  return (
    <section id="como">
      <div className="container">
        <h2>Do clique à chave em 4 passos</h2>
        <p className="muted">Simples, sem papelada interminável.</p>
        <ol className={styles.passos}>
          {PASSOS.map((passo, indice) => (
            <Passo key={passo.titulo} indice={indice} {...passo} />
          ))}
        </ol>
      </div>
    </section>
  );
}
