"use client";

import { useState } from 'react';
import styles from './styles/ContentPreview.module.css';

export default function ContentPreview() {
  const chapters = [
    {
      number: 1,
      title: "O Primeiro Passo para sua Liberdade",
      description: "Explore sua relação com o cigarro e entenda por que você está pronto para essa mudança transformadora em sua vida."
    },
    {
      number: 2,
      title: "O Roubo Silencioso - Os verdadeiros custos do cigarro",
      description: "Descubra o impacto real do cigarro na sua saúde, finanças e qualidade de vida - muito além do que você imagina."
    },
    {
      number: 3,
      title: "O Que Ninguém Te Conta sobre o tabagismo",
      description: "Revelações surpreendentes sobre a indústria do tabaco e como a dependência é desenvolvida e mantida."
    },
    {
      number: 4,
      title: "O Horizonte que Te Espera - Benefícios e histórias de sucesso",
      description: "Histórias inspiradoras de pessoas que superaram o vício e os benefícios que você experimentará a cada etapa."
    },
    {
      number: 5,
      title: "Conhecendo seu Inimigo Interno",
      description: "Identifique seus gatilhos pessoais e padrões que mantêm o hábito de fumar em sua vida."
    },
    {
      number: 6,
      title: "Seu Arsenal para a Vitória - Métodos práticos",
      description: "Ferramentas e técnicas concretas para lidar com a fissura e situações desafiadoras no dia a dia."
    },
    {
      number: 7,
      title: "Motivação Inabalável para os primeiros meses",
      description: "Estratégias para manter o foco e a determinação durante o período mais crítico da sua jornada."
    },
    {
      number: 8,
      title: "Renascendo das Cinzas - Recuperação física e emocional",
      description: "Como seu corpo e mente se transformam durante o processo de abandono do cigarro."
    },
    {
      number: 9,
      title: "Superando as Pedras no Caminho - Lidando com recaídas",
      description: "Aprenda a encarar tropeços como parte do processo e a retomar seu caminho com mais força."
    },
    {
      number: 10,
      title: "Sua Nova Vida Começa Agora - Estratégias para sucesso duradouro",
      description: "Consolide sua nova identidade como não-fumante e aproveite plenamente sua liberdade reconquistada."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [sectionVisible, setSectionVisible] = useState(true);

  const toggleChapter = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSection = () => {
    setSectionVisible(!sectionVisible);
  };

  return (
    <section className={styles.contentPreview} id="content">
      <div className="container">
        <div className={styles.sectionHeader} onClick={toggleSection}>
          <h2 className="text-center">O Que Você Vai Encontrar No Ebook</h2>
          <span className={styles.sectionToggleIcon}>{sectionVisible ? '−' : '+'}</span>
        </div>
        
        {sectionVisible && (
          <>
            <p className="text-center">Um guia completo com 10 capítulos transformadores:</p>
            
            <div className={styles.chaptersList}>
              {chapters.map((chapter, index) => (
                <div 
                  key={index} 
                  className={`${styles.chapterItem} ${openIndex === index ? styles.active : ''}`}
                >
                  <div 
                    className={styles.chapterHeader}
                    onClick={() => toggleChapter(index)}
                  >
                    <h3><strong>Capítulo {chapter.number}:</strong> {chapter.title}</h3>
                    <span className={styles.toggleIcon}>{openIndex === index ? '−' : '+'}</span>
                  </div>
                  <div className={styles.chapterDetails} style={{ display: openIndex === index ? 'block' : 'none' }}>
                    <p>{chapter.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center">Além de materiais complementares, calendário de acompanhamento e recursos adicionais!</p>
          </>
        )}
      </div>
    </section>
  );
}