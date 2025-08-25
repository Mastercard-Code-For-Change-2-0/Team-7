
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
    //Navigate to the details page with the item's ID
    navigate(`/donation/${item._id}`);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Available Donations</h1>
        <div className="w-1/3">
          <div className="flex items-center bg-white rounded-full shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-5 rounded-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="bg-blue-500 text-white p-2 rounded-full m-1">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          //Use the NEW keys for rendering
          <div
            key={item._id}
            onClick={() => handleCardClick(item)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img src={item.imgUrl} alt={item.description} className="w-full h-48 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.description}</h3>
                <p className="text-gray-600 mb-4">Donated by: <span className="font-semibold">{item.name}</span></p>
              </div>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>📍 {item.location}</span>
                {/* Formatting the date string to be more readable */}
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