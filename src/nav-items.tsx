import React from 'react';
import { HomeIcon, DumbbellIcon, Activity, Waves, Futbol } from "lucide-react";
import Index from "./pages/Index";
import GymBooking from "./pages/GymBooking";
import BadmintonBooking from "./pages/BadmintonBooking/BadmintonBooking";
import SwimmingBooking from "./pages/SwimmingBooking/SwimmingBooking";
import FootballBooking from "./pages/FootballBooking/FootballBooking";

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
    title: "Gym",
    to: "/gym-booking",
    icon: <DumbbellIcon className="h-4 w-4" />,
    page: <GymBooking />,
  },
  {
    title: "Badminton",
    to: "/badminton-booking",
    icon: <Activity className="h-4 w-4" />,
    page: <BadmintonBooking />,
  },
  {
    title: "Swimming",
    to: "/swimming-booking",
    icon: <Waves className="h-4 w-4" />,
    page: <SwimmingBooking />,
  },
  {
    title: "Football",
    to: "/football-booking",
    icon: <Futbol className="h-4 w-4" />,
    page: <FootballBooking />,
  },
];