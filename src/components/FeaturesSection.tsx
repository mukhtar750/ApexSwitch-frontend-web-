
import React from 'react';
import FeatureCard from './FeatureCard';
import { Smartphone, Wifi, Zap, CreditCard, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Smartphone,
    title: 'Airtime Top-Up',
    description: 'Instantly recharge airtime for all networks with blazing speed and unbeatable rates.'
  },
  {
    icon: Wifi,
    title: 'Data Bundles',
    description: 'Affordable, fast data bundles for browsing, streaming, and downloads.'
  },
  {
    icon: Zap,
    title: 'Electricity Bills',
    description: 'Pay electricity bills and receive tokens instantly to keep your power running.'
  },
  {
    icon: CreditCard,
    title: 'TV Subscriptions',
    description: 'Renew your cable TV subscriptions (DStv, GOtv, Startimes) in seconds.'
  },
  {
    icon: Globe,
    title: 'Internet Services',
    description: 'Top up your broadband and internet services with ease.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Enjoy safe, encrypted transactions for all your digital needs.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-fuchsia-50 to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 transition-colors duration-500" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-600 to-indigo-900 dark:from-blue-200 dark:via-fuchsia-400 dark:to-indigo-300 mb-4 animate-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Hot Services
          </motion.h2>
          <motion.p 
            className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Experience seamless digital transactions with our comprehensive suite of VTU services. Tap a card to learn more!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06, rotate: 2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
