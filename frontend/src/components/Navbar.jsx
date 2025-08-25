import { Heart, Menu, X } from 'lucide-react';

export default function Navbar({ scrolled, isMenuOpen, setIsMenuOpen, setShowLogin, setShowSignup }) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              DonateConnect
            </span>
          </div>

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

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
            >
              Login
            </button>
            <button 
              onClick={() => setShowSignup(true)}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
                <button 
                  onClick={() => setShowLogin(true)}
                  className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
                >
                  Login
                </button>
                <button 
                  onClick={() => setShowSignup(true)}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

