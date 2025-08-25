export default function Features({ features }) {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Our Platform Works</h2>
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
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{feature.role}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



