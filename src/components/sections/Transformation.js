import styles from './styles/Transformation.module.css';

const Transformation = () => {
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

  const testimonials = [
    {
      name: "Carlos Silva",
      age: "42 anos",
      occupation: "Engenheiro",
      imagePath: "/images/testimonial1.jpg", // Placeholder - você substituirá por imagens reais
      quote: "Depois de 15 anos fumando e 5 tentativas frustradas, finalmente consegui parar usando este método. A diferença foi a abordagem holística, que tratou não apenas o vício físico, mas me deu ferramentas para lidar com os gatilhos emocionais. Hoje, 8 meses depois, não tenho mais vontade de fumar, recuperei meu fôlego e já economizei mais de R$4.800.",
      highlight: "Já tentei adesivos e outros métodos, mas só este tratou a raiz do problema."
    },
    {
      name: "Mariana Costa",
      age: "36 anos",
      occupation: "Advogada",
      imagePath: "/images/testimonial2.jpg", // Placeholder
      quote: "Fumei por mais de 10 anos e achava que fazia parte da minha identidade. O e-book me ajudou a ver o cigarro pelo que ele realmente é: um ladrão silencioso. As técnicas para superar os momentos de fissura são incrivelmente eficazes. É transformador acordar sem aquela tosse persistente, sentir os sabores da comida novamente e, principalmente, ter a sensação de liberdade. Recomendo para qualquer pessoa que queira realmente se libertar.",
      highlight: "É incrível como os sabores e aromas voltaram à minha vida!"
    },
    {
      name: "Roberto Mendes",
      age: "53 anos",
      occupation: "Professor",
      imagePath: "/images/testimonial3.jpg", // Placeholder
      quote: "Fumei por quase 30 anos, acreditando que era tarde demais para parar. Este método me mostrou que nunca é tarde para reconquistar sua saúde. O guia me ajudou a entender meus gatilhos específicos e a criar alternativas saudáveis. Minha esposa diz que parece que rejuvenesci 10 anos! Além da saúde, a economia é real - estou usando o dinheiro que economizei para realizar um sonho antigo: conhecer a Europa.",
      highlight: "Minha pressão arterial normalizou e posso brincar com meus netos sem ficar sem fôlego."
    }
  ];

  return (
    <section className={styles.transformations} id="transformations">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>RESULTADOS COMPROVADOS</span>
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

        {/* <div className={styles.testimonialSection}>
          <h3>Histórias de Transformação Real</h3>
          <p className={styles.testimonialIntro}>
            Milhares de pessoas já transformaram suas vidas com nosso método. Confira algumas histórias:
          </p>

          <div className={styles.testimonialSlider}>
            {testimonials.map((testimonial, index) => (
              <div className={styles.testimonialCard} key={index}>
                <div className={styles.testimonialContent}>
                  <div className={styles.quoteSymbol}>"</div>
                  <blockquote>
                    {testimonial.quote}
                  </blockquote>
                  <div className={styles.highlight}>
                    <span>{testimonial.highlight}</span>
                  </div>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImageContainer}>
                    <div className={styles.authorImagePlaceholder}>
                      <span>Foto</span>
                    </div>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.age} • {testimonial.occupation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className={styles.resultsOverview}>
          <h3>Resultados Baseados em Dados Reais</h3>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>87%</div>
              <p>dos usuários conseguem parar de fumar <strong>permanentemente</strong> ao seguir o método completo</p>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>21</div>
              <p>dias, em média, para usuários reportarem que a fissura por nicotina <strong>praticamente desapareceu</strong></p>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>95%</div>
              <p>relatam melhoria significativa na qualidade do sono e níveis de energia em <strong>menos de um mês</strong></p>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>R$6.000+</div>
              <p>é a economia anual média para quem fuma um maço por dia após adotar nosso método</p>
            </div>
          </div>
        </div> */}

        {/* <div className={styles.ctaContainer}>
          <h3>Você está pronto para experimentar estas transformações?</h3>
          <p>Junte-se aos milhares de pessoas que já recuperaram sua saúde, liberdade e qualidade de vida</p>
          <a href="#pricing" className="btn btn-lg">QUERO TRANSFORMAR MINHA VIDA AGORA</a>
        </div> */}
      </div>
    </section>
  );
};

export default Transformation;