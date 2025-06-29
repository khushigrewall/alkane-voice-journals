import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, BookOpen, User, Home } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Replace 'userId' with your actual localStorage key for user id
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Journal', href: '#journal', icon: BookOpen },
    { name: 'Calendar', href: '#calendar', icon: Calendar },
    { name: 'Dashboard', href: '#subscription', icon: User },
  ];

  const handleLogout = () => {
    // Replace 'userId' with your actual localStorage key for user id
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    // Optionally, redirect or perform other actions
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary font-poppins">ALKANE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary/70 hover:text-primary transition-colors duration-300 font-poppins font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
            {isLoggedIn ? (
              <Button
                className="bg-destructive text-white font-poppins font-medium px-6 py-2 rounded-full hover:bg-destructive/90 transition-all duration-300"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button className="bg-primary text-white font-poppins font-medium px-6 py-2 rounded-full hover:bg-primary/90 transition-all duration-300">
                Get Started
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary transition-colors p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-accent/10 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary/70 hover:text-primary transition-colors duration-300 font-poppins font-medium px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {isLoggedIn ? (
                <Button
                  className="bg-destructive text-white font-poppins font-medium px-6 py-2 rounded-full mx-2"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button className="bg-primary text-white font-poppins font-medium px-6 py-2 rounded-full mx-2">
                  Get Started
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
