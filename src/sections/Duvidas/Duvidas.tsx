import { useRevelar } from '../../hooks/useRevelar';
import styles from './Duvidas.module.css';

const PERGUNTAS = [
  {
    pergunta: 'Como funciona o caução?',
    resposta:
      'O caução é facilitado. Os valores e as formas de pagamento são informados no atendimento, antes de você fechar.',
  },
  {
    pergunta: 'O que está incluso no plano de app?',
    resposta:
      'Proteção veicular, carro higienizado e tanque cheio para os primeiros dias. Alguns itens do carro: ar-condicionado e câmbio manual.',
  },
  {
    pergunta: 'Quais documentos preciso levar?',
    resposta:
      'Envie o formulário e a gente passa a lista completa de documentos pelo WhatsApp, conforme o seu perfil.',
  },
  {
    pergunta: 'Posso alugar só por alguns dias?',
    resposta:
      'Pode. No plano de temporada você escolhe o período. Informe as datas no formulário e retornamos com o valor.',
  },
  {
    pergunta: 'Vocês alugam para empresas?',
    resposta:
      'Sim. Escolha "Empresa / setor comercial" no formulário de temporada e conte o que a sua operação precisa.',
  },
  {
    pergunta: 'Qual carro vou receber?',
    resposta: 'Depende da disponibilidade da frota. Consulte os modelos do dia pelo WhatsApp.',
  },
];

type DuvidaProps = {
  indice: number;
  pergunta: string;
  resposta: string;
};

function Duvida({ indice, pergunta, resposta }: DuvidaProps) {
  const { ref, className, style } = useRevelar<HTMLDetailsElement>(indice);

  return (
    <details ref={ref} className={`${styles.duvida} ${className}`} style={style}>
      <summary className={styles.pergunta}>{pergunta}</summary>
      <p className="muted">{resposta}</p>
    </details>
  );
}

export function Duvidas() {
  return (
    <section id="faq" className="section-alt">
      <div className="container">
        <h2>Dúvidas? Aqui está o essencial.</h2>
        {PERGUNTAS.map((item, indice) => (
          <Duvida key={item.pergunta} indice={indice} {...item} />
        ))}
      </div>
    </section>
  );
}
