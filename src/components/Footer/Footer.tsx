import styles from './Footer.module.css';

const ANO = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">© {ANO} Ovni Rent a Car. Alugou, decolou!</div>
    </footer>
  );
}
