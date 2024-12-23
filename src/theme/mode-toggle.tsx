"use client";

import { useTheme } from "@/providers/theme-provider";
// import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
    // const { setTheme, theme } = useTheme()
    const { setTheme, theme } = useTheme()

    return (
        <label 
            className={`swap swap-rotate py-1 px-1 cursor-pointer | bg-white | grid place-content-center | rounded-full group transition-colors border-2 border-[#1d4ed8] dark:border-[#fbbf24] hover:border-rose-600 dark:hover:border-red-600`} 
            // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <input 
                type="checkbox" 
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            /> 

            <Sun 
                className={`w-6 h-6 md:w-7 md:h-7 hidden dark:block text-[#fbbf24] group-hover:text-rose-600 transition-colors`}
                style={{ 
                    // color: "#fbbf24", 
                    // display: theme === "light" ? "none" : "block" 
                }}
            />
            <Moon 
                className={`w-6 h-6 md:w-7 md:h-7 dark:hidden text-blue-700 group-hover:text-rose-600 transition-colors`}
                style={{ 
                    // color: "#1d4ed8", 
                    // display: theme === "dark" ? "none" : "block"
                }}
            />
        </label>
    )
}
