// src/pages/LandingPage.jsx (or wherever you want to use it)

import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the import path as needed

function LandingPageReciever() {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome to the Receiver's Portal</h1>
        {/* The rest of your landing page content goes here */}
        <Navbar />
      </div>
    </div>
  );
}

export default LandingPageReciever;