import TanstackProvider from "@/providers/TanstackProvider";
import { iranSans } from "@/utils/fonts";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import "../../app/globals.css";

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "ثبت نام",
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
                        {children}
                    </TanstackProvider>
                </ThemeProvider>
            </body>
        </html>
    );

}
