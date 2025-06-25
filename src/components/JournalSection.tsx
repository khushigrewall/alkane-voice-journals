
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const JournalSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Sample journal entries
  const journalEntries = [
    {
      date: "2024-01-15",
      title: "A Beautiful Beginning",
      content: "Today was the start of something special. I felt a sense of peace and clarity that I haven't experienced in a while. The conversation with the ALKANE agent felt natural and therapeutic, like talking to an old friend who truly understands. There's something magical about being heard without judgment, and I can already feel this journey will be transformative.",
      mood: "Peaceful",
      highlights: ["Morning meditation brought clarity", "Productive work session with focus", "Quality family time over dinner"]
    },
    {
      date: "2024-01-16", 
      title: "Reflections on Growth",
      content: "I'm beginning to see patterns in my thoughts and behaviors that I never noticed before. Today's session helped me realize how much I've grown in the past few months. The gentle questions from my ALKANE companion guided me to insights I might have missed entirely. It's like having a personal therapist who's always there when I need them.",
      mood: "Grateful",
      highlights: ["Deep self-reflection session", "Completed challenging project successfully", "Evening nature walk brought peace"]
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
    }, 400);
  };

  const hasEntries = journalEntries.length > 0;

  return (
    <section id="journal" className="py-24 bg-gradient-to-br from-peach-light to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8 font-poppins">
            Your Personal Journal
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
            Every conversation becomes a beautiful memory, preserved like pages in your life's story
          </p>
        </div>

        {hasEntries ? (
          <div className="relative max-w-5xl mx-auto">
            {/* Book Container with Enhanced Animation */}
            <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-12 min-h-[600px] transform-gpu perspective-1000">
              {/* Book Spine Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-200 to-orange-300 rounded-l-3xl shadow-inner border-r-2 border-amber-300"></div>
              
              {/* Page Content with Flip Animation */}
              <div className={`transition-all duration-500 transform-gpu ${
                isFlipping 
                  ? 'scale-95 opacity-30 rotateY-12' 
                  : 'scale-100 opacity-100 rotateY-0'
              }`}>
                <div className="ml-12">
                  {/* Page Header */}
                  <div className="flex justify-between items-center mb-10 border-b-2 border-primary/20 pb-6">
                    <div className="flex items-center space-x-4">
                      <BookOpen className="w-8 h-8 text-secondary" />
                      <span className="text-2xl font-bold text-primary font-poppins">
                        {new Date(journalEntries[currentPage].date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <span className="text-primary/60 font-poppins font-medium">Page {currentPage + 1} of {journalEntries.length}</span>
                  </div>

                  {/* Entry Content */}
                  <div className="space-y-8">
                    <h3 className="text-4xl font-bold text-primary mb-6 font-poppins">
                      {journalEntries[currentPage].title}
                    </h3>
                    
                    <div className="text-primary/90 leading-relaxed text-xl font-poppins">
                      {journalEntries[currentPage].content}
                    </div>

                    <div className="bg-white/70 rounded-2xl p-6 mt-8 shadow-lg">
                      <h4 className="font-bold text-primary mb-4 text-lg font-poppins">Today's Highlights</h4>
                      <ul className="space-y-3">
                        {journalEntries[currentPage].highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-primary/80 font-poppins">
                            <span className="text-secondary mr-3 text-xl">•</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mt-10">
                      <div className="flex items-center space-x-3">
                        <span className="text-primary/60 font-poppins font-medium">Today's Mood:</span>
                        <span className="bg-accent/40 text-primary px-4 py-2 rounded-full font-bold font-poppins">
                          {journalEntries[currentPage].mood}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Navigation */}
              <div className="absolute bottom-8 right-8 flex space-x-4">
                <Button
                  onClick={() => handlePageFlip('prev')}
                  disabled={currentPage === 0 || isFlipping}
                  variant="outline"
                  size="lg"
                  className="bg-white/90 hover:bg-white font-poppins font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={() => handlePageFlip('next')}
                  disabled={currentPage === journalEntries.length - 1 || isFlipping}
                  variant="outline"
                  size="lg"
                  className="bg-white/90 hover:bg-white font-poppins font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <BookOpen className="w-32 h-32 text-secondary/50 mx-auto mb-8" />
            <h3 className="text-3xl font-bold text-primary mb-6 font-poppins">Your Journal Awaits</h3>
            <p className="text-xl text-primary/70 mb-10 max-w-2xl mx-auto font-poppins leading-relaxed">
              Your beautiful journey starts today. Let our AI companion help you capture your thoughts, 
              feelings, and experiences in meaningful journal entries.
            </p>
            <Button 
              className="bg-primary text-white font-bold px-10 py-5 text-xl rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-poppins"
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
