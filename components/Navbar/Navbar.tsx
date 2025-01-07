import { cdn } from "@/app/config";
import { NavbarLinks, NavbarLink, StyledNavbar, Navlogo } from "./Navbar.styles";
import Image from "next/image";
import { Button } from "@/ui/Button";
import { AtSign, BriefcaseBusiness } from "lucide-react";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Navlogo>
        <Image
          src={cdn + "/hhn/HHN.avif"}
          alt="HHN Logo"
          layout="fill"
          objectFit="contain"
        />
      </Navlogo>
      <NavbarLinks>
        <NavbarLink>
          <Button icon={<BriefcaseBusiness width={20} height={20} />}>Hire me</Button>
        </NavbarLink>
        <NavbarLink>
          <Button icon={<AtSign />} variant="secondary">Contact me</Button>
        </NavbarLink>
      </NavbarLinks>
    </StyledNavbar>
  );
};

export default Navbar;
