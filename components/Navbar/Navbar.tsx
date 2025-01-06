import { cdn } from "@/app/config";
import { NavbarLinks, NavbarLink, StyledNavbar, Navlogo } from "./Navbar.styles";
import Image from "next/image";

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
        <NavbarLink>About</NavbarLink>
        <NavbarLink>Projects</NavbarLink>
        <NavbarLink>Blog</NavbarLink>
      </NavbarLinks>
    </StyledNavbar>
  );
};

export default Navbar;
