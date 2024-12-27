import { useLanguageStore } from "@/store/language-store";
import { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const MoreCategoryDetails = ({ categories }: { categories: RandomCategoryType[] }) => {

    const { isEnglish } = useLanguageStore();
    const [categoryCount, setCategoryCount] = useState(9);

    return (
        <>
            <div className={`mx-auto md:w-fit |  | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6 | `}>
                {categories?.slice(0, categoryCount).map((category, index) => (
                    <motion.a 
                        key={index}
                        initial={{ x: "20%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 * (index + 0.05), duration: 0.25, ease: "easeInOut" }}
                        href={"https://github.com/FlashScript-Main"}
                        target="_blank"
                        className={`card w-full max-w-[23rem] shadow-xl max-md:mx-auto | bg-slate-200 hover:bg-rose-600 dark:bg-slate-900 dark:hover:bg-sky-400 |  | group transition-all border-2 border-blue-500 hover:border-yellow-400 dark:hover:border-sky-200`}
                    >
                        <figure className="px-3 py-3 pt-4 w-full overflow-hidden">
                            <Image
                                src={category.img}
                                alt={category.english}
                                width={1000}
                                height={1000}
                                className={`w-full h-[18rem] object-cover group-hover:scale-125 |  |  | rounded-xl transition-all`}
                            />
                        </figure>

                        <div className={`card-body p-0 m-0 my-3 mb-5 | items-center text-center |  | `}>
                            <h2 className="card-title text-xl dark:text-slate-100 group-hover:text-yellow-400 dark:group-hover:text-blue-800 transition-all group-hover:scale-110">
                                { isEnglish ? category.english : category.persian }
                            </h2>
                        </div>
                    </motion.a>
                ))}
            </div>

            <button 
                onClick={() => setCategoryCount((value: number) => value + 9)}
                className={`max-md:w-full ${isEnglish ? "pt-[0.6rem] pb-2" : "py-3"} mt-10 md:mx-auto md:px-5 xl:px-6 ${categoryCount >= 29 && "hidden"} | text-yellow-400 dark:text-slate-900 hover:text-rose-600 bg-rose-600 dark:bg-slate-200 text-base font-semibold hover:bg-yellow-400 dark:hover:bg-sky-400 | flex items-center justify-center gap-3 | group border-2 border-rose-600 dark:border-sky-400 dark:hover:border-sky-900 rounded-[20px] transition-all`}
            >
                <Plus className={`w-5 h-5   |  |  | group-hover:rotate-180 transition-all`} />

                <span>
                    {isEnglish ? "Show More" : "نمایش بیشتر"}
                </span>
            </button>
        </>
    )

}

export default MoreCategoryDetails