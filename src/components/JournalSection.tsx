
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const JournalSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Sample journal entries - replace with real data
  const journalEntries = [
    {
      date: "Today, December 25th",
      title: "A Peaceful Morning",
      content: "I woke up feeling refreshed and grateful. The morning sunlight streaming through my window reminded me of all the beautiful moments that make life worth living. Today I spent time with family, shared stories, and felt deeply connected to the people I love most."
    },
    {
      date: "Yesterday, December 24th", 
      title: "Christmas Eve Reflections",
      content: "Christmas Eve brought such warmth to my heart. I found myself reflecting on the year that's passed and all the growth I've experienced. The quiet moments of preparation, the anticipation of tomorrow, and the simple joy of being present with loved ones filled me with peace."
    },
    {
      date: "December 23rd",
      title: "Finding Joy in Simple Things",
      content: "Today reminded me that happiness often comes from the smallest moments. A warm cup of tea, a phone call with a friend, the way the evening light painted the walls golden. I'm learning to appreciate these gentle gifts that each day brings."
    }
  ];

  const nextPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % journalEntries.length);
      setIsFlipping(false);
    }, 300);
  };

  const prevPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + journalEntries.length) % journalEntries.length);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <section id="journal" className="py-20 bg-gradient-to-br from-peach-light to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
            Your Personal Journal
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto font-poppins">
            Beautiful entries created from your daily conversations, preserved like pages in a cherished book
          </p>
        </div>

        {journalEntries.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            {/* Book-like container with page flipping animation */}
            <div className="relative perspective-1000">
              <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
                <CardContent className="p-0">
                  {/* Journal page with flip animation */}
                  <div 
                    key={currentPage}
                    className={`relative min-h-[500px] p-10 bg-gradient-to-br from-white to-peach-light/20 transition-all duration-300 ${
                      isFlipping ? 'transform rotateY-180 opacity-0' : 'transform rotateY-0 opacity-100'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      animation: isFlipping ? 'pageFlip 0.6s ease-in-out' : 'none'
                    }}
                  >
                    {/* Page decoration */}
                    <div className="absolute top-0 left-8 w-px h-full bg-secondary/20"></div>
                    <div className="absolute top-8 left-0 right-0 h-px bg-secondary/10"></div>
                    <div className="absolute top-16 left-0 right-0 h-px bg-secondary/10"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 ml-6">
                      <div className="mb-6">
                        <p className="text-sm text-secondary font-poppins font-medium mb-2">
                          {journalEntries[currentPage].date}
                        </p>
                        <h3 className="text-2xl font-bold text-primary font-poppins mb-4">
                          {journalEntries[currentPage].title}
                        </h3>
                      </div>
                      
                      <div className="prose prose-lg max-w-none">
                        <p className="text-primary/90 leading-relaxed font-poppins text-lg">
                          {journalEntries[currentPage].content}
                        </p>
                      </div>
                      
                      {/* Page number */}
                      <div className="absolute bottom-8 right-8 text-sm text-primary/50 font-poppins">
                        Page {currentPage + 1} of {journalEntries.length}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-6">
                <Button
                  onClick={prevPage}
                  className="bg-white/90 hover:bg-white text-primary shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110"
                  disabled={journalEntries.length <= 1 || isFlipping}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-6">
                <Button
                  onClick={nextPage}
                  className="bg-white/90 hover:bg-white text-primary shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110"
                  disabled={journalEntries.length <= 1 || isFlipping}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Page indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {journalEntries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isFlipping) {
                      setIsFlipping(true);
                      setTimeout(() => {
                        setCurrentPage(index);
                        setIsFlipping(false);
                      }, 300);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'bg-secondary shadow-lg' 
                      : 'bg-primary/20 hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-primary/30 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">
              Your Journal Awaits
            </h3>
            <p className="text-primary/70 mb-8 max-w-md mx-auto font-poppins">
              Start your journey today and watch as your daily conversations transform into beautiful journal entries.
            </p>
            <Button 
              className="bg-primary text-white px-8 py-3 rounded-full font-poppins font-medium hover:bg-primary/90 transition-all duration-300"
              onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Your First Entry
            </Button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pageFlip {
          0% { transform: rotateY(0deg); opacity: 1; }
          50% { transform: rotateY(-90deg); opacity: 0.5; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        .rotateY-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </section>
  );
};

export default JournalSection;
