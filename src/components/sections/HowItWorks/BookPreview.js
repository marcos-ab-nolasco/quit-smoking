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
      <h3>Um Método Fundamentado na Ciência</h3>
      <p>
        Nosso guia integra décadas de pesquisas científicas sobre cessação do tabagismo, psicologia 
        comportamental e neuroplasticidade, transformando conceitos complexos em estratégias 
        práticas e acessíveis.
      </p>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>3x</div>
          <div className={styles.statDescription}>mais eficaz que métodos convencionais</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>10+</div>
          <div className={styles.statDescription}>anos de pesquisa e aplicação prática</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>87%</div>
          <div className={styles.statDescription}>de taxa de sucesso a longo prazo</div>
        </div>
      </div>
    </div>
  </div>
);

export default BookPreview;
