import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dumbbell, Activity, Waves } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sports Facility Booking System</h1>
        <p className="text-xl text-gray-600 mb-6">Book your preferred sports facility easily and quickly!</p>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <Link to="/gym-booking">
            <Button size="lg" className="w-full">
              <Dumbbell className="mr-2 h-5 w-5" /> Book Gym
            </Button>
          </Link>
          <Link to="/badminton-booking">
            <Button size="lg" variant="outline" className="w-full">
              <Activity className="mr-2 h-5 w-5" /> Book Badminton
            </Button>
          </Link>
          <Link to="/swimming-booking">
            <Button size="lg" variant="outline" className="w-full">
              <Waves className="mr-2 h-5 w-5" /> Book Swimming
            </Button>
          </Link>
          <Link to="/football-booking">
            <Button size="lg" variant="outline" className="w-full">
              Book Football
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;