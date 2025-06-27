
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
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-white via-peach-light/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-secondary mr-3 animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-poppins">
              How It Works
            </h2>
            <Sparkles className="w-6 h-6 text-secondary ml-3 animate-pulse" />
          </div>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto font-poppins leading-relaxed">
            Transform your daily experiences into meaningful journal entries in three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent via-secondary to-accent transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-in group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative mb-6">
                  {/* Main icon container */}
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                    <step.icon className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 font-poppins group-hover:text-secondary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-primary/70 leading-relaxed font-poppins">
                  {step.description}
                </p>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6 mb-4">
                    <ArrowRight className="w-6 h-6 text-accent animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
