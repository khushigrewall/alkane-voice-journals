
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      period: "First Month",
      description: "Experience ALKANE with no commitment",
      features: [
        "Daily AI calls at your preferred time",
        "Polished journal entries automatically created", 
        "Secure cloud storage for all entries",
        "Mobile-friendly dashboard access",
        "Email support"
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
        "Advanced journal formatting & themes",
        "PDF export of all entries",
        "Priority customer support",
        "Flexible call time changes"
      ],
      cta: "Most Popular - Choose 6 Months",
      popular: true,
      gradient: "bg-accent-gradient"
    },
    {
      name: "1-Year Plan",
      price: "$500",
      period: "12 months",
      description: "Best value for your journaling journey",
      features: [
        "Everything in 6-Month Plan",
        "Unlimited call rescheduling",
        "Advanced analytics & mood insights",
        "Multiple export formats (PDF, Word, etc)",
        "Premium 24/7 support",
        "Early access to new features",
        "Biggest savings per month"
      ],
      cta: "Choose 1 Year - Best Value",
      popular: false,
      gradient: "bg-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-peach-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8 font-poppins">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
            Start with a free month, then choose the plan that fits your journaling journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slide-in ${
                plan.popular 
                  ? 'bg-accent-gradient text-primary ring-4 ring-secondary/50 scale-105' 
                  : 'bg-white/90 backdrop-blur-sm text-primary'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-bold font-poppins shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4 font-poppins">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold font-poppins">{plan.price}</span>
                  {plan.period && (
                    <span className="text-xl opacity-80 ml-2 font-poppins">/ {plan.period}</span>
                  )}
                </div>
                <p className="opacity-80 text-lg font-poppins">{plan.description}</p>
              </div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-secondary mr-4 mt-1 flex-shrink-0" />
                    <span className="font-poppins leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-5 text-lg font-bold rounded-2xl transition-all duration-300 font-poppins ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl'
                    : 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl'
                } transform hover:scale-105`}
                onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-primary/70 text-lg font-poppins">
            All plans include secure data storage, complete privacy protection, and no hidden fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
