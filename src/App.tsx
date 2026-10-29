import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { OurApproach } from './components/OurApproach';
import { HowItWorks } from './components/HowItWorks';
import { InteractiveRolePreview } from './components/InteractiveRolePreview';
import { WhyPrepPilot } from './components/WhyPrepPilot';
import { CallToAction } from './components/CallToAction';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EarlyAccessModal } from './components/EarlyAccessModal';

export const App: React.FC = () => {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const approachElem = document.querySelector('#approach');
    if (approachElem) {
      approachElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-900">
      {/* Sticky Navbar */}
      <Navbar onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)}
          onExploreFeatures={scrollToFeatures}
        />

        {/* 2. The Problem Section */}
        <TheProblem onLearnMore={scrollToFeatures} />

        {/* 3. Our Approach Section (Planned Capabilities) */}
        <OurApproach />

        {/* 4. How It Works (Four-Step Process) */}
        <HowItWorks />

        {/* 5. Interactive Role Explorer & Sandbox */}
        <InteractiveRolePreview onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />

        {/* 6. Why PrepPilot AI (Authentic Guidance) */}
        <WhyPrepPilot />

        {/* 7. Call To Action Banner */}
        <CallToAction
          onScrollToContact={scrollToContact}
          onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)}
        />

        {/* 8. About Section (Startup Concept & Mission) */}
        <AboutSection />

        {/* 9. Contact Section (Validated Form & Email Placeholder) */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </div>
  );
};

export default App;
