"use client";

import { useLanguageStore } from "@/store/language-store";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const CategoryDetail = ({ category }: CategoryDetailProps) => {

    const { isEnglish } = useLanguageStore();
    
    const ref = useRef(null);

    return (
        <section 
            ref={ref}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
            className={`px-4 py-20 w-full mt-12 md:mt-24 md:max-w-[83.75rem] md:mx-auto |  |  | `}
        >
            <motion.div
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.25, duration: 0.25, ease: "easeInOut" }}
            >
                <Image 
                    src={category.imgSrc}
                    alt={category.imgAlt}
                    width={1000}
                    height={1000}
                    className={`w-full h-[18rem] md:h-[22rem] lg:h-[26rem] object-cover |  |  | rounded-xl`}
                />
            </motion.div>

            <motion.h1 
                initial={{ x: isEnglish ? "-20%" : "20%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.25, duration: 0.25, ease: "easeInOut" }}
                className={`mb-8 lg:mb-14 mt-6 md:mt-10 lg:mt-12 xl:mt-14 | text-blue-950 dark:text-blue-200 text-4xl md:text-5xl lg:text-6xl font-semibold text-center |  | `}
            >
                {isEnglish ? `${category.titleEn} Category` : `دسته بندی ${category.titleFa}`}
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
                className={`px-5 | dark:text-slate-100 text-lg md:text-xl lg:text-2xl |  | `}
            >
                {isEnglish ? category.descEn : category.descFa}
            </motion.p>
        </section>
    )

}

export default CategoryDetail