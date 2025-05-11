import styles from './styles/SilentRobbery.module.css';

export default function SilentRobbery() {
  return (
    <section className={styles.silentRobbery} id="silent-robbery">
      <div className="container">
        <h2 className="text-center">Você já Percebeu o Roubo Silencioso que Está Acontecendo na Sua Vida Agora</h2>
        <h3 className="text-center">Enquanto você lê estas palavras, o cigarro continua a roubar aspectos preciosos da sua vida sem que você perceba completamente:</h3>
        
        <div className={styles.robberyTypes}>
          <div className={styles.robberyItem}>
            <h3>Roubo Físico</h3>
            <p>Cada tragada danifica seu corpo, comprometendo sua respiração, envelhecendo prematuramente sua pele e aumentando riscos de câncer, doenças cardíacas e pulmonares. O cigarro rouba sua vitalidade diariamente, substituindo-a por fadiga crônica e capacidade respiratória reduzida.</p>
          </div>
          
          <div className={styles.robberyItem}>
            ROUBO FISICO IMAGEM
          </div>
          
          <div className={styles.robberyItem}>
            <h3>Roubo Social</h3>
            <p>Seus relacionamentos sofrem enquanto você se ausenta para fumar, limita atividades sociais ou evita lugares onde não pode acender um cigarro. Familiares e amigos são afetados pela sua saúde comprometida e pelo cheiro persistente que acompanha fumantes - criando distanciamento invisível nas relações mais importantes.</p>
          </div>
          
          <div className={styles.robberyItem}>
            ROUBO SOCIAL IMAGEM
          </div>
          <div className={styles.robberyItem}>
            ROUBO EMOCIONAL IMAGEM
          </div>
          
          <div className={styles.robberyItem}>
            <h3>Roubo Emocional</h3>
            <p>A dependência cria uma montanha-russa invisível de emoções, onde a ansiedade e o estresse aumentam quando você não pode fumar. O cigarro sequestra seu equilíbrio emocional, fazendo você acreditar que precisa dele para se acalmar, quando na verdade é ele que cria o desconforto em primeiro lugar.</p>
          </div>
          
          <div className={styles.robberyItem}>
            ROUBO FINANCEIRO IMAGEM  
          </div>
          
          <div className={styles.robberyItem}>
            <h3>Roubo Financeiro</h3>
            <p>Uma fortuna literalmente queimada: um fumante médio gasta dezenas de milhares de reais ao longo da vida em cigarros. Sem contar os custos indiretos com tratamentos médicos, seguros mais caros, medicamentos e dias de trabalho perdidos devido a problemas de saúde relacionados ao tabagismo.</p>
          </div>
        </div>
      </div>
      <h2 className={styles.lastWarning}>A qualidade de sua vida diminui diariamente, muito antes dos problemas mais graves surgirem.</h2>
      
    </section>
  );
}