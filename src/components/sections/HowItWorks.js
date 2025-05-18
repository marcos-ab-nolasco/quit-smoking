import styles from './styles/HowItWorks.module.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Consciência Transformadora',
      description: 'Entenda os mecanismos psicológicos e fisiológicos da dependência do cigarro, descubra seus gatilhos pessoais e prepare-se mentalmente para a mudança.',
      features: [
        'Mapeamento detalhado dos seus gatilhos emocionais',
        'Avaliação precisa do seu nível real de dependência',
        'Preparação mental para o processo de mudança'
      ],
      imagePlaceholder: 'Imagem: Consciência' // Aqui está a nova propriedade
    },
    {
      number: '2',
      title: 'Estratégias de Libertação',
      description: 'Acesse um arsenal completo de técnicas práticas, cientificamente comprovadas para gerenciar a abstinência, superar a fissura e reprogramar comportamentos automáticos.',
      features: [
        'Técnicas específicas para cada tipo de fissura',
        'Métodos para substituir comportamentos automáticos',
        'Ferramentas para momentos de crise e situações sociais'
      ],
      imagePlaceholder: 'Imagem: Estratégias' // Aqui está a nova propriedade
    },
    {
      number: '3',
      title: 'Transformação de Identidade',
      description: 'Reconstrua sua identidade como não-fumante, cultivando novos hábitos, novas associações mentais e uma nova relação com seu corpo e mente.',
      features: [
        'Rituais diários para fortalecer sua nova identidade',
        'Visualizações guiadas para reprogramação mental',
        'Técnicas para celebrar pequenas vitórias no caminho'
      ],
      imagePlaceholder: 'Imagem: Transformaçao' // Aqui está a nova propriedade
    }
  ];

  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>A Metodologia dos 3 Pilares da Libertação</h2>
          <p className={styles.subheading}>
            Nosso método exclusivo aborda todos os aspectos da dependência, oferecendo uma solução completa e permanente
          </p>
        </div>

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

        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepContentColumns}>
                  <div className={styles.stepTextContent}>
                    <p>{step.description}</p>
                    <ul className={styles.stepFeatures}>
                      {step.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.stepImageContent}>
                    <div className={styles.stepImagePlaceholder}>
                      <span>{step.imagePlaceholder}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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

        <div className={styles.ctaSection}>
          <div className={styles.ctaText}>
            <h3>Pronto para iniciar sua jornada de libertação?</h3>
            <p>
              Acesse agora mesmo o guia completo e comece a transformar sua relação com o cigarro.
            </p>
          </div>
          <a href="#pricing" className="btn">QUERO CONHECER O MÉTODO COMPLETO</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;