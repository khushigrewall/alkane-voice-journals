
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Busy Executive",
      content: "ALKANE has transformed how I reflect on my days. Instead of forgetting moments, I now have beautiful journal entries that capture my thoughts and experiences perfectly.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Creative Professional", 
      content: "The AI conversations feel so natural and insightful. I love how my rambling thoughts get transformed into coherent, meaningful journal entries.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Working Parent",
      content: "As a busy mom, I never had time to journal. Now I have this beautiful record of my family's journey, and it only takes a few minutes of my day.",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Discover how ALKANE is helping people create meaningful memories effortlessly
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="flex text-secondary text-xl mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-primary/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-primary/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
