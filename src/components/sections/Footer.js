import styles from './styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* <div className={styles.footerLogo}>
            <span className={styles.logoText}>LIBERTE-SE</span>
          </div>
          
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Política de Privacidade</a>
            <a href="#" className={styles.footerLink}>Termos de Uso</a>
            <a href="mailto:contato@liberte-se.com" className={styles.footerLink}>Contato</a>
          </div> */}
          
          <div className={styles.footerCopyright}>
            <p>&copy; {currentYear} Liberte-se. Todos os direitos reservados.</p>
            <p className={styles.footerDisclaimer}>
              Este produto não substitui orientação médica profissional. Consulte um médico antes de iniciar qualquer programa de cessação do tabagismo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;