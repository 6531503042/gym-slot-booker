import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { navItems } from "@/nav-items";

const AppNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link to="/" className="font-bold text-inherit">Sports Facility Booking</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.to} isActive={location.pathname === item.to}>
            <Link to={item.to}>
              <Button
                as="span"
                color={location.pathname === item.to ? "primary" : "default"}
                variant="light"
                startContent={item.icon}
              >
                {item.title}
              </Button>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;