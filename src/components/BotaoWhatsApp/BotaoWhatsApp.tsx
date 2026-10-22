import { WHATSAPP_URL } from '../../config';
import styles from './BotaoWhatsApp.module.css';

export function BotaoWhatsApp() {
  return (
    <a className={`btn ${styles.botao}`} href={WHATSAPP_URL} target="_blank" rel="noopener">
      WhatsApp
    </a>
  );
}
