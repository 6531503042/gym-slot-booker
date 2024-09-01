import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Clock, Calendar, User, Phone, BadgeCheck, Activity } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const courtData = [
  { time: "13:00 - 14:00", courts: [false, false, false, true] },
  { time: "14:00 - 15:00", courts: [true, false, false, false] },
  { time: "15:00 - 16:00", courts: [false, false, false, false] },
  { time: "16:00 - 17:00", courts: [true, false, false, false] },
  { time: "17:00 - 18:00", courts: [false, false, false, false] },
  { time: "18:00 - 19:00", courts: [false, false, false, false] },
  { time: "19:00 - 20:00", courts: [false, false, false, false] },
  { time: "20:00 - 21:00", courts: [false, false, false, false] },
];

const BadmintonBooking = () => {
  const [fullName, setFullName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, id, phoneNumber, selectedSlot, selectedCourt });
    toast({
      title: "Booking Submitted",
      description: `Your badminton court booking for ${selectedSlot}, Court ${selectedCourt} has been received.`,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
            <Activity className="mr-2 h-8 w-8 text-blue-500" />
            Badminton Court Booking
          </CardTitle>
          <CardDescription className="text-center">Book your badminton court easily and quickly!</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="availability">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="availability">Court Availability</TabsTrigger>
              <TabsTrigger value="booking">Make a Booking</TabsTrigger>
            </TabsList>
            <TabsContent value="availability">
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
            </TabsContent>
            <TabsContent value="booking">
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
                <Select onValueChange={setSelectedSlot} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Time Slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {courtData.map((slot, index) => (
                      <SelectItem key={index} value={slot.time}>{slot.time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select onValueChange={setSelectedCourt} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Court" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4].map((court) => (
                      <SelectItem key={court} value={court.toString()}>Court {court}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button type="submit" className="w-full">
                  <Activity className="mr-2 h-4 w-4" /> Book Badminton Court
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BadmintonBooking;
