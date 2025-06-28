
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Smile, Sun, Cloud, Sparkles, Calendar } from 'lucide-react';

const MoodTrackerSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const moodData = {
    week: [
      { day: 'Mon', mood: 'happy', color: 'bg-secondary', icon: Smile },
      { day: 'Tue', mood: 'peaceful', color: 'bg-accent', icon: Sun },
      { day: 'Wed', mood: 'content', color: 'bg-primary', icon: Cloud },
      { day: 'Thu', mood: 'grateful', color: 'bg-secondary', icon: Heart },
      { day: 'Fri', mood: 'excited', color: 'bg-accent', icon: Smile },
      { day: 'Sat', mood: 'relaxed', color: 'bg-primary', icon: Sun },
      { day: 'Sun', mood: 'joyful', color: 'bg-secondary', icon: Heart },
    ],
    month: [
      { day: 'Week 1', mood: 'optimistic', color: 'bg-secondary', icon: Sun },
      { day: 'Week 2', mood: 'energetic', color: 'bg-accent', icon: Smile },
      { day: 'Week 3', mood: 'balanced', color: 'bg-primary', icon: Heart },
      { day: 'Week 4', mood: 'grateful', color: 'bg-secondary', icon: Cloud },
    ],
    year: [
      { day: 'Q1', mood: 'growth', color: 'bg-accent', icon: Sun },
      { day: 'Q2', mood: 'achievement', color: 'bg-secondary', icon: Smile },
      { day: 'Q3', mood: 'reflection', color: 'bg-primary', icon: Heart },
      { day: 'Q4', mood: 'gratitude', color: 'bg-secondary', icon: Cloud },
    ]
  };

  const insights = [
    { label: 'Most Common Mood', value: 'Peaceful', color: 'bg-accent-light text-primary' },
    { label: 'Mood Trend', value: 'Improving', color: 'bg-peach text-primary' },
    { label: 'Energy Level', value: 'High', color: 'bg-accent-light text-primary' },
  ];

  const currentData = moodData[selectedPeriod as keyof typeof moodData];

  return (
    <section className="py-20 bg-peach-gradient">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-secondary mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
              Mood & Wellness Tracker
            </h2>
            <Calendar className="w-8 h-8 text-secondary ml-3" />
          </div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-poppins leading-relaxed">
            Track your emotional journey and discover patterns in your daily experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mood Calendar */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-none rounded-3xl">
            <CardHeader>
              <CardTitle className="text-primary font-poppins text-xl">
                {selectedPeriod === 'week' ? 'Weekly' : selectedPeriod === 'month' ? 'Monthly' : 'Yearly'} Mood Overview
              </CardTitle>
              <div className="flex space-x-2">
                {['week', 'month', 'year'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 rounded-full text-sm font-poppins capitalize transition-all duration-300 ${
                      selectedPeriod === period
                        ? 'bg-secondary text-white shadow-lg'
                        : 'bg-accent-light text-primary hover:bg-accent hover:text-white'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className={`grid gap-4 ${selectedPeriod === 'week' ? 'grid-cols-7' : selectedPeriod === 'month' ? 'grid-cols-4' : 'grid-cols-4'}`}>
                {currentData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="text-xs text-primary/60 mb-2 font-poppins">{item.day}</div>
                      <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-2 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs text-primary/70 font-poppins capitalize">{item.mood}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-none rounded-3xl">
            <CardHeader>
              <CardTitle className="text-primary font-poppins text-xl">Personal Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-peach-light rounded-2xl">
                  <span className="font-medium text-primary font-poppins">{insight.label}</span>
                  <Badge className={`${insight.color} border-none font-poppins font-medium`}>
                    {insight.value}
                  </Badge>
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-accent-gradient rounded-2xl">
                <h4 className="font-bold text-white mb-3 font-poppins">
                  {selectedPeriod === 'week' ? "This Week's" : selectedPeriod === 'month' ? "This Month's" : "This Year's"} Reflection
                </h4>
                <p className="text-white/90 font-poppins text-sm leading-relaxed">
                  {selectedPeriod === 'week' 
                    ? "You've shown remarkable resilience this week. Your mood patterns suggest you're finding more balance and peace in your daily routine. Keep nurturing those positive moments!"
                    : selectedPeriod === 'month'
                    ? "This month has been a journey of growth and self-discovery. You've maintained a positive outlook while navigating challenges with grace."
                    : "Looking at the year ahead, your emotional intelligence and resilience continue to strengthen. You're building lasting habits for wellbeing."
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MoodTrackerSection;
