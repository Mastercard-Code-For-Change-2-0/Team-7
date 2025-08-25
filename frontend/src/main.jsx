// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AddRequestPage from './pages/AddRequestPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
// --- 1. IMPORT THE NEW PAGE ---
import DonationDetailsPage from './pages/DonationDetailsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "add-request", element: <AddRequestPage /> },
      { path: "profile", element: <ProfilePage /> },
      // --- 2. ADD THE DYNAMIC ROUTE ---
      // The ':id' part is a URL parameter. It will match /donation/1, /donation/2, etc.
      {
        path: "donation/:id",
        element: <DonationDetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);