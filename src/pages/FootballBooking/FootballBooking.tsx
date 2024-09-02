import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import BookingForm from '@/components/BookingForm';
import { Button } from "@/components/ui/button";
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {footballTimeSlots.map((slot, index) => (
              <Button
                key={index}
                variant={slot.status === "Available" ? "outline" : "secondary"}
                className={`w-full ${slot.status === "Available" ? "hover:bg-green-100" : "opacity-50 cursor-not-allowed"}`}
                disabled={slot.status !== "Available"}
              >
                {slot.time} - {slot.status}
              </Button>
            ))}
          </div>
          <BookingForm facilityType="Football Field" />
        </CardContent>
      </Card>
    </div>
  );
};

export default FootballBooking;