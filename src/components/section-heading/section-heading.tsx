import { memo } from 'react';
import BlurText from '@/components/blur-text';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      <BlurText text={title} animateBy="letters" className="text-3xl md:text-4xl lg:text-5xl font-bold" delay={30} />
      {subtitle && (
        <p className="mt-4 text-secondary text-lg max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      )}
      <div
        className="mt-4 h-[2px] w-20 bg-gradient-to-r from-accent-purple to-accent-cyan origin-left animate-scale-x-in"
        style={{ animationDelay: '0.3s' }}
      />
    </div>
  );
};

export default memo(SectionHeading);
