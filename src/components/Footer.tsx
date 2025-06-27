
import React from 'react';
import { Heart, Mail, Phone, MapPin, Clock, Sparkles, BookOpen, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section with brand and tagline */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-accent mr-4 animate-pulse" />
              <h3 className="text-4xl font-bold font-poppins">ALKANE</h3>
              <Sparkles className="w-8 h-8 text-accent ml-4 animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins italic max-w-2xl mx-auto">
              "Where every conversation becomes a cherished memory"
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About Section with enhanced design */}
            <div className="col-span-2 space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent mr-3" />
                  <h4 className="font-bold text-lg font-poppins">Our Mission</h4>
                </div>
                <p className="text-white/80 leading-relaxed font-poppins">
                  Transform your daily experiences into beautiful journal entries through 
                  meaningful AI-powered conversations. Your life story, beautifully preserved for generations to come.
                </p>
              </div>
              
              {/* Contact info with creative design */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/20 rounded-xl p-4 hover:bg-accent/30 transition-colors">
                  <Mail className="w-5 h-5 text-accent mb-2" />
                  <p className="text-sm text-white/90 font-poppins">hello@alkane.ai</p>
                </div>
                <div className="bg-secondary/20 rounded-xl p-4 hover:bg-secondary/30 transition-colors">
                  <Phone className="w-5 h-5 text-accent mb-2" />
                  <p className="text-sm text-white/90 font-poppins">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-lg font-poppins flex items-center">
                <Coffee className="w-5 h-5 text-accent mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['How It Works', 'Your Journal', 'Calendar', 'Get Started'].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '-')}`} 
                      className="text-white/80 hover:text-accent transition-colors font-poppins hover:translate-x-2 transform duration-200 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support with enhanced styling */}
            <div>
              <h4 className="font-bold mb-6 text-lg font-poppins flex items-center">
                <Heart className="w-5 h-5 text-accent mr-2 animate-pulse" />
                Support & Care
              </h4>
              <ul className="space-y-3">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-accent transition-colors font-poppins hover:translate-x-2 transform duration-200 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced bottom section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-white/60 text-sm font-poppins">Made with love globally</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-white/60 text-sm font-poppins">Available 24/7</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white/60 text-sm font-poppins">
                  © 2024 ALKANE. All rights reserved.
                </p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <span className="text-white/40 text-xs font-poppins">Crafted with</span>
                  <Heart className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-white/40 text-xs font-poppins">for meaningful conversations</span>
                </div>
              </div>

              {/* Social links with creative design */}
              <div className="flex space-x-4">
                {[1, 2, 3].map((_, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer group"
                  >
                    <div className="w-5 h-5 bg-accent/60 rounded-full group-hover:scale-110 transition-transform"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
