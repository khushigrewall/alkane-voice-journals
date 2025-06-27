
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Moon, Coffee, Sparkles, MessageCircle, Phone, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-16 min-h-screen flex items-center">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-peach-gradient">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="text-center animate-fade-in">
          {/* Main Heading with enhanced styling */}
          <div className="mb-16 relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-4">
                <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
                <Heart className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Sparkles className="w-8 h-8 text-secondary animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-8 leading-tight font-poppins relative">
              ALKANE
              <div className="absolute -right-4 -top-4 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
              <div className="absolute -left-8 top-1/2 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </h1>
            
            <div className="space-y-6 mb-12">
              <p className="text-3xl lg:text-5xl text-primary font-bold font-poppins bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
                Your Life, Beautifully Journaled
              </p>
              <p className="text-xl lg:text-3xl text-secondary font-medium font-poppins flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Heart className="w-8 h-8 text-secondary animate-pulse" />
                Without Writing a Single Word
                <Heart className="w-8 h-8 text-secondary animate-pulse" />
              </p>
            </div>
            
            {/* Enhanced therapeutic tagline */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-accent/20">
                <p className="text-lg lg:text-xl text-primary/90 leading-relaxed font-poppins italic font-medium">
                  "Transform your daily conversations into meaningful memories. Like having a warm chat with your most trusted friend, 
                  who captures every precious moment and helps you see the beauty in your everyday experiences."
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid with better design */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 border border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary"></div>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">AI Conversations</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">Experience natural, empathetic conversations that feel like talking to your closest confidant</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 border border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Emotional Wellness</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">A safe, judgment-free space where every emotion is welcomed and beautifully understood</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 border border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Beautiful Journals</h3>
              <p className="text-primary/70 leading-relaxed font-poppins">Watch your conversations transform into elegant journal entries you'll treasure forever</p>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToGetStarted}
                className="bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold px-12 py-6 text-xl rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg font-poppins relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Begin Your Journey Today
                  <Heart className="w-6 h-6" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
