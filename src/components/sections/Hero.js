import Image from 'next/image';
import styles from './styles/Hero.module.css';
import { useTracking } from '../../hooks/userTracking';


const Hero = () => {
  const { trackLead } = useTracking();
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span>Baseado em Neurociência</span>
            </div>
            <h1>LIBERTE-SE DO CIGARRO</h1>
            <h2>O Guia Definitivo Para Quem Quer Parar de Fumar <span className="highlight">De Uma Vez Por Todas</span></h2>
            <p>
              Uma abordagem cientificamente fundamentada que trata não apenas os sintomas físicos, mas também os aspectos psicológicos, emocionais e comportamentais para ajudar você a se livrar da dependência do cigarro.
            </p>
            
            {/* Novos elementos de prova social */}
            <div className={styles.socialProof}>
              <div className={styles.proofItem}>
                <span className={styles.proofIcon}>🔬</span>
                <span>Baseado em ciẽncia</span>
              </div>
              <div className={styles.proofItem}>
                <span className={styles.proofIcon}>📚</span>
                <span>Método completo</span>
              </div>
              <div className={styles.proofItem}>
                <span className={styles.proofIcon}>⚡</span>
                <span>Acesso imediato</span>
              </div>
            </div>

            <div className={styles.heroButtons}>
              <a href="#purchase-form" className={`btn btn-lg ${styles.primaryCta}`} onClick={trackLead}>
                COMEÇAR MINHA LIBERDADE AGORA
              </a>
              <div className={styles.ctaSupport}>
                <p className={styles.ctaNote}>
                  <span className={styles.secureIcon}>🔒</span>
                  Compra 100% segura • Acesso imediato • Sem mensalidades
                </p>
              </div>
            </div>

            {/* Benefício específico como hook adicional */}
            <div className={styles.benefitHook}>
              <p className={styles.hookText}>
                <strong>Em apenas 48 horas sem fumar</strong>, seus sentidos já começam a se recuperar. 
                Imagine redescobrir o verdadeiro sabor da vida.
              </p>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src='/images/ebook-capa.webp'
              alt='Capa do Ebook Liberte-se do Cigarro'
              width={338}
              height={473}
              className={styles.heroImg}
              priority
            />
            <div className={styles.imageBackground}></div>
          </div>
        </div>

        {/* Stats reformulados com base científica */}
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10</span>
            <span className={styles.statText}>capítulos de transformação baseados em ciência</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>R$6.000+</span>
            <span className={styles.statText}>economia anual média de quem para de fumar</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>48h</span>
            <span className={styles.statText}>para os primeiros benefícios aparecerem</span>
          </div>
        </div>

        {/* Elemento de urgência sutil */}
        <div className={styles.urgentReminder}>
          <div className={styles.reminderContent}>
            <h3>A Cada Minuto Que Passa...</h3>
            <div className={styles.reminderStats}>
              <div className={styles.reminderItem}>
                <span className={styles.reminderNumber}>11</span>
                <span className={styles.reminderLabel}>minutos de vida perdidos por cigarro</span>
              </div>
              <div className={styles.reminderItem}>
                <span className={styles.reminderNumber}>R$1</span>
                <span className={styles.reminderLabel}>perdido a cada cigarro</span>
              </div>
            </div>
            <p className={styles.reminderText}>
              Seu corpo está esperando pela oportunidade de se regenerar. Dê a ele essa chance hoje.
            </p>
            <a href="#purchase-form" className={`btn ${styles.reminderCta}`} onClick={trackLead}>
              PARAR DE PERDER, COMEÇAR A GANHAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;