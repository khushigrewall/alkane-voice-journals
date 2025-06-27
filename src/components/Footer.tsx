
import React from 'react';
import { Heart, Mail, Phone, Twitter, Instagram, Linkedin, Sparkles, BookOpen, Users, Shield, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)'
             }}></div>
      </div>
      
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold font-poppins">ALKANE</h3>
              </div>
              
              <p className="text-white/90 leading-relaxed font-poppins max-w-lg">
                Transform your daily experiences into beautiful journal entries through meaningful AI-powered conversations. 
                Your life story, beautifully preserved and organized.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-white font-poppins">10K+</div>
                  <div className="text-white/70 text-sm font-poppins">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-white font-poppins">1M+</div>
                  <div className="text-white/70 text-sm font-poppins">Memories Saved</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-white font-poppins">99%</div>
                  <div className="text-white/70 text-sm font-poppins">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-lg font-poppins flex items-center">
                <Sparkles className="w-5 h-5 text-accent mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'How It Works', href: '#how-it-works' },
                  { name: 'Your Journal', href: '#journal' },
                  { name: 'Get Started', href: '#get-started' },
                  { name: 'Mood Tracker', href: '#mood-tracker' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors font-poppins hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-6 text-lg font-poppins flex items-center">
                <Shield className="w-5 h-5 text-accent mr-2" />
                Support
              </h4>
              <ul className="space-y-3">
                {[
                  'Help Center',
                  'Privacy Policy', 
                  'Terms of Service',
                  'Contact Us'
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-accent transition-colors font-poppins hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-white/80 text-sm font-poppins">hello@alkane.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-white/80 text-sm font-poppins">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/80 text-sm font-poppins">
                  © 2024 ALKANE. All rights reserved.
                </p>
                <div className="flex items-center justify-center md:justify-start mt-2 space-x-2">
                  <span className="text-white/60 text-xs font-poppins">Made with</span>
                  <Heart className="w-4 h-4 text-accent" />
                  <span className="text-white/60 text-xs font-poppins">for meaningful conversations</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-white group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
