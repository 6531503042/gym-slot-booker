import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import BookingForm from '@/components/BookingForm';
import TimeSlotGrid from '@/components/TimeSlotGrid';
import { swimmingTimeSlots } from './data/swimmingData';

const SwimmingBooking: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Swimming Pool Booking</CardTitle>
          <CardDescription className="text-center">Select a time slot to book the swimming pool</CardDescription>
        </CardHeader>
        <CardContent>
          <TimeSlotGrid timeSlots={swimmingTimeSlots} />
          <BookingForm facilityType="Swimming Pool" />
        </CardContent>
      </Card>
    </div>
  );
};

export default SwimmingBooking;