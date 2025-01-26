"use client";

import { Button } from "@/ui/Button";
import { FooterContainer, FooterCopyright } from "./Footer.styles";
import { Eclipse } from "lucide-react";

const Footer = () => {
  const changeTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    if (!currentTheme) {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      html.setAttribute("data-theme", systemDark ? "light" : "dark");
    } else {
      html.setAttribute(
        "data-theme",
        currentTheme === "dark" ? "light" : "dark"
      );
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
