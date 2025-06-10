import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Zap, Smartphone, Wallet } from "lucide-react";

const transactions = [
  { id: 1, type: "Airtime", provider: "MTN", amount: "₦1,000", date: "Today, 2:30 PM", status: "Success" },
  { id: 2, type: "Data", provider: "Airtel", amount: "₦2,500", date: "Yesterday, 10:15 AM", status: "Success" },
  { id: 3, type: "Electricity", provider: "IKEDC", amount: "₦15,000", date: "May 2, 2025", status: "Success" },
  { id: 4, type: "Wallet Funding", provider: "Bank Transfer", amount: "₦50,000", date: "April 28, 2025", status: "Success" },
  { id: 5, type: "Airtime", provider: "Glo", amount: "₦500", date: "April 20, 2025", status: "Failed" },
];

const iconMap: Record<string, JSX.Element> = {
  "Airtime": <Smartphone className="text-purple-600" size={18} />,
  "Data": <CreditCard className="text-blue-600" size={18} />,
  "Electricity": <Zap className="text-amber-600" size={18} />,
  "Wallet Funding": <Wallet className="text-green-600" size={18} />,
};

const TransactionPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Transactions</h1>
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map(tx => (
                  <TableRow key={tx.id}>
                    <TableCell className="flex items-center gap-2">{iconMap[tx.type]} {tx.type}</TableCell>
                    <TableCell>{tx.provider}</TableCell>
                    <TableCell>{tx.amount}</TableCell>
                    <TableCell>{tx.date}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 text-xs rounded ${tx.status === "Success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{tx.status}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransactionPage;