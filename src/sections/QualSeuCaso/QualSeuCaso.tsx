import { FORMULARIOS } from '../../config';
import { useRevelar } from '../../hooks/useRevelar';
import styles from './QualSeuCaso.module.css';

const PERFIS = [
  {
    icone: '🚗',
    titulo: 'Motorista de app',
    texto: 'Rode na Uber, 99 e outros apps. A 1ª semana sai por R$ 500.',
    formulario: FORMULARIOS.app,
  },
  {
    icone: '🏖️',
    titulo: 'Turismo',
    texto: 'Alugue por dias ou semanas e curta a viagem sem depender de ninguém.',
    formulario: FORMULARIOS.temporada,
  },
  {
    icone: '🔧',
    titulo: 'Fiquei sem carro',
    texto: 'Carro reserva para você não ficar parado enquanto resolve o seu.',
    formulario: FORMULARIOS.temporada,
  },
  {
    icone: '🏢',
    titulo: 'Empresas',
    texto: 'Locação para o setor comercial, com condições sob medida para a sua operação.',
    formulario: FORMULARIOS.temporada,
  },
];

type PerfilProps = {
  indice: number;
  icone: string;
  titulo: string;
  texto: string;
  formulario: string;
};

function Perfil({ indice, icone, titulo, texto, formulario }: PerfilProps) {
  const { ref, className, style } = useRevelar<HTMLAnchorElement>(indice);

  return (
    <a
      ref={ref}
      className={`${styles.perfil} ${className}`}
      style={style}
      href={formulario}
      target="_blank"
      rel="noopener"
    >
      <span className={styles.icone} aria-hidden="true">
        {icone}
      </span>
      <h3>{titulo}</h3>
      <p className="muted">{texto}</p>
    </a>
  );
}

export function QualSeuCaso() {
  return (
    <section id="caso">
      <div className="container">
        <h2>Qual é o seu caso?</h2>
        <p className="muted">Toque no seu perfil e preencha o formulário. Leva poucos minutos.</p>
        <div className={styles.trilho}>
          {PERFIS.map((perfil, indice) => (
            <Perfil key={perfil.titulo} indice={indice} {...perfil} />
          ))}
        </div>
      </div>
    </section>
  );
}
