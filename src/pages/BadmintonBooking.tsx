import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { CheckCircle, XCircle, Clock, Calendar, User, Phone, BadgeCheck, Activity } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CourtSlot {
  time: string;
  courts: boolean[];
}

const courtData: CourtSlot[] = [
  { time: "13:00 - 14:00", courts: [false, false, false, true] },
  { time: "14:00 - 15:00", courts: [true, false, false, false] },
  { time: "15:00 - 16:00", courts: [false, false, false, false] },
  { time: "16:00 - 17:00", courts: [true, false, false, false] },
  { time: "17:00 - 18:00", courts: [false, false, false, false] },
  { time: "18:00 - 19:00", courts: [false, false, false, false] },
  { time: "19:00 - 20:00", courts: [false, false, false, false] },
  { time: "20:00 - 21:00", courts: [false, false, false, false] },
];

const BadmintonBooking: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCourtClick = (time: string, courtIndex: number) => {
    setSelectedSlot(time);
    setSelectedCourt((courtIndex + 1).toString());
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, id, phoneNumber, selectedSlot, selectedCourt });
    toast({
      title: "Booking Submitted",
      description: `Your badminton court booking for ${selectedSlot}, Court ${selectedCourt} has been received.`,
    });
    setIsDialogOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFullName('');
    setId('');
    setPhoneNumber('');
    setSelectedSlot('');
    setSelectedCourt('');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
            <Activity className="mr-2 h-8 w-8 text-blue-500" />
            Badminton Court Booking
          </CardTitle>
          <CardDescription className="text-center">Click on an available court to book!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {courtData.map((slot, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="bg-gray-100">
                  <CardTitle className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-blue-500" />
                      {slot.time}
                    </span>
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {slot.courts.map((isAvailable, courtIndex) => (
                      <Button
                        key={courtIndex}
                        variant={isAvailable ? "outline" : "secondary"}
                        className={`flex items-center justify-center text-xs ${
                          isAvailable ? "hover:bg-green-100" : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={!isAvailable}
                        onClick={() => isAvailable && handleCourtClick(slot.time, courtIndex)}
                      >
                        {isAvailable ? (
                          <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                        ) : (
                          <XCircle className="mr-1 h-3 w-3 text-red-500" />
                        )}
                        Court {courtIndex + 1}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
    </div>
  );
};

export default BadmintonBooking;