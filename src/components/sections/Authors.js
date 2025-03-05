import styles from './styles/Authors.module.css';

export default function Authors() {
  return (
    <section className={styles.authors} id="authors">
      <div className="container">
        <h2 className="text-center">Quem Somos</h2>
        <p className="text-center">Somos profissionais das áreas de desenvolvimento e arquitetura que superamos o vício do cigarro e agora compartilhamos nossa jornada e método.</p>
        <p className="text-center">Nossa experiência pessoal combinada com extensa pesquisa nos permitiu criar um guia prático e eficaz para quem deseja se libertar do cigarro de uma vez por todas.</p>
        <p className="text-center">Acreditamos que todos merecem viver uma vida plena e saudável, livre das amarras do tabagismo.</p>
      </div>
    </section>
  );
}