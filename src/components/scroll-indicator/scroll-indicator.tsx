import { ChevronDown } from 'lucide-react';
import styles from './scroll-indicator.module.scss';

const ScrollIndicator = () => (
  <div className={styles.scroll}>
    <ChevronDown className={styles.icon} />
  </div>
);

export default ScrollIndicator;
