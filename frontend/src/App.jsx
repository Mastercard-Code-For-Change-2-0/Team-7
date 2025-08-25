import { useState, useEffect } from 'react';
import { Heart, Shield, Users, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';

export default function DonateConnectLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Verified Donations",
      description: "Donors upload items they wish to donate. Our admin team carefully verifies each donation to ensure quality and authenticity before making them visible to receivers.",
      role: "Donor Flow"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Admin Verification",
      description: "Our dedicated admin team reviews all donations and requests to maintain platform integrity and ensure genuine connections between donors and receivers.",
      role: "Admin Control"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Request System",
      description: "Receivers can submit specific requests for items they need. After admin verification, these requests are shown to potential donors for fulfillment.",
      role: "Receiver Flow"
    }
  ];

  const steps = [
    { number: "01", title: "Donor Uploads", desc: "Items are uploaded by generous donors" },
    { number: "02", title: "Admin Reviews", desc: "Our team verifies authenticity and quality" },
    { number: "03", title: "Receiver Connects", desc: "Verified items become available to receivers" },
    { number: "04", title: "Impact Created", desc: "Meaningful connections and help delivered" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DonateConnect
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                About
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
                Login
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-4 space-y-4">
                <a href="#features" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                  How It Works
                </a>
                <a href="#about" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                  About
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
                    Login
                  </button>
                  <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Connecting Hearts Through Verified Giving
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Bridge the Gap Between
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                Giving & Receiving
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              A secure platform where verified donors connect with verified receivers through 
              admin-moderated donations and requests, ensuring genuine impact in every transaction.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center">
                Start Giving Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white text-gray-700 rounded-2xl hover:bg-gray-50 transition-all duration-200 font-semibold text-lg shadow-lg border border-gray-200 hover:border-gray-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "10K+", label: "Verified Donations" },
                { number: "98%", label: "Success Rate" },
                { number: "5K+", label: "Happy Recipients" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our Platform Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinct roles working together to create meaningful connections and verified impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {feature.role}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple. Secure. Verified.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures every donation and request is verified for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full border border-gray-100">
                  <div className="text-6xl font-bold text-gray-200 mb-4">
                    {step.number}
                  </div>
                  <div className="absolute top-6 left-8 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.desc}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-indigo-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
            Join thousands of verified users creating positive impact through our secure platform
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-8 py-4 bg-white text-indigo-600 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center">
              Join as Donor
              <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-transparent text-white rounded-2xl border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
              Join as Receiver
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">DonateConnect</span>
              </div>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Bridging hearts through verified giving. Creating meaningful connections between donors and receivers with complete transparency and security.
              </p>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety & Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-bold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 DonateConnect. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Verified Platform
                </span>
                <span className="text-gray-400 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-blue-400" />
                  Secure & Trusted
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}