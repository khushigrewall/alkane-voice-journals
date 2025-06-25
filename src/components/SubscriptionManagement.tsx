
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
    <section id="subscription" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
            Your Dashboard
          </h2>
          <p className="text-lg text-primary/80 font-poppins">
            Track your progress and manage your journaling journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Current Plan Status */}
          <Card className="bg-gradient-to-br from-accent-light to-white border border-accent/20 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-accent/10 p-6">
              <CardTitle className="text-xl font-bold text-primary font-poppins flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Current Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <Badge className="bg-secondary text-white font-bold px-4 py-2 text-sm font-poppins">
                  {userSubscription.plan}
                </Badge>
              </div>
              <div className="text-center space-y-2">
                <p className="text-primary font-medium text-base font-poppins">
                  Status: <span className="text-green-600">{userSubscription.status}</span>
                </p>
                <p className="text-primary/70 font-poppins">
                  <span className="font-bold text-xl text-secondary">{userSubscription.daysRemaining}</span> days remaining
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Journal Progress */}
          <Card className="bg-gradient-to-br from-white to-peach-light border border-accent/20 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-peach/10 p-6">
              <CardTitle className="text-xl font-bold text-primary font-poppins flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-secondary" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center space-y-4">
              {hasEntries ? (
                <>
                  <div className="text-5xl font-bold text-secondary font-poppins">
                    {userSubscription.entriesCount}
                  </div>
                  <p className="text-primary/70 text-base font-poppins">Journal Entries Created</p>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-poppins font-medium">Amazing progress!</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-5xl font-bold text-primary/30 font-poppins">0</div>
                  <p className="text-primary/70 text-base font-poppins">Journal Entries</p>
                  <p className="text-primary/60 font-poppins text-sm">Your journey starts today!</p>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Get Started Section */}
        <Card className="bg-gradient-to-br from-accent-light to-peach-light border-none shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="text-center py-12 px-8">
            <h3 className="text-3xl font-bold text-primary mb-4 font-poppins">
              {hasEntries ? "Continue Your Journey" : "Start Your Journey Today"}
            </h3>
            <p className="text-primary/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed font-poppins">
              {hasEntries 
                ? "Schedule your next call and continue building your beautiful journal collection."
                : "Ready to begin? Fill out the form below and we'll schedule your first conversation."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-primary text-white px-10 py-4 text-lg font-bold rounded-full hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
                onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hasEntries ? "Schedule Next Call" : "Get Started Now"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              {!hasEntries && (
                <Button 
                  variant="outline" 
                  className="border-2 border-primary text-primary bg-white/80 px-10 py-4 text-lg font-medium rounded-full hover:bg-white transition-all duration-300 shadow-md font-poppins"
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
