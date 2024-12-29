import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black">
        <Home />
      </div>
    </BrowserRouter>
  );
}