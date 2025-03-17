"use client";

import {
  NavbarLinks,
  NavbarLink,
  StyledNavbar,
  NavBanner,
  NavContent, NavTitle,
} from "./Navbar.styles";
import {Button} from "@/ui/Button";
import {Github, ScrollText} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const banner = {
    title: "Leitlearn announcement",
    link: "/blog/leitlearn-announcement",
  };

  return (
    <StyledNavbar>
      <Link href={banner.link}>
        <NavBanner background="var(--op-color)" border="var(--op-color)">
          {banner.title}
        </NavBanner>
      </Link>
      <NavContent>
        <NavTitle>
          Kilian Peyron
        </NavTitle>
        <NavbarLinks>
          <NavbarLink>
            <Link href="https://cdn.xra.fr/xra/portfolio/resume.pdf" passHref>
              <Button icon={<ScrollText width={20} height={20}/>}>CV</Button>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <Link href="https://git.new/kpgit" passHref>
              <Button
                icon={<Github width={20} height={20}/>}
                variant="secondary"
                size="icon"
              />
            </Link>
          </NavbarLink>
        </NavbarLinks>
      </NavContent>
    </StyledNavbar>
  );
};

export default Navbar;
