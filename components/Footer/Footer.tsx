"use client";

import { Button } from "@/ui/Button";
import { FooterContainer, FooterCopyright } from "./Footer.styles";
import { Eclipse } from "lucide-react";

const Footer = () => {
  const changeTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  return (
    <FooterContainer>
      <FooterCopyright>
        {" "}
        © {new Date().getFullYear()} Kilian Peyron.
      </FooterCopyright>
      <Button
        icon={<Eclipse />}
        variant="secondary"
        size="icon"
        onClick={changeTheme}
      ></Button>
    </FooterContainer>
  );
};

export default Footer;
