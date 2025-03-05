"use client";

import { useState } from 'react';
import styles from './styles/FAQ.module.css';

export default function FAQ() {
  const faqItems = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os benefícios físicos começam em minutos após parar de fumar. Nosso método foi desenvolvido para ajudar você a superar a dependência psicológica nas primeiras semanas, que é o período mais crítico."
    },
    {
      question: "Já tentei parar várias vezes e não consegui. Por que seria diferente agora?",
      answer: "A maioria das pessoas tenta parar de fumar usando apenas força de vontade. Nosso método aborda todos os aspectos da dependência: física, psicológica e comportamental, aumentando significativamente suas chances de sucesso."
    },
    {
      question: "Preciso de algum conhecimento prévio ou equipamento especial?",
      answer: "Não. O guia foi desenvolvido para ser acessível a qualquer pessoa, independentemente de experiências anteriores. Todas as técnicas podem ser aplicadas sem equipamentos especiais."
    },
    {
      question: "O ebook funciona para qualquer tipo de fumante?",
      answer: "Sim. Nosso método foi desenvolvido considerando diferentes perfis de fumantes, desde os ocasionais até os de longo prazo. As estratégias podem ser adaptadas ao seu caso específico."
    },
    {
      question: "Como recebo o ebook após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um email com o link para download do ebook em formato PDF."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [sectionVisible, setSectionVisible] = useState(true);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSection = () => {
    setSectionVisible(!sectionVisible);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div className={styles.sectionHeader} onClick={toggleSection}>
          <h2 className="text-center">Perguntas Frequentes</h2>
          <span className={styles.sectionToggleIcon}>{sectionVisible ? '−' : '+'}</span>
        </div>
        
        {sectionVisible && (
          <>
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
              >
                <h3 
                  onClick={() => toggleQuestion(index)}
                  className={styles.questionToggle}
                >
                  {item.question}
                  <span className={styles.toggleIcon}>{openIndex === index ? '−' : '+'}</span>
                </h3>
                <div className={styles.answer} style={{ display: openIndex === index ? 'block' : 'none' }}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}