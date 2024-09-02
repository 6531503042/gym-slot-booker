import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, Calendar } from "lucide-react";
import { CourtSlotData } from '../types';

interface CourtSlotProps {
  slot: CourtSlotData;
  onCourtClick: (time: string, courtIndex: number) => void;
}

const CourtSlot: React.FC<CourtSlotProps> = ({ slot, onCourtClick }) => {
  return (
    <Card className="shadow-lg">
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
              onClick={() => isAvailable && onCourtClick(slot.time, courtIndex)}
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
  );
};

export default CourtSlot;