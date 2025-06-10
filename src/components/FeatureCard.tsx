
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
        <Icon size={28} className="text-blue-600 dark:text-blue-300" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
