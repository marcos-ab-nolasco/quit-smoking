import styles from './styles/FinalDecision.module.css';
import { useTracking } from '../../hooks/userTracking';

const FinalDecision = () => {
  const { trackLead } = useTracking();
  return (
    <section className={styles.finalDecision} id="final-decision">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Chegou o Momento da Sua Decisão</h2>
          <p className={styles.subheading}>
            Dois caminhos se abrem à sua frente. A escolha que você fizer agora determinará sua realidade pelos próximos anos
          </p>
        </div>

        <div className={styles.pathsContainer}>
          <div className={styles.pathCard} data-path="current">
            <div className={styles.pathHeader}>
              <h3>Continuando Como Está</h3>
              <div className={styles.pathIcon}>⚠️</div>
            </div>
            <div className={styles.pathContent}>
              <ul className={styles.realityList}>
                <li>
                  <strong>Saúde Comprometida:</strong> Acordar com tosse, cansaço constante e capacidade respiratória cada vez menor
                </li>
                <li>
                  <strong>Dependência Diária:</strong> Planejamento constante para garantir que nunca faltará cigarro, ansiedade quando não pode fumar
                </li>
                <li>
                  <strong>Dinheiro Desperdiçado:</strong> Mais de R$6.000 por ano literalmente queimados, sem contar gastos com saúde
                </li>
                <li>
                  <strong>Relações Prejudicadas:</strong> Ausências em momentos importantes para "dar uma saidinha", exemplo negativo para filhos
                </li>
                <li>
                  <strong>Autoestima Diminuída:</strong> Sensação de impotência diante do vício, culpa e frustração após cada cigarro
                </li>
                <li>
                  <strong>Futuro Incerto:</strong> Riscos crescentes de doenças graves, qualidade de vida em declínio gradual e silencioso
                </li>
              </ul>
              <div className={styles.personalMessage}>
                <p>"A cada cigarro que acendo, uma parte de mim sabe que estou escolhendo o conforto momentâneo em troca do meu futuro."</p>
              </div>
            </div>
          </div>

          <div className={styles.pathDivider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerText}>OU</div>
            <div className={styles.dividerLine}></div>
          </div>

          <div className={styles.pathCard} data-path="liberated">
            <div className={styles.pathHeader}>
              <h3>Sua Nova Vida Após o Método</h3>
              <div className={styles.pathIcon}>🌟</div>
            </div>
            <div className={styles.pathContent}>
              <ul className={styles.realityList}>
                <li>
                  <strong>Vitalidade Renovada:</strong> Despertar revigorado, respirar profundamente sem dificuldade, energia para atividades que ama
                </li>
                <li>
                  <strong>Liberdade Reconquistada:</strong> Fim da dependência, capacidade genuína de relaxar naturalmente, sem ansiedade constante
                </li>
                <li>
                  <strong>Prosperidade Financeira:</strong> Economia substancial que permite realizar sonhos antes adiados por falta de recursos
                </li>
                <li>
                  <strong>Relacionamentos Fortalecidos:</strong> Presença plena em momentos especiais, exemplo inspirador para pessoas próximas
                </li>
                <li>
                  <strong>Confiança Recuperada:</strong> Orgulho pela conquista, autoestima elevada, capacidade provada de superar desafios
                </li>
                <li>
                  <strong>Futuro Promissor:</strong> Anos de vida recuperados, riscos de saúde drasticamente reduzidos, qualidade de vida crescente
                </li>
              </ul>
              <div className={styles.personalMessage}>
                <p>"A decisão que tomei de me libertar não foi apenas sobre parar de fumar – foi sobre reclamar minha vida e meu potencial pleno."</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.decisionSection}>
          <div className={styles.decisionQuote}>
            <p>"A liberdade está a apenas uma decisão de distância. Não é sobre força de vontade – é sobre ter o método certo."</p>
          </div>
          
          {/* <div className={styles.countersSection}>
            <div className={styles.counterItem}>
              <div className={styles.counterNumber} id="days-counter">37.991</div>
              <div className={styles.counterLabel}>Dias de cigarro economizados</div>
            </div>
            <div className={styles.counterItem}>
              <div className={styles.counterNumber} id="money-counter">R$ 2.279.460</div>
              <div className={styles.counterLabel}>Economizados por nossos leitores</div>
            </div>
            <div className={styles.counterItem}>
              <div className={styles.counterNumber} id="users-counter">10.843</div>
              <div className={styles.counterLabel}>Pessoas libertas do cigarro</div>
            </div>
          </div> */}

          {/* <div className={styles.timelineElement}>
            <div className={styles.timelineDots}>
              <div className={styles.timelineDot} data-time="today">
                <span className={styles.dotLabel}>Hoje</span>
              </div>
              <div className={styles.timelineLine}></div>
              <div className={styles.timelineDot} data-time="decision">
                <span className={styles.dotLabel}>Sua Decisão</span>
              </div>
              <div className={styles.timelineLine}></div>
              <div className={styles.timelineDot} data-time="freedom">
                <span className={styles.dotLabel}>Sua Liberdade</span>
              </div>
            </div>
          </div> */}

          <div className={styles.finalMessage}>
            <p>Pense nas pessoas que você ama. Na saúde que você merece. No potencial que espera para ser realizado.</p>
            <p>O único arrependimento que ex-fumantes têm é não ter parado antes. Não deixe que mais um dia se passe com essa sensação.</p>
          </div>
          
          <div className={styles.finalCta}>
            <a href="#purchase-form" className={styles.ctaButton} onClick={trackLead}>
              QUERO COMEÇAR MINHA NOVA VIDA AGORA
            </a>
            <div className={styles.ctaMeta}>
              {/* <span className={styles.secureIcon}>🔒</span> Compra 100% segura • Acesso imediato • Garantia de 7 dias */}
              <span className={styles.secureIcon}>🔒</span> Compra 100% segura • Acesso imediato
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalDecision;