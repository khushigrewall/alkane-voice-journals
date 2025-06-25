
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SubscriptionManagement from '@/components/SubscriptionManagement';
import JournalSection from '@/components/JournalSection';
import CalendarSection from '@/components/CalendarSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import GetStartedSection from '@/components/GetStartedSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-peach-gradient font-poppins">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <SubscriptionManagement />
      <JournalSection />
      <CalendarSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default Index;
