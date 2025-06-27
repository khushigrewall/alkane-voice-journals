
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, BookOpen } from 'lucide-react';

const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Sample data - replace with real data
  const entriesData = {
    '2024-01-15': {
      title: 'A Beautiful Beginning',
      mood: 'Peaceful',
      preview: 'Today was the start of something special...'
    },
    '2024-01-16': {
      title: 'Reflections on Growth', 
      mood: 'Grateful',
      preview: 'I\'m beginning to see patterns in my thoughts...'
    }
  };

  const datesWithEntries = Object.keys(entriesData).map(date => new Date(date));
  
  const selectedEntry = selectedDate ? entriesData[selectedDate.toISOString().split('T')[0]] : null;

  return (
    <section id="calendar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
            Your Journey Through Time
          </h2>
          <p className="text-xl text-primary/80 font-poppins">
            Navigate through your journal entries and rediscover precious moments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendar */}
          <Card className="bg-peach-gradient border-none shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary font-poppins">
                <CalendarIcon className="w-5 h-5" />
                <span>Select a Date</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="w-full flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border-none shadow-inner bg-white/50 w-full"
                  modifiers={{
                    hasEntry: datesWithEntries
                  }}
                  modifiersStyles={{
                    hasEntry: { 
                      backgroundColor: '#FF9456', 
                      color: 'white',
                      fontWeight: 'bold'
                    }
                  }}
                />
              </div>
              <div className="mt-6 text-sm text-primary/70 flex items-center justify-center space-x-2">
                <div className="w-4 h-4 bg-accent rounded"></div>
                <span className="font-poppins">Days with journal entries</span>
              </div>
            </CardContent>
          </Card>

          {/* Selected Entry Preview */}
          <Card className="bg-gradient-to-br from-white to-peach-light border-none shadow-xl min-h-[400px]">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary font-poppins">
                <BookOpen className="w-5 h-5" />
                <span>
                  {selectedDate ? selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) : 'Select a Date'}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedEntry ? (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary font-poppins">
                    {selectedEntry.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-accent/30 text-primary font-poppins">
                      {selectedEntry.mood}
                    </Badge>
                  </div>
                  <p className="text-primary/80 leading-relaxed font-poppins">
                    {selectedEntry.preview}
                  </p>
                  <button className="text-secondary hover:text-primary transition-colors font-medium font-poppins">
                    Read full entry →
                  </button>
                </div>
              ) : selectedDate ? (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-primary/60 font-poppins">No journal entry for this date</p>
                  <p className="text-sm text-primary/50 mt-2 font-poppins">
                    Start your journaling journey today!
                  </p>
                </div>
              ) : (
                <div className="text-center py-12">
                  <CalendarIcon className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-primary/60 font-poppins">Click on a date to view your journal entry</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
