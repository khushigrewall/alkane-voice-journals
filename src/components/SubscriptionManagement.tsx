
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const SubscriptionManagement = () => {
  // Sample user data - replace with real data
  const userSubscription = {
    plan: 'Free Trial',
    status: 'Active',
    entriesCount: 0,
    daysRemaining: 30,
    nextBillingDate: '2024-02-15'
  };

  const hasEntries = userSubscription.entriesCount > 0;

  return (
    <section id="subscription" className="py-24 bg-gradient-to-br from-white to-peach-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8 font-poppins">
            Your Dashboard
          </h2>
          <p className="text-xl text-primary/80 font-poppins">
            Track your progress and manage your journaling journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Current Plan Status */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-accent/30 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-accent-gradient text-primary p-8">
              <CardTitle className="text-2xl font-bold font-poppins flex items-center">
                <Calendar className="w-8 h-8 mr-3" />
                Current Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <Badge className="bg-secondary text-white font-bold px-6 py-3 text-lg font-poppins">
                  {userSubscription.plan}
                </Badge>
              </div>
              <div className="text-center space-y-2">
                <p className="text-primary font-bold text-lg font-poppins">
                  Status: <span className="text-green-600">{userSubscription.status}</span>
                </p>
                <p className="text-primary/70 font-poppins">
                  <span className="font-bold text-2xl text-secondary">{userSubscription.daysRemaining}</span> days remaining in trial
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Journal Progress */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-secondary/30 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-secondary/10 p-8">
              <CardTitle className="text-2xl font-bold text-primary font-poppins flex items-center">
                <BookOpen className="w-8 h-8 mr-3 text-secondary" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center space-y-6">
              {hasEntries ? (
                <>
                  <div className="text-6xl font-bold text-secondary font-poppins">
                    {userSubscription.entriesCount}
                  </div>
                  <p className="text-primary/70 text-lg font-poppins">Journal Entries Created</p>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-poppins font-semibold">Amazing progress!</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-6xl font-bold text-primary/30 font-poppins">0</div>
                  <p className="text-primary/70 text-lg font-poppins">Journal Entries</p>
                  <p className="text-primary/60 font-poppins">Your journey starts today!</p>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Get Started Section */}
        <Card className="bg-accent-gradient border-none shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="text-center py-16 px-8">
            <h3 className="text-4xl font-bold text-primary mb-6 font-poppins">
              {hasEntries ? "Continue Your Journey" : "Start Your Journey Today"}
            </h3>
            <p className="text-primary/80 mb-10 max-w-3xl mx-auto text-xl leading-relaxed font-poppins">
              {hasEntries 
                ? "Schedule your next call and continue building your beautiful journal collection."
                : "Ready to begin? Fill out the form below and we'll schedule your first therapeutic conversation. No writing required - just authentic conversations that become lasting memories."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-primary text-white px-12 py-6 text-xl font-bold rounded-full hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-poppins"
                onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hasEntries ? "Schedule Next Call" : "Get Started Now"}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              {!hasEntries && (
                <Button 
                  variant="outline" 
                  className="border-2 border-primary text-primary bg-white/80 px-12 py-6 text-xl font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg font-poppins"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing Plans
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubscriptionManagement;
