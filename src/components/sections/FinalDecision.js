import styles from './styles/FinalDecision.module.css';

export default function FinalDecision() {
  // Cálculo do custo do cigarro ao longo do tempo
  const cigaretteCostPerDay = 20; // Custo aproximado de um maço
  const costPerMonth = cigaretteCostPerDay * 30;
  const costPerYear = costPerMonth * 12;
  const costPerDecade = costPerYear * 10;

  return (
    <section className={styles.finalDecision} id="final-decision">
      <div className="container">
        <h2 className="text-center">O Que Está Realmente em Jogo</h2>
        
        {/* <div className={styles.costCalculator}>
          <h3>O Custo Real do Cigarro na Sua Vida</h3>
          
          <div className={styles.costGrid}>
            <div className={styles.costItem}>
              <div className={styles.costFigure}>R$ {costPerMonth.toLocaleString()}</div>
              <div className={styles.costPeriod}>Por Mês</div>
              <div className={styles.costDescription}>Um jantar especial com quem você ama</div>
            </div>
            
            <div className={styles.costItem}>
              <div className={styles.costFigure}>R$ {costPerYear.toLocaleString()}</div>
              <div className={styles.costPeriod}>Por Ano</div>
              <div className={styles.costDescription}>Uma viagem inesquecível para conhecer novos lugares</div>
            </div>
            
            <div className={styles.costItem}>
              <div className={styles.costFigure}>R$ {costPerDecade.toLocaleString()}</div>
              <div className={styles.costPeriod}>Em 10 Anos</div>
              <div className={styles.costDescription}>A entrada para sua casa própria ou um carro zero</div>
            </div>
          </div>
          
          <p className={styles.costNote}>E isso sem considerar gastos com saúde, perda de produtividade, odor em roupas e móveis...</p>
        </div> */}
        
        <div className={styles.lifeScenarios}>
          <div className={styles.scenarioContainer}>
            <div className={styles.scenario}>
              <h3>Sua Vida Sem Mudanças</h3>
              <ul>
                <li>Acordar todos os dias com aquela tosse persistente</li>
                <li>Planejamento constante para garantir que nunca faltará cigarro</li>
                <li>Evitar certas atividades porque não poderá fumar</li>
                <li>Olhares de desaprovação em espaços públicos</li>
                <li>Sensação frequente de culpa e impotência diante do vício</li>
                <li>Saúde deteriorando gradualmente, com sintomas cada vez mais preocupantes</li>
                <li>Incerteza sobre quanto tempo ainda tem de vida saudável</li>
              </ul>
            </div>
            
            <div className={styles.scenario}>
              <h3>Sua Nova Vida Como Não-Fumante</h3>
              <ul>
                <li>Despertar revigorado, respirando profundamente sem dificuldade</li>
                <li>Liberdade para ir onde quiser, sem a preocupação constante com o próximo cigarro</li>
                <li>Sabor intenso nas refeições, redescobrindo prazeres simples da vida</li>
                <li>Orgulho nos olhos dos seus filhos, parceiro ou pais ao verem sua conquista</li>
                <li>Economia substancial que permite realizar sonhos antes adiados</li>
                <li>Confiança renovada na sua capacidade de superar desafios</li>
                <li>Paz de espírito ao saber que adicionou anos de qualidade à sua vida</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.finalMessage}>
            <p>Você está a apenas uma decisão de distância da vida que realmente merece viver. Não é apenas sobre parar de fumar — é sobre reclamar o controle da sua saúde, das suas finanças e do seu futuro.</p>
            <p>Pense nas pessoas que você ama. Na vida que você sonha. Nas experiências que ainda quer viver.</p>
            <p>Invista hoje no seu bem mais precioso: você mesmo.</p>
            <a href="#pricing" className={styles.finalCta}>QUERO TRANSFORMAR MINHA VIDA AGORA</a>
          </div>
        </div>
      </div>
    </section>
  );
}