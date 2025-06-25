
import React from 'react';
import { Phone, BookOpen, Heart, Sparkles, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Share Your Details",
      description: "Provide your name, phone number, email, and preferred call time through our simple form.",
      icon: Heart,
      color: "from-accent to-secondary"
    },
    {
      number: "02", 
      title: "Receive Your Call",
      description: "Our AI agent calls you at your chosen time for a friendly conversation about your day.",
      icon: Phone,
      color: "from-secondary to-accent"
    },
    {
      number: "03",
      title: "Get Your Journal",
      description: "Your conversation is transformed into a beautiful, polished journal entry and added to your account.",
      icon: BookOpen,
      color: "from-accent to-secondary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-white via-peach-light/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-secondary mr-3 animate-pulse" />
            <h2 className="text-5xl lg:text-6xl font-bold text-primary font-poppins">
              How It Works
            </h2>
            <Sparkles className="w-8 h-8 text-secondary ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins leading-relaxed">
            Transform your daily experiences into meaningful journal entries in three magical steps
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent via-secondary to-accent transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-in group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative mb-8">
                  {/* Main icon container */}
                  <div className={`w-28 h-28 mx-auto bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl mb-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                    <step.icon className="w-12 h-12 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Sparkle decorations */}
                  <div className="absolute -top-2 -left-2">
                    <Sparkles className="w-6 h-6 text-accent opacity-60 animate-pulse" />
                  </div>
                  <div className="absolute -bottom-2 -right-2">
                    <Sparkles className="w-4 h-4 text-secondary opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6 font-poppins group-hover:text-secondary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-primary/70 leading-relaxed font-poppins text-lg">
                  {step.description}
                </p>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8 mb-4">
                    <ArrowRight className="w-8 h-8 text-accent animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-xl border border-accent/20">
            <p className="text-lg text-primary/80 font-poppins mb-4 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-secondary animate-pulse" />
              Ready to begin your emotional journey?
              <Heart className="w-5 h-5 text-secondary animate-pulse" />
            </p>
            <p className="text-primary/60 font-poppins italic">
              Join thousands who've discovered the magic of effortless journaling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
