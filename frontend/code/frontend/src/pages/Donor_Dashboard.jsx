import React, { useState } from 'react';

const Donor_Dashboard = () => {
   const [formData, setFormData] = useState({
      name: '',
      description: '',
      Image: '',
      location: '',
      quantity: ''  
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      alert('Form submitted!');
    };
   const list = [
    { name: "Alice", to: "NGO name", item_name:"Sweater", Quantity:"10", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Bob", to: "NGO name", item_name:"Notebooks", Quantity:"20",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Charlie", to: "NGO name", item_name:"Textbooks", Quantity:"30",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Diana", to: "NGO name", item_name:"School Bag", Quantity:"20",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Eve", to: "NGO name", item_name:"Winter Wears", Quantity:"50",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Frank", to: "NGO name", item_name:"Stationary", Quantity:"45", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
  ];
  return (
    <div>
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        'bg-white/95 backdrop-blur-lg shadow-sm bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                {/* /* /*<Heart className="w-6 h-6 text-white" />*/  }
              {/* </div> */ }
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DonateConnect/Donor
              </span>
              {/* <span className="text-2xl mt-2 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Donor
              </span> */}
            </div>

         
            </div>
            </div>
            </nav>

            



      <div className="d-flex align-items-center justify-content-center my-4">
   <div className="me-3 mt-20" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
    <h2 className="text-center mt-20 mb-0">Already Donated</h2>
   <div className="ms-3 mt-20" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
 </div>
      <section className="p-5 bg-light">
      <div className="container">
        <div className="cursor-pointer row g-4">
          {list.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card bg-purple-500 text-center h-100">
                <img 
                  src={member.img} 
                  className="card-img-top mx-auto mt-3 rounded-circle" 
                  alt={member.name} 
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <h5 className="card-title">Name : {member.name}</h5>
                  <p className="card-text">Item Name : {member.item_name}</p>
                  <p className="card-text">Quantity : {member.Quantity}</p>
                  <p className="card-text">Donated to : {member.to}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <div>
        <div className="d-flex align-items-center justify-content-center my-4">
   <div className="me-3" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
    <h2 className="text-center mb-0">Pending Requests</h2>
   <div className="ms-3" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
 </div>
        <div>
      <section className="p-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {list.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="text-white  to-purple-600 card text-center h-100">
                <img 
                  src={member.img} 
                  className="card-img-top mx-auto mt-3 w-full" 
                  alt={member.name} 
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 card-body ">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">Item Name : {member.item_name}</p>
                  <p className="card-text">Quantity : {member.Quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>

    <div>
      <section className="my-5 d-flex justify-content-center">
        <form 
          onSubmit={handleSubmit} 
          className="p-4 border rounded" 
          style={{ maxWidth: '500px', width: '100%' }}
        >
          <h3 className="mb-3 text-center">Donation Form</h3>

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

          <div className="mb-3">
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="form-control"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary w-100 bg-gradient-to-r from-indigo-600 to-purple-600">
            Submit
          </button>
        </form>
      </section>
    </div>

    
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
     
    </div>
     )
}

export default Donor_Dashboard