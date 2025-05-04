
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
        <Icon size={28} className="text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
