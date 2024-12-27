import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { iranSans, } from "@/utils/fonts";
import { Footer, Header } from "@/components";
import TanstackProvider from "@/providers/TanstackProvider";

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "پروژه آزمایشی فلش اسکریپت",
    description: "این پروژه فلش اسکریپت در طول دوره آزمایشی است",
    icons: {
        icon: '/icons/icon-192x192.png',
        apple: '/icons/icon-512x512.png',
    },
};

export const viewport: Viewport = {
    themeColor: "#000000",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html 
            lang="en" 
            suppressHydrationWarning
            className={` |  |  | scroll-smooth overflow-x-hidden`}
        >
            <body className={`relative main-selection | bg-body-bg-light dark:bg-body-bg-dark ${iranSans} |  | `}>
                <ThemeProvider defaultTheme="dark" storageKey="next-theme">
                    <TanstackProvider>
                        <Header />
                        {children}
                        <Footer />
                    </TanstackProvider>
                </ThemeProvider>
            </body>
        </html>
    );

}
