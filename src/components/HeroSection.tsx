
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Moon, Coffee } from 'lucide-react';

const HeroSection = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-peach-gradient">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center animate-fade-in">
          {/* Welcoming Header */}
          <div className="mb-12">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Heart className="w-8 h-8 text-secondary animate-pulse" />
              <span className="text-lg text-primary/70 font-medium">Welcome to your safe space</span>
              <Heart className="w-8 h-8 text-secondary animate-pulse" />
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-6 leading-tight">
              ALKANE
            </h1>
            <p className="text-3xl lg:text-4xl text-primary font-medium mb-4">
              Your Life, Beautifully Journaled
            </p>
            <p className="text-xl lg:text-2xl text-secondary font-light mb-8">
              Without Writing a Single Word
            </p>
          </div>
          
          {/* Therapeutic Message */}
          <div className="max-w-4xl mx-auto mb-16 bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <p className="text-xl text-primary/90 leading-relaxed mb-6">
              🏠 <em>Step into a space where your thoughts matter, your feelings are heard, and your story unfolds naturally.</em>
            </p>
            <p className="text-lg text-primary/80 leading-relaxed">
              Like sitting with a trusted friend over warm tea, our gentle AI companion listens to your day, 
              understands your journey, and transforms your spoken words into beautiful, lasting memories. 
              No pressure, no judgment—just authentic conversations that become treasured journal entries.
            </p>
          </div>

          {/* Comfort Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Coffee className="w-12 h-12 text-secondary mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-primary mb-3">Cozy Conversations</h3>
              <p className="text-primary/70">Like chatting with a dear friend who remembers every detail and cares about your wellbeing</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Heart className="w-12 h-12 text-secondary mb-6 mx-auto animate-pulse" />
              <h3 className="text-xl font-semibold text-primary mb-3">Emotional Safety</h3>
              <p className="text-primary/70">A judgment-free zone where vulnerability is welcomed and authenticity is celebrated</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Moon className="w-12 h-12 text-secondary mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-primary mb-3">Peaceful Reflection</h3>
              <p className="text-primary/70">Transform daily moments into meaningful insights through gentle, therapeutic dialogue</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToGetStarted}
                className="bg-accent-gradient text-primary font-semibold px-10 py-5 text-xl rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Begin Your Journey Today
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary bg-white/70 backdrop-blur-sm px-10 py-5 text-xl rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover How It Works
              </Button>
            </div>
            
            <p className="text-primary/60 text-lg max-w-2xl mx-auto">
              ✨ <em>Start with a free month—no commitments, just compassionate conversations and beautiful memories.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
