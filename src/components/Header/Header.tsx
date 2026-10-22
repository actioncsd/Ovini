import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

const LINKS = [
  { href: '#quem', rotulo: 'Quem somos' },
  { href: '#planos', rotulo: 'Planos' },
  { href: '#como', rotulo: 'Como alugar' },
  { href: '#faq', rotulo: 'Dúvidas' },
];

export function Header() {
  const [compacto, setCompacto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setCompacto(window.scrollY > 40);

    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <header className={`${styles.header} ${compacto ? styles.compacto : ''}`}>
      <div className={`container ${styles.conteudo}`}>
        <a href="#topo" aria-label="Ovni Rent a Car">
          <img className={styles.logo} src={logo} alt="Ovni Rent a Car" />
        </a>
        <nav className={styles.nav}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.rotulo}
            </a>
          ))}
          <a className={styles.destaque} href="#caso">
            Quero alugar
          </a>
        </nav>
      </div>
    </header>
  );
}
