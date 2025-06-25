
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight font-poppins">
              ALKANE
            </h1>
            <p className="text-2xl lg:text-4xl text-primary font-bold mb-4 font-poppins">
              Your Life, Beautifully Journaled
            </p>
            <p className="text-xl lg:text-2xl text-secondary font-medium mb-8 font-poppins">
              Without Writing a Single Word
            </p>
          </div>
          
          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-primary/90 leading-relaxed mb-4 font-poppins">
              🏠 <em>Step into a space where your thoughts matter, your feelings are heard, and your story unfolds naturally.</em>
            </p>
            <p className="text-base text-primary/80 leading-relaxed font-poppins">
              Like sitting with a trusted friend over warm tea, our gentle AI companion listens to your day, 
              understands your journey, and transforms your spoken words into beautiful, lasting memories.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Coffee className="w-12 h-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-primary mb-3 font-poppins">Cozy Conversations</h3>
              <p className="text-primary/70 leading-relaxed font-poppins text-sm">Like chatting with a dear friend who remembers every detail</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Heart className="w-12 h-12 text-secondary mb-4 mx-auto animate-pulse" />
              <h3 className="text-xl font-bold text-primary mb-3 font-poppins">Emotional Safety</h3>
              <p className="text-primary/70 leading-relaxed font-poppins text-sm">A judgment-free zone where vulnerability is welcomed</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Moon className="w-12 h-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-primary mb-3 font-poppins">Peaceful Reflection</h3>
              <p className="text-primary/70 leading-relaxed font-poppins text-sm">Transform daily moments into meaningful insights</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToGetStarted}
                className="bg-primary text-white font-bold px-10 py-4 text-lg rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg font-poppins"
              >
                Begin Your Journey Today
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary bg-white/80 backdrop-blur-sm px-10 py-4 text-lg rounded-full hover:bg-white transition-all duration-300 shadow-md font-poppins font-medium"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                How It Works
              </Button>
            </div>
            
            <p className="text-primary/60 text-base max-w-2xl mx-auto font-poppins">
              ✨ <em>Start with a free month—no commitments, just compassionate conversations.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
