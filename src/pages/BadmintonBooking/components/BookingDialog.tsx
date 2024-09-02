import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Phone, BadgeCheck, Activity } from "lucide-react";

interface BookingDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedSlot: string;
  selectedCourt: string;
  onSubmit: (formData: { fullName: string; id: string; phoneNumber: string }) => void;
}

const BookingDialog: React.FC<BookingDialogProps> = ({
  isOpen,
  onOpenChange,
  selectedSlot,
  selectedCourt,
  onSubmit,
}) => {
  const [fullName, setFullName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ fullName, id, phoneNumber });
    resetForm();
  };

  const resetForm = () => {
    setFullName('');
    setId('');
    setPhoneNumber('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Badminton Court</DialogTitle>
          <DialogDescription>
            Fill in your details to book Court {selectedCourt} for {selectedSlot}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-gray-500" />
            <Input
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <BadgeCheck className="h-5 w-5 text-gray-500" />
            <Input
              placeholder="Enter your Student/Staff ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-gray-500" />
            <Input
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              <Activity className="mr-2 h-4 w-4" /> Confirm Booking
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;