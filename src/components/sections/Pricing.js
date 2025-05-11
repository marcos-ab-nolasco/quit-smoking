import styles from './styles/Pricing.module.css';

const Pricing = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>INVESTIMENTO</span>
          <h2>Invista em Sua Liberdade e Saúde</h2>
          <p className={styles.subheading}>
            Por menos do que você gasta em uma semana com cigarros, você pode conquistar sua liberdade permanente
          </p>
        </div>

        <div className={styles.pricingContainer}>
          <div className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3>E-book Liberte-se</h3>
              <p>Guia completo para abandonar o cigarro definitivamente</p>
            </div>
            
            <div className={styles.inclusionsList}>
              <h4>O Que Você Recebe:</h4>
              <ul>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <div>
                    <strong>E-book Completo "Liberte-se do Cigarro"</strong>
                    <p>10 capítulos com estratégias comprovadas para acabar com a dependência</p>
                  </div>
                </li>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <div>
                    <strong>Kit de Ferramentas Práticas</strong>
                    <p>Planilhas de acompanhamento, cartões de afirmação e cartas motivacionais em PDF</p>
                  </div>
                </li>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <div>
                    <strong>Guia de Bolso para Crises</strong>
                    <p>Versão condensada para consulta rápida em momentos difíceis</p>
                  </div>
                </li>
                {/* <li>
                  <span className={styles.checkmark}>✓</span>
                  <div>
                    <strong>30 Dias de Suporte por E-mail</strong>
                    <p>Tire suas dúvidas durante os momentos críticos da sua jornada</p>
                  </div>
                </li> */}
              </ul>
            </div>

            <div className={styles.pricingDetails}>
              <div className={styles.priceComparison}>
                <div className={styles.comparisonItem}>
                  <span className={styles.comparisonLabel}>Custo de um mês fumando:</span>
                  <span className={styles.comparisonValue}>R$ 600</span>
                </div>
                <div className={styles.comparisonItem}>
                  <span className={styles.comparisonLabel}>Custo de tratamentos convencionais:</span>
                  <span className={styles.comparisonValue}>R$ 300-1500</span>
                </div>
              </div>

              <div className={styles.currentOffer}>
                <div className={styles.offerBadge}>Oferta por Tempo Limitado</div>
                <div className={styles.priceContainer}>
                  <div className={styles.originalPrice}>De <span>R$ 60</span></div>
                  <div className={styles.currentPrice}>
                    <span className={styles.currency}>R$</span>
                    <span className={styles.amount}>27</span>
                  </div>
                  <div className={styles.paymentTerms}>Pagamento único</div>
                </div>
              </div>

              <div className={styles.savingsMessage}>
                <div className={styles.savingsBadge}>Mais de 50% de Economia</div>
                <p>Investimento único que retorna em menos de 3 dias de cigarro não consumido</p>
              </div>

              {/* <div className={styles.guarantee}>
                <div className={styles.guaranteeIcon}>🛡️</div>
                <div className={styles.guaranteeText}>
                  <strong>Garantia de 7 Dias</strong>
                  <p>Se não ficar satisfeito, devolvemos seu investimento integralmente</p>
                </div>
              </div> */}
            </div>

            <div className={styles.actionContainer}>
              <a href="#purchase-form" className="btn btn-lg">QUERO ME LIBERTAR AGORA</a>
              <p className={styles.securePayment}>
                <span className={styles.secureIcon}>🔒</span> Pagamento 100% seguro
              </p>
              <div className={styles.paymentMethods}>
                <span>Aceitamos Pix, cartão de crédito e boleto</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.bonusSection}>
          <h3>Bônus Exclusivos <span className={styles.bonusHighlight}>Incluídos na Sua Compra!</span></h3>
          
          <div className={styles.bonusGrid}>
            <div className={styles.bonusCard}>
              <div className={styles.bonusIcon}>🎧</div>
              <div className={styles.bonusContent}>
                <h4>Áudios de Meditação Guiada</h4>
                <p>5 meditações guiadas para momentos críticos de abstinência, incluindo uma específica para fissuras intensas</p>
                <div className={styles.bonusValue}>Valor: R$ 37</div>
              </div>
            </div>
            
            <div className={styles.bonusCard}>
              <div className={styles.bonusIcon}>📅</div>
              <div className={styles.bonusContent}>
                <h4>Calendário de Acompanhamento Imprimível</h4>
                <p>Ferramenta visual poderosa para registrar seu progresso e celebrar conquistas diárias</p>
                <div className={styles.bonusValue}>Valor: R$ 29</div>
              </div>
            </div>
            
            <div className={styles.bonusCard}>
              <div className={styles.bonusIcon}>📱</div>
              <div className={styles.bonusContent}>
                <h4>Sequência de 30 Emails de Motivação</h4>
                <p>Receba orientações diárias no seu email, sincronizadas com sua jornada de libertação</p>
                <div className={styles.bonusValue}>Valor: R$ 67</div>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.valueComparison}>
          <h3>Mais do que um investimento, uma economia real:</h3>
          
          <div className={styles.comparisonContainer}>
            <div className={styles.comparisonCol}>
              <h4>Investindo no E-book</h4>
              <div className={styles.priceTag}>R$ 27</div>
              <ul className={styles.benefitsList}>
                <li>Pagamento único</li>
                <li>Acesso vitalício ao material</li>
                <li>Economia de R$ 6.000+ por ano</li>
                <li>Melhoria significativa na saúde</li>
                <li>Reconquista da liberdade</li>
              </ul>
              <div className={styles.returnCalculation}>
                <strong>Retorno do investimento:</strong> 
                <span>Menos de 1 semana após parar de fumar</span>
              </div>
            </div>
            
            <div className={styles.comparisonCol}>
              <h4>Continuando a Fumar</h4>
              <div className={styles.priceTag}>R$ 7.000+</div>
              <ul className={styles.costsList}>
                <li>Gasto anual contínuo</li>
                <li>Custos adicionais com saúde</li>
                <li>Perda gradual de qualidade de vida</li>
                <li>Riscos crescentes para a saúde</li>
                <li>Dependência física e psicológica</li>
              </ul>
              <div className={styles.lossCalculation}>
                <strong>Perda em 10 anos:</strong>
                <span>Mais de R$ 70.000 + custos de saúde</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.finalCta}>
          <h3>Sua Liberdade Está a Apenas Um Clique de Distância</h3>
          <p>Não adie a decisão que vai transformar sua saúde, suas finanças e sua vida como um todo</p>
          <a href="#purchase-form" className="btn btn-lg">QUERO TER ACESSO AO MÉTODO COMPLETO</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;