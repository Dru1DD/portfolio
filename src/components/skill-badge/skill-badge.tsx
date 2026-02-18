import { memo } from 'react';

type SkillBadgeProps = {
  name: string;
  index: number;
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="inline-flex items-center !px-3 !py-1.5 rounded-xl text-[13px] font-medium bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.07] text-text-secondary hover:text-text-primary hover:border-accent-purple/30 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(153,69,255,0.15)] transition-all duration-200 cursor-default font-mono backdrop-blur-sm">
      <span className="block !mr-2 w-1.5 h-1.5 rounded-full bg-accent-purple/50 shrink-0" />
      {name}
    </span>
  );
};

export default memo(SkillBadge);
