import styles from './styles/Transformation.module.css';

export default function Transformation() {
  const benefits = [
    {
      title: "Saúde Renovada",
      description: "Capacidade pulmonar melhorada, risco de doenças cardíacas reduzido pela metade, menos infecções respiratórias e retorno gradual das funções imunológicas normais."
    },
    {
      title: "Vigor e Energia Recuperados",
      description: "Fim da fadiga constante, disposição para exercícios físicos, melhor qualidade de sono e recuperação da capacidade de subir escadas ou caminhar sem falta de ar."
    },
    {
      title: "Liberdade Emocional",
      description: "Fim da montanha-russa emocional da dependência, redução significativa da ansiedade, capacidade genuína de relaxar e maior estabilidade emocional em situações de estresse."
    },
    {
      title: "Autoestima Elevada",
      description: "Orgulho de superar um dos vícios mais difíceis, confiança renovada em sua força de vontade e capacidade de controlar seu próprio destino."
    },
    {
      title: "Relacionamentos Fortalecidos",
      description: "Mais tempo e qualidade com pessoas queridas, fim do afastamento para fumar, exemplo positivo para filhos e familiares, e eliminação do odor persistente de cigarro."
    },
    {
      title: "Aparência Rejuvenescida",
      description: "Pele mais clara e hidratada, redução de rugas precoces, dentes mais brancos, eliminação do odor no hálito, cabelo e roupas, unhas mais fortes e menos amareladas."
    },
    {
      title: "Economia Substancial",
      description: "Uma economia de milhares de reais anualmente, redução de gastos com medicamentos, menos dias de trabalho perdidos e menor custo com produtos de higiene e limpeza."
    },
    {
      title: "Paladar e Olfato Recuperados",
      description: "Redescoberta do verdadeiro sabor dos alimentos, experiências gastronômicas mais ricas e prazerosas, e capacidade de perceber aromas sutis novamente."
    }
  ];

  return (
    <section className={styles.transformation} id="transformation">
      <div className="container">
        <h2 className="text-center">As Transformações que Você Vai Conquistar</h2>
        <p className="text-center">Ao seguir nosso método comprovado, você não apenas deixará o cigarro para trás, mas experimentará mudanças profundas em todas as áreas da sua vida:</p>
        
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.transformationQuote}>
          <p>"Não se trata apenas de parar de fumar. Trata-se de redescobrir a versão mais saudável, livre e plena de você mesmo."</p>
        </div>
      </div>
    </section>
  );
}