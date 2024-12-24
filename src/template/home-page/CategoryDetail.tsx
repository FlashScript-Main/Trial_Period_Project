"use client";

import { useLanguageStore } from "@/store/language-store";
import Image from "next/image";

const CategoryDetail = ({ category }: CategoryDetailProps) => {

    const { isEnglish } = useLanguageStore();
    
    return (
        <section 
            className={`px-4 py-20 w-full mt-12 md:mt-24 md:max-w-[83.75rem] md:mx-auto |  |  | `}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
        >
            <div>
                <Image 
                    src={category.imgSrc}
                    alt={category.imgAlt}
                    width={1000}
                    height={1000}
                    className={`w-full h-[18rem] md:h-[22rem] lg:h-[26rem] object-cover |  |  | rounded-xl`}
                />
            </div>

            <h1 className={`mb-8 lg:mb-14 mt-6 md:mt-10 lg:mt-12 xl:mt-14 | text-blue-950 dark:text-blue-200 text-4xl md:text-5xl lg:text-6xl font-semibold text-center |  | `}>
                {isEnglish ? `${category.titleEn} Category` : `دسته بندی ${category.titleFa}`}
            </h1>

            <p className={`px-5 | dark:text-slate-100 text-lg md:text-xl lg:text-2xl |  | `}>
                {isEnglish ? category.descEn : category.descFa}
            </p>
        </section>
    )

}

export default CategoryDetail