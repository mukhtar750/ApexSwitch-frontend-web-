import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <label className="font-medium">Full Name</label>
            <Input type="text" placeholder="Enter your full name" />
            <label className="font-medium">Email Address</label>
            <Input type="email" placeholder="Enter your email" />
            <label className="font-medium">Change Password</label>
            <Input type="password" placeholder="New password" />
            <Input type="password" placeholder="Confirm new password" />
            <Button className="mt-4 w-full">Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;