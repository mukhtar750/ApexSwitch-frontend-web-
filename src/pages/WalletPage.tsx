import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Plus, ArrowUpRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const WalletPage = () => {
  const navigate = useNavigate();
  const walletBalance = "₦24,500.00";
  const recentTransactions = [
    { id: 1, type: "Airtime", provider: "MTN", amount: "₦1,000", date: "Today, 2:30 PM", status: "Success" },
    { id: 2, type: "Data", provider: "Airtel", amount: "₦2,500", date: "Yesterday, 10:15 AM", status: "Success" },
    { id: 3, type: "Electricity", provider: "IKEDC", amount: "₦15,000", date: "May 2, 2025", status: "Success" },
    { id: 4, type: "Wallet Funding", provider: "Bank Transfer", amount: "₦50,000", date: "April 28, 2025", status: "Success" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Wallet size={28} className="text-blue-600" /> Wallet
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white col-span-2">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Wallet Balance</span>
                <Wallet size={24} />
              </CardTitle>
              <CardDescription className="text-blue-100">Available funds</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{walletBalance}</p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button className="bg-white text-blue-700 font-bold hover:bg-blue-50 flex items-center gap-2" onClick={() => navigate('/dashboard/fund-wallet')}>
                <Plus size={18} /> Fund Wallet
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold flex items-center gap-2">
                <ArrowUpRight size={18} /> Withdraw
              </Button>
            </CardFooter>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Button variant="outline" className="w-full">Buy Airtime</Button>
              <Button variant="outline" className="w-full">Purchase Data</Button>
              <Button variant="outline" className="w-full">Pay Electricity</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTransactions.map(tx => (
                  <tr key={tx.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{tx.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{tx.provider}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{tx.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{tx.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700">{tx.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;