import SectionHeader from './HowItWorks/SectionHeader';
import NarrativeSection from './HowItWorks/NarrativeSection';
import Methodology from './HowItWorks/Methodology';
import BookPreview from './HowItWorks/BookPreview';
import CTASection from './HowItWorks/CTASection';
import styles from './styles/HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <SectionHeader
          title="A Metodologia dos 3 Pilares da Libertação"
          subtitle="Nosso método exclusivo aborda todos os aspectos da dependência, oferecendo uma solução completa e permanente"
        />
        <NarrativeSection />
        <Methodology />
        <BookPreview />
        <CTASection />
      </div>
    </section>
  );
};

export default HowItWorks;
