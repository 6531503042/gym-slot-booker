import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import BookingDialog from './components/BookingDialog';
import CourtGrid from './components/CourtGrid';
import { courtData } from './data/courtData';

const BadmintonBooking: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCourtClick = (time: string, courtIndex: number) => {
    setSelectedSlot(time);
    setSelectedCourt((courtIndex + 1).toString());
    setIsDialogOpen(true);
  };

  const handleBookingSubmit = (formData: { fullName: string; id: string; phoneNumber: string }) => {
    console.log({ ...formData, selectedSlot, selectedCourt });
    toast({
      title: "Booking Submitted",
      description: `Your badminton court booking for ${selectedSlot}, Court ${selectedCourt} has been received.`,
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <CourtGrid courtData={courtData} onCourtClick={handleCourtClick} />
      <BookingDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        selectedSlot={selectedSlot}
        selectedCourt={selectedCourt}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
};

export default BadmintonBooking;