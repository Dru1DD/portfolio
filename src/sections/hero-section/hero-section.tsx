import { motion } from 'motion/react';
import { memo } from 'react';
import Orb from '@/components/orb';
import BlurText from '@/components/blur-text';
import SocialLink from '@/components/social-link';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/constants/personal-data';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Orb hoverIntensity={2} rotateOnHover hue={0} forceHoverState={false} backgroundColor="#050508" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex items-center gap-2 mb-6"
        >
          {PERSONAL_INFO.domains.map((domain) => (
            <span
              key={domain}
              className="px-3 py-1 text-xs font-mono rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
            >
              {domain}
            </span>
          ))}
        </motion.div>

        <BlurText
          text={PERSONAL_INFO.name}
          animateBy="letters"
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-text-primary"
          delay={40}
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold gradient-text"
        >
          {PERSONAL_INFO.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mt-8 flex items-center gap-3"
        >
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.label} link={link} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="absolute bottom-8 z-10"
      >
        <a
          href="#skills"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors animate-pulse"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default memo(HeroSection);
