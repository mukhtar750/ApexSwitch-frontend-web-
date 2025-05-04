
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Wallet, Receipt, CreditCard, Users, 
  Settings, LifeBuoy, LogOut, ChevronDown, Smartphone, Zap, 
  LineChart, ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  href: string;
  admin?: boolean;
}

interface SidebarProps {
  isAdmin: boolean;
  onLogout: () => void;
}

const DashboardSidebar = ({ isAdmin, onLogout }: SidebarProps) => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = React.useState(true);

  const sidebarItems: SidebarItem[] = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      href: isAdmin ? '/admin' : '/dashboard' 
    },
    { 
      icon: Wallet, 
      label: 'Wallet', 
      href: isAdmin ? '/admin/wallets' : '/dashboard/wallet' 
    },
    { 
      icon: Receipt, 
      label: 'Transactions', 
      href: isAdmin ? '/admin/transactions' : '/dashboard/transactions' 
    },
    { 
      icon: Users, 
      label: 'User Management', 
      href: '/admin/users', 
      admin: true 
    },
    { 
      icon: LineChart, 
      label: 'Reports', 
      href: '/admin/reports', 
      admin: true 
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      href: isAdmin ? '/admin/settings' : '/dashboard/settings' 
    },
    { 
      icon: LifeBuoy, 
      label: 'Support', 
      href: isAdmin ? '/admin/support' : '/dashboard/support'
    },
  ];

  // Service submenu items
  const serviceItems = [
    { icon: Smartphone, label: 'Airtime', href: isAdmin ? '/admin/services/airtime' : '/dashboard/services/airtime' },
    { icon: CreditCard, label: 'Data', href: isAdmin ? '/admin/services/data' : '/dashboard/services/data' },
    { icon: Zap, label: 'Electricity', href: isAdmin ? '/admin/services/electricity' : '/dashboard/services/electricity' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen bg-gray-50 shadow-md w-64 flex flex-col">
      <div className="p-4 flex items-center space-x-2">
        <ShieldCheck size={24} className="text-blue-600" />
        <span className="font-bold text-xl text-blue-600">ApexSwitch</span>
        {isAdmin && <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full ml-1">Admin</span>}
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            if (item.admin && !isAdmin) return null;
            
            const Icon = item.icon;
            return (
              <Link 
                key={item.label}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.href) 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {item.label}
              </Link>
            );
          })}
          
          <Collapsible
            open={isServicesOpen}
            onOpenChange={setIsServicesOpen}
            className="mt-1"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                <span>Services</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pl-4 space-y-1 mt-1">
                {serviceItems.map((item) => {
                  const ServiceIcon = item.icon;
                  return (
                    <Link 
                      key={item.label}
                      to={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        isActive(item.href) 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <ServiceIcon className="h-5 w-5 mr-2" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Button 
          variant="outline" 
          className="w-full justify-start text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
          onClick={onLogout}
        >
          <LogOut size={18} className="mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
