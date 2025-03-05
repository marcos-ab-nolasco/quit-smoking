import styles from './styles/Pricing.module.css';

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <h2 className="text-center">Invista em Sua Liberdade Hoje</h2>
        <p className="text-center">Por menos do que o custo de alguns maços de cigarro, você pode transformar sua vida para sempre.</p>
        
        <div className="limited-offer">Oferta por tempo limitado!</div>
        
        <div className={styles.priceTag}>
          <span className={styles.originalPrice}>R$50</span>
          <span className={styles.discountPrice}>R$20</span>
        </div>
        
        <p>Economize R$30 (60% de desconto) comprando agora!</p>
        
        <a href="#form" className="btn">QUERO ME LIBERTAR AGORA!</a>
        
        <p>Acesso imediato após a compra - Formato digital (PDF)</p>
      </div>
    </section>
  );
}