"use client";

import { useLanguageStore } from "@/store/language-store";

const Footer = () => {

    const { isEnglish } = useLanguageStore();

    return (
        <footer className={`h-[4rem] md:h-[6rem] w-full z-10 | bg-gradient-to-r from-yellow-400 dark:from-indigo-500 from-10% via-orange-500 dark:via-sky-500 via-30% to-rose-600 dark:to-emerald-500 to-90% | grid place-content-center | `}>
            {isEnglish ? (
                <h4 className={` | text-white text-xl font-semibold | flex gap-[0.4rem] | `}>
                    <span className={`hidden md:block |  |  | `}>
                        This Website was made by 
                    </span>
                    <a 
                        href="https://github.com/FlashScript-Main/Trial_Period_Project"
                        target="_blank"
                        className={` | text-black hover:text-yellow-400 dark:hover:text-blue-800 |  | transition-colors`}
                    >
                        FlashScript
                    </a>
                </h4>
            ) : (
                <h4 className={` | text-white text-xl font-semibold | flex flex-row-reverse gap-[0.4rem] | `}>
                    <span className={`hidden md:block |  |  | `}>
                        این وبسایت توسط 
                    </span>
                    <a 
                        href="https://github.com/FlashScript-Main/Trial_Period_Project"
                        target="_blank"
                        className={` | text-black hover:text-yellow-400 dark:hover:text-blue-800 |  | transition-colors`}
                    >
                        فلش اسکریپت
                    </a>
                    <span className={`hidden md:block |  |  | `}>
                        ساخته شده است
                    </span>
                </h4>
            )}
        </footer>
    )

}

export default Footer