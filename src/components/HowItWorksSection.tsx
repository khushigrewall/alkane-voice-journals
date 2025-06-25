
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Share Your Details",
      description: "Provide your name, phone number, email, and preferred call time through our simple form.",
      icon: "📝"
    },
    {
      number: "02", 
      title: "Receive Your Call",
      description: "Our AI agent calls you at your chosen time for a friendly conversation about your day.",
      icon: "📞"
    },
    {
      number: "03",
      title: "Get Your Journal",
      description: "Your conversation is transformed into a beautiful, polished journal entry and added to your account.",
      icon: "📖"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Transform your daily experiences into meaningful journal entries in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-accent-gradient rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-primary/70 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
