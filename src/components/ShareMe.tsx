import { useLanguageStore } from "@/store/language-store";
import { QrCode } from "lucide-react";
import QRCodeGenerator from 'react-qr-code';

const ShareMe = () => {

    const { isEnglish } = useLanguageStore();

    return (
        <div className={`dropdown dropdown-bottom ${!isEnglish && "dropdown-end"} p-1 cursor-pointer max-lg:hidden | bg-white | grid place-content-center | rounded-full group transition-all border-2 border-cyan-500 hover:border-rose-600`}>
            <div 
                tabIndex={0} 
                role="button" 
                className={`w-6 h-6 md:w-7 md:h-7 text-cyan-500 group-hover:text-rose-600 transition-all grid place-content-center`}
            >
                <QrCode />
            </div>

            <ul 
                tabIndex={0} 
                className={`dropdown-content menu w-fit p-4 mt-2 z-[1] cursor-not-allowed | bg-white |  | rounded-box shadow-2xl border-2 border-cyan-500`}
            >
                <QRCodeGenerator value={"https://trial-period-project.vercel.app/"} />
            </ul>
        </div>
    )

}

export default ShareMe;

/*
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
*/

/*
"use client";

import { MonitorSmartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPWA = () => {

    const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
      const handleBeforeInstallPrompt = (e: Event) => {
        // Cast the event to BeforeInstallPromptEvent type
        const promptEvent = e as BeforeInstallPromptEvent;
        
        // Prevent the mini-info bar from appearing on mobile
        promptEvent.preventDefault();
        // Store the event so it can be triggered later
        setInstallPromptEvent(promptEvent);
      };
  
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  
      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }, []);
  
    const handleInstallClick = async () => {
      if (!installPromptEvent) return;
  
      // Show the install prompt
      installPromptEvent.prompt();
  
      // Wait for the user's response
      const choiceResult = await installPromptEvent.userChoice;
      console.log(`User response to the install prompt: ${choiceResult.outcome}`);
  
      // Clear the saved prompt event
      setInstallPromptEvent(null);
    };

    return (
        <div>
            {installPromptEvent && (
              <div className={`py-1 px-1 cursor-pointer | bg-white | grid place-content-center | rounded-full group transition-all border-2 border-fuchsia-500 hover:border-rose-600`}>
                  <button 
                      onClick={handleInstallClick}
                      className={`w-6 h-6 md:w-7 md:h-7 text-fuchsia-500 group-hover:text-rose-600 transition-all grid place-content-center`}
                  >
                    <MonitorSmartphone />
                  </button>
              </div>
            )}
        </div>
    )

}

export default InstallPWA

/*
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

*/