"use client";

// import { useState } from 'react';
// import Image from 'next/image';
import styles from './styles/FormSection.module.css';


const FormSection = () => {
    // const [email, setEmail] = useState('');
    // const [isSubmitting, setIsSubmitting] = useState(false);
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // setIsSubmitting(true);
      
    //   // Aqui você pode opcionalmente capturar o email para sua lista antes de redirecionar
    //   // Exemplo de código para salvar o email em sua lista:
    //   // saveEmailToList(email).then(() => {
    //   //   window.location.href = 'https://kiwify.app/seu-produto';
    //   // });
      
    //   // Ou simplesmente redirecionar:
    //   setTimeout(() => {
    //     window.location.href = 'https://kiwify.app/seu-produto';
    //     // setIsSubmitting(false);
    //   }, 500);
    // };
  
    return (
      <section className={styles.purchaseForm} id="purchase-form">
        <div className="container">
          <div className={styles.formWrapper}>
            <div className={styles.formContent}>
              <div className={styles.formHeader}>
                <h2>Transforme Sua Vida Hoje!</h2>
                <p>Obtenha acesso imediato ao método completo para se libertar do cigarro</p>
              </div>
              
              {/* Opcional: Formulário para capturar email antes do redirecionamento */}
              {/* <form className={styles.emailCaptureForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Digite seu melhor email (opcional)"
                    value={email}
                    onChange={(e) => setEmail(e.value)}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`btn btn-lg ${styles.kiwifyButton}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'PROCESSANDO...' : 'GARANTIR MEU ACESSO POR APENAS R$ 47'}
                </button>
              </form> */}
              
              {/* Link direto alternativo (se quiser pular o formulário) */}
              <div className={styles.directLinkContainer}>
                <a 
                  href="https://pay.kiwify.com.br/DDYndDS" 
                  className={`btn btn-lg ${styles.kiwifyDirectLink}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  QUERO TRANSFORMAR MINHA VIDA AGORA
                </a>
              </div>
              
              <div className={styles.securePaymentInfo}>
                <div className={styles.secureCheckout}>
                  <span className={styles.lockIcon}>🔒</span>
                  <span>Pagamento 100% seguro processado pelo Kiwify</span>
                </div>
                
                <div className={styles.paymentMethods}>
                  <div className={styles.paymentIcons}>
                    <span className={styles.paymentIcon}>💳</span>
                    <span className={styles.paymentIcon}>🏦</span>
                    <span className={styles.paymentIcon}>📱</span>
                  </div>
                  <span>Aceitamos todos os cartões, boleto e Pix</span>
                </div>
                
                {/* <div className={styles.guaranteeNotice}>
                  <strong>Garantia de 7 dias</strong> - Se não ficar satisfeito, devolveremos seu dinheiro
                </div> */}
              </div>
            </div>
            
            <div className={styles.formSidebar}>
              <div className={styles.orderSummary}>
                <h3>O Que Você Receberá</h3>
                
                <div className={styles.productSummary}>
                  <div className={styles.productImagePlaceholder}>
                    <span>Capa E-book</span>
                  </div>

                  {/* <Image
                    src='/images/ebook-capa.png'
                    alt='Capa do Ebook'
                    width={45}
                    height={80}
                    className={styles.productImg}
                  /> */}
                  <div className={styles.productDetails}>
                    <h4>E-book "Liberte-se do Cigarro"</h4>
                    <p>Guia completo para abandonar o cigarro definitivamente</p>
                    <div className={styles.productPrice}>
                      <span className={styles.originalPrice}>De R$ 60</span>
                      <span className={styles.currentPrice}>Por R$ 27</span>
                    </div>
                  </div>
                </div>
                
                {/* <div className={styles.includedItems}>
                  <h4>Itens Incluídos:</h4>
                  <ul>
                    <li>E-book principal (PDF)</li>
                    <li>Kit de ferramentas práticas</li>
                    <li>Guia de bolso para crises</li>
                    <li>30 dias de suporte por email</li>
                    <li>5 meditações guiadas em áudio</li>
                    <li>Calendário de acompanhamento</li>
                    <li>Sequência de 30 emails motivacionais</li>
                  </ul>
                </div> */}
                
                <div className={styles.benefitsHighlights}>
                  <h4>Benefícios Rápidos:</h4>
                  <ul className={styles.benefitsList}>
                    <li>
                      <span className={styles.benefitIcon}>⏱️</span>
                      <span>Acesso imediato a todo o conteúdo</span>
                    </li>
                    {/* <li>
                      <span className={styles.benefitIcon}>🛡️</span>
                      <span>Garantia de satisfação de 7 dias</span>
                    </li> */}
                    <li>
                      <span className={styles.benefitIcon}>💰</span>
                      <span>Economia de R$6.000+ por ano</span>
                    </li>
                    <li>
                      <span className={styles.benefitIcon}>🧠</span>
                      <span>Método baseado em neurociência</span>
                    </li>
                  </ul>
                </div>
                
                {/* <div className={styles.testimonialSnippet}>
                  <div className={styles.quoteSymbol}>"</div>
                  <p>Depois de 5 tentativas fracassadas, este método foi o único que funcionou para mim. Estou livre há 9 meses e não sinto mais vontade.</p>
                  <div className={styles.testimonialAuthor}>
                    <span>— Roberto M., 42 anos</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FormSection;