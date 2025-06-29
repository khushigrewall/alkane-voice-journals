import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen, Sparkles } from 'lucide-react';

interface ChatSummary {
  summary_id: number;
  conversation_summary: string;
  created_at: string;
}

interface ChatSummaryResponse {
  status: string;
  summaries: ChatSummary[];
}

const JournalSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [journalEntries, setJournalEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with actual user ID - you might get this from auth context
  const userId = localStorage.getItem('userId') || '21';

  useEffect(() => {
    const fetchChatSummaries = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://journaly-backend-cs29.onrender.com/chat-summaries/${userId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }

        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ChatSummaryResponse = await response.json();
        
        if (data.status === 'success') {
          const formattedEntries = data.summaries.map((summary, index) => ({
            date: new Date(summary.created_at).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            title: `Journal Entry ${data.summaries.length - index}`,
            content: summary.conversation_summary
          }));
          setJournalEntries(formattedEntries);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch journal entries');
        console.error('Error fetching chat summaries:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchChatSummaries();
  }, [userId]);

  const nextPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % journalEntries.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + journalEntries.length) % journalEntries.length);
      setIsAnimating(false);
    }, 300);
  };

  if (loading) {
    return (
      <section id="journal" className="py-20 bg-gradient-to-br from-peach-light to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-primary/70 font-poppins">Loading your journal entries...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="journal" className="py-20 bg-gradient-to-br from-peach-light to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-500 font-poppins">Error loading journal entries: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="journal" className="py-20 bg-gradient-to-br from-peach-light to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-secondary mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-poppins">
              Your Personal Journal
            </h2>
            <Sparkles className="w-6 h-6 text-secondary ml-3" />
          </div>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto font-poppins leading-relaxed">
            Beautiful entries created from your daily conversations, preserved like pages in a cherished book
          </p>
        </div>

        {journalEntries.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            <div className="relative" style={{ perspective: '1000px' }}>
              <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-0 relative">
                  <div 
                    key={currentPage}
                    className={`relative min-h-[500px] p-10 bg-gradient-to-br from-white to-peach-light/20 transition-all duration-500 ease-in-out transform-gpu ${
                      isAnimating ? 'animate-page-turn' : ''
                    }`}
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
                  className="bg-white/90 hover:bg-white text-primary shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110"
                  disabled={journalEntries.length <= 1 || isAnimating}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-6">
                <Button
                  onClick={nextPage}
                  className="bg-white/90 hover:bg-white text-primary shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110"
                  disabled={journalEntries.length <= 1 || isAnimating}
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
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentPage(index);
                        setIsAnimating(false);
                      }, 300);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
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
    </section>
  );
};

export default JournalSection;
