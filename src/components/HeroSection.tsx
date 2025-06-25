
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Moon, Coffee } from 'lucide-react';

const HeroSection = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-peach-gradient">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-16">
            <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-8 leading-tight font-poppins">
              ALKANE
            </h1>
            <p className="text-3xl lg:text-5xl text-primary font-bold mb-6 font-poppins">
              Your Life, Beautifully Journaled
            </p>
            <p className="text-2xl lg:text-3xl text-secondary font-medium mb-12 font-poppins">
              Without Writing a Single Word
            </p>
          </div>
          
          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto mb-16 bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
            <p className="text-xl text-primary/90 leading-relaxed mb-6 font-poppins">
              🏠 <em>Step into a space where your thoughts matter, your feelings are heard, and your story unfolds naturally.</em>
            </p>
            <p className="text-lg text-primary/80 leading-relaxed font-poppins">
              Like sitting with a trusted friend over warm tea, our gentle AI companion listens to your day, 
              understands your journey, and transforms your spoken words into beautiful, lasting memories.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Coffee className="w-16 h-16 text-secondary mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Cozy Conversations</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">Like chatting with a dear friend who remembers every detail and cares about your wellbeing</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Heart className="w-16 h-16 text-secondary mb-6 mx-auto animate-pulse" />
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Emotional Safety</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">A judgment-free zone where vulnerability is welcomed and authenticity is celebrated</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Moon className="w-16 h-16 text-secondary mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Peaceful Reflection</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">Transform daily moments into meaningful insights through gentle, therapeutic dialogue</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToGetStarted}
                className="bg-primary text-white font-bold px-12 py-6 text-xl rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl font-poppins"
              >
                Begin Your Journey Today
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary bg-white/80 backdrop-blur-sm px-12 py-6 text-xl rounded-full hover:bg-white transition-all duration-300 shadow-lg font-poppins font-semibold"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover How It Works
              </Button>
            </div>
            
            <p className="text-primary/60 text-lg max-w-2xl mx-auto font-poppins">
              ✨ <em>Start with a free month—no commitments, just compassionate conversations and beautiful memories.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
