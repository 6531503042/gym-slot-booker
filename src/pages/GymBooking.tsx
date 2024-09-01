import React, { useState } from 'react';
import { Input, Select, SelectItem, Button, Container, Text } from "@nextui-org/react";

const timeSlots = [
  "13:00 - 15:00",
  "15:15 - 17:15",
  "17:30 - 19:30",
  "19:45 - 21:00"
];

const GymBooking: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log({ fullName, id, phoneNumber, selectedSlot });
    alert('Booking submitted successfully!');
  };

  return (
    <Container xs className="mt-8">
      <Text h1 className="text-2xl font-bold mb-6 text-center">Gym Booking</Text>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          fullWidth
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <Input
          fullWidth
          label="Student/Staff ID"
          placeholder="Enter your ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <Input
          fullWidth
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <Select
          label="Select Time Slot"
          placeholder="Choose your preferred time"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          required
        >
          {timeSlots.map((slot) => (
            <SelectItem key={slot} value={slot}>
              {slot}
            </SelectItem>
          ))}
        </Select>
        <Button type="submit" color="primary" className="w-full">
          Book Slot
        </Button>
      </form>
    </Container>
  );
};

export default GymBooking;