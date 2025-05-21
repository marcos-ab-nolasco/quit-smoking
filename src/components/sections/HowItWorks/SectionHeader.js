import styles from '../styles/HowItWorks.module.css';

const SectionHeader = ({ title, subtitle }) => (
  <div className={styles.sectionHeader}>
    <h2>{title}</h2>
    <p className={styles.subheading}>{subtitle}</p>
  </div>
);

export default SectionHeader;
