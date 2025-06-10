import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

const AirtimePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Phone className="text-green-600" size={28} /> Airtime Top-up
        </h1>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Top-up Airtime</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-gray-700">Enter the phone number and amount to top-up airtime.</p>
            <div>
              <label htmlFor="phoneNumber" className="font-medium">Phone Number</label>
              <Input id="phoneNumber" type="tel" placeholder="e.g., 08012345678" className="mt-1" />
            </div>
            <div>
              <label htmlFor="amount" className="font-medium">Amount</label>
              <Input id="amount" type="number" placeholder="e.g., 1000" className="mt-1" />
            </div>
            <Button className="mt-4 w-full">Proceed to Top-up</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AirtimePage;