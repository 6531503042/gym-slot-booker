import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import BookingForm from '@/components/BookingForm';
import FootballTimeSlotGrid from './components/FootballTimeSlotGrid';
import { footballTimeSlots } from './data/footballData';

const FootballBooking: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Football Field Booking</CardTitle>
          <CardDescription className="text-center">Select an available time slot to book the football field</CardDescription>
        </CardHeader>
        <CardContent>
          <FootballTimeSlotGrid timeSlots={footballTimeSlots} />
          <BookingForm facilityType="Football Field" />
        </CardContent>
      </Card>
    </div>
  );
};

export default FootballBooking;