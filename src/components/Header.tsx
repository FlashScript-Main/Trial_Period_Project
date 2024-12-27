"use client";

import { LanguageToggle } from "@/language/langauge-toggle"
import { useLanguageStore } from "@/store/language-store";
import useUserStore from "@/store/useUserStore";
import { ModeToggle } from "@/theme/mode-toggle"
import { iranSans } from "@/utils/fonts";
import { UserCog, UserPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

    const { isEnglish } = useLanguageStore();
    const { username } = useUserStore();

    return (
        <header 
            className={`w-full py-4 px-4 md:py-6 fixed top-0 z-[99] | bg-slate-300 dark:bg-slate-700 ${iranSans} |  | border-b-2 border-b-black dark:border-b-white`}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
        >
            <nav className={`w-full md:w-11/12 xl:w-[70rem] md:mx-auto |  | flex justify-between items-center | `}>
                <Link 
                    href={"/"}
                    className={` |  | flex justify-center items-center gap-2 | group transition-all`}
                >
                    <Image 
                        src="/flashscript-logo.jpeg" 
                        alt="FlashScript Logo" 
                        width={100} 
                        height={100} 
                        className={`w-12 h-12 md:w-14 md:h-14 |  |  | rounded-full border border-slate-300 dark:border-slate-700 group-hover:border-slate-700 dark:group-hover:border-slate-300 transition-colors`}
                    />
                    <span className={`hidden md:block md:my-auto | text-2xl font-semibold text-black dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-300 |  | `}>
                        {isEnglish ? "FlashScript Trial Project" : "پروژه آزمایشی فلش اسکریپت"}
                    </span>
                </Link>

                <div className={` | flex justify-center items-center gap-4 lg:gap-8 |  | `}>
                    <div className={` | flex justify-center items-center gap-2 md:gap-4 |  | border-2 border-indigo-500`}>
                        <ModeToggle />

                        <LanguageToggle />

                        <div>
                            PWA
                        </div>
                    </div>

                    {
                        username === "" ? (
                            <Link
                                href={"/sign-up"}
                                className={`px-2 py-2 lg:px-4 | text-slate-700 dark:text-slate-300 hover:bg-white | flex items-center gap-2 | border-2 border-rose-600 rounded-full md:rounded-[20px] transition-all group`}
                            >
                                <UserPen className={` | group-hover:text-rose-600 |  | transition-all`} />
                                <span className={`hidden lg:block | group-hover:text-rose-600 text-base lg:text-xl font-semibold |  | transition-all`}>
                                    {isEnglish ? "Sign Up" : "ثبت نام"}
                                </span>
                            </Link>
                        ) : (
                            <Link
                                href={"/dashboard"}
                                className={`px-2 py-2 lg:px-4 | text-slate-700 dark:text-slate-300 hover:bg-white | flex items-center gap-2 | border-2 border-rose-600 rounded-full md:rounded-[20px] transition-all group`}
                            >
                                <UserCog className={` | group-hover:text-rose-600 |  | transition-all`} />
                                <span className={`hidden lg:block | group-hover:text-rose-600 text-base lg:text-xl font-semibold |  | transition-all`}>
                                    {isEnglish ? "Dashboard" : "داشبورد"}
                                </span>
                            </Link>
                        )
                    }
                </div>
            </nav>
        </header>
    )

}

export default Header