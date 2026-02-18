import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('@/sections/hero-section'));
const SkillsSection = lazy(() => import('@/sections/skills-section'));
const ExperienceSection = lazy(() => import('@/sections/experience-section'));
const EducationSection = lazy(() => import('@/sections/education-section'));
const ContactSection = lazy(() => import('@/sections/contact-section'));

function App() {
  return (
    <main className="min-h-screen w-full bg-primary">
      <Suspense fallback={<div className="min-h-screen w-full bg-bg-primary" />}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}

export default App;
