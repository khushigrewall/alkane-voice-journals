
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const GetStartedSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    callTime: '',
    aboutYou: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
  ];

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return;
    }

    if (!formData.callTime) {
      toast({
        title: "Call Time Required",
        description: "Please select your preferred call time",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Welcome to ALKANE!",
        description: "Your journey begins now. You'll receive your first call tomorrow at " + formData.callTime,
      });

      // Reset form
      setFormData({ name: '', phone: '', email: '', callTime: '', aboutYou: '' });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-started" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
            Begin Your Journey Today
          </h2>
          <p className="text-xl text-primary/80 font-poppins">
            Fill in your details below and start your personalized journaling experience
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 animate-slide-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary font-medium font-poppins">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary font-medium font-poppins">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-medium font-poppins">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="callTime" className="text-primary font-medium font-poppins">
                Preferred Call Time *
              </Label>
              <Select
                value={formData.callTime}
                onValueChange={(value) => setFormData({ ...formData, callTime: value })}
              >
                <SelectTrigger className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins">
                  <SelectValue placeholder="Select your preferred call time" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-accent/30 rounded-xl">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time} className="text-primary hover:bg-accent/20 font-poppins">
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="aboutYou" className="text-primary font-medium font-poppins">
                About You
              </Label>
              <Textarea
                id="aboutYou"
                placeholder="Tell us a bit about yourself, your interests, and what you'd like to journal about..."
                value={formData.aboutYou}
                onChange={(e) => setFormData({ ...formData, aboutYou: e.target.value })}
                className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins min-h-[100px] resize-none"
                rows={4}
              />
              <p className="text-sm text-primary/60 font-poppins">
                This helps us personalize your experience and create better conversations
              </p>
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-semibold py-4 text-lg rounded-xl hover:bg-primary/90 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:transform-none font-poppins"
              >
                {isSubmitting ? "Setting Up Your Account..." : "Start My Journey"}
              </Button>
            </div>

            <p className="text-center text-sm text-primary/60 mt-4 font-poppins">
              By signing up, you agree to receive calls from ALKANE at your specified time. 
              Cancel anytime during your free trial.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
