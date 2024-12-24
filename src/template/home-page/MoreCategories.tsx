"use client";

import { useLanguageStore } from "@/store/language-store";

const MoreCategories = () => {

    const { isEnglish } = useLanguageStore();

    return (
        <section 
            className={`px-4 py-20 w-full mt-12 md:mt-24 md:max-w-[83.75rem] md:mx-auto |  |  | `}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
        >
            
        </section>
    )

}

export default MoreCategories