import { memo } from 'react';
import SocialLink from '@/components/social-link';
import { SOCIAL_LINKS } from '@/constants/personal-data';
import { Mail, ArrowUpRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-bg-secondary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-purple/8 rounded-full blur-[80px]" />
        <div className="absolute top-20 -left-20 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[60px]" />
        <div className="absolute top-10 -right-20 w-[300px] h-[300px] bg-accent-pink/5 rounded-full blur-[60px]" />
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="relative mb-8 animate-scale-in">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/10 border border-accent-purple/20 flex items-center justify-center">
            <Mail size={32} className="text-accent-purple" />
          </div>
        </div>

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Let's Build Together
        </h2>

        <p
          className="text-text-secondary text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Interested in working together or have a Web3 project in mind?
          <br className="hidden md:block" />
          Let's connect and create something exceptional.
        </p>

        <a
          href="mailto:olexandrandrichuk@gmail.com"
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl
            bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan
            text-white font-semibold text-lg
            shadow-[0_0_40px_rgba(153,69,255,0.25)]
            hover:shadow-[0_0_60px_rgba(153,69,255,0.4)]
            hover:scale-[1.04] active:scale-[0.97]
            transition-all duration-300
            animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Mail size={20} />
          Get in Touch
          <ArrowUpRight
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent my-10" />

        <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.label} link={link} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-text-muted text-xs font-mono">© {new Date().getFullYear()} Oleksandr Andriichuk</p>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
