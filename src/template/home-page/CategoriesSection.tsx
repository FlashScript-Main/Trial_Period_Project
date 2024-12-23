"use client";

import { categories } from "@/database/db";
import { useLanguageStore } from "@/store/language-store";
import Image from "next/image";
import Link from "next/link";

const CategoriesSection = () => {

    const { isEnglish } = useLanguageStore();
    
    return (
        <section 
            className={`px-4 py-20 w-full mt-12 md:mt-24 md:max-w-[83.75rem] md:mx-auto |  |  | `}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
        >
            <h1 className={`mb-8 lg:mb-14 | text-blue-950 dark:text-blue-200 text-3xl md:text-4xl lg:text-5xl font-semibold |  | `}>
                {isEnglish ? "Browse Different Categories" : "دسته بندی های مختلف را مرور کنید."}
            </h1>
            
            <div className={`mx-auto md:w-fit |  | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6 | `}>
                {categories.map((category, index) => (
                    <div 
                        key={index}
                        className={`card max-w-[23rem] shadow-xl max-md:mx-auto | bg-slate-200 dark:bg-slate-900 |  | border-2 border-rose-500`}
                    >
                        <figure className="px-3 py-3 pt-4">
                            <Image
                                src={category.imgSrc}
                                alt={category.imgAlt}
                                width={1000}
                                height={1000}
                                className={`w-full h-[18rem] object-cover |  |  | rounded-xl`}
                            />
                        </figure>

                        <div className={`card-body p-0 m-0 mt-3 | items-center text-center |  | `}>
                            <h2 className="card-title text-xl dark:text-slate-100">
                                { isEnglish ? category.titleEn : category.titleFa }
                            </h2>

                            <p className={`px-5 | dark:text-slate-100 line-clamp-3 |  | `}>
                                { isEnglish ? category.descEn : category.descFa }
                            </p>

                            <Link  
                                href={`/category/${category.url}`}
                                className={`px-4 pt-1 ${isEnglish ? "pb-[0.05rem]" : "pb-[0.1rem]"} mt-2 mb-5 | text-yellow-400 hover:text-rose-600 bg-rose-600 hover:bg-yellow-400 text-center text-lg font-semibold | grid place-content-center |  | border-2 border-rose-600 rounded-full transition-all`}
                            >
                                {isEnglish ? "View" : "مشاهده کنید"}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default CategoriesSection