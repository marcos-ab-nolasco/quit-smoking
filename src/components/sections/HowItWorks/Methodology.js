import styles from '../styles/HowItWorks.module.css';

const Methodology = () => (
  <div className={styles.methodology}>
    <div className={styles.methodologyIntro}>
      <h3>Por que a maioria das pessoas <span className="highlight">falha ao tentar parar</span>?</h3>
      <p>
        Métodos convencionais como adesivos, gomas e "força de vontade" tratam apenas um aspecto da 
        dependência - geralmente o físico - ignorando as dimensões psicológicas e comportamentais que são 
        igualmente cruciais.
      </p>
      <p>
        Nossa abordagem, desenvolvida após anos de pesquisa e testada com milhares de pessoas, trata 
        <span className="blue-highlight"> os três pilares da dependência</span> simultaneamente, resultando 
        em uma taxa de sucesso muito superior aos métodos tradicionais.
      </p>
    </div>
    <div className={styles.pillarsDiagram}>
      <div className={styles.pillarConnector}></div>
      <div className={styles.pillarsContainer}>
        <div className={styles.pillar}>
          <div className={styles.pillarIcon}>🧠</div>
          <div className={styles.pillarLabel}>Psicológico</div>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarIcon}>🫀</div>
          <div className={styles.pillarLabel}>Físico</div>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarIcon}>🔄</div>
          <div className={styles.pillarLabel}>Comportamental</div>
        </div>
      </div>
    </div>
  </div>
);

export default Methodology;
