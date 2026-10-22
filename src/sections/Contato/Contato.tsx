import { INSTAGRAM_URL, SITE_URL, WHATSAPP_URL } from '../../config';
import { useRevelar } from '../../hooks/useRevelar';
import styles from './Contato.module.css';

const CANAIS = [
  {
    titulo: 'WhatsApp',
    texto: 'Atendimento rápido, tire dúvidas e veja os carros disponíveis.',
    href: WHATSAPP_URL,
    novaAba: true,
  },
  { titulo: 'Instagram', texto: '@ovnirentacar', href: INSTAGRAM_URL, novaAba: true },
  { titulo: 'Site', texto: 'www.ovnirentacar.com.br', href: SITE_URL, novaAba: false },
];

type CanalProps = {
  indice: number;
  titulo: string;
  texto: string;
  href: string;
  novaAba: boolean;
};

function Canal({ indice, titulo, texto, href, novaAba }: CanalProps) {
  const { ref, className, style } = useRevelar<HTMLAnchorElement>(indice);

  return (
    <a
      ref={ref}
      className={`${styles.canal} ${className}`}
      style={style}
      href={href}
      {...(novaAba && { target: '_blank', rel: 'noopener' })}
    >
      <b>{titulo}</b>
      <span className="muted">{texto}</span>
    </a>
  );
}

export function Contato() {
  return (
    <section id="contato">
      <div className="container">
        <h2>Fale com a Ovni</h2>
        <p className="muted">Chama no WhatsApp: é o caminho mais rápido.</p>
        <div className={styles.canais}>
          {CANAIS.map((canal, indice) => (
            <Canal key={canal.titulo} indice={indice} {...canal} />
          ))}
        </div>
      </div>
    </section>
  );
}
