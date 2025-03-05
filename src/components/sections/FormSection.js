import styles from './styles/FormSection.module.css';

export default function FormSection() {
  return (
    <section className={styles.formSection} id="form">
      <div className="container">
        <h2 className="text-center">Dê o Primeiro Passo Para Sua Liberdade</h2>
        <p className="text-center">Preencha o formulário abaixo para adquirir seu ebook:</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone (opcional)</label>
            <input type="tel" id="phone" />
          </div>
          
          <button type="submit" className="btn">COMPRAR AGORA POR R$20</button>
        </form>
      </div>
    </section>
  );
}