import styles from './styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>LIBERTE-SE: O GUIA DEFINITIVO PARA LARGAR O CIGARRO</h1>
        <h2>Descubra como parar de fumar de uma vez por todas e transforme sua vida com um método comprovado e eficaz - desenvolvido com base em décadas de pesquisas científicas.</h2>
        <p>Uma abordagem holística, que trata não apenas os sintomas físicos, mas também os aspectos psicológicos, emocionais e comportamentais para ajudar você a se livrar da dependência do cigarro.</p>

        {/* <div className="limited-offer">Oferta por tempo limitado - 60% de desconto!</div>
        <a href="#pricing" className="btn">QUERO ME LIBERTAR AGORA!</a> */}
      </div>
    </section>
  );
}