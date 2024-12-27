"use client";

import { useLanguageStore } from "@/store/language-store";
// import axios from "axios"
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
import { 
    CircleX,
    Cpu, 
    Cross, 
    Drama, 
    Gamepad2, 
    GraduationCap, 
    House, 
    NotebookPen, 
    NotepadText, 
    Pizza, 
    Plane, 
    Save, 
    Trash2, 
    Trophy, 
    TvMinimalPlay 
} from "lucide-react";
import { categories, categoryColors } from "@/database/db";
import { checkIcon } from "@/utils/check-data";
import { motion } from "framer-motion";

type ReadPostProps = {
    params: {
        id: string
    }
}

const ReadPost = ({ params: { id } }: ReadPostProps) => {

    const router = useRouter();
    
    const searchQuery = useSearchParams();
    const mode = searchQuery.get("mode");

    const { isEnglish } = useLanguageStore();

    const [post, setPost] = useState<PostType | null>(null);
    const [editing, setEditing] = useState(mode === "edit");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");

    // I've created a state object to store the post data
    // const [postStateObject, setPostStateObject] = useState({
    //     title: "",
    //     description: "",
    //     content: "",
    //     category: "",    
    //     color: "",
    // });

    const [refetchPost, setRefetchPost] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`https://trial-period-server.vercel.app/posts/${id}`,
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
            setPost(data);
            setTitle(data.titleEn);
            setDescription(data.descriptionEn);
            setContent(data.contentEn);
            setCategory(data.category);
            setColor(data.color);
            // const response = await axios.get(`https://trial-period-server.vercel.app/posts/${id}`);
            // setPost(response.data);
            // setTitle(response.data.title);
            // setDescription(response.data.description);
            // setContent(response.data.content);
            // setCategory(response.data.category);
            // setColor(response.data.color);
        }

        if(id) {
            fetchPost();
        }
    }, [id]);

    useEffect(() => {
        if(mode === "edit") {
            setEditing(true);
        }
    }, [mode]);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const iconResult = checkIcon(category);

        fetch(`https://trial-period-server.vercel.app/posts/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            // cache: "no-cache",
            // next: { revalidate: 5 },
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
        // await axios.put(`http://localhost:3001/posts/${id}`, {
        //     title,
        //     content
        // });

        setEditing(false);
        setRefetchPost(true);

        // const fetchPost = async () => {
        //     const response = await fetch(`https://trial-period-server.vercel.app/posts/${id}`, {
        //         method: "PUT",
        //         headers: {
        //             'Accept': 'application/json',
        //             'content-Type': 'application/json'
        //         },
        //         cache: "no-cache",
        //         next: { revalidate: 5 }
        //     });
        //     const data = await response.json();
        //     console.log(data)
        //     setPost(data);
        //     setTitle(data.title);
        //     setDescription(data.description);
        //     setContent(data.content);
        //     setCategory(data.category);
        //     setColor(data.color);
        // }
        // fetchPost();
        router.push("/dashboard")
    }
    
    useEffect(() => {
        if(refetchPost) {
            const fetchPost = async () => {
                const response = await fetch(`https://trial-period-server.vercel.app/posts/${id}`,
                    {
                        method: "GET",
                        headers: {
                            'Accept': 'application/json',
                            'content-Type': 'application/json'
                        },
                        cache: "no-cache",
                        // next: { revalidate: 5 }
                    }
                );
                const data = await response.json();
                setPost(data);
                setTitle(data.titleEn);
                setDescription(data.descriptionEn);
                setContent(data.contentEn);
                setCategory(data.category);
                setColor(data.color);
                setRefetchPost(false);
            }
            fetchPost();
        }
    }, [refetchPost, id]);

    const handleDelete = () => {
        fetch(`https://trial-period-server.vercel.app/posts/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            }
        })
        router.push("/dashboard");
    }

    return (
        <main className={`md:py-20 lg:py-24 overflow-x-hidden | bg-body-bg-light dark:bg-body-bg-dark | flex flex-col justify-center items-center | `}>
            <section
                style={{ direction: isEnglish ? "ltr" : "rtl" }}
                className={`px-4 max-md:py-20 w-full mt-12 md:mt-24 md:max-w-[83.75rem] md:mx-auto |  |  | `}
            >
                <motion.div 
                    initial={{ y: "-20%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.25, duration: 0.25, ease: "easeInOut" }}
                    className={`w-fit mx-auto |  |  | `}
                >
                    <Image 
                        src={editing ? "/edit-post.jpeg" : "/read-post.jpeg"} 
                        alt={editing ? "Edit Post" : "Read Post"}
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
                    className={`mt-4 mb-6 | text-3xl md:text-4xl lg:text-5xl text-center font-semibold dark:text-slate-300 |  | `}
                >
                    {editing ? `${isEnglish ? "Edit Post" : "ویرایش پست"}` : `${isEnglish ? "Read Post" : "مطالعه پست"}`}
                </motion.h1>

                {post && (
                    <div className="flex flex-col items-center">
                        {editing ? (
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
                                            className={`select select-bordered w-full max-w-xs |  |  | `} 
                                            // value={post.category} 
                                            value={category} 
                                            onChange={(e) => setCategory(e.target.value)}
                                            // onChange={(e) => setCategory(isEnglish ? e.target.value : post.category)}
                                        >
                                            {categories.map((category, index) => (
                                                <option 
                                                    key={index}
                                                    selected={category.url === post.category}
                                                    className={`${category.url === post.category && "hidden"} |  |  | `}
                                                >
                                                    {/* {isEnglish ? category.titleEn : category.titleFa} */}
                                                    {category.url}
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
                                        >
                                            <option disabled selected>
                                                {isEnglish ? "Color" : "رنگ"}
                                            </option>

                                            {categoryColors.map((colorCategory, index) => (
                                                <option 
                                                    key={index}
                                                    selected={colorCategory.color === post.color}
                                                    value={colorCategory.color === post.color ? post.color : colorCategory.color}
                                                    className={`${colorCategory.color === post.color && "hidden"} |  |  | `}
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

                                    <div
                                        onClick={() => setEditing(!editing)} 
                                        className={`w-[10rem] lg:w-[12rem] py-3 mx-auto cursor-pointer | bg-orange-400 hover:bg-orange-900 text-orange-900 hover:text-white font-semibold |  flex justify-center items-center gap-2 | rounded-full border-2 border-orange-900 transition-all`}
                                    >
                                        <CircleX />
                                        <span className={` | ${isEnglish && "font-sans"} |  | `}>
                                            {isEnglish ? "Cancel" : "لغو"}
                                        </span>
                                    </div>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: 0.75, duration: 0.25, ease: "easeIn" }}
                                className={`mt-5 w-full | text-start |  | `}
                            >
                                <h3 className={`mb-3 | text-black dark:text-white text-xl md:text-2xl font-semibold | flex flex-col gap-2 | `}>
                                    <span className={` | text-slate-600 dark:text-slate-300 font-sans |  | `}>
                                        {isEnglish ? "Title:" : "عنوان:"}
                                    </span>
                                    <span>
                                        {isEnglish ? post.titleEn : post.titleFa}
                                    </span>
                                </h3>

                                <h5 className={`mb-3 | text-black dark:text-white text-lg md:text-xl font-semibold | flex flex-col gap-2 | `}>
                                    <span className={` | text-slate-600 dark:text-slate-300 font-sans text-xl md:text-2xl font-semibold |  | `}>
                                        {isEnglish ? "Description:" : "توضیحات:"}
                                    </span>
                                    <span>
                                        {isEnglish ? post.descriptionEn : post.descriptionFa}
                                    </span>
                                </h5>

                                <p className={`mb-3 | text-black dark:text-white text-base md:text-lg | flex flex-col gap-2 | `}>
                                    <span className={` | text-slate-600 dark:text-slate-300 font-sans text-xl md:text-2xl font-semibold |  | `}>
                                        {isEnglish ? "Content:" : "محتوا:"}
                                    </span>
                                    <span>
                                        {isEnglish ? post.contentEn : post.contentFa}
                                    </span>
                                </p>

                                <p className={`mb-3 | text-black dark:text-white text-base md:text-lg | flex gap-2 | `}>
                                    <span className={` | text-slate-600 dark:text-slate-300 font-sans text-xl md:text-2xl font-semibold |  | `}>
                                        {isEnglish ? "Category:" : "دسته بندی:"}
                                    </span>
                                    <Link
                                        href={`/category/${post.category}`}
                                        className={`
                                            py-2 px-6 | w-fit text-slate-200 hover:bg-slate-200 | flex justify-center items-center gap-2 | rounded-full border-2 transition-all
                                            ${post.color === "blue" && "bg-blue-500 border-blue-500 hover:text-blue-500"}
                                            ${post.color === "red" && "bg-red-500 border-red-500 hover:text-red-500"}
                                            ${post.color === "green" && "bg-green-500 border-green-500 hover:text-green-500"}
                                            ${post.color === "yellow" && "bg-yellow-500 border-yellow-500 hover:text-yellow-500"}
                                            ${post.color === "pink" && "bg-pink-500 border-pink-500 hover:text-pink-500"}
                                            ${post.color === "purple" && "bg-purple-500 border-purple-500 hover:text-purple-500"}
                                            ${post.color === "orange" && "bg-orange-500 border-orange-500 hover:text-orange-500"}
                                            ${post.color === "indigo" && "bg-indigo-500 border-indigo-500 hover:text-indigo-500"}
                                            ${post.color === "lime" && "bg-lime-500 border-lime-500 hover:text-lime-500"}
                                        `}
                                    >   
                                        <span>
                                            {post.icon === "Plane" && <Plane />}
                                            {post.icon === "GraduationCap" && <GraduationCap />}
                                            {post.icon === "TvMinimalPlay" && <TvMinimalPlay />}
                                            {post.icon === "Drama" && <Drama />}
                                            {post.icon === "Pizza" && <Pizza />}
                                            {post.icon === "Gamepad2" && <Gamepad2 />}
                                            {post.icon === "Cross" && <Cross />}
                                            {post.icon === "Trophy" && <Trophy />}
                                            {post.icon === "Cpu" && <Cpu />}
                                        </span>

                                        <span>
                                            {post.category === "education" && (isEnglish ? "Education" : "آموزش")}
                                            {post.category === "entertainment" && (isEnglish ? "Entertainment" : "تفریح")}
                                            {post.category === "fashion" && (isEnglish ? "Fashion" : "مد")}
                                            {post.category === "food" && (isEnglish ? "Food" : "غذا")}
                                            {post.category === "game" && (isEnglish ? "Game" : "بازی")}
                                            {post.category === "health" && (isEnglish ? "Health" : "سلامت")}
                                            {post.category === "sports" && (isEnglish ? "Sport" : "ورزش")}
                                            {post.category === "technology" && (isEnglish ? "Technology" : "فناوری")}
                                            {post.category === "travel" && (isEnglish ? "Travel" : "مسافرت")}
                                        </span>
                                    </Link>
                                </p>
                            </motion.div>
                        )}
                    </div>
                )}

                <motion.div 
                    initial={{ y: "20%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 1.5, duration: 0.25, ease: "easeInOut" }}
                    className={`mt-10 py-10 px-20 max-w-[50rem] mx-auto |  | flex justify-center lg:justify-between items-center gap-8 | rounded-[20px] border-2 border-black dark:border-white`}
                >
                    <button 
                        onClick={() => router.push("/dashboard")}
                        className={`w-fit py-3 max-md:px-3 | bg-blue-400 hover:bg-blue-900 text-blue-900 hover:text-white font-semibold | basis-1/3 flex justify-center items-center gap-2 | rounded-full border-2 border-blue-900 transition-all`}
                    >
                        <span>
                            <House size={20} />
                        </span>
                        <span className={`max-md:hidden | ${isEnglish && "font-sans"} |  | `}>
                            {isEnglish ? "Home" : "خانه"}
                        </span>
                    </button>

                    <button 
                        onClick={() => setEditing(!editing)}
                        className={`w-fit py-3 max-md:px-3 | bg-green-400 hover:bg-green-900 text-green-900 hover:text-white font-semibold | basis-1/3 flex justify-center items-center gap-2 | rounded-full border-2 border-green-900 transition-all`}
                    >
                        {
                            editing ? (
                                <>
                                    <span>
                                        <NotepadText size={20} />
                                    </span>
                                    <span className={`max-md:hidden | ${isEnglish && "font-sans"} |  | `}>
                                        {isEnglish ? "Read" : "مطالعه"}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span>
                                        <NotebookPen size={20} />
                                    </span>
                                    <span className={`max-md:hidden | ${isEnglish && "font-sans"} |  | `}>
                                        {isEnglish ? "Edit" : "ویرایش"}
                                    </span>
                                </>
                            )
                        }
                    </button>

                    <button 
                        onClick={handleDelete}
                        className={`w-fit py-3 max-md:px-3 | bg-red-400 hover:bg-red-900 text-red-900 hover:text-white font-semibold | basis-1/3 flex justify-center items-center gap-2 | rounded-full border-2 border-red-900 transition-all`}
                    >
                        <span>
                            <Trash2 size={20} />
                        </span>
                        <span className={`max-md:hidden | ${isEnglish && "font-sans"} |  | `}>
                            {isEnglish ? "Delete" : "حذف"}
                        </span>
                    </button>
                </motion.div>
            </section>
        </main>
    )

}

export default ReadPost