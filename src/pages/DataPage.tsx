import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wifi } from "lucide-react";

const DataPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Wifi className="text-blue-600" size={28} /> Data Bundle
        </h1>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Purchase Data Bundle</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-gray-700">Enter the phone number and select a data bundle.</p>
            <div>
              <label htmlFor="phoneNumber" className="font-medium">Phone Number</label>
              <Input id="phoneNumber" type="tel" placeholder="e.g., 08012345678" className="mt-1" />
            </div>
            <div>
              <label htmlFor="network" className="font-medium">Network</label>
              <select id="network" className="border rounded px-3 py-2 w-full mt-1">
                <option value="">Select Network</option>
                <option value="MTN">MTN</option>
                <option value="Glo">Glo</option>
                <option value="Airtel">Airtel</option>
                <option value="9mobile">9mobile (Etisalat)</option>
                <option value="Spectranet">Spectranet</option>
              </select>
            </div>
            <div>
              <label htmlFor="dataBundle" className="font-medium">Data Bundle</label>
              <select id="dataBundle" className="border rounded px-3 py-2 w-full mt-1">
                <option value="">Select a bundle</option>
                <option value="1GB">1GB - N500</option>
                <option value="2GB">2GB - N900</option>
                <option value="5GB">5GB - N2000</option>
              </select>
            </div>
            <Button className="mt-4 w-full">Proceed to Purchase</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataPage;