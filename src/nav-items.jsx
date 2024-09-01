import { HomeIcon, DumbbellIcon, Racquet } from "lucide-react";
import Index from "./pages/Index.jsx";
import GymBooking from "./pages/GymBooking";
import BadmintonBooking from "./pages/BadmintonBooking";

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
    icon: <Racquet className="h-4 w-4" />,
    page: <BadmintonBooking />,
  },
];
