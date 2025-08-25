// src/pages/ProfilePage.jsx
import React from 'react';
// Import the new dummy data
import { userProfile, pendingRequests } from '../data/dummyProfileData';

function ProfilePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* --- Profile Header --- */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:flex md:items-center md:space-x-8 mb-10">
        <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
          <img
            className="h-32 w-32 rounded-full object-cover"
            src={userProfile.avatarUrl}
            alt="User Avatar"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{userProfile.name}</h1>
          <p className="text-md text-blue-500 font-semibold">{userProfile.handle}</p>
          <p className="text-gray-600 mt-2">{userProfile.bio}</p>
          
          {/* Stats Section */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <div>
              <span className="font-bold text-lg">{userProfile.stats.requests}</span>
              <span className="text-gray-500"> Requests</span>
            </div>
            <div>
              <span className="font-bold text-lg">{userProfile.stats.received}</span>
              <span className="text-gray-500"> Received</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Pending Orders Section --- */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Pending Requests to Receive</h2>
        <div className="space-y-6">
          {pendingRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-lg shadow-md overflow-hidden md:flex"
            >
              <img
                src={request.imageUrl}
                alt={request.productDetails}
                className="w-full md:w-1/3 h-48 md:h-auto object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{request.productDetails}</h3>
                  <p className="text-gray-600">From: <span className="font-semibold">{request.donorName}</span> ({request.city})</p>
                  <p className="text-sm text-gray-500 mt-1">Requested on: {request.dateRequested}</p>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-200 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {request.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;