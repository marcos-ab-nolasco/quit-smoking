"use client";

import { useState } from 'react';
import styles from './styles/FAQ.module.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  const questions = [
    {
      question: "Como funciona o método apresentado no e-book?",
      answer: "O método 'Liberte-se do Cigarro' é uma abordagem holística que atua nos três pilares da dependência: físico, psicológico e comportamental. Diferente de técnicas convencionais que focam apenas em um aspecto, nosso método fornece ferramentas específicas para cada dimensão da dependência, permitindo uma transformação completa e duradoura. O e-book guia você através de 10 capítulos progressivos, desde o entendimento profundo da sua relação com o cigarro até a consolidação da sua nova identidade como não-fumante."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os benefícios físicos começam literalmente minutos após seu último cigarro. Em 24 horas, o monóxido de carbono é eliminado do seu corpo. Em 48 horas, seu paladar e olfato já começam a melhorar. Quanto à superação da dependência, nosso método foi estruturado para ajudar você a atravessar o período mais desafiador (primeiros 21 dias) com maior facilidade. A maioria dos usuários relata uma redução drástica na fissura por nicotina após 2-3 semanas seguindo o método completo. Claro que cada pessoa tem seu próprio ritmo, mas o e-book fornece ferramentas para cada fase da jornada."
    },
    {
      question: "Já tentei parar várias vezes sem sucesso. Por que este método seria diferente?",
      answer: "A maioria das pessoas tenta parar usando apenas força de vontade ou métodos que tratam apenas o aspecto físico da dependência, como adesivos e gomas de nicotina. O diferencial do nosso método é justamente sua abordagem integrada, que trata simultaneamente a dependência física da nicotina, os gatilhos psicológicos que mantêm o ciclo do vício, e os comportamentos automáticos associados ao fumo. Além disso, o método identifica seu perfil específico de fumante e oferece estratégias personalizadas que funcionam para o seu tipo específico de dependência, aumentando significativamente suas chances de sucesso."
    },
    {
      question: "O que acontece após a compra? Como recebo o material?",
      answer: "Após a confirmação do pagamento, você será redirecionado automaticamente para a área de clientes do Kiwifi, onde terá acesso imediato ao e-book em formato PDF e aos materiais complementares. Você também receberá um e-mail com as instruções de acesso e informações sobre o suporte via e-mail, disponível por 30 dias para esclarecer dúvidas ao longo do processo."
    },
    {
      question: "Preciso de conhecimentos técnicos para usar o e-book?",
      answer: "Absolutamente não. O e-book foi desenvolvido para ser acessível a qualquer pessoa, independentemente de conhecimentos técnicos ou experiências anteriores. Tudo é explicado em linguagem simples e direta, com instruções passo a passo para cada técnica e ferramenta apresentada. Os PDFs interativos são intuitivos e fáceis de usar, e você também receberá orientações claras sobre como aproveitar cada componente do método."
    },
    {
      question: "O método funciona para quem usa vape ou cigarro eletrônico?",
      answer: "Sim! Embora os dispositivos sejam diferentes, a dependência da nicotina e os mecanismos psicológicos envolvidos são essencialmente os mesmos. O método aborda a dependência independentemente da forma como a nicotina é consumida. Na verdade, dedicamos uma seção específica para adaptações necessárias para usuários de vape e cigarros eletrônicos, reconhecendo as particularidades desses dispositivos."
    },
    {
      question: "Quanto tempo tenho acesso ao material?",
      answer: "Seu acesso ao e-book e todos os materiais complementares é vitalício. Após a compra, você pode baixar os arquivos e salvá-los em seus dispositivos, tendo acesso permanente ao conteúdo. Além disso, caso lançemos atualizações do material, você será notificado e terá acesso às versões mais recentes sem custo adicional."
    },
    // {
    //   question: "E se eu não gostar do e-book ou o método não funcionar para mim?",
    //   answer: "Oferecemos uma garantia de satisfação de 7 dias. Se por qualquer motivo você sentir que o material não atende às suas expectativas ou não está funcionando para você, basta nos enviar um e-mail dentro desse período e reembolsaremos 100% do seu investimento, sem questionamentos. Nossa prioridade é sua satisfação e transformação, e temos confiança no método que desenvolvemos."
    // },
    {
      question: "Existem contraindicações ou situações em que o método não é recomendado?",
      answer: "O método é seguro e pode ser usado pela maioria das pessoas. No entanto, se você tem condições médicas graves, está grávida ou amamentando, ou toma medicação controlada, recomendamos consultar seu médico antes de iniciar qualquer programa de cessação do tabagismo. O e-book não substitui orientação médica profissional e deixa isso claro logo no início do material."
    },
    // {
    //   question: "Posso compartilhar o e-book com familiares que também fumam?",
    //   answer: "O e-book é para uso pessoal e está protegido por direitos autorais. Embora entendamos o desejo de ajudar entes queridos, cada licença permite o uso por apenas uma pessoa. Se você conhece alguém que poderia se beneficiar do método, recomendamos que essa pessoa adquira sua própria cópia. Isso não apenas respeita os direitos autorais, mas também aumenta o compromisso pessoal da pessoa com o processo de mudança."
    // }
  ];

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>DÚVIDAS FREQUENTES</span>
          <h2>Respostas Para Suas Perguntas</h2>
          <p className={styles.subheading}>
            Tudo o que você precisa saber antes de iniciar sua jornada de libertação
          </p>
        </div>

        <div className={styles.faqContainer}>
          {questions.map((item, index) => (
            <div 
              className={`${styles.faqItem} ${activeQuestion === index ? styles.active : ''}`} 
              key={index}
            >
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleQuestion(index)}
              >
                <h3>{item.question}</h3>
                <span className={styles.toggleIcon}>
                  {activeQuestion === index ? '−' : '+'}
                </span>
              </div>
              <div 
                className={styles.faqAnswer}
                style={{ display: activeQuestion === index ? 'block' : 'none' }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.additionalSupport}>
          <h3>Ainda tem dúvidas?</h3>
          <p>Entre em contato conosco diretamente e teremos prazer em ajudar</p>
          <a href="mailto:suporte@liberte-se.com" className={styles.supportLink}>
            <span className={styles.emailIcon}>✉️</span> suporte@liberte-se.com
          </a>
        </div>
        
        {/* <div className={styles.faqCta}>
          <h3>Pronto para transformar sua vida?</h3>
          <p>Não deixe mais um dia passar preso à dependência do cigarro</p>
          <a href="#purchase-form" className="btn">QUERO ME LIBERTAR AGORA</a>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;