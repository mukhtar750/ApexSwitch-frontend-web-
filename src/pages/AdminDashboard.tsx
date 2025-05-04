
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Menu, Users, CreditCard, Zap, Wallet, ArrowUpRight, Plus, BarChart3, ActivitySquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Mock data for admin statistics
const adminStats = [
  { id: 1, name: "Total Users", value: "1,234", icon: Users, color: "bg-blue-100 text-blue-600", growth: "+12% ↑" },
  { id: 2, name: "Transactions", value: "8,543", icon: ActivitySquare, color: "bg-purple-100 text-purple-600", growth: "+5% ↑" },
  { id: 3, name: "Revenue", value: "₦4.3M", icon: CreditCard, color: "bg-green-100 text-green-600", growth: "+8% ↑" },
  { id: 4, name: "Active Services", value: "7", icon: Zap, color: "bg-amber-100 text-amber-600", growth: "+2 ↑" },
];

// Mock data for recent transactions
const recentTransactions = [
  { id: 1, user: "John Doe", type: "Airtime", provider: "MTN", amount: "₦1,000", date: "Today, 2:30 PM", status: "Success" },
  { id: 2, user: "Mary Smith", type: "Data", provider: "Airtel", amount: "₦2,500", date: "Today, 1:15 PM", status: "Success" },
  { id: 3, user: "Robert Johnson", type: "Electricity", provider: "IKEDC", amount: "₦15,000", date: "Today, 11:45 AM", status: "Success" },
  { id: 4, user: "Jane Wilson", type: "Wallet Funding", provider: "Bank Transfer", amount: "₦50,000", date: "Today, 10:20 AM", status: "Success" },
  { id: 5, user: "Michael Brown", type: "Airtime", provider: "Glo", amount: "₦500", date: "Today, 9:30 AM", status: "Failed" },
];

const AdminDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/login');
  };

  // Mock data for quick links
  const quickLinks = [
    { id: 1, name: "Manage Users", icon: Users, color: "bg-purple-100 text-purple-600" },
    { id: 2, name: "Service Status", icon: ActivitySquare, color: "bg-blue-100 text-blue-600" },
    { id: 3, name: "Transaction Logs", icon: CreditCard, color: "bg-green-100 text-green-600" },
    { id: 4, name: "View Reports", icon: BarChart3, color: "bg-amber-100 text-amber-600" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {!isSidebarCollapsed && (
        <div className="hidden md:block">
          <DashboardSidebar isAdmin={true} onLogout={handleLogout} />
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
            <h1 className="text-xl font-semibold ml-2">Admin Dashboard</h1>
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
              <DashboardSidebar isAdmin={true} onLogout={handleLogout} />
            </div>
          )}

          {/* Welcome Section */}
          <section className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600">Monitor and manage system activities</p>
            </div>
            <Button className="hidden md:flex">
              <Plus size={16} className="mr-1" />
              New Report
            </Button>
          </section>
          
          {/* Stats Cards */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {adminStats.map((stat) => (
                <Card key={stat.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                        <p className="text-xs text-green-600 mt-2">{stat.growth} from last month</p>
                      </div>
                      <div className={`p-3 rounded-full ${stat.color}`}>
                        <stat.icon size={24} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Quick Links */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <Card key={link.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full ${link.color} mb-4`}>
                      <link.icon size={24} />
                    </div>
                    <p className="font-medium">{link.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Recent Transactions */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <Button variant="outline" className="text-sm hidden md:flex">
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
                        <th className="text-left p-4 text-gray-600 font-medium">User</th>
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
                          <td className="p-4 font-medium">{transaction.user}</td>
                          <td className="p-4">{transaction.type}</td>
                          <td className="p-4">{transaction.provider}</td>
                          <td className="p-4 font-medium">{transaction.amount}</td>
                          <td className="p-4 text-gray-600">{transaction.date}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs ${
                              transaction.status === "Success" 
                                ? "bg-green-100 text-green-700" 
                                : "bg-red-100 text-red-700"
                            }`}>
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
                <Button variant="ghost" size="sm" className="w-full">
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
          </section>

          {/* System Status */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current service availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Airtime Services</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Data Services</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span>Electricity Services</span>
                    </div>
                    <span className="text-yellow-600 text-sm font-medium">Partial Outage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Payment Gateway</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Operational</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
