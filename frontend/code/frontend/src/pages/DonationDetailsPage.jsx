// src/pages/DonationDetailsPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import donationItems from '../data/donations.json';

function DonationDetailsPage() {
  const { id } = useParams();
  const item = donationItems.find(item => item._id === id);

  const [showPopup, setShowPopup] = useState(false);

  const handleRequestClick = () => {
    // This console.log will help us debug.
    // Check your browser's developer console after clicking the button.
    console.log('Request button clicked!');
    setShowPopup(true);
  };

  if (!item) {
    return (
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold">Donation Not Found</h1>
        <Link to="/add-request" className="text-blue-500 mt-4 inline-block">← Back to Donations</Link>
      </div>
    );
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
            <p><strong>Available Quantity:</strong> {item.Requested_Qty}</p>
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

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="text-gray-700 mb-6">Order requested. An email has been sent to your registered email address.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonationDetailsPage;
