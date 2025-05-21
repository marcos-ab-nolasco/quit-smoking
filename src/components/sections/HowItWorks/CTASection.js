import styles from '../styles/HowItWorks.module.css';

const CTASection = () => (
  <div className={styles.ctaSection}>
    <div className={styles.ctaText}>
      <h3>Pronto para iniciar sua jornada de libertação?</h3>
      <p>
        Acesse agora mesmo o guia completo e comece a transformar sua relação com o cigarro.
      </p>
    </div>
    <a href="#pricing" className="btn">QUERO CONHECER O MÉTODO COMPLETO</a>
  </div>
);

export default CTASection;
