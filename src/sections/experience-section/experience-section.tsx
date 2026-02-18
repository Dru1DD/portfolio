import { memo } from 'react';
import SectionHeading from '@/components/section-heading';
import ProjectCard from '@/components/project-card';
import { PROJECTS } from '@/constants/personal-data';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-bg-secondary">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-20 -left-32 w-64 h-64 bg-accent-purple/5 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <SectionHeading title="Experience" subtitle="Projects I've contributed to as a Full-Stack Web3 Engineer." />

        <div
          className="flex flex-wrap items-center gap-6 mb-12 p-4 rounded-xl
            bg-white/[0.02] border border-white/[0.05]
            animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">{PROJECTS.length}</span>
            <span className="text-xs text-text-muted uppercase tracking-wider">Projects</span>
          </div>
          <div className="w-[1px] h-6 bg-white/[0.08]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">3+</span>
            <span className="text-xs text-text-muted uppercase tracking-wider">Years</span>
          </div>
          <div className="w-[1px] h-6 bg-white/[0.08]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">Web3</span>
            <span className="text-xs text-text-muted uppercase tracking-wider">Focus</span>
          </div>
        </div>

        <div className="relative pl-5 md:pl-6">
          <div className="timeline-line" />

          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ExperienceSection);
