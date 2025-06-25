
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, User } from 'lucide-react';

const HeroSection = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-peach-gradient">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              ALKANE
            </h1>
            <p className="text-2xl lg:text-3xl text-primary font-medium mb-8">
              Your Life, Beautifully Journaled
            </p>
            <p className="text-xl lg:text-2xl text-secondary font-light">
              Without Writing a Word
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-primary/80 leading-relaxed">
              Transform your daily experiences into beautiful journal entries through meaningful conversations. 
              Our AI agent calls you, listens to your day, and creates polished journal entries automatically.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl">
              <Calendar className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Daily Calls</h3>
              <p className="text-primary/70 text-center">At your preferred time</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl">
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">AI Conversations</h3>
              <p className="text-primary/70 text-center">Natural, meaningful discussions</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl">
              <User className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Polished Entries</h3>
              <p className="text-primary/70 text-center">Beautiful, organized journals</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              onClick={scrollToGetStarted}
              className="bg-accent-gradient text-primary font-semibold px-8 py-4 text-lg rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Your Free Month
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-primary text-primary bg-white/50 backdrop-blur-sm px-8 py-4 text-lg rounded-full hover:bg-white/70 transition-all duration-300"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
