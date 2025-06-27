
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-16 min-h-screen flex items-center">
      {/* Minimal Background decoration */}
      <div className="absolute inset-0 bg-peach-gradient">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
          {/* Clean and Professional Heading */}
          <div className="mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight font-poppins">
              ALKANE
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-2xl lg:text-4xl text-primary font-bold font-poppins">
                Your Life, Beautifully Journaled
              </p>
              <p className="text-lg lg:text-xl text-secondary font-medium font-poppins">
                Without Writing a Single Word
              </p>
            </div>
            
            {/* Simple description */}
            <div className="mb-12 max-w-3xl mx-auto">
              <p className="text-lg text-primary/80 leading-relaxed font-poppins">
                Transform your daily conversations into meaningful memories through natural AI conversations that capture every precious moment.
              </p>
            </div>
          </div>

          {/* Simple Features - No boxes */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 font-poppins">AI Conversations</h3>
              <p className="text-primary/70 font-poppins text-sm">Natural, empathetic conversations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 font-poppins">Emotional Wellness</h3>
              <p className="text-primary/70 font-poppins text-sm">Safe, judgment-free space</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 font-poppins">Beautiful Journals</h3>
              <p className="text-primary/70 font-poppins text-sm">Elegant journal entries</p>
            </div>
          </div>

          {/* Simple Call to Action */}
          <div className="space-y-6">
            <Button 
              onClick={scrollToGetStarted}
              className="bg-primary text-white font-bold px-10 py-4 text-lg rounded-full hover:bg-primary/90 transition-all duration-300 font-poppins"
            >
              Begin Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
