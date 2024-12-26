"use client";

import { useLanguageStore } from "@/store/language-store";
import Image from "next/image";

const NotFoundCategory = () => {

    const { isEnglish } = useLanguageStore();
    
    return (
        <section
            className={`min-h-screen |  | grid place-content-center text-center | `}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
        >
            <h1 className={`mb-8 mt-12 | dark:text-slate-100 text-4xl font-semibold |  | `}>
                {isEnglish ? "Not Found Category" : "دسته بندی پیدا نشد!"}
            </h1>

            <Image 
                src="/404-category.jpeg"
                alt="404-category"
                width={1000}
                height={1000}
                className={`w-full h-[18rem] md:h-[22rem] object-cover |  |  | rounded-xl`}
            />

            <p className={`mt-12 | dark:text-slate-100 text-lg |  | `}>
                {isEnglish ? "The category you are looking for does not exist." : "دسته بندی مورد نظر شما وجود ندارد."}
            </p>
        </section>
    )

}

export default NotFoundCategory