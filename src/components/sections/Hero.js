import Image from 'next/image';
import styles from './styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span>Método Comprovado</span>
            </div>
            <h1>LIBERTE-SE DO CIGARRO</h1>
            <h2>O Guia Definitivo Para Quem Quer Parar de Fumar <span className="highlight">De Uma Vez Por Todas</span></h2>
            <p>
              Uma abordagem holística, que trata não apenas os sintomas físicos, mas também os aspectos psicológicos, emocionais e comportamentais para ajudar você a se livrar da dependência do cigarro.
            </p>
            <div className={styles.heroButtons}>
              <a href="#pricing" className="btn btn-lg">
                QUERO ME LIBERTAR AGORA
              </a>
              {/* <div className={styles.countdown}>
                <span>Oferta especial expira em:</span>
                <div className={styles.timer}>
                  <div className={styles.timerUnit}>
                    <span className={styles.number}>24</span>
                    <span className={styles.label}>horas</span>
                  </div>
                  <div className={styles.timerUnit}>
                    <span className={styles.number}>36</span>
                    <span className={styles.label}>minutos</span>
                  </div>
                  <div className={styles.timerUnit}>
                    <span className={styles.number}>59</span>
                    <span className={styles.label}>segundos</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className={styles.heroImage}>
            {/* This is where you'll add your hero image */}
            {/* <div className={styles.imagePlaceholder}>
              <span>Imagem do E-book</span>
            </div> */}
            <Image
              src='/images/ebook-capa.webp'
              alt='Capa do Ebook'
              width={300}
              height={420}
              className={styles.heroImg}
            />
          </div>
        </div>
        {/* <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>87%</span>
            <span className={styles.statText}>de sucesso com nosso método completo</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statText}>dias de suporte via email</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>R$6.000+</span>
            <span className={styles.statText}>economizados anualmente</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;