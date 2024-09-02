import React from 'react';
import { Button } from "@/components/ui/button";

interface FootballTimeSlot {
  time: string;
  status: string;
}

interface FootballTimeSlotGridProps {
  timeSlots: FootballTimeSlot[];
}

const FootballTimeSlotGrid: React.FC<FootballTimeSlotGridProps> = ({ timeSlots }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {timeSlots.map((slot, index) => (
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
  );
};

export default FootballTimeSlotGrid;