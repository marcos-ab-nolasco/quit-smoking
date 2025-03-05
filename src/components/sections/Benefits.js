import styles from './styles/Benefits.module.css';

export default function Benefits() {
  return (
    <section className={styles.benefits} id="benefits">
      <div className="container">
        <h2 className="text-center">Por Que Parar de Fumar Agora</h2>
        <p className="text-center">Estudos científicos comprovam que parar de fumar traz benefícios imediatos para sua saúde e qualidade de vida:</p>
        
        <ul className={styles.benefitsList}>
          <li>Em apenas 20 minutos, sua pressão arterial e frequência cardíaca já começam a normalizar</li>
          <li>Após 48 horas, seu paladar e olfato melhoram significativamente</li>
          <li>Em 2 semanas, sua circulação melhora e a função pulmonar aumenta em até 30%</li>
          <li>Após 1 ano, o risco de doença coronariana cai pela metade</li>
          <li>Economia de mais de R$3.600 por ano para quem fuma um maço por dia</li>
        </ul>
        
        <p className="text-center">Não é apenas sobre saúde - é sobre reconquistar sua <span className="highlight">liberdade</span> e qualidade de vida.</p>
      </div>
    </section>
  );
}