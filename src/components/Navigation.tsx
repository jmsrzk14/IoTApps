import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-white font-semibold">New Year Wishes</span>
          </Link>
          <div className="flex space-x-6">
            <NavLink to="/" current={location.pathname}>Home</NavLink>
            <NavLink to="/create" current={location.pathname}>Create Card</NavLink>
            <NavLink to="/gallery" current={location.pathname}>Gallery</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, current }: { to: string; children: React.ReactNode; current: string }) {
  const isActive = current === to;
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${
        isActive ? 'text-purple-400' : 'text-white/80 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}