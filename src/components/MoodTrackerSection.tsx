
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Smile, Sun, Cloud, Sparkles } from 'lucide-react';

const MoodTrackerSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const moodData = [
    { day: 'Mon', mood: 'happy', color: 'bg-secondary', icon: Smile },
    { day: 'Tue', mood: 'peaceful', color: 'bg-accent', icon: Sun },
    { day: 'Wed', mood: 'content', color: 'bg-primary', icon: Cloud },
    { day: 'Thu', mood: 'grateful', color: 'bg-secondary', icon: Heart },
    { day: 'Fri', mood: 'excited', color: 'bg-accent', icon: Smile },
    { day: 'Sat', mood: 'relaxed', color: 'bg-primary', icon: Sun },
    { day: 'Sun', mood: 'joyful', color: 'bg-secondary', icon: Heart },
  ];

  const insights = [
    { label: 'Most Common Mood', value: 'Peaceful', color: 'bg-accent/20 text-accent' },
    { label: 'Mood Trend', value: 'Improving', color: 'bg-secondary/20 text-secondary' },
    { label: 'Energy Level', value: 'High', color: 'bg-primary/20 text-primary' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-peach-light to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-secondary mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
              Mood & Wellness Tracker
            </h2>
            <Sparkles className="w-6 h-6 text-secondary ml-3" />
          </div>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto font-poppins leading-relaxed">
            Track your emotional journey and discover patterns in your daily experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mood Calendar */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none rounded-3xl">
            <CardHeader>
              <CardTitle className="text-primary font-poppins text-xl">Weekly Mood Overview</CardTitle>
              <div className="flex space-x-2">
                {['week', 'month', 'year'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 rounded-full text-sm font-poppins capitalize transition-all duration-300 ${
                      selectedPeriod === period
                        ? 'bg-primary text-white'
                        : 'bg-accent/20 text-primary hover:bg-accent/30'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-4">
                {moodData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="text-xs text-primary/60 mb-2 font-poppins">{item.day}</div>
                      <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-2 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs text-primary/80 font-poppins capitalize">{item.mood}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none rounded-3xl">
            <CardHeader>
              <CardTitle className="text-primary font-poppins text-xl">Personal Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-peach-light/50 rounded-2xl">
                  <span className="font-medium text-primary font-poppins">{insight.label}</span>
                  <Badge className={`${insight.color} border-none font-poppins font-medium`}>
                    {insight.value}
                  </Badge>
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl">
                <h4 className="font-bold text-primary mb-3 font-poppins">This Week's Reflection</h4>
                <p className="text-primary/80 font-poppins text-sm leading-relaxed">
                  "You've shown remarkable resilience this week. Your mood patterns suggest you're finding more balance and peace in your daily routine. Keep nurturing those positive moments!"
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
