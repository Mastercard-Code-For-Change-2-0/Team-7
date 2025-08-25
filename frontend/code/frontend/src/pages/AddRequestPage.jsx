// src/pages/AddRequestPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import donationItems from '../data/donations.json';

function AddRequestPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredItems = donationItems.filter(item =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (item) => {
    navigate(`/donation/${item._id}`);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Available Donations</h1>
        {/* Search Bar... */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            onClick={() => handleCardClick(item)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
          >
            {/* --- QUANTITY BADGE ADDED HERE --- */}
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              QTY: {item.Requested_Qty}
            </div>
            
            <img src={item.imgUrl} alt={item.description} className="w-full h-48 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.description}</h3>
                <p className="text-gray-600 mb-4">Donated by: <span className="font-semibold">{item.name}</span></p>
              </div>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>📍 {item.location}</span>
                <span className="font-medium">🗓️ {new Date(item.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddRequestPage;