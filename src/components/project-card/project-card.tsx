import { memo } from 'react';
import type { ProjectData } from '@/constants/personal-data';
import { Calendar, Briefcase, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  project: ProjectData;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <article
      className="relative pl-10 pb-14 last:pb-0 group animate-fade-in"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="absolute left-[-7px] top-2 z-10">
        <div className="w-4 h-4 rounded-full bg-accent-purple shadow-[0_0_12px_rgba(153,69,255,0.6)] ring-4 ring-bg-primary" />
      </div>

      <div className="mb-3 flex items-center gap-3">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono
          bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
        >
          <Calendar size={12} />
          {project.period}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-text-muted font-medium">
          <Briefcase size={12} />
          {project.role}
        </span>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/[0.05] to-white/[0.01]
        border border-white/[0.07]
        backdrop-blur-xl
        transition-all duration-300 ease-out
        group-hover:border-accent-purple/25
        group-hover:shadow-[0_8px_40px_rgba(153,69,255,0.08)]"
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
              {project.name}
            </h3>
            <ExternalLink
              size={16}
              className="text-text-muted mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed mb-6">{project.description}</p>

          <div className="mb-6">
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-text-muted mb-3 font-semibold">
              Key Contributions
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.responsibilities.map((item) => (
                <li key={item} className="text-sm text-text-secondary flex items-start gap-2.5 py-1">
                  <span className="text-accent-cyan text-[10px] mt-[5px] shrink-0">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] mb-5" />

          <div className="flex flex-wrap gap-2">
            {project.environment.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] rounded-lg
                  bg-white/[0.04] border border-white/[0.06]
                  text-text-muted font-mono
                  hover:text-accent-purple/80 hover:border-accent-purple/20
                  transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(ProjectCard);
