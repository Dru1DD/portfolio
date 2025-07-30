import '@/styles/global.css';

import { useEffect, useRef } from 'react';
import Introductions from '@slides/introductions';
import Projects from '@slides/projects';
import AboutMe from '@slides/about-me';
import Contacts from '@slides/contacts';
import { getCSSVariables, setCSSVariables } from '@/utils/css-variables';
import styles from './app.module.scss';

const steps = [<Introductions />, <AboutMe />, <Projects />, <Contacts />];

const App = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isAutoScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isAutoScrollingRef.current) {
        setCSSVariables('--cameraZ', window.pageYOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (steps.length === 0) return;

    const perspective = getCSSVariables('--scenePerspective');
    const speed = getCSSVariables('--cameraSpeed');

    const height = window.innerHeight + perspective * speed + speed * steps.length - 30;

    setCSSVariables('--viewportHeight', height);
  }, [steps]);

  return (
    <div className={styles.viewport}>
      <div className={styles.scene3DContainer}>
        <div className={styles.scene3D} ref={sceneRef}>
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div
                key={index}
                className={styles.slide}
                style={{
                  transform: `translate3D(-50%, -40%, calc(var(--itemZ) * var(--cameraSpeed) * ${index} * -1px))`,
                  opacity: isLast
                    ? 1
                    : `calc(1 - clamp(0, (var(--cameraZ) - ${index} * var(--cameraSpeed) * var(--itemZ)) / 600, 1))`,
                }}
              >
                {step}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
