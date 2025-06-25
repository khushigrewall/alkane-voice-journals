
import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const chatMessages = [
    {
      text: "Hello beautiful soul! 💕 I'm here to listen with an open heart. Whatever you're going through - whether it's joy, struggle, confusion, or growth - this is a safe space for you to express yourself. What would you like to share with me today?",
      isBot: true
    }
  ];

  const suggestedResponses = [
    "I'm feeling overwhelmed today",
    "I need motivation to start journaling", 
    "How can I process difficult emotions?",
    "I'm struggling with self-doubt"
  ];

  const features = [
    {
      icon: Heart,
      title: "100% Empathetic",
      description: "Understanding responses that truly connect"
    },
    {
      icon: MessageCircle,
      title: "Always Available", 
      description: "24/7 emotional support whenever you need"
    },
    {
      icon: Sparkles,
      title: "Judgment-Free Zone",
      description: "Express yourself freely without fear"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
      }, 1500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-peach-light via-white to-peach-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6 font-poppins">
            Talk to Our Emotional AI Companion
          </h2>
          <p className="text-xl text-primary/80 max-w-4xl mx-auto font-poppins leading-relaxed">
            Share your thoughts, feelings, and challenges with our empathetic AI companion.
            <br />
            Get supportive, understanding responses that truly connect with your emotional journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Chat Interface */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-accent/10">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-accent to-secondary p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins">Journaly AI Companion</h3>
                  <p className="text-white/90 font-poppins">Always here to listen with empathy and care</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-poppins">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-8 min-h-[400px] bg-gradient-to-b from-peach-light/30 to-white">
              <div className="space-y-6">
                {/* AI Message */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-6 shadow-lg max-w-2xl border border-accent/10">
                    <p className="text-primary/90 leading-relaxed font-poppins">
                      {chatMessages[0].text}
                    </p>
                  </div>
                </div>

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-lg border border-accent/10">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Suggested Responses */}
              <div className="mt-8">
                <div className="grid md:grid-cols-2 gap-3">
                  {suggestedResponses.map((response, index) => (
                    <button
                      key={index}
                      className="text-left p-4 bg-white/70 hover:bg-white rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      <p className="text-primary/80 font-poppins group-hover:text-primary transition-colors">
                        {response}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-accent/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Share what's on your heart... I'm here to listen 💕"
                    className="flex-1 bg-transparent border-none outline-none text-primary/80 placeholder-primary/50 font-poppins"
                  />
                  <Button className="bg-accent hover:bg-secondary text-white rounded-full p-3 transition-all duration-300">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Bottom message */}
              <div className="text-center mt-6">
                <p className="text-primary/60 font-poppins flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-secondary" />
                  Your feelings are valid, and you're not alone in this journey
                  <Heart className="w-4 h-4 text-secondary" />
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 font-poppins group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-primary/70 font-poppins">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
