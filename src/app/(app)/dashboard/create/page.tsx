"use client";

import { categories, categoryColors } from "@/database/db";
import { useLanguageStore } from "@/store/language-store";
import { checkIcon } from "@/utils/check-data";
import { Save } from "lucide-react";
import Image from "next/image";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CreatePost = () => {

    const router = useRouter();
    const { isEnglish } = useLanguageStore();

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("education");
    const [color, setColor] = useState("red");

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`https://trial-period-server.vercel.app/posts`,
                {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'content-Type': 'application/json'
                    },
                    cache: "no-cache",
                    // next: { revalidate: 1 }
                }
            );
            const data = await response.json();
            setId(data.length);
        }

        fetchPost();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const iconResult = checkIcon(category);

        fetch(`https://trial-period-server.vercel.app/posts`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            // cache: "no-cache",
            body: JSON.stringify({
                id: id,
                titleEn: title,
                titleFa: description,
                descriptionEn: description,
                descriptionFa: description,
                contentEn: content,
                contentFa: content,
                category: category,
                icon: iconResult,
                color: color
            })
        });

        router.push("/dashboard")
    }

    return (
        <main className={` | bg-body-bg-light dark:bg-body-bg-dark | flex flex-col justify-center items-center | `}>
            <section 
                style={{ direction: isEnglish ? "ltr" : "rtl" }}
                className={`px-4 pb-16 md:pb-20 pt-24 w-full mt-12 md:mt-24 md:max-w-[83.75rem] md:mx-auto |  |  | `}
            >
                <motion.div 
                    initial={{ y: "-20%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.25, duration: 0.25, ease: "easeInOut" }}
                    className={`w-fit mx-auto |  |  | `}
                >
                    <Image 
                        src="/create-post.jpeg" 
                        alt="Edit Post"
                        width={1000} 
                        height={1000} 
                        className={`w-[18rem] md:w-[22rem] lg:w-[25rem] h-auto object-cover |  |  | rounded-[20px]`}
                    />
                </motion.div>

                <motion.h1 
                    initial={{ x: isEnglish ? "20%" : "-20%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.25, duration: 0.25, ease: "easeInOut" }}
                    className={`mt-4 md:mt-6 lg:mt-8 mb-8 md:mb-10 lg:mb-12 | dark:text-slate-300 text-2xl md:text-3xl lg:text-4xl font-bold text-center |  | `}
                >
                    {isEnglish ? "Create a New Post" : "پست جدیدی رو ایجاد کن"}
                </motion.h1>

                <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.75, duration: 0.25, ease: "easeIn" }}
                    className={`mt-6 p-6 w-full |  | flex flex-col | border-2 border-black dark:border-white`}
                >
                    <label 
                        htmlFor="title-input"
                        className={`label p-0 |  |  | `}
                    >
                        <span className={`label-text | text-lg font-semibold text-slate-600 dark:text-slate-300 |  | `}>
                            {isEnglish ? "Title:" : "عنوان:"}
                        </span>
                    </label>
                    <input 
                        type="text" 
                        id="title-input"
                        placeholder={`${isEnglish ? "Title" : "عنوان"}`}
                        // value={isEnglish ? post.titleEn : post.titleFa}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        minLength={5}
                        required
                        className={`input input-bordered mb-4 |  |  | `}
                    />

                    <label 
                        htmlFor="description-input"
                        className={`label p-0 |  |  | `}
                    >
                        <span className={`label-text | text-lg font-semibold text-slate-600 dark:text-slate-300 |  | `}>
                            {isEnglish ? "Description:" : "توضیحات:"}
                        </span>
                    </label>
                    <input 
                        type="text" 
                        id="description-input"
                        placeholder={`${isEnglish ? "Description" : "توضیحات"}`}
                        // value={isEnglish ? post.descriptionEn : post.descriptionFa}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        minLength={10}
                        required
                        className={`input input-bordered mb-4 |  |  | `}
                    />

                    <label 
                        htmlFor="content-input"
                        className={`label p-0 |  |  | `}
                    >
                        <span className={`label-text | text-lg font-semibold text-slate-600 dark:text-slate-300 |  | `}>
                            {isEnglish ? "Content:" : "محتوا:"}
                        </span>
                    </label>
                    <textarea 
                        id="content-input"
                        placeholder={`${isEnglish ? "Content" : "محتوا"}`}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        minLength={20}
                        required
                        className={`textarea textarea-bordered h-[18rem] md:h-[10rem] lg:h-[8rem] mb-4 |  |  | `}
                    />

                    <div className={`w-full |  | flex max-md:gap-4 justify-around | `}>
                        <div className={`w-[10rem] md:w-[12rem] lg:w-[14rem] |  |  | `}>
                            <label 
                                htmlFor="category-input"
                                className={`label p-0 |  |  | `}
                            >
                                <span className={`label-text | text-lg font-semibold text-slate-600 dark:text-slate-300 |  | `}>
                                    {isEnglish ? "Category:" : "دسته بندی:"}
                                </span>
                            </label>

                            <select 
                                id="category-input"
                                style={{ direction: "ltr" }}
                                className={`select select-bordered w-full max-w-xs |  |  | `} 
                                // value={post.category} 
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)}
                                // onChange={(e) => setCategory(isEnglish ? e.target.value : post.category)}
                                required
                            >
                                <option disabled selected>
                                    {isEnglish ? "Category" : "دسته بندی"}
                                </option>

                                {categories.map((category, index) => (
                                    <option 
                                        key={index}
                                        value={category.url}
                                    >
                                        {isEnglish ? category.titleEn : category.titleFa}
                                        {/* {category.url} */}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={`w-[10rem] md:w-[12rem] lg:w-[14rem] |  |  | `}>
                            <label 
                                htmlFor="color-input"
                                className={`label p-0 |  |  | `}
                            >
                                <span className={`label-text | text-lg font-semibold text-slate-600 dark:text-slate-300 |  | `}>
                                    {isEnglish ? "Color:" : "رنگ:"}
                                </span>
                            </label>

                            <select 
                                id="color-input"
                                style={{ direction: "ltr" }}
                                className={`select select-bordered w-full max-w-xs |  |  | `} 
                                // value={post.color} 
                                value={color} 
                                onChange={(e) => setColor(e.target.value)}
                                required
                            >
                                <option disabled selected>
                                    {isEnglish ? "Color" : "رنگ"}
                                </option>

                                {categoryColors.map((colorCategory, index) => (
                                    <option 
                                        key={index}
                                        value={colorCategory.color}
                                    >
                                        {isEnglish ? colorCategory.colorNameEn : colorCategory.colorNameFa}
                                        {/* {colorCategory.color} */}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <div className={`mt-6 |  | flex max-md:flex-col max-md:gap-4 | `}>
                        <button className={`w-[10rem] lg:w-[12rem] py-3 mx-auto | bg-green-400 hover:bg-green-900 text-green-900 hover:text-white font-semibold |  flex justify-center items-center gap-2 | rounded-full border-2 border-green-900 transition-all`}>
                            <Save />
                            <span className={` | ${isEnglish && "font-sans"} |  | `}>
                                {isEnglish ? "Save" : "ذخیره"}
                            </span>
                        </button>
                    </div>
                </motion.form>
            </section>
        </main>
    )

}

export default CreatePost