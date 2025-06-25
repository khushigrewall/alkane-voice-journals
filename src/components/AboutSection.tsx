
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-peach-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
            About ALKANE
          </h2>
          
          <div className="text-lg text-primary/80 leading-relaxed space-y-6">
            <p>
              At ALKANE, we believe that every day holds meaningful moments worth remembering. 
              Yet in our busy lives, these precious experiences often slip away, forgotten in the rush of tomorrow.
            </p>
            
            <p>
              That's why we created a revolutionary approach to journaling—one that requires no writing, 
              no apps to remember, no blank pages to intimidate. Just authentic conversations that transform 
              into beautiful, lasting memories.
            </p>
            
            <p>
              Our mission is to make personal reflection effortless and meaningful. Through the power of 
              AI-driven conversations, we help you capture your life's story in your own words, 
              polished and preserved for years to come.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Privacy First</div>
              <p className="text-primary/70">Your conversations and journal entries are encrypted and secure</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Personal Growth</div>
              <p className="text-primary/70">Reflect on your journey and discover patterns in your life</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Effortless</div>
              <p className="text-primary/70">No writing required—just share your day in conversation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
