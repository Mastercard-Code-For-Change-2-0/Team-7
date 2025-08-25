// src/data/dummyProfileData.js

export const userProfile = {
    name: 'Shantanu Gajare',
    handle: '@shantanu_g',
    bio: 'Receiver | Passionate about community support and sustainable living. Based in Pune.',
    avatarUrl: 'https://placehold.co/150x150/E6E6FA/333?text=SG',
    stats: {
      requests: 3,
      received: 12,
    },
  };
  
  export const pendingRequests = [
    {
      id: 2, // Corresponds to the ID in dummyDonations.js
      productDetails: 'Warm blankets and winter wear for adults',
      donorName: 'Rohan Verma',
      city: 'Pune',
      dateRequested: '2025-08-24',
      imageUrl: 'https://placehold.co/600x400/ADD8E6/333?text=Blankets',
      status: 'Waiting for Admin to React',
      requestedQty: 5,
    },
    {
      id: 5,
      productDetails: 'First-aid kits and basic medical supplies',
      donorName: 'Sunita Patil',
      city: 'Bangalore',
      dateRequested: '2025-08-22',
      imageUrl: 'https://placehold.co/600x400/90EE90/333?text=Medical+Supplies',
      status: 'Waiting for Admin to React',
      requestedQty: 3, 
    },
    {
      id: 7,
      productDetails: 'Stationery items: notebooks, pens, pencils',
      donorName: 'Neha Gupta',
      city: 'Chennai',
      dateRequested: '2025-08-20',
      imageUrl: 'https://placehold.co/600x400/FFFFE0/333?text=Stationery',
      status: 'Waiting for Admin to React',
      requestedQty: 2, 
    },
  ];