
import React from 'react';
import { Link } from 'react-router-dom';

function RecieverPortal() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">Reciever Portal</Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 font-semibold hover:text-blue-500">Home</Link>
            <Link to="/add-request" className="text-gray-600 font-semibold hover:text-blue-500">Add Request</Link>
            <Link to="/profile" className="text-gray-600 font-semibold hover:text-blue-500">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default RecieverPortal;