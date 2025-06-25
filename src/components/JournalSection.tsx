
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, BookOpen, Calendar as CalendarIcon } from 'lucide-react';

const JournalSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Sample journal entries - replace with real data
  const journalEntries = [
    {
      date: "2024-01-15",
      title: "A Beautiful Beginning",
      content: "Today was the start of something special. I felt a sense of peace and clarity that I haven't experienced in a while. The conversation with the ALKANE agent felt natural and therapeutic, like talking to an old friend who truly understands.",
      mood: "Peaceful",
      highlights: ["Morning meditation", "Productive work session", "Quality time with family"]
    },
    {
      date: "2024-01-16", 
      title: "Reflections on Growth",
      content: "I'm beginning to see patterns in my thoughts and behaviors. Today's session helped me realize how much I've grown in the past few months. The gentle questions from my ALKANE companion guided me to insights I might have missed.",
      mood: "Grateful",
      highlights: ["Self-reflection time", "Completed a challenging project", "Evening walk in nature"]
    }
  ];

  const handlePageFlip = (direction: 'next' | 'prev') => {
    setIsFlipping(true);
    setTimeout(() => {
      if (direction === 'next' && currentPage < journalEntries.length - 1) {
        setCurrentPage(currentPage + 1);
      } else if (direction === 'prev' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      setIsFlipping(false);
    }, 300);
  };

  const hasEntries = journalEntries.length > 0;

  return (
    <section id="journal" className="py-20 bg-peach-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Your Personal Journal
          </h2>
          <p className="text-xl text-primary/80">
            Every conversation becomes a beautiful memory, preserved like pages in your life's story
          </p>
        </div>

        {hasEntries ? (
          <div className="relative max-w-4xl mx-auto">
            {/* Book Container */}
            <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-2xl p-8 min-h-[500px]">
              {/* Book Spine Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-b from-amber-200 to-orange-300 rounded-l-2xl shadow-inner"></div>
              
              {/* Page Content */}
              <div className={`transition-all duration-500 transform ${isFlipping ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
                <div className="ml-8">
                  {/* Page Header */}
                  <div className="flex justify-between items-center mb-8 border-b border-primary/20 pb-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-6 h-6 text-secondary" />
                      <span className="text-lg font-semibold text-primary">
                        {new Date(journalEntries[currentPage].date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <span className="text-sm text-primary/60">Page {currentPage + 1} of {journalEntries.length}</span>
                  </div>

                  {/* Entry Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {journalEntries[currentPage].title}
                    </h3>
                    
                    <div className="text-primary/80 leading-relaxed text-lg">
                      {journalEntries[currentPage].content}
                    </div>

                    <div className="bg-white/50 rounded-lg p-4 mt-6">
                      <h4 className="font-semibold text-primary mb-2">Today's Highlights</h4>
                      <ul className="space-y-1">
                        {journalEntries[currentPage].highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-primary/70">
                            <span className="text-secondary mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-primary/60">Mood:</span>
                        <span className="bg-accent/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {journalEntries[currentPage].mood}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-6 right-6 flex space-x-4">
                <Button
                  onClick={() => handlePageFlip('prev')}
                  disabled={currentPage === 0 || isFlipping}
                  variant="outline"
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handlePageFlip('next')}
                  disabled={currentPage === journalEntries.length - 1 || isFlipping}
                  variant="outline"
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-24 h-24 text-secondary/50 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">Your Journal Awaits</h3>
            <p className="text-lg text-primary/70 mb-8 max-w-2xl mx-auto">
              Your beautiful journey starts today. Let our AI companion help you capture your thoughts, 
              feelings, and experiences in meaningful journal entries.
            </p>
            <Button 
              className="bg-accent-gradient text-primary font-semibold px-8 py-4 text-lg rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your First Entry
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JournalSection;
