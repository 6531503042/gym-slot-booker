import React from 'react';
import { HomeIcon, DumbbellIcon, Activity, Waves, Football } from "lucide-react";
import Index from "./pages/Index";
import GymBooking from "./pages/GymBooking";
import BadmintonBooking from "./pages/BadmintonBooking/BadmintonBooking";
import SwimmingBooking from "./pages/SwimmingBooking/SwimmingBooking";
import FootballBooking from "./pages/FootballBooking/FootballBooking";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
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
  {
    title: "Swimming Booking",
    to: "/swimming-booking",
    icon: <Waves className="h-4 w-4" />,
    page: <SwimmingBooking />,
  },
  {
    title: "Football Booking",
    to: "/football-booking",
    icon: <Football className="h-4 w-4" />,
    page: <FootballBooking />,
  },
];