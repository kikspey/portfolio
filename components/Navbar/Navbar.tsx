"use client";

import {
  NavbarLinks,
  NavbarLink,
  StyledNavbar,
  NavLogo,
  NavBanner,
  NavContent,
} from "./Navbar.styles";
import { Button } from "@/ui/Button";
import { AtSign, ScrollText } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const banner = {
    title: "Leitlearn Next announcement",
    link: "/blog/leitlearn-announcement",
  };

  return (
    <StyledNavbar>
      <Link href={banner.link}>
        <NavBanner background="#039BF9" border="#0083d2">
          {banner.title}
        </NavBanner>
      </Link>
      <NavContent>
        <NavLogo>
          <NavSVG />
        </NavLogo>
        <NavbarLinks>
          <NavbarLink>
            <Link href="https://read.cv/kilianpeyron" passHref>
              <Button icon={<ScrollText width={20} height={20} />}>CV</Button>
            </Link>
          </NavbarLink>
          <NavbarLink>
            <Link href="mailto:kilian@xra.fr" passHref>
              <Button
                icon={<AtSign width={20} height={20} />}
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

const NavSVG = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      height="2.2rem"
      viewBox="0 0 8041.000000 2205.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,2205.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M370 21173 l0 -348 5383 -4955 5382 -4955 -225 -205 c-124 -113
-2521 -2294 -5328 -4848 l-5102 -4643 0 -350 0 -349 3163 0 3162 0 3910 3588
3910 3588 230 -212 c127 -116 1879 -1731 3895 -3588 l3665 -3376 5398 0 5397
0 0 7353 c0 4630 4 7433 10 7571 32 723 154 1020 485 1181 193 94 393 134 770
155 247 13 39042 13 39290 0 216 -12 376 -32 506 -65 209 -52 329 -113 440
-225 130 -130 214 -330 254 -607 35 -245 37 -332 42 -1440 l5 -1113 -9074 -3
-9073 -3 -208 -21 c-238 -25 -231 -24 -472 -59 -1213 -173 -2217 -632 -2954
-1349 -375 -365 -661 -765 -907 -1270 -338 -696 -519 -1431 -595 -2420 -14
-186 -13 -2205 2 -2465 68 -1210 365 -2226 887 -3035 358 -555 856 -1034 1432
-1378 716 -427 1534 -673 2600 -779 l225 -23 11576 -2 11577 -3 6 3642 c10
5064 3 12074 -12 12243 -51 578 -100 894 -203 1314 -153 626 -401 1199 -730
1686 -165 245 -301 409 -528 636 -374 374 -711 614 -1196 854 -672 332 -1363
512 -2320 602 -182 17 -1063 18 -21040 18 l-20850 0 -235 -23 c-694 -67 -1273
-191 -1795 -387 -191 -72 -432 -176 -545 -237 -189 -102 -232 -126 -330 -186
-1374 -843 -2140 -2289 -2280 -4307 -7 -102 -10 -2425 -10 -7290 l0 -7140 -42
41 c-24 23 -2203 2020 -4843 4439 -2640 2419 -4826 4422 -4858 4451 l-58 53
703 644 c387 354 2818 2580 5403 4946 l4700 4302 3 350 2 349 -3097 0 -3098 0
-4049 -3690 c-2227 -2030 -4052 -3690 -4056 -3690 -4 0 -1819 1661 -4034 3690
l-4026 3690 -3120 0 -3120 0 0 -347z m74640 -14238 l0 -1685 -8542 3 c-6529 3
-8567 6 -8643 15 -493 59 -715 158 -869 387 -149 222 -206 581 -206 1300 0
631 46 945 173 1190 54 103 171 224 277 284 188 108 466 163 905 180 105 4
3951 9 8548 9 l8357 2 0 -1685z"
        />
      </g>
    </svg>
  );
};

export default Navbar;
