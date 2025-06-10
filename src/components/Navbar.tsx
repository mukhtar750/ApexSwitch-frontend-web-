
import React, { useState } from 'react';
import { Menu, X, Home, LogIn, UserPlus, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isDark = theme === 'dark';

  return (
    <nav className="bg-white shadow-sm py-4 fixed top-0 left-0 right-0 z-50 dark:bg-gray-900 dark:shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-blue-600 font-bold text-xl md:text-2xl dark:text-blue-300">
            ApexSwitch
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 flex items-center gap-1 dark:text-gray-200 dark:hover:text-blue-400">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 flex items-center gap-1 dark:text-gray-200 dark:hover:text-blue-400">
            <LogIn size={18} />
            <span>Login</span>
          </Link>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-gray-800" asChild>
            <Link to="/register">
              <UserPlus size={18} className="mr-1" />
              Register
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="ml-2 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-700" />}
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-700" />}
          </Button>
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md py-4 px-4 absolute w-full transition-colors duration-300">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 flex items-center gap-2 py-2 dark:text-gray-200 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-blue-600 flex items-center gap-2 py-2 dark:text-gray-200 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-gray-800" asChild>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <UserPlus size={18} className="mr-1" />
                Register
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
