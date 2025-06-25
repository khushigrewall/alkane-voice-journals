
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "/1 month only",
      description: "Perfect for getting started with journaling",
      features: [
        "Daily journaling for 1 month",
        "Basic progress tracking",
        "Weekly video (1 month only)",
        "Calendar view",
        "Basic analytics"
      ],
      cta: "Start Free",
      popular: false,
      icon: Star,
      gradient: "bg-white",
      borderColor: "border-accent/30"
    },
    {
      name: "6 Month Plan",
      price: "₹1,499",
      period: "/6 months",
      description: "Best value for consistent journalers",
      features: [
        "Everything in Free",
        "Weekly video summaries",
        "Bi-weekly video summaries",
        "Monthly recap videos",
        "Advanced AI insights",
        "Emotion pattern analysis",
        "Export journal data",
        "Priority support"
      ],
      cta: "Choose 6 Months",
      popular: true,
      icon: Crown,
      gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-secondary"
    },
    {
      name: "1 Year Plan",
      price: "₹2,499",
      period: "/12 months",
      description: "Complete journaling experience with yearly recap",
      features: [
        "Everything in 6 Month Plan",
        "Weekly video summaries",
        "Bi-weekly video summaries",
        "Monthly recap videos",
        "Annual recap video",
        "Advanced memory connections",
        "Personal growth reports",
        "Early feature access"
      ],
      cta: "Get 1 Year",
      popular: false,
      icon: Star,
      gradient: "bg-white",
      borderColor: "border-accent/30"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-peach-light to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
            Start Your Journey
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4 font-poppins">
            Choose What Fits
          </h3>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-poppins">
            Begin with free journaling for one month, then upgrade for continuous video features and insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in ${
                  plan.popular 
                    ? `${plan.gradient} ${plan.borderColor} border-2 scale-105` 
                    : `${plan.gradient} ${plan.borderColor} border`
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold font-poppins shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-left mb-8">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-primary font-poppins">{plan.name}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary font-poppins">{plan.price}</span>
                    <span className="text-lg text-primary/70 font-poppins ml-1">{plan.period}</span>
                  </div>
                  <p className="text-secondary text-sm font-poppins">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-poppins text-primary text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-4 text-base font-bold rounded-2xl transition-all duration-300 font-poppins ${
                    plan.popular
                      ? 'bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl'
                      : 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg'
                  } transform hover:scale-105`}
                  onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary/70 text-base font-poppins">
            All plans include secure data storage, complete privacy protection, and no hidden fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
