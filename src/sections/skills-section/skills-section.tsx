import { memo } from 'react';
import SectionHeading from '@/components/section-heading';
import SkillBadge from '@/components/skill-badge';
import { SKILLS } from '@/constants/personal-data';
import { Code, Monitor, Server, Link, Container } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Programming Languages': Code,
  'Front-end': Monitor,
  'Back-end': Server,
  Blockchain: Link,
  'DevOps & Tools': Container,
};

const ICON_COLORS: Record<string, string> = {
  'Programming Languages': 'text-accent-purple',
  'Front-end': 'text-accent-cyan',
  'Back-end': 'text-accent-blue',
  Blockchain: 'text-accent-purple',
  'DevOps & Tools': 'text-accent-pink',
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <SectionHeading title="Tech Stack" subtitle="Technologies and tools I work with on a daily basis." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {SKILLS.map((category, categoryIndex) => {
            const Icon = CATEGORY_ICONS[category.title] || Code;
            const iconColor = ICON_COLORS[category.title] || 'text-accent-purple';

            return (
              <div
                key={category.title}
                className={`relative overflow-hidden rounded-2xl
                  bg-gradient-to-br from-white/[0.04] to-white/[0.01]
                  border border-white/[0.06]
                  backdrop-blur-sm
                  hover:border-white/[0.1]
                  transition-all duration-300
                  ${categoryIndex === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5 px-6 pt-6">
                    <div
                      className={`w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center ${iconColor}`}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-semibold text-text-primary tracking-wide">{category.title}</h3>
                    <span className="ml-auto text-[11px] font-mono text-text-muted bg-white/[0.04] px-2 py-0.5 rounded-md">
                      {category.skills.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 px-6 pb-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge key={skill} name={skill} index={skillIndex} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(SkillsSection);
