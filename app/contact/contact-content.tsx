"use client";
import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";
import { FadeInSection } from "@/components/fade-in-section";
import { ShimmerBackground } from "@/components/shimmer-background";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, AlertCircle, Star, Globe, Award, Users, ArrowRight, Heart, Shield, BookOpen, GraduationCap, Sparkles, Zap, Target, Lightbulb, TrendingUp } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { user } = useUser();
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setBgLoaded(true);
    img.src = '/islamic-pattern-bg.jpg';
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    if (!userPhone.trim()) {
      newErrors.userPhone = "Phone number is required";
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(userPhone)) {
      newErrors.userPhone = "Please enter a valid phone number";
    }
    
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
    setSubmitted(true);
      setIsLoading(false);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setName("");
        setUserPhone("");
        setEmail("");
        setMessage("");
        setSubmitted(false);
      }, 5000);
    }, 2000);
  }, [name, userPhone, email, message]);

  const handleWhatsAppContact = () => {
    const phone = '201023594533'; // Egypt number without leading + or zeros for wa.me
    const whatsappMessage = `New contact request from Al-Azhar School website:\n\n` +
      `Name: ${name || '-'}\n` +
      `Phone: ${userPhone || '-'}\n` +
      `Email: ${email || '-'}\n` +
      `Message: ${message || '-'}\n`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = "Inquiry about Islamic Education Programs";
    const body = `Dear Al-Azhar School Team,

I am interested in learning more about your Islamic education programs.

Best regards,
[Your Name]`;
    
    const mailtoUrl = `mailto:al.azhar.school.london@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundImage: 'url(/BACK.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-1/2 -right-8 w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce delay-500"></div>
              
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-amber-200 relative overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-3xl opacity-20 blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg animate-pulse">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ 
                      backgroundColor: 'rgba(139, 69, 19, 0.1)', 
                      padding: '20px 40px', 
                      borderRadius: '20px',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 4px 4px 8px rgba(0, 0, 0, 0.6)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                      WebkitTextStroke: '1px rgba(139, 69, 19, 0.3)'
                    }}>
                      Get In Touch
                    </h1>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                    Ready to begin your Islamic education journey? We're here to help you every step of the way with personalized guidance and support.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center text-gray-700 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Shield className="w-6 h-6 mr-3 text-amber-600" />
                      <span className="font-semibold text-lg">Certified Scholars</span>
                    </div>
                    <div className="flex items-center text-gray-700 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <BookOpen className="w-6 h-6 mr-3 text-amber-600" />
                      <span className="font-semibold text-lg">Flexible Learning</span>
                    </div>
                    <div className="flex items-center text-gray-700 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Globe className="w-6 h-6 mr-3 text-amber-600" />
                      <span className="font-semibold text-lg">Worldwide Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Contact Information */}
            <FadeInSection>
              <Card className="bg-white rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1 hover:scale-[1.01] border border-amber-200 scroll-animate h-full flex flex-col relative">
                {/* Removed amber gradient overlay to keep pure white */}
                <CardContent className="p-3 flex flex-col h-full relative z-10">
                  <div className="text-center mb-6">
                    <div className="relative mx-auto mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2" style={{ 
                      backgroundColor: 'rgba(139, 69, 19, 0.1)', 
                      padding: '8px 16px', 
                      borderRadius: '10px',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 3px 3px 6px rgba(0, 0, 0, 0.6)',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
                      WebkitTextStroke: '1px rgba(139, 69, 19, 0.3)'
                    }}>
                      Contact Information
                    </h2>
                    <p className="text-gray-600 text-base">
                      Get in touch with our dedicated team
                    </p>
                  </div>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-9 h-9 bg-gradient-to-r from-amber-500 to-amber-600 rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-2">Email Address</h3>
                        <p className="text-gray-600 mb-2 text-sm leading-relaxed">al.azhar.school.london@gmail.com</p>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">info.alazhar.school@gmail.com</p>
                        <p className="text-amber-600 font-medium text-sm leading-relaxed">Response within 2 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-9 h-9 bg-gradient-to-r from-amber-500 to-amber-600 rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-2">Phone Number</h3>
                        <a
                          href="https://wa.me/201023594533"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mb-2 text-sm leading-relaxed bg-amber-600 hover:bg-amber-700 text-white px-2.5 py-1 rounded-md transition-colors"
                        >
                          002- 01023594533
                        </a>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">002-38728453</p>
                        <p className="text-amber-600 font-medium text-sm leading-relaxed">Available 24/7</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-9 h-9 bg-gradient-to-r from-amber-500 to-amber-600 rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-2">Location</h3>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">Cairo, Egypt</p>
                        <p className="text-amber-600 font-medium text-sm leading-relaxed">Global online presence</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Why Choose Us */}
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h4 className="font-bold text-gray-900 mb-5 flex items-center text-lg">
                      <Star className="w-5 h-5 mr-2 text-amber-500" />
                      Why Choose Al-Azhar School?
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start p-3 bg-amber-50 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 border border-amber-200">
                        <Award className="w-5 h-5 mr-3 text-amber-600 mt-1" />
                        <div>
                          <span className="font-bold text-gray-900 block mb-1 text-sm leading-relaxed">Certified Scholars</span>
                          <p className="text-gray-600 text-xs leading-relaxed">Al-Azhar certified teachers</p>
                        </div>
                      </div>
                      <div className="flex items-start p-3 bg-amber-50 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 border border-amber-200">
                        <Users className="w-5 h-5 mr-3 text-amber-600 mt-1" />
                        <div>
                          <span className="font-bold text-gray-900 block mb-1 text-sm leading-relaxed">Flexible Classes</span>
                          <p className="text-gray-600 text-xs leading-relaxed">One-on-one & group sessions</p>
                        </div>
                      </div>
                      <div className="flex items-start p-3 bg-amber-50 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 border border-amber-200">
                        <Globe className="w-5 h-5 mr-3 text-amber-600 mt-1" />
                        <div>
                          <span className="font-bold text-gray-900 block mb-1 text-sm leading-relaxed">Modern Technology</span>
                          <p className="text-gray-600 text-xs leading-relaxed">Advanced learning platforms</p>
                        </div>
                      </div>
                      <div className="flex items-start p-3 bg-amber-50 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 border border-amber-200">
                        <Target className="w-5 h-5 mr-3 text-amber-600 mt-1" />
                        <div>
                          <span className="font-bold text-gray-900 block mb-1 text-sm leading-relaxed">Competitive Pricing</span>
                          <p className="text-gray-600 text-xs leading-relaxed">Affordable quality education</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection>
              <Card className="bg-white rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1 hover:scale-[1.01] border border-amber-200 scroll-animate h-full flex flex-col relative">
                {/* Removed amber gradient overlay to keep pure white */}
                <CardContent className="p-3 flex flex-col h-full relative z-10">
                  <div className="text-center mb-6">
                    <div className="relative mx-auto mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2" style={{ 
                      backgroundColor: 'rgba(139, 69, 19, 0.1)', 
                      padding: '8px 16px', 
                      borderRadius: '10px',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 3px 3px 6px rgba(0, 0, 0, 0.6)',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
                      WebkitTextStroke: '1px rgba(139, 69, 19, 0.3)'
                    }}>
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 text-sm">
                      We'd love to hear from you
                    </p>
                  </div>
                  
                  {submitted ? (
                    <div className="text-center py-6 flex-grow flex flex-col justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-6 animate-bounce shadow-lg">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-600 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6 text-base">
                        Thank you for contacting us! We'll get back to you within 24 hours.
                      </p>
                      <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border font-medium">
                        <strong>Reference ID:</strong> #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                      <div className="flex-grow space-y-6">
                        <div>
                          <Label htmlFor="name" className="text-gray-900 font-bold text-base mb-2 block">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className={`border-2 transition-all duration-300 py-3 px-4 rounded-lg text-base ${
                              errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-amber-600 focus:ring-amber-200'
                            }`}
                          />
                          {errors.name && (
                            <div className="flex items-center mt-2 text-red-600 text-sm font-medium">
                              <AlertCircle className="w-4 h-4 mr-2" />
                              {errors.name}
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="email" className="text-gray-900 font-bold text-base mb-2 block">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className={`border-2 transition-all duration-300 py-3 px-4 rounded-lg text-base ${
                              errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-amber-600 focus:ring-amber-200'
                            }`}
                          />
                          {errors.email && (
                            <div className="flex items-center mt-2 text-red-600 text-sm font-medium">
                              <AlertCircle className="w-4 h-4 mr-2" />
                              {errors.email}
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="userPhone" className="text-gray-900 font-bold text-base mb-2 block">
                            Phone Number *
                          </Label>
                          <Input
                            id="userPhone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={userPhone}
                            onChange={e => setUserPhone(e.target.value)}
                            required
                            className={`border-2 transition-all duration-300 py-3 px-4 rounded-lg text-base ${
                              errors.userPhone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-amber-600 focus:ring-amber-200'
                            }`}
                          />
                          {errors.userPhone && (
                            <div className="flex items-center mt-2 text-red-600 text-sm font-medium">
                              <AlertCircle className="w-4 h-4 mr-2" />
                              {errors.userPhone}
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="message" className="text-gray-900 font-bold text-base mb-2 block">
                            Message *
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your inquiry..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                            className={`border-2 transition-all duration-300 min-h-[100px] py-3 px-4 rounded-lg text-base ${
                              errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-amber-600 focus:ring-amber-200'
                            }`}
                          />
                          <div className="text-sm text-gray-500 mt-2 text-right font-medium">
                            {message.length}/500 characters
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Button 
                          type="button"
                          onClick={handleWhatsAppContact}
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-base"
                        >
                          {isLoading ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Sending Message...
                            </div>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                        
                        {/* Admin Panel Button */}
                        {user?.userType === "admin" && (
                          <div className="text-center mt-4">
                            <Link 
                              href="/admin" 
                              className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                            >
                              Admin Dashboard
                            </Link>
                          </div>
                        )}
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-24 px-4 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{ 
              backgroundColor: 'rgba(139, 69, 19, 0.05)', 
              padding: '20px 40px', 
              borderRadius: '20px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.7)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(139, 69, 19, 0.2)'
            }}>
              Quick Contact Options
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose your preferred way to get in touch with us for immediate assistance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <FadeInSection>
              <Card className="bg-white rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 border border-amber-200 scroll-animate">
                <CardContent className="p-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    WhatsApp Chat
                  </h3>
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                    Connect with us instantly via WhatsApp for quick responses and immediate support
                  </p>
                  <AnimatedButton
                    onClick={handleWhatsAppContact}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg w-full text-xl"
                  >
                    Start Chat Now
                  </AnimatedButton>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection>
              <Card className="bg-white rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 border border-amber-200 scroll-animate">
                <CardContent className="p-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                    Send us a detailed email inquiry for comprehensive information and detailed responses
                  </p>
                  <AnimatedButton
                    onClick={handleEmailContact}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg w-full text-xl"
                  >
                    Send Email
                  </AnimatedButton>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection>
              <Card className="bg-white rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 border border-amber-200 scroll-animate">
                <CardContent className="p-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Response Time
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    We respond within 24 hours to all inquiries with personalized attention
                  </p>
                  <div className="text-amber-600 text-xl font-semibold bg-gradient-to-r from-amber-50 to-amber-100 px-8 py-4 rounded-xl inline-block border border-amber-200">
                    ✓ Available 24/7
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 text-white text-center relative overflow-hidden" style={{
        backgroundImage: 'url(/BACK.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/40 via-orange-600/40 to-amber-600/40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInSection>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-white/10">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-10" style={{ 
                backgroundColor: 'rgba(139, 69, 19, 0.05)', 
                padding: '20px 40px', 
                borderRadius: '20px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.7)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                WebkitTextStroke: '1px rgba(139, 69, 19, 0.2)'
              }}>
                Ready to Begin Your Islamic Education Journey?
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-95">
                Join thousands of students worldwide and start your Quran learning journey with certified Al-Azhar scholars today.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <AnimatedButton
                  asChild
                  size="lg"
                  animation="pulse"
                  className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-xl"
                >
                  <Link href="/services" className="flex items-center">
                    Explore Our Programs
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </AnimatedButton>
                <AnimatedButton
                  asChild
                  size="lg"
                  animation="pulse"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-xl"
                >
                  <Link href="/about" className="flex items-center">
                    Learn More About Us
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </AnimatedButton>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .islamic-background {
          background-image: url('/islamic-pattern-bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
