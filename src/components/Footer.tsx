
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">ApexSwitch</h3>
            <p className="text-gray-400 text-sm mt-1">Top-up made easy</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">Terms</a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">Support</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center md:text-left text-gray-400 text-sm">
          © {year} ApexSwitch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
