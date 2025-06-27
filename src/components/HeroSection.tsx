
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, BookOpen, MessageCircle, Calendar, Brain } from 'lucide-react';

const HeroSection = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-16 min-h-screen flex items-center">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach-light via-white to-accent/10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary font-medium font-poppins">AI-Powered Journaling</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight font-poppins">
                Your Life,
                <span className="block text-secondary">Beautifully</span>
                <span className="block text-accent">Journaled</span>
              </h1>
              
              <p className="text-lg text-primary/70 leading-relaxed font-poppins max-w-lg">
                Transform your daily conversations into meaningful memories through natural AI conversations that capture every precious moment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToGetStarted}
                className="bg-primary text-white font-bold px-8 py-4 text-lg rounded-full hover:bg-primary/90 transition-all duration-300 font-poppins shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-secondary text-secondary font-bold px-8 py-4 text-lg rounded-full hover:bg-secondary hover:text-white transition-all duration-300 font-poppins"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-accent/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-accent/10 rounded-2xl">
                    <MessageCircle className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-bold text-primary text-sm font-poppins">Daily Conversations</p>
                      <p className="text-primary/60 text-xs font-poppins">Natural & Empathetic</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-secondary/10 rounded-2xl">
                    <BookOpen className="w-6 h-6 text-secondary" />
                    <div>
                      <p className="font-bold text-primary text-sm font-poppins">Beautiful Journals</p>
                      <p className="text-primary/60 text-xs font-poppins">Automatically Created</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-primary/10 rounded-2xl">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-bold text-primary text-sm font-poppins">Memory Timeline</p>
                      <p className="text-primary/60 text-xs font-poppins">Organized & Searchable</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl">
                    <Brain className="w-6 h-6 text-secondary" />
                    <div>
                      <p className="font-bold text-primary text-sm font-poppins">Mood Insights</p>
                      <p className="text-primary/60 text-xs font-poppins">Personal Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl text-center">
                <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-primary font-bold font-poppins text-sm">Without Writing a Single Word</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
