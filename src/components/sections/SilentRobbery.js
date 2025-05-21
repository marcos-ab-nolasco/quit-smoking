import Image from 'next/image';
import styles from './styles/SilentRobbery.module.css';

const SilentRobbery = () => {
  return (
    <section className={styles.silentRobbery} id="silent-robbery">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>O Roubo Silencioso Que Acontece Todos os Dias</h2>
          <p className={styles.subheading}>
            Enquanto você lê estas palavras, o cigarro continua a roubar aspectos preciosos da sua vida - <span className="highlight">de formas que você provavelmente nem percebe</span>
          </p>
        </div>
        
        <div className={styles.robberyGrid}>
          <div className={styles.robberyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  {/* Icon placeholder - replace with actual icon */}
                  <span className={styles.iconPlaceholder}>🫁</span>
                </div>
              </div>
              <h3>Roubo Físico</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                {/* Image placeholder */}
                {/* <div className={styles.imagePlaceholder}>
                  <span>Imagem: Impacto Físico</span>
                </div> */}
                <Image 
                  src="/images/physica-steal.webp" 
                  alt="Impacto físico do cigarro" 
                  width={400} 
                  height={200} 
                  // fill
                  // style={{ height: 'auto', width: '100%' }} // Se quiser responsivo
                  // layout="responsive" 
                  // placeholder="blur" 
                />
              </div>
              <div className={styles.cardText}>
                <p>Cada tragada danifica progressivamente seus pulmões, coração e vasos sanguíneos. O cigarro rouba sua capacidade pulmonar, acelera o envelhecimento da pele e reduz seu paladar e olfato.</p>
                <ul className={styles.robberyCosts}>
                  <li>11 minutos de vida a cada cigarro</li>
                  <li>30% de redução na capacidade respiratória</li>
                  <li>2-4x maior risco de ataque cardíaco</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.robberyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  {/* Icon placeholder - replace with actual icon */}
                  <span className={styles.iconPlaceholder}>😔</span>
                </div>
              </div>
              <h3>Roubo Emocional</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                {/* Image placeholder */}
                {/* <div className={styles.imagePlaceholder}>
                  <span>Imagem: Impacto Emocional</span>
                </div> */}
                <Image 
                  src="/images/emotial-steal-new.png" 
                  alt="Impacto emocional do cigarro" 
                  width={600} 
                  height={300} 
                  // style={{ height: 'auto', width: '100%' }} // Se quiser responsivo
                  // fill
                  // layout="responsive" 
                  // placeholder="blur" 
                />
              </div>
              <div className={styles.cardText}>
                <p>O cigarro cria um ciclo vicioso de ansiedade: você fuma para aliviar o estresse, mas é o próprio cigarro que cria esse desconforto quando os níveis de nicotina caem.</p>
                <ul className={styles.robberyCosts}>
                  <li>70% maior risco de ansiedade e depressão</li>
                  <li>Ciclos constantes de irritabilidade</li>
                  <li>Culpa e vergonha persistentes</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.robberyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  {/* Icon placeholder - replace with actual icon */}
                  <span className={styles.iconPlaceholder}>👨‍👩‍👧‍👦</span>
                </div>
              </div>
              <h3>Roubo Social</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                {/* Image placeholder */}
                <Image 
                  src="/images/social-steal.webp" 
                  alt="Impacto social do cigarro" 
                  width={600} 
                  height={300} 
                  // layout="responsive" 
                  // placeholder="blur" 
                />
                {/* <div className={styles.imagePlaceholder}>
                  <span>Imagem: Impacto Social</span>
                </div> */}
              </div>
              <div className={styles.cardText}>
                <p>Momentos preciosos com pessoas queridas são interrompidos pela necessidade de fumar. Relacionamentos são afetados pelo cheiro, pela saúde comprometida e pelo exemplo negativo.</p>
                <ul className={styles.robberyCosts}>
                  <li>3x maior probabilidade de filhos fumarem</li>
                  <li>Horas acumuladas de ausência em eventos</li>
                  <li>Crescente estigma social</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.robberyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  {/* Icon placeholder - replace with actual icon */}
                  <span className={styles.iconPlaceholder}>💰</span>
                </div>
              </div>
              <h3>Roubo Financeiro</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                {/* Image placeholder */}
                {/* <div className={styles.imagePlaceholder}>
                  <span>Imagem: Impacto Financeiro</span>
                </div> */}
                  <Image 
                    src="/images/financial-steal.webp" 
                    alt="Impacto financeiro do cigarro" 
                    width={600} 
                    height={300} 
                    // layout="responsive" 
                    // placeholder="blur" 
                  />
              </div>
              <div className={styles.cardText}>
                <p>Um fumante médio gasta uma pequena fortuna em cigarros ao longo da vida. Sem contar custos indiretos com saúde, seguros mais caros e dias de trabalho perdidos.</p>
                <div className={styles.calculator}>
                  <div className={styles.calculatorRow}>
                    <span>Gasto diário</span>
                    <span className={styles.calculatorValue}>R$ 20</span>
                  </div>
                  <div className={styles.calculatorRow}>
                    <span>Gasto mensal</span>
                    <span className={styles.calculatorValue}>R$ 600</span>
                  </div>
                  <div className={styles.calculatorRow}>
                    <span>Gasto anual</span>
                    <span className={styles.calculatorValue}>R$ 7.300</span>
                  </div>
                  <div className={styles.calculatorRow}>
                    <span>Em 10 anos</span>
                    <span className={styles.calculatorValue}>R$ 73.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.realityCheck}>
          <div className={styles.realityCard}>
            <h3>A Dura Realidade</h3>
            <p>Se nada mudar, a qualidade da sua vida diminuirá progressivamente a cada dia - muito antes dos problemas de saúde mais graves aparecerem. O cigarro está roubando seu presente e hipotecando seu futuro.</p>
          </div>
          {/* <div className={styles.actionCard}>
            <a href="#pricing" className="btn">QUERO RECUPERAR MINHA VIDA</a>
            <p className={styles.actionText}>Descubra como parar de fumar <u>sem sofrimento</u> com nosso método comprovado</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SilentRobbery;