import { memo } from 'react';
import type { SocialLinkData } from '@/constants/personal-data';

type SocialLinkProps = {
  link: SocialLinkData;
  size?: number;
};

const SocialLink: React.FC<SocialLinkProps> = ({ link, size = 20 }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="inline-flex items-center justify-center w-11 h-11 rounded-full
        bg-white/[0.05] border border-white/[0.08]
        text-text-secondary hover:text-accent-purple hover:border-accent-purple/40
        hover:scale-110 hover:shadow-[0_0_20px_rgba(153,69,255,0.3)]
        active:scale-95
        transition-all duration-200"
    >
      <Icon size={size} />
    </a>
  );
};

export default memo(SocialLink);
