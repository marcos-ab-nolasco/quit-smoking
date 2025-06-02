import styles from '../styles/HowItWorks.module.css';

const BookPreview = () => (
  <div className={styles.bookPreview}>
    <div className={styles.bookStructure}>
      <h3>Estrutura Completa do E-book</h3>
      <div className={styles.chapters}>
        <div className={styles.chapter}>
          <div className={styles.chapterNumber}>01</div>
          <div className={styles.chapterInfo}>
            <h4>O Primeiro Passo para sua Liberdade</h4>
            <p>Preparação mental e compromisso com a mudança</p>
          </div>
        </div>
        <div className={styles.chapter}>
          <div className={styles.chapterNumber}>02</div>
          <div className={styles.chapterInfo}>
            <h4>O Roubo Silencioso</h4>
            <p>Compreendendo o verdadeiro impacto do cigarro</p>
          </div>
        </div>
        <div className={styles.chapter}>
          <div className={styles.chapterNumber}>03</div>
          <div className={styles.chapterInfo}>
            <h4>O Que Ninguém Te Conta</h4>
            <p>Verdades essenciais sobre a indústria e dependência</p>
          </div>
        </div>
        <div className={styles.chapter}>
          <div className={styles.chapterNumber}>04</div>
          <div className={styles.chapterInfo}>
            <h4>O Horizonte que Te Espera</h4>
            <p>Benefícios transformadores que aguardam você</p>
          </div>
        </div>
        <div className={styles.chapterContinuation}>
          <span>+ 6 capítulos adicionais com ferramentas práticas e estratégias de longo prazo</span>
        </div>
      </div>
    </div>
    <div className={styles.expertiseSection}>
      <h3>Método Fundamento em Neurociência</h3>
      <p>
        Nosso guia integra pesquisas científicas sobre cessação do tabagismo, princípios 
        comprovados da psicologia comportamental e técnicas validadas de neuroplasticidade, para criar 
        um processo estruturado e personalizável.
      </p>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <div className={styles.statIcon}>🔬</div>
          <div className={styles.statTitle}>Científico</div>
          <div className={styles.statDescription}>Baseado em pesquisas validadas</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statIcon}>🎯</div>
          <div className={styles.statTitle}>Completo</div>
          <div className={styles.statDescription}>Mente, corpo e comportamento</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statIcon}>⚡</div>
          <div className={styles.statTitle}>Prático</div>
          <div className={styles.statDescription}>Ferramentas do dia a dia</div>
        </div>
      </div>
      <div className={styles.scientificBasis}>
        <h4>Fundamentação Científica</h4>
        <ul>
          <li>Modelo Transteórico de Mudança (Prochaska & DiClemente)</li>
          <li>Terapia de Aceitação e Compromisso para cessação tabágica</li>
          <li>Princípios de neuroplasticidade aplicada</li>
          <li>Técnicas de prevenção de recaída validadas</li>
        </ul>
      </div>
    </div>
  </div>
);

export default BookPreview;
