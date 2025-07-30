import ScrollIndicator from '@/components/scroll-indicator';
import styles from './about-me.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.cardWrapper}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.text}>
          I'm a full-stack developer with a strong focus on frontend, building products with React, Nest.js. I love
          startup culture, product thinking, and solving problems that actually matter. In my free time, I dive deep
          into blockchain, and dream of launching my own startup fund that empowers real builders.
        </p>
        <div className={styles.skillsSection}>
          <div className={styles.skillsTitle}>Main stack</div>
          <ul className={styles.skillList}>
            <li>React</li>
            <li>Next.js</li>
            <li>Nest.js</li>
            <li>MongoDB</li>
            <li>Solidity</li>
          </ul>
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
};

export default AboutMe;
