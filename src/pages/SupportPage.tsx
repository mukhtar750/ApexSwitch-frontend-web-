import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LifeBuoy } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <LifeBuoy className="text-blue-600" size={28} /> Support
        </h1>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-gray-700">Need help? Reach out to our support team and we’ll get back to you as soon as possible.</p>
            <label className="font-medium">Your Email</label>
            <input type="email" className="border rounded px-3 py-2" placeholder="Enter your email" />
            <label className="font-medium">Message</label>
            <textarea className="border rounded px-3 py-2 min-h-[100px]" placeholder="Describe your issue or question" />
            <Button className="mt-4 w-full">Send Message</Button>
            <div className="text-sm text-gray-500 mt-2">Or email us directly at <a href="mailto:support@apexswitch.com" className="text-blue-600 underline">support@apexswitch.com</a></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupportPage;