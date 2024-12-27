"use client";

import { SectionToScroll } from "@/animations/ScrollAnimations";
import { url_Link } from "@/constants";
// import { categories } from "@/database/db";
import useCategories from "@/hooks/useCategories";
import ErrorInterface from "@/interface/ErrorInterface";
import LoadingInterface from "@/interface/LoadingInterface";
import { useLanguageStore } from "@/store/language-store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const CategoriesSection = () => {

    const { isEnglish } = useLanguageStore();
    const [categories, setCategories] = useState<CategoryType[] | null>(null);

    const { 
        isLoading: isCategoriesLoading, 
        isError: isCategoriesError, 
    } = useCategories(url_Link.categories, setCategories);

    return (
        <section 
            className={`px-4 py-20 w-full mt-12 md:mt-24 md:max-w-[83.75rem] md:mx-auto |  |  | `}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
        >
            <SectionToScroll>
                <motion.h1 
                    initial={{ x: isEnglish ? "-20%" : "20%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.25, duration: 0.25, ease: "easeInOut" }}
                    className={`mb-8 lg:mb-14 | text-blue-950 dark:text-blue-200 text-3xl md:text-4xl lg:text-5xl font-semibold |  | `}
                >
                    {isEnglish ? "Browse Different Categories" : "دسته بندی های مختلف را مرور کنید."}
                </motion.h1>
                
                {
                    isCategoriesLoading ? (
                        <div className={`mt-20 |  |  | `}>
                            <LoadingInterface />
                        </div>
                    ) : (
                        <div className={`mx-auto md:w-fit |  | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6 | `}>
                            {categories?.map((category, index) => (
                                <motion.div 
                                    key={index}
                                    className={`card max-w-[23rem] shadow-xl max-md:mx-auto | bg-slate-200 dark:bg-slate-900 |  | border-2 border-rose-500`}
                                    initial={{ y: "20%", opacity: 0 }}
                                    whileInView={{ y: "0%", opacity: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: 0.2 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
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
                                </motion.div>
                            ))}
                        </div>
                    )
                }
                
                {isCategoriesError && <ErrorInterface />}
            </SectionToScroll>
        </section>
    )

}

export default CategoriesSection