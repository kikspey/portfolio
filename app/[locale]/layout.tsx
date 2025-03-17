import type {Metadata} from "next";
import {Analytics} from '@vercel/analytics/next';
import {Figtree} from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import {Container, StyledBackground} from "./layout.styles";
import {Providers} from "@/app/[locale]/providers";

const geistSans = Figtree({
    variable: "--font-figtree-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kilian Peyron",
    description: "Kilian Peyron's portfolio",
    openGraph: {
        title: "Kilian Peyron",
        description: "Kilian Peyron's portfolio",
        url: "https://kilianpeyron.com",
        siteName: "Kilian Peyron",
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
        title: "Kilian Peyron",
        description: "Kilian Peyron's portfolio",
        images: ["https://cdn.xra.fr/xra/xra-meta-banner.avif"],
    },
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
                rel="icon"
                type="image/png"
                href="/favicon-96x96.png"
                sizes="96x96"
            />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <meta name="apple-mobile-web-app-title" content="XRA"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <title>Kilian Peyron</title>
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
