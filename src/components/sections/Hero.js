import styles from './styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>LIBERTE-SE: O GUIA DEFINITIVO PARA LARGAR O CIGARRO</h1>
        <p>Descubra como parar de fumar de uma vez por todas e transforme sua vida com um método comprovado e eficaz.</p>
        <div className="limited-offer">Oferta por tempo limitado - 60% de desconto!</div>
        <a href="#pricing" className="btn">QUERO ME LIBERTAR AGORA!</a>
      </div>
    </section>
  );
}