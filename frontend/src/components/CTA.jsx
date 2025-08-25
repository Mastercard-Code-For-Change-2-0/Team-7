import { Heart } from 'lucide-react';

export default function CTA({ setShowSignup }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Make a Difference?</h2>
        <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
          Join thousands of verified users creating positive impact through our secure platform
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setShowSignup(true)}
            className="group px-8 py-4 bg-white text-indigo-600 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center"
          >
            Join as Donor
            <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={() => setShowSignup(true)}
            className="px-8 py-4 bg-transparent text-white rounded-2xl border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg"
          >
            Join as Receiver
          </button>
        </div>
      </div>
    </section>
  );
}



