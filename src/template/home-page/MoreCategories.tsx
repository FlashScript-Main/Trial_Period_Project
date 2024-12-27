"use client";

// import { randomCategory } from "@/database/db";
import { useLanguageStore } from "@/store/language-store";
import MoreCategoryDetails from "./MoreCategoryDetails";
import { useMemo, useRef, useState } from "react";
import { url_Link } from "@/constants";
import useRandomCategory from "@/hooks/useRandomCategory";
import LoadingInterface from "@/interface/LoadingInterface";
import ErrorInterface from "@/interface/ErrorInterface";
// import useRandom from "@/hooks/useRandom";

const MoreCategories = () => {

    const { isEnglish } = useLanguageStore();

    const ref = useRef(null);

    const [randomCategory, setRandomCategory] = useState<RandomCategoryType[] | null>(null);

    const { 
        isLoading: isRandomCategoryLoading,
        isError: isRandomCategoryError
    } = useRandomCategory(url_Link.random_category, setRandomCategory);

    const randomCategoryResult = useMemo(() => {
        return randomCategory?.sort(() => Math.random() - 0.5);
    }, [randomCategory]);
    
    return (
        <section 
            ref={ref}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
            className={`px-4 pt-0 pb-12 md:pb-16 w-full md:max-w-[83.75rem] md:mx-auto |  |  | `}
        >
            {
                isRandomCategoryLoading ? <LoadingInterface/> : <MoreCategoryDetails categories={randomCategoryResult!} />
            }

            { isRandomCategoryError && <ErrorInterface />}
        </section>
    )

}

export default MoreCategories