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
  title: "XRA",
  description: "Kilian Peyron's portfolio",
  openGraph: {
    title: "XRA",
    description: "Kilian Peyron's portfolio",
    url: "https://xra.fr",
    siteName: "XRA",
    images: [
      {
        url: "https://cdn.xra.fr/xra/xra-meta-banner.avif",
        width: 800,
        height: 600,
        alt: "Kilian Peyron's portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRA",
    description: "Kilian Peyron's portfolio",
    images: ["https://cdn.xra.fr/xra/xra-meta-banner.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="XRA" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable}`}>
        <StyledComponentsRegistry>
          <StyledBackground />
          <Container>{children}</Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
