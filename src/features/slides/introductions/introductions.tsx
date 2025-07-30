import ScrollIndicator from '@/components/scroll-indicator';
import styles from './introductions.module.scss';
import TypingText from '@/components/typing-text';
import ParticleCanvas from '@/components/particle-canvas';

const Introductions = () => {
  return (
    <div className={styles.introductionContainer}>
      <h1 className={styles.header}>Hi, there!</h1>
      <TypingText className={styles.typingText} />
      <p className={styles.subtitle}>I build things for the web. Passionate about startups, crypto & deep work.</p>

      <ScrollIndicator />
      <ParticleCanvas />
    </div>
  );
};

export default Introductions;
