
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Smile, Frown, Meh, Sun, Cloud, CloudRain } from 'lucide-react';

const MoodTrackerSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const moodData = [
    { day: 'Mon', mood: 'happy', color: 'bg-green-400', icon: Smile },
    { day: 'Tue', mood: 'peaceful', color: 'bg-blue-400', icon: Sun },
    { day: 'Wed', mood: 'stressed', color: 'bg-orange-400', icon: Cloud },
    { day: 'Thu', mood: 'grateful', color: 'bg-purple-400', icon: Heart },
    { day: 'Fri', mood: 'excited', color: 'bg-pink-400', icon: Smile },
    { day: 'Sat', mood: 'relaxed', color: 'bg-teal-400', icon: Sun },
    { day: 'Sun', mood: 'content', color: 'bg-indigo-400', icon: Heart },
  ];

  const insights = [
    { label: 'Most Common Mood', value: 'Peaceful', color: 'bg-blue-100 text-blue-800' },
    { label: 'Mood Trend', value: 'Improving', color: 'bg-green-100 text-green-800' },
    { label: 'Energy Level', value: 'High', color: 'bg-yellow-100 text-yellow-800' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-peach-light to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
            Mood & Wellness Tracker
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto font-poppins leading-relaxed">
            Track your emotional journey and discover patterns in your daily experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mood Calendar */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none">
            <CardHeader>
              <CardTitle className="text-primary font-poppins">Weekly Mood Overview</CardTitle>
              <div className="flex space-x-2">
                {['week', 'month', 'year'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 rounded-full text-sm font-poppins capitalize transition-all duration-300 ${
                      selectedPeriod === period
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-primary hover:bg-gray-200'
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
                      <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-2 hover:scale-110 transition-transform duration-300 cursor-pointer`}>
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
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none">
            <CardHeader>
              <CardTitle className="text-primary font-poppins">Personal Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-primary font-poppins">{insight.label}</span>
                  <Badge className={`${insight.color} border-none font-poppins`}>
                    {insight.value}
                  </Badge>
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
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
