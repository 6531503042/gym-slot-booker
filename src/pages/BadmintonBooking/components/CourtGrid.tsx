import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import CourtSlot from './CourtSlot';
import { Activity } from "lucide-react";
import { CourtSlotData } from '../types';

interface CourtGridProps {
  courtData: CourtSlotData[];
  onCourtClick: (time: string, courtIndex: number) => void;
}

const CourtGrid: React.FC<CourtGridProps> = ({ courtData, onCourtClick }) => {
  return (
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
            <CourtSlot key={index} slot={slot} onCourtClick={onCourtClick} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourtGrid;