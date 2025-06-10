import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap } from "lucide-react";

const ElectricityPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="text-yellow-600" size={28} /> Electricity Bill Payment
        </h1>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Pay Electricity Bill</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-gray-700">Enter your meter number and amount to pay your electricity bill.</p>
            <div>
              <label htmlFor="meterNumber" className="font-medium">Meter Number</label>
              <Input id="meterNumber" type="text" placeholder="Enter meter number" className="mt-1" />
            </div>
            <div>
              <label htmlFor="amount" className="font-medium">Amount</label>
              <Input id="amount" type="number" placeholder="e.g., 5000" className="mt-1" />
            </div>
            <Button className="mt-4 w-full">Proceed to Payment</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ElectricityPage;