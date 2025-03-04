"use client";

import './globals.css';

export default function Home() {
  return (
    <>
      {/* Seção Hero */}
      <section className="hero">
        <div className="container">
          <h1>LIBERTE-SE: O GUIA DEFINITIVO PARA LARGAR O CIGARRO</h1>
          <p>Descubra como parar de fumar de uma vez por todas e transforme sua vida com um método comprovado e eficaz.</p>
          <div className="limited-offer">Oferta por tempo limitado - 60% de desconto!</div>
          <a href="#pricing" className="btn">QUERO ME LIBERTAR AGORA!</a>
        </div>
      </section>

      {/* Seção Benefícios */}
      <section className="benefits" id="benefits">
        <div className="container">
          <h2 className="text-center">Por Que Parar de Fumar Agora</h2>
          <p className="text-center">Estudos científicos comprovam que parar de fumar traz benefícios imediatos para sua saúde e qualidade de vida:</p>
          
          <ul className="benefits-list">
            <li>Em apenas 20 minutos, sua pressão arterial e frequência cardíaca já começam a normalizar</li>
            <li>Após 48 horas, seu paladar e olfato melhoram significativamente</li>
            <li>Em 2 semanas, sua circulação melhora e a função pulmonar aumenta em até 30%</li>
            <li>Após 1 ano, o risco de doença coronariana cai pela metade</li>
            <li>Economia de mais de R$3.600 por ano para quem fuma um maço por dia</li>
          </ul>
          
          <p className="text-center">Não é apenas sobre saúde - é sobre reconquistar sua <span className="highlight">liberdade</span> e qualidade de vida.</p>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="text-center">Como Este Guia Funciona</h2>
          <p className="text-center">Nosso método exclusivo de 10 capítulos foi desenvolvido para abordar todos os aspectos da dependência do cigarro:</p>
          
          <div className="steps">
            <div className="step">
              <h3>Fase 1: Preparação</h3>
              <p>Entenda sua relação com o cigarro, identifique gatilhos e prepare-se mentalmente para a mudança com técnicas comprovadas.</p>
            </div>
            <div className="step">
              <h3>Fase 2: Ação</h3>
              <p>Estratégias práticas para abandonar o cigarro, gerenciar a abstinência e reconstruir hábitos saudáveis.</p>
            </div>
            <div className="step">
              <h3>Fase 3: Manutenção</h3>
              <p>Ferramentas para prevenir recaídas, consolidar sua nova identidade como não-fumante e celebrar sua liberdade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Vídeo */}
      <section className="video-section" id="video">
        <div className="container">
          <h2 className="text-center">Veja Como o Método Funciona</h2>
          <p className="text-center">Assista a esta breve explicação sobre como nosso guia pode transformar sua vida:</p>
          
          <div className="video-placeholder">
            <p>Vídeo explicativo sobre o método LIBERTE-SE</p>
          </div>
        </div>
      </section>

      {/* Seção Resultados */}
      <section className="results" id="results">
        <div className="container">
          <h2 className="text-center">Resultados Baseados em Ciência</h2>
          <p className="text-center">Nosso método é fundamentado em pesquisas científicas sobre cessação do tabagismo:</p>
          
          <div className="stats">
            <div className="stat">
              <h3>Eficácia Comprovada</h3>
              <p>Estudos mostram que abordagens multifacetadas como a nossa aumentam em até 300% as chances de parar de fumar definitivamente.</p>
            </div>
            <div className="stat">
              <h3>Benefícios Imediatos</h3>
              <p>95% dos ex-fumantes relatam melhora significativa na qualidade do sono, energia e capacidade respiratória nas primeiras semanas.</p>
            </div>
            <div className="stat">
              <h3>Transformação Completa</h3>
              <p>Após 6 meses, 87% dos ex-fumantes relatam melhora na autoestima e qualidade de vida geral.</p>
            </div>
            <div className="stat">
              <h3>Economia Real</h3>
              <p>Fumantes que largam o vício economizam em média R$3.600 por ano apenas com cigarros, sem contar gastos com saúde.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Autores */}
      <section className="authors" id="authors">
        <div className="container">
          <h2 className="text-center">Quem Somos</h2>
          <p className="text-center">Somos profissionais das áreas de desenvolvimento e arquitetura que superamos o vício do cigarro e agora compartilhamos nossa jornada e método.</p>
          <p className="text-center">Nossa experiência pessoal combinada com extensa pesquisa nos permitiu criar um guia prático e eficaz para quem deseja se libertar do cigarro de uma vez por todas.</p>
          <p className="text-center">Acreditamos que todos merecem viver uma vida plena e saudável, livre das amarras do tabagismo.</p>
        </div>
      </section>

      {/* Seção Conteúdo */}
      <section className="content-preview" id="content">
        <div className="container">
          <h2 className="text-center">O Que Você Vai Encontrar No Ebook</h2>
          <p className="text-center">Um guia completo com 10 capítulos transformadores:</p>
          
          <ul className="chapters">
            <li><strong>Capítulo 1:</strong> O Primeiro Passo para sua Liberdade</li>
            <li><strong>Capítulo 2:</strong> O Roubo Silencioso - Os verdadeiros custos do cigarro</li>
            <li><strong>Capítulo 3:</strong> O Que Ninguém Te Conta sobre o tabagismo</li>
            <li><strong>Capítulo 4:</strong> O Horizonte que Te Espera - Benefícios e histórias de sucesso</li>
            <li><strong>Capítulo 5:</strong> Conhecendo seu Inimigo Interno</li>
            <li><strong>Capítulo 6:</strong> Seu Arsenal para a Vitória - Métodos práticos</li>
            <li><strong>Capítulo 7:</strong> Motivação Inabalável para os primeiros meses</li>
            <li><strong>Capítulo 8:</strong> Renascendo das Cinzas - Recuperação física e emocional</li>
            <li><strong>Capítulo 9:</strong> Superando as Pedras no Caminho - Lidando com recaídas</li>
            <li><strong>Capítulo 10:</strong> Sua Nova Vida Começa Agora - Estratégias para sucesso duradouro</li>
          </ul>
          
          <p className="text-center">Além de materiais complementares, calendário de acompanhamento e recursos adicionais!</p>
        </div>
      </section>

      {/* Seção Preço */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2 className="text-center">Invista em Sua Liberdade Hoje</h2>
          <p className="text-center">Por menos do que o custo de alguns maços de cigarro, você pode transformar sua vida para sempre.</p>
          
          <div className="limited-offer">Oferta por tempo limitado!</div>
          
          <div className="price-tag">
            <span className="original-price">R$50</span>
            <span className="discount-price">R$20</span>
          </div>
          
          <p>Economize R$30 (60% de desconto) comprando agora!</p>
          
          <a href="#form" className="btn">QUERO ME LIBERTAR AGORA!</a>
          
          <p>Acesso imediato após a compra - Formato digital (PDF)</p>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2 className="text-center">Perguntas Frequentes</h2>
          
          <div className="question">
            <h3>Quanto tempo leva para ver resultados?</h3>
            <p>Os benefícios físicos começam em minutos após parar de fumar. Nosso método foi desenvolvido para ajudar você a superar a dependência psicológica nas primeiras semanas, que é o período mais crítico.</p>
          </div>
          
          <div className="question">
            <h3>Já tentei parar várias vezes e não consegui. Por que seria diferente agora?</h3>
            <p>A maioria das pessoas tenta parar de fumar usando apenas força de vontade. Nosso método aborda todos os aspectos da dependência: física, psicológica e comportamental, aumentando significativamente suas chances de sucesso.</p>
          </div>
          
          <div className="question">
            <h3>Preciso de algum conhecimento prévio ou equipamento especial?</h3>
            <p>Não. O guia foi desenvolvido para ser acessível a qualquer pessoa, independentemente de experiências anteriores. Todas as técnicas podem ser aplicadas sem equipamentos especiais.</p>
          </div>
          
          <div className="question">
            <h3>O ebook funciona para qualquer tipo de fumante?</h3>
            <p>Sim. Nosso método foi desenvolvido considerando diferentes perfis de fumantes, desde os ocasionais até os de longo prazo. As estratégias podem ser adaptadas ao seu caso específico.</p>
          </div>
          
          <div className="question">
            <h3>Como recebo o ebook após a compra?</h3>
            <p>Imediatamente após a confirmação do pagamento, você receberá um email com o link para download do ebook em formato PDF.</p>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="form">
        <div className="container">
          <h2 className="text-center">Dê o Primeiro Passo Para Sua Liberdade</h2>
          <p className="text-center">Preencha o formulário abaixo para adquirir seu ebook:</p>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input type="text" id="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Telefone (opcional)</label>
              <input type="tel" id="phone" />
            </div>
            
            <button type="submit" className="btn">COMPRAR AGORA POR R$20</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2023 LIBERTE-SE. Todos os direitos reservados.</p>
          <p>Contato: contato@liberte-se.com.br</p>
        </div>
      </footer>
    </>
  );
}