
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      period: "First Month",
      description: "Experience ALKANE with no commitment",
      features: [
        "Daily AI calls",
        "Polished journal entries", 
        "Secure cloud storage",
        "Mobile-friendly dashboard",
        "Basic support"
      ],
      cta: "Start Free Trial",
      popular: false,
      gradient: "bg-white"
    },
    {
      name: "6-Month Plan",
      price: "$300",
      period: "6 months",
      description: "Perfect for building a consistent journaling habit",
      features: [
        "Everything in Free Trial",
        "Priority call scheduling",
        "Advanced journal formatting",
        "PDF export feature",
        "Priority support",
        "Call time flexibility"
      ],
      cta: "Choose 6 Months",
      popular: false,
      gradient: "bg-white"
    },
    {
      name: "1-Year Plan",
      price: "$500",
      period: "12 months",
      description: "Best value for your journaling journey",
      features: [
        "Everything in 6-Month Plan",
        "Unlimited call rescheduling",
        "Advanced analytics & insights",
        "Multiple export formats",
        "Premium support",
        "Early access to new features",
        "Biggest savings"
      ],
      cta: "Choose 1 Year",
      popular: true,
      gradient: "bg-accent-gradient"
    }
  ];

  return (
    <section className="py-20 bg-peach-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Start with a free month, then choose the plan that fits your journaling journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-in ${
                plan.popular 
                  ? 'bg-accent-gradient text-primary ring-4 ring-secondary/50' 
                  : 'bg-white/80 backdrop-blur-sm text-primary'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-lg opacity-80 ml-2">/ {plan.period}</span>
                  )}
                </div>
                <p className="opacity-80">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-secondary mr-3 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-accent-gradient text-primary hover:shadow-lg'
                }`}
                onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary/70">
            All plans include secure data storage, privacy protection, and no hidden fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
