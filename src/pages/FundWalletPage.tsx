import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Banknote, CreditCard, QrCode } from 'lucide-react';

const FundWalletPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:block">
        <DashboardSidebar isAdmin={false} onLogout={() => {}} />
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Fund Wallet</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Choose Funding Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="bank-transfer" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <Label htmlFor="bank-transfer" className="flex items-center gap-2">
                    <Banknote size={20} /> Bank Transfer
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card-payment" id="card-payment" />
                  <Label htmlFor="card-payment" className="flex items-center gap-2">
                    <CreditCard size={20} /> Card Payment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="qr-code" id="qr-code" />
                  <Label htmlFor="qr-code" className="flex items-center gap-2">
                    <QrCode size={20} /> QR Code
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Enter Amount</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="amount">Amount (₦)</Label>
                <Input type="number" id="amount" placeholder="e.g., 5000" />
              </div>
              <Button className="w-full">Proceed to Fund</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FundWalletPage;