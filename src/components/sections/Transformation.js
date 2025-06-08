import styles from './styles/Transformation.module.css';
import { useTracking } from '../../hooks/userTracking';

const Transformation = () => {
  const { trackLead } = useTracking();
  const transformations = [
    {
      title: "Saúde Restaurada",
      before: "Falta de ar, tosse constante, baixa imunidade e risco elevado de doenças graves",
      after: "Capacidade pulmonar recuperada, sistema imunológico fortalecido e redução drástica nos riscos de saúde",
      timeline: "Em apenas 3 meses, a capacidade pulmonar aumenta até 30%. Em 1 ano, o risco de ataque cardíaco cai pela metade.",
      icon: "🫁"
    },
    {
      title: "Energia Renovada",
      before: "Cansaço constante, dificuldade para atividades físicas básicas e sono de baixa qualidade",
      after: "Vitalidade recuperada, disposição para exercícios e sono profundo e reparador",
      timeline: "Em 2-3 semanas, os níveis de energia começam a aumentar significativamente. Em 2 meses, a qualidade do sono melhora em até 40%.",
      icon: "⚡"
    },
    {
      title: "Liberdade Emocional",
      before: "Ciclos de ansiedade, irritabilidade quando não pode fumar e dependência da nicotina para relaxar",
      after: "Equilíbrio emocional genuíno, capacidade natural de relaxar e fim da montanha-russa emocional",
      timeline: "Em 10 dias, os níveis de ansiedade começam a normalizar. Em 3 meses, muitos ex-fumantes relatam menos depressão e estresse.",
      icon: "🧘‍♂️"
    },
    {
      title: "Sentidos Ampliados",
      before: "Paladar e olfato reduzidos, diminuindo o prazer em refeições e experiências sensoriais",
      after: "Redescoberta de sabores e aromas, com experiências gastronômicas intensificadas e maior apreciação do ambiente",
      timeline: "Em apenas 48 horas sem fumar, as papilas gustativas começam a se regenerar. Em 2 semanas, a sensibilidade sensorial aumenta em até 60%.",
      icon: "👅"
    },
    {
      title: "Aparência Rejuvenescida",
      before: "Pele opaca e envelhecida, dentes amarelados, cabelos sem vida e odor persistente",
      after: "Pele mais clara e hidratada, dentes mais brancos, melhor aparência geral e fim do cheiro de cigarro",
      timeline: "Em 2 semanas, a circulação na pele melhora visivelmente. Em 6 meses, muitos sinais de envelhecimento precoce começam a reverter.",
      icon: "✨"
    },
    {
      title: "Prosperidade Financeira",
      before: "Milhares de reais literalmente queimados todos os anos em cigarros",
      after: "Economia significativa que permite realizar sonhos, investir no futuro ou simplesmente viver com mais conforto",
      timeline: "Em 1 ano, um fumante de um maço por dia economiza mais de R$6.000. Em 10 anos, isso representa mais de R$60.000 + juros se investido.",
      icon: "💰"
    }
  ];

  return (
    <section className={styles.transformations} id="transformations">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>RESULTADOS BASEADOS EM CIÊNCIA</span>
          <h2>As Transformações Que Você Vai Conquistar</h2>
          <p className={styles.subheading}>
            Descubra como sua vida mudará positivamente em todas as dimensões quando você se libertar do cigarro
          </p>
        </div>

        <div className={styles.transformationsGrid}>
          {transformations.map((item, index) => (
            <div className={styles.transformationCard} key={index}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <div className={styles.comparisonContainer}>
                <div className={styles.beforeState}>
                  <h4>ANTES</h4>
                  <p>{item.before}</p>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.afterState}>
                  <h4>DEPOIS</h4>
                  <p>{item.after}</p>
                </div>
              </div>
              <div className={styles.timeline}>
                <span className={styles.timelineLabel}>Linha do Tempo:</span>
                <p>{item.timeline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA estratégico após mostrar benefícios */}
        {/* <div className={styles.transformationCta}>
          <div className={styles.ctaContent}>
            <h3>Você Está Pronto Para Experimentar Estas Transformações?</h3>
            <p>Cada uma dessas mudanças está ao seu alcance. O método científico que vai guiá-lo através de cada etapa desta jornada está disponível agora.</p>
            <div className={styles.ctaButtons}>
              <a href="#purchase-form" className="btn btn-lg" onClick={trackLead}>QUERO INICIAR MINHA TRANSFORMAÇÃO</a>
              <p className={styles.ctaNote}>Acesso imediato • Baseado em neurociência • Resultados reais</p>
            </div>
          </div>
        </div> */}

        {/* Seção de validação científica baseada no conteúdo real */}
        <div className={styles.scientificValidation}>
          <h3>Base Científica do Método</h3>
          <div className={styles.validationGrid}>
            <div className={styles.validationCard}>
              <div className={styles.validationIcon}>🔬</div>
              <h4>Pesquisa em Neurociência</h4>
              <p>Fundamentado nas pesquisas do Dr. Andrew Huberman (Stanford) sobre circuitos de recompensa e do Dr. Matthew Walker sobre regeneração durante o sono.</p>
            </div>
            <div className={styles.validationCard}>
              <div className={styles.validationIcon}>🧠</div>
              <h4>Prevenção de Recaídas</h4>
              <p>Utiliza o método desenvolvido pelo Dr. Alan Marlatt, pioneiro mundial em prevenção de recaídas comportamentais.</p>
            </div>
            <div className={styles.validationCard}>
              <div className={styles.validationIcon}>❤️</div>
              <h4>Mudança de Identidade</h4>
              <p>Aplica os princípios do Dr. James Clear sobre transformação de identidade como base para mudanças duradouras.</p>
            </div>
          </div>
        </div>

        {/* CTA final da seção */}
        <div className={styles.finalCtaSection}>
          <div className={styles.finalCtaBox}>
            <h3>A Ciência Comprova: Seu Corpo QUER Se Recuperar</h3>
            <p>Você não precisa acreditar apenas nas nossas palavras. A literatura científica confirma cada benefício listado acima. O que você precisa agora é do método correto para chegar lá.</p>
            {/* <a href="#purchase-form" className={`btn btn-lg ${styles.scientificCta}`} onClick={trackLead}>
              ACESSAR O MÉTODO CIENTÍFICO COMPLETO
            </a> */}
            <div className={styles.scientificCredits}>
              <small>Baseado nos trabalhos de: Dr. Alan Marlatt, Dr. Andrew Huberman, Dr. James Clear, Dr. Matthew Walker, entre outros</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;