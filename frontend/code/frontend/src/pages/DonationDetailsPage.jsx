// src/pages/DonationDetailsPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import donationItems from '../data/donations.json';

function DonationDetailsPage() {
  const { id } = useParams();
  const item = donationItems.find(item => item._id === id);
  const [showPopup, setShowPopup] = useState(false);

  const handleRequestClick = () => {
    setShowPopup(true);
  };

  if (!item) {
    return <div>Donation Not Found</div>;
  }

  return (
    <div className="container mx-auto p-8 relative">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <img src={item.imgUrl} alt={item.description} className="w-full h-64 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{item.description}</h1>
          <div className="space-y-3 text-lg text-gray-700">
            <p><strong>Donor:</strong> {item.name}</p>
            <p><strong>Location:</strong> 📍 {item.location}</p>
            <p><strong>Date Posted:</strong> 🗓️ {new Date(item.date).toLocaleDateString()}</p>
            {/* --- QUANTITY LINE ADDED HERE --- */}
            <p><strong>Requested Quantity:</strong> {item.Requested_Qty}</p>
          </div>
          <div className="mt-8 text-center">
            <button 
              onClick={handleRequestClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Request This Item
            </button>
          </div>
          <div className="mt-8 text-center">
            <Link to="/add-request" className="text-blue-500 hover:underline">← Back to all donations</Link>
          </div>
        </div>
      </div>
      {/* Pop-up Modal... */}
    </div>
  );
}

export default DonationDetailsPage;