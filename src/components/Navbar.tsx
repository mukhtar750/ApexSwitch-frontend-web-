
import React, { useState } from 'react';
import { Menu, X, Home, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-blue-600 font-bold text-xl md:text-2xl">
            ApexSwitch
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 flex items-center gap-1">
            <Home size={18} />
            <span>Home</span>
          </a>
          <a href="/login" className="text-gray-700 hover:text-blue-600 flex items-center gap-1">
            <LogIn size={18} />
            <span>Login</span>
          </a>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <UserPlus size={18} className="mr-1" />
            Register
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-gray-700 hover:text-blue-600 flex items-center gap-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </a>
            <a 
              href="/login" 
              className="text-gray-700 hover:text-blue-600 flex items-center gap-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={18} />
              <span>Login</span>
            </a>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 w-full justify-center hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus size={18} className="mr-1" />
              Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
