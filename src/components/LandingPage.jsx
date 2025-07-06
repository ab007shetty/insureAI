import React, { useState, useEffect } from 'react';
import { Shield, Clock, Zap, Lock, Eye, ArrowRight, TrendingUp, Star, CheckCircle } from 'lucide-react';

// Import the 3D House Model component
import House3DModel from './House3DModel';

export default function LandingPage({ onGetStarted }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <HeroSection
        onGetStarted={onGetStarted}
        isVisible={isVisible}
      />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection onGetStarted={onGetStarted} />
    </div>
  );
}

function HeroSection({ onGetStarted, isVisible }) {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>AI-Powered Insurance Revolution</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Protect Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 block">
                  Dream Home
                </span>
                with Smart Insurance
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Get instant quotes, 3D property modeling, and comprehensive coverage tailored to your home. 
                Smart insurance for the modern homeowner.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Get Insured Now</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105">
                View Sample Quote
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-gray-500">
              <TrustIndicator icon={Clock} text="5 min application" />
              <TrustIndicator icon={Shield} text="Instant quotes" />
              <TrustIndicator icon={Lock} text="100% secure" />
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* 3D House Model - Responsive */}
              <div className="w-full aspect-[4/3] lg:aspect-[5/4]">
                <House3DModel
                  width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 500) : 500}
                  height={typeof window !== 'undefined' ? Math.min((window.innerWidth - 32) * 0.8, 400) : 400}
                  autoRotate={false}
                  className="shadow-2xl rounded-3xl overflow-hidden w-full h-full"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  }}
                />
              </div>
              
              {/* Floating info cards - Hidden on small screens */}
              <div className="hidden sm:block absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce animation-delay-500">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">AI Protected</span>
                </div>
              </div>
              
              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce animation-delay-1000">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">3D Modeled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustIndicator({ icon: Icon, text }) {
  return (
    <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "3D Property Modeling",
      description: "Upload photos and our AI creates a detailed 3D model of your home for accurate coverage assessment.",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Real-Time Market Analysis",
      description: "AI analyzes current market trends and local data to provide the most accurate quotes.",
      color: "from-green-50 to-green-100"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Instant Processing",
      description: "Get quotes in minutes. Our streamlined process makes insurance simple and fast.",
      color: "from-purple-50 to-purple-100"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose InsureAI?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology meets personalized protection. Experience the future of home insurance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
        
        {/* Interactive 3D Model showcase in features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">See Your Home in 3D</h3>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-[2/1] sm:aspect-[3/1]">
              <House3DModel
                width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 600) : 600}
                height={typeof window !== 'undefined' ? Math.min((window.innerWidth - 32) / 2, 300) : 300}
                autoRotate={true}
                className="rounded-xl shadow-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, color, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`text-center p-8 rounded-2xl bg-gradient-to-br ${color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className={`flex justify-center mb-6 transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StatsSection() {
  const stats = [
    { number: "50K+", label: "Homes Protected", icon: Shield },
    { number: "$2B+", label: "Claims Paid", icon: TrendingUp },
    { number: "4.9★", label: "Customer Rating", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, icon: Icon, index }) {
  return (
    <div 
      className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-center mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "InsureAI made getting home insurance incredibly easy. The 3D modeling feature gave me confidence in my coverage.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Property Owner",
      content: "Best insurance experience I've ever had. Quick, transparent, and great customer service.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      content: "The AI-powered quotes were spot-on and saved me hundreds compared to traditional insurers.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real stories from real homeowners</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, content, rating, index }) {
  return (
    <div 
      className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">"{content}"</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}

function CTASection({ onGetStarted }) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Protect Your Home?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of homeowners who trust InsureAI with their most valuable asset. 
          Get started in minutes with our AI-powered platform.
        </p>
        <button
          onClick={onGetStarted}
          className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
        >
          <span>Get Your Quote Now</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}