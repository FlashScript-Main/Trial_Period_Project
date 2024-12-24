import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { iranSans, } from "@/utils/fonts";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
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
            <body className={`relative main-selection | ${iranSans} |  | no-scrollbar`}>
                <ThemeProvider defaultTheme="dark" storageKey="next-theme">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );

}
