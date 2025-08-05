"use client";

import {Button} from "@/ui/Button";
import {FooterActions, FooterContainer, FooterCopyright} from "./Footer.styles";
import {Eclipse} from "lucide-react";
import Select from "@/ui/Select";
import {useChangeLocale, useCurrentLocale} from "@/locales/client";

const Footer = () => {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();
    type SupportedLocale = "en" | "fr";

    const lang = [
        {label: "Français", value: "fr"},
        {label: "English", value: "en"},
    ];

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
                © {new Date().getFullYear()} Kilian Peyron.
            </FooterCopyright>
            <FooterActions>
                <Button
                    icon={<Eclipse/>}
                    variant="secondary"
                    size="icon"
                    onClick={changeTheme}
                ></Button>
                <Select
                    options={lang}
                    value={locale}
                    onChange={(value) => changeLocale(value as SupportedLocale)}
                    position="top"
                />
            </FooterActions>
        </FooterContainer>
    );
};

export default Footer;
