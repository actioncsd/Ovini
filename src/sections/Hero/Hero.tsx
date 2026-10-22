import logo from '../../assets/logo.png';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.estrelas} aria-hidden="true" />
      <div className={`container ${styles.conteudo}`}>
        <div>
          <h1 className={styles.titulo}>
            <span>Alugou,</span>{' '}
            <em>
              <span>decolou.</span>
            </em>
          </h1>
          <p className={styles.texto}>
            Veículos prontos para rodar, com proteção veicular inclusa, caução facilitado, manutenção por nossa conta e
            condições claras.
            <br />
            <strong>Menos burocracia, mais liberdade de horários para rodar.</strong>
          </p>
          <div className={styles.cta}>
            <a className="btn" href="#caso">
              Quero alugar
            </a>
            <a className="btn btn-ghost" href="#planos">
              Ver planos
            </a>
          </div>
        </div>
        <div className={styles.feixe}>
          <img
            className={styles.logo}
            src={logo}
            width={520}
            height={347}
            alt="Mascote da Ovni Rent a Car fazendo joinha"
          />
        </div>
      </div>
    </section>
  );
}
