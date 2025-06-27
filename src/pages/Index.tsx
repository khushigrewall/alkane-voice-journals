
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import GetStartedSection from '@/components/GetStartedSection';
import JournalSection from '@/components/JournalSection';
import CalendarSection from '@/components/CalendarSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-peach-gradient font-poppins">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <GetStartedSection />
      <JournalSection />
      <CalendarSection />
      <Footer />
    </div>
  );
};

export default Index;
