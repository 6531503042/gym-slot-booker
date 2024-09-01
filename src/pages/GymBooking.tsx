import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DumbbellIcon, UsersIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon, XCircleIcon } from "lucide-react";

const timeSlots = [
  { time: "13:00 - 15:00", available: 10, total: 20 },
  { time: "15:15 - 17:15", available: 2, total: 20 },
  { time: "17:30 - 19:30", available: 15, total: 20 },
  { time: "19:45 - 21:00", available: 0, total: 20 }
];

const GymBooking: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, id, phoneNumber, selectedSlot });
    alert('Booking submitted successfully!');
  };

  const getSlotStatus = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (available === 0) return { color: 'text-red-500', icon: <XCircleIcon className="inline mr-1 h-4 w-4" />, text: 'Full' };
    if (percentage <= 25) return { color: 'text-orange-500', icon: <AlertCircleIcon className="inline mr-1 h-4 w-4" />, text: 'Almost Full' };
    return { color: 'text-green-500', icon: <CheckCircleIcon className="inline mr-1 h-4 w-4" />, text: 'Available' };
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
            <DumbbellIcon className="mr-2 h-8 w-8" />
            Sport Complex Gym Booking
          </CardTitle>
          <CardDescription className="text-center">Book your gym slot easily and quickly!</CardDescription>
        </CardHeader>
        <CardContent>
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
            <Select onValueChange={setSelectedSlot} required>
              <SelectTrigger>
                <SelectValue placeholder="Select Time Slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => {
                  const status = getSlotStatus(slot.available, slot.total);
                  return (
                    <SelectItem key={slot.time} value={slot.time} disabled={slot.available === 0}>
                      <div className="flex justify-between items-center w-full">
                        <span>{slot.time}</span>
                        <span className={`text-sm ${status.color} flex items-center`}>
                          {status.icon}
                          <span className="mr-2">{status.text}</span>
                          <UsersIcon className="inline mr-1 h-4 w-4" />
                          {slot.available}/{slot.total}
                        </span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full">
              <ClockIcon className="mr-2 h-4 w-4" /> Book Slot
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GymBooking;
