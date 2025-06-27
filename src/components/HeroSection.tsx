
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Moon, Coffee, Sparkles, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-16 min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-peach-gradient">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="text-center animate-fade-in">
          {/* Main Heading with floating elements*/}
          <div className="mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-8 leading-tight font-poppins relative">
              ALKANE
              <div className="absolute -right-4 -top-4 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-3xl lg:text-5xl text-primary font-bold font-poppins bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Life, Beautifully Journaled
              </p>
              <p className="text-xl lg:text-3xl text-secondary font-medium font-poppins flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-secondary animate-pulse" />
                Without Writing a Single Word
                <Heart className="w-6 h-6 text-secondary animate-pulse" />
              </p>
            </div>
            
            {/* Therapeutic tagline */}
            <div className="mb-12 max-w-3xl mx-auto">
              <p className="text-lg lg:text-xl text-primary/80 leading-relaxed font-poppins italic">
                "Like having a warm conversation with your most trusted friend, 
                who remembers every detail and helps you see the beauty in your everyday moments"
              </p>
            </div>
          </div>

          {/* Creative Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-accent/20">
              <div className="relative mb-6">
                <Coffee className="w-16 h-16 text-secondary mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Cozy Conversations</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">Transform daily chats into cherished memories through gentle AI conversations</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-accent/20">
              <div className="relative mb-6">
                <Heart className="w-16 h-16 text-secondary mb-4 mx-auto animate-pulse group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Emotional Sanctuary</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">A judgment-free space where every emotion is welcomed and understood</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-accent/20">
              <div className="relative mb-6">
                <Moon className="w-16 h-16 text-secondary mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Mindful Reflection</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">Turn everyday moments into profound insights and personal growth</p>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToGetStarted}
                className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-12 py-6 text-xl rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg font-poppins relative overflow-hidden group"
              >
                <span className="relative z-10">Begin Your Journey Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                className="border-3 border-primary text-primary bg-white/90 backdrop-blur-sm px-12 py-6 text-xl rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg font-poppins font-medium"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
