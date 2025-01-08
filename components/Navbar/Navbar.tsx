"use client";

import {
  NavbarLinks,
  NavbarLink,
  StyledNavbar,
  NavTitle,
} from "./Navbar.styles";
import { Button } from "@/ui/Button";
import { AtSign, FileUser } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavTitle>Kilian Peyron</NavTitle>
      <NavbarLinks>
        <NavbarLink>
          <Link href="https://read.cv/kilianpeyron" passHref>
            <Button icon={<FileUser width={20} height={20} />}>Resume</Button>
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link href="mailto:kilian@hhn.fr" passHref>
            <Button icon={<AtSign />} variant="secondary">
              Contact me
            </Button>
          </Link>
        </NavbarLink>
      </NavbarLinks>
    </StyledNavbar>
  );
};

export default Navbar;
