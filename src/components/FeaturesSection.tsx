
import React from 'react';
import FeatureCard from './FeatureCard';
import { Smartphone, Wifi, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Airtime Purchase",
      description: "Instantly top up airtime for all networks at the best rates with instant delivery."
    },
    {
      icon: Wifi,
      title: "Data Bundles",
      description: "Stay connected with affordable data packages for browsing, streaming, and downloads."
    },
    {
      icon: Zap,
      title: "Electricity Tokens",
      description: "Pay electricity bills and get tokens delivered instantly to keep your power running."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience seamless digital transactions with our comprehensive suite of services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
