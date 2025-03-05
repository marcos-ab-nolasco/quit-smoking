import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2023 LIBERTE-SE. Todos os direitos reservados.</p>
        <p>Contato: contato@liberte-se.com.br</p>
      </div>
    </footer>
  );
}