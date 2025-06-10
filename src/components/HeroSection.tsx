import { Button } from '@/components/ui/button';
import { LogIn, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-fuchsia-600 to-indigo-900 text-white py-24 md:py-40 overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Animated Gradient Blobs */}
      <motion.div 
        className="absolute top-[-6rem] left-[-6rem] w-[28rem] h-[28rem] bg-pink-400/40 rounded-full blur-3xl z-0 animate-blob"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-blue-400/40 rounded-full blur-3xl z-0 animate-blob"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[18rem] h-[18rem] bg-indigo-500/30 rounded-full blur-2xl z-0 animate-blob"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Apex<span className="text-white drop-shadow-lg">Switch</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl text-blue-100 mb-10 max-w-3xl font-medium drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          The fastest, most beautiful way to recharge — airtime, data, and utilities at your fingertips. Experience blazing speed, vibrant design, and seamless transactions.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 text-white font-bold shadow-xl hover:scale-105 transition-transform duration-200">
            <UserPlus size={22} className="mr-2" />
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-inner font-bold hover:scale-105 transition-transform duration-200">
            <LogIn size={22} className="mr-2" />
            Login
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
