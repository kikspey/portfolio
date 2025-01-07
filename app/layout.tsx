import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Container, StyledBackground } from "./layout.styles";

const geistSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HHN",
  description: "Kilian Peyron's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <StyledComponentsRegistry>
          <StyledBackground />
          <Container>{children}</Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
