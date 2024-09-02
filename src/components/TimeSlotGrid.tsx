import React from 'react';
import { Button } from "@/components/ui/button";

interface TimeSlot {
  time: string;
  available: number;
  total: number;
}

interface TimeSlotGridProps {
  timeSlots: TimeSlot[];
}

const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({ timeSlots }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {timeSlots.map((slot, index) => (
        <Button
          key={index}
          variant={slot.available > 0 ? "outline" : "secondary"}
          className={`w-full ${slot.available > 0 ? "hover:bg-green-100" : "opacity-50 cursor-not-allowed"}`}
          disabled={slot.available === 0}
        >
          {slot.time} - {slot.available}/{slot.total} available
        </Button>
      ))}
    </div>
  );
};

export default TimeSlotGrid;