import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, Calendar } from "lucide-react";

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
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Badminton Court Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courtData.map((slot, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="bg-gray-100">
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-500" />
                  {slot.time}
                </span>
                <Calendar className="h-5 w-5 text-gray-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 gap-3">
                {slot.courts.map((isAvailable, courtIndex) => (
                  <Button
                    key={courtIndex}
                    variant={isAvailable ? "outline" : "secondary"}
                    className={`flex items-center justify-center ${
                      isAvailable ? "hover:bg-green-100" : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isAvailable}
                  >
                    {isAvailable ? (
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="mr-2 h-4 w-4 text-red-500" />
                    )}
                    Court {courtIndex + 1}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BadmintonBooking;