import styles from './styles/Results.module.css';

export default function Results() {
  return (
    <section className={styles.results} id="results">
      <div className="container">
        <h2 className="text-center">Resultados Baseados em Ciência</h2>
        <p className="text-center">Nosso método é fundamentado em pesquisas científicas sobre cessação do tabagismo:</p>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>Eficácia Comprovada</h3>
            <p>Estudos mostram que abordagens multifacetadas como a nossa aumentam em até 300% as chances de parar de fumar definitivamente.</p>
          </div>
          <div className={styles.stat}>
            <h3>Benefícios Imediatos</h3>
            <p>95% dos ex-fumantes relatam melhora significativa na qualidade do sono, energia e capacidade respiratória nas primeiras semanas.</p>
          </div>
          <div className={styles.stat}>
            <h3>Transformação Completa</h3>
            <p>Após 6 meses, 87% dos ex-fumantes relatam melhora na autoestima e qualidade de vida geral.</p>
          </div>
          <div className={styles.stat}>
            <h3>Economia Real</h3>
            <p>Fumantes que largam o vício economizam em média R$3.600 por ano apenas com cigarros, sem contar gastos com saúde.</p>
          </div>
        </div>
      </div>
    </section>
  );
}