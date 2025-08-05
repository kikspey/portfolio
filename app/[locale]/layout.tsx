import type {Metadata, Viewport} from "next";
import {Analytics} from '@vercel/analytics/next';
import {Figtree} from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import {Container, StyledBackground} from "./layout.styles";
import {Providers} from "@/app/[locale]/providers";
import { cdn } from "./config";

const geistSans = Figtree({
    variable: "--font-figtree-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kilian Peyron",
    description: "Passionate about crafting intuitive and engaging user experiences. Transforming ideas into beautifully designed and functional web products.",
    authors: [{name: "Kilian Peyron", url: "https://www.linkedin.com/in/kilianpeyron/"}],
    openGraph: {
        title: "Kilian Peyron",
        description: "Passionate about crafting intuitive and engaging user experiences. Transforming ideas into beautifully designed and functional web products.",
        url: "https://kilianpeyron.com",
        siteName: "Kilian Peyron",
        locale: "en_US",
        images: [
            {
                url: `${cdn}/banner.jpg`,
                width: 1200,
                height: 630,
                alt: "Passionate about crafting intuitive and engaging user experiences. Transforming ideas into beautifully designed and functional web products.",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kilian Peyron",
        description: "Passionate about crafting intuitive and engaging user experiences. Transforming ideas into beautifully designed and functional web products.",
        images: [`${cdn}/banner.jpg`],
    },
    robots: "index, follow",
    applicationName: "Kilian Peyron Portfolio",
    keywords: ["Kilian Peyron", "portfolio", "web development", "React", "NextJS"],
    generator: "Next.js",
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    alternates: {
        canonical: "https://kilianpeyron.com",
        languages: {
            'en-US': 'https://kilianpeyron.com',
            'fr-FR': 'https://kilianpeyron.com/fr',
        },
    },
    icons: {
        icon: [
            {url: "/favicon-96x96.png", type: "image/png", sizes: "96x96"},
            {url: "/favicon.svg", type: "image/svg+xml"},
            {url: "/favicon.ico"},
        ],
    },
};

export const viewport: Viewport = {
    colorScheme: "light dark",
    themeColor: "#ffffff",
};

export default async function RootLayout({
                                             children,
                                             params,
                                         }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const resolvedParams = await params;

    return (
        <html lang="en">
        <head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <meta name="apple-mobile-web-app-title" content="Kilian Peyron"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body className={`${geistSans.variable}`}>
        <StyledComponentsRegistry>
            <StyledBackground/>
            <Container>
                <Providers locale={resolvedParams.locale}>
                    {children}
                </Providers>
            </Container>
        </StyledComponentsRegistry>
        <Analytics/>
        </body>
        </html>
    );
}
