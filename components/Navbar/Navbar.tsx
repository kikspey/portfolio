"use client";

import {
  NavbarLinks,
  NavbarLink,
  StyledNavbar,
  NavTitle,
} from "./Navbar.styles";
import { Button } from "@/ui/Button";
import { AtSign, BriefcaseBusiness } from "lucide-react";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavTitle>Kilian Peyron</NavTitle>
      <NavbarLinks>
        <NavbarLink>
          <Button icon={<BriefcaseBusiness width={20} height={20} />}>
            Hire me
          </Button>
        </NavbarLink>
        <NavbarLink>
          <Button icon={<AtSign />} variant="secondary">
            Contact me
          </Button>
        </NavbarLink>
      </NavbarLinks>
    </StyledNavbar>
  );
};

export default Navbar;
