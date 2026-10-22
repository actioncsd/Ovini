import { useEffect, useState } from 'react';
import styles from './BarraProgresso.module.css';

export function BarraProgresso() {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const aoRolar = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgresso(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return <div className={styles.barra} style={{ width: `${progresso}%` }} aria-hidden="true" />;
}
