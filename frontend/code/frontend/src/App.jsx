import React from 'react';
import { Outlet } from 'react-router-dom';
import RecieverPortal from './components/RecieverPortal';

function App() {
  return (
    <div>
      <RecieverPortal />
      <main>
        
        <Outlet />
      </main>
    </div>
  );
}

export default App;