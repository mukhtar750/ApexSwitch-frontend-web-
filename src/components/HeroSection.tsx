
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ApexSwitch
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Top-up made easy — Airtime, Data, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <UserPlus size={20} className="mr-2" />
              Register
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <LogIn size={20} className="mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
