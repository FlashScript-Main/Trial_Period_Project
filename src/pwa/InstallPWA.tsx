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
