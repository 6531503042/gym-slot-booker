import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const PaymentQRCode = ({ amount, bookingType }) => {
  // This is a mock PromptPay number. In a real application, you'd use your actual PromptPay number.
  const promptPayNumber = "0899999999";
  
  // In a real application, you'd generate this data properly
  const qrCodeData = `https://promptpay.io/${promptPayNumber}/${amount}`;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <CreditCard className="mr-2 h-5 w-5" />
          Payment QR Code
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <p className="mb-4 text-center">
          Scan this QR code to pay {amount} baht for your {bookingType} booking
        </p>
        <QRCodeSVG value={qrCodeData} size={200} />
        <p className="mt-4 text-sm text-gray-500">PromptPay: {promptPayNumber}</p>
      </CardContent>
    </Card>
  );
};

export default PaymentQRCode;