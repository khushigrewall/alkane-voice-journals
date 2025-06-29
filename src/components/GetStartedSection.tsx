import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const GetStartedSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    preferred_call_time: '',
    aboutme: '',
    language_preference: 'English'
  });
  const [loginData, setLoginData] = useState({
    name: '',
    phone_number: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldShowSection, setShouldShowSection] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setShouldShowSection(!userId);
  }, []);

  // Hide the section if userId is present in localStorage
  if (!shouldShowSection) {
    return null;
  }

  const timeSlots = [
    "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "16:30",
    "17:00", "18:00", "19:00", "20:00", "21:00",
    "22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
    "07:30", "08:30", "09:30", "10:30", "11:30",
    "12:30", "13:30", "14:30", "15:30", "16:30",
    "17:30", "18:30", "19:30", "20:30", "21:30",
    "22:30", "23:30"
  ];

  const validatePhone = (phone: string) => {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  // Only send phone_number, preferred_call_time, aboutme, language_preference to backend
  const postUserToBackend = async (userData: typeof formData) => {
    const { phone_number, preferred_call_time, aboutme, language_preference } = userData;
    const response = await fetch('https://journaly-backend-cs29.onrender.com/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ phone_number, preferred_call_time, aboutme, language_preference }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  };

  // Only send phone_number to backend for login
  const loginUser = async (userData: typeof loginData) => {
    const { phone_number } = userData;
    const response = await fetch('https://journaly-backend-cs29.onrender.com/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ phone_number }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.user_id) {
      localStorage.setItem('userId', data.user_id.toString());
    }
    return data;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name",
        variant: "destructive"
      });
      return;
    }

    if (!validatePhone(formData.phone_number)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return;
    }

    if (!formData.preferred_call_time) {
      toast({
        title: "Call Time Required",
        description: "Please select your preferred call time",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await postUserToBackend(formData);

      if (response.id) {
        localStorage.setItem('userId', response.id.toString());
        setShouldShowSection(false);
      }

      toast({
        title: "Welcome to ALKANE!",
        description: `Your journey begins now. User ID: ${response.id}. You'll receive your first call tomorrow at ${formData.preferred_call_time}`,
      });

      setFormData({ name: '', phone_number: '', preferred_call_time: '', aboutme: '', language_preference: 'English' });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "An error occurred while submitting your details. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }

    if (!validatePhone(loginData.phone_number)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await loginUser(loginData);

      if (response.user_id) {
        localStorage.setItem('userId', response.user_id.toString());
        setShouldShowSection(false);

        toast({
          title: "Welcome back!",
          description: "You've been successfully logged in.",
        });
      }
    } catch (error) {
      toast({
        title: "Login Error",
        description: "Unable to find your account. Please check your details or sign up as a new user.",
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
            {showLogin ? "Welcome Back" : "Begin Your Journey Today"}
          </h2>
          <p className="text-xl text-primary/80 font-poppins">
            {showLogin 
              ? "Log in to continue your journaling experience" 
              : "Fill in your details below and start your personalized journaling experience"
            }
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 animate-slide-in">
          {!showLogin ? (
            <>
              {/* Sign Up Form */}
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
                    <Label htmlFor="phone_number" className="text-primary font-medium font-poppins">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone_number"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone_number}
                      onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                      className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferred_call_time" className="text-primary font-medium font-poppins">
                    Preferred Call Time *
                  </Label>
                  <Select
                    value={formData.preferred_call_time}
                    onValueChange={(value) => setFormData({ ...formData, preferred_call_time: value })}
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
                  <Label htmlFor="language_preference" className="text-primary font-medium font-poppins">
                    Preferred Language
                  </Label>
                  <Select
                    value={formData.language_preference}
                    onValueChange={(value) => setFormData({ ...formData, language_preference: value })}
                  >
                    <SelectTrigger className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins">
                      <SelectValue placeholder="Select your preferred language" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 border-accent/30 rounded-xl">
                      <SelectItem value="English" className="text-primary hover:bg-accent/20 font-poppins">English</SelectItem>
                      <SelectItem value="Spanish" className="text-primary hover:bg-accent/20 font-poppins">Spanish</SelectItem>
                      <SelectItem value="French" className="text-primary hover:bg-accent/20 font-poppins">French</SelectItem>
                      <SelectItem value="German" className="text-primary hover:bg-accent/20 font-poppins">German</SelectItem>
                      <SelectItem value="Chinese" className="text-primary hover:bg-accent/20 font-poppins">Chinese</SelectItem>
                      <SelectItem value="Hindi" className="text-primary hover:bg-accent/20 font-poppins">Hindi</SelectItem>
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
                    value={formData.aboutme}
                    onChange={(e) => setFormData({ ...formData, aboutme: e.target.value })}
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

              {/* Switch to Login */}
              <div className="text-center mt-6 pt-6 border-t border-accent/20">
                <p className="text-primary/70 font-poppins">
                  Already have an account?{' '}
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-secondary font-semibold hover:underline"
                  >
                    Log in here
                  </button>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="login-name" className="text-primary font-medium font-poppins">
                    Full Name *
                  </Label>
                  <Input
                    id="login-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={loginData.name}
                    onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
                    className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-phone" className="text-primary font-medium font-poppins">
                    Phone Number *
                  </Label>
                  <Input
                    id="login-phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={loginData.phone_number}
                    onChange={(e) => setLoginData({ ...loginData, phone_number: e.target.value })}
                    className="border-2 border-accent/30 focus:border-secondary rounded-xl p-4 text-primary font-poppins"
                    required
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-semibold py-4 text-lg rounded-xl hover:bg-primary/90 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:transform-none font-poppins"
                  >
                    {isSubmitting ? "Logging In..." : "Log In"}
                  </Button>
                </div>
              </form>

              {/* Switch to Sign Up */}
              <div className="text-center mt-6 pt-6 border-t border-accent/20">
                <p className="text-primary/70 font-poppins">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setShowLogin(false)}
                    className="text-secondary font-semibold hover:underline"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
