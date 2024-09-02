import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface BookingFormProps {
  facilityType: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ facilityType }) => {
  const [fullName, setFullName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, id, phoneNumber, facilityType });
    toast({
      title: "Booking Submitted",
      description: `Your ${facilityType} booking has been received.`,
    });
    // Reset form fields
    setFullName('');
    setId('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <Input
        placeholder="Enter your Student/Staff ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <Input
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        Book {facilityType}
      </Button>
    </form>
  );
};

export default BookingForm;