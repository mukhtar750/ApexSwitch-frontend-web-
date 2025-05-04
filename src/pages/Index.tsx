
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <FeaturesSection />
      </div>
      <div className="mt-auto"> {/* Push footer to bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
