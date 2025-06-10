
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Menu, CreditCard, Smartphone, Zap, Wallet, ArrowUpRight, Plus, BarChart3 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const UserDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock data for dashboard
  const walletBalance = "₦24,500.00";
  const recentTransactions = [
    { id: 1, type: "Airtime", provider: "MTN", amount: "₦1,000", date: "Today, 2:30 PM", status: "Success" },
    { id: 2, type: "Data", provider: "Airtel", amount: "₦2,500", date: "Yesterday, 10:15 AM", status: "Success" },
    { id: 3, type: "Electricity", provider: "IKEDC", amount: "₦15,000", date: "May 2, 2025", status: "Success" },
    { id: 4, type: "Wallet Funding", provider: "Bank Transfer", amount: "₦50,000", date: "April 28, 2025", status: "Success" },
  ];

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/login');
  };

  const quickServices = [
    { id: 1, name: "Buy Airtime", icon: Smartphone, color: "bg-purple-100 text-purple-600", href: "/dashboard/services/airtime" },
    { id: 2, name: "Purchase Data", icon: CreditCard, color: "bg-blue-100 text-blue-600", href: "/dashboard/services/data" },
    { id: 3, name: "Pay Electricity", icon: Zap, color: "bg-amber-100 text-amber-600", href: "/dashboard/services/electricity" },
    { id: 4, name: "Fund Wallet", icon: Wallet, color: "bg-green-100 text-green-600", href: "/dashboard/wallet" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {!isSidebarCollapsed && (
        <div className="hidden md:block">
          <DashboardSidebar isAdmin={false} onLogout={handleLogout} />
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <header className="bg-white p-4 shadow md:hidden flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              <Menu />
            </Button>
            <h1 className="text-xl font-semibold ml-2">Dashboard</h1>
          </div>
          <Button 
            variant="outline" 
            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-4 md:p-6 space-y-6">
          {/* Mobile Sidebar */}
          {isSidebarCollapsed && (
            <div className="md:hidden">
              <DashboardSidebar isAdmin={false} onLogout={handleLogout} />
            </div>
          )}

          {/* Welcome Section */}
          <section className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, John!</h1>
              <p className="text-gray-600">Here's an overview of your account</p>
            </div>
            <Button className="hidden md:flex" onClick={() => navigate('/dashboard/wallet')}>
              <Plus size={16} className="mr-1" />
              Fund Wallet
            </Button>
          </section>
          
          {/* Wallet Card */}
          <section>
            <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Wallet Balance</span>
                  <Wallet size={24} />
                </CardTitle>
                <CardDescription className="text-blue-100">Available funds</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{walletBalance}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => navigate('/dashboard/wallet')}>
                  Fund Wallet
                </Button>
                <Button variant="ghost" className="text-white hover:bg-blue-600" onClick={() => navigate('/dashboard/transactions')}>
                  View History
                </Button>
              </CardFooter>
            </Card>
          </section>
          
          {/* Quick Services */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Quick Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickServices.map((service) => (
                <Card key={service.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate(service.href!)}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full ${service.color} mb-4`}>
                      <service.icon size={24} />
                    </div>
                    <p className="font-medium">{service.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Recent Transactions */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <Button variant="outline" className="text-sm hidden md:flex" onClick={() => navigate('/dashboard/transactions')}>
                View All
                <ArrowUpRight size={16} className="ml-1" />
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 text-gray-600 font-medium">Type</th>
                        <th className="text-left p-4 text-gray-600 font-medium">Provider</th>
                        <th className="text-left p-4 text-gray-600 font-medium">Amount</th>
                        <th className="text-left p-4 text-gray-600 font-medium">Date</th>
                        <th className="text-left p-4 text-gray-600 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b last:border-b-0 hover:bg-gray-50">
                          <td className="p-4">{transaction.type}</td>
                          <td className="p-4">{transaction.provider}</td>
                          <td className="p-4 font-medium">{transaction.amount}</td>
                          <td className="p-4 text-gray-600">{transaction.date}</td>
                          <td className="p-4">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center md:hidden border-t">
                <Button variant="ghost" size="sm" className="w-full" onClick={() => navigate('/dashboard/transactions')}>
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
