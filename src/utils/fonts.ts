import { Work_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import localFont from "next/font/local";

const workSans_font = Work_Sans({
    subsets: ['latin'],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800", 
        "900",
    ],
})

const spaceMono_font = Space_Mono({
    subsets: ['latin'],
    weight: [
        "400",
        "700"
    ],
})

const iranSansRegular = localFont({
    src: "../app/fonts/IRANSansX-Regular.woff",
    variable: "--font-iran-sans",
    weight: "400",
});

export const workSans = workSans_font.className;
export const spaceMono = spaceMono_font.className;
export const iranSans = iranSansRegular.className;