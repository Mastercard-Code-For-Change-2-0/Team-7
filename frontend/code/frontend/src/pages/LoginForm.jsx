import React, { useState } from 'react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    Image: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  

  return (
     <>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        'bg-white/95 backdrop-blur-lg shadow-sm bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                {/* /* /*<Heart className="w-6 h-6 text-white" />*/  }
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
            </div>
            </div>
            </nav>

       <div className="d-flex align-items-center justify-content-center my-4">
   <div className="me-3 mt-40" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
    <h2 className="mt-40 text-center mb-0">Donate</h2>
   <div className="ms-3 mt-40" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
 </div>

<div className="d-flex justify-content-center my-5">
  <div className="card mb-3" style={{ maxWidth: "80%", height:"150px" }}>
    <div className="row g-0 align-items-center">
      <div className="col">
        <div className="card-body text-center">
          <p className="card-text">
            Dear Donar, Thank you for your recent gift . Your support has moved us one step closer to our goal of spreading happiness. We're so grateful to have you as part of our mission and will keep you updated on the progress you are making possible</p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Form Section */}
      <section className="my-5 d-flex justify-content-center">
        <form 
          onSubmit={handleSubmit} 
          className="p-4 border rounded" 
          style={{ maxWidth: '500px', width: '100%' }}
        >
          <h3 className="mb-3 text-center">Join Us</h3>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="description"
              name="description"
              placeholder="Description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="file"
              name="Image"
              placeholder="Upload image"
              className="form-control"
              value={formData.Image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 bg-gradient-to-r from-indigo-600 to-purple-600">Submit</button>
        </form>
      </section>
       {/* <footer className="bg-dark text-white mt-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <h5>Name</h5>
              <p>tagline</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Address</p>
              <p>Phone</p>
              <p>Email</p>
              
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Name All rights reserved.</p>
          </div>
        </div>
      </footer> */}
        <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
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
                  Verified Platform
                </span>
                <span className="text-gray-400 flex items-center">
                  Secure & Trusted
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Join;
