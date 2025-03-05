import styles from './styles/VideoSection.module.css';

export default function VideoSection() {
  return (
    <section className={styles.videoSection} id="video">
      <div className="container">
        <h2 className="text-center">Veja Como o Método Funciona</h2>
        <p className="text-center">Assista a esta breve explicação sobre como nosso guia pode transformar sua vida:</p>
        
        <div className={styles.videoPlaceholder}>
          <p>Vídeo explicativo sobre o método LIBERTE-SE</p>
        </div>
      </div>
    </section>
  );
}