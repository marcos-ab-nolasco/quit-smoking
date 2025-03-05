import styles from './styles/HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <h2 className="text-center">Como Este Guia Funciona</h2>
        <p className="text-center">Nosso método exclusivo de 10 capítulos foi desenvolvido para abordar todos os aspectos da dependência do cigarro:</p>
        
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>Fase 1: Preparação</h3>
            <p>Entenda sua relação com o cigarro, identifique gatilhos e prepare-se mentalmente para a mudança com técnicas comprovadas.</p>
          </div>
          <div className={styles.step}>
            <h3>Fase 2: Ação</h3>
            <p>Estratégias práticas para abandonar o cigarro, gerenciar a abstinência e reconstruir hábitos saudáveis.</p>
          </div>
          <div className={styles.step}>
            <h3>Fase 3: Manutenção</h3>
            <p>Ferramentas para prevenir recaídas, consolidar sua nova identidade como não-fumante e celebrar sua liberdade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}