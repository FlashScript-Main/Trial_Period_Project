"use client";

import { useLanguageStore } from "@/store/language-store";
import { useEffect } from "react";

export function LanguageToggle() {
    const { toggleLanguage, isEnglish } = useLanguageStore()

    useEffect(() => {
        useLanguageStore.persist.rehydrate();
    }, []);

    return (
        <label 
            className={`swap swap-flip pt-[0.3rem] pb-[0.2rem] ${isEnglish ? "px-[0.5rem] md:py-1" : "px-[0.4rem] md:pt-1 md:pb-[0.1rem]"} md:px-2 cursor-pointer | bg-white | grid place-content-center | rounded-full group transition-colors border-2 border-green-500 hover:border-rose-600 dark:hover:border-red-600`}
            // onClick={() => toggleLanguage(isEnglish ? false : true)}
        >
            <input 
                type="checkbox" 
                onClick={() => toggleLanguage(isEnglish ? false : true)}
            /> 

            <div className={`max-md:hidden | text-lg font-semibold group-hover:text-rose-600 |  | transition-colors`}>
                {isEnglish ? "فارسی" : "English"}
            </div>

            <div className={`md:hidden | text-base font-semibold group-hover:text-rose-600 |  | transition-colors`}>
                {isEnglish ? "FA" : "EN"}
            </div>
            {/* 
            <div className={`swap-on`}>{isEnglish ? "English" : "فارسی"}</div>
            <div className={`swap-off`}>{isEnglish ? "English" : "فارسی"}</div> 
            */}
        </label>
    )
}
