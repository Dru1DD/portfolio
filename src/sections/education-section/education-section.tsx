import { memo } from 'react';
import SectionHeading from '@/components/section-heading';
import { EDUCATION, LANGUAGES } from '@/constants/personal-data';
import { GraduationCap, Globe, BookOpen, Award } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <SectionHeading title="Education & Languages" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education card */}
          <div
            className="relative overflow-hidden rounded-2xl
              bg-gradient-to-br from-white/[0.05] to-white/[0.01]
              border border-white/[0.07]
              backdrop-blur-xl p-7 md:p-8
              hover:border-accent-purple/25
              transition-all duration-300
              group animate-fade-in-left"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-accent-purple/15 blur-xl opacity-50 pointer-events-none group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-accent-purple/10 border border-accent-purple/15 flex items-center justify-center">
                  <GraduationCap size={22} className="text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Education</h3>
                  <span className="text-[11px] text-text-muted font-mono">Bachelor's Degree</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <BookOpen size={16} className="text-accent-purple mt-0.5 shrink-0" />
                  <div>
                    <p className="text-text-primary text-sm font-medium">{EDUCATION.degree}</p>
                    <p className="text-text-muted text-xs mt-1">University degree program</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <Award size={16} className="text-accent-cyan mt-0.5 shrink-0" />
                  <div>
                    <p className="text-text-primary text-sm font-medium">Web3 Specialization</p>
                    <p className="text-text-muted text-xs mt-1">Blockchain & DeFi development focus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages card */}
          <div
            className="relative overflow-hidden rounded-2xl
              bg-gradient-to-br from-white/[0.05] to-white/[0.01]
              border border-white/[0.07]
              backdrop-blur-xl p-7 md:p-8
              hover:border-accent-cyan/25
              transition-all duration-300
              group animate-fade-in-right"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent-cyan/15 blur-xl opacity-50 pointer-events-none group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-accent-cyan/10 border border-accent-cyan/15 flex items-center justify-center">
                  <Globe size={22} className="text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Languages</h3>
                  <span className="text-[11px] text-text-muted font-mono">{LANGUAGES.length} languages</span>
                </div>
              </div>

              <div className="space-y-3">
                {LANGUAGES.map((lang, i) => {
                  const proficiencyWidth =
                    lang.level === 'C2' ? '100%' : lang.level === 'C1' ? '85%' : lang.level === 'B2' ? '70%' : '55%';

                  return (
                    <div
                      key={lang.language}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] animate-fade-in-up"
                      style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-text-primary text-sm font-medium">{lang.language}</span>
                        <span className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/15">
                          {lang.level}
                        </span>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue animate-slide-bar"
                          style={
                            {
                              '--bar-width': proficiencyWidth,
                              animationDelay: `${0.4 + i * 0.1}s`,
                            } as React.CSSProperties
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(EducationSection);
