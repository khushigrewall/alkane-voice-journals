
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Calendar, BookOpen, Users, CheckCircle } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-br from-peach-light to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Your ALKANE Journey
          </h2>
          <p className="text-xl text-primary/80">
            Track your progress and manage your subscription with ease
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Plan Card */}
          <Card className="bg-white border-2 border-accent/30 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Current Plan</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Badge className="bg-accent text-primary font-semibold px-4 py-2">
                {userSubscription.plan}
              </Badge>
              <div className="text-primary/70">
                <p className="font-medium">Status: <span className="text-green-600">{userSubscription.status}</span></p>
                <p className="text-sm mt-2">{userSubscription.daysRemaining} days remaining</p>
              </div>
              {userSubscription.plan !== 'Free Trial' && (
                <p className="text-sm text-primary/60">
                  Next billing: {new Date(userSubscription.nextBillingDate).toLocaleDateString()}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Journal Stats Card */}
          <Card className="bg-white border-2 border-secondary/30 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-primary">Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              {hasEntries ? (
                <>
                  <div className="text-3xl font-bold text-secondary">
                    {userSubscription.entriesCount}
                  </div>
                  <p className="text-primary/70">Journal Entries</p>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Keep up the great work!</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-3xl font-bold text-primary/40">0</div>
                  <p className="text-primary/70">Journal Entries</p>
                  <p className="text-sm text-primary/60">Your journey starts today!</p>
                </>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card className="bg-white border-2 border-primary/30 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {!hasEntries ? (
                <Button 
                  className="w-full bg-accent-gradient text-primary font-semibold hover:shadow-lg transition-all duration-300"
                  onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your First Entry
                </Button>
              ) : (
                <Button className="w-full bg-accent-gradient text-primary font-semibold hover:shadow-lg transition-all duration-300">
                  Schedule Next Call
                </Button>
              )}
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                View All Entries
              </Button>
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upgrade Prompt for Free Users */}
        {userSubscription.plan === 'Free Trial' && (
          <Card className="mt-12 bg-accent-gradient border-none shadow-xl">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Continue Your Journey?
              </h3>
              <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
                Your free trial includes everything you need to start journaling. 
                Upgrade to continue capturing your life's beautiful moments beyond the trial period.
              </p>
              <Button 
                className="bg-primary text-white px-8 py-4 text-lg rounded-full hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing Plans
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SubscriptionManagement;
