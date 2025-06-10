import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Wifi, Phone } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Phone className="text-green-600" /> Airtime Top-up</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Recharge your mobile airtime instantly.</p>
              <Button className="w-full">Top-up Airtime</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Wifi className="text-blue-600" /> Data Bundle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Purchase data bundles for all networks.</p>
              <Button className="w-full">Buy Data</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Zap className="text-yellow-600" /> Electricity Bill</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Pay your electricity bills conveniently.</p>
              <Button className="w-full">Pay Electricity</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;