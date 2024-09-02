import React from 'react';
import { HomeIcon, DumbbellIcon, Activity } from "lucide-react";
import Index from "./pages/Index";
import GymBooking from "./pages/GymBooking";
import BadmintonBooking from "./pages/BadmintonBooking";

interface NavItem {
  title: string;
  to: string;
  icon: React.ReactNode;
  page: React.ReactNode;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Gym Booking",
    to: "/gym-booking",
    icon: <DumbbellIcon className="h-4 w-4" />,
    page: <GymBooking />,
  },
  {
    title: "Badminton Booking",
    to: "/badminton-booking",
    icon: <Activity className="h-4 w-4" />,
    page: <BadmintonBooking />,
  },
];